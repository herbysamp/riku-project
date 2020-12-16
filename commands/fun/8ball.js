const { MessageEmbed } = require("discord.js");

module.exports = {

  name: "8ball",

  description: "There is a big chance I insult you!",

  category: "🤡Fun",

  run: async (client, message, args) => {

    let question = args.join(" ")

    if (!question)

      return message.channel.send(`Masukan Pertanyaan!`);

    else {

      let responses = [

        "Sepertinya",

        "Gak",

        "Jawab Ga Ya😂",

        "Benar",

        "Benar Sekali",

        "Bisa Jadi",

        "Sedikit Lagi Mungkin"

      ];

      let response =

        responses[Math.floor(Math.random() * responses.length - 1)];

      let Embed = new MessageEmbed()

        .setTitle(`8Ball!`)

        .setFooter(client.user.username, client.user.displayAvatarURL())

        .setThumbnail(client.user.displayAvatarURL())

        .setDescription(`Pertanyaan: ${question}\nJawaban: ${response}`)

        .setColor(`RANDOM`);

      message.channel.send(Embed);

    }

  },

};
