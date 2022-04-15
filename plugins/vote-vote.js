let handler = async (m, { conn, usedPrefix, command }) => {
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) throw `_*no se vota en este grupo!*_\n\n*${usedPrefix}mulaivote* - para empezar a votar`
    let isVote = conn.vote[id][1].concat(conn.vote[id][2])
    const wasVote = isVote.includes(m.sender)
    if (wasVote) throw '¡Has votado!'
    if (/up/i.test(command)) {
        conn.vote[id][1].push(m.sender)
    } else if (/de/i.test(command)) {
        conn.vote[id][2].push(m.sender)
    }
    m.reply(`!HECHO!\n\n*${usedPrefix}cekvote* - para comprobar el voto`)

}
handler.help = ['vote']
handler.tags = ['vote']
handler.command = /^(up|de)?vote$/i
handler.group = true
module.exports = handler
