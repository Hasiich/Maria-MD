const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernumber = ['03324270989']
global.ownername = "💙𓆩‎✘HaSeeB✘𓆪_✰"//owner name
global.ytname = "YT: HaseebhBotz.inc"
global.socialm = "GitHub: Haseeb ch"
global.location = "Pakistani"

global.botname = 'Haseeb ka bot' //name of the bot

//sticker details
global.stickername = '💙𓆩‎✘Hasii ch✘𓆪_✰'
global.packname = 'Sticker By'
global.author = 'Haseeb Bot'
//console view/theme
global.themeemoji = '🧩'
global.wm = "Haseeb botz inc."

//theme link
global.link = 'https://whatsapp.com/channel/0029VaImo5ZG3R3qjKOdyr1I'

//custom prefix
global.prefa = ['.']

//false=disable and true=enable
global.welcome = false //auto welcome
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti212 = true //auto block +212
global.autoread_status = false //auto view status/story



//reply messages
global.mess = {
    done: '*here you go!* \n\n*🎀 Haseeb Bot 🎀*\n\n*🧩 Bot link:* \nhttps://github.com/Haseeb-chaudhary/Maria-MD\n',
    prem: '*This feature can be used by premium user only*',
    admin: '*This feature can be used by admin only*',
    botAdmin: '*This feature can only be used when the bot is a group admin* ',
    owner: '*This feature can be used by owner only*',
    group: '*This feature is only for groups*',
    private: '*This feature is only for private chats*',
    wait: '*In process...* ',    
    error: '*Error!*',
}

global.thumb = fs.readFileSync('./Gallery/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
