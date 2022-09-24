/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
import fechaC from '../lib/calendario.js'

let handler = async (m, { conn, args }) => {
if (!args[0]) return m.reply('[ ! ] Introduzca el nombre de la ciudad')
try {
let dtclim = await fetchJson(`https://latam-api.vercel.app/api/clima?apikey=${MyApiKey}&q=${args[0]}`)
await m.reply(`[ CLIMA ]

📆 Fecha: ${fechaC.fechaCompleta}
🌁 Ciudad: ${dtclim.lugar}
🗺️ Zona horaria: ${dtclim.zonaHoraria}
📄 Descripcion: ${await traducIr(encodeURI(dtclim.clima.descripcion))}
🌡️Temperatura: Minimo ${dtclim.clima.temperatura.minimo}ºC / Maximo ${dtclim.clima.temperatura.maximo}ºC
🎭 Sensacion: ${dtclim.clima.temperatura.sensacion}
🏞️ Presion atmosferica: ${dtclim.clima.temperatura.presion}milibares
💦 Humedad: ${dtclim.clima.temperatura.humedad}%
👁️ Visibilidad: ${dtclim.clima.visibilidad}msnm
🌪️ Viento: Velocidad ${dtclim.clima.viento.velocidad}km/h
☁️ Nubes: ${dtclim.clima.principal}%`)
conn.sendMessage(m.chat, { caption: `🧿`, location: {"degreesLatitude": dtclim.latitud, "degreesLongitude": dtclim.longitud}, mentions: [m.sender] })
} catch (e) {
m.reply(MultiNK.Error0())
}
}

handler.help = ['clima'].map(v => v + ' <lugar>')
handler.tags = ['busqueda']
handler.command = /^(clima|weather)$/i
handler.limit = true

export default handler