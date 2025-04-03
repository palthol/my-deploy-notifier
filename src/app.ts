import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { handleNetlifyWebhook } from './services/netlify';
import { handleRenderWebhook } from './services/render';
import { handleVercelWebhook } from './services/vercel';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/webhook/netlify', handleNetlifyWebhook);
app.post('/webhook/render', handleRenderWebhook);
app.post('/webhook/vercel', handleVercelWebhook);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});