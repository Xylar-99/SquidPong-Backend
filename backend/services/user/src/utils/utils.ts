import fs from 'fs';
import { pipeline } from 'stream/promises';
import { FastifyRequest } from 'fastify';




export async function convertParsedMultipartToJson(req: FastifyRequest): Promise<any> {
  const rawBody = req.body as any;
  const data: Record<string, any> = {};
  let filePath: string | undefined;

  for (const key in rawBody) 
    {
    const field = rawBody[key];

    if (field?.type === 'file') 
    {
      filePath = `/tmp/images/${Date.now()}-${field.filename}`;
      await pipeline(field.file, fs.createWriteStream(filePath));
      data[key] = `${process.env.URL}${filePath}`;
    } 
    else if (field?.type === 'field') 
      data[key] = field.value;
  }

  return { ...data };
}