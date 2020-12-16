const ms = require("ms");

module.exports = {
  name: "slowmode",
  category: "⚙️Moderator",
  aliases: ["slow"],
  description: "Slowmode The Channel You Want",
  uasage: "slowmode [#channel] [time]",
  run: async (client, message, args) => {
  if (!message.member.permissions.any(["ADMINISTRATOR", "MANAGE_CHANNELS"])) {
    return message.channel.send("Kamu Bukan Admin.");
  }
  
  let channel = message.mentions.channels.first(),
      time = args.slice(1).join(" ");
  
  if (!channel) time = args.join(" "), channel = message.channel;
  // If the user doesn't includes the channel.
  
  if (message.flags[0] === "off") {
    channel.setRateLimitPerUser(0);
    return message.channel.send(`<#${channel.id}> slowmode di nonaktifkan.`);
  }
  
  if (!time) return message.channel.send("Masukan Format Waktu Yang Benar.");
  
  let convert = ms(time); // This will results the milliseconds.
  let toSecond = Math.floor(convert / 1000); // This will convert the ms to s. (seconds)
  
  if (!toSecond || toSecond == undefined) return message.channel.send("Format Waktu Salah!");
  
  if (toSecond > 21600) return message.channel.send("Waktu Maksimal Adalah 6 Jam");
  else if (toSecond < 1) return message.channel.send("Waktu Minimal Adalah 1 Detik.");
  
  await channel.setRateLimitPerUser(toSecond);
  return message.channel.send(`Channel: <#${channel.id}> Di Seting Slowmode Ke :**${ms(ms(time), {long: true})}**.`);
}
}