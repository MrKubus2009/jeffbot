
const Discord = require('discord.js');
const figlet = require('figlet');
const colors = require('colors');
const readline = require('readline');
const commando = require(`discord.js-commando`);
const config = require('./config.json');
const bot = new commando.Client({

    commandPrefix:'!',
    owner: config.id
});

const cmdsArray = [
    "dmall <message>",
    "dmrole <role> <message>"
];

bot.on("ready", () => {
    clear();
    console.log('______');
    bot.user.setActivity('Giveaway 50$ for followers', {url:"https://www.twitch.tv/ziolostworzylbog",  type: 'STREAMING' })
        .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : 'none'}`))
        .catch(console.error);
    
});


bot.on("error", (error) => {
    bot.login(config.token);
});

process.on('unhandledRejection', error => {
	console.error('Unhandled promise rejection:', error);
});

bot.registry.registerGroup('dms', 'help');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

if (process.env.TESTING) process.exit();

try {
    if (process.env.BOT_TOKEN) bot.login(process.env.BOT_TOKEN);
    else bot.login(config.token);
}
catch (e) {
    console.log(e);
    console.log("Failed to login to Discord!");
}



function clear() {
    console.clear();
    console.log(figlet.textSync("W33D BOT").red); 
    console.log("\n\n Nowy bot! \n Wiele opcji.\n  wszystko jest gitix.");

}

