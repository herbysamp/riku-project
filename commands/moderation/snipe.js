const Discord = require("discord.js")
const config = require("../../config.json")
const db = require("quick.db")

module.exports = {
  name: "snipe",
  aliases: ["ms", "messagesnipe"],
  category: "⚙️Moderator",
  usage: "(prefix)snipe",
  description: "get deleted messages",
  run: async (client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send(`**${message.author.username}**, Kamu Bukanlah Admin`)
    }
    
    if(!message.guild.me.hasPermission("ADMINISTRATOR")) {
      return message.channel.send(`**${message.author.username}**, Tidak Memiliki Akses `)
    }
    
  let prefix = await db.fetch(`prefix_${message.guild.id}`)
   if(prefix == null) {
    prefix =  config.default_prefix
  }
    
    const msg = client.snipes.get(message.channel.id)
    if(!msg) return message.channel.send("There are no deleted messages in this channel!")
    const embed = new Discord.MessageEmbed()
    .setAuthor(msg.author)
    .setDescription(msg.content)
    if(msg.image)embed.setImage(msg.image)
    
    message.channel.send(embed)
   
    
  }
}