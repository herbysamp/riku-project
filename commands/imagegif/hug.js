const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();
const utils = require('../../utils');

module.exports = {
  name: "hug",
  category: "🖼️Image Gif & Actions",
  description: "hug a mentioned user",
  usage: "[command] + [user]",
  run: async (client, message, args) => {
  //command

        const user = message.mentions.users.first();
        if(!user)
        return message.reply('Tag seseorang untuk memeluk');

        async function work() {
        let owo = (await neko.sfw.hug());

        const hugembed = new Discord.MessageEmbed()
        .setTitle(message.author.username + " Anda baru saja memeluk ")
        .setDescription((message.author.toString() + " Kamu memeluk " + user.toString()))
        .setImage(owo.url)
        .setColor(`#FAFE00`)
        .setURL(owo.url)
        .setThumbnail(client.user.displayAvatarURL())
        .setFooter(client.user.username, client.user.displayAvatarURL());
        message.channel.send(hugembed);

}

      work();
}
                };