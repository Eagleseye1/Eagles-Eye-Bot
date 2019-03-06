const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
    
    client.user.setGame ("prefix ea!");
});

const prefix = "ea!";

client.on('message', message => {
    if (message.content.startsWith (prefix + "hello")) {
    	message.reply('Hi!');    
  	}
});

var fs = require("fs");
var poem = fs.readFileSync("chat.txt", {"encoding": "utf-8"});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
