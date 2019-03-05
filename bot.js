const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'Hi''hi') {
    	message.reply('Hi,How are you?');
  	}
});

client.on('message', message => {
    if (message.content === 'Fine thanks and you?') {
    	message.reply('I am fine!');
  	}
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
