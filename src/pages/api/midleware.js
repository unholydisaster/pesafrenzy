import cors from 'cors';

const corsMiddleware = cors({
  origin: '*',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
});

export default async function applyCorsMiddleware(req, res) {
  await new Promise((resolve, reject) => {
    corsMiddleware(req, res, (err) => {
      if (err) return reject(err);
      resolve();
    });
  });
}
