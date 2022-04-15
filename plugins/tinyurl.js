let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Por favor ingrese el Link', m)

  await m.reply('Shorting...')
	axios.get(`https://api.xteam.xyz/shorturl/tinyurl?url=${text}&APIKEY=Dawnfrostkey`).then ((res) => {
	 	let hasil = `Link Asli : ${text}\nHasilnya : ${res.data.result}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['tinyurl','short2'].map(v => v + ' <link>')
handler.tags = ['tools']
handler.command = /^(tinyurl|short2)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler
