let handler = async (m, { conn, args }) => {
    if (!args || !args[0]) throw 'Yang mau di Unban siapa?'
    let mention = m.mentionedJid[0] || conn.parseMention(args[0]) || (args[0].replace(/[@.+-]/g, '').replace(' ', '') + '@s.whatsapp.net') || ''
    if (!mention) throw 'Tag salah satu lah'
    if (!(mention in global.DATABASE._data.users)) throw '¡¡Usuario no está registrado en BASE DE DATOS!!'
    let user = global.DATABASE._data.users[mention]
    if (!user.Banneduser) throw '¡¡Usuario no baneado!!'
    user.Banneduser = false
    user.BannedReason = ''
    user.warn = 0
    await m.reply('¡¡Desbaneado con éxito!!')
    m.reply('Has sido desbaneado!!', mention)
}
handler.help = ['unban']
handler.tags = ['owner']
handler.command = /^unban(user)?$/i
handler.mods = true

module.exports = handler
