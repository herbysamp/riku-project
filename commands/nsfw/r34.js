const randomPuppy = require('random-puppy');
const request = require('node-fetch');
const fs = require("fs")

const Discord = require('discord.js');
const booru = require('booru');

module.exports = {
    name: "r34",
    category: "🔞NSFW",
  description: "Searches rule34",
  run: async (client, message, args, level) => {
  //command

  //Checks channel for nsfw
  var errMessage = "Channel Ini Tidak Mengaktifkan `NSFW`";
  if (!message.channel.nsfw) {
      message.react('🔞');

      return message.reply(errMessage)
      .then(msg => {
      msg.delete({ timeout: 3000 })
      })
      
  }

  if (message.content.toUpperCase().includes('LOLI') || message.content.toUpperCase().includes('GORE')) return message.channel.send('Channel Harus Mengaktifkan `NSFW`');

  var query = message.content.split(/\s+/g).slice(1).join(" ");
  booru.search('rule34', [query], {nsfw: true, limit: 1, random: true })
      .then(booru.commonfy)
      .then(images => {
          for (let image of images) {
              const embed = new Discord.MessageEmbed()
              .setTitle("Rule34")
              .setThumbnail(client.user.displayAvatarURL())
              .setImage(image.common.file_url)
              .setColor('#FF0000')
              .setFooter(`Tags: r34 ${query}`)
              .setURL(image.common.file_url);
          return message.channel.send({ embed });
                 message.delete();
          }

      }).catch(err => {
          if (err.name === 'booruError') {
              return message.channel.send(`Sepertinya Ada Masalah **${query}**!`);
          } else {
              return message.channel.send(`Terjadi Masalah**${query}**!`);
            
          }
})
  }
  };