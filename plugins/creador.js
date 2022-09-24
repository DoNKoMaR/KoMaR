/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
import * as fs from 'fs'

let handler = async (m, { conn, usedPrefix }) => {
let xname = await conn.getName(m.sender)
const data = global.owner.filter(([id, isCreator]) => id && isCreator)
for (let [number, name] of data) {
let vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n' 
            + 'FN:'+Propietario+'\n'
            + 'ORG:Otakus Tecnológicos;\n'

            + 'item1.TEL;waid=+7 977 345 21 27\n'
            + 'item1.X-ABLabel:⚡ Creadora Principal\n'
            
            + 'item2.TEL;waid='+number.replace(/[^0-9]/g, '')+':+'+number.replace(/[^0-9]/g, '')+'\n'
            + 'item2.X-ABLabel:🤝 Dueño actual\n'
            
            + 'item3.EMAIL;type=INTERNET:https://www.paypal.me/teslamelendez\n'
            + 'item3.X-ABLabel:Email\n'
            
            + 'item4.URL;Web:https://latam-api.vercel.app/\n'
            + 'item4.ADR:;;🇵🇪 Peru;;;;\n'
            
            + "item5.X-ABLabel:How Sexy You Are "+xname+"! 7w7r\n"
            + 'END:VCARD'

conn.sendMessage(m.chat,{ contacts: { displayName: 'AzaZel', contacts: [{ vcard }] }}, {quoted: {key : {participant : '0@s.whatsapp.net'},message: {contactMessage:{displayName: NombreDelBot}}} })
}
}

handler.help = ['creador', 'owner']
handler.tags = ['informacion']
handler.command = /^(владелец|owner)$/i

export default handler
