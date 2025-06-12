process.env.N8N_PORT = process.env.PORT || '5678';  // Use Render's PORT if defined
require('child_process').execSync('n8n start', { stdio: 'inherit' });
