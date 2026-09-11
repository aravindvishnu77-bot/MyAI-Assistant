# My AI Assistant

This version gives your GitHub Pages voice UI a real AI backend.

## Files

- `index.html` — put this in your GitHub repository.
- `server.js` — deploy this as a Node backend.
- `package.json` — backend dependencies.

## Important

Do NOT put your OpenAI API key inside `index.html` or any public GitHub file.

## Backend deployment

A simple option is Render:

1. Create a new Web Service.
2. Connect the GitHub repository containing `server.js` and `package.json`.
3. Build command: `npm install`
4. Start command: `npm start`
5. Add environment variable:
   - Key: `OPENAI_API_KEY`
   - Value: your OpenAI API key
6. Deploy and copy the backend URL.

Then open `index.html` and change:

`https://YOUR-BACKEND.onrender.com/api/chat`

to your real backend URL, commit the change, and wait for GitHub Pages to rebuild.

## Browser permissions

When you open the GitHub Pages site, allow microphone access.

## What it can do

- English / Malayalam speech input
- AI answers
- Spoken AI answers
- Animated orb
- Mobile-friendly UI
