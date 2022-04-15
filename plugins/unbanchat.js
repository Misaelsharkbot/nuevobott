let handler = async (m, { conn }) => {
  if (!(m.chat in global.DATABASE._data.chats)) return m.reply('¡Este chat no está registrado en la BASE DE DATOS!')
  let chat = global.DATABASE._data.chats[m.chat]
  if (!chat.isBanned) return m.reply('¡Este chat no está prohibido!')
  chat.isBanned = false
  m.reply('El Grupo ha sido desbaneado!')
}
handler.help = ['unbanchat']
handler.tags = ['owner']
handler.command = /^unbanchat$/i
handler.owner = true

module.exports = handler
