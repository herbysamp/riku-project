const { MessageEmbed } = require("discord.js")

module.exports = {

  name: "suggest",

  usage: "suggest <message>",

  description: "Send your Suggestion",

  category: "🌸Utility",

  cooldown: 50000000,

  run: (client, message, args) => {

    

    if(!args.length) {

      return message.channel.send("Tolong Masukan Saran")

    }

    

    let channel = message.guild.channels.cache.find((x) => (x.name === "suggestions" || x.name === "『』suggestions『』" || x.name === "「💡」suggestions"))

    

    

    if(!channel) {

      return message.channel.send("Tolong Beri Nama Channel Dengan Nama - suggestions")

    }

                                                    

    

    let embed = new MessageEmbed()

    .setAuthor("Saran Dari : " + message.author.tag, message.author.avatarURL())

    .setThumbnail(message.author.avatarURL())

    .setColor("#ff2050")

    .setDescription(args.join(" "))

    .setTimestamp()

    

    

    channel.send(embed).then(m => {

      m.react("<:yesmemek:778565475532800030> ")

      m.react("<:nomemek:778566023124090900> ")

    }).catch(err => {})

    

    

    message.channel.send("Saran Anda Sudah Terkirim Ke Channel Suggestions").catch(err => {})

    

  }

}
