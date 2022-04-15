async function handler(m, { conn,text }) {
  conn.verify = conn.verify ? conn.verify : {}
   user = DATABASE.data.users
   kode = Math.floor(Math.random() * 9999)
   if (user[m.sender].registered) return m.reply('_*¡Estás verificado!*_')
   aww = await m.reply(`_El código de verificación es ${kode}, ¡Responda este mensaje y responda este mensaje para verificación! Código en el mensaje de abajo_\n\n_*©YUKIBOT*_`)
     conn.verify[m.sender] = { code: kode, key: aww.key.id }
}

handler.all = async m => {
     if (!conn.verify) return
     if (!m.quoted) return
    if ((m.sender in conn.verify) == false) return
    if (m.text == conn.verify[m.sender].code && m.quoted.id == conn.verify[m.sender].key) {
    conn.sendButton(m.chat, '```Register Success Ketik #menu```', '', 'OWNER', '#owner', { quoted: m })
    DATABASE.data.users[m.sender].registered = true
    delete conn.verify[m.sender]
   }
}

handler.help = ['registered', 'register']
handler.tags = ['registered']
handler.command = ['registered', 'register']
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

module.exports = handler
