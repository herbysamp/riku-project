 const { MessageEmbed } = require("discord.js")


module.exports = {
  name: "announcement",
  usage: "announcement [pesan] ",
  aliases: ["anc"],
  description: "Send Your Announcement",
  category: "⚙️Moderator",
  run: (client, message, args) => {
    
    if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send(`**${message.author.username}**, Kamu Bukanlah Admin`)
    }
    
    if(!message.guild.me.hasPermission("ADMINISTRATOR")) {
      return message.channel.send(`**${message.author.username}**, Tidak Memiliki Akses`)
    }
    
    if(!args.length) {
      return message.channel.send("Tolong Masukan Saran")
    }
    
    let channel = message.guild.channels.cache.find((x) => (x.name === "🔸『📣』announcement" || x.name === "announcement" || x.name === "⚙⚙🎗『announcements』🎗⚙⚙" || x.name === "「📢」announcement"))
    
    
    if(!channel) {
      return message.channel.send("Tolong Beri Nama Channel Dengan Nama - announcement")
    }
                                                    
    
    let embed = new MessageEmbed()
    .setTitle("ANNOUNCEMENT📣")
    .setColor("#ff2050")
    .setDescription(args.join(" "))
    .setThumbnail(client.user.displayAvatarURL())
    .setFooter(client.user.username, client.user.displayAvatarURL())
    .setTimestamp()
    
    
    channel.send(embed).then(m => {
      m.react(" ")
      m.react(" ")
    }).catch(err => {})
    

    
    message.channel.send("**Announcement 📣 Terkirim **").catch(err => {})
    
  }
}