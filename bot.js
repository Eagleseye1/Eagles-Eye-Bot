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

const fs = require("fs");
client.smsgs = require("./smsgs.json");

if (Message.content.startsWith (prefix + "write")) {
    editedmessage = message.content.slice (6);
    
    client.smsgs [message.author.username] = {
        message: message.content
    }
    fs.writeFile ("./smsgs.json", JSON.stringify (client.smsgs, null, 4), err => {
        if (err) throw err;
        message.channel.send ("message written");
    });
                  
}
    
    
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
