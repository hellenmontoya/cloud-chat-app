# Cloud Chat App

A real-time chat application deployed on AWS EC2 with secure HTTPS, custom domain, and process management.

## Features

- Real-time messaging using Socket.io
- User-supplied usernames, timestamps, emoji support, and reply buttons
- Secure hosting on AWS EC2 with Nginx reverse proxy
- Custom domain: `cloudtalkhub422.online` \(HTTPS via Let’s Encrypt\)
- PM2 process manager for 24/7 uptime

## Getting Started

### Prerequisites

- Node.js (>= 14.x) and npm installed
- Git
- An AWS EC2 instance (Ubuntu) or any Linux server
- A registered domain name pointed to your server IP

### Installation

1. Clone the repo:
   ```bash
   git clone https://github.com/hellenmontoya/cloud-chat-app.git
   cd cloud-chat-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server with PM2 (optional but recommended):
   ```bash
   pm2 start server.js --name cloud-chat
   pm2 save
   pm2 startup
   ```

4. Or run locally:
   ```bash
   node server.js
   ```

5. Open your browser at:
   ```
http://localhost:3000
``` or your domain `https://cloudtalkhub422.online`.


## Deployment Guide

This app is configured for production with Nginx and PM2:

1. **Provision an Ubuntu EC2 instance** and SSH in.
2. **Install Node.js** and PM2 on the server.
3. **Clone** this repository into `~/cloud-chat-app`.
4. **Install** dependencies: `npm install`.
5. **Configure Nginx** to reverse-proxy port 80/443 to localhost:3000.
6. **Obtain SSL** with Certbot:
   ```bash
   sudo certbot --nginx -d cloudtalkhub422.online -d www.cloudtalkhub422.online
   ```
7. **Enable PM2 startup**:
   ```bash
   pm2 startup
   pm2 save
   ```

## Project Structure

```
cloud-chat-app/
├── public/            # Front-end static files
│   ├── index.html     # Chat UI with username, emoji, reply
│   └── script.js      # Client Socket.io logic
├── server.js          # Node.js + Express + Socket.io server
├── package.json       # Dependencies and scripts
└── README.md          # Project documentation
```

## Future Enhancements

- Mobile-friendly UI and additional themes (dark mode)
- Separate chat rooms / private messaging
- Typing indicators and read receipts
- Database integration (MongoDB or PostgreSQL)

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/YourFeature`
3. Commit your changes: `git commit -m "Add YourFeature"`
4. Push to the branch: `git push origin feature/YourFeature`
5. Open a Pull Request

## License

This project is licensed under the MIT License.

