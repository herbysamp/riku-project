const discord = require("discord.js");

module.exports = {
  name: "ban",
  category: "⚙️Moderator",
  description: "Ban anyone with one shot whithout knowing anyone xD",
  usage: "ban [@user] [alasan]",
  cooldown: 5000,
  botPermission: ["BAN_MEMBERS"],
  authorPermission: ["BAN_MEMBERS"],
  run: async (client, message, args) => {
    
    if(!message.member.hasPermission("BAN_MEMBERS")) {
      return message.channel.send(`**${message.author.username}**, Kamu Bukanlah Admin`)
    }
    
    if(!message.guild.me.hasPermission("BAN_MEMBERS")) {
      return message.channel.send(`**${message.author.username}**, Tidak Memiliki Akses Untuk Ban Member`)
    }
    
    const target = message.mentions.members.first();
    
    if(!target) {
      return message.channel.send(`**${message.author.username}**, Tolong Tag Orang Yang Mau Di Ban`)
    }
    
    if(target.id === message.author.id) {
      return message.channel.send(`**${message.author.username}**, Kamu Tidak Bisa Ban Diri Sendiri`)
    }
    
   
    
   if(!args[1]) {
     return message.channel.send(`**${message.author.username}**, Tolong Masukan Alasan`)
   }
    
    let embed = new discord.MessageEmbed()
    .setTitle("Action : Ban")
    .setDescription(`Banned ${target} (${target.id})`)
    .setColor("#ff2050")
    .setThumbnail(target.avatarURL)
    .setFooter(`Banned by ${message.author.tag}`);
    
    message.channel.send(embed)
    target.ban(args[1])
    
    
    
  }
}