let limit = 50
const { servers, ytv } = require('../lib/y2mate')
let handler = async (m, { conn, args, isPrems, isOwner }) => {
  await m.reply('Searching...')
  if (!args || !args[0]) throw 'Uhm... ¿dónde está la URL?'
  let server = (args[1] || 'id4').toLowerCase()
  let { dl_link, thumb, title, filesize, filesizeF} = await ytv(args[0], servers.includes(server) ? server : 'id4')
  let isLimit = (isPrems || isOwner ? 99 : limit) * 1024 < filesize
  conn.sendFile(m.chat, thumb, 'thumbnail.jpg', `
*TitULO:* ${title}
*Tamaño del archivo:* ${filesizeF}
*${isLimit ? 'Usar ': ''}Link:* ${dl_link}

Se esta enviando video,, por favor espere alrededor de 1 minuto.
`.trim(), m)
  if (!isLimit) conn.sendFile(m.chat, dl_link, title + '.mp4', `
*Titulo:* ${title}
*Tamaño del archivo:* ${filesizeF}
`.trim(), m)
}
handler.help = ['mp4','v',''].map(v => 'yt' + v + ' <url>')
handler.tags = ['downloader']
handler.command = /^yt(v|mp4)?$/i
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

