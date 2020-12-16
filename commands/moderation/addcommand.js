const db = require("quick.db")

module.exports = {

  name: "addcmd",

  usage: "addcmd [nama command] [kegunaan]",

  description: "Tambahkan Command Custom",

  category: "⚙️Moderator",

  run: (client, message, args) => {

    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(":x: **KAMU BUKANLAH SEORANG ADMIN**")

    let cmdname = args[0]

    if(!cmdname) return message.channel.send(`:x: You have to give command name, \`addcmd <cmd_name> <cmd_responce>\``)

    let cmdresponce = args.slice(1).join(" ")

    if(!cmdresponce) return message.channel.send(`:x: You have to give command cmd responce, \`addcmd <cmd_name> <cmd_responce>\``)

    let database = db.get(`cmd_${message.guild.id}`)

    if(database && database.find(x => x.name === cmdname.toLowerCase())) return message.channel.send(":x: **Nama perintah ini sudah ditambahkan**")

    let data = {

      name: cmdname.toLowerCase(),

      responce: cmdresponce

    }

    db.push(`cmd_${message.guild.id}`, data)

    return message.channel.send("Perintah **" + cmdname.toLowerCase() + "** Ditambah")

  }

}
