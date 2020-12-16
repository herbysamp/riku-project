const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "invite",
    description: "**Untuk Memasukan Bot Ke Server Kamu**",
    usage: "[invite]",
    category: "🌸Utility",
    aliases: ["inv"],
  

  run: async function (client, message, args) {
    
    //set the permissions id here (https://discordapi.com/permissions.html)
    var permissions = 5242894;
    
    let invite = new MessageEmbed()
    .setTitle(`Invite ${client.user.username}`)
    .setDescription(`Invite Me To Your Server \n\n [Invite Link](https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=${permissions}&scope=bot)`)
    .setURL(`https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=${permissions}&scope=bot`)
    .setColor("BLUE")
    .setThumbnail(client.user.displayAvatarURL())
    .setFooter(client.user.username, client.user.displayAvatarURL())
    return message.channel.send(invite);
  },
};
