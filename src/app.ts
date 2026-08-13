import express from 'express';
import { userRouter } from './routes/user.route.js';
import { appErrorHandler } from './middlewares/error.middleware.js';
import { notFoundHandler } from './middlewares/not-found.middleware.js';

const app = express();

app.use(express.json());
app.use(express.text());

app.get('/health', (_req, res) => {
    res.send({
        status: 'OK'
    });
});

app.use('/api/users', userRouter);
app.use(notFoundHandler);

app.use(appErrorHandler);

export { app };