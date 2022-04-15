const { createHash } = require('crypto')
let PhoneNumber = require('awesome-phonenumber')
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let totalreg = Object.keys(global.DATABASE._data.users).length
let handler = async function (m, { text, usedPrefix }) {
let pp = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
  let user = global.DATABASE._data.users[m.sender]
  if (user.registered === true) throw `Ya está registrado\n¿Quieres volver a registrarte? ${usedPrefix}unreg <SN|SERIAL NUMBER>`
  if (!Reg.test(text)) throw `Formato erróneo\n*${usedPrefix}daftar nama.umur*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'El nombre no puede estar vacío (Alphanumeric)'
  if (!age) throw 'La edad no puede estar vacía (Angka)'
  age = parseInt(age)
  if (age > 100) throw 'Eres muy viejo 😑'
  if (age < 5) throw 'Los bebes pueden escribir ._.'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let verif =`
╭━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙
│ *「 VERIFICACIÓN DE ÉXITO 」*
│ *GRACIAS POR IDNTIFICARTE*
│ *Tu registro *
│ *Ya esta guardado en la base de datos*
╰┬────────────┈ ⳹
┌┤◦➛ *Nombre* : ${name}
││◦➛ *Número* : ${who.split`@`[0]}
││◦➛ *Edad* : ${age} Tahun
││◦➛ *SN* : ${sn}
││◦➛ *registro total* : ${totalreg} Usuarios
││◦➛ *Estado :* ☑️ Terverifikasi
│╰────────────┈ ⳹
│ *Por favor escribe .menu*
│ *para Continuar*
╰━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙

*「 ${conn.getName(conn.user.jid)} 」*
`.trim()
conn.sendFile(m.chat, pp, 'pp.jpg', verif, m, false)
}
}
handler.help = ['daftar'].map(v => v + ' <name>.<age>')
handler.tags = ['daftar']

handler.command = /^daftar$/i

module.exports = handler

