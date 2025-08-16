"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = exports.friendRoutes = void 0;
const userController = __importStar(require("../controllers/user.controller"));
const friendController = __importStar(require("../controllers/friend.controller"));
const blockController = __importStar(require("../controllers/block.controller"));
const ProfileSchema_1 = require("../validators/ProfileSchema");
const FriendSchema_1 = require("../validators/FriendSchema");
const userRoutes = [
    { method: 'POST', url: '/api/user/me', handler: userController.createProfileHandler },
    { method: 'PUT', url: '/api/user/me', handler: userController.updateProfileHandler, schema: ProfileSchema_1.updateProfileSchema },
    { method: 'DELETE', url: '/api/user/me', handler: userController.deleteProfileHandler, schema: ProfileSchema_1.deleteProfileSchema },
    { method: 'GET', url: '/api/user/me', handler: userController.getCurrentUserHandler, schema: ProfileSchema_1.getCurrentUserSchema },
    { method: 'GET', url: '/api/user/:userId/friends', handler: userController.getFriendsOfUserHandler, schema: FriendSchema_1.getFriendsListSchema },
    { method: 'GET', url: '/api/user/:id', handler: userController.getUserByIdHandler, schema: ProfileSchema_1.getUserByIdSchema },
    { method: 'GET', url: '/api/user/all', handler: userController.getAllUserHandler, schema: ProfileSchema_1.getAllUserSchema },
];
exports.userRoutes = userRoutes;
const friendRoutes = [
    { method: 'POST', url: '/api/friend/request', handler: friendController.sendFriendRequestHandler, schema: FriendSchema_1.sendFriendRequestSchema },
    { method: 'POST', url: '/api/friend/accept', handler: friendController.acceptFriendRequestHandler, schema: FriendSchema_1.acceptFriendRequestSchema },
    { method: 'POST', url: '/api/friend/reject', handler: friendController.rejectFriendRequestHandler, schema: FriendSchema_1.rejectFriendRequestSchema },
    { method: 'GET', url: '/api/friend/all', handler: friendController.getFriendsListHandler, schema: FriendSchema_1.getFriendsListSchema },
    { method: 'DELETE', url: '/api/friend/:friendId', handler: friendController.removeFriendHandler, schema: FriendSchema_1.removeFriendSchema },
    { method: 'GET', url: '/api/friend/pending', handler: friendController.getPendingRequestsHandler, schema: FriendSchema_1.getPendingRequestsSchema },
    { method: 'POST', url: '/api/blocked/:blockId', handler: blockController.blockUserHandler, schema: FriendSchema_1.blockUserSchema },
    { method: 'DELETE', url: '/api/blocked/:blockId', handler: blockController.unblockUserHandler, schema: FriendSchema_1.unblockUserSchema },
    { method: 'GET', url: '/api/blocked/all', handler: blockController.getBlockedUsersHandler, schema: FriendSchema_1.getBlockedUsersSchema },
];
exports.friendRoutes = friendRoutes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3VzZXIvc3JjL3JvdXRlcy91c2VyLnRzIiwic291cmNlcyI6WyIvdXNlci9zcmMvcm91dGVzL3VzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsK0VBQWlFO0FBQ2pFLG1GQUFxRTtBQUNyRSxpRkFBbUU7QUFDbkUsK0RBQTRLO0FBQzVLLDZEQUF1UDtBQVl2UCxNQUFNLFVBQVUsR0FBWTtJQUMxQixFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLGNBQWMsRUFBRSxPQUFPLEVBQUUsY0FBYyxDQUFDLG9CQUFvQixFQUFFO0lBQ3JGLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLE9BQU8sRUFBRSxjQUFjLENBQUMsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLG1DQUFtQixFQUFFO0lBQ2pILEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLE9BQU8sRUFBRSxjQUFjLENBQUMsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLG1DQUFtQixFQUFFO0lBQ3BILEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLE9BQU8sRUFBRSxjQUFjLENBQUMscUJBQXFCLEVBQUUsTUFBTSxFQUFFLG9DQUFvQixFQUFFO0lBQ25ILEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsMkJBQTJCLEVBQUUsT0FBTyxFQUFFLGNBQWMsQ0FBQyx1QkFBdUIsRUFBRSxNQUFNLEVBQUUsbUNBQW9CLEVBQUU7SUFDbEksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFFLGNBQWMsQ0FBQyxrQkFBa0IsRUFBRSxNQUFNLEVBQUUsaUNBQWlCLEVBQUU7SUFDOUcsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFFLGNBQWMsQ0FBQyxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsZ0NBQWdCLEVBQUU7Q0FDN0csQ0FBQztBQWtCc0IsZ0NBQVU7QUFmbEMsTUFBTSxZQUFZLEdBQVk7SUFFNUIsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxxQkFBcUIsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLENBQUMsd0JBQXdCLEVBQUUsTUFBTSxFQUFFLHNDQUF1QixFQUFFO0lBQ25JLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsb0JBQW9CLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixDQUFDLDBCQUEwQixFQUFFLE1BQU0sRUFBRSx3Q0FBeUIsRUFBRTtJQUN0SSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLG9CQUFvQixFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsQ0FBQywwQkFBMEIsRUFBRSxNQUFNLEVBQUUsd0NBQXlCLEVBQUU7SUFDdEksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxpQkFBaUIsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLENBQUMscUJBQXFCLEVBQUUsTUFBTSxFQUFFLG1DQUFvQixFQUFFO0lBQ3hILEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsdUJBQXVCLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixDQUFDLG1CQUFtQixFQUFFLE1BQU0sRUFBRSxpQ0FBa0IsRUFBRTtJQUM3SCxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLHFCQUFxQixFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsQ0FBQyx5QkFBeUIsRUFBRSxNQUFNLEVBQUUsdUNBQXdCLEVBQUU7SUFDcEksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSx1QkFBdUIsRUFBRSxPQUFPLEVBQUUsZUFBZSxDQUFDLGdCQUFnQixFQUFFLE1BQU0sRUFBRSw4QkFBZSxFQUFFO0lBQ3BILEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsdUJBQXVCLEVBQUUsT0FBTyxFQUFFLGVBQWUsQ0FBQyxrQkFBa0IsRUFBRSxNQUFNLEVBQUUsZ0NBQWlCLEVBQUU7SUFDMUgsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxrQkFBa0IsRUFBRSxPQUFPLEVBQUUsZUFBZSxDQUFDLHNCQUFzQixFQUFFLE1BQU0sRUFBRSxvQ0FBcUIsRUFBRTtDQUMzSCxDQUFDO0FBSU8sb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZUhhbmRsZXJNZXRob2QgLCBGYXN0aWZ5U2NoZW1hIH0gZnJvbSAnZmFzdGlmeSc7XG5pbXBvcnQgKiBhcyB1c2VyQ29udHJvbGxlciBmcm9tICcuLi9jb250cm9sbGVycy91c2VyLmNvbnRyb2xsZXInO1xuaW1wb3J0ICogYXMgZnJpZW5kQ29udHJvbGxlciBmcm9tICcuLi9jb250cm9sbGVycy9mcmllbmQuY29udHJvbGxlcic7XG5pbXBvcnQgKiBhcyBibG9ja0NvbnRyb2xsZXIgZnJvbSAnLi4vY29udHJvbGxlcnMvYmxvY2suY29udHJvbGxlcic7XG5pbXBvcnQgeyBjcmVhdGVQcm9maWxlU2NoZW1hICwgdXBkYXRlUHJvZmlsZVNjaGVtYSAsIGRlbGV0ZVByb2ZpbGVTY2hlbWEgLCBnZXRDdXJyZW50VXNlclNjaGVtYSAgLCBnZXRVc2VyQnlJZFNjaGVtYSAsIGdldEFsbFVzZXJTY2hlbWF9IGZyb20gJy4uL3ZhbGlkYXRvcnMvUHJvZmlsZVNjaGVtYSc7XG5pbXBvcnQgeyBzZW5kRnJpZW5kUmVxdWVzdFNjaGVtYSwgYWNjZXB0RnJpZW5kUmVxdWVzdFNjaGVtYSwgcmVqZWN0RnJpZW5kUmVxdWVzdFNjaGVtYSwgZ2V0RnJpZW5kc0xpc3RTY2hlbWEsIHJlbW92ZUZyaWVuZFNjaGVtYSwgZ2V0UGVuZGluZ1JlcXVlc3RzU2NoZW1hLGJsb2NrVXNlclNjaGVtYSx1bmJsb2NrVXNlclNjaGVtYSxnZXRCbG9ja2VkVXNlcnNTY2hlbWEgfSBmcm9tICcuLi92YWxpZGF0b3JzL0ZyaWVuZFNjaGVtYSc7XG5cblxuXG50eXBlIFJvdXRlID0ge1xuICAgIG1ldGhvZCAgOiAnR0VUJyB8ICdQT1NUJyB8ICdERUxFVEUnIHwgJ1BBVENIJyB8ICdQVVQnO1xuICAgIHVybCAgICAgOiBzdHJpbmc7XG4gICAgaGFuZGxlciA6IFJvdXRlSGFuZGxlck1ldGhvZDtcbiAgICBzY2hlbWE/IDogRmFzdGlmeVNjaGVtYTtcbn07XG5cblxuY29uc3QgdXNlclJvdXRlczogUm91dGVbXSA9IFtcbiAgeyBtZXRob2Q6ICdQT1NUJywgdXJsOiAnL2FwaS91c2VyL21lJywgaGFuZGxlcjogdXNlckNvbnRyb2xsZXIuY3JlYXRlUHJvZmlsZUhhbmRsZXIgfSxcbiAgeyBtZXRob2Q6ICdQVVQnLCB1cmw6ICcvYXBpL3VzZXIvbWUnLCBoYW5kbGVyOiB1c2VyQ29udHJvbGxlci51cGRhdGVQcm9maWxlSGFuZGxlciwgc2NoZW1hOiB1cGRhdGVQcm9maWxlU2NoZW1hIH0sXG4gIHsgbWV0aG9kOiAnREVMRVRFJywgdXJsOiAnL2FwaS91c2VyL21lJywgaGFuZGxlcjogdXNlckNvbnRyb2xsZXIuZGVsZXRlUHJvZmlsZUhhbmRsZXIsIHNjaGVtYTogZGVsZXRlUHJvZmlsZVNjaGVtYSB9LFxuICB7IG1ldGhvZDogJ0dFVCcsIHVybDogJy9hcGkvdXNlci9tZScsIGhhbmRsZXI6IHVzZXJDb250cm9sbGVyLmdldEN1cnJlbnRVc2VySGFuZGxlciwgc2NoZW1hOiBnZXRDdXJyZW50VXNlclNjaGVtYSB9LFxuICB7IG1ldGhvZDogJ0dFVCcsIHVybDogJy9hcGkvdXNlci86dXNlcklkL2ZyaWVuZHMnLCBoYW5kbGVyOiB1c2VyQ29udHJvbGxlci5nZXRGcmllbmRzT2ZVc2VySGFuZGxlciwgc2NoZW1hOiBnZXRGcmllbmRzTGlzdFNjaGVtYSB9LFxuICB7IG1ldGhvZDogJ0dFVCcsIHVybDogJy9hcGkvdXNlci86aWQnLCBoYW5kbGVyOiB1c2VyQ29udHJvbGxlci5nZXRVc2VyQnlJZEhhbmRsZXIsIHNjaGVtYTogZ2V0VXNlckJ5SWRTY2hlbWEgfSxcbiAgeyBtZXRob2Q6ICdHRVQnLCB1cmw6ICcvYXBpL3VzZXIvYWxsJywgaGFuZGxlcjogdXNlckNvbnRyb2xsZXIuZ2V0QWxsVXNlckhhbmRsZXIsIHNjaGVtYTogZ2V0QWxsVXNlclNjaGVtYSB9LFxuXTtcblxuXG5jb25zdCBmcmllbmRSb3V0ZXM6IFJvdXRlW10gPSBbXG4gIFxuICB7IG1ldGhvZDogJ1BPU1QnLCB1cmw6ICcvYXBpL2ZyaWVuZC9yZXF1ZXN0JywgaGFuZGxlcjogZnJpZW5kQ29udHJvbGxlci5zZW5kRnJpZW5kUmVxdWVzdEhhbmRsZXIsIHNjaGVtYTogc2VuZEZyaWVuZFJlcXVlc3RTY2hlbWEgfSxcbiAgeyBtZXRob2Q6ICdQT1NUJywgdXJsOiAnL2FwaS9mcmllbmQvYWNjZXB0JywgaGFuZGxlcjogZnJpZW5kQ29udHJvbGxlci5hY2NlcHRGcmllbmRSZXF1ZXN0SGFuZGxlciwgc2NoZW1hOiBhY2NlcHRGcmllbmRSZXF1ZXN0U2NoZW1hIH0sXG4gIHsgbWV0aG9kOiAnUE9TVCcsIHVybDogJy9hcGkvZnJpZW5kL3JlamVjdCcsIGhhbmRsZXI6IGZyaWVuZENvbnRyb2xsZXIucmVqZWN0RnJpZW5kUmVxdWVzdEhhbmRsZXIsIHNjaGVtYTogcmVqZWN0RnJpZW5kUmVxdWVzdFNjaGVtYSB9LFxuICB7IG1ldGhvZDogJ0dFVCcsIHVybDogJy9hcGkvZnJpZW5kL2FsbCcsIGhhbmRsZXI6IGZyaWVuZENvbnRyb2xsZXIuZ2V0RnJpZW5kc0xpc3RIYW5kbGVyLCBzY2hlbWE6IGdldEZyaWVuZHNMaXN0U2NoZW1hIH0sXG4gIHsgbWV0aG9kOiAnREVMRVRFJywgdXJsOiAnL2FwaS9mcmllbmQvOmZyaWVuZElkJywgaGFuZGxlcjogZnJpZW5kQ29udHJvbGxlci5yZW1vdmVGcmllbmRIYW5kbGVyLCBzY2hlbWE6IHJlbW92ZUZyaWVuZFNjaGVtYSB9LFxuICB7IG1ldGhvZDogJ0dFVCcsIHVybDogJy9hcGkvZnJpZW5kL3BlbmRpbmcnLCBoYW5kbGVyOiBmcmllbmRDb250cm9sbGVyLmdldFBlbmRpbmdSZXF1ZXN0c0hhbmRsZXIsIHNjaGVtYTogZ2V0UGVuZGluZ1JlcXVlc3RzU2NoZW1hIH0sXG4gIHsgbWV0aG9kOiAnUE9TVCcsIHVybDogJy9hcGkvYmxvY2tlZC86YmxvY2tJZCcsIGhhbmRsZXI6IGJsb2NrQ29udHJvbGxlci5ibG9ja1VzZXJIYW5kbGVyLCBzY2hlbWE6IGJsb2NrVXNlclNjaGVtYSB9LFxuICB7IG1ldGhvZDogJ0RFTEVURScsIHVybDogJy9hcGkvYmxvY2tlZC86YmxvY2tJZCcsIGhhbmRsZXI6IGJsb2NrQ29udHJvbGxlci51bmJsb2NrVXNlckhhbmRsZXIsIHNjaGVtYTogdW5ibG9ja1VzZXJTY2hlbWEgfSxcbiAgeyBtZXRob2Q6ICdHRVQnLCB1cmw6ICcvYXBpL2Jsb2NrZWQvYWxsJywgaGFuZGxlcjogYmxvY2tDb250cm9sbGVyLmdldEJsb2NrZWRVc2Vyc0hhbmRsZXIsIHNjaGVtYTogZ2V0QmxvY2tlZFVzZXJzU2NoZW1hIH0sXG5dO1xuXG5cblxuZXhwb3J0ICB7ZnJpZW5kUm91dGVzICwgdXNlclJvdXRlc307XG4iXX0=