let fs = require('fs')
const uwu = fs.readFileSync('./logo3.jpg')
const gambar =[
'./logo.jpg',
'./logo2.jpg',
'./logo3.jpg',
]
hasil = gambar[Math.floor(Math.random() * (gambar.length))]
owo = fs.readFileSync(hasil)
let { webp2png } = require('../lib/webp2mp4')
let handler = async (m, { conn, usedPrefix, command }) => {
  if (!m.quoted) throw `etiquete un sticker y envie el comando *${usedPrefix + command}*`
  let mime = m.quoted.mimetype || ''
  if (!/webp/.test(mime)) throw `etiquete un sticker y envie el comando *${usedPrefix + command}*`
  let media = await m.quoted.download()
  let out = owo
  if (/webp/.test(mime)) {
    out = await webp2png(media)
  }
  await conn.sendFile(m.chat, out, 'out.jpeg', '*kemlar*', m, false, {
    thumbnail: fs.readFileSync('./logo4.jpg')
  })
}
handler.help = ['toimg (reply)']
handler.tags = ['sticker']
handler.command = ['toimg']
module.exports = handler
