const { createClient } = require('redis');

const redisUrl = process.env.REDIS_URL || 'redis://localhost:6379';

const redis = createClient({ url: redisUrl });

redis.on('error', (err) => console.error('Redis Client Error', err));

async function connectRedis() {
  if (!redis.isOpen) await redis.connect();
  console.log('Redis connected:', redisUrl);
}

module.exports = { redis, connectRedis };




const { createClient } = require('redis');

const redisUrl = process.env.REDIS_URL || 'redis://localhost:6379';

const redis = createClient({ url: redisUrl });

redis.on('connect', () => console.log('Redis: connecting...'));
redis.on('ready', () => console.log('Redis: ready'));
redis.on('error', (err) => console.error('Redis error:', err));

async function initRedis() {
  if (!redis.isOpen) {
    await redis.connect();
  }
  return redis;
}

module.exports = { redis, initRedis };