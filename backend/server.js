
require('dotenv').config();

const express = require('express');
const { initRedis, redis } = require('./redisClient');

const app = express();
app.use(express.json());

// Start Redis connection on server startup
initRedis().catch((e) => {
  console.error('Failed to connect to Redis:', e);
});


app.get('/health/redis', async (req, res) => {
  try {
    const pong = await redis.ping();
    res.json({ ok: true, ping: pong });
  } catch (e) {
    res.status(500).json({ ok: false, error: String(e) });
  }
});

// keep this at the bottom
app.listen(3000, () => console.log('Server on 3000'));