let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {
  if (!text) throw `Â¡Ingrese una consulta!`
  let res = await fetch(global.API('https://api.jikan.moe', '/v3/search/anime', { q: text }))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  let { title, members, synopsis, episodes, url, rated, score, image_url, type, start_date, end_date } = json.results[0]
let animeingfo = `â¨ï¸ *Titulo:* ${title}
ðï¸ *Episodios:* ${episodes}
â¡ï¸ *Fecha de inicio:* ${start_date}
ð *Fecha final:* ${end_date}
ð¬ *Mostrar tipo:* ${type}
ðï¸ *Rating:* ${rated}
â¤ï¸ *Puntaje:* ${score}
ð¥ *Miembros:* ${members}
ðï¸ *Sinopsis:* ${synopsis}
ðï¸ *URL*: ${url}`
  conn.sendFile(m.chat, image_url, '', animeingfo, m)
}
handler.help = ['anime <judul>']
handler.tags = ['anime']
handler.command = /^(anime|animeinfo)$/i
//maapin fatur :<
module.exports = handler
