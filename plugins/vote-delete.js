let handler = async (m, { conn, usedPrefix }) => {
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) throw `_*no hay vota en este grupo!*_\n\n*${usedPrefix}mulaivote* - para empezar a votar`
    delete conn.vote[id]
    m.reply(`Hecho!`)

}
handler.help = ['hapusvote']
handler.tags = ['vote']
handler.command = /^(delete|hapus)vote$/i
handler.group = true
handler.admin = true
module.exports = handler
