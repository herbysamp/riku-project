const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();
const utils = require('../../utils');

module.exports = {
  name: "slap",
  category: "🖼️Image Gif & Actions",
  description: "slap a mentioned user",
  usage: "[command] + [user]",
  run: async (client, message, args) => {
  //command

        const user = message.mentions.users.first();
        if(!user)
        return message.reply('Tag seseorang untuk di tampar');

        async function work() {
        let owo = (await neko.sfw.slap());

        const slapembed = new Discord.MessageEmbed()
        .setTitle(user.username + " Anda baru saja di tampar ")
        .setDescription((user.toString() + " Kamu Di Tampar " + message.author.toString()))
        .setImage(owo.url)
        .setColor(`#FAFE00`)
        .setURL(owo.url)
        .setThumbnail(client.user.displayAvatarURL)
        .setFooter(client.user.username, client.user.displayAvatarURL);
        message.channel.send(slapembed);

}

      work();
}
                };