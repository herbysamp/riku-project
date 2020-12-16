const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "vote",
    description: "**Untuk Support Bot Agar Lebih Berkembang**",
    usage: "[vote]",
    category: "🌸Utility",
    aliases: ["vt"],
  

  run: async function (client, message, args) {
    
    //set the permissions id here (https://discordapi.com/permissions.html
    
    let vote = new MessageEmbed()
    .setTitle(`Vote Me ${client.user.username}`)
    .setDescription(`Vote Me To Support \n\n [Vote Link](https://top.gg/bot/779699133354213416/vote)`)
    .setURL(`https://top.gg/bot/779699133354213416/vote`)
    .setColor("BLUE")
    .setThumbnail(client.user.displayAvatarURL())
    .setFooter(client.user.username, client.user.displayAvatarURL())
    return message.channel.send(vote);
  },
};
