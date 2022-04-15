let handler = async (m, { conn, usedPrefix }) => {
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) throw `_*no hay vota en este grupo!*_\n\n*${usedPrefix}mulaivote* - para empezar a votar`
    
    let [reason, upvote, devote] = conn.vote[id]
    let mentionedJid = [...upvote, ...devote]
    m.reply(
`*「 VOTACION 」*

*Motivo:* ${reason}

*A FAVOR*
_Total: ${upvote.length}_
${upvote.map(u => '@' + u.split('@')[0]).join('\n')}

*ENCONTRA*
_Total: ${devote.length}_
${devote.map(u => '@' + u.split('@')[0]).join('\n')}}

*${usedPrefix}hapusvote* - para borrar votos

_by ariffb_
`.trim(), false, { contextInfo: { mentionedJid } })
}
handler.help = ['cekvote']
handler.tags = ['vote']
handler.command = /^cekvote$/i
handler.group = true
module.exports = handler
