const Discord = require("discord.js")
require("dotenv").config()

const generateImage = require("./generateImage")

const TOKEN = "OTcxNDg3OTAyMDc0ODA2MzQy.YnLOnQ.gpFTNPJoZmlSxawImAeUAceKPTw"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
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

const welcomeChannelID = "971486210264563722/971486243118530580"

client.on("guildMemberAdd", async (member) => {
    const img = await generateImage(member)
    member.guild.channels.cache.get(welcomeChannelID).send({
        content: `<@${member.id}> Welcome to the server!`,
        files: [img]
    })
})

client.login(process.env.TOKEN)