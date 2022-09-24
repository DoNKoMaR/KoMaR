/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
import cheerio from 'cheerio'
import axios from 'axios'

let handler = async (m, { conn, text }) => {
	if (!text) return m.reply('Y el texto?')
	let name = await conn.getName(m.sender)
	let enc = encodeURIComponent(text)
    const msj = m.reply(MultiNK.Proces(name))
	await msj
try {
let anu = await fuentes(text)
let rtps = `*[_>] Estilos de texto para:* _${text}_\n\n`
for (let i of anu) {
rtps += `✍️ *${i.name}* : ${i.result}\n\n`
}
m.reply(rtps)
} catch (e) {
m.reply(MultiNK.Error0())
}
}

handler.help = ['txtestilo']
handler.tags = ['conversor']
handler.command = /^(txtestilo|fuentes)$/i

export default handler

function fuentes(rtxt) {
    return new Promise((resolve, reject) => {
        axios.get('http://qaz.wtf/u/convert.cgi?text='+rtxt)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('table > tbody > tr').each(function (a, b) {
                hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })
            })
            resolve(hasil)
        }).catch((err) => reject(err))
    })
}
