let get = require('node-fetch')
let handler = async (m, { conn,text,args}) => {
 let data = await get('https://zerochanbot.herokuapp.com/api/cekapikey?apikey='+args[0]).then(v => v.json())
  if (data.status != 200) throw `API : https://zerochanbot.herokuapp.com\nApikey : ${args[0]}\n\nApikey Inválido, chatee con el propietario para comprar apikey`
  if (data.status == 200) m.reply(`API : https://zerochanbot.herokuapp.com\nApikey : ${args[0]}\nStatus : Válido\n\nTu Apikey es Válido, Sólo válido por 30 días, hermano:)`)
}
handler.help = ['cekey']
handler.tags = ['api']

handler.command = /^cek(token|apikey|key)$/i

module.exports = handler
