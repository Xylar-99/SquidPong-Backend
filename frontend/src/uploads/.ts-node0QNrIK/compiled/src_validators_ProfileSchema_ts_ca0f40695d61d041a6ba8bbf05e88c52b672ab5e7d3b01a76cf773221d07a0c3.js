"use strict";
// Swagger Schemas for User Profile Routes
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUserSchema = exports.getUserByIdSchema = exports.getCurrentUserSchema = exports.deleteProfileSchema = exports.updateProfileSchema = exports.createProfileSchema = void 0;
exports.createProfileSchema = {
    tags: ['User Profile'],
    summary: 'Create user profile',
    description: 'Creates a new user profile',
    body: {
        type: 'object',
        properties: {
            id: {
                type: 'integer',
                description: 'User ID'
            },
            fname: {
                type: 'string',
                description: 'First name'
            },
            lname: {
                type: 'string',
                description: 'Last name'
            },
            username: {
                type: 'string',
                description: 'Username'
            },
            bio: {
                type: 'string',
                description: 'User biography (optional)'
            },
            avatar: {
                type: 'string',
                description: 'Avatar image URL'
            }
        },
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
exports.updateProfileSchema = {
    tags: ['User Profile'],
    summary: 'Update user profile',
    description: 'Updates the current user profile',
    body: {
        type: 'object',
        properties: {
            fname: {
                type: 'string',
                description: 'First name'
            },
            lname: {
                type: 'string',
                description: 'Last name'
            },
            username: {
                type: 'string',
                description: 'Username'
            },
            bio: {
                type: 'string',
                description: 'User biography'
            },
            avatar: {
                type: 'string',
                description: 'Avatar image URL'
            },
            banner: {
                type: 'string',
                description: 'Banner image URL'
            }
        }
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
exports.deleteProfileSchema = {
    tags: ['User Profile'],
    summary: 'Delete user profile',
    description: 'Deletes the current user profile',
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
exports.getCurrentUserSchema = {
    tags: ['User Profile'],
    summary: 'Get current user profile',
    description: 'Retrieves the current user profile information',
    response: {
        200: {
            type: 'object',
            properties: {
                success: { type: 'boolean' },
                message: { type: 'string' },
                data: {
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
                    },
                    nullable: true
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
exports.getUserByIdSchema = {
    tags: ['User Profile'],
    summary: 'Get user profile by ID',
    description: 'Retrieves a specific user profile by their ID',
    params: {
        type: 'object',
        properties: {
            id: {
                type: 'string',
                description: 'User ID'
            }
        },
        required: ['id']
    },
    response: {
        200: {
            type: 'object',
            properties: {
                success: { type: 'boolean' },
                message: { type: 'string' },
                data: {
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
                    },
                    nullable: true
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
exports.getAllUserSchema = {
    tags: ['User Profile'],
    summary: 'Get all available users',
    description: 'Retrieves all users that are not friends with the current user',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3VzZXIvc3JjL3ZhbGlkYXRvcnMvUHJvZmlsZVNjaGVtYS50cyIsInNvdXJjZXMiOlsiL3VzZXIvc3JjL3ZhbGlkYXRvcnMvUHJvZmlsZVNjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMENBQTBDOzs7QUFFN0IsUUFBQSxtQkFBbUIsR0FBRztJQUNqQyxJQUFJLEVBQUUsQ0FBQyxjQUFjLENBQUM7SUFDdEIsT0FBTyxFQUFFLHFCQUFxQjtJQUM5QixXQUFXLEVBQUUsNEJBQTRCO0lBQ3pDLElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxRQUFRO1FBQ2QsVUFBVSxFQUFFO1lBQ1YsRUFBRSxFQUFFO2dCQUNGLElBQUksRUFBRSxTQUFTO2dCQUNmLFdBQVcsRUFBRSxTQUFTO2FBQ3ZCO1lBQ0QsS0FBSyxFQUFFO2dCQUNMLElBQUksRUFBRSxRQUFRO2dCQUNkLFdBQVcsRUFBRSxZQUFZO2FBQzFCO1lBQ0QsS0FBSyxFQUFFO2dCQUNMLElBQUksRUFBRSxRQUFRO2dCQUNkLFdBQVcsRUFBRSxXQUFXO2FBQ3pCO1lBQ0QsUUFBUSxFQUFFO2dCQUNSLElBQUksRUFBRSxRQUFRO2dCQUNkLFdBQVcsRUFBRSxVQUFVO2FBQ3hCO1lBQ0QsR0FBRyxFQUFFO2dCQUNILElBQUksRUFBRSxRQUFRO2dCQUNkLFdBQVcsRUFBRSwyQkFBMkI7YUFDekM7WUFDRCxNQUFNLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsV0FBVyxFQUFFLGtCQUFrQjthQUNoQztTQUNGO0tBQ0Y7SUFDRCxRQUFRLEVBQUU7UUFDUixHQUFHLEVBQUU7WUFDSCxJQUFJLEVBQUUsUUFBUTtZQUNkLFVBQVUsRUFBRTtnQkFDVixPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFO2dCQUM1QixPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO2FBQzVCO1NBQ0Y7UUFDRCxHQUFHLEVBQUU7WUFDSCxJQUFJLEVBQUUsUUFBUTtZQUNkLFVBQVUsRUFBRTtnQkFDVixPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFO2dCQUM1QixPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO2FBQzVCO1NBQ0Y7S0FDRjtDQUNGLENBQUM7QUFFVyxRQUFBLG1CQUFtQixHQUFHO0lBQ2pDLElBQUksRUFBRSxDQUFDLGNBQWMsQ0FBQztJQUN0QixPQUFPLEVBQUUscUJBQXFCO0lBQzlCLFdBQVcsRUFBRSxrQ0FBa0M7SUFDL0MsSUFBSSxFQUFFO1FBQ0osSUFBSSxFQUFFLFFBQVE7UUFDZCxVQUFVLEVBQUU7WUFDVixLQUFLLEVBQUU7Z0JBQ0wsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsV0FBVyxFQUFFLFlBQVk7YUFDMUI7WUFDRCxLQUFLLEVBQUU7Z0JBQ0wsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsV0FBVyxFQUFFLFdBQVc7YUFDekI7WUFDRCxRQUFRLEVBQUU7Z0JBQ1IsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsV0FBVyxFQUFFLFVBQVU7YUFDeEI7WUFDRCxHQUFHLEVBQUU7Z0JBQ0gsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsV0FBVyxFQUFFLGdCQUFnQjthQUM5QjtZQUNELE1BQU0sRUFBRTtnQkFDTixJQUFJLEVBQUUsUUFBUTtnQkFDZCxXQUFXLEVBQUUsa0JBQWtCO2FBQ2hDO1lBQ0QsTUFBTSxFQUFFO2dCQUNOLElBQUksRUFBRSxRQUFRO2dCQUNkLFdBQVcsRUFBRSxrQkFBa0I7YUFDaEM7U0FDRjtLQUNGO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsR0FBRyxFQUFFO1lBQ0gsSUFBSSxFQUFFLFFBQVE7WUFDZCxVQUFVLEVBQUU7Z0JBQ1YsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRTtnQkFDNUIsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTthQUM1QjtTQUNGO1FBQ0QsR0FBRyxFQUFFO1lBQ0gsSUFBSSxFQUFFLFFBQVE7WUFDZCxVQUFVLEVBQUU7Z0JBQ1YsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRTtnQkFDNUIsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTthQUM1QjtTQUNGO0tBQ0Y7Q0FDRixDQUFDO0FBRVcsUUFBQSxtQkFBbUIsR0FBRztJQUNqQyxJQUFJLEVBQUUsQ0FBQyxjQUFjLENBQUM7SUFDdEIsT0FBTyxFQUFFLHFCQUFxQjtJQUM5QixXQUFXLEVBQUUsa0NBQWtDO0lBQy9DLFFBQVEsRUFBRTtRQUNSLEdBQUcsRUFBRTtZQUNILElBQUksRUFBRSxRQUFRO1lBQ2QsVUFBVSxFQUFFO2dCQUNWLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUU7Z0JBQzVCLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7YUFDNUI7U0FDRjtRQUNELEdBQUcsRUFBRTtZQUNILElBQUksRUFBRSxRQUFRO1lBQ2QsVUFBVSxFQUFFO2dCQUNWLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUU7Z0JBQzVCLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7YUFDNUI7U0FDRjtLQUNGO0NBQ0YsQ0FBQztBQUVXLFFBQUEsb0JBQW9CLEdBQUc7SUFDbEMsSUFBSSxFQUFFLENBQUMsY0FBYyxDQUFDO0lBQ3RCLE9BQU8sRUFBRSwwQkFBMEI7SUFDbkMsV0FBVyxFQUFFLGdEQUFnRDtJQUM3RCxRQUFRLEVBQUU7UUFDUixHQUFHLEVBQUU7WUFDSCxJQUFJLEVBQUUsUUFBUTtZQUNkLFVBQVUsRUFBRTtnQkFDVixPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFO2dCQUM1QixPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO2dCQUMzQixJQUFJLEVBQUU7b0JBQ0osSUFBSSxFQUFFLFFBQVE7b0JBQ2QsVUFBVSxFQUFFO3dCQUNWLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUU7d0JBQ3ZCLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUU7d0JBQzNCLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7d0JBQzVCLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7d0JBQ3pCLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7d0JBQ3pCLEdBQUcsRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTt3QkFDdkMsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO3dCQUMxQyxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO3dCQUMxQixNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO3dCQUMxQixhQUFhLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO3dCQUNqQyxXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO3dCQUMvQixnQkFBZ0IsRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7d0JBQ3BDLHVCQUF1QixFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO3dCQUMzRCxXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO3dCQUMvQixZQUFZLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO3dCQUNoQyxVQUFVLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFO3dCQUMvQixZQUFZLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO3dCQUNoQyxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO3dCQUM1QixVQUFVLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFO3dCQUMvQixJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFO3dCQUN6QixNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFO3dCQUMzQixJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFO3dCQUN6QixLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFO3dCQUMxQixTQUFTLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7d0JBQ2xELFNBQVMsRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtxQkFDbkQ7b0JBQ0QsUUFBUSxFQUFFLElBQUk7aUJBQ2Y7YUFDRjtTQUNGO1FBQ0QsR0FBRyxFQUFFO1lBQ0gsSUFBSSxFQUFFLFFBQVE7WUFDZCxVQUFVLEVBQUU7Z0JBQ1YsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRTtnQkFDNUIsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTthQUM1QjtTQUNGO0tBQ0Y7Q0FDRixDQUFDO0FBRVcsUUFBQSxpQkFBaUIsR0FBRztJQUMvQixJQUFJLEVBQUUsQ0FBQyxjQUFjLENBQUM7SUFDdEIsT0FBTyxFQUFFLHdCQUF3QjtJQUNqQyxXQUFXLEVBQUUsK0NBQStDO0lBQzVELE1BQU0sRUFBRTtRQUNOLElBQUksRUFBRSxRQUFRO1FBQ2QsVUFBVSxFQUFFO1lBQ1YsRUFBRSxFQUFFO2dCQUNGLElBQUksRUFBRSxRQUFRO2dCQUNkLFdBQVcsRUFBRSxTQUFTO2FBQ3ZCO1NBQ0Y7UUFDRCxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUM7S0FDakI7SUFDRCxRQUFRLEVBQUU7UUFDUixHQUFHLEVBQUU7WUFDSCxJQUFJLEVBQUUsUUFBUTtZQUNkLFVBQVUsRUFBRTtnQkFDVixPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFO2dCQUM1QixPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO2dCQUMzQixJQUFJLEVBQUU7b0JBQ0osSUFBSSxFQUFFLFFBQVE7b0JBQ2QsVUFBVSxFQUFFO3dCQUNWLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUU7d0JBQ3ZCLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUU7d0JBQzNCLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7d0JBQzVCLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7d0JBQ3pCLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7d0JBQ3pCLEdBQUcsRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTt3QkFDdkMsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO3dCQUMxQyxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO3dCQUMxQixNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO3dCQUMxQixhQUFhLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO3dCQUNqQyxXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO3dCQUMvQixnQkFBZ0IsRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7d0JBQ3BDLHVCQUF1QixFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO3dCQUMzRCxXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO3dCQUMvQixZQUFZLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO3dCQUNoQyxVQUFVLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFO3dCQUMvQixZQUFZLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO3dCQUNoQyxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO3dCQUM1QixVQUFVLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFO3dCQUMvQixJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFO3dCQUN6QixNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFO3dCQUMzQixJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFO3dCQUN6QixLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFO3dCQUMxQixTQUFTLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7d0JBQ2xELFNBQVMsRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtxQkFDbkQ7b0JBQ0QsUUFBUSxFQUFFLElBQUk7aUJBQ2Y7YUFDRjtTQUNGO1FBQ0QsR0FBRyxFQUFFO1lBQ0gsSUFBSSxFQUFFLFFBQVE7WUFDZCxVQUFVLEVBQUU7Z0JBQ1YsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRTtnQkFDNUIsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTthQUM1QjtTQUNGO0tBQ0Y7Q0FDRixDQUFDO0FBRVcsUUFBQSxnQkFBZ0IsR0FBRztJQUM5QixJQUFJLEVBQUUsQ0FBQyxjQUFjLENBQUM7SUFDdEIsT0FBTyxFQUFFLHlCQUF5QjtJQUNsQyxXQUFXLEVBQUUsZ0VBQWdFO0lBQzdFLFFBQVEsRUFBRTtRQUNSLEdBQUcsRUFBRTtZQUNILElBQUksRUFBRSxRQUFRO1lBQ2QsVUFBVSxFQUFFO2dCQUNWLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUU7Z0JBQzVCLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7Z0JBQzNCLElBQUksRUFBRTtvQkFDSixJQUFJLEVBQUUsT0FBTztvQkFDYixLQUFLLEVBQUU7d0JBQ0wsSUFBSSxFQUFFLFFBQVE7d0JBQ2QsVUFBVSxFQUFFOzRCQUNWLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUU7NEJBQ3ZCLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUU7NEJBQzNCLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7NEJBQzVCLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7NEJBQ3pCLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7NEJBQ3pCLEdBQUcsRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTs0QkFDdkMsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFOzRCQUMxQyxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFOzRCQUMxQixNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFOzRCQUMxQixhQUFhLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFOzRCQUNqQyxXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFOzRCQUMvQixnQkFBZ0IsRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7NEJBQ3BDLHVCQUF1QixFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFOzRCQUMzRCxXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFOzRCQUMvQixZQUFZLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFOzRCQUNoQyxVQUFVLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFOzRCQUMvQixZQUFZLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFOzRCQUNoQyxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFOzRCQUM1QixVQUFVLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFOzRCQUMvQixJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFOzRCQUN6QixNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFOzRCQUMzQixJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFOzRCQUN6QixLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFOzRCQUMxQixTQUFTLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7NEJBQ2xELFNBQVMsRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTt5QkFDbkQ7cUJBQ0Y7aUJBQ0Y7YUFDRjtTQUNGO1FBQ0QsR0FBRyxFQUFFO1lBQ0gsSUFBSSxFQUFFLFFBQVE7WUFDZCxVQUFVLEVBQUU7Z0JBQ1YsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRTtnQkFDNUIsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTthQUM1QjtTQUNGO0tBQ0Y7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gU3dhZ2dlciBTY2hlbWFzIGZvciBVc2VyIFByb2ZpbGUgUm91dGVzXG5cbmV4cG9ydCBjb25zdCBjcmVhdGVQcm9maWxlU2NoZW1hID0ge1xuICB0YWdzOiBbJ1VzZXIgUHJvZmlsZSddLFxuICBzdW1tYXJ5OiAnQ3JlYXRlIHVzZXIgcHJvZmlsZScsXG4gIGRlc2NyaXB0aW9uOiAnQ3JlYXRlcyBhIG5ldyB1c2VyIHByb2ZpbGUnLFxuICBib2R5OiB7XG4gICAgdHlwZTogJ29iamVjdCcsXG4gICAgcHJvcGVydGllczoge1xuICAgICAgaWQ6IHtcbiAgICAgICAgdHlwZTogJ2ludGVnZXInLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1VzZXIgSUQnXG4gICAgICB9LFxuICAgICAgZm5hbWU6IHtcbiAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnRmlyc3QgbmFtZSdcbiAgICAgIH0sXG4gICAgICBsbmFtZToge1xuICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdMYXN0IG5hbWUnXG4gICAgICB9LFxuICAgICAgdXNlcm5hbWU6IHtcbiAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVXNlcm5hbWUnXG4gICAgICB9LFxuICAgICAgYmlvOiB7XG4gICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1VzZXIgYmlvZ3JhcGh5IChvcHRpb25hbCknXG4gICAgICB9LFxuICAgICAgYXZhdGFyOiB7XG4gICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0F2YXRhciBpbWFnZSBVUkwnXG4gICAgICB9XG4gICAgfSxcbiAgfSxcbiAgcmVzcG9uc2U6IHtcbiAgICAyMDA6IHtcbiAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgcHJvcGVydGllczoge1xuICAgICAgICBzdWNjZXNzOiB7IHR5cGU6ICdib29sZWFuJyB9LFxuICAgICAgICBtZXNzYWdlOiB7IHR5cGU6ICdzdHJpbmcnIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIDQwMDoge1xuICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHN1Y2Nlc3M6IHsgdHlwZTogJ2Jvb2xlYW4nIH0sXG4gICAgICAgIG1lc3NhZ2U6IHsgdHlwZTogJ3N0cmluZycgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVByb2ZpbGVTY2hlbWEgPSB7XG4gIHRhZ3M6IFsnVXNlciBQcm9maWxlJ10sXG4gIHN1bW1hcnk6ICdVcGRhdGUgdXNlciBwcm9maWxlJyxcbiAgZGVzY3JpcHRpb246ICdVcGRhdGVzIHRoZSBjdXJyZW50IHVzZXIgcHJvZmlsZScsXG4gIGJvZHk6IHtcbiAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICBmbmFtZToge1xuICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdGaXJzdCBuYW1lJ1xuICAgICAgfSxcbiAgICAgIGxuYW1lOiB7XG4gICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0xhc3QgbmFtZSdcbiAgICAgIH0sXG4gICAgICB1c2VybmFtZToge1xuICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdVc2VybmFtZSdcbiAgICAgIH0sXG4gICAgICBiaW86IHtcbiAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVXNlciBiaW9ncmFwaHknXG4gICAgICB9LFxuICAgICAgYXZhdGFyOiB7XG4gICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0F2YXRhciBpbWFnZSBVUkwnXG4gICAgICB9LFxuICAgICAgYmFubmVyOiB7XG4gICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0Jhbm5lciBpbWFnZSBVUkwnXG4gICAgICB9XG4gICAgfVxuICB9LFxuICByZXNwb25zZToge1xuICAgIDIwMDoge1xuICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHN1Y2Nlc3M6IHsgdHlwZTogJ2Jvb2xlYW4nIH0sXG4gICAgICAgIG1lc3NhZ2U6IHsgdHlwZTogJ3N0cmluZycgfVxuICAgICAgfVxuICAgIH0sXG4gICAgNDAwOiB7XG4gICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgc3VjY2VzczogeyB0eXBlOiAnYm9vbGVhbicgfSxcbiAgICAgICAgbWVzc2FnZTogeyB0eXBlOiAnc3RyaW5nJyB9XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZGVsZXRlUHJvZmlsZVNjaGVtYSA9IHtcbiAgdGFnczogWydVc2VyIFByb2ZpbGUnXSxcbiAgc3VtbWFyeTogJ0RlbGV0ZSB1c2VyIHByb2ZpbGUnLFxuICBkZXNjcmlwdGlvbjogJ0RlbGV0ZXMgdGhlIGN1cnJlbnQgdXNlciBwcm9maWxlJyxcbiAgcmVzcG9uc2U6IHtcbiAgICAyMDA6IHtcbiAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgcHJvcGVydGllczoge1xuICAgICAgICBzdWNjZXNzOiB7IHR5cGU6ICdib29sZWFuJyB9LFxuICAgICAgICBtZXNzYWdlOiB7IHR5cGU6ICdzdHJpbmcnIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIDQwMDoge1xuICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHN1Y2Nlc3M6IHsgdHlwZTogJ2Jvb2xlYW4nIH0sXG4gICAgICAgIG1lc3NhZ2U6IHsgdHlwZTogJ3N0cmluZycgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGdldEN1cnJlbnRVc2VyU2NoZW1hID0ge1xuICB0YWdzOiBbJ1VzZXIgUHJvZmlsZSddLFxuICBzdW1tYXJ5OiAnR2V0IGN1cnJlbnQgdXNlciBwcm9maWxlJyxcbiAgZGVzY3JpcHRpb246ICdSZXRyaWV2ZXMgdGhlIGN1cnJlbnQgdXNlciBwcm9maWxlIGluZm9ybWF0aW9uJyxcbiAgcmVzcG9uc2U6IHtcbiAgICAyMDA6IHtcbiAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgcHJvcGVydGllczoge1xuICAgICAgICBzdWNjZXNzOiB7IHR5cGU6ICdib29sZWFuJyB9LFxuICAgICAgICBtZXNzYWdlOiB7IHR5cGU6ICdzdHJpbmcnIH0sXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICBpZDogeyB0eXBlOiAnaW50ZWdlcicgfSxcbiAgICAgICAgICAgIHVzZXJJZDogeyB0eXBlOiAnaW50ZWdlcicgfSxcbiAgICAgICAgICAgIHVzZXJuYW1lOiB7IHR5cGU6ICdzdHJpbmcnIH0sXG4gICAgICAgICAgICBmbmFtZTogeyB0eXBlOiAnc3RyaW5nJyB9LFxuICAgICAgICAgICAgbG5hbWU6IHsgdHlwZTogJ3N0cmluZycgfSxcbiAgICAgICAgICAgIGJpbzogeyB0eXBlOiAnc3RyaW5nJywgbnVsbGFibGU6IHRydWUgfSxcbiAgICAgICAgICAgIGJhbm5lcjogeyB0eXBlOiAnc3RyaW5nJywgbnVsbGFibGU6IHRydWUgfSxcbiAgICAgICAgICAgIGF2YXRhcjogeyB0eXBlOiAnc3RyaW5nJyB9LFxuICAgICAgICAgICAgc3RhdHVzOiB7IHR5cGU6ICdzdHJpbmcnIH0sXG4gICAgICAgICAgICB3YWxsZXRCYWxhbmNlOiB7IHR5cGU6ICdudW1iZXInIH0sXG4gICAgICAgICAgICBwbGF5ZXJTdGF0czogeyB0eXBlOiAnb2JqZWN0JyB9LFxuICAgICAgICAgICAgcGxheWVyQ2hhcmFjdGVyczogeyB0eXBlOiAnb2JqZWN0JyB9LFxuICAgICAgICAgICAgcGxheWVyU2VsZWN0ZWRDaGFyYWN0ZXI6IHsgdHlwZTogJ3N0cmluZycsIG51bGxhYmxlOiB0cnVlIH0sXG4gICAgICAgICAgICBwcmVmZXJlbmNlczogeyB0eXBlOiAnb2JqZWN0JyB9LFxuICAgICAgICAgICAgbWF0Y2hIaXN0b3J5OiB7IHR5cGU6ICdvYmplY3QnIH0sXG4gICAgICAgICAgICBpc1ZlcmlmaWVkOiB7IHR5cGU6ICdib29sZWFuJyB9LFxuICAgICAgICAgICAgcmFua0RpdmlzaW9uOiB7IHR5cGU6ICdzdHJpbmcnIH0sXG4gICAgICAgICAgICByYW5rVGllcjogeyB0eXBlOiAnc3RyaW5nJyB9LFxuICAgICAgICAgICAgdG90YWxHYW1lczogeyB0eXBlOiAnaW50ZWdlcicgfSxcbiAgICAgICAgICAgIHdpbnM6IHsgdHlwZTogJ2ludGVnZXInIH0sXG4gICAgICAgICAgICBsb3NzZXM6IHsgdHlwZTogJ2ludGVnZXInIH0sXG4gICAgICAgICAgICByYW5rOiB7IHR5cGU6ICdpbnRlZ2VyJyB9LFxuICAgICAgICAgICAgbGV2ZWw6IHsgdHlwZTogJ2ludGVnZXInIH0sXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IHsgdHlwZTogJ3N0cmluZycsIGZvcm1hdDogJ2RhdGUtdGltZScgfSxcbiAgICAgICAgICAgIHVwZGF0ZWRBdDogeyB0eXBlOiAnc3RyaW5nJywgZm9ybWF0OiAnZGF0ZS10aW1lJyB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBudWxsYWJsZTogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICA0MDA6IHtcbiAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgcHJvcGVydGllczoge1xuICAgICAgICBzdWNjZXNzOiB7IHR5cGU6ICdib29sZWFuJyB9LFxuICAgICAgICBtZXNzYWdlOiB7IHR5cGU6ICdzdHJpbmcnIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBnZXRVc2VyQnlJZFNjaGVtYSA9IHtcbiAgdGFnczogWydVc2VyIFByb2ZpbGUnXSxcbiAgc3VtbWFyeTogJ0dldCB1c2VyIHByb2ZpbGUgYnkgSUQnLFxuICBkZXNjcmlwdGlvbjogJ1JldHJpZXZlcyBhIHNwZWNpZmljIHVzZXIgcHJvZmlsZSBieSB0aGVpciBJRCcsXG4gIHBhcmFtczoge1xuICAgIHR5cGU6ICdvYmplY3QnLFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgIGlkOiB7XG4gICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1VzZXIgSUQnXG4gICAgICB9XG4gICAgfSxcbiAgICByZXF1aXJlZDogWydpZCddXG4gIH0sXG4gIHJlc3BvbnNlOiB7XG4gICAgMjAwOiB7XG4gICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgc3VjY2VzczogeyB0eXBlOiAnYm9vbGVhbicgfSxcbiAgICAgICAgbWVzc2FnZTogeyB0eXBlOiAnc3RyaW5nJyB9LFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgaWQ6IHsgdHlwZTogJ2ludGVnZXInIH0sXG4gICAgICAgICAgICB1c2VySWQ6IHsgdHlwZTogJ2ludGVnZXInIH0sXG4gICAgICAgICAgICB1c2VybmFtZTogeyB0eXBlOiAnc3RyaW5nJyB9LFxuICAgICAgICAgICAgZm5hbWU6IHsgdHlwZTogJ3N0cmluZycgfSxcbiAgICAgICAgICAgIGxuYW1lOiB7IHR5cGU6ICdzdHJpbmcnIH0sXG4gICAgICAgICAgICBiaW86IHsgdHlwZTogJ3N0cmluZycsIG51bGxhYmxlOiB0cnVlIH0sXG4gICAgICAgICAgICBiYW5uZXI6IHsgdHlwZTogJ3N0cmluZycsIG51bGxhYmxlOiB0cnVlIH0sXG4gICAgICAgICAgICBhdmF0YXI6IHsgdHlwZTogJ3N0cmluZycgfSxcbiAgICAgICAgICAgIHN0YXR1czogeyB0eXBlOiAnc3RyaW5nJyB9LFxuICAgICAgICAgICAgd2FsbGV0QmFsYW5jZTogeyB0eXBlOiAnbnVtYmVyJyB9LFxuICAgICAgICAgICAgcGxheWVyU3RhdHM6IHsgdHlwZTogJ29iamVjdCcgfSxcbiAgICAgICAgICAgIHBsYXllckNoYXJhY3RlcnM6IHsgdHlwZTogJ29iamVjdCcgfSxcbiAgICAgICAgICAgIHBsYXllclNlbGVjdGVkQ2hhcmFjdGVyOiB7IHR5cGU6ICdzdHJpbmcnLCBudWxsYWJsZTogdHJ1ZSB9LFxuICAgICAgICAgICAgcHJlZmVyZW5jZXM6IHsgdHlwZTogJ29iamVjdCcgfSxcbiAgICAgICAgICAgIG1hdGNoSGlzdG9yeTogeyB0eXBlOiAnb2JqZWN0JyB9LFxuICAgICAgICAgICAgaXNWZXJpZmllZDogeyB0eXBlOiAnYm9vbGVhbicgfSxcbiAgICAgICAgICAgIHJhbmtEaXZpc2lvbjogeyB0eXBlOiAnc3RyaW5nJyB9LFxuICAgICAgICAgICAgcmFua1RpZXI6IHsgdHlwZTogJ3N0cmluZycgfSxcbiAgICAgICAgICAgIHRvdGFsR2FtZXM6IHsgdHlwZTogJ2ludGVnZXInIH0sXG4gICAgICAgICAgICB3aW5zOiB7IHR5cGU6ICdpbnRlZ2VyJyB9LFxuICAgICAgICAgICAgbG9zc2VzOiB7IHR5cGU6ICdpbnRlZ2VyJyB9LFxuICAgICAgICAgICAgcmFuazogeyB0eXBlOiAnaW50ZWdlcicgfSxcbiAgICAgICAgICAgIGxldmVsOiB7IHR5cGU6ICdpbnRlZ2VyJyB9LFxuICAgICAgICAgICAgY3JlYXRlZEF0OiB7IHR5cGU6ICdzdHJpbmcnLCBmb3JtYXQ6ICdkYXRlLXRpbWUnIH0sXG4gICAgICAgICAgICB1cGRhdGVkQXQ6IHsgdHlwZTogJ3N0cmluZycsIGZvcm1hdDogJ2RhdGUtdGltZScgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgbnVsbGFibGU6IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgNDAwOiB7XG4gICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgc3VjY2VzczogeyB0eXBlOiAnYm9vbGVhbicgfSxcbiAgICAgICAgbWVzc2FnZTogeyB0eXBlOiAnc3RyaW5nJyB9XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0QWxsVXNlclNjaGVtYSA9IHtcbiAgdGFnczogWydVc2VyIFByb2ZpbGUnXSxcbiAgc3VtbWFyeTogJ0dldCBhbGwgYXZhaWxhYmxlIHVzZXJzJyxcbiAgZGVzY3JpcHRpb246ICdSZXRyaWV2ZXMgYWxsIHVzZXJzIHRoYXQgYXJlIG5vdCBmcmllbmRzIHdpdGggdGhlIGN1cnJlbnQgdXNlcicsXG4gIHJlc3BvbnNlOiB7XG4gICAgMjAwOiB7XG4gICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgc3VjY2VzczogeyB0eXBlOiAnYm9vbGVhbicgfSxcbiAgICAgICAgbWVzc2FnZTogeyB0eXBlOiAnc3RyaW5nJyB9LFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgdHlwZTogJ2FycmF5JyxcbiAgICAgICAgICBpdGVtczoge1xuICAgICAgICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgIGlkOiB7IHR5cGU6ICdpbnRlZ2VyJyB9LFxuICAgICAgICAgICAgICB1c2VySWQ6IHsgdHlwZTogJ2ludGVnZXInIH0sXG4gICAgICAgICAgICAgIHVzZXJuYW1lOiB7IHR5cGU6ICdzdHJpbmcnIH0sXG4gICAgICAgICAgICAgIGZuYW1lOiB7IHR5cGU6ICdzdHJpbmcnIH0sXG4gICAgICAgICAgICAgIGxuYW1lOiB7IHR5cGU6ICdzdHJpbmcnIH0sXG4gICAgICAgICAgICAgIGJpbzogeyB0eXBlOiAnc3RyaW5nJywgbnVsbGFibGU6IHRydWUgfSxcbiAgICAgICAgICAgICAgYmFubmVyOiB7IHR5cGU6ICdzdHJpbmcnLCBudWxsYWJsZTogdHJ1ZSB9LFxuICAgICAgICAgICAgICBhdmF0YXI6IHsgdHlwZTogJ3N0cmluZycgfSxcbiAgICAgICAgICAgICAgc3RhdHVzOiB7IHR5cGU6ICdzdHJpbmcnIH0sXG4gICAgICAgICAgICAgIHdhbGxldEJhbGFuY2U6IHsgdHlwZTogJ251bWJlcicgfSxcbiAgICAgICAgICAgICAgcGxheWVyU3RhdHM6IHsgdHlwZTogJ29iamVjdCcgfSxcbiAgICAgICAgICAgICAgcGxheWVyQ2hhcmFjdGVyczogeyB0eXBlOiAnb2JqZWN0JyB9LFxuICAgICAgICAgICAgICBwbGF5ZXJTZWxlY3RlZENoYXJhY3RlcjogeyB0eXBlOiAnc3RyaW5nJywgbnVsbGFibGU6IHRydWUgfSxcbiAgICAgICAgICAgICAgcHJlZmVyZW5jZXM6IHsgdHlwZTogJ29iamVjdCcgfSxcbiAgICAgICAgICAgICAgbWF0Y2hIaXN0b3J5OiB7IHR5cGU6ICdvYmplY3QnIH0sXG4gICAgICAgICAgICAgIGlzVmVyaWZpZWQ6IHsgdHlwZTogJ2Jvb2xlYW4nIH0sXG4gICAgICAgICAgICAgIHJhbmtEaXZpc2lvbjogeyB0eXBlOiAnc3RyaW5nJyB9LFxuICAgICAgICAgICAgICByYW5rVGllcjogeyB0eXBlOiAnc3RyaW5nJyB9LFxuICAgICAgICAgICAgICB0b3RhbEdhbWVzOiB7IHR5cGU6ICdpbnRlZ2VyJyB9LFxuICAgICAgICAgICAgICB3aW5zOiB7IHR5cGU6ICdpbnRlZ2VyJyB9LFxuICAgICAgICAgICAgICBsb3NzZXM6IHsgdHlwZTogJ2ludGVnZXInIH0sXG4gICAgICAgICAgICAgIHJhbms6IHsgdHlwZTogJ2ludGVnZXInIH0sXG4gICAgICAgICAgICAgIGxldmVsOiB7IHR5cGU6ICdpbnRlZ2VyJyB9LFxuICAgICAgICAgICAgICBjcmVhdGVkQXQ6IHsgdHlwZTogJ3N0cmluZycsIGZvcm1hdDogJ2RhdGUtdGltZScgfSxcbiAgICAgICAgICAgICAgdXBkYXRlZEF0OiB7IHR5cGU6ICdzdHJpbmcnLCBmb3JtYXQ6ICdkYXRlLXRpbWUnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIDQwMDoge1xuICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHN1Y2Nlc3M6IHsgdHlwZTogJ2Jvb2xlYW4nIH0sXG4gICAgICAgIG1lc3NhZ2U6IHsgdHlwZTogJ3N0cmluZycgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufTsiXX0=