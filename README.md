# Deploy Notifier

A webhook service that sends deployment notifications from Netlify, Render, and Vercel to Discord.

## Overview

This application provides webhook endpoints that receive deployment notifications from popular hosting platforms and forwards them to a Discord channel using webhooks.

## Features

- Listens for deployment events from Vercel, Netlify, and Render
- Sends formatted notifications to Discord with:
  - Different colors for success/failure states
  - Deployment URLs when available
  - Project names and status information

## Tech Stack

- Node.js
- TypeScript
- Express.js
- Axios (for Discord webhook communication)
- dotenv (for environment variables)

## Installation

1. Clone the repository:

   ``` bash
   git clone <repository-url>
   cd deploy-notifier
   ```

2. Install dependencies:

   ``` bash
   npm install
   ```

3. Create a `.env` file:

   ``` bash
   DISCORD_WEBHOOK_URL=<your-discord-webhook-url>
   PORT=3001
   ```

4. Build the application:

   ``` bash

   npm run build

   ```

## Usage

### Running locally

``` bash
npm run dev
```

### Running in production

``` bash
npm start
```

### Setting up webhooks

#### Netlify

1. Go to your Netlify site settings
2. Navigate to Build & deploy → Deploy notifications
3. Add notification with outgoing webhook
4. Enter URL: `https://your-app-url/webhook/netlify`

#### Render

1. Go to your Render dashboard
2. Select your service
3. Navigate to Settings → Events
4. Add webhook URL: `https://your-app-url/webhook/render`

#### Vercel

1. Go to your Vercel project settings
2. Navigate to Webhooks
3. Add webhook URL: `https://your-app-url/webhook/vercel`

## Deployment

This application can be deployed to Render, Railway, Heroku, or any platform that supports Node.js applications.

## License

MIT
