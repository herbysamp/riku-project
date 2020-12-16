const { MessageEmbed } = require("discord.js")

module.exports = {
  name: "credits",
  category: "🌸Utility",
  description: "Melihat info Pembuat Bot",
  run: async (client, message) => {
    
    const embed = new MessageEmbed()
    .setTitle("Credits Bot Riku💞")
    .setDescription(`**Nama Bot : Riku \nPembuat Bot : Herby \nTanggal Pembuatan Bot : 21 November 2020 \nLink Server : https://discord.gg/svZmMw9kpU \nYoutube : https://youtube.com/c/herbysamp \nInvite : https://top.gg/bot/779699133354213416/invite \nSupport Me : https://saweria.co/herbysamp**`)
    .setColor("#FF0093")
    .setThumbnail(`https://cdn.discordapp.com/attachments/778670757243781191/778997350739083294/tenor_1.gif`)
    .setFooter(client.user.username, client.user.displayAvatarURL());
    return message.channel.send(embed);
    message.delete();
  
  
  }
  
  
  
}