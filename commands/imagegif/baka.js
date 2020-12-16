const client = require('nekos.life');

const Discord = require('discord.js')

const neko = new client();

const utils = require('../../utils');

module.exports = {

  name: "baka",

  category: "🖼️Image Gif & Actions",

  description: "Baka Gif",

  usage: "[command]",

  run: async (client, message, args) => {

  //command

        async function work() {

        let owo = (await neko.sfw.baka());

        const baka = new Discord.MessageEmbed()

        .setTitle("Baka Gif")

        .setImage(owo.url)

        .setColor(`#FAFE00`)

        .setThumbnail(client.user.displayAvatarURL())

        .setFooter(client.user.username, client.user.displayAvatarURL())

        .setURL(owo.url);

        message.channel.send(baka);

}

      work();

}

                };
