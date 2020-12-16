const db = require("quick.db")
const { CanvasSenpai } = require("canvas-senpai")
const canva = new CanvasSenpai();
const discord = require("discord.js")


module.exports.run = async (client, member, message) => {
  let channel = db.get(`welchannel_${member.guild.id}`);

  if (channel === null) {
    return;
  }

  
   let data = await canva.welcome(member, { link: "https://cdn.discordapp.com/attachments/771510318655733802/780056146248466432/37585.jpg", blur: false })
 
    const attachment = new discord.MessageAttachment(
      data,
      "welcome-image.png"
    );
  
  


  client.channels.cache.get(channel).send(`**    <a:emoji_128:766302858575740968>   <a:emoji_20:779957291440275466> <a:emoji_21:779957341491167283> <a:emoji_22:779957404225765417> <a:emoji_23:779957465906675732> <a:emoji_24:779957519819735051> <a:emoji_25:779957591223828510> <a:emoji_21:779957341491167283>   <a:emoji_128:766302858575740968>  \n<a:emoji_127:766302787948511233>❦ Don't Forget To Read Server Rules \n<a:emoji_127:766302787948511233>❦ Don't Forget To Take A Role  \n<a:emoji_127:766302787948511233>❦ Join Voice Channel And Chat Channel To Get Familiar** \n **Name : **` + member.user.username, attachment);
}