import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'
import db from '../lib/database.js'

let handler = async (m, { conn }) => {
    let user = db.data.users[m.sender]
    var lvlxp = ''
    if(user.level<=2){lvlxp='[ - - - - - - - - - - ]'}else if(user.level<=9){lvlxp='[# - - - - - - - - - ]'}else if(user.level<=19){lvlxp='[## - - - - - - - - ]'}else if(user.level<=29){lvlxp='[### - - - - - - - ]'}else if(user.level<=39){lvlxp='[#### - - - - - - ]'}else if(user.level<=49){lvlxp='[##### - - - - - ]'}else if(user.level<=59){lvlxp='[###### - - - - ]'}else if(user.level<=69){lvlxp='[####### - - - ]'}else if(user.level<=79){lvlxp='[######## - - ]'}else if(user.level<=89){lvlxp='[######### - ]'}else if(user.level<=99){lvlxp='[##########]'}
    if (!canLevelUp(user.level, user.exp, global.multiplier)) {
        let { min, xp, max } = xpRange(user.level, global.multiplier)
        return m.reply(`
🪀 Nivel actual *${user.level} (${user.exp - min}/${xp})*
🔥 Te faltan *${max - user.exp}* de XP para que puedas subir al siguiente nivel
`)
    }
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    if (before !== user.level) {
    	user.role = global.rpg.role(user.level).name
        let teks = `Felicidades! ${conn.getName(m.sender)}\nAcabas de subir de nivel`
        let str = `\`\`\`${lvlxp}\`\`\`

♻️ *Nivel anterior* : ${before}
🪀 *Nuevo nivel* : ${user.level}
⚔️ *Rol del cliente* : ${user.role}
📆 *Fecha* : ${new Date().toLocaleString('es-ES')}

_Cuanto mas interactúes con el bot, mayor será¡ tu nivel_
`.trim()
        try {
            const img = await levelup(teks, user.level)
            conn.sendFile(m.chat, img, 'levelup.jpg', str, m)
        } catch (e) {
            m.reply(str)
        }
    }
}

handler.help = ['subirnivel']
handler.tags = ['xp']
handler.command = /^(subirnivel|levelup)$/i

export default handler