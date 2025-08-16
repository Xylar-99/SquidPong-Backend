"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = registerPlugins;
const multipart_1 = __importDefault(require("@fastify/multipart"));
const swagger_1 = __importDefault(require("@fastify/swagger"));
const swagger_ui_1 = __importDefault(require("@fastify/swagger-ui"));
async function registerPlugins(app) {
    app.register(swagger_1.default, {
        openapi: {
            openapi: '3.0.3',
            info: {
                title: 'Test swagger',
                description: 'Testing the Fastify swagger API',
                version: '1.0.0'
            },
            servers: [
                {
                    url: 'http://localhost:4001',
                }
            ],
        }
    });
    app.register(swagger_ui_1.default, { routePrefix: '/api/user/docs', });
    app.register(multipart_1.default, {
        limits: {
            fileSize: 10 * 1024 * 1024,
            files: 1,
            fields: 3
        }
    });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3VzZXIvc3JjL3BsdWdpbnMvcGx1Z2lucy50cyIsInNvdXJjZXMiOlsiL3VzZXIvc3JjL3BsdWdpbnMvcGx1Z2lucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQU9BLGtDQWdDQztBQXRDRCxtRUFBMkM7QUFDM0MsK0RBQThDO0FBQzlDLHFFQUFtRDtBQUlwQyxLQUFLLFVBQVUsZUFBZSxDQUFDLEdBQW1CO0lBSWpFLEdBQUcsQ0FBQyxRQUFRLENBQUMsaUJBQWMsRUFBRTtRQUN6QixPQUFPLEVBQUU7WUFDUCxPQUFPLEVBQUUsT0FBTztZQUNoQixJQUFJLEVBQUU7Z0JBQ0osS0FBSyxFQUFFLGNBQWM7Z0JBQ3JCLFdBQVcsRUFBRSxpQ0FBaUM7Z0JBQzlDLE9BQU8sRUFBRSxPQUFPO2FBQ2pCO1lBQ0QsT0FBTyxFQUFFO2dCQUNQO29CQUNFLEdBQUcsRUFBRSx1QkFBdUI7aUJBQzdCO2FBQ0Y7U0FDRjtLQUNGLENBQUMsQ0FBQTtJQUdKLEdBQUcsQ0FBQyxRQUFRLENBQUMsb0JBQWdCLEVBQUUsRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO0lBR2hFLEdBQUcsQ0FBQyxRQUFRLENBQUMsbUJBQVMsRUFBRTtRQUN6QixNQUFNLEVBQUU7WUFDTixRQUFRLEVBQUUsRUFBRSxHQUFHLElBQUksR0FBRyxJQUFJO1lBQzFCLEtBQUssRUFBRSxDQUFDO1lBQ1IsTUFBTSxFQUFFLENBQUM7U0FDVjtLQUNGLENBQUMsQ0FBQztBQUVILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGYXN0aWZ5SW5zdGFuY2UgfSBmcm9tICdmYXN0aWZ5JztcbmltcG9ydCBtdWx0aXBhcnQgZnJvbSAnQGZhc3RpZnkvbXVsdGlwYXJ0JztcbmltcG9ydCBmYXN0aWZ5U3dhZ2dlciBmcm9tICdAZmFzdGlmeS9zd2FnZ2VyJztcbmltcG9ydCBmYXN0aWZ5U3dhZ2dlclVpIGZyb20gJ0BmYXN0aWZ5L3N3YWdnZXItdWknO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gcmVnaXN0ZXJQbHVnaW5zKGFwcDpGYXN0aWZ5SW5zdGFuY2UpIFxue1xuXG5cbmFwcC5yZWdpc3RlcihmYXN0aWZ5U3dhZ2dlciwge1xuICAgIG9wZW5hcGk6IHtcbiAgICAgIG9wZW5hcGk6ICczLjAuMycsXG4gICAgICBpbmZvOiB7XG4gICAgICAgIHRpdGxlOiAnVGVzdCBzd2FnZ2VyJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdUZXN0aW5nIHRoZSBGYXN0aWZ5IHN3YWdnZXIgQVBJJyxcbiAgICAgICAgdmVyc2lvbjogJzEuMC4wJ1xuICAgICAgfSxcbiAgICAgIHNlcnZlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMScsXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgfVxuICB9KVxuXG5cbmFwcC5yZWdpc3RlcihmYXN0aWZ5U3dhZ2dlclVpLCB7IHJvdXRlUHJlZml4OiAnL2FwaS91c2VyL2RvY3MnLCB9KTtcblxuXG4gICBhcHAucmVnaXN0ZXIobXVsdGlwYXJ0LCB7XG4gIGxpbWl0czoge1xuICAgIGZpbGVTaXplOiAxMCAqIDEwMjQgKiAxMDI0LFxuICAgIGZpbGVzOiAxLFxuICAgIGZpZWxkczogM1xuICB9XG59KTtcblxufSJdfQ==