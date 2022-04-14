let handler = async (m, { usedPrefix, command, text }) => {
    let ar = Object.keys(plugins)
    let ar1 = ar.map(v => v.replace('.js', ''))
    if (!text) throw `uhm.. ¿dónde está el texto?\n\nEjemplo:\n${usedPrefix + command} sc`
    if (!ar1.includes(text)) return m.reply(`'${text}' ¡extraviado!\n\n${ar1.map(v => ' ' + v).join`\n`}`)
    m.reply(require('fs').readFileSync('./plugins/' + text + '.js', 'utf-8'))
}
handler.help = ['getplugin'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(getplugin|gp)$/i

handler.rowner = true

module.exports = handler
