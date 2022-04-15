//by nobuyaki
//jangan hapus hargai yang bikin
//remake by dhamz

const uploadImage = require('../lib/uploadImage') 
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text }) => {
 try {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Sin imagen'
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} no es compatible`
  let img = await q.download()
  let url = await uploadImage(img)
  let wasted = `https://some-random-api.ml/canvas/wasted?avatar=${url}`
  let stiker = await sticker(null, wasted, 'Wasted', '©Nobuyaki')
  conn.sendMessage(m.chat, stiker, MessageType.sticker, {
    quoted: m
  })
 } catch (e) {
   m.reply('La conversión falló')
  }
}
handler.help = ['wasted']
handler.tags = ['sticker']
handler.command = /^wasted$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
