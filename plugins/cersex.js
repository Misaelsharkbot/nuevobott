let axios = require("axios");
let handler = async(m, { conn, text }) => {

    //if (!text) return conn.reply(m.chat, 'Parámetros de entrada, Ejemplo *#lirik my love*', m)

  await m.reply('En progreso hermano :b')
	axios.get(`http://docs-jojo.herokuapp.com/api/cersex`).then ((res) => {
	 	let hasil = `~> *Título* : ${res.data.result.judul}\n\n${res.data.result.cersex}`

    conn.sendFile(m.chat, res.data.result.img, 'carsex.jpeg', hasil, m)
	})
}
handler.help = ['cersex'].map(v => v + ' <nama>')
handler.tags = ['quotes']
handler.command = /^(carsex|cerita_sex)$/i
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
