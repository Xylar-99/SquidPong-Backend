"use strict";
// Swagger Schemas for Friend Management Routes
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBlockedUsersSchema = exports.unblockUserSchema = exports.blockUserSchema = exports.getPendingRequestsSchema = exports.removeFriendSchema = exports.getFriendsListSchema = exports.rejectFriendRequestSchema = exports.acceptFriendRequestSchema = exports.sendFriendRequestSchema = void 0;
exports.sendFriendRequestSchema = {
    tags: ['Friends'],
    summary: 'Send friend request',
    description: 'Sends a friend request to another user',
    body: {
        type: 'object',
        properties: {
            friendId: {
                type: 'integer',
                description: 'ID of the user to send friend request to'
            }
        },
        required: ['friendId']
    },
    response: {
        200: {
            type: 'object',
            properties: {
                success: { type: 'boolean' },
                message: { type: 'string' }
            }
        },
        400: {
            type: 'object',
            properties: {
                success: { type: 'boolean' },
                message: { type: 'string' }
            }
        }
    }
};
exports.acceptFriendRequestSchema = {
    tags: ['Friends'],
    summary: 'Accept friend request',
    description: 'Accepts a pending friend request',
    body: {
        type: 'object',
        properties: {
            friendId: {
                type: 'integer',
                description: 'ID of the user whose friend request to accept'
            }
        },
        required: ['friendId']
    },
    response: {
        200: {
            type: 'object',
            properties: {
                success: { type: 'boolean' },
                message: { type: 'string' }
            }
        },
        400: {
            type: 'object',
            properties: {
                success: { type: 'boolean' },
                message: { type: 'string' }
            }
        }
    }
};
exports.rejectFriendRequestSchema = {
    tags: ['Friends'],
    summary: 'Reject friend request',
    description: 'Rejects a pending friend request',
    body: {
        type: 'object',
        properties: {
            friendId: {
                type: 'integer',
                description: 'ID of the user whose friend request to reject'
            }
        },
        required: ['friendId']
    },
    response: {
        200: {
            type: 'object',
            properties: {
                success: { type: 'boolean' },
                message: { type: 'string' }
            }
        },
        400: {
            type: 'object',
            properties: {
                success: { type: 'boolean' },
                message: { type: 'string' }
            }
        }
    }
};
exports.getFriendsListSchema = {
    tags: ['Friends'],
    summary: 'Get friends list',
    description: 'Retrieves the current user\'s friends list',
    response: {
        200: {
            type: 'object',
            properties: {
                success: { type: 'boolean' },
                message: { type: 'string' },
                data: {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            id: { type: 'integer' },
                            userId: { type: 'integer' },
                            username: { type: 'string' },
                            fname: { type: 'string' },
                            lname: { type: 'string' },
                            bio: { type: 'string', nullable: true },
                            banner: { type: 'string', nullable: true },
                            avatar: { type: 'string' },
                            status: { type: 'string' },
                            walletBalance: { type: 'number' },
                            playerStats: { type: 'object' },
                            playerCharacters: { type: 'object' },
                            playerSelectedCharacter: { type: 'string', nullable: true },
                            preferences: { type: 'object' },
                            matchHistory: { type: 'object' },
                            isVerified: { type: 'boolean' },
                            rankDivision: { type: 'string' },
                            rankTier: { type: 'string' },
                            totalGames: { type: 'integer' },
                            wins: { type: 'integer' },
                            losses: { type: 'integer' },
                            rank: { type: 'integer' },
                            level: { type: 'integer' },
                            createdAt: { type: 'string', format: 'date-time' },
                            updatedAt: { type: 'string', format: 'date-time' }
                        }
                    }
                }
            }
        },
        400: {
            type: 'object',
            properties: {
                success: { type: 'boolean' },
                message: { type: 'string' }
            }
        }
    }
};
exports.removeFriendSchema = {
    tags: ['Friends'],
    summary: 'Remove friend',
    description: 'Removes a user from friends list',
    params: {
        type: 'object',
        properties: {
            friendId: {
                type: 'string',
                description: 'ID of the friend to remove'
            }
        },
        required: ['friendId']
    },
    response: {
        200: {
            type: 'object',
            properties: {
                success: { type: 'boolean' },
                message: { type: 'string' }
            }
        },
        400: {
            type: 'object',
            properties: {
                success: { type: 'boolean' },
                message: { type: 'string' }
            }
        }
    }
};
exports.getPendingRequestsSchema = {
    tags: ['Friends'],
    summary: 'Get pending friend requests',
    description: 'Retrieves pending friend requests received by the current user',
    response: {
        200: {
            type: 'object',
            properties: {
                success: { type: 'boolean' },
                message: { type: 'string' },
                data: {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            id: { type: 'integer' },
                            userId: { type: 'integer' },
                            username: { type: 'string' },
                            fname: { type: 'string' },
                            lname: { type: 'string' },
                            bio: { type: 'string', nullable: true },
                            banner: { type: 'string', nullable: true },
                            avatar: { type: 'string' },
                            status: { type: 'string' },
                            walletBalance: { type: 'number' },
                            playerStats: { type: 'object' },
                            playerCharacters: { type: 'object' },
                            playerSelectedCharacter: { type: 'string', nullable: true },
                            preferences: { type: 'object' },
                            matchHistory: { type: 'object' },
                            isVerified: { type: 'boolean' },
                            rankDivision: { type: 'string' },
                            rankTier: { type: 'string' },
                            totalGames: { type: 'integer' },
                            wins: { type: 'integer' },
                            losses: { type: 'integer' },
                            rank: { type: 'integer' },
                            level: { type: 'integer' },
                            createdAt: { type: 'string', format: 'date-time' },
                            updatedAt: { type: 'string', format: 'date-time' }
                        }
                    }
                }
            }
        },
        400: {
            type: 'object',
            properties: {
                success: { type: 'boolean' },
                message: { type: 'string' }
            }
        }
    }
};
exports.blockUserSchema = {
    tags: ['Block Management'],
    summary: 'Block user',
    description: 'Blocks a user',
    params: {
        type: 'object',
        properties: {
            blockId: {
                type: 'string',
                description: 'ID of the user to block'
            }
        },
        required: ['blockId']
    },
    response: {
        200: {
            type: 'object',
            properties: {
                success: { type: 'boolean' },
                message: { type: 'string' }
            }
        },
        400: {
            type: 'object',
            properties: {
                success: { type: 'boolean' },
                message: { type: 'string' }
            }
        }
    }
};
exports.unblockUserSchema = {
    tags: ['Block Management'],
    summary: 'Unblock user',
    description: 'Unblocks a previously blocked user',
    params: {
        type: 'object',
        properties: {
            blockId: {
                type: 'string',
                description: 'ID of the user to unblock'
            }
        },
        required: ['blockId']
    },
    response: {
        200: {
            type: 'object',
            properties: {
                success: { type: 'boolean' },
                message: { type: 'string' }
            }
        },
        400: {
            type: 'object',
            properties: {
                success: { type: 'boolean' },
                message: { type: 'string' }
            }
        }
    }
};
exports.getBlockedUsersSchema = {
    tags: ['Block Management'],
    summary: 'Get blocked users',
    description: 'Retrieves list of blocked users',
    response: {
        200: {
            type: 'object',
            properties: {
                success: { type: 'boolean' },
                message: { type: 'string' },
                data: {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            id: { type: 'integer' },
                            userId: { type: 'integer' },
                            username: { type: 'string' },
                            fname: { type: 'string' },
                            lname: { type: 'string' },
                            bio: { type: 'string', nullable: true },
                            banner: { type: 'string', nullable: true },
                            avatar: { type: 'string' },
                            status: { type: 'string' },
                            walletBalance: { type: 'number' },
                            playerStats: { type: 'object' },
                            playerCharacters: { type: 'object' },
                            playerSelectedCharacter: { type: 'string', nullable: true },
                            preferences: { type: 'object' },
                            matchHistory: { type: 'object' },
                            isVerified: { type: 'boolean' },
                            rankDivision: { type: 'string' },
                            rankTier: { type: 'string' },
                            totalGames: { type: 'integer' },
                            wins: { type: 'integer' },
                            losses: { type: 'integer' },
                            rank: { type: 'integer' },
                            level: { type: 'integer' },
                            createdAt: { type: 'string', format: 'date-time' },
                            updatedAt: { type: 'string', format: 'date-time' }
                        }
                    }
                }
            }
        },
        400: {
            type: 'object',
            properties: {
                success: { type: 'boolean' },
                message: { type: 'string' }
            }
        }
    }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3VzZXIvc3JjL3ZhbGlkYXRvcnMvRnJpZW5kU2NoZW1hLnRzIiwic291cmNlcyI6WyIvdXNlci9zcmMvdmFsaWRhdG9ycy9GcmllbmRTY2hlbWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLCtDQUErQzs7O0FBRWxDLFFBQUEsdUJBQXVCLEdBQUc7SUFDckMsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDO0lBQ2pCLE9BQU8sRUFBRSxxQkFBcUI7SUFDOUIsV0FBVyxFQUFFLHdDQUF3QztJQUNyRCxJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUUsUUFBUTtRQUNkLFVBQVUsRUFBRTtZQUNWLFFBQVEsRUFBRTtnQkFDUixJQUFJLEVBQUUsU0FBUztnQkFDZixXQUFXLEVBQUUsMENBQTBDO2FBQ3hEO1NBQ0Y7UUFDRCxRQUFRLEVBQUUsQ0FBQyxVQUFVLENBQUM7S0FDdkI7SUFDRCxRQUFRLEVBQUU7UUFDUixHQUFHLEVBQUU7WUFDSCxJQUFJLEVBQUUsUUFBUTtZQUNkLFVBQVUsRUFBRTtnQkFDVixPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFO2dCQUM1QixPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO2FBQzVCO1NBQ0Y7UUFDRCxHQUFHLEVBQUU7WUFDSCxJQUFJLEVBQUUsUUFBUTtZQUNkLFVBQVUsRUFBRTtnQkFDVixPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFO2dCQUM1QixPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO2FBQzVCO1NBQ0Y7S0FDRjtDQUNGLENBQUM7QUFFVyxRQUFBLHlCQUF5QixHQUFHO0lBQ3ZDLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQztJQUNqQixPQUFPLEVBQUUsdUJBQXVCO0lBQ2hDLFdBQVcsRUFBRSxrQ0FBa0M7SUFDL0MsSUFBSSxFQUFFO1FBQ0osSUFBSSxFQUFFLFFBQVE7UUFDZCxVQUFVLEVBQUU7WUFDVixRQUFRLEVBQUU7Z0JBQ1IsSUFBSSxF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USxFQUFFOzRCQUM1QixVQUFVLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFOzRCQUMvQixJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFOzRCQUN6QixNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFOzRCQUMzQixJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFOzRCQUN6QixLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFOzRCQUMxQixTQUFTLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7NEJBQ2xELFNBQVMsRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTt5QkFDbkQ7cUJBQ0Y7aUJBQ0Y7YUFDRjtTQUNGO1FBQ0QsR0FBRyxFQUFFO1lBQ0gsSUFBSSxFQUFFLFFBQVE7WUFDZCxVQUFVLEVBQUU7Z0JBQ1YsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRTtnQkFDNUIsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTthQUM1QjtTQUNGO0tBQ0Y7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gU3dhZ2dlciBTY2hlbWFzIGZvciBGcmllbmQgTWFuYWdlbWVudCBSb3V0ZXNcblxuZXhwb3J0IGNvbnN0IHNlbmRGcmllbmRSZXF1ZXN0U2NoZW1hID0ge1xuICB0YWdzOiBbJ0ZyaWVuZHMnXSxcbiAgc3VtbWFyeTogJ1NlbmQgZnJpZW5kIHJlcXVlc3QnLFxuICBkZXNjcmlwdGlvbjogJ1NlbmRzIGEgZnJpZW5kIHJlcXVlc3QgdG8gYW5vdGhlciB1c2VyJyxcbiAgYm9keToge1xuICAgIHR5cGU6ICdvYmplY3QnLFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgIGZyaWVuZElkOiB7XG4gICAgICAgIHR5cGU6ICdpbnRlZ2VyJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdJRCBvZiB0aGUgdXNlciB0byBzZW5kIGZyaWVuZCByZXF1ZXN0IHRvJ1xuICAgICAgfVxuICAgIH0sXG4gICAgcmVxdWlyZWQ6IFsnZnJpZW5kSWQnXVxuICB9LFxuICByZXNwb25zZToge1xuICAgIDIwMDoge1xuICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHN1Y2Nlc3M6IHsgdHlwZTogJ2Jvb2xlYW4nIH0sXG4gICAgICAgIG1lc3NhZ2U6IHsgdHlwZTogJ3N0cmluZycgfVxuICAgICAgfVxuICAgIH0sXG4gICAgNDAwOiB7XG4gICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgc3VjY2VzczogeyB0eXBlOiAnYm9vbGVhbicgfSxcbiAgICAgICAgbWVzc2FnZTogeyB0eXBlOiAnc3RyaW5nJyB9XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgY29uc3QgYWNjZXB0RnJpZW5kUmVxdWVzdFNjaGVtYSA9IHtcbiAgdGFnczogWydGcmllbmRzJ10sXG4gIHN1bW1hcnk6ICdBY2NlcHQgZnJpZW5kIHJlcXVlc3QnLFxuICBkZXNjcmlwdGlvbjogJ0FjY2VwdHMgYSBwZW5kaW5nIGZyaWVuZCByZXF1ZXN0JyxcbiAgYm9keToge1xuICAgIHR5cGU6ICdvYmplY3QnLFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgIGZyaWVuZElkOiB7XG4gICAgICAgIHR5cGU6ICdpbnRlZ2VyJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdJRCBvZiB0aGUgdXNlciB3aG9zZSBmcmllbmQgcmVxdWVzdCB0byBhY2NlcHQnXG4gICAgICB9XG4gICAgfSxcbiAgICByZXF1aXJlZDogWydmcmllbmRJZCddXG4gIH0sXG4gIHJlc3BvbnNlOiB7XG4gICAgMjAwOiB7XG4gICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgc3VjY2VzczogeyB0eXBlOiAnYm9vbGVhbicgfSxcbiAgICAgICAgbWVzc2FnZTogeyB0eXBlOiAnc3RyaW5nJyB9XG4gICAgICB9XG4gICAgfSxcbiAgICA0MDA6IHtcbiAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgcHJvcGVydGllczoge1xuICAgICAgICBzdWNjZXNzOiB7IHR5cGU6ICdib29sZWFuJyB9LFxuICAgICAgICBtZXNzYWdlOiB7IHR5cGU6ICdzdHJpbmcnIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCByZWplY3RGcmllbmRSZXF1ZXN0U2NoZW1hID0ge1xuICB0YWdzOiBbJ0ZyaWVuZHMnXSxcbiAgc3VtbWFyeTogJ1JlamVjdCBmcmllbmQgcmVxdWVzdCcsXG4gIGRlc2NyaXB0aW9uOiAnUmVqZWN0cyBhIHBlbmRpbmcgZnJpZW5kIHJlcXVlc3QnLFxuICBib2R5OiB7XG4gICAgdHlwZTogJ29iamVjdCcsXG4gICAgcHJvcGVydGllczoge1xuICAgICAgZnJpZW5kSWQ6IHtcbiAgICAgICAgdHlwZTogJ2ludGVnZXInLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0lEIG9mIHRoZSB1c2VyIHdob3NlIGZyaWVuZCByZXF1ZXN0IHRvIHJlamVjdCdcbiAgICAgIH1cbiAgICB9LFxuICAgIHJlcXVpcmVkOiBbJ2ZyaWVuZElkJ11cbiAgfSxcbiAgcmVzcG9uc2U6IHtcbiAgICAyMDA6IHtcbiAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgcHJvcGVydGllczoge1xuICAgICAgICBzdWNjZXNzOiB7IHR5cGU6ICdib29sZWFuJyB9LFxuICAgICAgICBtZXNzYWdlOiB7IHR5cGU6ICdzdHJpbmcnIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIDQwMDoge1xuICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHN1Y2Nlc3M6IHsgdHlwZTogJ2Jvb2xlYW4nIH0sXG4gICAgICAgIG1lc3NhZ2U6IHsgdHlwZTogJ3N0cmluZycgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGdldEZyaWVuZHNMaXN0U2NoZW1hID0ge1xuICB0YWdzOiBbJ0ZyaWVuZHMnXSxcbiAgc3VtbWFyeTogJ0dldCBmcmllbmRzIGxpc3QnLFxuICBkZXNjcmlwdGlvbjogJ1JldHJpZXZlcyB0aGUgY3VycmVudCB1c2VyXFwncyBmcmllbmRzIGxpc3QnLFxuICByZXNwb25zZToge1xuICAgIDIwMDoge1xuICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHN1Y2Nlc3M6IHsgdHlwZTogJ2Jvb2xlYW4nIH0sXG4gICAgICAgIG1lc3NhZ2U6IHsgdHlwZTogJ3N0cmluZycgfSxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHR5cGU6ICdhcnJheScsXG4gICAgICAgICAgaXRlbXM6IHtcbiAgICAgICAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgICBpZDogeyB0eXBlOiAnaW50ZWdlcicgfSxcbiAgICAgICAgICAgICAgdXNlcklkOiB7IHR5cGU6ICdpbnRlZ2VyJyB9LFxuICAgICAgICAgICAgICB1c2VybmFtZTogeyB0eXBlOiAnc3RyaW5nJyB9LFxuICAgICAgICAgICAgICBmbmFtZTogeyB0eXBlOiAnc3RyaW5nJyB9LFxuICAgICAgICAgICAgICBsbmFtZTogeyB0eXBlOiAnc3RyaW5nJyB9LFxuICAgICAgICAgICAgICBiaW86IHsgdHlwZTogJ3N0cmluZycsIG51bGxhYmxlOiB0cnVlIH0sXG4gICAgICAgICAgICAgIGJhbm5lcjogeyB0eXBlOiAnc3RyaW5nJywgbnVsbGFibGU6IHRydWUgfSxcbiAgICAgICAgICAgICAgYXZhdGFyOiB7IHR5cGU6ICdzdHJpbmcnIH0sXG4gICAgICAgICAgICAgIHN0YXR1czogeyB0eXBlOiAnc3RyaW5nJyB9LFxuICAgICAgICAgICAgICB3YWxsZXRCYWxhbmNlOiB7IHR5cGU6ICdudW1iZXInIH0sXG4gICAgICAgICAgICAgIHBsYXllclN0YXRzOiB7IHR5cGU6ICdvYmplY3QnIH0sXG4gICAgICAgICAgICAgIHBsYXllckNoYXJhY3RlcnM6IHsgdHlwZTogJ29iamVjdCcgfSxcbiAgICAgICAgICAgICAgcGxheWVyU2VsZWN0ZWRDaGFyYWN0ZXI6IHsgdHlwZTogJ3N0cmluZycsIG51bGxhYmxlOiB0cnVlIH0sXG4gICAgICAgICAgICAgIHByZWZlcmVuY2VzOiB7IHR5cGU6ICdvYmplY3QnIH0sXG4gICAgICAgICAgICAgIG1hdGNoSGlzdG9yeTogeyB0eXBlOiAnb2JqZWN0JyB9LFxuICAgICAgICAgICAgICBpc1ZlcmlmaWVkOiB7IHR5cGU6ICdib29sZWFuJyB9LFxuICAgICAgICAgICAgICByYW5rRGl2aXNpb246IHsgdHlwZTogJ3N0cmluZycgfSxcbiAgICAgICAgICAgICAgcmFua1RpZXI6IHsgdHlwZTogJ3N0cmluZycgfSxcbiAgICAgICAgICAgICAgdG90YWxHYW1lczogeyB0eXBlOiAnaW50ZWdlcicgfSxcbiAgICAgICAgICAgICAgd2luczogeyB0eXBlOiAnaW50ZWdlcicgfSxcbiAgICAgICAgICAgICAgbG9zc2VzOiB7IHR5cGU6ICdpbnRlZ2VyJyB9LFxuICAgICAgICAgICAgICByYW5rOiB7IHR5cGU6ICdpbnRlZ2VyJyB9LFxuICAgICAgICAgICAgICBsZXZlbDogeyB0eXBlOiAnaW50ZWdlcicgfSxcbiAgICAgICAgICAgICAgY3JlYXRlZEF0OiB7IHR5cGU6ICdzdHJpbmcnLCBmb3JtYXQ6ICdkYXRlLXRpbWUnIH0sXG4gICAgICAgICAgICAgIHVwZGF0ZWRBdDogeyB0eXBlOiAnc3RyaW5nJywgZm9ybWF0OiAnZGF0ZS10aW1lJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICA0MDA6IHtcbiAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgcHJvcGVydGllczoge1xuICAgICAgICBzdWNjZXNzOiB7IHR5cGU6ICdib29sZWFuJyB9LFxuICAgICAgICBtZXNzYWdlOiB7IHR5cGU6ICdzdHJpbmcnIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCByZW1vdmVGcmllbmRTY2hlbWEgPSB7XG4gIHRhZ3M6IFsnRnJpZW5kcyddLFxuICBzdW1tYXJ5OiAnUmVtb3ZlIGZyaWVuZCcsXG4gIGRlc2NyaXB0aW9uOiAnUmVtb3ZlcyBhIHVzZXIgZnJvbSBmcmllbmRzIGxpc3QnLFxuICBwYXJhbXM6IHtcbiAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICBmcmllbmRJZDoge1xuICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdJRCBvZiB0aGUgZnJpZW5kIHRvIHJlbW92ZSdcbiAgICAgIH1cbiAgICB9LFxuICAgIHJlcXVpcmVkOiBbJ2ZyaWVuZElkJ11cbiAgfSxcbiAgcmVzcG9uc2U6IHtcbiAgICAyMDA6IHtcbiAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgcHJvcGVydGllczoge1xuICAgICAgICBzdWNjZXNzOiB7IHR5cGU6ICdib29sZWFuJyB9LFxuICAgICAgICBtZXNzYWdlOiB7IHR5cGU6ICdzdHJpbmcnIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIDQwMDoge1xuICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHN1Y2Nlc3M6IHsgdHlwZTogJ2Jvb2xlYW4nIH0sXG4gICAgICAgIG1lc3NhZ2U6IHsgdHlwZTogJ3N0cmluZycgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGdldFBlbmRpbmdSZXF1ZXN0c1NjaGVtYSA9IHtcbiAgdGFnczogWydGcmllbmRzJ10sXG4gIHN1bW1hcnk6ICdHZXQgcGVuZGluZyBmcmllbmQgcmVxdWVzdHMnLFxuICBkZXNjcmlwdGlvbjogJ1JldHJpZXZlcyBwZW5kaW5nIGZyaWVuZCByZXF1ZXN0cyByZWNlaXZlZCBieSB0aGUgY3VycmVudCB1c2VyJyxcbiAgcmVzcG9uc2U6IHtcbiAgICAyMDA6IHtcbiAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgcHJvcGVydGllczoge1xuICAgICAgICBzdWNjZXNzOiB7IHR5cGU6ICdib29sZWFuJyB9LFxuICAgICAgICBtZXNzYWdlOiB7IHR5cGU6ICdzdHJpbmcnIH0sXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICB0eXBlOiAnYXJyYXknLFxuICAgICAgICAgIGl0ZW1zOiB7XG4gICAgICAgICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgICAgaWQ6IHsgdHlwZTogJ2ludGVnZXInIH0sXG4gICAgICAgICAgICAgIHVzZXJJZDogeyB0eXBlOiAnaW50ZWdlcicgfSxcbiAgICAgICAgICAgICAgdXNlcm5hbWU6IHsgdHlwZTogJ3N0cmluZycgfSxcbiAgICAgICAgICAgICAgZm5hbWU6IHsgdHlwZTogJ3N0cmluZycgfSxcbiAgICAgICAgICAgICAgbG5hbWU6IHsgdHlwZTogJ3N0cmluZycgfSxcbiAgICAgICAgICAgICAgYmlvOiB7IHR5cGU6ICdzdHJpbmcnLCBudWxsYWJsZTogdHJ1ZSB9LFxuICAgICAgICAgICAgICBiYW5uZXI6IHsgdHlwZTogJ3N0cmluZycsIG51bGxhYmxlOiB0cnVlIH0sXG4gICAgICAgICAgICAgIGF2YXRhcjogeyB0eXBlOiAnc3RyaW5nJyB9LFxuICAgICAgICAgICAgICBzdGF0dXM6IHsgdHlwZTogJ3N0cmluZycgfSxcbiAgICAgICAgICAgICAgd2FsbGV0QmFsYW5jZTogeyB0eXBlOiAnbnVtYmVyJyB9LFxuICAgICAgICAgICAgICBwbGF5ZXJTdGF0czogeyB0eXBlOiAnb2JqZWN0JyB9LFxuICAgICAgICAgICAgICBwbGF5ZXJDaGFyYWN0ZXJzOiB7IHR5cGU6ICdvYmplY3QnIH0sXG4gICAgICAgICAgICAgIHBsYXllclNlbGVjdGVkQ2hhcmFjdGVyOiB7IHR5cGU6ICdzdHJpbmcnLCBudWxsYWJsZTogdHJ1ZSB9LFxuICAgICAgICAgICAgICBwcmVmZXJlbmNlczogeyB0eXBlOiAnb2JqZWN0JyB9LFxuICAgICAgICAgICAgICBtYXRjaEhpc3Rvcnk6IHsgdHlwZTogJ29iamVjdCcgfSxcbiAgICAgICAgICAgICAgaXNWZXJpZmllZDogeyB0eXBlOiAnYm9vbGVhbicgfSxcbiAgICAgICAgICAgICAgcmFua0RpdmlzaW9uOiB7IHR5cGU6ICdzdHJpbmcnIH0sXG4gICAgICAgICAgICAgIHJhbmtUaWVyOiB7IHR5cGU6ICdzdHJpbmcnIH0sXG4gICAgICAgICAgICAgIHRvdGFsR2FtZXM6IHsgdHlwZTogJ2ludGVnZXInIH0sXG4gICAgICAgICAgICAgIHdpbnM6IHsgdHlwZTogJ2ludGVnZXInIH0sXG4gICAgICAgICAgICAgIGxvc3NlczogeyB0eXBlOiAnaW50ZWdlcicgfSxcbiAgICAgICAgICAgICAgcmFuazogeyB0eXBlOiAnaW50ZWdlcicgfSxcbiAgICAgICAgICAgICAgbGV2ZWw6IHsgdHlwZTogJ2ludGVnZXInIH0sXG4gICAgICAgICAgICAgIGNyZWF0ZWRBdDogeyB0eXBlOiAnc3RyaW5nJywgZm9ybWF0OiAnZGF0ZS10aW1lJyB9LFxuICAgICAgICAgICAgICB1cGRhdGVkQXQ6IHsgdHlwZTogJ3N0cmluZycsIGZvcm1hdDogJ2RhdGUtdGltZScgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgNDAwOiB7XG4gICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgc3VjY2VzczogeyB0eXBlOiAnYm9vbGVhbicgfSxcbiAgICAgICAgbWVzc2FnZTogeyB0eXBlOiAnc3RyaW5nJyB9XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgY29uc3QgYmxvY2tVc2VyU2NoZW1hID0ge1xuICB0YWdzOiBbJ0Jsb2NrIE1hbmFnZW1lbnQnXSxcbiAgc3VtbWFyeTogJ0Jsb2NrIHVzZXInLFxuICBkZXNjcmlwdGlvbjogJ0Jsb2NrcyBhIHVzZXInLFxuICBwYXJhbXM6IHtcbiAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICBibG9ja0lkOiB7XG4gICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0lEIG9mIHRoZSB1c2VyIHRvIGJsb2NrJ1xuICAgICAgfVxuICAgIH0sXG4gICAgcmVxdWlyZWQ6IFsnYmxvY2tJZCddXG4gIH0sXG4gIHJlc3BvbnNlOiB7XG4gICAgMjAwOiB7XG4gICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgc3VjY2VzczogeyB0eXBlOiAnYm9vbGVhbicgfSxcbiAgICAgICAgbWVzc2FnZTogeyB0eXBlOiAnc3RyaW5nJyB9XG4gICAgICB9XG4gICAgfSxcbiAgICA0MDA6IHtcbiAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgcHJvcGVydGllczoge1xuICAgICAgICBzdWNjZXNzOiB7IHR5cGU6ICdib29sZWFuJyB9LFxuICAgICAgICBtZXNzYWdlOiB7IHR5cGU6ICdzdHJpbmcnIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCB1bmJsb2NrVXNlclNjaGVtYSA9IHtcbiAgdGFnczogWydCbG9jayBNYW5hZ2VtZW50J10sXG4gIHN1bW1hcnk6ICdVbmJsb2NrIHVzZXInLFxuICBkZXNjcmlwdGlvbjogJ1VuYmxvY2tzIGEgcHJldmlvdXNseSBibG9ja2VkIHVzZXInLFxuICBwYXJhbXM6IHtcbiAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICBibG9ja0lkOiB7XG4gICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0lEIG9mIHRoZSB1c2VyIHRvIHVuYmxvY2snXG4gICAgICB9XG4gICAgfSxcbiAgICByZXF1aXJlZDogWydibG9ja0lkJ11cbiAgfSxcbiAgcmVzcG9uc2U6IHtcbiAgICAyMDA6IHtcbiAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgcHJvcGVydGllczoge1xuICAgICAgICBzdWNjZXNzOiB7IHR5cGU6ICdib29sZWFuJyB9LFxuICAgICAgICBtZXNzYWdlOiB7IHR5cGU6ICdzdHJpbmcnIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIDQwMDoge1xuICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHN1Y2Nlc3M6IHsgdHlwZTogJ2Jvb2xlYW4nIH0sXG4gICAgICAgIG1lc3NhZ2U6IHsgdHlwZTogJ3N0cmluZycgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGdldEJsb2NrZWRVc2Vyc1NjaGVtYSA9IHtcbiAgdGFnczogWydCbG9jayBNYW5hZ2VtZW50J10sXG4gIHN1bW1hcnk6ICdHZXQgYmxvY2tlZCB1c2VycycsXG4gIGRlc2NyaXB0aW9uOiAnUmV0cmlldmVzIGxpc3Qgb2YgYmxvY2tlZCB1c2VycycsXG4gIHJlc3BvbnNlOiB7XG4gICAgMjAwOiB7XG4gICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgc3VjY2VzczogeyB0eXBlOiAnYm9vbGVhbicgfSxcbiAgICAgICAgbWVzc2FnZTogeyB0eXBlOiAnc3RyaW5nJyB9LFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgdHlwZTogJ2FycmF5JyxcbiAgICAgICAgICBpdGVtczoge1xuICAgICAgICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgIGlkOiB7IHR5cGU6ICdpbnRlZ2VyJyB9LFxuICAgICAgICAgICAgICB1c2VySWQ6IHsgdHlwZTogJ2ludGVnZXInIH0sXG4gICAgICAgICAgICAgIHVzZXJuYW1lOiB7IHR5cGU6ICdzdHJpbmcnIH0sXG4gICAgICAgICAgICAgIGZuYW1lOiB7IHR5cGU6ICdzdHJpbmcnIH0sXG4gICAgICAgICAgICAgIGxuYW1lOiB7IHR5cGU6ICdzdHJpbmcnIH0sXG4gICAgICAgICAgICAgIGJpbzogeyB0eXBlOiAnc3RyaW5nJywgbnVsbGFibGU6IHRydWUgfSxcbiAgICAgICAgICAgICAgYmFubmVyOiB7IHR5cGU6ICdzdHJpbmcnLCBudWxsYWJsZTogdHJ1ZSB9LFxuICAgICAgICAgICAgICBhdmF0YXI6IHsgdHlwZTogJ3N0cmluZycgfSxcbiAgICAgICAgICAgICAgc3RhdHVzOiB7IHR5cGU6ICdzdHJpbmcnIH0sXG4gICAgICAgICAgICAgIHdhbGxldEJhbGFuY2U6IHsgdHlwZTogJ251bWJlcicgfSxcbiAgICAgICAgICAgICAgcGxheWVyU3RhdHM6IHsgdHlwZTogJ29iamVjdCcgfSxcbiAgICAgICAgICAgICAgcGxheWVyQ2hhcmFjdGVyczogeyB0eXBlOiAnb2JqZWN0JyB9LFxuICAgICAgICAgICAgICBwbGF5ZXJTZWxlY3RlZENoYXJhY3RlcjogeyB0eXBlOiAnc3RyaW5nJywgbnVsbGFibGU6IHRydWUgfSxcbiAgICAgICAgICAgICAgcHJlZmVyZW5jZXM6IHsgdHlwZTogJ29iamVjdCcgfSxcbiAgICAgICAgICAgICAgbWF0Y2hIaXN0b3J5OiB7IHR5cGU6ICdvYmplY3QnIH0sXG4gICAgICAgICAgICAgIGlzVmVyaWZpZWQ6IHsgdHlwZTogJ2Jvb2xlYW4nIH0sXG4gICAgICAgICAgICAgIHJhbmtEaXZpc2lvbjogeyB0eXBlOiAnc3RyaW5nJyB9LFxuICAgICAgICAgICAgICByYW5rVGllcjogeyB0eXBlOiAnc3RyaW5nJyB9LFxuICAgICAgICAgICAgICB0b3RhbEdhbWVzOiB7IHR5cGU6ICdpbnRlZ2VyJyB9LFxuICAgICAgICAgICAgICB3aW5zOiB7IHR5cGU6ICdpbnRlZ2VyJyB9LFxuICAgICAgICAgICAgICBsb3NzZXM6IHsgdHlwZTogJ2ludGVnZXInIH0sXG4gICAgICAgICAgICAgIHJhbms6IHsgdHlwZTogJ2ludGVnZXInIH0sXG4gICAgICAgICAgICAgIGxldmVsOiB7IHR5cGU6ICdpbnRlZ2VyJyB9LFxuICAgICAgICAgICAgICBjcmVhdGVkQXQ6IHsgdHlwZTogJ3N0cmluZycsIGZvcm1hdDogJ2RhdGUtdGltZScgfSxcbiAgICAgICAgICAgICAgdXBkYXRlZEF0OiB7IHR5cGU6ICdzdHJpbmcnLCBmb3JtYXQ6ICdkYXRlLXRpbWUnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIDQwMDoge1xuICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHN1Y2Nlc3M6IHsgdHlwZTogJ2Jvb2xlYW4nIH0sXG4gICAgICAgIG1lc3NhZ2U6IHsgdHlwZTogJ3N0cmluZycgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufTsiXX0=