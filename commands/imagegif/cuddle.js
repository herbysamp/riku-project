const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();
const utils = require('../../utils');

module.exports = {
  name: "cuddle",
  category: "🖼️Image Gif & Actions",
  description: "cuddles a mentioned user",
  usage: "[command] + [user]",
  run: async (client, message, args) => {
  //command

        const user = message.mentions.users.first();
        if(!user)
        return message.reply('Tag seseorang untuk dipeluk');

        async function work() {
        let owo = (await neko.sfw.cuddle());

        const cuddleembed = new Discord.MessageEmbed()
        .setTitle(user.username + " Anda baru saja berpelukan ")
        .setDescription((user.toString() + " Kamu Di Peluk " + message.author.toString()))
        .setImage(owo.url)
        .setColor(`#FAFE00`)
        .setURL(owo.url)
        .setThumbnail(client.user.displayAvatarURL())
        .setFooter(client.user.username, client.user.displayAvatarURL());
        message.channel.send(cuddleembed);

}

      work();
}
                };