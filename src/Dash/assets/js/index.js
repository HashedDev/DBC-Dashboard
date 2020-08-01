var config = {
    "token": "Your Token",
    //"prefix": min.default.get('prefix')
}
//
const guilds = document.getElementById("bot-guilds")
const users = document.getElementById("bot-users")
const prefix = document.getElementById("bot-prefix")
const prefixtext = document.getElementById("prefix-text")
const prefixbtn = document.getElementById("prefix-submit")
const tokentext = document.getElementById("token-text")
const tokenbtn = document.getElementById("token-submit")
const client = new Discord.Client()
//
function updateStats() {
    guilds.innerHTML = client.guilds.size;
    users.innerHTML = client.users.size;
    prefix.innerHTML = config.prefix;
}
/*
function updateToken(content) {
    min.default.set('token', content)
    alert("Token has been updated.\n\nRestart the bot to confirm the changes.")
}
function updatePrefix(content) {
    min.default.set('prefix', content)
    alert("Prefix has been updated.\n\nRestart the bot to confirm the changes.")
}
async function get(key) {
    await min.default.get(key).then(value => {
        return value
    })
}
*/
//
client.on("ready", () => {
    updateStats()
})
//
client.login(config.token)
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
document.getElementById("bot-token").addEventListener('click', () => {
    document.getElementById("bot-token").innerHTML = config.token
    document.getElementById("bot-token").classList.remove("click-reveal")
    document.getElementById("bot-token").classList.remove("noselect")
    setTimeout(() => {
        document.getElementById("bot-token").classList.add("noselect")
        document.getElementById("bot-token").classList.add("click-reveal")
        document.getElementById("bot-token").innerHTML = 'Reveal'
    }, 10000)
})
/*tokenbtn.addEventListener("click", () => {
    updateToken(tokentext.value)
})
prefixbtn.addEventListener("click", () => {
    updatePrefix(prefixtext.value)
})*/