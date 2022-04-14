let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text, usedPrefix, participants, groupMetadata }) => {
    let [_, code] = text.match(linkRegex) || []
    if (!code) throw 'Link tidak valid atau tidak ada'
    await m.reply('Bot akan masuk!')
    let joiner = await conn.getName(m.sender)
    let res = await conn.query({
        json: ["action", "invite", code]
    })
    if (res.status !== 200) throw `no se pudo entrar, tal vez el enlace se haya restablecido o alguien haya eliminado el Bot.`
    if (global.DATABASE.data.chats[m.chat].welcome) throw false
    let grup = await conn.getName(res.gid)
    let time = async (ms) => { return new Promise(resolve => setTimeout(resolve, ms)); }
    let data = (await conn.groupMetadata(res.gid)).participants.map(u => u.jid)
    let limit = 35
    let member = data.length
    if (member <= limit) {
      conn.reply(res.gid, `Lo siento ${joiner} Los bots no pueden entrar, al menos un miembro debe ser ${limit} gente.`)
      await time(3000)
      conn.reply(res.gid, `Lo siento todo, Bot está saliendo..`)
      await time(2000)
 await conn.groupLeave(res.gid)
  } else if (member => limit) {
     conn.send2Button(m.chat, res.gid, `Hola miembros del grupo\n*${grup}*\nFui agregado por *${joiner}*\n\nPongan ${usedPrefix}menú para iniciar bot yaa`, '', 'MENU', '#menu', 'DONASI', '#donasi')
 }
}
handler.help = ['join <link gc>']
handler.tags = ['info']
handler.command = /^(join)$/i

handler.premium = false
handler.owner = true
handler.private = false

module.exports = handler
