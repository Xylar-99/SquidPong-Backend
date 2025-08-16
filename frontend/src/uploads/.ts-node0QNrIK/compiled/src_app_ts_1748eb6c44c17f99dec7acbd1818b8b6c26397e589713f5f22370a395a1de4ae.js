"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = require("fastify");
const user_1 = require("./routes/user");
const errorHandler_1 = require("./utils/errorHandler");
const plugins_1 = __importDefault(require("./plugins/plugins"));
const app = (0, fastify_1.fastify)();
exports.default = app;
(0, plugins_1.default)(app);
const routes = [...user_1.userRoutes, ...user_1.friendRoutes];
app.register(async () => { routes.forEach(route => app.route(route)); });
app.setErrorHandler(errorHandler_1.errorHandler);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3VzZXIvc3JjL2FwcC50cyIsInNvdXJjZXMiOlsiL3VzZXIvc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFDQUFrRDtBQUNsRCx3Q0FBd0Q7QUFDeEQsdURBQW9EO0FBQ3BELGdFQUErQztBQUcvQyxNQUFNLEdBQUcsR0FBb0IsSUFBQSxpQkFBTyxHQUFFLENBQUM7QUFDdkMsa0JBQWUsR0FBRyxDQUFDO0FBRW5CLElBQUEsaUJBQWUsRUFBQyxHQUFHLENBQUMsQ0FBQztBQUVyQixNQUFNLE1BQU0sR0FBRyxDQUFDLEdBQUcsaUJBQVUsRUFBRyxHQUFHLG1CQUFZLENBQUMsQ0FBQTtBQUdoRCxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssSUFBSSxFQUFFLEdBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQSxDQUFBLENBQUMsQ0FBQyxDQUFDO0FBRXRFLEdBQUcsQ0FBQyxlQUFlLENBQUMsMkJBQVksQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtmYXN0aWZ5ICwgRmFzdGlmeUluc3RhbmNlfSBmcm9tICdmYXN0aWZ5JztcbmltcG9ydCB7dXNlclJvdXRlcyAsIGZyaWVuZFJvdXRlc30gZnJvbSAnLi9yb3V0ZXMvdXNlcic7XG5pbXBvcnQgeyBlcnJvckhhbmRsZXIgfSBmcm9tICcuL3V0aWxzL2Vycm9ySGFuZGxlcic7XG5pbXBvcnQgcmVnaXN0ZXJQbHVnaW5zIGZyb20gJy4vcGx1Z2lucy9wbHVnaW5zJ1xuaW1wb3J0IHByaXNtYSBmcm9tICcuL2RiL2RhdGFiYXNlJ1xuXG5jb25zdCBhcHA6IEZhc3RpZnlJbnN0YW5jZSA9IGZhc3RpZnkoKTtcbmV4cG9ydCBkZWZhdWx0IGFwcDtcblxucmVnaXN0ZXJQbHVnaW5zKGFwcCk7XG5cbmNvbnN0IHJvdXRlcyA9IFsuLi51c2VyUm91dGVzICwgLi4uZnJpZW5kUm91dGVzXVxuXG5cbmFwcC5yZWdpc3Rlcihhc3luYyAoKSA9PiB7cm91dGVzLmZvckVhY2gocm91dGUgPT4gYXBwLnJvdXRlKHJvdXRlKSl9KTtcblxuYXBwLnNldEVycm9ySGFuZGxlcihlcnJvckhhbmRsZXIpXG4iXX0=