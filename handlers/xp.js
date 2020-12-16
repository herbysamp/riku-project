const db = require("quick.db")


class client {
  static getLevel(xp, extra = false) {
  let level = 0;
    
    //WHILE LOOP
    while(xp >= client.getLevelxp(level)) {
      xp -= client.getLevelxp(level);
      level++
    }
    if(extra) return [level, xp];
    else return level;
    }

  
  static getLevelxp(level) {
    return 5 * Math.pow(level, 2) + 50 * level + 100;
  }
  
  static getInfo(exp) {
    let [level, remxp] = client.getLevel(exp, true);
    let levelxp = client.getLevelxp(level);
    
    return { level, remxp, levelxp}
  }
  
  static addexp(message) {
    let toadd = Math.floor(Math.random() * 3 + 3);
    let oldxp = db.get(`xp_${message.author.id}_${message.guild.id}`)
    let oldlvl = client.getLevel(oldxp)
    let newxp = oldxp + toadd;
    let newlvl = client.getLevel(newxp)

    
    
    if(newlvl > oldlvl) message.author.send(`${message.author}, Kamu Naik Ke  Level **${newlvl}** <a:lvlup:780438686768693288> \n **<a:emoji_162:766426062238122004> ${message.guild.name} <a:emoji_162:766426062238122004> **`)
          
    db.add(`xp_${message.author.id}_${message.guild.id}`, toadd)
  }
} 
module.exports = client;
