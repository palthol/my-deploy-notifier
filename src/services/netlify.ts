import { Request, Response } from 'express';
import { DiscordWebhook } from './discord';

export const handleNetlifyWebhook = (req: Request, res: Response) => {
    const { status, deploy_url } = req.body;
    
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
    if (!webhookUrl) {
        console.error('DISCORD_WEBHOOK_URL is not set in environment variables');
        res.status(500).send('Discord webhook URL not configured');
        return;
    }
    
    const discordWebhook = new DiscordWebhook(webhookUrl);

    if (status === 'success') {
        discordWebhook.sendSuccessNotification(`Netlify deployment succeeded: ${deploy_url}`);
    } else if (status === 'failed') {
        discordWebhook.sendFailureNotification(`Netlify deployment failed: ${deploy_url}`);
    }

    res.status(200).send('Webhook received');
};