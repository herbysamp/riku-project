const Discord = require("discord.js");

module.exports = {
name: "setnickname",
usage: "setnickname [@user] [new name]",
category: "⚙️Moderator",
cooldown: 5000,
aliases: ["setnick", "setname"],
description: "Easy To Change Name Members",
run: async (client, message, args) => {
  
  // You can make a single array to detect the user permissions.
  if (!message.member.hasPermission(["MANAGE_GUILD", "ADMINISTRATOR"])) {
    return message.channel.send({embed: {color: "RED", description: "Kamu Bukan Admin!"}})
  }
  
  let user = message.mentions.users.first(); // You can mention someone, not only just user.
  if (!user) return message.channel.send({embed: {color: "RED", description: "Mention Orang Yang Mau Di Ganti Nama"}});
  
  let nick = args.slice(1).join(" ");
  if (!nick) return message.channel.send({embed: {color: "RED", description: "Kamu harus memasukkan nama baru"}});
  
  let member = message.guild.members.cache.get(user.id);
  
  await member.setNickname(nick).catch(err => message.channel.send({embed: {color: "RED", description: `Error: ${err}`}}));
  return message.channel.send({embed: {color: "GREEN", description: `Sukses Mengganti Nama **<@${user.id}>** Menjadi **${nick}**`}});
}
}