let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, args, usedPrefix, DevMode }) => {
    if (args.length < 3) {
        return conn.reply(m.chat, `Usar formato ${usedPrefix}transfer <type> <jumlah> <@tag>\nejemplo de uso: *${usedPrefix}transfer money 100 @tag*`.trim(), m)
    } else try {
        let type = (args[0] || '').toLowerCase()
        let count = args[1] && args[1].length > 0 ? Math.min(9999999, Math.max(parseInt(args[1]), 1)) : Math.min(1)
        let who = m.mentionedJid ? m.mentionedJid[0] : (args[2].replace(/[@ .+-]/g, '').replace(' ', '') + '@s.whatsapp.net')
        if(!m.mentionedJid || !args[2]) throw '¡¡Etiqueta uno o escribe el número!!'
        let users = global.DATABASE._data.users
        switch (type) {
            case 'money':
                if (global.DATABASE._data.users[m.sender].money >= count * 1) {
                    try {
                        global.DATABASE._data.users[m.sender].money -= count * 1
                        global.DATABASE._data.users[who].money += count * 1
                        conn.reply(m.chat, `Transferencia exitosa de dinero con valor de ${count}`.trim(), m)
                    } catch (e) {
                        global.DATABASE._data.users[m.sender].money += count * 1
                        m.reply('Transferencia fallida')
                        console.log(e)
                        if (DevMode) {
                            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                conn.sendMessage(jid, 'Transfer.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
                            }
                        }
                    }
                } else conn.reply(m.chat, `Su dinero no es suficiente para transferir dinero de ${count}`.trim(), m)
                break
            case 'potion':
                if (global.DATABASE._data.users[m.sender].potion >= count * 1) {
                    try {
                        global.DATABASE._data.users[m.sender].potion -= count * 1
                        global.DATABASE._data.users[who].potion += count * 1
                        conn.reply(m.chat, `Transferir con éxito ${count} Potion`.trim(), m)
                    } catch (e) {
                        global.DATABASE._data.users[m.sender].potion += count * 1
                        m.reply('Transferencia fallida')
                        console.log(e)
                        if (DevMode) {
                            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                conn.sendMessage(jid, 'Transfer.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
                            }
                        }
                    }
                } else conn.reply(m.chat, `Tus pociones no son suficientes`.trim(), m)
                break
            case 'sampah':
                if (global.DATABASE._data.users[m.sender].sampah >= count * 1) {
                    try {
                        global.DATABASE._data.users[m.sender].sampah -= count * 1
                        global.DATABASE._data.users[who].sampah += count * 1
                        conn.reply(m.chat, `Transferir con éxito ${count} Sampah`.trim(), m)
                    } catch (e) {
                        global.DATABASE._data.users[m.sender].sampah += count * 1
                        m.reply('Transferencia fallida')
                        console.log(e)
                        if (DevMode) {
                            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                conn.sendMessage(jid, 'Transfer.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
                            }
                        }
                    }
                } else conn.reply(m.chat, `Tu basura no es suficiente`.trim(), m)
                break
            case 'diamond':
                if (global.DATABASE._data.users[m.sender].diamond >= count * 1) {
                    try {
                        global.DATABASE._data.users[m.sender].diamond -= count * 1
                        global.DATABASE._data.users[who].diamond += count * 1
                        conn.reply(m.chat, `Transferir con éxito ${count} Diamond`.trim(), m)
                    } catch (e) {
                        global.DATABASE._data.users[m.sender].diamond += count * 1
                        m.reply('Transferencia fallida')
                        console.log(e)
                        if (DevMode) {
                            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                conn.sendMessage(jid, 'Transfer.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
                            }
                        }
                    }
                } else conn.reply(m.chat, `Tus diamantes no son suficientes`.trim(), m)
                break
            case 'common':
                if (global.DATABASE._data.users[m.sender].common >= count * 1) {
                    try {
                        global.DATABASE._data.users[m.sender].common -= count * 1
                        global.DATABASE._data.users[who].common += count * 1
                        conn.reply(m.chat, `Transferir con éxito ${count} Common Crate`.trim(), m)
                    } catch (e) {
                        global.DATABASE._data.users[m.sender].common += count * 1
                        m.reply('Transferencia fallida')
                        console.log(e)
                        if (DevMode) {
                            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                conn.sendMessage(jid, 'Transfer.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
                            }
                        }
                    }
                } else conn.reply(m.chat, `Tus cajas comúnes no son suficientes`.trim(), m)
                break
            case 'uncommon':
                if (global.DATABASE._data.users[m.sender].uncommon >= count * 1) {
                    try {
                        global.DATABASE._data.users[m.sender].uncommon -= count * 1
                        global.DATABASE._data.users[who].uncommon += count * 1
                        conn.reply(m.chat, `Transferir con éxito ${count} Uncommon Crate`.trim(), m)
                    } catch (e) {
                        global.DATABASE._data.users[m.sender].uncommon += count * 1
                        m.reply('Transferencia fallida')
                        console.log(e)
                        if (DevMode) {
                            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                conn.sendMessage(jid, 'Transfer.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
                            }
                        }
                    }
                } else conn.reply(m.chat, `Tus cajas raras no son suficientes`.trim(), m)
                break
            case 'mythic':
                if (global.DATABASE._data.users[m.sender].mythic >= count * 1) {
                    try {
                        global.DATABASE._data.users[m.sender].mythic -= count * 1
                        global.DATABASE._data.users[who].mythic += count * 1
                        conn.reply(m.chat, `Transferir con éxito ${count} Mythic crate`.trim(), m)
                    } catch (e) {
                        global.DATABASE._data.users[m.sender].mythic += count * 1
                        m.reply('Transferencia fallida')
                        console.log(e)
                        if (DevMode) {
                            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                conn.sendMessage(jid, 'Transfer.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
                            }
                        }
                    }
                } else conn.reply(m.chat, `Cajas míticas no suficientes`.trim(), m)
                break
            case 'legendary':
                if (global.DATABASE._data.users[m.sender].legendary >= count * 1) {
                    try {
                        global.DATABASE._data.users[m.sender].legendary -= count * 1
                        global.DATABASE._data.users[who].legendary += count * 1
                        conn.reply(m.chat, `Transferir con éxito ${count} Legendary crate`.trim(), m)
                    } catch (e) {
                        global.DATABASE._data.users[m.sender].legendary += count * 1
                        m.reply('Transferencia fallida')
                        console.log(e)
                        if (DevMode) {
                            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                conn.sendMessage(jid, 'Transfer.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
                            }
                        }
                    }
                } else conn.reply(m.chat, `tus cajas legendarisa no son suficientes`.trim(), m)
                break
            default:
                return conn.reply(m.chat, `Usar formato ${usedPrefix}transfer <type> <jumlah> <@tag>\nejemplo de uso: *${usedPrefix}transfer money 100 @tag*\n\n*Lista transferible*\nMoney\nPotion\nSampah\nDiamond\nCommon\nUncommon\nMythic\nLegendary`.trim(), m)
        }
    } catch (e) {
        conn.reply(m.chat, `Format yang anda gunakan salah\n\nGunakan format ${usedPrefix}transfer <type> <jumlah> <@tag>\ncontoh penggunaan: *${usedPrefix}transfer money 100 @tag*`.trim(), m)
        console.log(e)
        if (DevMode) {
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.sendMessage(jid, 'Transfer.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    }
}
    
handler.help = ['transfer <Args>']
handler.tags = ['rpg']
handler.command = /^(transfer)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.money = 0

module.exports = handler
