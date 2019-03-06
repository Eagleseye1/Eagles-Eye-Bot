const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'Hi') {
    	message.reply('Hi,How are you?');
  	}
});

client.on('message', message => {
    if (message.content === 'Fine thanks and you?') {
    	message.reply('I am fine!');
  	}
});

client.on('message', message => {
    if (message.content === 'eagleseye') {
    	message.reply('https://www.youtube.com/channel/UC4Dde7hKcXXrGefVVh3CCBQ?view_as=subscriber');
  	}
});

client.on('message', message => {

    if (message.content === 'ping') {

    	message.reply('%meme');  	
    }

});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
