const { Client, Intents } = require('discord.js');
require('dotenv').config();

const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES"] });

client.once('ready', () => {
    console.log('Server ready to listen');
});

let pickVillage = (channel, author) => {

    let villages = [
        {name: "Kiri", img: "https://tenor.com/buzSS.gif"},
        {name: "Konoha", img: "https://tenor.com/bc153.gif"},
        {name: "Iwa", img: "https://tenor.com/bk7sC.gif"},
        {name: "Suna", img: "https://tenor.com/bGvJW.gif"},
        {name: "Kumo", img: "https://tenor.com/bo2Pr.gif"},
    ];

    let village = villages.at(Math.random() * villages.length);
    channel.send("Félicitation <@" + author + ">, tu es à présent membre du village de " + village.name);
    channel.send(village.img);
};

let pickNinja = (channel, author) => {

    let ninjas = [
        "https://tenor.com/bCzSU.gif",
        "https://tenor.com/be0dY.gif",
        "https://tenor.com/beFdF.gif",
        "https://tenor.com/3x4L.gif",
        "https://tenor.com/bEIVC.gif",
        "https://tenor.com/bK0rQ.gif",
        "https://tenor.com/WJjU.gif",
        "https://tenor.com/bKlXb.gif",
        "https://tenor.com/bEC6F.gif",
        "https://tenor.com/bIKub.gif",
        "https://tenor.com/bul50.gif",
        "https://tenor.com/bcJmX.gif",
        "https://tenor.com/EzOu.gif",
        "https://tenor.com/bwoMB.gif",
        "https://tenor.com/bPClU.gif",
        "https://tenor.com/1Plx.gif",
        "https://tenor.com/v1Z2.gif",
        "https://tenor.com/bKpTH.gif",
        "https://tenor.com/bjAXb.gif",
        "https://tenor.com/bz7b2.gif",
        "https://tenor.com/bpSVx.gif"
    ];

    let ninja = ninjas.at(Math.random() * ninjas.length);
    channel.send("<@" + author + ">! Voici le ninja qui te ressemble le plus !");
    channel.send(ninja);
};

client.on('messageCreate', message => {
    if (message.author.bot) return;
	if (!message.content.startsWith("!")) return;
    if (message.content === "!village") return pickVillage(message.channel, message.author);
    if (message.content === "!join") {
        message.reply("https://discord.gg/NxgHy97Etc");
        return;
    }
    if (message.content === "!ninja") return pickNinja(message.channel, message.author);
});


client.login(process.env.SECRET_TOKEN);