let handler  = async (m, { conn, usedPrefix }) => {
  conn.reply(m.chat, `
╭─「 *Tutoriales de METRO BOT* 」
│ 
│〘 Tutorial EPIC RPG 〙
│• *${usedPrefix}claim*
│   Paquete de inicio reclamable
│   cada 12 horas
│• *${usedPrefix}mulung*
│• *${usedPrefix}adventure*
│• *${usedPrefix}petualang*
│   Para encontrar recursos como
│   Dinero, Exp, etc..., requiere
│   al menos 80 vidas para poder
│   hacerlo y no puedes enviar
│   spam porque hay un retraso de 5
│   minuto
│• *${usedPrefix}use potion <jumlah>*
│   Para usar una poción/untuk 
│   llenar vida/health
│• *${usedPrefix}shop buy potion <jumlah>*
│   Para comprar una poción y escribe
│   *${usedPrefix}use potion <jumlah>*
│   para usar pociones
│• *${usedPrefix}shop <args>*
│   comprar o vender algo
│• *${usedPrefix}shop buy <crate> <jumlah>*
│   Comprar Caja
│• *${usedPrefix}profile*
│• *${usedPrefix}pp*
│• *${usedPrefix}profil*
│   para saber tu número de whatsapp, etc.
│• *${usedPrefix}inv*
│• *${usedPrefix}inventory*
│• *${usedPrefix}bal*
│   Para comprobar la vida, el dinero, etc.
│• *${usedPrefix}judi <jumlah>*
│   *_Jangan judi, Karena gk bakal_*
│   *_balik modal.BENERAN GK BOHONG_*
│  
│*©Metro Bot 2020-2021*
╰─「 *Tutorial Main METRO BOT* 」
`.trim(), m)
}
handler.help = ['tutorial']
handler.tags = ['about']
handler.command = /^(tutorial)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

