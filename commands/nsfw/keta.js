const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();

module.exports = {
  name: "keta",
  aliases: [""],
  category: "🔞NSFW",
  usage: "[command]",
  run: async (client, message, args) => {
  //command

  //Checks channel for nsfw
  var errMessage = "Channel Tidak Mengaktifkan `NSFW`";
  if (!message.channel.nsfw) {
      message.react('🔞');

      return message.reply(errMessage)
      .then(msg => {
      msg.delete({ timeout: 3000 })
      })
      
  }

        async function work() {
        let owo = (await neko.nsfw.keta());

        const keta = new Discord.MessageEmbed()
        .setTitle("Keta Image")
        .setImage(owo.url)
        .setThumbnail(client.user.displayAvatarURL())
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setColor(`#FF0000`)
        .setURL(owo.url);
        message.channel.send(keta);
          message.delete();

}

      work();
}
                };