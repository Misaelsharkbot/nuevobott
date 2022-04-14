let handler = async (m, { args, usedPrefix, command }) => {
    if (!args[0]) throw `Ejemplo:\n${usedPrefix + command} sticker`
    let { total, success, last, lastSuccess } = global.DATABASE.data.stats[args[0] + '.js']
    m.reply(`
*Plugin ${args[0]}*
*Total :* ${total}
*Triunfar :* ${success}
*Utilizado por última vez :* ${new Date(last)}
*La última vez que funcionó :* ${new Date(lastSuccess)}
`.trim())
}
handler.help = ['plugins']
handler.tags = ['owner']
handler.command = /^plugins$/i
module.exports = handler
