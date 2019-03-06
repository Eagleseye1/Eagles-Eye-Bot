client.on('message', message => {
    if (message.content.startsWith (prefix + "hi")) {
    	message.reply('Hi!');    
  	}
});

      
