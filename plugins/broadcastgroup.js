let handler  = async (m, { conn, text }) => {
  let fs = require('fs')
  let fetch = require('node-fetch')
  const {
    MessageType,
    Mimetype
} = require("@adiwajshing/baileys");
const anu = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "6285240750713-1610340626@g.us",
			"inviteCode": "mememteeeekkeke",
			"groupName": "P", 
            "caption": "BROADCAST GROUP", 
            'jpegThumbnail': fs.readFileSync('./logo.jpg')
		}
	}
}
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? itsu.user.jid : m.sender
  try {
    pp = await conn.getProfilePicture(who)}
    catch (e){
    }

  let groups = conn.chats.all().filter(v => v.jid.endsWith('g.us') && !v.read_only && v.message && !v.announce).map(v => v.jid)
  let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
  let teks = text ? text : cc.text
  let content = await conn.cMod(m.chat, cc, /bc|broadcast/i.test(text) ? text : text + '\n' + readMore + '\n「 Transmisión de todos los grupos 」')
  conn.reply(m.chat, `_Enviar un mensaje de difusión a ${groups.length} grup_`, m)
  for (let id of groups) conn.copyNForward(id, content, 'conversation', {quoted: anu, thumbnail: fs.readFileSync('./logo.jpg'), contextInfo:{externalAdReply: {title: `© ${conn.user.name} BROADCAST` , body: '>///<',sourceUrl: 'https://chat.whatsapp.com/DYbwxUvMEzTEsOuYQnBDm2', thumbnail: fs.readFileSync('./logo.jpg')}}} ,true)
  conn.reply(m.chat, `_Done_`, m)
}
handler.help = ['broadcastgroup','bcgc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)(group|grup|gc)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

const randomID = length => require('crypto').randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length)
