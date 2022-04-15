const { createHash } = require('crypto')
let handler = async function (m, { args }) {
  if (!args[0]) throw 'Número de serie vacío'
  let user = global.DATABASE._data.users[m.sender]
  let sn = createHash('md5').update(m.sender).digest('hex')
  if (args[0] !== sn) throw 'Número de serie incorrecto'
  user.registered = false
  m.reply(`¡Unreg lo hizo!`)
}
handler.help = ['', 'ister'].map(v => 'unreg' + v + ' <SN|NUMERO DE SERIE>')
handler.tags = ['exp']

handler.command = /^unreg(ister)?$/i
handler.register = true

module.exports = handler

