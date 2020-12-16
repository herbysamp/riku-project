module.exports = {
  name: "say",
  category: "⚙️Moderator",
  description: "Get the bot to say what ever you want!",
  usage: "<msg>",
  run: async (bot, message, args) => {
    if (!message.member.permissions.has("ADMINISTRATOR")) return;
    let messages = args.join(" ");
    if (!messages)
      return message.channel.send(`Kamu Tidak Mengirim Perkataan Apapun Untuk Di Kirim`);
    message.channel.send(messages);
    message.delete();
  },
};