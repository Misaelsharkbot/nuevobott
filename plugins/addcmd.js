module.exports = Object.assign(async function handler(m, { text }) {
    global.DATABASE._data.sticker = global.DATABASE._data.sticker || {}
    if (!m.quoted) throw '¡Mensaje de respuesta!'
    if (!m.quoted.fileSha256) throw 'Falta hash SHA256'
    if (!text) throw `Tidak ada teks`
    let sticker = global.DATABASE._data.sticker
    let hash = m.quoted.fileSha256.toString('hex')
    if (sticker[hash] && sticker[hash].locked) throw 'No tienes permiso para cambiar este comando de etiqueta'
    sticker[hash] = {
        text,
        mentionedJid: m.mentionedJid,
        creator: m.sender,
        at: + new Date,
        locked: false,
    }
    m.reply(`Done!`)
}, {
    help: ['cmd'].map(v => 'set' + v + ' <text>'),
    tags: ['database'],
    command: ['setcmd']
})
