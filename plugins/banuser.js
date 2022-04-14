let handler = async (m, { conn, args }) => { 
    if (!args || !args[0]) throw 'Siapa yang mau di banned om?'
    let mention = m.mentionedJid[0] || conn.parseMention(args[0]) || (args[0].replace(/[@.+-]/g, '').replace(' ', '') + '@s.whatsapp.net') || ''
    if (!mention) throw 'Tag salah satu lah'
    if (!(mention in global.DATABASE._data.users)) throw '¡¡El usuario no está registrado en la BASE DE DATOS!!'
    let user = global.DATABASE._data.users[mention]
    if (user.Banneduser) throw '*¡El usuario ha sido baneado!*'
    let txt = (args.length > 1 ? args.slice(1).join(' ') : '') || '' 
    user.Banneduser = true 
    user.BannedReason = txt 
    m.reply('¡USUARIO baneado exitosamente!')
    m.reply('*Estas baneado por el PRPIETARIO o MODERADOR!*\n *CONTACTO* \n' + global.owner.map((v, i) => '*Owner ' + (i + 1) + ':* wa.me/' + v).join('\n') + '\n\n' + global.mods.map((v, i) => '*MODERADOR ' + (i + 1) + ':* wa.me/' + v).join('\n'), mention)
}

handler.help = ['ban']
handler.tags = ['owner']
handler.command = /^ban(user)?$/i

handler.mods = true 

module.exports = handler
