module.exports.run = client => {

  console.log("Bot Herbie Online" )

  const status = [

    `R.help | Riku 💞`,

    `${client.users.cache.size} Users | ${client.guilds.cache.size} Servers`

    ]

  setInterval(() => {

    client.user.setActivity(status[Math.floor(Math.random() * status.length)], {type : "WATCHING"})

  }, 5000)

}
