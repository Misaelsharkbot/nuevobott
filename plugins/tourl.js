const uploadFile = require('../lib/uploadFile')
const uploadImage = require('../lib/uploadImage')

let handler = async (m) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'No se encontraron medios'
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
  m.reply(`${link}
${media.length} Byte(s)
${isTele ? '(Sin fecha de caducidad)' : '(1 Time Use + Expired in 1 Week)'}`)
}
handler.help = ['tourl (caption|reply media)']
handler.tags = ['tools']
handler.command = /^tourl$/i

module.exports = handler
