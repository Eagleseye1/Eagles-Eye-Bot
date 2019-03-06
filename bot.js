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

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

commandfile1 = require('./commandfile1.js')
yourBot.on('message', msg => {
  if (msg.content.startsWith(yourPrefix){
    cmdmsg = msg.content.replace(yourprefix, '')
    for (command in commandfile1){
      if (cmdmsg.startsWith(commandfile1[command])){
        commandfile1[command].variableToCallToRunFunction(arguements)
      } 
    }
  }
}
