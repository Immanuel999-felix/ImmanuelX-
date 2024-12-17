{
  "name": "IMMANUELX-MD (2.1.3)",
  "description": "IMMANUELX-MD has been designed to make things easier and fun while using WhatsApp.",
  "logo": "https://files.catbox.moe/d6y9zr.jpeg",
  "keywords": ["nodejs", "bot", "whatsapp bot", "multi device", "IMMANUELX-MD"],
  "success_url": "/",
  "env": {
    "BOT_NUMBER": {
      "description": "Put the number here.",
      "required": true
    },
    "SESSION_ID": {
      "description": "Put the session-id here.",
      "required": false
    },
    "GITHUB_AUTH_TOKEN": {
      "description": "Put your github authtoken here.",
      "required": true
    }
  },
  "buildpacks": [
    {
      "url": "https://github.com/heroku/heroku-buildpack-nodejs.git"
    }
  ],
  "stack": "heroku-24"
}
