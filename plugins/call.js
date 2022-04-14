let fetch = require('node-fetch')
let handler = async (m, { conn, text, usedPrefix }) => {

if (!text) throw `Ejemplo de uso\n${usedPrefix}call 51977783xxx`
let nomor = text.replace(/[^0-9]/gi, '').slice(2)
if (!nomor.startsWith('8')) throw `Ejemplo de uso\n${usedPrefix}call 51977783xxx`
m.reply('*_Tunggu permintaan anda sedang diproses_*')
let anu = await fetch(`https://id.jagreward.com/member/verify-mobile/${nomor}`).then(a => a.json())
let spcall = `Envió con éxito una llamada a 62${nomor}`
conn.reply(m.chat, `${spcall}`.trim(), m)
m.reply(anu)
}
  
handler.help = ['call <nomor>']
handler.tags = ['tools']
handler.command = /^(call)$/i

module.exports = handler
