const { token } = require("./config.json");
const discord = require("discord.js"); 
const client = new discord.Client({
  disableEveryone: false 
});

const config = require('./config.json');
client.config = config;
//giveaway

const { GiveawaysManager } = require('discord-giveaways');
client.giveawaysManager = new GiveawaysManager(client, {
    storage: "./giveaways.json",
    updateCountdownEvery: 5000,
    default: {
        botsCanWin: false,
        embedColor: "#FF0000",
        reaction: "🎉"
    }
});

client.giveawaysManager.on("giveawayReactionAdded", (giveaway, member, reaction) => {
    console.log(`${member.user.tag} entered giveaway #${giveaway.messageID} (${reaction.emoji.name})`);
});

client.giveawaysManager.on("giveawayReactionRemoved", (giveaway, member, reaction) => {
    console.log(`${member.user.tag} unreact to giveaway #${giveaway.messageID} (${reaction.emoji.name})`);
});

client.commands = new discord.Collection();
client.aliases = new discord.Collection();

["command", "events"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});

const db = require("quick.db")

client.on("guildMemberUpdate", async (oldMember, newMember) => {
  

    // Boost

    if (!oldMember.premiumSince && newMember.premiumSince) {

        return client.channels.cache.get('764771283652837376').send(
          `<a:Riku_boostingtop:786548600023810068>  **<@${newMember.user.id}>** <a:Riku_boostingtop:786548600023810068> 
          \n<a:Riku_boostingtop:786548600023810068> THANKS FOR BOOSTER ${client.guild.name} <a:Riku_boostingtop:786548600023810068>  `
        )

    }

})


client.snipes = new Map()
client.on('messageDelete', function(message, channel){
  
  client.snipes.set(message.channel.id, {
    content:message.content,
    author:message.author.tag,
    image:message.attachments.first() ? message.attachments.first().proxyURL : null
  })

});

client.login(token);