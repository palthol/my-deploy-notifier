import { Request, Response } from 'express';
import { DiscordWebhook } from './discord';

export const handleVercelWebhook = (req: Request, res: Response) => {
    const { type, payload } = req.body;
    
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
    if (!webhookUrl) {
        console.error('DISCORD_WEBHOOK_URL is not set in environment variables');
        res.status(500).send('Discord webhook URL not configured');
        return;
    }
    
    const discordWebhook = new DiscordWebhook(webhookUrl);

    if (type === 'deployment') {
        const { state, url } = payload;

        if (state === 'READY') {
            discordWebhook.sendSuccessNotification(`Deployment successful! View it here: ${url}`);
        } else if (state === 'ERROR') {
            discordWebhook.sendFailureNotification(`Deployment failed! Check the logs for more details.`);
        }
    }

    res.status(200).send('Webhook received');
};