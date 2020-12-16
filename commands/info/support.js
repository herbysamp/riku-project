const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "support",
    description: "**Untuk Support Bot Agar Lebih Berkembang**",
    usage: "[support]",
    category: "🌸Utility",
    aliases: ["sp"],
  

  run: async function (client, message, args) {
    
    //set the permissions id here (https://discordapi.com/permissions.html
    
    let support = new MessageEmbed()
    .setTitle(`Support Me ${client.user.username}`)
    .setDescription(`Join Riku Support \n\n [Support Link](https://discord.gg/svZmMw9kpU)`)
    .setURL(`https://discord.gg/svZmMw9kpU`)
    .setColor("BLUE")
    .setThumbnail(client.user.displayAvatarURL())
    .setFooter(client.user.username, client.user.displayAvatarURL())
    return message.channel.send(support);
  },
};
