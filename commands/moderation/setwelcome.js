const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "setwelcome",
  category: "⚙️Moderator",
  usage: "setwelcome [#channel]",
  description: "Set the welcome channel",
  run: (client, message, args) => {
    
    if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send(`**${message.author.username}**, Kamu Bukanlah Admin`)
    }
    
    if(!message.guild.me.hasPermission("ADMINISTRATOR")) {
      return message.channel.send(`**${message.author.username}**, Tidak Memiliki Akses`)
    }
    
    let channel = message.mentions.channels.first()
    
    if(!channel) {
      return message.channel.send("Tag Channel Yang Akan Di Buat Tempat Selamat Datang")
    }
    
    //Now we gonna use quick.db
    
    db.set(`welchannel_${message.guild.id}`, channel.id)
    
    message.channel.send(`**Welcome Di Set Ke Channel ** ${channel}`)
  }
}