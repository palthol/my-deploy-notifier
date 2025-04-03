import { Request, Response } from 'express';
import { DiscordWebhook } from './discord';

export const handleRenderWebhook = (req: Request, res: Response) => {
    const { status, name } = req.body;
    
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
    if (!webhookUrl) {
        console.error('DISCORD_WEBHOOK_URL is not set in environment variables');
        res.status(500).send('Discord webhook URL not configured');
        return;
    }
    
    const discordWebhook = new DiscordWebhook(webhookUrl);

    if (status === 'success') {
        discordWebhook.sendSuccessNotification(`Deployment of ${name} was successful!`);
    } else if (status === 'failure') {
        discordWebhook.sendFailureNotification(`Deployment of ${name} failed.`);
    }

    res.status(200).send('Webhook received');
};