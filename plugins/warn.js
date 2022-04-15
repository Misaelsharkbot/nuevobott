let handler = async (m, { conn, args }) => {
    if (!args || !args[0]) throw '¿A quien quiere advertir?'
    let mention = m.mentionedJid[0] || conn.parseMention(args[0]) || (args[0].replace(/[@.+-]/g, '').replace(' ', '') + '@s.whatsapp.net') || ''
    if (!mention) throw 'Etiqueta uno'
    if (!(mention in global.DATABASE._data.users)) throw '¡¡Usuario no está registrado en BASE DE DATOS!!'
    let user = global.DATABASE._data.users[mention]
    if (user.Banneduser) throw '¡El usuario ha sido baneado!'
    if ((user.warn * 1) < 3) {
        user.warn += 1
        m.reply('LISTO')
        m.reply('Kamu di warn oleh OWNER Atau MODERATOR!!, y ahora tienes *' + (user.warn + 1) + '* ADVERTENCIA. Recuerda que si te avisan 4 veces serás baneado automáticamente', mention)
    } else if ((user.warn * 1) > 2) {
        let reason = (args.length > 0 || args[1] ? args.slice(1).join(' ') : '4 kali WARN') || '4 veces ADVERTENCIA'
        user.Banneduser = true
        user.BannedReason = reason
        user.warn = 0
        m.reply('*Ha sido baneado, por recibir 4 advertencias*')
        m.reply('*Estás baneado por recibir 4 advertencias*\n *HUBUNGI* \n' + global.owner.map((v, i) => '*Owner ' + (i + 1) + ':* wa.me/' + v).join('\n') + '\n\n' + global.mods.map((v, i) => '*Moderator ' + (i + 1) + ':* wa.me/' + v).join('\n'), mention)
    }
}

handler.help = ['warn @mention']
handler.tags = ['owner']
handler.command = /^warn(user)?$/i
handler.mods = true

module.exports = handler
