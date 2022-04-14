let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {
  if (!text) throw `¡Ingrese una consulta!`
  let res = await fetch(global.API('https://api.jikan.moe', '/v3/search/character', { q: text }))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  let { name, alternative_names, url, image_url, type } = json.results[0]
let charaingfo = `💬 *Nombre:* ${name}
💭 *Apodo:* ${alternative_names}
🔗 *Link*: ${url}
👤 *Tipo de caracter*: ${type}`

  conn.sendFile(m.chat, image_url, '', charaingfo, m)
}
handler.help = ['character <nama>']
handler.tags = ['anime']
handler.command = /^(chara|character)$/i
//kyaa jangan biarkan wabot-aq terbengkalai sampai nurutomo kembali
// Command - Re Edited -- TOXIC-DEVIL == || Character Type ||
module.exports = handler
