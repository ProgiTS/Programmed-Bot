const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = "OTcxNDg3OTAyMDc0ODA2MzQy.YnLOnQ.Xfl8-coDOFsXH9q6GdzmirbyDBQ"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Loggen in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("Hello!")
    }
})

client.login(process.env.TOKEN)