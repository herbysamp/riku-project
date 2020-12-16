const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();
const utils = require('../../utils');

module.exports = {
  name: "pat",
  category: "🖼️Image Gif & Actions",
  description: "pat a mentioned user",
  usage: "[command] + [user]",
  run: async (client, message, args) => {
  //command

        const user = message.mentions.users.first();
        if(!user)
        return message.reply('Tag seseorang untuk di elus');

        async function work() {
        let owo = (await neko.sfw.pat());

        const patembed = new Discord.MessageEmbed()
        .setTitle(user.username + " Kepalamu baru saja di elus ")
        .setDescription((user.toString() + " Kepalamu Di Elus Oleh " + message.author.toString()))
        .setImage(owo.url)
        .setColor(`#FAFE00`)
        .setURL(owo.url)
        .setThumbnail(client.user.displayAvatarURL())
        .setFooter(client.user.username, client.user.displayAvatarURL());
        message.channel.send(patembed);

}

      work();
}
                };