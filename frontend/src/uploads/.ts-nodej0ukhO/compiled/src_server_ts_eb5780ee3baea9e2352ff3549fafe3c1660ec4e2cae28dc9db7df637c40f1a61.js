"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const app_1 = __importDefault(require("./app"));
const rabbitmqClient_1 = require("./integration/rabbitmqClient");
dotenv_1.default.config();
const port = Number(process.env.PORT);
const host = process.env.HOST;
async function fastifyserver() {
    try {
        app_1.default.listen({ port: port, host: host }, () => { console.log(`server listen on http://${host}:${port} ...`); });
    }
    catch (error) {
        console.log("error in server");
        process.exit(1);
    }
}
async function start() {
    fastifyserver();
    await (0, rabbitmqClient_1.initRabbitMQ)();
    await (0, rabbitmqClient_1.receiveFromQueue)("friend");
}
start();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3VzZXIvc3JjL3NlcnZlci50cyIsInNvdXJjZXMiOlsiL3VzZXIvc3JjL3NlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG9EQUE0QjtBQUM1QixnREFBdUI7QUFDdkIsaUVBQStFO0FBQy9FLGdCQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFaEIsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDdEMsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7QUFHOUIsS0FBSyxVQUFVLGFBQWE7SUFHeEIsSUFDQSxDQUFDO1FBQ0csYUFBRyxDQUFDLE1BQU0sQ0FBQyxFQUFDLElBQUksRUFBRyxJQUFJLEVBQUcsSUFBSSxFQUFHLElBQUksRUFBQyxFQUFHLEdBQUcsRUFBRSxHQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLElBQUksSUFBSSxJQUFJLE1BQU0sQ0FBQyxDQUFBLENBQUEsQ0FBQyxDQUFDLENBQUE7SUFDaEgsQ0FBQztJQUNELE9BQU8sS0FBSyxFQUNaLENBQUM7UUFDRyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUE7UUFDOUIsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwQixDQUFDO0FBQ0wsQ0FBQztBQUdELEtBQUssVUFBVSxLQUFLO0lBR2hCLGFBQWEsRUFBRSxDQUFDO0lBQ2hCLE1BQU0sSUFBQSw2QkFBWSxHQUFFLENBQUM7SUFDckIsTUFBTSxJQUFBLGlDQUFnQixFQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3JDLENBQUM7QUFFRCxLQUFLLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkb3RlbnYgZnJvbSAnZG90ZW52JztcbmltcG9ydCBhcHAgZnJvbSAnLi9hcHAnXG5pbXBvcnQgeyBpbml0UmFiYml0TVEgLCByZWNlaXZlRnJvbVF1ZXVlIH0gZnJvbSAnLi9pbnRlZ3JhdGlvbi9yYWJiaXRtcUNsaWVudCc7XG5kb3RlbnYuY29uZmlnKCk7XG5cbmNvbnN0IHBvcnQgPSBOdW1iZXIocHJvY2Vzcy5lbnYuUE9SVCk7XG5jb25zdCBob3N0ID0gcHJvY2Vzcy5lbnYuSE9TVDtcblxuXG5hc3luYyBmdW5jdGlvbiBmYXN0aWZ5c2VydmVyKClcbntcblxuICAgIHRyeSBcbiAgICB7XG4gICAgICAgIGFwcC5saXN0ZW4oe3BvcnQgOiBwb3J0ICwgaG9zdCA6IGhvc3R9ICwgKCkgPT4ge2NvbnNvbGUubG9nKGBzZXJ2ZXIgbGlzdGVuIG9uIGh0dHA6Ly8ke2hvc3R9OiR7cG9ydH0gLi4uYCl9KVxuICAgIH0gXG4gICAgY2F0Y2ggKGVycm9yKSBcbiAgICB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgaW4gc2VydmVyXCIpXG4gICAgICAgIHByb2Nlc3MuZXhpdCgxKTtcbiAgICB9XG59XG5cblxuYXN5bmMgZnVuY3Rpb24gc3RhcnQoKSBcbntcbiAgICBcbiAgICBmYXN0aWZ5c2VydmVyKCk7XG4gICAgYXdhaXQgaW5pdFJhYmJpdE1RKCk7XG4gICAgYXdhaXQgcmVjZWl2ZUZyb21RdWV1ZShcImZyaWVuZFwiKTtcbn1cblxuc3RhcnQoKTsiXX0=