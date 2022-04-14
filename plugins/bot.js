let handler = async (m, { conn, text, participants }) => {
conn.reply(m.chat, `¿Si hermano? ${conn.getName(conn.user.jid)} En línea Solo escriba *#menu* Para ver la lista del menú *${conn.getName(conn.user.jid)}* :)\n\nPor favor escribe #menu`, 'conversacion', { quoted: m, contextInfo: { externalAdReply :{
mediaUrl: 'https://wa.me/51977783315?text=Hai.com',
mediaType: 2,
título: `Simple Bot Whatsapp`,
body: '© YUKIBOT',
thumbnailUrl: 'https://i.ibb.co/TYBsTsV/1890eb474e10.jpg',
}}}) 
}

handler.customPrefix = /^(bot|Bot)?$/i
handler.command = new RegExp

module.exports = handler
