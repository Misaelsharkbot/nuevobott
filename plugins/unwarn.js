let handler = async (m, { conn, args }) => {
    if (!args || !args[0]) throw 'Siapa yang mau di Unwarn om?'
    let mention = m.mentionedJid[0] || conn.parseMention(args[0]) || (args[0].replace(/[@.+-]/g, '').replace(' ', '') + '@s.whatsapp.net') || ''
    if (!mention) throw 'Tag salah satu lah'
    if (!(mention in global.DATABASE._data.users)) throw '¡¡El usuario no está registrado en la BASE DE DATOS!!'
    let user = global.DATABASE._data.users[mention]
    if (user.Banneduser) throw '¡El usuario ha sido baneado!'
    if ((user.warn * 1) < 1) throw 'El usuario no tiene ninguna advertencia'
    let count = (args[1] || args.length > 0 ? !isNaN(parseInt(args[1])) ? parseInt(args[1]) : 1 : 1) || 1
    if ((user.warn * 1) < count * 1) throw `User hanya memiliki *${user.warn * 1}* WARN!!`
    user.warn -= count * 1
    m.reply('¡Desadvertir al usuario con éxito!')
    m.reply('Ha sido desavertido por PROPIETARIO o MODERADOR , ahora tiene *' + (global.DATABASE._data.users[mention].warn * 1) + '* WARN', mention)
}

handler.help = ['unwarn @mention']
handler.tags = ['owner']
handler.command = /^unwarn(user)?$/i
handler.mods = true

module.exports = handler
