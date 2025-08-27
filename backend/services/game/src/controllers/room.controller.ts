import { FastifyRequest, FastifyReply } from "fastify";
import redis from "../integration/redisClient";
import { ApiResponse } from "../utils/errorHandler";



interface Room {
  id: string;
  players: string[];
  spectators: string[];
  state: any;
}


export async function createRoomHandler(req: FastifyRequest, res: FastifyReply)
{
  const body = req.body as { roomId: string; playerIds: string[] };
  const respond: ApiResponse<null> = { success: true, message: "Room created successfully" };

  const room: Room = {
    id: body.roomId,
    players: body.playerIds,
    spectators: [],
    state: {},
  };

  try 
  {
    await redis.set(`room:${room.id}`, JSON.stringify(room));
  } 
  catch (error) 
  {
    respond.success = false;
    if (error instanceof Error) respond.message = error.message;
    return res.status(400).send(respond);
  }

  return res.send(respond);
}



export async function joinRoomHandler(req: FastifyRequest, res: FastifyReply) 
{

  const body = req.body as { roomId: string };
  const respond: ApiResponse<null> = { success: true, message: "Joined room successfully" };
  const headers = req.headers as any;
  const playerId = headers['x-user-id']

  // i miss   verify is as friend  or not  not any player can join only friends // change later
  try 
  {
    const roomStr = await redis.get(`room:${body.roomId}`);
    if (!roomStr) throw new Error("Room not found");

    const room: Room = JSON.parse(roomStr);
    if (!room.players.includes(playerId)) room.players.push(playerId);

    await redis.set(`room:${room.id}`, JSON.stringify(room));
  } 
  catch (error) 
  {
    respond.success = false;
    if (error instanceof Error) respond.message = error.message;
    return res.status(400).send(respond);
  }

  return res.send(respond);
}



export async function joinSpectatorHandler(req: FastifyRequest, res: FastifyReply) 
{
  const body = req.body as { roomId: string };
  const respond: ApiResponse<null> = { success: true, message: "Joined as spectator" };

  const headers = req.headers as any;
  const spectatorId = headers['x-user-id']

  try 
  {
    const roomStr = await redis.get(`room:${body.roomId}`);
    if (!roomStr) throw new Error("Room not found");

    const room: Room = JSON.parse(roomStr);
    if (!room.spectators.includes(spectatorId)) room.spectators.push(spectatorId);

    await redis.set(`room:${room.id}`, JSON.stringify(room));
  } 
  catch (error) 
  {
    respond.success = false;
    if (error instanceof Error) respond.message = error.message;
    return res.status(400).send(respond);
  }

  return res.send(respond);
}


export async function getRoomStatusHandler(req: FastifyRequest, res: FastifyReply) 
{
  const roomId = (req.params as any).roomId;
  const respond: ApiResponse<Room> = { success: true, message: "Room status" };

  try 
  {
    const roomStr = await redis.get(`room:${roomId}`);
    if (!roomStr) throw new Error("Room not found");

    const room: Room = JSON.parse(roomStr);
    respond.data = room;
  } 
  catch (error) 
  {
    respond.success = false;
    if (error instanceof Error) respond.message = error.message;
    return res.status(400).send(respond);
  }

  return res.send(respond);
}


export async function leaveRoomHandler(req: FastifyRequest, res: FastifyReply) 
{

  const roomId = (req.params as any).roomId;
  const headers = req.headers as any;
  const userId = headers['x-user-id'];

  const respond: ApiResponse<null> = { success: true, message: "Left room successfully" };

  if (!userId) 
  {
    respond.success = false;
    respond.message = "Missing x-user-id header";
    return res.status(400).send(respond);
  }

  try 
  {
    const roomStr = await redis.get(`room:${roomId}`);
    if (!roomStr) throw new Error("Room not found");

    const room: Room = JSON.parse(roomStr);

    if (room.players.includes(userId)) room.players = room.players.filter(id => id !== userId);
    if (room.spectators.includes(userId)) room.spectators = room.spectators.filter(id => id !== userId);

    await redis.set(`room:${room.id}`, JSON.stringify(room));
  } 
  catch (error) 
  {
    respond.success = false;
    if (error instanceof Error) respond.message = error.message;
    return res.status(400).send(respond);
  }

  return res.send(respond);
}