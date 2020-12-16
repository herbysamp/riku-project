module.exports = {
  name: "ping",
  category: "🌸Utility",
  description: "Get bot ping :/",
  usage: "ping",
  run: (client, message) => {
    message.channel.send(`🏓**Pong ${client.ws.ping}ms**`);
  }
  
}