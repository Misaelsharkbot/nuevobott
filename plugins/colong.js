//
const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')
let handler  = async (m, { conn, args }) => {
  let stiker = false
try {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image|video/.test(mime)) {
      let img = await q.download()
      if (!img) throw '┬íResponde a un sticker!'
      stiker = await sticker(img, false, `${conn.getName(m.sender)}`, require('awesome-phonenumber')(`+${m.sender.replace(/@.+/, '')}`). getNumber('international'))
    } else if (args[0]) stiker = await sticker(false, args[0], ` Punya ${conn.getName(m.sender)}`, require('awesome-phonenumber')(`+${m.sender.replace(/@.+/, '')}`). getNumber('international'))
  } finally {
    if (stiker) conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
    else throw 'Conversion failed'
  }
}
handler.help = ['colong']
handler.tags = ['sticker']
handler.command = /^colong$/i
handler.owner = true

module.exports = handler
