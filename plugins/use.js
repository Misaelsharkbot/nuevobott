let { MessageType } = require('@adiwajshing/baileys')
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) =>  {
    let msgerror = (pickRandom(['Error', 'astagfirullah error', 'Nice Error', 'Salah format keknya :v', 'error bro', 'Kocak error :v', 'wtf error :v', 'Ciaaa error', 'error cuyy', 'dahlah (emot batu) error']))
    try {
        let msgkurang = (pickRandom(['no tienes suficientes pociones', 'ups, no hay suficientes pociones :v', 'wtf no es suficiente :v', 'compra pociones primero, no tienes suficientes pociones', 'No tienes suficientes pociones', 'eyyyy no tienes suficientes pociones', 'compra primero', 'cuando quieres usar pociones pero no hay pociones :v', 'pídele a otra persona que transfiera las pociones , para que no pierdas tus pociones :v', 'Compra pociones primero KK']))
        let msgpenuh = (pickRandom(['Tu vida está llena', 'Echa un vistazo a tu inv, tu vida ya es 100, ¿para qué usar pociones otra vez?', 'Tu salud está llena woyy', 'ws kebek weh :v', 'tu vida es full :v', 'uhh wow, ya full']))
        let kucing = global.DATABASE._data.users[m.sender].kucing
        let usepotion = (kucing == 0 ? 40 : '' || kucing == 1 ? 45 : '' || kucing == 2 ? 50 : '' || kucing == 3 ? 55 : '' || kucing == 4 ? 60 : '' || kucing == 5 ? 65 : '' || kucing == 6 ? 70 : '' || kucing == 7 ? 75 : '' || kucing == 8 ? 80 : '' || kucing == 9 ? 85 : '' || kucing == 10 ? 90 : '')
        let healt = global.DATABASE._data.users[m.sender].healt
        if (/use|pakai/i.test(command)) {
            try {
                let count = (/[0-9]/g.test(args[1])) ? !args[1] || args.length < 2 ? Math.max((Math.ceil((100 - global.DATABASE._data.users[m.sender].healt) / usepotion)), 1) : Math.max(args[1], 1) : Math.max((Math.ceil((100 - global.DATABASE._data.users[m.sender].healt) / usepotion)), 1)
                 let msgsucces = (pickRandom(['success memakai', 'Buen éxito usando', 'se las arregló para beber', 'primitivo que usas', 'anda memakai', 'Anda menggunakan']) + ' *' + (count * 1) + '* Potion')
                 if (args[0] === 'potion') {
                    if (global.DATABASE._data.users[m.sender].healt < 100) {
                        if (global.DATABASE._data.users[m.sender].potion >= count * 1) {
                            global.DATABASE._data.users[m.sender].potion -= count * 1
                            global.DATABASE._data.users[m.sender].healt += usepotion * count
                            conn.reply(m.chat, msgsucces, m)
                        } else conn.reply(m.chat, msgkurang, m)
                    } else conn.reply(m.chat, msgpenuh, m)
                } else if (args.length > 2 && args[0] === !'potion') m.reply(pickRandom(['Solo puede usar pociones.', '¿Qué es lo que quieres hacer? Solo puedo usar pociones :v', 'Vaya, ¿qué vas a usar?, solo pueden pociones', 'Wow, solo puedes hacer pociones.', 'Bueno, ¿qué quieres usar?, solo puedes hacer pociones']) + '\nEjemplos de uso: *' + usedPrefix + 'potion 1*')
            } catch (e) {
                console.log(e)
                m.reply(msgerror)
                if (DevMode) {
                    let file = require.resolve(__filename)
                    for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                        conn.sendMessage(jid, file + ' error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
                    }
                }
            }
        } else if (/heal/i.test(command)) {
            try {
                let count = (/[0-9]/g.test(args[0])) ? !args[0] || args.length < 1 ? Math.max((Math.ceil((100 - global.DATABASE._data.users[m.sender].healt) / usepotion)), 1) : Math.max(args[0], 1) : Math.max((Math.ceil((100 - global.DATABASE._data.users[m.sender].healt) / usepotion)), 1)
                let msgsucces = (pickRandom(['éxito usando', 'buen éxito usando', 'beber con éxito', 'primitivo que usaste', 'usabas', 'usabas']) + ' *' + (count * 1) + '* Potion')
                if (global.DATABASE._data.users[m.sender].healt < 100) {
                    if (global.DATABASE._data.users[m.sender].potion >= count * 1) {
                        global.DATABASE._data.users[m.sender].potion -= count * 1
                        global.DATABASE._data.users[m.sender].healt += usepotion * count
                        conn.reply(m.chat, msgsucces, m)
                    } else conn.reply(m.chat, msgkurang, m)
                } else conn.reply(m.chat, msgpenuh, m)
            } catch (e) {
                console.log(e)
                m.reply(msgerror)
                if (DevMode) {
                    let file = require.resolve(__filename)
                    for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                        conn.sendMessage(jid, file + ' error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
                    }
                }
            }
        }
    } catch (e) {
        console.log(e)
        conn.reply(m.chat, msgerror, m)
        if (DevMode) {
            let file = require.resolve(__filename)
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.sendMessage(jid, file + ' error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    }
}

handler.help = ['use <item> <jumlah>', 'heal']
handler.tags = ['rpg']
handler.command = /^(use|heal)$/i

module.exports = handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
