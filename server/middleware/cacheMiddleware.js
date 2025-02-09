const redisCache = require('express-redis-cache')({
  host: process.env.REDIS_HOST || '127.0.0.1',
  port: process.env.REDIS_PORT || 6379,
  expire: 60 * 60,
});

const cacheMiddleware = (req, res, next) => {
  redisCache.get(req.originalUrl, (err, entries) => {
    if (err) {
      return next(err); 
    }

    if (entries.length > 0) {
      return res.json(JSON.parse(entries[0].body));
    }

    const sendResponse = res.json;
    res.json = (body) => {
      redisCache.add(req.originalUrl, JSON.stringify(body), { expire: 60 * 5 }, (err) => {
        if (err) {
          console.error('Error caching the response:', err);
        }
      });
      sendResponse.call(res, body);
    };

    next();
  });
};

module.exports = { redisCache, cacheMiddleware };
