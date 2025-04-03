import axios from 'axios';

export class DiscordWebhook {
    private webhookUrl: string;

    constructor(webhookUrl: string) {
        this.webhookUrl = webhookUrl;
    }

    public async sendSuccessNotification(message: string): Promise<void> {
        await this.sendNotification('✅ Deployment Successful', message);
    }

    public async sendFailureNotification(message: string): Promise<void> {
        await this.sendNotification('❌ Deployment Failed', message);
    }

    private async sendNotification(title: string, message: string): Promise<void> {
        const payload = {
            embeds: [
                {
                    title: title,
                    description: message,
                    color: title.includes('Successful') ? 3066993 : 15158332,
                },
            ],
        };

        try {
            await axios.post(this.webhookUrl, payload);
        } catch (error) {
            console.error('Error sending notification to Discord:', error);
        }
    }
}