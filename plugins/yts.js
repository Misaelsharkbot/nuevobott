let yts = require('yt-search')
let handler = async (m, { text }) => {
  if (!text) return m.reply('¿Que estas buscando?')
  let results = await yts(text)
  let teks = results.all.map(v => {
    switch (v.type) {
      case 'video': return `
» Título : *${v.title}* 
» Link : ${v.url}
» Duracion: ${v.timestamp}
» subido : ${v.ago}
» Vistas : ${v.views} views
      `.trim()
      case 'channel': return `
*${v.name}* (${v.url})
_${v.subCountLabel} (${v.subCount}) Subscriber_
${v.videoCount} video
`.trim()
    }
  }).filter(v => v).join('\n\n────────────────\n\n')
  m.reply(teks)
}
handler.help = ['', 'earch'].map(v => 'yts' + v + ' <pencarian>')
handler.tags = ['tools']
handler.command = /^yts(earch)?$/i

module.exports = handler
