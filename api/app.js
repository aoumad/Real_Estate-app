import express from 'express';
import authRoute from './routes/auth.route.js';

const app = express();

app.use(express.json());

app.use("/auth", authRoute);

app.listen(8800, () => {
    console.log('Server started on http://localhost:8800');
})