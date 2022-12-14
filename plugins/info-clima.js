/**
[ By @NeKosmic || https://github.com/NeKosmic/ ]
**/
import fechaC from '../lib/calendario.js'

let handler = async (m, { conn, args }) => {
if (!args[0]) return m.reply('[ ! ] Introduzca el nombre de la ciudad')
try {
let dtclim = await fetchJson(`https://latam-api.vercel.app/api/clima?apikey=${MyApiKey}&q=${args[0]}`)
await m.reply(`[ CLIMA ]

ð Fecha: ${fechaC.fechaCompleta}
ð Ciudad: ${dtclim.lugar}
ðºï¸ Zona horaria: ${dtclim.zonaHoraria}
ð Descripcion: ${await traducIr(encodeURI(dtclim.clima.descripcion))}
ð¡ï¸Temperatura: Minimo ${dtclim.clima.temperatura.minimo}ÂºC / Maximo ${dtclim.clima.temperatura.maximo}ÂºC
ð­ Sensacion: ${dtclim.clima.temperatura.sensacion}
ðï¸ Presion atmosferica: ${dtclim.clima.temperatura.presion}milibares
ð¦ Humedad: ${dtclim.clima.temperatura.humedad}%
ðï¸ Visibilidad: ${dtclim.clima.visibilidad}msnm
ðªï¸ Viento: Velocidad ${dtclim.clima.viento.velocidad}km/h
âï¸ Nubes: ${dtclim.clima.principal}%`)
conn.sendMessage(m.chat, { caption: `ð§¿`, location: {"degreesLatitude": dtclim.latitud, "degreesLongitude": dtclim.longitud}, mentions: [m.sender] })
} catch (e) {
m.reply(MultiNK.Error0())
}
}

handler.help = ['clima'].map(v => v + ' <lugar>')
handler.tags = ['busqueda']
handler.command = /^(clima|weather)$/i
handler.limit = true

export default handler