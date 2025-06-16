import Redis from 'ioredis';

const redis = new Redis({
  host: 'redis',
  port: 6379,
  // password: 'your-password', // if needed
});

export default redis;
