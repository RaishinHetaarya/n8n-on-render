const { start } = require("n8n");

start({
  port: process.env.PORT || 5678
});
