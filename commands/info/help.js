const { MessageEmbed } = require("discord.js");
const db = require("quick.db")
module.exports = {
  name: "help",
  description:
    "Semua Cmd Ada Di Sini Ya Anjim",
  usage: "help [cmd]",
  aliases: ["h"],
  category: "ℹ️Info",
  run: async (client, message, args) => {
    if (args[0]) {
      const command = await client.commands.get(args[0]);

      if (!command) {
        return message.channel.send("Ga Nemu Command Itu: " + args[0]);
      }

      let embed = new MessageEmbed()
        .setAuthor(command.name, client.user.displayAvatarURL())
        .addField("Deskripsi", command.description || "Not Provided :(")
        .addField("Usage", "`" + command.usage + "`" || "Not Provied")
        .setThumbnail(client.user.displayAvatarURL())
        .setColor("GREEN")
        .setFooter(client.user.username, client.user.displayAvatarURL());

      return message.channel.send(embed);
    } else {
      const commands = await client.commands;

      let emx = new MessageEmbed()
        .setTitle("ℹ️**Commands Help Bot Riku**")
        .setDescription(`**Indonesia : Bot Menggunkan Prefix R. \nEnglish : Command Bot Riku Is a R.**`)
        .setColor("GREEN")
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setThumbnail(client.user.displayAvatarURL());

      let com = {};
      for (let comm of commands.array()) {
        let category = comm.category || "Unknown";
        let name = comm.name;

        if (!com[category]) {
          com[category] = [];
        }
        com[category].push(name);
      }

      for(const [key, value] of Object.entries(com)) {
        let category = key;

        let desc = "`" + value.join("`, `") + "`";

        emx.addField(`${category.toUpperCase()}[${value.length}]`, desc);
      }

      let database = db.get(`cmd_${message.guild.id}`)

      if(database && database.length) {
        let array =[]
        database.forEach(m => {
          array.push("`" + m.name + "`")
        })

        emx.addField("Commands Buatan Admin Gabut", array.join(", "))
      }

      return message.channel.send(emx);
    }
  }
};