const discord = require("discord.js");

module.exports = {
  name: "kick",
  category: "⚙️Moderator",
  description: "Kick Member Yang Rusuh",
  usage: "kick [@user] [alasan]",
  run: (client, message, args) => {
    
    if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send(`**${message.author.username}**, Kamu Bukanlah Admin`)
    }
    
    if(!message.guild.me.hasPermission("ADMINISTRATOR")) {
      return message.channel.send(`**${message.author.username}**, Tidak Memiliki Akses Untuk Kick Member`)
    }
    
    let target = message.mentions.members.first();
    
    if(!target) {
      return message.channel.send(`**${message.author.username}**, Tag Member Yang Mau Di Kick`)
    }
    
    if(target.id === message.author.id) {
     return message.channel.send(`**${message.author.username}**, Kamu Tidak Bisa Kick Diri Sendiri`)
    }
    
  if(!args[1]) {
    return message.channel.send(`**${message.author.username}**, Tolong Kasih Alasan Kick Member`)
  }
    
    let embed = new discord.MessageEmbed()
    .setTitle("Action: Kick")
    .setDescription(`Banned ${target} (${target.id})`)
    .setColor("#ff2050")
    .setFooter(`Kick By **${message.author.username}**`);
    
    message.channel.send(embed)
    
    target.kick(args[1]);
    
    
    
  }
}