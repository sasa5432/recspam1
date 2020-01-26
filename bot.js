const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("671071694160527442")
setInterval(function() {
channel.send(`hi you`);
}, 30)
})

client.login(process.env.BOT_TOKEN);