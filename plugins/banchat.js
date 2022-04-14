let handler = async (m, { conn, participants }) => {
  // if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
    if (!(m.chat in global.DATABASE._data.chats)) return m.reply('¡Este chat no está registrado en la BASE DE DATOS!')
    let chat = global.DATABASE._data.chats[m.chat]
    if (chat.isBanned) return m.reply('Este chat ha sido baneado!')
    chat.isBanned = true
    m.reply('*LISTO!*')
  // } else m.reply('Hay un número de anfitrión aquí...')
}
handler.help = ['banchat']
handler.tags = ['owner']
handler.command = /^banchat$/i
handler.mods = true

module.exports = handler
