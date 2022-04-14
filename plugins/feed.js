let handler = async (m, { conn, args, usedPrefix }) => {
    let type = (args[0] || '').toLowerCase()
    let rubah = global.DATABASE._data.users[m.sender].rubah
    let kuda = global.DATABASE._data.users[m.sender].kuda
    let naga = global.DATABASE._data.users[m.sender].naga
    let kucing = global.DATABASE._data.users[m.sender].kucing
    switch (type) {
        case 'rubah':
            if (rubah == 0) return m.reply('*Aún no tienes un zorro mascota*')
            if (rubah == 5) return m.reply('*Tu mascota es lvl max*')
            let __waktur = (new Date - global.DATABASE._data.users[m.sender].rubahlastclaim)
            let _waktur = (600000 - __waktur)
            let waktur = clockString(_waktur)
            if (new Date - global.DATABASE._data.users[m.sender].rubahlastclaim > 600000) {
                if (global.DATABASE._data.users[m.sender].makananpet > 0) {
                    global.DATABASE._data.users[m.sender].makananpet -= 1
                    global.DATABASE._data.users[m.sender].anakrubah += 20
                    global.DATABASE._data.users[m.sender].rubahlastclaim = new Date * 1
                    conn.reply(m.chat, `Alimenta con éxito a la mascota ${type}`, m)
                    if (rubah > 0) {
                        let naiklvl = ((rubah * 100) - 1)
                        if (global.DATABASE._data.users[m.sender].anakrubah > naiklvl) {
                            global.DATABASE._data.users[m.sender].rubah += 1
                            global.DATABASE._data.users[m.sender].anakrubah -= (rubah * 100)
                            conn.reply(m.chat, `*Felicitaciones, Pet Fox, subiste de nivel*`, m)
                        }
                    }
                } else m.reply(`La comida de tu mascota no es suficiente`)
            } else m.reply(`Tu mascota está llena, prueba a darle de comer *${waktur}* otra vez`)
            break
        case 'kuda':
            if (kuda == 0) return m.reply('*Aún no tienes un caballo mascota*')
            if (kuda == 5) return m.reply('*Tu mascota es lvl max*')
            let __waktuk = (new Date - global.DATABASE._data.users[m.sender].kudalastclaim)
            let _waktuk = (600000 - __waktuk)
            let waktuk = clockString(_waktuk)
            if (new Date - global.DATABASE._data.users[m.sender].kudalastclaim > 600000) {
                if (global.DATABASE._data.users[m.sender].makananpet > 0) {
                    global.DATABASE._data.users[m.sender].makananpet -= 1
                    global.DATABASE._data.users[m.sender].anakkuda += 20
                    global.DATABASE._data.users[m.sender].kudalastclaim = new Date * 1
                    conn.reply(m.chat, `Alimenta con éxito a la mascota ${type}`, m)
                    if (kuda > 0) {
                        let naiklvl = ((kuda * 100) - 1)
                        if (global.DATABASE._data.users[m.sender].anakkuda > naiklvl) {
                            global.DATABASE._data.users[m.sender].kuda += 1
                            global.DATABASE._data.users[m.sender].anakkuda -= (kuda * 100)
                            conn.reply(m.chat, `*Felicitaciones, Pet Horse, subiste de nivel*`, m)
                        }
                    }
                } else m.reply(`La comida de tu mascota no es suficiente`)
            } else m.reply(`Tu mascota está llena, prueba a darle de comer *${waktuk}* otra vez`)
            break
        case 'naga':
            if (naga == 0) return m.reply('*Aún no tienes una mascota dragón*')
            if (naga == 5) return m.reply('*Tu mascota es lvl max*')
            let __waktuu = (new Date - global.DATABASE._data.users[m.sender].nagalastclaim)
            let _waktuu = (600000 - __waktuu)
            let waktuu = clockString(_waktuu)
            if (new Date - global.DATABASE._data.users[m.sender].nagalastclaim > 600000) {
                if (global.DATABASE._data.users[m.sender].makananpet > 0) {
                    global.DATABASE._data.users[m.sender].makananpet -= 1
                    global.DATABASE._data.users[m.sender].anaknaga += 20
                    global.DATABASE._data.users[m.sender].kudalastclaim = new Date * 1
                    conn.reply(m.chat, `Berhasil memberi makan pet ${type}`, m)
                    if (naga > 0) {
                        let naiklvl = ((naga * 100) - 1)
                        if (global.DATABASE._data.users[m.sender].anaknaga > naiklvl) {
                            global.DATABASE._data.users[m.sender].naga += 1
                            global.DATABASE._data.users[m.sender].anaknaga -= (naga * 100)
                            conn.reply(m.chat, `*Felicidades Pet Dragon has subido de nivel*`, m)
                        }
                    }
                } else m.reply(`La comida de tu mascota no es suficiente`)
            } else m.reply(`Tu mascota está llena, prueba a darle de comer *${waktuk}* otra vez`)
            break
        case 'kucing':
            if (kucing == 0) return m.reply('*Aún no tienes un gato mascota*')
            if (kucing == 5) return m.reply('*Tu mascota es lvl max*')
            let __waktu = (new Date - global.DATABASE._data.users[m.sender].kucinglastclaim)
            let _waktu = (600000 - __waktu)
            let waktu = clockString(_waktu)
            if (new Date - global.DATABASE._data.users[m.sender].kucinglastclaim > 600000) {
                if (global.DATABASE._data.users[m.sender].makananpet > 0) {
                    global.DATABASE._data.users[m.sender].makananpet -= 1
                    global.DATABASE._data.users[m.sender].anakkucing += 20
                    global.DATABASE._data.users[m.sender].kucinglastclaim = new Date * 1
                    conn.reply(m.chat, `Alimenta con éxito a la mascota ${type}`, m)
                    if (kucing > 0) { 
                        let naiklvl = ((kucing * 100) - 1)
                        if (global.DATABASE._data.users[m.sender].anakkucing > naiklvl) {
                            global.DATABASE._data.users[m.sender].kucing += 1
                            global.DATABASE._data.users[m.sender].anakkucing -= (kucing * 100)
                            conn.reply(m.chat, `*Felicitaciones Pet Cat, subiste de nivel*`, m)
                        }
                    }
                } else m.reply(`La comida de tu mascota no es suficiente`)
            } else m.reply(`Tu mascota está llena, prueba a darle de comer *${waktu}* otra vez`)
            break
        default:
            return conn.reply(m.chat, `${usedPrefix}feed [kucing | rubah | kuda | naga]\nEjemplos de uso: *${usedPrefix}feed kucing*`, m)
    }
}
handler.help = ['feed [pet type]']
handler.tags = ['rpg']
handler.command = /^(feed(ing)?)$/i

module.exports = handler

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
