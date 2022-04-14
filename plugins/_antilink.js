let handler = m => m

let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

handler.before = function (m, { user, isAdmin, isBotAdmin }) {

  if (m.isBaileys && m.fromMe) throw false
  let chat = global.DATABASE.data.chats[m.chat]
  let name = this.getName(m.sender)
  let link = linkRegex.exec(m.text)

  if (chat.antiLink && link && !isAdmin && !m.isBaileys && m.isGroup && !m.fromMe) {
  if (user.isAdmin || user.isSuperAdmin) return m.reply ('Como eres un administrador de grupo, el bot no te pateará.')
 m.reply(`*「 ANTILINK DETECTOR 」*\nLink de grupo detectado Lo siento *${name}* Has enviado el enlace de tu grupo. Lo patearé :(`)
   this.groupRemove(m.chat, [m.sender])
  }
}
handler.group = true

module.exports = handler
