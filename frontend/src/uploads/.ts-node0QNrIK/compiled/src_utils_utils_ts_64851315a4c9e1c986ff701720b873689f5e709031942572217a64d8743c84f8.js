"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFriendRequestExists = isFriendRequestExists;
exports.convertMultipartToJson = convertMultipartToJson;
const database_1 = __importDefault(require("../db/database"));
const fs_1 = __importDefault(require("fs"));
const promises_1 = require("stream/promises");
async function isFriendRequestExists(friendata) {
    const existing = await database_1.default.friendship.findFirst({
        where: {
            status: friendata.status,
            OR: [
                { userId: friendata.userId, friendId: friendata.friendId },
                { userId: friendata.friendId, friendId: friendata.userId }
            ]
        }
    });
    return (existing);
}
async function convertMultipartToJson(req) {
    const parts = await req.parts();
    const data = {};
    let filePath;
    for await (const part of parts) {
        if (part.type == 'file') {
            filePath = `/tmp/images/${Date.now()}-${part.filename}`;
            await (0, promises_1.pipeline)(part.file, fs_1.default.createWriteStream(filePath));
            data['avatar'] = `${process.env.URL}${filePath}`;
        }
        else
            data[part.fieldname] = part.value;
    }
    const result = {
        ...data,
    };
    return result;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3VzZXIvc3JjL3V0aWxzL3V0aWxzLnRzIiwic291cmNlcyI6WyIvdXNlci9zcmMvdXRpbHMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFNQSxzREFhQztBQU9ELHdEQXlCQztBQW5ERCw4REFBb0M7QUFDcEMsNENBQW9CO0FBQ3BCLDhDQUEyQztBQUlwQyxLQUFLLFVBQVUscUJBQXFCLENBQUMsU0FBYTtJQUVyRCxNQUFNLFFBQVEsR0FBRyxNQUFNLGtCQUFNLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQztRQUMvQyxLQUFLLEVBQUU7WUFDTCxNQUFNLEVBQUUsU0FBUyxDQUFDLE1BQU07WUFDeEIsRUFBRSxFQUFFO2dCQUNGLEVBQUUsTUFBTSxFQUFFLFNBQVMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLFNBQVMsQ0FBQyxRQUFRLEVBQUU7Z0JBQzFELEVBQUUsTUFBTSxFQUFFLFNBQVMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFNBQVMsQ0FBQyxNQUFNLEVBQUU7YUFDM0Q7U0FDRjtLQUNGLENBQUMsQ0FBQztJQUVMLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN0QixDQUFDO0FBT00sS0FBSyxVQUFVLHNCQUFzQixDQUFDLEdBQW1CO0lBRTVELE1BQU0sS0FBSyxHQUFHLE1BQU0sR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFFO0lBRWpDLE1BQU0sSUFBSSxHQUF3QixFQUFFLENBQUM7SUFDckMsSUFBSSxRQUFRLENBQUM7SUFFYixJQUFJLEtBQUssRUFBRSxNQUFNLElBQUksSUFBSSxLQUFLLEVBQzlCLENBQUM7UUFDRyxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksTUFBTSxFQUN2QixDQUFDO1lBQ0csUUFBUSxHQUFHLGVBQWUsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN4RCxNQUFNLElBQUEsbUJBQVEsRUFBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFlBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQzFELElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLFFBQVEsRUFBRSxDQUFDO1FBQ3JELENBQUM7O1lBRUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBZSxDQUFDO0lBQ3BELENBQUM7SUFHRCxNQUFNLE1BQU0sR0FBRztRQUNiLEdBQUcsSUFBSTtLQUNSLENBQUM7SUFFRixPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByaXNtYSBmcm9tIFwiLi4vZGIvZGF0YWJhc2VcIjtcbmltcG9ydCBmcyBmcm9tICdmcyc7XG5pbXBvcnQgeyBwaXBlbGluZSB9IGZyb20gJ3N0cmVhbS9wcm9taXNlcyc7XG5pbXBvcnQgeyBGYXN0aWZ5UmVxdWVzdCB9IGZyb20gJ2Zhc3RpZnknO1xuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpc0ZyaWVuZFJlcXVlc3RFeGlzdHMoZnJpZW5kYXRhOmFueSkgOiBQcm9taXNlPGFueT5cbntcbiAgICBjb25zdCBleGlzdGluZyA9IGF3YWl0IHByaXNtYS5mcmllbmRzaGlwLmZpbmRGaXJzdCh7XG4gICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgc3RhdHVzOiBmcmllbmRhdGEuc3RhdHVzLFxuICAgICAgICAgIE9SOiBbXG4gICAgICAgICAgICB7IHVzZXJJZDogZnJpZW5kYXRhLnVzZXJJZCwgZnJpZW5kSWQ6IGZyaWVuZGF0YS5mcmllbmRJZCB9LFxuICAgICAgICAgICAgeyB1c2VySWQ6IGZyaWVuZGF0YS5mcmllbmRJZCwgZnJpZW5kSWQ6IGZyaWVuZGF0YS51c2VySWQgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICByZXR1cm4gKGV4aXN0aW5nKTtcbn1cblxuXG5cblxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb252ZXJ0TXVsdGlwYXJ0VG9Kc29uKHJlcTogRmFzdGlmeVJlcXVlc3QpIDogUHJvbWlzZTxhbnk+XG57XG4gICAgY29uc3QgcGFydHMgPSBhd2FpdCByZXEucGFydHMoKSA7XG4gIFxuICAgIGNvbnN0IGRhdGE6IFJlY29yZDxzdHJpbmcsIGFueT4gPSB7fTtcbiAgICBsZXQgZmlsZVBhdGg7XG4gIFxuICAgIGZvciBhd2FpdCAoY29uc3QgcGFydCBvZiBwYXJ0cylcbiAgICB7XG4gICAgICAgIGlmIChwYXJ0LnR5cGUgPT0gJ2ZpbGUnKVxuICAgICAgICB7XG4gICAgICAgICAgICBmaWxlUGF0aCA9IGAvdG1wL2ltYWdlcy8ke0RhdGUubm93KCl9LSR7cGFydC5maWxlbmFtZX1gO1xuICAgICAgICAgICAgYXdhaXQgcGlwZWxpbmUocGFydC5maWxlLCBmcy5jcmVhdGVXcml0ZVN0cmVhbShmaWxlUGF0aCkpO1xuICAgICAgICAgICAgZGF0YVsnYXZhdGFyJ10gPSBgJHtwcm9jZXNzLmVudi5VUkx9JHtmaWxlUGF0aH1gO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIGRhdGFbcGFydC5maWVsZG5hbWVdID0gcGFydC52YWx1ZSBhcyBzdHJpbmc7XG4gICAgfVxuXG5cbiAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICAuLi5kYXRhLFxuICAgIH07XG4gIFxuICAgIHJldHVybiByZXN1bHQ7XG59XG4iXX0=