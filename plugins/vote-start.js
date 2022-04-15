let handler = async (m, { conn, text, usedPrefix }) => {
    conn.vote = conn.vote ? conn.vote : {}
    let id = m.chat
    if (id in conn.vote) {
        throw `_¡Todavía hay votos en este chat!_\n\n*${usedPrefix}hapusvote* -para borrar votos`
    }
    m.reply(`¡Comienza la votación!\n\n*${usedPrefix}upvote* - para si\n*${usedPrefix}devote* - para no\n*${usedPrefix}cekvote* - para comprobar el voto\n*${usedPrefix}hapusvote* - para borrar votos`)
    conn.vote[id] = [
        text,
        [],
        []
    ]
}
handler.help = ['mulaivote [alasan]']
handler.tags = ['vote']
handler.command = /^(start|mulai)vote$/i
handler.limit = true
handler.group = true
handler.admin = true
module.exports = handler
