import Connection from '../lib/connection.js'
import Store from '../lib/store.js'
import qrcode from 'qrcode'
import ws from 'ws'
import * as fs from 'fs'

const { DisconnectReason, generateWAMessageFromContent } = await import('@adiwajshing/baileys')

let handler = async (m, { conn: _conn, args, usedPrefix, command, isOwner }) => {
	let msg=await generateWAMessageFromContent(m.chat,{locationMessage:{degreesLatitude:0,degreesLongitude:0,name:'[_>] Como instalar el bot...',address:`Este comando aun no funciona en el bot MultiDevice! || Libreria: Baileys-MD`,url:'https://api.whatsapp.com/send?phone=79773452127&text=Wenas%2C%20necesito%20su%20ayuda%20para%20instalar%20el%20bot%20NekosmicBot-MF%20%3A)',isLive:!0,accuracyInMeters:0,speedInMps:0,degreesClockwiseFromMagneticNorth:2,comment:'',jpegThumbnail:fs.readFileSync('./multimedia/imagenes/logo.jpg')}},{quoted:m}) 
	await _conn.relayMessage(m.chat, msg.message, {})
	reacMoji(m.chat, _conn, '❌', m)
    /** @type {import('../lib/connection').Socket} */
    /**let parent = args[0] && args[0] == 'plz' ? _conn : await Connection.conn
    if (!((args[0] && args[0] == 'plz') || (await Connection.conn).user.jid == _conn.user.jid)) {
        throw 'No se puedes ser un bot dentro de otro bot!\n\nhttps://wa.me/' + (await Connection.conn).user.jid.split`@`[0] + '?text='+Prefijo+'serbot'
    }

    const id = Connection.conns.size
    const auth = Store.useMemoryAuthState()
    const store = Store.makeInMemoryStore()
    const conn = await Connection.start(null, {
        isChild: true,
        connectionOptions: { auth: auth.state },
        store
    })
    const logout = async () => {
        await parent.sendMessage(conn.user?.jid || m.chat, { text: 'Conexión perdida...' })
        try { conn.ws.close() } catch { }
        Connection.conns.delete(id)
    }
    let lastQr, shouldSendLogin, errorCount = 0
    conn.ev.on('connection.update', async ({ qr, isNewLogin, lastDisconnect }) => {
        if (shouldSendLogin && conn.user) {
            await parent.sendMessage(conn.user.jid, { text: 'Conectado exitosamente con WhatsApp.\n*NOTA: Esto es solo un paseo*\n' + JSON.stringify(conn.user, null, 2) }, { quoted: m })
        }
        if (qr) {
            if (lastQr) lastQr.delete()
            lastQr = await parent.sendFile(m.chat, await qrcode.toDataURL(qr, { scale: 8 }), 'qrcode.png', `
Escanea este QR para convertirte en un bot temporal
1. Haga clic en los tres puntos en la esquina superior derecha
2. Toque el dispositivo vinculado
3. Escanea este QR 

El código QR caducará!
`.trim(), m)
        }
        if (isNewLogin)
            shouldSendLogin = true

        if (lastDisconnect) {
            const code = lastDisconnect?.error?.output?.statusCode || lastDisconnect?.error?.output?.payload?.statusCode
            if (code && code !== DisconnectReason.loggedOut && conn?.ws.readyState !== ws.CONNECTING) {
                console.log(await Connection.reload(conn, true, { isChild: true }).catch(console.error))
            } else if (code == DisconnectReason.loggedOut)
                logout()
            errorCount++;
        }

        if (errorCount > 5)
            logout()

    })

    Connection.conns.set(id, conn)**/
}

handler.help = ['serbot']
handler.tags = ['esclabot']
handler.command = /^(serbot|rentbot|esclabot|jadibot)$/i

handler.disabled = false //true
handler.limit = 5 //:v

export default handler