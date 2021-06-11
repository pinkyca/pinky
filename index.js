//UPDATE SC BY FXSX
const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal") 
const moment = require("moment-timezone") 
const fs = require("fs") 
const FormData = require('form-data')
const crypto = require('crypto')
const util = require('util')
const imageToBase64 = require('image-to-base64')
const axios = require('axios')
const { color, bgcolor } = require('./lib/color')
const { bahasa } = require('./lib/bahasa')
const { negara } = require('./lib/kodenegara')
const { donasi } = require('./lib/donasi')
const { developer } = require('./lib/developer')
const { randompict } = require('./lib/randompict')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const fontPath = ('./lib/Zahraaa.ttf')
const path = require('path')
const { exec, spawn } = require("child_process")
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, sleep, close } = require('./lib/functions')
const tiktod = require('tiktok-scraper')
const brainly = require('brainly-scraper')
const ffmpeg = require('fluent-ffmpeg')
const cd = 4.32e+7
const lolis = require('lolis.life')
const loli = new lolis()
const { removeBackgroundFromImageFile } = require('remove.bg')
const { ind } = require('./bahasa')
const { uploadimg } = require('./lib/uploadimg')

/********** MENU SETTING **********/
const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN:NuyFaa.\n' //Ini Nama kontak lu
            + 'ORG: Owner Pinky;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=6283815956151:+62 838-1595-6151\n'  //ini kontak/nomor lu
            + 'END:VCARD'
numbernye = '0@s.whatsapp.net'
fake = 'PINKY BOT' //Ini fake reply
prefix = "#" //ini command bot
blocked = []   
limitawal = 99999 //limit
memberlimit = 1 //maksimal member limit
cr = '*PINKY BOT*' //fake reply
LoLKey = "7f5a6556983b0bf183028c20" //SC BY FXSX
TobzKey = "291F6uRDLIhlSpHp1hOy" //SC BY FXSX
XteamKey = "PinkyBotWea" //BELI SENDIRI YA
namo = 'PinkyBot' //Bisa ubah / ga tapi hati hati
fxsx = '❏'
ator = 'NuyFaa' //author
fakereply = "Pinky X Manca" //fake reply
fakereply1 = "NuyFaa" //fakereply

/******** OWNER NUMBER**********/
const ownerNumber = ["6283815956151@s.whatsapp.net"]
/************************************/

       
/*********** LOAD FILE ***********/
const tebakgambar = JSON.parse(fs.readFileSync('./database/tebakgambar.json'))
const _leveling = JSON.parse(fs.readFileSync('./database/kelompok/leveling.json'))
const antilink = JSON.parse(fs.readFileSync('./database/kelompok/antilink.json'))
const _level = JSON.parse(fs.readFileSync('./database/pengguna/level.json'))
const _registered = JSON.parse(fs.readFileSync('./database/bot/pengguna.json'))
const afk = JSON.parse(fs.readFileSync('./database/afk.json'))
const welkom = JSON.parse(fs.readFileSync('./database/bot/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/bot/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./database/bot/simi.json'))
const event = JSON.parse(fs.readFileSync('./database/bot/event.json'))
const _limit = JSON.parse(fs.readFileSync('./database/pengguna/limit.json'))
const uang = JSON.parse(fs.readFileSync('./database/pengguna/uang.json'))
const ban = JSON.parse(fs.readFileSync('./database/pengguna/banned.json'))
const prem = JSON.parse(fs.readFileSync('./database/pengguna/premium.json'))
const adm = JSON.parse(fs.readFileSync('./database/pengguna/admin.json'))
const bad = JSON.parse(fs.readFileSync('./database/kelompok/bad.json'))
const badword = JSON.parse(fs.readFileSync('./database/kelompok/badword.json'))
const setiker = JSON.parse(fs.readFileSync('./storage/stik.json'))
const videonye = JSON.parse(fs.readFileSync('./storage/video.json'))
const audionye = JSON.parse(fs.readFileSync('./storage/audio.json'))
const imagenye = JSON.parse(fs.readFileSync('./storage/image.json'))
/*********** END LOAD ***********/

/********** FUNCTION ***************/
const getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }

        const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/pengguna/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/pengguna/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/pengguna/level.json', JSON.stringify(_level))
        }
             
         const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }

        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/bot/pengguna.json', JSON.stringify(_registered))
        }

        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
        
        const addATM = (sender) => {
        	const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./database/pengguna/uang.json', JSON.stringify(uang))
        }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/pengguna/uang.json', JSON.stringify(uang))
            }
        }
        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
        
        const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/pengguna/limit.json', JSON.stringify(_limit))
            }
        }
        	
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/pengguna/uang.json', JSON.stringify(uang))
            }
        }
        
         const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/pengguna/limit.json', JSON.stringify(_limit))
            }
        }
             
        
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
/********** FUNCTION ***************/
var date = new Date();

var tahun = date.getFullYear();

var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jams = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();


switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
            switch(jams){
                case 0: jams = "Tengah Malam🌃"; break;
                case 1: jams = "Tengah Malam🌃"; break;
                case 2: jams = "Tengah Malam🌃"; break;
                case 3: jams = "Tengah Malam🌃"; break;
                case 4: jams = "Sahur🍙"; break;
                case 5: jams = "Subuh🕌"; break;
                case 6: jams = "Pagi🏙"; break;
                case 7: jams = "Pagi🏙"; break;
                case 8: jams = "Pagi🏙"; break;
                case 9: jams = "Pagi🏙"; break;
                case 10: jams = "Pagi🏙"; break;
                case 11: jams = "Siang🌁"; break;
                case 12: jams = "Dzuhur🕌"; break;
                case 13: jams = "Siang🌁"; break;
                case 14: jams = "Siang🌁"; break;
                case 15: jams = "Ashar🕌"; break;
                case 16: jams = "Sore🌇"; break;
                case 17: jams = "Petang🌆"; break;
                case 18: jams = "Maghrib🕌"; break;
                case 19: jams = "Isya🕌"; break;
                case 20: jams = "Malam🌆"; break;
                case 21: jams = "Malam🌆"; break;
                case 22: jams = "Oyasumi Nassai🌌"; break;
                case 23: jams = "Tengah Malam🌃"; break;
            }
var tampilTanggal = hari + " "+ tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "Jam: " + jams + ":" + menit + ":" + detik;
var tampilHari = "" + jams;

console.log(tampilTanggal);
console.log(tampilWaktu);

const client = new WAConnection()
   client.on('qr', qr => {
   qrcode.generate(qr, { small: true })
   console.log(color('[','white'),color('∆','red'),color(']','white'),color('QR code is ready, Scan now..','white'),color('NuyFaaツ','red'),color('X','lime'),color('FxSx','red'))
})

client.on('credentials-updated', () => {
	const authInfo = client.base64EncodedAuthInfo()
   console.log(`credentials updated!`)
   fs.writeFileSync('./session.json', JSON.stringify(authInfo, null, '\t'))
})
fs.existsSync('./session.json') && client.loadAuthInfo('./session.json')
client.connect();



client.on('group-participants-update', async (anu) => {
	if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await client.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `*Hallo* @${num.split('@')[0]}\nSelamat datang di group *${mdata.subject}*\nJangan rusuh ya\nJangan lupa intro @${num.split('@')[0]} 🗣`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {quoted: {key : {participant : '0@s.whatsapp.net'}, message: {orderMessage: {itemCount : 1, status: 1, surface : 1, message: `Welcome Member\n${pushname}`, orderTitle: `Welcome Member\n${pushname}`, thumbnail: fs.readFileSync('me.jpg'), sellerJid: '0@s.whatsapp.net'} } }, contextInfo: {"mentionedJid": [num]}, caption: teks})
				} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `*Kenapa Keluar Dari Grup* @${num.split('@')[0]}\n*Kyk Nya Sih Habis Di Omelin Sama Mamah Nya:V*`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {quoted: {key : {participant : '0@s.whatsapp.net'}, message: {orderMessage: {itemCount : 1, status: 1, surface : 1, message: `Selamat Jalan:v\n${pushname}`, orderTitle: `Selamat Jalan:v\n${pushname}`, thumbnail: fs.readFileSync('me.jpg'), sellerJid: '0@s.whatsapp.net'} } }, contextInfo: {"mentionedJid": [num]}, caption: teks})
			}
		} catch (e) {
		console.log(e)
	}
	})
	client.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})
	client.on('message-update', async (mek) => {
		try {
	   const from = mek.key.remoteJid
		const messageStubType = WA_MESSAGE_STUB_TYPES[mek.messageStubType] || 'MESSAGE'
		const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
		const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
		const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
		const sender = mek.key.fromMe ? client.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
		const isRevoke = mek.key.remoteJid.endsWith('@s.whatsapp.net') ? true : mek.key.remoteJid.endsWith('@g.us') ? dataRevoke.includes(from) : false
		const isCtRevoke = mek.key.remoteJid.endsWith('@g.us') ? true : dataCtRevoke.data ? true : false
		const isBanCtRevoke = mek.key.remoteJid.endsWith('@g.us') ? true : !dataBanCtRevoke.includes(sender) ? true : false
		if (messageStubType == 'REVOKE') {
			console.log(`Status untuk grup : ${!isRevoke}\nStatus semua kontak : ${!isCtRevoke}\nStatus kontak dikecualikan : ${!isBanCtRevoke}`)
			if (!isRevoke) return
			if (!isCtRevoke) return
			if (!isBanCtRevoke) return
			const from = mek.key.remoteJid
			const isGroup = mek.key.remoteJid.endsWith('@g.us') ? true : false
			let int
			let infoMSG = JSON.parse(fs.readFileSync('./src/.dat/msg.data.json'))
			const id_deleted = mek.key.id
			const conts = mek.key.fromMe ? client.user.jid : client.contacts[sender] || { notify: jid.replace(/@.+/, '') }
			const pushname = mek.key.fromMe ? client.user.name : conts.notify || conts.vname || conts.name || '-'
			const opt4tag = {
				contextInfo: { mentionedJid: [sender] }
			}
			for (let i = 0; i < infoMSG.length; i++) {
				if (infoMSG[i].key.id == id_deleted) {
					const dataInfo = infoMSG[i]
					const type = Object.keys(infoMSG[i].message)[0]
					const timestamp = infoMSG[i].messageTimestamp
					int = {
						no: i,
						type: type,
						timestamp: timestamp,
						data: dataInfo
					}
				}
			}
			const index = Number(int.no)
			const body = int.type == 'conversation' ? infoMSG[index].message.conversation : int.type == 'extendedTextMessage' ? infoMSG[index].message.extendedTextMessage.text : int.type == 'imageMessage' ? infoMSG[index].message.imageMessage.caption : int.type == 'stickerMessage' ? 'Sticker' : int.type == 'audioMessage' ? 'Audio' : int.type == 'videoMessage' ? infoMSG[index].videoMessage.caption : infoMSG[index]
			const mediaData = int.type === 'extendedTextMessage' ? JSON.parse(JSON.stringify(int.data).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : int.data
			var itsme = `${numbernye}`
				var split = `${fake}`
				// var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
				var selepbot72 = {
					contextInfo: {
						participant: itsme,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}
			if (int.type == 'conversation' || int.type == 'extendedTextMessage') {
				const strConversation = `╭─「 *ANTIDELETE* 」
${fxsx} Nama : *${pushname}*
${fxsx} Nomer : ${sender.replace('@s.whatsapp.net', '')}
${fxsx} Tipe : Text
${fxsx} Waktu : *${moment.unix(int.timestamp).format('HH:mm:ss')}*
${fxsx} Tanggal : *${moment.unix(int.timestamp).format('DD/MM/YYYY')}*
${fxsx} Pesan : *${body ? body : '-'}*
╰──────────`
				client.sendMessage(from, strConversation, MessageType.text, { quoted: { key : {participant : '0@s.whatsapp.net'}, message: {orderMessage: {itemCount : 1, status: 1, surface : 1, message: fakereply, orderTitle: fakereply1, thumbnail: fs.readFileSync('me.jpg'), sellerJid: '0@s.whatsapp.net'} } }, contextInfo: { forwardingScore: 508, isForwarded: true}})
			} else if (int.type == 'stickerMessage') {
				var itsme = `${numbernye}`
					var split = `${fake}`
					const pingbro23 = {
						contextInfo: {
							participant: itsme,
							quotedMessage: {
								extendedTextMessage: {
									text: split,
								}
							}
						}
					}
				const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
				const savedFilename = await client.downloadAndSaveMediaMessage(int.data, `./media/sticker/${filename}`);
				const strConversation = `╭─「 *ANTIDELETE* 」
${fxsx} Nama : *${pushname}*
${fxsx} Nomer : ${sender.replace('@s.whatsapp.net', '')}
${fxsx} Tipe : Text
${fxsx} Waktu : *${moment.unix(int.timestamp).format('HH:mm:ss')}*
${fxsx} Tanggal : *${moment.unix(int.timestamp).format('DD/MM/YYYY')}*
╰──────────`

				const buff = fs.readFileSync(savedFilename)
				client.sendMessage(from, strConversation, MessageType.text, { quoted: {key : {participant : '0@s.whatsapp.net'}, message: {orderMessage: {itemCount : 1, status: 1, surface : 1, message: fakereply, orderTitle: fakereply1, thumbnail: fs.readFileSync('me.jpg'), sellerJid: '0@s.whatsapp.net'} } }, contextInfo: { forwardingScore: 508, isForwarded: true}})
				client.sendMessage(from, buff, MessageType.sticker, { quoted: {key : {participant : '0@s.whatsapp.net'}, message: {orderMessage: {itemCount : 1, status: 1, surface : 1, message: fakereply, orderTitle: fakereply1, thumbnail: fs.readFileSync('me.jpg'), sellerJid: '0@s.whatsapp.net'} } }, contextInfo: { forwardingScore: 508, isForwarded: true}})
				// console.log(stdout)
				fs.unlinkSync(savedFilename)

			} else if (int.type == 'imageMessage') {
				var itsme = `${numbernye}`
					var split = `${fake}`
					const pingbro22 = {
						contextInfo: {
							participant: itsme,
							quotedMessage: {
								extendedTextMessage: {
									text: split,
								}
							}
						}
					}
				const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
				const savedFilename = await client.downloadAndSaveMediaMessage(int.data, `./media/revoke/${filename}`);
				const buff = fs.readFileSync(savedFilename)
				const strConversation = `╭─「 *ANTIDELETE* 」
${fxsx} Nama : *${pushname}*
${fxsx} Nomer : ${sender.replace('@s.whatsapp.net', '')}
${fxsx} Tipe : Text
${fxsx} Waktu : *${moment.unix(int.timestamp).format('HH:mm:ss')}*
${fxsx} Tanggal : *${moment.unix(int.timestamp).format('DD/MM/YYYY')}*
${fxsx} Pesan : ${body ? body : '-'}\`\`\`
╰──────────`
				client.sendMessage(from, buff, MessageType.image, { quoted: {key : {participant : '0@s.whatsapp.net'}, message: {orderMessage: {itemCount : 1, status: 1, surface : 1, message: fakereply, orderTitle: fakereply1, thumbnail: fs.readFileSync('me.jpg'), sellerJid: '0@s.whatsapp.net'} } }, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [sender] }, caption: strConversation })
				fs.unlinkSync(savedFilename)
			}
		}
	} catch (e) {
		console.log('Message : %s', color(e, 'green'))
		// console.log(e)
	}
})
	fakeimagecuy = fs.readFileSync(`./me.jpg`)
   	const mek2 =  {key: { fromMe: false,remoteJid: "0@s.whatsapp.net", participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: 99, status: 180, thumbnail: fakeimagecuy, surface: 180, message: fakereply, orderTitle: fakereply1, sellerJid: '0@s.whatsapp.net'} } }              	 	         
	client.on('message-new', async (mek) => {
		try {
			if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		let infoMSG = JSON.parse(fs.readFileSync('./src/.dat/msg.data.json'))
		infoMSG.push(JSON.parse(JSON.stringify(mek)))
		fs.writeFileSync('./src/.dat/msg.data.json', JSON.stringify(infoMSG, null, 2))
		const urutan_pesan = infoMSG.length
		if (urutan_pesan === 5000) {
			infoMSG.splice(0, 4300)
			fs.writeFileSync('./src/.dat/msg.data.json', JSON.stringify(infoMSG, null, 2))
		}
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
			const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
			const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
			const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			var Link = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			const tescuk = ["0@s.whatsapp.net"]
			const isGroup = from.endsWith('@g.us')
			const q = args.join(' ')
			const botNumber = client.user.jid
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			pushname = client.contacts[sender] != undefined ? client.contacts[sender].vname || client.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
			const mentionByReply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
			const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
			mention != undefined ? mention.push(mentionByReply) : []
			const mentionUser = mention != undefined ? mention.filter(n => n) : []
            
            /************** SCURITY FEATURE ************/
            const isEventon = isGroup ? event.includes(from) : false
            const isBadWord = isGroup ? badword.includes(from) : false
            const isRegistered = checkRegisteredUser(sender)
            const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
            const isLevelingOn = isGroup ? _leveling.includes(from) : false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isAntilink = isGroup ? antilink.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isBanned = ban.includes(sender)
			const isPremium= prem.includes(sender)
			const isAdmin = adm.includes(sender)
			const isImage = type === 'imageMessage'
			const fgclink = {key: { fromMe: false,remoteJid: "0@s.whatsapp.net", participant: '0@s.whatsapp.net'}, message: {groupInviteMessage: {groupJid: "6283815956151-1616169743@g.us", inviteCode: "mancanihbos", groupName: fakereply, caption: fakereply1, jpegThumbnail: fs.readFileSync('me.jpg') } } }
			const fdocs = {key : {participant : '0@s.whatsapp.net'}, message: {documentMessage: {title: fakereply, jpegThumbnail: fs.readFileSync('me.jpg') } } }
			const flokasi = {key : {participant : '0@s.whatsapp.net'}, message: {locationMessage: { name: fakereply, jpegThumbnail: fs.readFileSync('me.jpg') } } }
			const fvideo = {key: { fromMe: false, participant: '0@s.whatsapp.net', ...(from ? { remoteJid: "6283815956151-1613049930@g.us" } : {}) }, message: { videoMessage: { title: fakereply, seconds: 999, caption: fakereply1, jpegThumbnail: fs.readFileSync('me.jpg') } } }
			const fgif = {key: { fromMe: false, participant: '0@s.whatsapp.net', ...(from ? { remoteJid: "6283815956151-1613049930@g.us" } : {}) }, message: { videoMessage: { title: fakereply, seconds: 999, gifPlayback: true, caption: fakereply1, jpegThumbnail: fs.readFileSync('me.jpg')} } }
			const ftroli = {key : {participant : '0@s.whatsapp.net'}, message: {orderMessage: {itemCount : 1, status: 1, surface : 1, message: fakereply, orderTitle: fakereply1, thumbnail: fs.readFileSync('me.jpg'), sellerJid: '0@s.whatsapp.net'} } }
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			const sendImage = (teks) => {
		    client.sendMessage(from, teks, image, {quoted:mek})
		    }
		    const costum = (pesan, tipe, target, target2) => {
			client.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
		    const sendPtt = (teks) => {
		    client.sendMessage(from, audio, mp3, {quoted:mek})
		    }
		    // Anti Call Encpryt
"AcJ8omdjg+kR442EUUZrymY8q+uVvecDjZp93Y8FYr2wG1TwzWVZMLmwrcsmVoiQKrqRFR5vd69Byn4FQHu9b9tZMWH91HFg0dpIwInRgEO2uDtJKeQuSxvNb475Zjn8ph5xyFHA2g7ar5TRvrlMQcFZwGTd1mDuREktIH5QL097cDGSnO4TJv/FZHmqvy8OXlRgo7oZV0/AxPwQrGdMR3WXBplRpPBGuByrvSIs4cbXeEojDnP59M+2lBRww4yLmdyyjAxyztWVIbj92EWhXwwTMUXbT7/uSLUl5HWSiFV/DOmJ3wF1VRLyXwBJfSj6lov8Zg+GLU+85LnXA3LcF4oTpMRMGkADCIKJrFrWMPKMO/wvJrseIyRthUtrc51Q/Ae6sqZNtguW7WqXJvcEQRPnzP1Cj8KUpxklVWsGh9s2Y2++TVqrkfRdPqAp1O6qFhCsUtnKTsCGywhBATGsDPYMQimdohccGotVtPD/b09l3SQacUHm8PGaCusrR9cdwxH5KNZI7pE"
	        /*****************END SCURITY FEATURE ********/
			
function addMetadata(packname, author) {	
	if (!packname) packname = 'PinkyBot'; if (!author) author = 'NuyFaa';	
	author = author.replace(/[^a-zA-Z0-9]/g, '');	
	let name = `${author}_${packname}`
	if (fs.existsSync(`./${name}.exif`)) return `./${name}.exif`
	const json = {	
		"sticker-pack-name": packname,
		"sticker-pack-publisher": author,
	}
	const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
	const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

	let len = JSON.stringify(json).length	
	let last	

	if (len > 256) {	
		len = len - 256	
		bytes.unshift(0x01)	
	} else {	
		bytes.unshift(0x00)	
	}	

	if (len < 16) {	
		last = len.toString(16)	
		last = "0" + len	
	} else {	
		last = len.toString(16)	
	}	

	const buf2 = Buffer.from(last, "hex")	
	const buf3 = Buffer.from(bytes)	
	const buf4 = Buffer.from(JSON.stringify(json))	

	const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

	fs.writeFile(`./${name}.exif`, buffer, (err) => {	
		return `./${name}.exif`	
	})	

}

		//role level
        const levelRole = getLevelingLevel(sender)
        var role = 'Newbie ㋡'
        if (levelRole <= 2) {
            role = 'Newbie ㋡'
        } else if (levelRole <= 4) {
            role = 'Beginner Grade 1 ⚊¹'
        } else if (levelRole <= 6) {
            role = 'Beginner Grade 2 ⚊²'
        } else if (levelRole <= 8) {
            role = 'Beginner Grade 3 ⚊³'
        } else if (levelRole <= 10) {
            role = 'Beginner Grade 4 ⚊⁴'
        } else if (levelRole <= 12) {
            role = 'Private Grade 1 ⚌¹'
        } else if (levelRole <= 14) {
            role = 'Private Grade 2 ⚌²'
        } else if (levelRole <= 16) {
            role = 'Private Grade 3 ⚌³'
        } else if (levelRole <= 18) {
            role = 'Private Grade 4 ⚌⁴'
        } else if (levelRole <= 20) {
            role = 'Private Grade 5 ⚌⁵'
        } else if (levelRole <= 22) {
            role = 'Corporal Grade 1 ☰¹'
        } else if (levelRole <= 24) {
            role = 'Corporal Grade 2 ☰²'
        } else if (levelRole <= 26) {
            role = 'Corporal Grade 3 ☰³'
        } else if (levelRole <= 28) {
            role = 'Corporal Grade 4 ☰⁴'
        } else if (levelRole <= 30) {
            role = 'Corporal Grade 5 ☰⁵'
        } else if (levelRole <= 32) {
            role = 'Sergeant Grade 1 ≣¹'
        } else if (levelRole <= 34) {
            role = 'Sergeant Grade 2 ≣²'
        } else if (levelRole <= 36) {
            role = 'Sergeant Grade 3 ≣³'
        } else if (levelRole <= 38) {
            role = 'Sergeant Grade 4 ≣⁴'
        } else if (levelRole <= 40) {
            role = 'Sergeant Grade 5 ≣⁵'
        } else if (levelRole <= 42) {
            role = 'Staff Grade 1 ﹀¹'
        } else if (levelRole <= 44) {
            role = 'Staff Grade 2 ﹀²'
        } else if (levelRole <= 46) {
            role = 'Staff Grade 3 ﹀³'
        } else if (levelRole <= 48) {
            role = 'Staff Grade 4 ﹀⁴'
        } else if (levelRole <= 50) {
            role = 'Staff Grade 5 ﹀⁵'
        } else if (levelRole <= 52) {
            role = 'Sergeant Grade 1 ︾¹'
        } else if (levelRole <= 54) {
            role = 'Sergeant Grade 2 ︾²'
        } else if (levelRole <= 56) {
            role = 'Sergeant Grade 3 ︾³'
        } else if (levelRole <= 58) {
            role = 'Sergeant Grade 4 ︾⁴'
        } else if (levelRole <= 60) {
            role = 'Sergeant Grade 5 ︾⁵'
        } else if (levelRole <= 62) {
            role = '2nd Lt. Grade 1 ♢¹ '
        } else if (levelRole <= 64) {
            role = '2nd Lt. Grade 2 ♢²'
        } else if (levelRole <= 66) {
            role = '2nd Lt. Grade 3 ♢³'
        } else if (levelRole <= 68) {
            role = '2nd Lt. Grade 4 ♢⁴'
        } else if (levelRole <= 70) {
            role = '2nd Lt. Grade 5 ♢⁵'
        } else if (levelRole <= 72) {
            role = '1st Lt. Grade 1 ♢♢¹'
        } else if (levelRole <= 74) {
            role = '1st Lt. Grade 2 ♢♢²'
        } else if (levelRole <= 76) {
            role = '1st Lt. Grade 3 ♢♢³'
        } else if (levelRole <= 78) {
            role = '1st Lt. Grade 4 ♢♢⁴'
        } else if (levelRole <= 80) {
            role = '1st Lt. Grade 5 ♢♢⁵'
        } else if (levelRole <= 82) {
            role = 'Major Grade 1 ✷¹'
        } else if (levelRole <= 84) {
            role = 'Major Grade 2 ✷²'
        } else if (levelRole <= 86) {
            role = 'Major Grade 3 ✷³'
        } else if (levelRole <= 88) {
            role = 'Major Grade 4 ✷⁴'
        } else if (levelRole <= 90) {
            role = 'Major Grade 5 ✷⁵'
        } else if (levelRole <= 92) {
            role = 'Colonel Grade 1 ✷✷¹'
        } else if (levelRole <= 94) {
            role = 'Colonel Grade 2 ✷✷²'
        } else if (levelRole <= 96) {
            role = 'Colonel Grade 3 ✷✷³'
        } else if (levelRole <= 98) {
            role = 'Colonel Grade 4 ✷✷⁴'
        } else if (levelRole <= 100) {
            role = 'Colonel Grade 5 ✷✷⁵'
        } else if (levelRole <= 102) {
            role = 'Brigadier Early ✰'
        } else if (levelRole <= 104) {
            role = 'Brigadier Silver ✩'
        } else if (levelRole <= 106) {
            role = 'Brigadier gold ✯'
        } else if (levelRole <= 108) {
            role = 'Brigadier Platinum ✬'
        } else if (levelRole <= 110) {
            role = 'Brigadier Diamond ✪'
        } else if (levelRole <= 112) {
            role = 'Major General Early ✰'
        } else if (levelRole <= 114) {
            role = 'Major General Silver ✩'
        } else if (levelRole <= 116) {
            role = 'Major General gold ✯'
        } else if (levelRole <= 118) {
            role = 'Major General Platinum ✬'
        } else if (levelRole <= 120) {
            role = 'Major General Diamond ✪'
        } else if (levelRole <= 122) {
            role = 'Lt. General Early ✰'
        } else if (levelRole <= 124) {
            role = 'Lt. General Silver ✩'
        } else if (levelRole <= 126) {
            role = 'Lt. General gold ✯'
        } else if (levelRole <= 128) {
            role = 'Lt. General Platinum ✬'
        } else if (levelRole <= 130) {
            role = 'Lt. General Diamond ✪'
        } else if (levelRole <= 132) {
            role = 'General Early ✰'
        } else if (levelRole <= 134) {
            role = 'General Silver ✩'
        } else if (levelRole <= 136) {
            role = 'General gold ✯'
        } else if (levelRole <= 138) {
            role = 'General Platinum ✬'
        } else if (levelRole <= 140) {
            role = 'General Diamond ✪'
        } else if (levelRole <= 142) {
            role = 'Commander Early ★'
        } else if (levelRole <= 144) {
            role = 'Commander Intermediate ⍣'
        } else if (levelRole <= 146) {
            role = 'Commander Elite ≛'
        } else if (levelRole <= 148) {
            role = 'The Commander Hero ⍟'
        } else if (levelRole <= 152) {
            role = 'Legends 忍'
        } else if (levelRole <= 154) {
            role = 'Legends 忍'
        } else if (levelRole <= 156) {
            role = 'Legends 忍'
        } else if (levelRole <= 158) {
            role = 'Legends 忍'
        } else if (levelRole <= 160) {
            role = 'Legends 忍'
        } else if (levelRole <= 162) {
            role = 'Legends 忍'
        } else if (levelRole <= 164) {
            role = 'Legends 忍'
        } else if (levelRole <= 166) {
            role = 'Legends 忍'
        } else if (levelRole <= 168) {
            role = 'Legends 忍'
        } else if (levelRole <= 170) {
            role = 'Legends 忍'
        } else if (levelRole <= 172) {
            role = 'Legends 忍'
        } else if (levelRole <= 174) {
            role = 'Legends 忍'
        } else if (levelRole <= 176) {
            role = 'Legends 忍'
        } else if (levelRole <= 178) {
            role = 'Legends 忍'
        } else if (levelRole <= 180) {
            role = 'Legends 忍'
        } else if (levelRole <= 182) {
            role = 'Legends 忍'
        } else if (levelRole <= 184) {
            role = 'Legends 忍'
        } else if (levelRole <= 186) {
            role = 'Legends 忍'
        } else if (levelRole <= 188) {
            role = 'Legends 忍'
        } else if (levelRole <= 190) {
            role = 'Legends 忍'
        } else if (levelRole <= 192) {
            role = 'Legends 忍'
        } else if (levelRole <= 194) {
            role = 'Legends 忍'
        } else if (levelRole <= 196) {
            role = 'Legends 忍'
        } else if (levelRole <= 198) {
            role = 'Legends 忍'
        } else if (levelRole <= 200) {
            role = 'Legends 忍'
        } else if (levelRole <= 210) {
            role = 'Legends 忍'
        } else if (levelRole <= 220) {
            role = 'Legends 忍'
        } else if (levelRole <= 230) {
            role = 'Legends 忍'
        } else if (levelRole <= 240) {
            role = 'Legends 忍'
        } else if (levelRole <= 250) {
            role = 'Legends 忍'
        } else if (levelRole <= 260) {
            role = 'Legends 忍'
        } else if (levelRole <= 270) {
            role = 'Legends 忍'
        } else if (levelRole <= 280) {
            role = 'Legends 忍'
        } else if (levelRole <= 290) {
            role = 'Legends 忍'
        } else if (levelRole <= 300) {
            role = 'Legends 忍'
        } else if (levelRole <= 310) {
            role = 'Legends 忍'
        } else if (levelRole <= 320) {
            role = 'Legends 忍'
        } else if (levelRole <= 330) {
            role = 'Legends 忍'
        } else if (levelRole <= 340) {
            role = 'Legends 忍'
        } else if (levelRole <= 350) {
            role = 'Legends 忍'
        } else if (levelRole <= 360) {
            role = 'Legends 忍'
        } else if (levelRole <= 370) {
            role = 'Legends 忍'
        } else if (levelRole <= 380) {
            role = 'Legends 忍'
        } else if (levelRole <= 390) {
            role = 'Legends 忍'
        } else if (levelRole <= 400) {
            role = 'Legends 忍'
        } else if (levelRole <= 410) {
            role = 'Legends 忍'
        } else if (levelRole <= 420) {
            role = 'Legends 忍'
        } else if (levelRole <= 430) {
            role = 'Legends 忍'
        } else if (levelRole <= 440) {
            role = 'Legends 忍'
        } else if (levelRole <= 450) {
            role = 'Legends 忍'
        } else if (levelRole <= 460) {
            role = 'Legends 忍'
        } else if (levelRole <= 470) {
            role = 'Legends 忍'
        } else if (levelRole <= 480) {
            role = 'Legends 忍'
        } else if (levelRole <= 490) {
            role = 'Legends 忍'
        } else if (levelRole <= 500) {
            role = 'Legends 忍'
        } else if (levelRole <= 600) {
            role = 'Legends 忍'
        } else if (levelRole <= 700) {
            role = 'Legends 忍'
        } else if (levelRole <= 800) {
            role = 'Legends 忍'
        } else if (levelRole <= 900) {
            role = 'Legends 忍'
        } else if (levelRole <= 1000) {
            role = 'Legends 忍'
        } else if (levelRole <= 2000) {
            role = 'Legends 忍'
        } else if (levelRole <= 3000) {
            role = 'Legends 忍'
        } else if (levelRole <= 4000) {
            role = 'Legends 忍'
        } else if (levelRole <= 5000) {
            role = 'Legends 忍'
        } else if (levelRole <= 6000) {
            role = 'Legends 忍'
        } else if (levelRole <= 7000) {
            role = 'Legends 忍'
        } else if (levelRole <= 8000) {
            role = 'Legends 忍'
        } else if (levelRole <= 9000) {
            role = 'Legends 忍'
        } else if (levelRole <= 10000) {
            role = 'Legends 忍'

           var prema = 'Free'
			if (!isAdmin) {
				prema = 'Adminban'
			}
			if (!isPremium) {
				prema = 'Premium'
			} 
			if (!isOwner) {
				prema = 'Owner'
			}
	     }
	        //function leveling
            if (isGroup && isRegistered && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 100
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    bayarLimit(sender, 3)
                    await reply(ind.levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role))
                }
            } catch (err) {
                console.error(err)
            }
        }
          //function check limit
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return client.sendMessage(from,`Limit request anda sudah habis\n\n_Note : limit bisa di dapatkan dengan cara ${prefix}buylimit dan dengan naik level_`, text,{ quoted: mek})
                            client.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 0 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/pengguna/limit.json', JSON.stringify(_limit))
                        client.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                    }
				}
			
		for (let x of mentionUser) {
                if (afk.hasOwnProperty(x.split('@')[0])) {
                    ini_txt = "Maaf user yang anda reply atau tag sedang afk. "
                    if (afk[x.split('@')[0]] != "") {
                        ini_txt += "Dengan alasan " + afk[x.split('@')[0]]
                    }
                    reply(ini_txt)
                }
            }
            if (afk.hasOwnProperty(sender.split('@')[0])) {
                client.sendMessage(from, `${pushname} Anda telah keluar dari mode afk`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
                delete afk[sender.split('@')[0]]
                fs.writeFileSync("./database/afk.json", JSON.stringify(afk))
            }
			
			//funtion limited
           const isLimit = (sender) =>{ 
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    client.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./database/pengguna/limit.json',JSON.stringify(_limit))
           return false
       }
     }

        
            if (isGroup) {
				try {
					const getmemex = groupMembers.length
					    if (getmemex <= memberlimit) {
					    }
		       } catch (err) { console.error(err)  }
        }
      
      // Tebak Gambar
            if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakgambar[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    client.sendMessage(from, 'Jawaban Anda Benar!',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    delete tebakgambar[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                } else {
                    client.sendMessage(from, 'Jawaban Anda Salah!',MessageType.text, { quoted: fgclink, contextInfo: { forwardingScore: 508, isForwarded: true}})
                }
            }
    
        //function balance
            if (isRegistered ) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 10) + 90
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        }
        if (messagesC.includes("://chat.whatsapp.com/")){
		if (!isGroup) return
		if (!isAntilink) return
		if (isGroupAdmins) return client.sendMessage(from, 'Admin Grup Mah Bebas:v',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return client.sendMessage(from, '#izinadmin diterima',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		client.sendMessage(from, `*_「 Link Terdeteksi 」_*\nHei *${pushname}*  *「 LINK TERDETEKSI ⌋ MAFF SEKARANG KAMU SAYA KICK DARI GRUP INI*`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 3000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			client.sendMessage(from, 'SEEE YUO KACK;)',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
		}, 0)
	  }
	  if (bad.includes(messagesC)){
		if (!isGroup) return
		if (!isBadWord) return
		if (isGroupAdmins) return client.sendMessage(from, 'Admin Grup Mah Bebas:v',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return client.sendMessage(from, '#izinadmin diterima',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		client.sendMessage(from, `*_「 BADWORD TERDETEKSI 」_*\nHei *${pushname}*\nMAFF SEKARANG KAMU SAYA KICK DARI GRUP INI*`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 3000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			client.sendMessage(from, 'SEEE YUO KACK;)',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
		}, 0)
	  }
	  if (messagesC.includes('assalamualaikum')){
	  client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/waalaikumsalam.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Waalaikumsalam","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      }
      if (messagesC.includes('pinky')){
	  client.updatePresence(from, Presence.composing)
	  client.sendMessage(from, `Oke Online...\nSpeed : ${process.uptime()}`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
	  }
	  if (messagesC.includes('@6283815956151')){
	  client.updatePresence(from, Presence.composing)
	  client.sendMessage(from, 'Ada Apa Tag Owner Pinky...?',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
	  }
	  if (messagesC.includes('@994408781140')){
	  client.updatePresence(from, Presence.composing)
	  client.sendMessage(from, 'Ada Apa Tag Pinky...?',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
	  }
      if (messagesC.includes('sholawat1')){
	  client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/maulaya.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: fgclink, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      }
      if (messagesC.includes('#nsfw')){
	  client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/insaf.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Astaghfirullah","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      }
      if (messagesC.includes('pinky')){
      client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/manca.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: fdocs, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      }
	  if (messagesC.includes('gatelsa')){
      client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/gatelsa.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Sound Gabut","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      const d = fs.readFileSync('./sticker/joget.webp')
      client.sendMessage(from, d, sticker, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Goyang Azek","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}})
      }
      if (messagesC.includes('magic')){
      client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/magic.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Sound Gabut","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      const d = fs.readFileSync('./sticker/joget.webp')
      client.sendMessage(from, d, sticker, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Goyang Azek","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}})
      }
      if (messagesC.includes('jamet')){
      client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/jamet.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Sound Gabut","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      const d = fs.readFileSync('./sticker/jget.webp')
      client.sendMessage(from, d, sticker, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Goyang Azek","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}})
      }
      if (messagesC.includes('#menu')){
      client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/menu.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: fgclink, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      }
      if (messagesC.includes('#help')){
      client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/menu.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: fvideo, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      }
      if (messagesC.includes('nana')){
      client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/nana.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Sound Gabut","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      const d = fs.readFileSync('./sticker/joget.webp')
      client.sendMessage(from, d, sticker, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Goyang Azek","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}})
      }
      if (messagesC.includes('bam')){
      client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/bam.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Sound Gabut","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      const d = fs.readFileSync('./sticker/jget.webp')
      client.sendMessage(from, d, sticker, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Goyang Azek","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}})
      }
      if (messagesC.includes('malam')){
      client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/malam.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Selamat Malam","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      }
      if (messagesC.includes('pagi')){
      client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/pagi.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Selamat Pagi","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      }
      if (messagesC.includes('bangkit')){
      client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/bangkit.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Selamat Pagi","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      }
      if (messagesC.includes('makasih')){
      client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/mksh.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Iyah Sama Dua:v","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      }
      if (messagesC.includes('tqs')){
      client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/mksh.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Iyah Sama Dua:v","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      }
      if (messagesC.includes('sayang')){
      client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/katanyatemen.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Sound Gabut","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      const d = fs.readFileSync('./sticker/jget.webp')
      client.sendMessage(from, d, sticker, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Goyang Azek","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}})
      }
      if (messagesC.includes('beb')){
      client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/katanyatemen.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Sound Gabut","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      const d = fs.readFileSync('./sticker/joget.webp')
      client.sendMessage(from, d, sticker, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Goyang Azek","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}})
      }
      if (messagesC.includes('cayang')){
      client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/katanyatemen.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: flokasi, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      const d = fs.readFileSync('./sticker/jget.webp')
      client.sendMessage(from, d, sticker, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Goyang Azek","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}})
      }
      if (messagesC.includes('pam')){
      client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/pam.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: flokasi, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      const d = fs.readFileSync('./sticker/jget.webp')
      client.sendMessage(from, d, sticker, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Goyang Azek","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}})
      }
      if (messagesC.includes('pale')){
      client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/pale.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: flokasi, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      const d = fs.readFileSync('./sticker/joget.webp')
      client.sendMessage(from, d, sticker, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Goyang Azek","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}})
      }
      if (messagesC.includes('pala')){
      client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/pala.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Sound Gabut","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      const d = fs.readFileSync('./sticker/joget.webp')
      client.sendMessage(from, d, sticker, {quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Goyang Azek","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}})
      }
      if (messagesC.includes('sensei')){
	  client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/sensei.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: fvideo, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      }
      if (messagesC.includes('roti')){
	  client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/sariroti.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: flokasi, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      }
      if (messagesC.includes('tante')){
	  client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/tante.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: flokasi, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      }
      if (messagesC.includes('kuntul')){
	  client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/kuntul.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: fdocs, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      }
      if (messagesC.includes('why')){
      client.updatePresence(from, Presence.composing)
      const loli = fs.readFileSync('./mp3/why.mp3')
      client.sendMessage(from, loli, MessageType.audio, {quoted: fvideo, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
      const d = fs.readFileSync('./sticker/endak.webp')
      client.sendMessage(from, d, sticker, {quoted: flokasi})
      }

             //kolor
			colors = ['red','white','black','blue','yellow','green']
			
			//detector media
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			
			//private chat message
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			
			//group message
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			
			switch(command) {
				case 'antibadword': 
                    if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (args.length < 1) return client.sendMessage(from, '1 untuk menyalakan, 0 untuk mematikan',MessageType.text, { quoted: fvideo, contextInfo: { forwardingScore: 508, isForwarded: true}})
                if (args[0] === '1') {
                if (isBadWord) return client.sendMessage(from, '*Fitur BadWord sudah aktif sebelum nya*',MessageType.text, { quoted: flokasi, contextInfo: { forwardingScore: 508, isForwarded: true}})
                 	   badword.push(from)
                 	   fs.writeFileSync('./database/kelompok/badword.json', JSON.stringify(badword))
                  	   client.sendMessage(from, 'Sukses aktifkan Antibadword',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
              	  } else if (args[0] === '0') {
                  	  badword.splice(from, 1)
                 	   fs.writeFileSync('./database/kelompok/badword.json', JSON.stringify(badword))
                 	    client.sendMessage(from, 'Sukses matikan Antibadword',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
             	   } else {
                 	   reply(ind.satukos())
                	}
                    break
		case 'buggc':
await client.toggleDisappearingMessages(from)
reply("yahaha")
break
		case 'sewabot1':
				if (isBanned) return reply(ind.baned())
                if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                      nomorsewa = `${sender.split("@")[0]}@s.whatsapp.net`
                       const teksnya = `*[ BELI ]*\nNomor : @${nomorsewa.split('@')[0]}\nPesan : Bang Saya Mau Beli Scnya`
                      var options = {
                         text: teksnya,
                         contextInfo: {mentionedJid: [nomorsewa]},
                     }
                    client.sendMessage('6283815956151@s.whatsapp.net', options, text, {quoted: mek})
                    client.sendMessage(from, 'Anda Telah Membeli Script!, tunggu owner script menchat anda!.\nUntuk Membatalkan Pesanan Ketik #batal1',MessageType.text, { quoted: fgclink, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    break
		case 'batal1':
				if (isBanned) return reply(ind.baned())
                if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                      nomorsewa = `${sender.split("@")[0]}@s.whatsapp.net`
                       const batal1 = `*[ BATAL ]*\nNomor : @${nomorsewa.split('@')[0]}\nPesan : Saya Tidak Menjadi Beli Scriptnya`
                      var options = {
                         text: batal1,
                         contextInfo: {mentionedJid: [nomorsewa]},
                     }
                    client.sendMessage('6283815956151@s.whatsapp.net', options, text, {quoted: mek})
                    client.sendMessage(from, 'Anda Telah Membatalkan Pesanan!.',MessageType.text, { quoted: fdocs, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    break
                    case 'batal2':
				if (isBanned) return reply(ind.baned())
                if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                      nomorsewa = `${sender.split("@")[0]}@s.whatsapp.net`
                       const batal2 = `*[ BATAL ]*\nNomor : @${nomorsewa.split('@')[0]}\nPesan : Saya Tidak Menjadi Beli Scriptnya`
                      var options = {
                         text: batal2,
                         contextInfo: {mentionedJid: [nomorsewa]},
                     }
                    client.sendMessage('6283815956151@s.whatsapp.net', options, text, {quoted: mek})
                    reply('Anda Telah Membatalkan Pesanan!.')
                    break
                    case 'batal3':
				if (isBanned) return reply(ind.baned())
                if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                      nomorsewa = `${sender.split("@")[0]}@s.whatsapp.net`
                       const batal3 = `*[ BATAL ]*\nNomor : @${nomorsewa.split('@')[0]}\nPesan : Saya Tidak Menjadi Beli Scriptnya`
                      var options = {
                         text: batal3,
                         contextInfo: {mentionedJid: [nomorsewa]},
                     }
                    client.sendMessage('6283815956151@s.whatsapp.net', options, text, {quoted: mek})
                    reply('Anda Telah Membatalkan Pesanan!.')
                    break
                    case 'batal4':
				if (isBanned) return reply(ind.baned())
                if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                      nomorsewa = `${sender.split("@")[0]}@s.whatsapp.net`
                       const batal4 = `*[ BATAL ]*\nNomor : @${nomorsewa.split('@')[0]}\nPesan : Saya Tidak Menjadi Beli Scriptnya`
                      var options = {
                         text: batal4,
                         contextInfo: {mentionedJid: [nomorsewa]},
                     }
                    client.sendMessage('6283815956151@s.whatsapp.net', options, text, {quoted: mek})
                    reply('Anda Telah Membatalkan Pesanan!.')
                    break
		case 'sewabot2':
				if (isBanned) return reply(ind.baned())
                if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                      nomorsewa = `${sender.split("@")[0]}@s.whatsapp.net`
                       const teksnya2 = `*[ BELI ]*\nNomor : @${nomorsewa.split('@')[0]}\nPesan : Bang Saya Mau Beli Scnya`
                      var options = {
                         text: teksnya2,
                         contextInfo: {mentionedJid: [nomorsewa]},
                     }
                    client.sendMessage('6283815956151@s.whatsapp.net', options, text, {quoted: mek})
                    reply('Anda Telah Membeli Script!, tunggu owner script menchat anda!.\n Untuk Membatalkan Pesanan Ketik #batal2')
                    break
                    case 'sewabot3':
				if (isBanned) return reply(ind.baned())
                if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                      nomorsewa = `${sender.split("@")[0]}@s.whatsapp.net`
                       const teksnya4 = `*[ BELI ]*\nNomor : @${nomorsewa.split('@')[0]}\nPesan : Bang Saya Mau Beli Scnya`
                      var options = {
                         text: teksnya4,
                         contextInfo: {mentionedJid: [nomorsewa]},
                     }
                    client.sendMessage('6283815956151@s.whatsapp.net', options, text, {quoted: mek})
                    reply('Anda Telah Membeli Script!, tunggu owner script menchat anda!.\nUntuk Membatalkan Pesanan Ketik #batal3')
                    break
                    case 'sewabot4':
				if (isBanned) return reply(ind.baned())
                if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                      nomorsewa = `${sender.split("@")[0]}@s.whatsapp.net`
                       const teksnya3 = `*[ BELI ]*\nNomor : @${nomorsewa.split('@')[0]}\nPesan : Bang Saya Mau Beli Scnya`
                      var options = {
                         text: teksnya3,
                         contextInfo: {mentionedJid: [nomorsewa]},
                     }
                    client.sendMessage('6283815956151@s.whatsapp.net', options, text, {quoted: mek})
                    reply('Anda Telah Membeli Script!, tunggu owner script menchat anda!.\nUntuk Membatalkan Pesanan Ketik #batal4')
                    break
		case'daftarsewa':
sewa = fs.readFileSync('sewa.jpg')
ow = "6283815956151@s.whatsapp.net"
daftarnye = `
@----------DAFTAR SEWA----------@
CARA: KETIK 1 SAMPAI 4 UNTUK MEMILIH

+(1).NuyFaa
-tag: @${ow.split('@')[0]}

-NOTE
Pilih Salah Satu Diatas Untuk Membeli
Script Bot Langka!
Contoh:
${prefix}sewa1
----------------------------------------------------`
client.sendMessage(from, sewa, image, {quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [ow, ow2, ow3, ow4]}, displayname: mem, caption: daftarnye })
break
		case 'mute':
                client.modifyChat(from, ChatModification.mute, 24*60*60*1000)
                reply('*succes mute this chat*')
                console.log('succes mute chat = ' + from)
                break
            case 'unmute':
                client.modifyChat(from, ChatModification.unmute)
                reply('*succes unmute this chat*')
                console.log('succes unmute chat = ' + from)
                break
		case 'tovideo':
                    if ((isMedia && !mek.message.videoMessage || isQuotedSticker)) {
                        const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        file_name = getRandom(".gif")
                        ini_txt = args.join(" ").split("|")
                        request({
                            url: `https://api.lolhuman.xyz/api/convert/togif?apikey=${LolKey}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath),
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            client.sendMessage(from, ini_buff, video, { quoted: freply, mimetype: "video/gif", filename: file_name }).then(() => {
                                fs.unlinkSync(file_name)
                            })
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
        case 'tomp3':
            if (!isQuotedVideo) return client.sendMessage(from, 'Reply videonya!',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
            client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await client.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return client.sendMessage(from, 'Error!',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
            buffer= fs.readFileSync(ran)
            client.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: fgclink })
            fs.unlinkSync(ran)
            })
            break
		case 'colong':
		case 'swm':
		          if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (!isQuotedSticker) return reply('Reply Stickernya!')
                    if ((isMedia && !client.message.videoMessage || isQuotedSticker)) {
                        const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        file_name = getRandom(".webp")
                        request({
                            url: `http://api.lolhuman.xyz/api/convert/towebpauthor?apikey=${LolKey}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath),
                                "package": 'MancaBot',
                                "author": 'By NuyFaa'
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            client.sendMessage(from, ini_buff, sticker, { quoted: mek })
                            fs.unlinkSync(file_name)
                        });
                    } else {
                        reply(`Kirim stiker dengan caption ${prefix + command} atau tag sticker yang sudah dikirim`)
                    }
                    break
		case 'chat':
				if (args.length < 1) return reply('Apa pesan nya?')
					var kntl = body.slice(6)
					var ajk = kntl.split("|")[0];
					var chatnya = kntl.split("|")[1];
					client.sendMessage(from, `${ajk}@s.whatsapp.net`, `Dari wa.me/${sender.replace('@s.whatsapp.net', '')}\nKatanya: ${chatnya}`)
					break
	       case 'join':
               if (!isOwner) return client.sendMessage(from, 'Only Admin Bot',MessageType.text, { quoted: ftroli, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
               setTimeout( () => {
               client.query({json:["action", "invite", `${args[0].replace('https://chat.whatsapp.com/','')}`]})
               client.sendMessage(from, 'Success Gabung Group',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
               }, 20000) // 1000 = 1s,
               setTimeout( () => {
               client.sendMessage(from, 'Oke Owner 🤗',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
               }, 0) // 1000 = 1s,
               break
          case 'circle':
               var imgbb = require('imgbb-uploader')
               if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                 ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
                 client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
                 owgi = await client.downloadAndSaveMediaMessage(ted)
                 tels = body.slice(7)
                 anu = await imgbb("e4d134a6d42adba8cb87d8db741b58c2", owgi)
                 hedhe = await getBuffer(`http://api.lolhuman.xyz/api/convert/towebpwround?apikey=${LoLKey}&img=${anu.display_url}`)
                client.sendMessage(from, hedhe, sticker, {quoted: mek, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
               } else {
                 reply('Hamdeh')
               }
               break
					case 'setlol':
					if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if (!isOwner) return client.sendMessage(from, 'Only Admin Bot',MessageType.text, { quoted: ftroli, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					LoLKey = args.join(" ")
					client.sendMessage(from, `LoLKey berhasil di ubah menjadi : ${LoLKey}`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					break 
					case 'settobz':
					if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if (!isOwner) return client.sendMessage(from, 'Only Admin Bot',MessageType.text, { quoted: ftroli, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					TobzKey = args.join(" ")
					client.sendMessage(from, `TobzKey berhasil di ubah menjadi : ${TobzKey}`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					break 
					case 'setxteam':
					if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if (!isOwner) return client.sendMessage(from, 'Only Admin Bot',MessageType.text, { quoted: ftroli, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					XteamKey = args.join(" ")
					client.sendMessage(from, `XteamKey berhasil di ubah menjadi : ${XteamKey}`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					break 
				    case 'setwmsticker':
					if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if (!isOwner) return client.sendMessage(from, 'Only Admin Bot',MessageType.text, { quoted: ftroli, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					ini_nama = args.join(" ").split("|")
					namo = ini_nama[0].trim()
					ator = ini_nama[1].trim()
					client.sendMessage(from, 'Namo Dan Ator berhasil di ubah',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					break 
					case 'setfakereply':
					if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if (!isOwner) return client.sendMessage(from, 'Only Admin Bot',MessageType.text, { quoted: ftroli, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					fakereply = args.join(" ")
					client.sendMessage(from, `Fakereply berhasil di ubah menjadi : ${fakereply}`,MessageType.text, { quoted: flokasi, contextInfo: { forwardingScore: 508, isForwarded: true}})
					break 
					case 'setfakereply1':
					if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if (!isOwner) return client.sendMessage(from, 'Only Admin Bot',MessageType.text, { quoted: ftroli, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					fakereply1 = args.join(" ")
					client.sendMessage(from, `Fakereply1 berhasil di ubah menjadi : ${fakereply1}`,MessageType.text, { quoted: fvideo, contextInfo: { forwardingScore: 508, isForwarded: true}})
					break 
					case 'setfxsx':
					if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if (!isOwner) return client.sendMessage(from, 'Only Admin Bot',MessageType.text, { quoted: ftroli, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					fxsx = args.join(" ")
					client.sendMessage(from, `FxSx berhasil di ubah menjadi : ${fxsx}`,MessageType.text, { quoted: flokasi, contextInfo: { forwardingScore: 508, isForwarded: true}})
					break
				case 'fuckboy':
				case 'fuckgirl':
				case 'bucinserti':
				case 'pacarserti':
				case 'goodboy':
				case 'goodgirl':
				case 'badboy':
				case 'badgirl':
				query = args.join(" ")
				cap = `Nama: ${query}`
				ca = await getBuffer(`http://lolhuman.herokuapp.com/api/${command}?apikey=${LoLKey}&name=${query}`)
				client.sendMessage(from, ca, image, {quoted: fvideo, contextInfo: { forwardingScore: 1, isForwarded: true}, caption: cap})
				break
		case 'tebakgokil':
                if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
		
		if (!isGroup) return reply(ind.groupo())
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tebak/jenaka?apikey=${LoLKey}`, {method: 'get'})
					jenak = `*${anu.result.question}*`
					setTimeout( () => {
					client.sendMessage(from, '*➸ Jawaban :* '+anu.result.answer, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, jenak, text, {quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break 
		case 'tebakgokil2':
                if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
		        if (!isGroup) return reply(ind.groupo())
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tebak/siapaaku?apikey=${LoLKey}`, {method: 'get'})
					siapariu = `*${anu.result.question}*`
					setTimeout( () => {
					client.sendMessage(from, '*➸ Jawaban :* '+anu.result.answer, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, siapariu, text, {quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break 
		case 'caklontong2':
                if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
		
		if (!isGroup) return reply(ind.groupo())
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tebak/caklontong2?apikey=${LoLKey}`, {method: 'get'})
					lontong = `*${anu.result.question}*`
					jawab = `
*➸ Jawaban :* ${anu.result.answer}
*➸ Info :* ${anu.result.information}`
					setTimeout( () => {
					client.sendMessage(from, jawab, MessageType.text, { quoted: fgclink, contextInfo: { forwardingScore: 508, isForwarded: true}}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_10 Detik lagi…_', MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}}) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Detik lagi_…', MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}}) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Detik lagi_…', MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}}) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, lontong, MessageType.text, { quoted: fdocs, contextInfo: { forwardingScore: 508, isForwarded: true}}) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break 
		case 'tebakkimia':
                if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
		
		if (!isGroup) return reply(ind.groupo())
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tebak/unsurkimia?apikey=${LoLKey}`, {method: 'get'})
					kimia = `*${anu.result.nama}*`
					setTimeout( () => {
					client.sendMessage(from, '*➸ Jawaban :* '+anu.result.lambang, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, kimia, text, {quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break 
		case 'tebaklirik':
                if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
		
		if (!isGroup) return reply(ind.groupo())
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tebak/lirik?apikey=${LoLKey}`, {method: 'get'})
					lirik = `*${anu.result.question}*`
					setTimeout( () => {
					client.sendMessage(from, '*➸ Jawaban :* '+anu.result.answer, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, lirik, text, {quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break 
		case 'colong':
		       if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (!isQuotedSticker) return reply('Reply Stickernya!')
                    if ((isMedia && !mek.message.videoMessage || isQuotedSticker)) {
                        const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        file_name = getRandom(".webp")
                        ini_txt = args.join(" ").split("|")
                        request({
                            url: `https://api.lolhuman.xyz/api/convert/towebpauthor?apikey=${LoLKey}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath),
                                "package": ini_txt[0],
                                "author": ini_txt[1]
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            client.sendMessage(from, ini_buff, sticker, { quoted: mek }).then(() => {
                                fs.unlinkSync(file_name)
                            })
                        });
                    } else {
                        reply(`Tag sticker yang sudah dikirim`)
                    }
                    break
		case 'ghost':
	                 if (!isQuotedAudio) return reply('Reply audio nya om')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=3486" ${ran}`, (err, stderr, stdout) => {
					fs.unlinkSync(media)
					if (err) return reply('Error!')
					hah = fs.readFileSync(ran)
					client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', quoted: mek})
                    fs.unlinkSync(ran)
				    })
		            break
		case 'tempo-v':
   var req = args.join(' ')            
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, video, { mimetype: 'video/mp4', quoted: mek })
})
				break
				case 'spam':
				if (!args) return reply("Penggunaan ${prefix}spam teks|jumlahspam")
				argz = args.split("|")
				if (!args) return reply("Penggunaan ${prefix}spam teks|jumlahspam")
				if (isNaN(argz[1])) return reply("harus berupa angka")
				for (let i = 0; i < argz[1]; i++){
					client.sendMessage(from, argz[0])
				}
				break
				case 'vibra':     
var req = args.join(' ')            

					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter_complex "vibrato=f=${req}" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
									case 'vibrav':     
var req = args.join(' ')            

					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} -filter_complex "vibrato=f=${req}" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
										client.sendMessage(from, hah, video, { mimetype: 'video/mp4', quoted: mek })
})
					break
					case 'tvrusak':
					   encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					media = await client.downloadAndSaveMediaMessage(encmedia)

					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter_complex "acrusher=level_in=8:level_out=18:bits=8:mode=log:aa=1" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'gemes':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=50000" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						man = fs.readFileSync(ran)
					client.sendMessage(from, man, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
					break
						case 'stickermeme':
						if ((isMedia && !mek.videoMessage || isQuotedImage)) {
						test = args.join(" ")
					        reply("Wait Bro Promses Dlu Yekan:V")
						var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message.extendedTextMessage.contextInfo : mek
						var media = await client.downloadAndSaveMediaMessage(encmedia)
						anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", media)
						getUrl = `${anu.display_url}`

						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								//buff = fs.readFileSync(ran)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
						buffer = getBuffer(`https://api-self.herokuapp.com/api/memegen1?teks=${test}&img_url=${getUrl}`)
								client.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
					}
						//client.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
							break
           case 'trigger2':
               if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
                  client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
                  owgi = await client.downloadAndSaveMediaMessage(ger)
                  anu = await imgbb('3ea1465ef91578a90ee81f7d41c59a1f', owgi)
                  teks = `${anu.display_url}`
                  ranp = getRandom('.gif')
                  rano = getRandom('.webp')
                  anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${teks}`
                  exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                     fs.unlinkSync(ranp)
                     if (err) return client.sendMessage(from, 'Error...!',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
                     ha = fs.readFileSync(rano)
                     client.sendMessage(from, ha, sticker, { quoted: fgif })
                     fs.unlinkSync(rano)
                  })
               } else {
                  client.sendMessage(from, 'Gunakan Foto...!',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
               }
               break
        case 'trigger':
					if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
            var imgbb = require('imgbb-uploader')
           if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
           ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
           client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
         owgi = await client.downloadAndSaveMediaMessage(ger)
           anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
        teks = `${anu.display_url}`
         ranp = getRandom('.gif')
        rano = getRandom('.webp')
        anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${teks}`
       exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                                                fs.unlinkSync(ranp)
                                                if (err) return client.sendMessage(from, 'Error...!',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
                                                ha = fs.readFileSync(rano)
                                                client.sendMessage(from, ha, sticker, {quoted: fgif})
                                                fs.unlinkSync(rano)
                                        })
                                    
                                             } else {
                                                 client.sendMessage(from, 'Gunakan Foto...!',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
                                          }
                                             break
		case 'anime':
		if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
		   if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/anime?apikey=${LoLKey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Id MAL : ${get_result.idMal}\n`
                    ini_txt += `Title : ${get_result.title.romaji}\n`
                    ini_txt += `English : ${get_result.title.english}\n`
                    ini_txt += `Native : ${get_result.title.native}\n`
                    ini_txt += `Format : ${get_result.format}\n`
                    ini_txt += `Episodes : ${get_result.episodes}\n`
                    ini_txt += `Duration : ${get_result.duration} mins.\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Season : ${get_result.season}\n`
                    ini_txt += `Season Year : ${get_result.seasonYear}\n`
                    ini_txt += `Source : ${get_result.source}\n`
                    ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
                    ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
                    ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
                    ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
                    ini_txt += `Score : ${get_result.averageScore}%\n`
                    ini_txt += `Characters : \n`
                    ini_character = get_result.characters.nodes
                    for (var x of ini_character) {
                        ini_txt += `- ${x.name.full} (${x.name.native})\n`
                    }
                    ini_txt += `\nDescription : ${get_result.description}`
                    thumbnail = await getBuffer(get_result.coverImage.large)
                    client.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break
                case 'wait2':
		if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
           if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        const filePath = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        const form = new FormData();
                        const stats = fs.statSync(filePath);
                        const fileSizeInBytes = stats.size;
                        const fileStream = fs.createReadStream(filePath);
                        form.append('img', fileStream, { knownLength: fileSizeInBytes });
                        const options = {
                            method: 'POST',
                            credentials: 'include',
                            body: form
                        }
                        get_result = await fetchJson(`http://api.lolhuman.xyz/api/wait?apikey=${LoLKey}`, {...options })
                        fs.unlinkSync(filePath)
                        get_result = get_result.result
                        ini_video = await getBuffer(get_result.video)
                        ini_txt = `Anilist id : ${get_result.anilist_id}\n`
                        ini_txt += `MAL id : ${get_result.mal_id}\n`
                        ini_txt += `Title Romaji : ${get_result.title_romaji}\n`
                        ini_txt += `Title Native : ${get_result.title_native}\n`
                        ini_txt += `Title English : ${get_result.title_english}\n`
                        ini_txt += `at : ${get_result.at}\n`
                        ini_txt += `Episode : ${get_result.episode}\n`
                        ini_txt += `Similarity : ${get_result.similarity}`
                        client.sendMessage(from, ini_video, video, { quoted: mek, caption: ini_txt })
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
		case 'hetshot':
			if (!isGroup) return reply(ind.groupo())
			if (!isGroupAdmins) return reply(ind.admin())
			if (!isBotGroupAdmins) return reply(ind.badmin())
			mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
			client.groupRemove(from, mentioned)
			client.sendMessage(from, 'SUKSES',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
			break
		case 'setthumb':
		        if (!isOwner) return client.sendMessage(from, 'Only Admin Bot',MessageType.text, { quoted: ftroli, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await client.downloadMediaMessage(boij)
				fs.writeFileSync(`me.jpg`, delb)
				client.sendMessage(from, 'Sukses Beb😉',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				break
	    case 'setthumbb':
	            if (!isAdmin) return client.sendMessage(from, 'Only Admin Bot',MessageType.text, { quoted: ftroli, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await client.downloadMediaMessage(boij)
				fs.writeFileSync(`me.jpg`, delb)
				client.sendMessage(from, 'Sukses😉',MessageType.text, { quoted: fvideo, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				break
		case 'tovid':
				
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (!isQuotedSticker) return reply('Reply Stickernya!')
					client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(`Error: ${err}`)
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, video, { mimetype: Mimetype.mp4, caption: '*Nih Kak...* '})
						fs.unlinkSync(ran)
					})
					await limitAdd(sender)
					break
			case 'takestick':
		if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                    if ((isMedia && !mek.message.videoMessage || isQuotedSticker)) {
                        if (args.length == 0) return reply(`Example: ${prefix + command} Pinky|May`)
                        const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        file_name = getRandom(".webp")
                        ini_txt = args.join(" ").split("|")
                        request({
                            url: `http://api.lolhuman.xyz/api/convert/towebpauthor?apikey=${apikey}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath),
                                "package": ini_txt[0],
                                "author": ini_txt[1]
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            client.sendMessage(from, ini_buff, sticker, { quoted: mek })
                            fs.unlinkSync(file_name)
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
		case 'harcos':
					if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                    if (args.length == 0) return reply(`Masukan Textnya!`)
					query = args.join(" ")
					buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/hartacustom?apikey=${LoLKey}&text=${body.slice(7)}`)
					cap = `${query}`
					client.sendMessage(from, buffer, image, { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: cap})
					break
		case 'harta':
				if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (args.length < 1) return reply('Url png/jpg mana kak')
				query = args.join(" ")
				client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
				buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/hartatahta?apikey=${LoLKey}&text=${body.slice(7)}`)
				cap = `Harta Tahta ${query}`
				client.sendMessage(from, buffer, image, {quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: cap })
				await limitAdd(sender)
				break
		case 'setthumb':
				if (!isQuotedImage) return reply('Reply imagenya')
				svst = body.slice(8)
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await client.downloadMediaMessage(boij)
				imagenye.push(`${svst}`)
				fs.writeFileSync(`./me.jpeg`, delb)
				fs.writeFileSync('./img.json', JSON.stringify(imagenye))
				client.sendMessage(from, `\`\`\`Sukses Mengganti Thumbnail\`\`\``, MessageType.text, { quoted: mek2 })
				break
		case 'togif':
                                        if (!isQuotedSticker) return reply('Reply stiker nya')
                                        if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                                        client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
                                        if (mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
                                        const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        const media = await client.downloadAndSaveMediaMessage(encmedia)
                                        const upload = await uploadimg(media, Date.now() + '.webp')
                                        const rume = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${upload.result.image}`)
                                        const buff = await getBuffer(rume.data.result)
                                        client.sendMessage(from, buff, video, { mimetype: Mimetype.gif, caption: 'Oke...', quoted: mek})
                                }
                                await limitAdd(sender)
                                break
		case 'getpic':
		if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
            client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
				if (mek.message.extendedTextMessage != undefined){
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					try {
						pic = await client.getProfilePicture(mentioned[0])
					} catch {
						pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
					}
					thumb = await getBuffer(pic)
					client.sendMessage(from, thumb, MessageType.image)
				{quoted : mek2 }}
				await limitAdd(sender)
				break
		case 'tovideo':
					if (!isQuotedSticker) return reply('Reply Gif nya')
					client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					anume = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					anum = await client.downloadAndSaveMediaMessage(anume)
					ran = getRandom('.webp')
					exec(`ffmpeg -i ${anum} ${ran}`, (err) => {
						fs.unlinkSync(anum)
						if (err) return reply(`Error: ${err}`)
						buffers = fs.readFileSync(ran)
						client.sendMessage(from, buffers, video, { quoted: mek2, caption: 'Sudah...' })
						fs.unlinkSync(ran)
					})
					break
		case 'kontak':
                        tahu = args[0]
                        names = args[1]
                        if (isNaN(tahu)) return reply('Invalid phone number'.toUpperCase());
                        vcard = 'BEGIN:VCARD\n'
                                  + 'VERSION:3.0\n'
                                  + `FN:${names}\n`
                                  + `TEL;type=CELL;type=VOICE;waid=${tahu}:${phoneNum('+' + tahu).getNumber('internasional')}\n`
                                  + 'END:VCARD'.trim()
                            client.sendMessage(from, {displayName: names, vcard: vcard}, contact)
                            break
		case 'upswtext':
					client.updatePresence(from, Presence.composing)
					client.sendMessage('status@broadcast', `${q}`, extendedText)
					client.sendMessage(from, `Sukses Up story wea teks ${q}`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					break
					
		case 'kontag':
					var bv = body.slice(8)
					var jl = `${bv}`
					if (args[0] === ' ') {
					var jl = `*CONTACT TAG*`
					}
					var group = await client.groupMetadata(from)
					   var member = group['participants']
					   var mem = []
					   member.map(async adm => {
					   mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					   })
					const vcardtag = 'BEGIN:VCARD\n'
					            + 'VERSION:3.0\n'
					            + `FN:${body.slice(8)}\n`
					            + 'ORG: Cie Ke Tag;\n'
					            + `TEL;type=CELL;type=VOICE;waid=${client.user.jid.split('@')[0]}:${client.user.jid.split('@')[0]}\n`
					            + 'END:VCARD'
            				client.sendMessage(from, {displayname: mem, vcard: vcardtag}, MessageType.contact, { quoted: mek, contextInfo: {mentionedJid: mem}, quoted: mek })
				        break
				case 'tempo':
				client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    var req = args.join(" ")            
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek,duration:999999999999})
						fs.unlinkSync(ran)
					})
				break
		case 'tagimg':
                    if (!isOwner) return reply(ind.ownerb())
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
                        var value = args.join(" ")
                        var group = await client.groupMetadata(from)
                        var member = group['participants']
                        var mem = []
                        member.map(async adm => {
                            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                        })
                        var options = {
                            contextInfo: { mentionedJid: mem },
                            quoted: mek
                        }
                        ini_buffer = fs.readFileSync(filePath)
                        client.sendMessage(from, ini_buffer, image, options)
                        fs.unlinkSync(filePath)
                    } else {
                        reply(`Tag image yang sudah dikirim`)
                    }
                    break
                    case 'tagstick':
                    case 'stag':
                    if (!isOwner) return reply(ind.ownerb())
                    if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
                        const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
                        var value = args.join(" ")
                        var group = await client.groupMetadata(from)
                        var member = group['participants']
                        var mem = []
                        member.map(async adm => {
                            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                        })
                        var options = {
                            contextInfo: { mentionedJid: mem },
                            quoted: mek
                        }
                        ini_buffer = fs.readFileSync(filePath)
                        client.sendMessage(from, ini_buffer, sticker, options)
                        fs.unlinkSync(filePath)
                    } else {
                        reply(`Tag sticker yang sudah dikirim`)
                    }
                    break
        case 'mctag':
        case 'nuytag':
        case 'totag':
            if (!isGroup) return reply(ind.groupo())
		    if (!isGroupAdmins) return reply(ind.admin())
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await client.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            client.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await client.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            client.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await client.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'audio/mp4',
                ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            client.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await client.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            client.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          client.sendMessage(from, `reply gambar/sticker/audio/video dengan caption ${prefix}mctag`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
        }
        break
		case 'removebg':
	if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
    if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
	  owgi = await client.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(10)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/removebg?apikey=${LoLKey}&img=${anu.display_url}`)
	 client.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Pinky Bot","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: 'Nih Dah Jadi...\n\n*Follow!!* @thenay_xploit_'})
	} else {
	  client.sendMessage(from, 'Reply Imagenya!!',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
	}
	break
	case 'smile':
	if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				
				
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
	  owgi = await client.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/tosmile?apikey=${LoLKey}&img=${anu.display_url}`)
	  client.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Pinky Bot","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: 'Nih Dah Jadi...\n\n*Follow!!* @thenay_xploit_'})
	} else {
	  client.sendMessage(from, 'Reply Imagenya!!',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
	}
	break
	case 'skullmask':
	if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				
				
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
	  owgi = await client.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(11)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/skullmask?apikey=${LoLKey}&img=${anu.display_url}`)
	  client.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Pinky Bot","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: 'Nih Dah Jadi...\n\n*Follow!!* @thenay_xploit_'})
	} else {
	  client.sendMessage(from, 'Reply Imagenya!!',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
	}
	break
	case 'fisheye':
	if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				
				
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
	  owgi = await client.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(9)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/fisheye?apikey=${LoLKey}&img=${anu.display_url}`)
	  client.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Pinky Bot","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: 'Nih Dah Jadi...\n\n*Follow!!* @thenay_xploit_'})
	} else {
	  client.sendMessage(from, 'Reply Imagenya!!',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
	}
	break
	case 'deepfry':
	if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				
				
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
	  owgi = await client.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(9)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/deepfry?apikey=${LoLKey}&img=${anu.display_url}`)
	  client.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Pinky Bot","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: 'Nih Dah Jadi...\n\n*Follow!!* @thenay_xploit_'})
	} else {
	  client.sendMessage(from, 'Reply Imagenya!!',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
	}
	break
	case 'grayscale':
	if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				
				
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
	  owgi = await client.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(11)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/grayscale?apikey=${LoLKey}&img=${anu.display_url}`)
	  client.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Pinky Bot","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: 'Nih Dah Jadi...\n\n*Follow!!* @thenay_xploit_'})
	} else {
	  client.sendMessage(from, 'Reply Imagenya!!',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
	}
	break
	case 'imageflip':
	if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				
				
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
	  owgi = await client.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(11)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/flip?apikey=${LoLKey}&img=${anu.display_url}`)
	  client.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Pinky Bot","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: 'Nih Dah Jadi...\n\n*Follow!!* @thenay_xploit_'})
	} else {
	  client.sendMessage(from, 'Reply Imagenya!!',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
	}
	break
	case 'pixelate2':
	if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				
				
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
	  owgi = await client.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(10)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/pixelate?apikey=${LoLKey}&img=${anu.display_url}`)
	  client.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Pinky Bot","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: 'Nih Dah Jadi...\n\n*Follow!!* @thenay_xploit_'})
	} else {
	  client.sendMessage(from, 'Reply Imagenya!!',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
	}
	break
	case 'imagerotate':
	if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				
				
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
	  owgi = await client.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(13)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/rotate?apikey=${LoLKey}&img=${anu.display_url}`)
	  client.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Pinky Bot","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: 'Nih Dah Jadi...\n\n*Follow!!* @thenay_xploit_'})
	} else {
	  client.sendMessage(from, 'Reply Imagenya!!',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
	}
	break
		case 'profile':
    				client.updatePresence(from, Presence.composing)
    				try {
					profil = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
					} catch {
					profil = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
					 profile = `╭─「 *_PROFILE* 」\n│• *Nama:* ${pushname}\n│• *User:* √\n│• *Link:* wa.me/${sender.split("@")[0]}\n╰────────────────`
					buff = await getBuffer(profil)
					client.sendMessage(from, buff, image, {quoted: mek2, caption: profile})
					break
		case 'latinkejawa': 
				if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (args.length < 1) return reply(`Contoh: Makan`)
					gatauda = body.slice(11)
					anu = await fetchJson(`https://api.xteam.xyz/aksara/latinkejawa?text=${gatauda}&APIKEY=${XteamKey}`)
					reply(anu.message)
					break
		case 'afk':
                    alasan = args.join(" ")
                    afk[sender.split('@')[0]] = alasan.toLowerCase()
                    fs.writeFileSync("./database/afk.json", JSON.stringify(afk))
		try {
pp_user = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
} catch {
pp_user = 'https://i.ibb.co/Gp4H47k/7dba54f7e250.jpg'
}
pp_nuy = await getBuffer(pp_user)
                    ini_txt = "Anda telah afk. "
                    if (alasan != "") {
                        ini_txt += "Dengan alasan " + alasan
                    }
                    client.sendMessage(from, pp_nuy, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Pinky Bot","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: ini_txt })
                    break
		    case 'jawakelatin': 
				if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (args.length < 1) return reply(`Contoh: ꦲꦭꦺꦴ`)
					gatauda = body.slice(11)
					anu = await fetchJson(`https://api.xteam.xyz/aksara/jawakelatin?text=${gatauda}&APIKEY=${XteamKey}`)
					reply(anu.message)
					break
		    case 'latinkesunda': 
				if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (args.length < 1) return reply(`Contoh: Makan`)
					gatauda = body.slice(11)
					anu = await fetchJson(`https://api.xteam.xyz/aksara/latinkesunda?text=${gatauda}&APIKEY=${XteamKey}`)
					reply(anu.message)
					break
			 case 'sundakelatin': 
				if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (args.length < 1) return reply(`Contoh: Awas ada sunda`)
					gatauda = body.slice(11)
					anu = await fetchJson(`https://api.xteam.xyz/aksara/sundakelatin?text=${gatauda}&APIKEY=${XteamKey}`)
					reply(anu.message)
					break
		case 'xox':
		const exo = [
		'X : X : O',
		'O : X : O',
		'X : O : O',
		'O : X : X',
		'O : X : O',
		'X : O : O',
	        'X : X : O',
		'X : X : X',
		'O : O : O',
		]
            const boxo = exo[Math.floor(Math.random() * exo.length)]
	mancacuy = `[  🎰 | X O X ]\n-------------------------\n\n ${boxo}\n\n-------------------------\nKeterangan : Jika anda Mendapatkan Huruf X 3 Huruf Berarti Anda Menang\n*Contoh : X : X : X*`
            reply(mancacuy)
	            break
		case 'sewa': 
		case 'sewabot':
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
		    ow = "6283815956151@s.whatsapp.net"
                    sewasu = `
*OPEN JASA SEWA BOT*

Sewa Seminggu : 10k
Sewa Sebulan : 35k

*Payment :*
_Indosat Dan Tsel_

Minat?PM Yg Dibawah
wa.me/6283815956151` 
try {
pp_user = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
} catch {
pp_user = 'https://i.ibb.co/Gp4H47k/7dba54f7e250.jpg'
}
pp_nuy = await getBuffer(pp_user)
                    client.sendMessage(from, pp_nuy, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Pinky Bot","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [ow]}, caption: sewasu })
					break
		case 'suit2':
		query = args.join(" ")
		const botol = ['Batu','Gunting','Kertas']
            const suitcuy = botol[Math.floor(Math.random() * botol.length)]
	brow = `
*BOT*
> ${suitcuy}
*KAMU*
> ${query}
`
            reply(brow)
	            break
				case 'shutdown':
                client.sendMessage(from, 'Oke Beb...',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
                await sleep(5000)
		return client.sendMessage(from, JSON.stringify(eval(process.exit())), text, {quoted: mek})
				break
			case 'slot2':
		const sotoy = [
		'🍊 : 🍒 : 🍐',
		'🍒 : 🔔 : 🍊',
		'🍇 : 🍇 : 🍇',
		'🍊 : 🍋 : 🔔',
		'🔔 : 🍒 : 🍐',
		'🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',		
		'🍐 : 🍒 : 🍋',
		'🍐 : 🍐 : 🍐',
		'🍊 : 🍒 : 🍒',
		'🔔 : 🔔 : 🍇',
		'🍌 : 🍒 : 🔔',
		'🍐 : 🔔 : 🔔',
		'🍊 : 🍋 : 🍒',
		'🍋 : 🍋 : 🍌',
		'🔔 : 🔔 : 🍇',
		'🔔 : 🍐 : 🍇',
		'🔔 : 🔔 : 🔔',
		'🍒 : 🍒 : 🍒',
		'🍌 : 🍌 : 🍌'
		]
            const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
	yow = `[  🎰 | SLOTS ]\n-----------------\n🍋 : 🍌 : 🍍\n${somtoy}<=====\n🍋 : 🍌 : 🍍\n[  🎰 | SLOTS ]\n\nKeterangan : Jika anda Mendapatkan 3Buah Sama Berarti Kamu Win\n\nContoh : 🍌 : 🍌 : 🍌<=====`
            reply(yow)
	            break
			case 'slot':
		      if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
		      if (isBanned) return reply(ind.baned())
			
                    result = await fetchJson(`https://api.xteam.xyz/game/virtualslot?APIKEY=${XteamKey}`)
                        txt = `*🎰Slot didapatkan🎰* \n\n${result.map}\n`
                        txt += `\n🔖Hasil : ${result.hasil}\n`
                        txt += `🕹️Score : ${result.score}\n`
                        reply(txt)
                        break
				case 'suit':
		if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
		        query = args.join(" ")
                    get_result = await fetchJson(`https://api.xteam.xyz/game/suit?q=${query}&APIKEY=${XteamKey}`)
                    bre = `
*[ BOT ]*
_> ${get_result.jawabanbot}_
*[ USER ]*
> ${get_result.jawabanmu}
*[ POIN ]*
_> ${get_result.poin}_
*[ HASIL ]*
_> ${get_result.hasil}_`
                    reply(bre, {quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    break
				case 'nightcore':
	                 if (!isQuotedAudio) return reply('Reply audio nya om')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:false, quoted: mek2,duration:999999999999})
						fs.unlinkSync(ran)
					   })
				       break
			case 'slow':
			       client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek2, duration:999999999999})
						fs.unlinkSync(ran)
					})
				break
				case 'gemuk':
				    client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek2, duration:999999999999})
						fs.unlinkSync(ran)
					})
				break
              case 'tupai':
                   client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek2, duration:999999999999})
						fs.unlinkSync(ran)
					})
				break
				case 'fast':
				client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
				encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				media = await client.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media} -filter:a "atempo=1.63,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
				fs.unlinkSync(media)
				if (err) return reply('Error!')
				uhh = fs.readFileSync(ran)
				client.sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek2, duration:999999999999})
				fs.unlinkSync(ran)
				})
				break
				case 'addbadword': 
                    if (!isOwner) return client.sendMessage(from, 'Only Admin Bot',MessageType.text, { quoted: ftroli, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                    if (!isGroupAdmins) return reply(ind.admin())
                    if (args.length < 1) return client.sendMessage(from, `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    const bw = body.slice(12)
                    bad.push(bw)
                    fs.writeFileSync('./database/kelompok/bad.json', JSON.stringify(bad))
                    client.sendMessage(from, 'Success Menambahkan Bad Word!',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    break
                case 'delbadword': 
                    if (!isOwner) return client.sendMessage(from, 'Only Admin Bot',MessageType.text, { quoted: ftroli, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                    if (!isGroupAdmins) return reply(ind.admin())
                    if (args.length < 1) return client.sendMessage(from, `Kirim perintah ${prefix}delbadword [kata kasar]. contoh ${prefix}delbadword bego`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    let dbw = body.slice(12)
                    bad.splice(dbw)
                    fs.writeFileSync('./database/kelompok/bad.json', JSON.stringify(bad))
                    client.sendMessage(from, 'Success Menghapus BAD WORD!',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    break 
                case 'listbadword': 
                    let lbw = `Ini adalah list BAD WORD\nTotal : ${bad.length}\n`
                    for (let i of bad) {
                        lbw += `➸ ${i.replace(bad)}\n`
                    }
                    await reply(lbw)
                    break 
					case 'antidelete': 
				const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
				const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
				const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
				const isRevoke = dataRevoke.includes(from)
				const isCtRevoke = dataCtRevoke.data
				const isBanCtRevoke = dataBanCtRevoke.includes(sender) ? true : false
				const argz = body.split(' ')
				if (argz.length === 1) return client.sendMessage(from, `Penggunaan fitur antidelete :\n\n*${prefix}antidelete [aktif/mati]* (Untuk grup)\n*${prefix}antidelete [ctaktif/ctmati]* (untuk semua kontak)\n*${prefix}antidelete banct 6283815xxxxxxx* (banlist kontak)`, MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
				if (argz[1] == 'aktif') {
					if (isGroup) {
						if (isRevoke) return client.sendMessage(from, `Antidelete telah diaktifkan di grup ini sebelumnya!`, MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
						dataRevoke.push(from)
						fs.writeFileSync('./src/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						client.sendMessage(from, `*Succes Enable Antidelete Grup!*`, MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					} else if (!isGroup) {
						client.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ctaktif*`, MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					}
				} else if (argz[1] == 'ctaktif') {
					if (!isGroup) {
						if (isCtRevoke) return client.sendMessage(from, `Antidelete telah diaktifkan di semua kontak sebelumnya!`, MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
						dataCtRevoke.data = true
						fs.writeFileSync('./src/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						client.sendMessage(from, `Antidelete diaktifkan disemua kontak!`, MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					} else if (isGroup) {
						client.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete aktif*`, MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					}
				} else if (argz[1] == 'banct') {
					if (isBanCtRevoke) return client.sendMessage(from, `kontak ini telah ada di database banlist!`, MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					if (argz.length === 2 || argz[2].startsWith('0')) return client.sendMessage(from, `Masukan nomer diawali dengan 62! contoh 62838159xxxxx`, MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					dataBanCtRevoke.push(argz[2] + '@s.whatsapp.net')
					fs.writeFileSync('./src/ct-revoked-banlist.json', JSON.stringify(dataBanCtRevoke, null, 2))
					client.sendMessage(from, `Kontak ${argz[2]} telah dimasukan ke banlist antidelete secara permanen!`, MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
				} else if (argz[1] == 'mati') {
					if (isGroup) {
						const index = dataRevoke.indexOf(from)
						dataRevoke.splice(index, 1)
						fs.writeFileSync('./src/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						client.sendMessage(from, `*Succes disable Antidelete Grup!*`, MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					} else if (!isGroup) {
						client.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ctmati*`, MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					}
				} else if (argz[1] == 'ctmati') {
					if (!isGroup) {
						dataCtRevoke.data = false
						fs.writeFileSync('./src/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						client.sendMessage(from, `Antidelete dimatikan disemua kontak!`, MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					} else if (isGroup) {
						client.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete mati*`, MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					}
				}
				break
					case 'joke':
	if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
	if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
	  owgi = await client.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(6)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/joke?url=${anu.display_url}&apikey=${apileys}`)
	 client.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Pinky Bot","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: 'Nih Dah Jadi...\n\n*Follow!!* @thenay_xploit_'})
	} else {
	  client.sendMessage(from, 'Jangan tambah kan apapun pada command',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
	}
	break
	case 'sepia':
	if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
	if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
	  owgi = await client.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/sepia?url=${anu.display_url}&apikey=${apileys}`)
	 client.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Pinky Bot","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: 'Nih Dah Jadi...\n\n*Follow!!* @thenay_xploit_'})
	} else {
	  client.sendMessage(from, 'Reply Imagenya!!',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
	}
	break
	case 'alien':
	if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
	if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
	  owgi = await client.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/alien?apikey=${LoLKey}&img=${anu.display_url}`)
	 client.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Pinky Bot","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: 'Nih Dah Jadi...\n\n*Follow!!* @thenay_xploit_'})
	} else {
	  client.sendMessage(from, 'Reply Imagenya!!',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
	}
	break
	case 'removebg':
	if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
	if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
	  owgi = await client.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(10)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/removebg?apikey=${LoLKey}&img=${anu.display_url}`)
	 client.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Pinky Bot","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: 'Nih Dah Jadi...\n\n*Follow!!* @thenay_xploit_'})
	} else {
	  client.sendMessage(from, 'Reply Imagenya!!',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
	}
	break
	case 'smile':
	if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
	if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
	  owgi = await client.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/tosmile?apikey=${LoLKey}&img=${anu.display_url}`)
	  client.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Pinky Bot","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: 'Nih Dah Jadi...\n\n*Follow!!* @thenay_xploit_'})
	} else {
	  client.sendMessage(from, 'Reply Imagenya!!',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
	}
	break
	case 'skullmask':
	if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
	if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
	  owgi = await client.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(11)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/skullmask?apikey=${LoLKey}&img=${anu.display_url}`)
	  client.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Pinky Bot","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: 'Nih Dah Jadi...\n\n*Follow!!* @thenay_xploit_'})
	} else {
	  client.sendMessage(from, 'Reply Imagenya!!',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
	}
	break
	case 'fisheye':
	if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
	if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
	  owgi = await client.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(9)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/fisheye?apikey=${LoLKey}&img=${anu.display_url}`)
	  client.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Pinky Bot","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: 'Nih Dah Jadi...\n\n*Follow!!* @thenay_xploit_'})
	} else {
	  client.sendMessage(from, 'Reply Imagenya!!',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
	}
	break
	case 'deepfry':
	if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
	if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
	  owgi = await client.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(9)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/deepfry?apikey=${LoLKey}&img=${anu.display_url}`)
	  client.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Pinky Bot","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: 'Nih Dah Jadi...\n\n*Follow!!* @thenay_xploit_'})
	} else {
	  client.sendMessage(from, 'Reply Imagenya!!',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
	}
	break
	case 'grayscale':
	if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
	if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
	  owgi = await client.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(11)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/grayscale?apikey=${LoLKey}&img=${anu.display_url}`)
	  client.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Pinky Bot","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: 'Nih Dah Jadi...\n\n*Follow!!* @thenay_xploit_'})
	} else {
	  client.sendMessage(from, 'Reply Imagenya!!',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
	}
	break
	case 'imageflip':
	if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
	if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
	  owgi = await client.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(11)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/flip?apikey=${LoLKey}&img=${anu.display_url}`)
	  client.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Pinky Bot","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: 'Nih Dah Jadi...\n\n*Follow!!* @thenay_xploit_'})
	} else {
	  client.sendMessage(from, 'Reply Imagenya!!',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
	}
	break
	case 'pixelate':
	if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
	if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
	  owgi = await client.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(10)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/pixelate?apikey=${LoLKey}&img=${anu.display_url}`)
	  client.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Pinky Bot","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: 'Nih Dah Jadi...\n\n*Follow!!* @thenay_xploit_'})
	} else {
	  client.sendMessage(from, 'Reply Imagenya!!',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
	}
	break
	case 'imagerotate':
	if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
	if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
	  owgi = await client.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(13)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/rotate?apikey=${LoLKey}&img=${anu.display_url}`)
	  client.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Pinky Bot","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: 'Nih Dah Jadi...\n\n*Follow!!* @thenay_xploit_'})
	} else {
	  client.sendMessage(from, 'Reply Imagenya!!',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
	}
	break
				
		case 'mutual':
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isGroup) return  reply( 'Command ini tidak bisa digunakan di dalam grup!')
				anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
				await reply('Find for a partner...')
				await reply(`wa.me/${anug}`)
				await reply( `Partner found: 🙉\n*${prefix}next* — find a new partner`)
				await limitAdd(sender)
				break
		case 'next':
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isGroup) return  reply( 'Command ini tidak bisa digunakan di dalam grup!')
				anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
				await reply('Find for a partner...')
				await reply(`wa.me/${anug}`)
				await reply( `Partner found: 🙉\n*${prefix}next* — find a new partner`)
				await limitAdd(sender)
				break
		case 'transfer':
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (!q.includes('|')) return  reply(ind.wrongf())
                		const tujuan = q.substring(0, q.indexOf('|') - 1)
                		const jumblah = q.substring(q.lastIndexOf('|') + 1)
                		if(isNaN(jumblah)) return await reply('jumlah harus berupa angka!!')
                		if (jumblah < 5000 ) return reply(`minimal transfer 5000`)
                		if (checkATMuser(sender) < jumblah) return reply(`uang mu tidak mencukupi untuk melakukan transfer`)
                		const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
                		fee = 0.010 *  jumblah
                		hasiltf = jumblah - fee
                		addKoinUser(tujuantf, hasiltf)
                		confirmATM(sender, jumblah)
                		addKoinUser('6283815956151@s.whatsapp.net', fee)
                		client.sendMessage(from, `*「 SUKSES 」*\n\nPengiriman uang telah sukses\nDari : +${sender.split("@")[0]}\nKe : +${tujuan}\njJumlah transfer : ${jumblah}\nPajak : ${fee}`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
                		break
                case 'admin':
				if (!isOwner) return client.sendMessage(from, 'Only Admin Bot',MessageType.text, { quoted: ftroli, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				admm = body.slice(7)
				adm.push(`${admm}@s.whatsapp.net`)
				fs.writeFileSync('./database/pengguna/admin.json', JSON.stringify(adm))
				client.sendMessage(from, `Berhasil menambahkan admin bot wa.me/${admm}`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
				break
                case 'unadmin':
				if (!isOwner) return client.sendMessage(from, 'Only Admin Bot',MessageType.text, { quoted: ftroli, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				admm = body.slice(9)
				adm.push(`${admm}@s.whatsapp.net`)
				fs.writeFileSync('./database/pengguna/admin.json', JSON.stringify(adm))
				client.sendMessage(from, `Berhasil Mengunadmin bot wa.me/${admm}`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
				break
                case 'wakillist':
				client.updatePresence(from, Presence.composing) 
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})    
				teks = 'This is list of admin bot number :\n'
				for (let admm of adm) {
					teks += `~> @${admm.split('@')[0]}\n`
					}
					teks += `Total : ${admm.length}`
				client.sendMessage(from, teks.trim(), extendedText, {quoted: mek2, contextInfo: {"mentionedJid": adm}})
				break
                case 'premium':
				if (!isOwner) return client.sendMessage(from, 'Only Admin Bot',MessageType.text, { quoted: ftroli, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				premm = body.slice(9)
				prem.push(`${premm}@s.whatsapp.net`)
				fs.writeFileSync('./database/pengguna/premium.json', JSON.stringify(prem))
				client.sendMessage(from, `Berhasil menjadi premium wa.me/${premm}`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
				break
		case 'unpremium':
				if (!isOwner) return client.sendMessage(from, 'Only Admin Bot',MessageType.text, { quoted: ftroli, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				premm = body.slice(11)
				prem.splice(`${premm}@s.whatsapp.net`, 1)
				fs.writeFileSync('./database/pengguna/premium.json', JSON.stringify(prem))
				reply(`Nomor sudah berakhir menjadi premium wa.me/${premm} `)
				client.sendMessage(from, `Nomor sudah berakhir menjadi premium wa.me/${premm}`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
				break
                case 'premiumlist':
				client.updatePresence(from, Presence.composing) 
				
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})    
				teks = 'This is list of premium number :\n'
				for (let premm of prem) {
					teks += `~> @${premm.split('@')[0]}\n`
					}
					teks += `Total : ${prem.length}`
				client.sendMessage(from, teks.trim(), extendedText, {quoted: mek2, contextInfo: {"mentionedJid": prem}})
				break
                case 'bann':
				if (!isAdmin) return client.sendMessage(from, 'Only Admin Bot',MessageType.text, { quoted: ftroli, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				bnnd = body.slice(5)
				ban.push(`${bnnd}@s.whatsapp.net`)
				fs.writeFileSync('./database/pengguna/banned.json', JSON.stringify(ban))
				client.sendMessage(from, `Berhasil membanned nomor : wa.me/${bnnd} `,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
				break
		case 'unbann':
				if (!isAdmin) return client.sendMessage(from, 'Only Admin Bot',MessageType.text, { quoted: ftroli, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				bnnd = body.slice(7)
				ban.splice(`${bnnd}@s.whatsapp.net`, 1)
				fs.writeFileSync('./database/pengguna/banned.json', JSON.stringify(ban))
				client.sendMessage(from, `Nomor wa.me/${bnnd} telah di unban!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
				break
                case 'ban':
				if (!isOwner) return client.sendMessage(from, 'Only Admin Bot',MessageType.text, { quoted: ftroli, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				bnnd = body.slice(5)
				ban.push(`${bnnd}@s.whatsapp.net`)
				fs.writeFileSync('./database/pengguna/banned.json', JSON.stringify(ban))
				client.sendMessage(from, `Berhasil membanned nomor : wa.me/${bnnd} `,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
				break
		case 'unban':
				if (!isOwner) return client.sendMessage(from, 'Only Admin Bot',MessageType.text, { quoted: ftroli, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				bnnd = body.slice(7)
				ban.splice(`${bnnd}@s.whatsapp.net`, 1)
				fs.writeFileSync('./database/pengguna/banned.json', JSON.stringify(ban))
				client.sendMessage(from, `Nomor wa.me/${bnnd} telah di unban!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
				break
                case 'banlist':
				client.updatePresence(from, Presence.composing) 
				
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})    
				teks = 'This is list of banned number :\n'
				for (let benn of ban) {
					teks += `~> @${benn.split('@')[0]}\n`
					}
					teks += `Total : ${ban.length}`
				client.sendMessage(from, teks.trim(), extendedText, {quoted: mek2, contextInfo: {"mentionedJid": ban}})
				break

		case 'leaderboard':
		case 'lb':
				_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
				uang.sort((a, b) => (a.uang < b.uang) ? 1 : -1)
				let leaderboardlvl = '-----[ *LEADERBOARD LEVEL* ]----\n\n'
				let leaderboarduang = '-----[ *LEADERBOARD UANG* ]----\n\n'
				let nom = 0
				try {
				for (let i = 0; i < 10; i++) {
					nom++
					leaderboardlvl += `*[${nom}]* ${_level[i].id.replace('@s.whatsapp.net', '')}\n◪  *XP*: ${_level[i].xp}\n◪  *Level*: ${_level[i].level}\n`
					leaderboarduang += `*[${nom}]* ${uang[i].id.replace('@s.whatsapp.net', '')}\n◪  *Uang*: _Rp${uang[i].uang}_\n◪  *Limit*: ${limitawal - _limit[i].limit}\n`
				}
				await reply(leaderboardlvl)
				await reply(leaderboarduang)
				} catch (err) {
				console.error(err)
				await reply(`minimal 10 user untuk bisa mengakses database`)
				}
				break
		case 'kalkulator':
				
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (args.length < 1) return client.sendMessage(from, `[❗] Kirim perintah *${prefix}kalkulator [ Angka ]*\nContoh : ${prefix}kalkulator 12*12\n*NOTE* :\n• Untuk Perkalian Menggunakan *\n• Untuk Pertambahan Menggunakan +\n• Untuk Pengurangan Menggunakan -\n• Untuk Pembagian Menggunakan /`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
				const Math_js = require('mathjs')
				mtk = body.slice(12)
				if (typeof Math_js.evaluate(mtk) !== "number") {
					client.sendMessage(from, `"${mtk}", Kesalahan!\n[❗] Kirim perintah *${prefix}kalkulator [ Angka ]*\nContoh : ${prefix}kalkulator 12*12\n*NOTE* :\n• Untuk Perkalian Menggunakan *\n• Untuk Pertambahan Menggunakan +\n• Untuk Pengurangan Menggunakan -\n• Untuk Pembagian Menggunakan /`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
				} else {
					client.sendMessage(from, `*「 MATH 」*\n\n*Kalkulator*\n${mtk} = ${Math_js.evaluate(mtk)}`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
				}
				await limitAdd(sender)
				break
		case 'dompet':
				
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				const kantong = checkATMuser(sender)
				reply(ind.uangkau(pushname, sender, kantong))
				break
		case 'buylimit':
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				payout = body.slice(10)
				const koinPerlimit = 2000
				const total = koinPerlimit * payout
				if ( checkATMuser(sender) <= total) return reply(`Maaf uang kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
				if ( checkATMuser(sender) >= total ) {
					confirmATM(sender, total)
					bayarLimit(sender, payout)
					await reply(`*「 PEMBAYARAN BERHASIL 」*\n\n*Pengirim* : Admin\n*Penerima* : ${pushname}\n*Nominal pembelian* : ${payout} \n*Harga limit* : ${koinPerlimit}/limit\n*Sisa uang mu* : ${checkATMuser(sender)}\n\nProses berhasil dengan nomer pembayaran\n${createSerial(20)}`)
				} 
				break
		case 'buypremiumlimit':
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				payout = body.slice(17)
				const koinpremPerlimit = 500
				const totalprem = koinpremPerlimit * payout
				if ( checkATMuser(sender) <= totalprem) return reply(`Maaf uang kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
				if ( checkATMuser(sender) >= totalprem ) {
					confirmATM(sender, totalprem)
					bayarLimit(sender, payout)
					await reply(`*「 PEMBAYARAN BERHASIL 」*\n\n*Pengirim* : NuyFaaツ\n*Penerima* : ${pushname}\n*Nominal pembelian* : ${payout} \n*Harga limit* : ${koinpremPerlimit}/limit\n*Sisa uang mu* : ${checkATMuser(sender)}\n\nProses berhasil dengan nomer pembayaran\n${createSerial(20)}`)
				} 
				break
		case 'giftlimit': 
				
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (!isAdmin) return client.sendMessage(from, 'Only Adminban & Owner Kami!',MessageType.text, { quoted: ftroli, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				const nomerr = args[0].replace('@','')
                		const jmla = args[1]
                		if (jmla <= 1) return reply(`minimal gift limit adalah 1`)
                		if (isNaN(jmla)) return reply(`limit harus berupa angka`)
                		if (!nomerr) return reply(`maaf format salah\nmasukan parameter yang benar\ncontoh : ${prefix}giftlimit @6283815956151 20`)
                		const cysz = nomerr + '@s.whatsapp.net'
                		var found = false
                        			Object.keys(_limit).forEach((i) => {
                            			if(_limit[i].id === cysz){
                                			found = i
                            			}
                        		})
                        	if (found !== false) {
                            	_limit[found].limit -= jmla
                            	const updated = _limit[found]
                            	const result = `Gift kuota limit sukses dengan NS: ${createSerial(20)} pada ${moment().format('DD/MM/YY HH:mm:ss')}
							*「 GIFT KUOTA LIMIT 」*
							• User : @${updated.id.replace('@s.whatsapp.net','')}
							• Limit: ${limitawal-updated.limit}`
                            	console.log(_limit[found])
                            	fs.writeFileSync('./database/pengguna/limit.json',JSON.stringify(_limit));
                            	reply(result)
                        	} else {
                                client.sendMessage(from, `Maaf, nomor ${nomerr} tidak terdaftar di database!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
                        	}
               			break
                case 'moddroid':
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				data = await fetchJson(`https://tobz-api.herokuapp.com/api/moddroid?q=${body.slice(10)}&apikey=${TobzKey}`)
				hepi = data.result[0] 
				teks = `*Nama*: ${data.result[0].title}\n*Publisher*: ${hepi.publisher}\n*Mod info:* ${hepi.mod_info}\n*size*: ${hepi.size}\n*Latest version*: ${hepi.latest_version}\n*Genre*: ${hepi.genre}\n*Link:* ${hepi.link}\n*Download*: ${hepi.download}`
				buffer = await getBuffer(hepi.image)
				client.sendMessage(from, buffer, image, {quoted: mek2, caption: `${teks}`})
				await limitAdd(sender)
				break
		case 'happymod':
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				data = await fetchJson(`https://tobz-api.herokuapp.com/api/happymod?q=${body.slice(10)}&apikey=${TobzKey}`)
				hupo = data.result[0] 
				teks = `*Nama*: ${data.result[0].title}\n*version*: ${hupo.version}\n*size:* ${hupo.size}\n*root*: ${hupo.root}\n*purchase*: ${hupo.price}\n*link*: ${hupo.link}\n*download*: ${hupo.download}`
				buffer = await getBuffer(hupo.image)
				client.sendMessage(from, buffer, image, {quoted: mek2, caption: `${teks}`})
				await limitAdd(sender)
				break
		case 'apkpure':
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				data = await fetchJson(`https://api.zeks.xyz/api/apkpure?q=${body.slice(9)}&apikey=apivinz`, {method: 'get'})
				teks = '=================\n'
				for (let i of data.result) {
					teks += `*Nama APK* : ${i.title}\n*Link* : ${i.url}\n*Rating* : ${i.rating}\n=================\n`
					}
				reply(teks.trim())
				await limitAdd(sender)
				break
		case 'jadwalbola': 			
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				data = await fetchJson(`https://api.vhtear.com/jadwalbola&apikey=c1d162b46e634f389efa1ac715f03d03`, {method: 'get'})
				teks = '=================\n'
				for (let i of data.result.data) {
					teks += `❏ *Kick Off* : ${i.kickoff}\n❏ *Pertandingan* : ${i.pertandingan}\n❏ *Stasiuntv* : ${i.stasiuntv}\n\n=================\n\n`
					}
				reply(teks.trim())
				await limitAdd(sender)
				break
		case 'coronainfo': 
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				data = await fetchJson(`https://api.vhtear.com/corona&apikey=c1d162b46e634f389efa1ac715f03d03`, {method: 'get'})
				teks = '=================\n'
				for (let i of data.result) {
					teks += `*Updated* : ${i.updated}\n*Country* : ${i.country}\n*CountryInfo* : \n*ID* : ${i.countryInfo._id}\n*iso2* : ${i.countryInfo.iso2}\n*iso3* : ${i.countryInfo.iso3}\n*lat* : ${i.countryInfo.lat}\n*long* : ${i.countryInfo.long}\n*cases* : ${i.cases}\n*todayCases* : ${i.todayCases}\n*deaths* : ${i.deaths}\n*todayDeaths* : ${i.todayDeaths}\n*recovered* : ${i.recovered}\n*todayRecovered* : ${i.todayRecovered}\n*active* : ${i.active}\n*critical* : ${i.critical}\n*casesPerOneMillion* : ${i.casesPerOneMillion}\n*deathsPerOneMillion* : ${i.deathsPerOneMillion}\n*tests* : ${i.tests}\n*testsPerOneMillion* : ${i.testsPerOneMillion}\n*population* : ${i.population}\n*continent* : ${i.continent}\n*oneCasePerPeople* : ${i.oneCasePerPeople}\n*oneDeathPerPeople* : ${i.oneDeathPerPeople}\n*oneTestPerPeople* : ${i.oneTestPerPeople}\n*activePerOneMillion* : ${i.activePerOneMillion}\n*recoveredPerOneMillion* : ${i.recoveredPerOneMillion}\n*criticalPerOneMillion* : ${i.criticalPerOneMillion}\n=================\n`
					}
				reply(teks.trim())
				await limitAdd(sender)
				break
		case 'bitly':
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				client.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://tobz-api.herokuapp.com/api/bitly?url=${args[0]}&apikey=${TobzKey}`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result}`
				reply(hasil)
				await limitAdd(sender)
				break
		case 'cuttly':
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				client.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://hujanapi.herokuapp.com/api/cuttly?url=${args[0]}&apikey=trial2k21`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result.Short}`
				reply(hasil)
				await limitAdd(sender)
				break
				case 'pornhub':
                	if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					var gh = body.slice(9)
					var porn = gh.split("/")[0];
					var hub = gh.split("/")[1];
					if (args.length < 1) return reply(`Contoh : ${prefix}pornhub Pinky/Hub`)
					client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
					alan = await getBuffer(`https://vinz.zeks.xyz/api/pornhub?text1=${porn}&text2=${hub}`)
					client.sendMessage(from, alan, image, {quoted: mek2})
					await limitAdd(sender)
				break
				case 'googletext':
                    if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					var gh = body.slice(12)
					var hem = gh.split("/")[0];
					var ganz = gh.split("/")[1];
					var abiez = gh.split("/")[2];
					if (args.length < 1) return reply(`Contoh : ${prefix}googletext Nuy/Cans/Abizz`)
					client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
					uwuw = await getBuffer(`https://videfikri.com/api/textmaker/gsuggest/?text1=${hem}&text2=${ganz}&text3=${abiez}`)
					client.sendMessage(from, uwuw, image, {quoted: mek2})
					await limitAdd(sender)
				break
		case 'tinyurl':
		       if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
               client.updatePresence(from, Presence.composing) 
                data = await fetchJson(`https://tobz-api.herokuapp.com/api/tinyurl?url=${args[0]}&apikey=${TobzKey}`)
                hasil = `link : ${args[0]}\n\nOutput : ${data.result}`
                reply(hasil)
                await limitAdd(sender)
                break
		case 'shrtco':
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				client.updatePresence(from, Presence.composing) 
				data = await fetchJson(`http://lolhuman.herokuapp.com/api/shortlink2?url=${args[0]}&apikey=WEMPYGANSS`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result}`
				reply(hasil)
				await limitAdd(sender)
				break
                case 'nangis':
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://api.shizukaa.xyz/api/bj18?apikey=itsmeiky633', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek2})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
                case 'blowjob':
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (!isNsfw) return reply(ind.nsfwoff())
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey=${TobzKey}', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek2})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
		case 'rdmhentai':
		case 'randomhentai':
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if (!isNsfw) return reply(ind.nsfwoff())
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                                        gatauda = body.slice(12)
					client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwtrap?apikey=291F6uRDLIhlSpHp1hOy`, {method: 'get'})
                                        buffer = await getBuffer(anu.result)
                                        client.sendMessage(from, buffer, image, {quoted: mek2})
					await limitAdd(sender)
                                        break
		        case 'art':
                case 'bts':
                case 'exo':
                case 'elf':
                case 'loli':
                case 'neko':
                case 'waifu2':
                case 'shota':
                case 'husbu':
                case 'sagiri':
                case 'shinobu':
                case 'megumin':
                case 'wallnime':
		            if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
		            if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/${command}?apikey=${LoLKey}`)
                    client.sendMessage(from, buffer, image, { quoted: mek2})
                    break
                case 'chiisaihentai':
                case 'trap':
                case 'blowjob':
                case 'yaoi':
                case 'ecchi':
                case 'hentai':
                case 'ahegao':
                case 'hololewd':
                case 'sideoppai':
                case 'animefeets':
                case 'animebooty':
                case 'animethighss':
                case 'hentaiparadise':
                case 'animearmpits':
                case 'hentaifemdom':
                case 'lewdanimegirls':
                case 'biganimetiddies':
                case 'animebellybutton':
                case 'hentai4everyone':
		            if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
		            if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${LoLKey}`)
                    client.sendMessage(from, ini_buffer, image, { quoted: mek2})
                    break
                case 'bj':
                case 'ero':
                case 'cum':
                case 'feet':
                case 'yuri':
                case 'trap':
                case 'lewd':
                case 'feed':
                case 'eron':
                case 'solo':
                case 'gasm':
                case 'poke':
                case 'anal':
                case 'holo':
                case 'tits':
                case 'kuni':
                case 'kiss':
                case 'erok':
                case 'smug':
                case 'baka':
                case 'solog':
                case 'feetg':
                case 'lewdk':
                case 'waifu3':
                case 'pussy':
                case 'femdom':
                case 'cuddle':
                case 'hentai':
                case 'eroyuri':
                case 'cum_jpg':
                case 'blowjob':
                case 'erofeet':
                case 'holoero':
                case 'classic':
                case 'erokemo':
                case 'fox_girl':
                case 'futanari':
                case 'lewdkemo':
                case 'wallpaper':
                case 'pussy_jpg':
                case 'kemonomimi':
                case 'nsfw_avatar':
		            if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
		            if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/random2/${command}?apikey=${LoLKey}`)
                    client.sendMessage(from, ini_buffer, image, { quoted: mek2})
                    break
                case 'ngif':
                case 'nsfw_neko_gif':
                case 'random_hentai_gif':
		if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
		if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `http://api.lolhuman.xyz/api/random2/${command}?apikey=${LoLKey}`
                    exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        client.sendMessage(from, buff, sticker, { quoted: mek2})
                        fs.unlinkSync(rano)
                    })
                    break
		case 'nulis':
				 				
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (args.length < 1) return reply(ind.wrongf())
				ct = body.slice(6)
				client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
				ct = await getBuffer(`https://api.zeks.xyz/api/nulis?text=${ct}&apikey=apivinz`)
				client.sendMessage(from, ct, image, {caption: 'Nih kak udah jadi..', quoted: mek2})
				await limitAdd(sender)
				break
		case 'nulis3':
				 				
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (args.length < 1) return reply(ind.wrongf())
				ct = body.slice(7)
				client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
				anu = await fetchJson(`https://videfikri.com/api/nulis/?query=${ct}`, {method: 'get'})
				gools5 = await getBuffer(anu.image)
				client.sendMessage(from, gools5, image, {caption: 'Nih kak udah jadi..', quoted: mek2})
				await limitAdd(sender)
				break
		case 'nulis2':
				 				
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (args.length < 1) return reply(ind.wrongf())
				ct = body.slice(7)
				ll1 = ct.split("/")[0];
                ll2 = ct.split("/")[1];
                ll3 = ct.split("/")[2];
                ll4 = ct.split("/")[3];
				client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
				ct = await getBuffer(`https://api.zeks.xyz/api/magernulis?nama=${ll1}&kelas=${ll2}&text=${ll3}&tinta=${ll4}`)
				client.sendMessage(from, ct, image, {caption: 'Nih kak udah jadi..', quoted: mek2})
				await limitAdd(sender)
				break
		case 'nulis4':
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (args.length < 1) return reply(ind.wrongf())
				ct = body.slice(7)
				client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
				ct = await getBuffer(`https://api.vhtear.com/write?text=${ct}&apikey=c1d162b46e634f389efa1ac715f03d03`)
				client.sendMessage(from, ct, image, {caption: 'Nih kak udah jadi..', quoted: mek2})
				await limitAdd(sender)
				break
		case 'galaxtext':
				
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (args.length < 1) return reply(ind.wrongf())
				ct = body.slice(10)
				client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
				ct = await getBuffer(`http://lolhuman.herokuapp.com/api/ephoto1/galaxywallpaper?apikey=${LoLKey}&text=${ct}`)
				client.sendMessage(from, ct, image, {caption: 'Nih kak udah jadi..', quoted: mek2})
				await limitAdd(sender)
				break
		case 'bplogo':
				
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (args.length < 1) return reply(ind.wrongf())
				vinz = body.slice(8)
				client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
				anu = await fetchJson(`https://api.zeks.xyz/api/logobp?text=${vinz}&apikey=apivinz`)
				buffer = await getBuffer(anu.result)
				client.sendMessage(from, buffer, image, {caption: 'Nih kak udah jadi..', quoted: mek2})
				await limitAdd(sender)
				break
		case 'harta':
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (args.length < 1) return reply(ind.wrongf())
				har = body.slice(11)
				client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
				taa = await getBuffer(`https://api.lolhuman.xyz/api/hartatahta?apikey=${LoLKey}&text=${har}`)
				client.sendMessage(from, taa, image, {caption: 'Nih kak udah jadi..', quoted: mek2})
				await limitAdd(sender)
				break
		case 'tahta':
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (args.length < 1) return reply(ind.wrongf())
				bh = body.slice(7)
				client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
				bh = await getBuffer(`https://api.zeks.xyz/api/hartatahta?text=${bh}&apikey=apivinz`)
				client.sendMessage(from, bh, image, {caption: 'Nih kak udah jadi..', quoted: mek2})
				await limitAdd(sender)
				break
        case '1977':
        case 'aden':
        case 'brannan':
        case 'brooklyn':
        case 'clarendon':
        case 'gingham':
        case 'hudson':
        case 'inkwell':
        case 'earlybird':
        case 'kelvin':
        case 'lark':
        case 'lofi':
        case 'maven':
        case 'mayfair':
        case 'moon':
        case 'nashville':
        case 'perpetua':
        case 'reyes':
        case 'rise':
        case 'slumber':
        case 'stinson':
        case 'toaster':
        case 'valencia':
        case 'walden':
        case 'willow':
        case 'xpro2':
        if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
		if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
        client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
        var imgbb = require('imgbb-uploader')
        if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
        encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
        media = await client.downloadAndSaveMediaMessage(encmedia)
        anu = await imgbb('3ea1465ef91578a90ee81f7d41c59a1f', media)
        buffer = await getBuffer(`https://api.lolhuman.xyz/api/filter/${command}?apikey=${LoLKey}&img=${anu.display_url}`)
        client.sendMessage(from, buffer, image, {quoted: ftroli})
        } else {
        client.sendMessage(from, 'Reply Imagenya!!',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
        }
        break
        case 'affect':
        case 'beautiful':
        case 'facepalm':
        case 'hitler':
        case 'jail':
        case 'rainbow':
        case 'rip':
        case 'sepia':
        case 'trash':
        case 'wanted':
        if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
		if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
        client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
        var imgbb = require('imgbb-uploader')
        if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
        encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
        media = await client.downloadAndSaveMediaMessage(encmedia)
        anu = await imgbb('3ea1465ef91578a90ee81f7d41c59a1f', media)
        buffer = await getBuffer(`https://api.lolhuman.xyz/api/creator1/${command}?apikey=${LoLKey}&img=${anu.display_url}`)
        client.sendMessage(from, buffer, image, {quoted: ftroli})
        } else {
        client.sendMessage(from, 'Reply Imagenya!!',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
        }
        break
		case 'darkneon':
                case 'candlemug':
                case 'lovemsg':
                case 'mugflower':
                case 'narutobanner':
                case 'paperonglass':
                case 'romancetext':
                case 'shadowtext':
                case 'coffeecup':
                case 'coffeecup2':
                case 'glowingneon':
                case 'underwater':
                case 'hpotter':
                case 'woodblock':
                if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                    if (args.length == 0) return client.sendMessage(from, `Usage: ${prefix + command} text\nExample: ${prefix + command} nuy`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    txt = args.join(" ")
                    client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    buffer = await getBuffer(`https://videfikri.com/api/textmaker/${command}/?text=${txt}`)
                    client.sendMessage(from, buffer, image, {quoted: mek2})
                break
            case 'shadow2':
                case 'cup':
                case 'cup2':
                case 'romance2':
                case 'smoke':
                case 'burnpaper':
                case 'lovemessage':
                case 'undergrass':
                case 'love':
                case 'coffe':
                case 'woodheart':
                case 'flowerheart':
                case 'woodenboard':
                case 'summer3d':
                case 'wolfmetal':
                case 'nature3d':
                case 'underwater':
                case 'golderrose':
                case 'summernature':
                case 'letterleaves':
                case 'glowingneon':
                case 'falleaves':
                case 'flamming':
                case 'potter':
                case 'carvedwood':  // Fix Bug By MancaBot & Nurul
                    if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				    if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                    if (args.length == 0) return client.sendMessage(from, 'Teksnya Mana Kak?',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    txt = args.join(" ")
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${LoLKey}&text=${txt}`)
                    client.sendMessage(from, buffer, image, {caption: 'Nih kak....\n\n*Follow!!* : @thenay_xploit_\n\nJangan Pake Nya Doang!!', quoted: mek2})
                    break
            case 'wetglass':
                case 'multicolor3d':
                case 'watercolor':
                case 'luxurygold':
                case 'galaxywallpaper':
                case 'lighttext':
                case 'beautifulflower':
                case 'puppycute':
                case 'royaltext':
                case 'heartshaped':
                case 'birthdaycake':
                case 'galaxystyle':
                case 'hologram3d':
                case 'greenneon':
                case 'glossychrome':
                case 'greenbush':
                case 'metallogo':
                case 'noeltext':
                case 'glittergold':
                case 'textcake':
                case 'starsnight':
                case 'wooden3d':
                case 'textbyname':
                case 'writegalacy':
                case 'galaxybat':
                case 'snow3d':
                case 'birthdayday':
                case 'gplybutton':
                case 'splybutton':
                case 'epep':  // Fix Bug By MancaBot & Nurul*
                    if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				    if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                    if (args.length == 0) return client.sendMessage(from, 'Teksnya Mana Kak?',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    txt = args.join(" ")
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${LoLKey}&text=${txt}`)
                    client.sendMessage(from, buffer, image, {caption: 'Nih kak....\n\n*Follow!!* : @thenay_xploit_\n\nJangan Pake Nya Doang!!', quoted: mek2})
                    break
            case 'blackpink':
                case 'neon':
                case 'greenneon':
                case 'advanceglow':
                case 'futureneon':
                case 'sandwriting':
                case 'sandsummer':
                case 'sandengraved':
                case 'metaldark':
                case 'neonlight':
                case 'holographic':
                case 'text1917':
                case 'minion':
                case 'deluxesilver':
                case 'newyearcard':
                case 'bloodfrosted':
                case 'halloween':
                case 'jokerlogo':
                case 'fireworksparkle':
                case 'natureleaves':
                case 'bokeh':
                case 'toxic':
                case 'strawberry':
                case 'box3d':
                case 'roadwarning':
                case 'breakwall':
                case 'icecold':
                case 'luxury':
                case 'cloud':
                case 'summersand':
                case 'horrorblood':
                case 'thunder2':
                if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    if (args.length == 0) return client.sendMessage(from, `Example: ${prefix + command} Pinky`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    txt = args.join(" ")
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome/${command}?apikey=${LoLKey}&text=${txt}`)
                    client.sendMessage(from, buffer, image, {caption: 'Nih kak....\n\n*Follow!!* : @thenay_xploit_\n\nJangan Pake Nya Doang!!', quoted: mek2})
                    break
         case 'gplaybutton':
                case 'splaybutton':
                if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                    if (args.length == 0) return client.sendMessage(from, `Usage: ${prefix + command} text\nExample: ${prefix + command} nuy`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    txt = args.join(" ")
                    client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fvideo, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    buffer = await getBuffer(`https://api.zeks.xyz/api/${command}?text=${txt}&apikey=apivinz`)
                    client.sendMessage(from, buffer, image, {quoted: mek2})
         break
         case 'qrencode':
                case 'barcode':
                if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                    if (args.length == 0) return client.sendMessage(from, `Usage: ${prefix + command} text\nExample: ${prefix + command} nuy`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    txt = args.join(" ")
                    client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fvideo, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    buffer = await getBuffer(`https://api.zeks.xyz/api/${command}?apikey=apivinz&text=${txt}`)
                    client.sendMessage(from, buffer, image, {quoted: mek})
         break
         case 'wantedd':
	if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
	if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fvideo, contextInfo: { forwardingScore: 508, isForwarded: true}})
	  media = await client.downloadAndSaveMediaMessage(encmedia)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", media)
	  buffer = await getBuffer(`https://videfikri.com/api/textmaker/wanted/?urlgbr=${anu.display_url}&text1=Dicari&text2=${tels}`)
	 client.sendMessage(from, buffer, image, {quoted:mek})
	} else {
	  client.sendMessage(from, 'Reply Imagenya!!',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
	}
	break
	case 'gtav':
	if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
	if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fvideo, contextInfo: { forwardingScore: 508, isForwarded: true}})
	  media = await client.downloadAndSaveMediaMessage(encmedia)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", media)
	  buffer = await getBuffer(`https://videfikri.com/api/textmaker/gtavposter/?urlgbr=${anu.display_url}`)
	 client.sendMessage(from, buffer, image, {quoted:mek})
	} else {
	  client.sendMessage(from, 'Reply Imagenya!!',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
	}
	break
	case 'facebookpage':
	if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
	if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fvideo, contextInfo: { forwardingScore: 508, isForwarded: true}})
	  media = await client.downloadAndSaveMediaMessage(encmedia)
	  tels = body.slice(14)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", media)
	  buffer = await getBuffer(`https://videfikri.com/api/textmaker/facebookprof/?urlgbr=${anu.display_url}&text=${tels}`)
	 client.sendMessage(from, buffer, image, {quoted:mek})
	} else {
	  client.sendMessage(from, 'Reply Imagenya!!',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
	}
	break
	case 'costumwp':
	if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fvideo, contextInfo: { forwardingScore: 508, isForwarded: true}})
	  media = await client.downloadAndSaveMediaMessage(encmedia)
	  tels = body.slice(14)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", media)
	  buffer = await getBuffer(`https://videfikri.com/api/textmaker/customwp/?urlgbr=${anu.display_url}`)
	 client.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Pinky Bot","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: 'Nih...\n\n*Follow!!* @thenay_xploit_'})
	} else {
	  client.sendMessage(from, 'Reply Imagenya!!',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
	}
	break
	case 'pantaimalam':
	if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fvideo, contextInfo: { forwardingScore: 508, isForwarded: true}})
	  media = await client.downloadAndSaveMediaMessage(encmedia)
	  tels = body.slice(14)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", media)
	  buffer = await getBuffer(`https://videfikri.com/api/textmaker/nightbeach/?urlgbr=${anu.display_url}`)
	 client.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Pinky Bot","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: 'Nih...\n\n*Follow!!* @thenay_xploit_'})
	} else {
	  client.sendMessage(from, 'Reply Imagenya!!',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
	}
	break
	case 'pencil':
	if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fvideo, contextInfo: { forwardingScore: 508, isForwarded: true}})
	  media = await client.downloadAndSaveMediaMessage(encmedia)
	  tels = body.slice(14)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", media)
	  buffer = await getBuffer(`https://videfikri.com/api/textmaker/pencil/?urlgbr=${anu.display_url}`)
	 client.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Pinky Bot","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: 'Nih...\n\n*Follow!!* @thenay_xploit_'})
	} else {
	  client.sendMessage(from, 'Reply Imagenya!!',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
	}
	break
	case 'bakar':
	if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
	  media = await client.downloadAndSaveMediaMessage(encmedia)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", media)
	  buffer = await getBuffer(`https://videfikri.com/api/textmaker/burneffect/?urlgbr=${anu.display_url}`)
	 client.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Pinky Bot","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: 'Nih...\n\n*Follow!!* @thenay_xploit_'})
	} else {
	  client.sendMessage(from, 'Reply Imagenya!!',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
	}
	break
	case 'crossgun':
	if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
	  owgi = await client.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/crossgun/?urlgbr=${anu.display_url}`)
	 client.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Pinky Bot","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: 'Nih...\n\n*Follow!!* @thenay_xploit_'})
	} else {
	  client.sendMessage(from, 'Reply Imagenya!!',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
	}
	break
	case 'mlwall':
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (args.length < 1) return reply(ind.wrongf())
				caa = body.slice(12)
				client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
				yeeu = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/mlwall?apikey=${LoLKey}&text=${caa}`)
				client.sendMessage(from, yeeu, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				break
     case 'cartoongravity':
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (args.length < 1) return reply(ind.wrongf())
				caa = body.slice(9)
				client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
				yeeu = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/cartoongravity?apikey=${LoLKey}&text=${caa}`)
				client.sendMessage(from, yeeu, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				break
	case 'pubgmaskot':
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (args.length < 1) return reply(ind.wrongf())
				caa = body.slice(10)
				client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
				yeeu = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/pubgmaskot?apikey=${LoLKey}&text=${caa}`)
				client.sendMessage(from, yeeu, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				break
		case 'hartatata3':
				 				
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (args.length < 1) return reply(ind.wrongf())
				bh = body.slice(12)
				client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
				bh = await getBuffer(`https://api.vhtear.com/hartatahta?text=${bh}&apikey=c1d162b46e634f389efa1ac715f03d03`)
				client.sendMessage(from, bh, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				break
	case 'emottoimg':
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (args.length < 1) return reply(ind.wrongf())
				caa = body.slice(11)
				client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
				yeeu = await getBuffer(`https://api.lolhuman.xyz/api/smoji/%F0%9F%98%AD?apikey=${LoLKey}`)
				client.sendMessage(from, yeeu, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				break
		/*case 'text2gif':
				 				
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (args.length < 1) return reply(ind.wrongf())
				bh = body.slice(10)
				client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
				bh = await getBuffer(`https://api.vhtear.com/textxgif?text=${bh}&apikey=c1d162b46e634f389efa1ac715f03d03`)
				client.sendMessage(from, bh, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				break*/
		case 'ttp':
                case 'ttp2':
                case 'ttp3':
                case 'ttp4':
                case 'attp':
                    if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                    if (args.length == 0) client.sendMessage(from, `Salah\nCONTOH\n${prefix + command} Pinky May`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=${LoLKey}&text=${ini_txt}`)
                    await client.sendMessage(from, ini_buffer, sticker, { quoted: mek2 })
                    break
		case 'thunder':
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (args.length < 1) return reply(ind.wrongf())
				bhaine = body.slice(9)
				client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
				anu = await fetchJson(`https://api.zeks.xyz/api/thundertext?text=${bhaine}&apikey=apivinz`)
				buffer = await getBuffer(anu.result)
				client.sendMessage(from, buffer, image, {caption: 'Nih kak udah jadi..', quoted: mek2})
				await limitAdd(sender)
				break
		case 'imgmaker':
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (args.length < 1) return reply('Url png/jpg mana kak')
				ainez = body.slice(10)
				client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
				anu = await fetchJson(`http://lolhuman.herokuapp.com/api/quotemaker?apikey=${LoLKey}&text=${ainez}`, {method: 'get'})
				buffer = await getBuffer(anu.result)
				client.sendMessage(from, buffer, image, {caption: 'Nih kak udah jadi..', quoted: mek2})
				await limitAdd(sender)
				break
		case 'calendermaker':
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (args.length < 1) return client.sendMessage(from, 'Url png/jpg mana kak',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
				ainez2 = body.slice(15)
				client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
				anu = await fetchJson(`https://api.zeks.xyz/api/calendar?img=${ainez2}&apikey=apivinz`, {method: 'get'})
				buffer = await getBuffer(anu.result)
				client.sendMessage(from, buffer, image, {caption: 'Nih kak udah jadi..', quoted: mek2})
				await limitAdd(sender)
				break
		case 'nekonime':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                                        gatauda = body.slice(8)
					client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/nekonime?apikey=${TobzKey}`, {method: 'get'})
                                        buffer = await getBuffer(anu.result)
                                        client.sendMessage(from, buffer, image, {quoted: mek2})
					await limitAdd(sender)
                                        break
		case 'husbu':
				
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				gatauda = body.slice(13)
				client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
				anu = await fetchJson(`https://tobz-api.herokuapp.com/api/husbu2?apikey=${TobzKey}`, {method: 'get'})
				buffer = await getBuffer(anu.result)
				client.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Pinky Bot","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: 'Nih...\n\n*Follow!!* @thenay_xploit_'})
				await limitAdd(sender)
				break
		case 'shota':
				
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				    try {
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/randomshota?apikey=${TobzKey}`)
						buffer = await getBuffer(res.image)
						client.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Pinky Bot","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: 'Nih...\n\n*Follow!!* @thenay_xploit_'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					await limitAdd(sender)
					break
                case 'jokerlogo':
				
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (args.length < 1) return client.sendMessage(from, 'Teks nya mana kak?',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
				tels = body.slice(10)
				client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
				anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=jokerlogo&text=${tels}&apikey=${TobzKey}`, {method: 'get'})
				buffer = await getBuffer(anu.result)
				client.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Pinky Bot","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: 'Nih...\n\n*Follow!!* @thenay_xploit_'})
				await limitAdd(sender)
				break
                case 'anime':
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				gatauda = body.slice(5)
				client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
				anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomanime?apikey=${TobzKey}`, {method: 'get'})
				buffer = await getBuffer(anu.result)
				client.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Pinky Bot","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: 'Nih...\n\n*Follow!!* @thenay_xploit_'})
				await limitAdd(sender)
				break
				case 'slowmo':
				if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				media = await client.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
				fs.unlinkSync(media)
				if (err) return reply('Error!')
				uhh = fs.readFileSync(ran)
				client.sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek2, duration:999999999999})
				fs.unlinkSync(ran)
				})
				break

				case 'tupai':
				if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek2, duration:999999999999})
						fs.unlinkSync(ran)
					})
				break
				case 'gemok':
				if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek2, duration:999999999999})
						fs.unlinkSync(ran)
					})
				break
				case 'bass':                 
				if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek2, duration:999999999999})
						fs.unlinkSync(ran)
					})
				break
				case 'tolol': 
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (args.length < 1) return client.sendMessage(from, 'Teks nya mana kak?',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
				gatauda = body.slice(6)
				client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
				buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/toloserti?apikey=${LoLKey}&name=${gatauda}`, {method: 'get'})
				client.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Pinky Bot","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: 'Nih...\n\n*Follow!!* @thenay_xploit_'})
				await limitAdd(sender)
				break
				case 'emoji2img': 
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (args.length < 1) return client.sendMessage(from, 'Emoji nya mana kak?',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
				gatauda = body.slice(11)
				client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
				buffer = await getBuffer(`https://api.zeks.xyz/api/emoji-image?apikey=apivinz&emoji=${gatauda}`, {method: 'get'})
				client.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Pinky Bot","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: 'Nih...\n\n*Follow!!* @thenay_xploit_'})
				await limitAdd(sender)
				break
                case 'memeindo':
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				gatauda = body.slice(8)
				client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
				anu = await fetchJson(`https://api.zeks.xyz/api/memeindo?apikey=apivinz`, {method: 'get'})
				buffer = await getBuffer(anu.result)
				client.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Pinky Bot","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: 'Nih...\n\n*Follow!!* @thenay_xploit_'})
				await limitAdd(sender)
				break
				case 'asupan':
               client.updatePresence(from, Presence.composing)
               if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
               if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
               client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
               data = fs.readFileSync('./lib/asupan.js')
               jsonData = JSON.parse(data)
               randIndex = Math.floor(Math.random() * jsonData.length);
               randKey = jsonData[randIndex];
               asupan = await getBuffer(randKey.result)
               client.sendMessage(from, asupan, video, { mimetype: 'video/mp4', quoted: {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"SEKEDAR UNTUK GABUT","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, caption: 'Nih kak asupan nya' })
               await limitAdd(sender)
               break
					case 'meme': 
				if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/random/meme?apikey=${LoLKey}`, {method: 'get'})
				client.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Pinky Bot","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: 'Nih...\n\n*Follow!!* @thenay_xploit_'})
				break
				case 'darkjoke': 
				 // Fix Bug By FxSx				
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				gatauda = body.slice(8)
				client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
				buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/meme/darkjoke?apikey=${LoLKey}`, {method: 'get'})
				client.sendMessage(from, buffer, image, {quoted: mek})
				await limitAdd(sender)
				break
				case 'darkjokes': 
				 // Fix Bug By FxSx				
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				gatauda = body.slice(8)
				client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
				buffer = await getBuffer(`https://api.xteam.xyz/randomimage/darkjoke?APIKEY=f5823afb6bf99782`, {method: 'get'})
				client.sendMessage(from, buffer, image, {quoted: mek})
				await limitAdd(sender)
				break
		case 'aesthetic':
				gatauda = body.slice(9)
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
				anu = await fetchJson(`https://api.zeks.xyz/api/estetikpic?apikey=apivinz`, {method: 'get'})
				buffer = await getBuffer(anu.result.result)
				client.sendMessage(from, buffer, image, {quoted: mek2, caption: 'Nih aestheticnya kak...'})
				await limitAdd(sender)
				break
		case 'darklogo': 
		//Case By FxSx
				gatauda = body.slice(9)
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (args.length < 1) return reply('Teksnya mana um')
				client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
				buffer = await getBuffer(`https://api.xteam.xyz/textpro/metaldarkgold?text=${gatauda}&APIKEY=f5823afb6bf99782`, {method: 'get'})
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih Dah Jadi...\n\n*Follow!!* @thenay_xploit_'})
				await limitAdd(sender)
				break
				case 'ballon':
				//Case By FxSx
				gatauda = body.slice(8)
				if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (args.length < 1) return reply('Teksnya mana um')
				client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
				buffer = await getBuffer(`https://api.xteam.xyz/textpro/purplefoilballon?text=${gatauda}&APIKEY=f5823afb6bf99782`, {method: 'get'})
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih Dah Jadi...\n\n*Follow!!* @thenay_xploit_'})
				await limitAdd(sender)
				break
		case 'gamelogo': 
				gatauda = body.slice(9)
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (args.length < 1) return reply('Teksnya mana um')
				client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
				buffer = await getBuffer(`https://api.vhtear.com/gamelogo?text=${gatauda}&apikey=c1d162b46e634f389efa1ac715f03d03`, {method: 'get'})
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih Dah Jadi...\n\n*Follow!!* @thenay_xploit_'})
				await limitAdd(sender)
				break
		case 'pornlogo': 
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					var gh = body.slice(10)
					var gbl7 = gh.split("/")[0];
					var gbl8 = gh.split("/")[1];
				if (args.length < 1) return reply('Teksnya mana um')
				client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
				buffer = await getBuffer(`https://api.vhtear.com/pornlogo?text1=${gbl7}&text2=${gbl8}&apikey=c1d162b46e634f389efa1ac715f03d03`, {method: 'get'})
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih Dah Jadi...\n\n*Follow!!* @thenay_xploit_'})
				await limitAdd(sender)
				break
				case 'joox':
				   if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				   if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/jooxplay?apikey=${LoLKey}&query=${query}`)
                    get_result = get_result.result
                    cuy = `
╭─「 *JOOX PLAY* 」
${fxsx} Judul: *${get_result.info.song}*
${fxsx} Artis: *${get_result.info.singer}*
${fxsx} Album: *${get_result.info.album}*
${fxsx} Durasi: ${get_result.info.duration}
${fxsx} Tipe: *${command}*
╰──────────`
                    thumbnail = await getBuffer(get_result.image)
                    await client.sendMessage(from, thumbnail, image, { quoted: mek, caption: cuy, contextInfo: { forwardingScore: 1, isForwarded: true} })
                    get_audio = await getBuffer(get_result.audio[0].link)
                    await client.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.info.song}.mp3`, quoted: mek2, duration: 99999999999, contextInfo: { forwardingScore: 508, isForwarded: true, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')}})
                    break
          case 'play2':
		         if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				 if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} Melukis Senja`)
                    query = body.slice(9)
                    anu = await fetchJson(`https://videfikri.com/api/ytplay/?query=${query}`)
                    if (anu.error) return reply(anu.error)
				    infomp3 = `*Lagu Ditemukan!!!*\nJudul : ${anu.result.title}\nSource : ${anu.result.source}\nUkuran : ${anu.result.size}\n\n*TUNGGU SEBENTAR LAGI DIKIRIM MOHON JANGAN SPAM YA SAYANG*`
			    	buffer = await getBuffer(anu.result.thumbnail)
				    client.sendMessage(from, buffer, image, {quoted: mek2, caption: infomp3})
			    	lagu = await getBuffer(anu.result.url_audio)
				    client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: fvideo})
			    	await limitAdd(sender)
			    	break
         case 'play':
                if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                if (args.length == 0) return reply(`Contoh: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytplay?apikey=${LoLKey}&query=${query}`)
                    get_result = get_result.result
                    get_info = get_result.info
                    ini_txt = `Judul : ${get_info.title}\n`
                    ini_txt += `Upload : ${get_info.uploader}\n`
                    ini_txt += `Durasi : ${get_info.duration}\n`
                    ini_txt += `Viewers : ${get_info.view}\n`
                    ini_txt += `Like : ${get_info.like}\n`
                    ini_txt += `Dislike : ${get_info.dislike}\n`
                    ini_txt += `Description :\n ${get_info.description}\n`
                    buffer = await getBuffer(get_info.thumbnail)
                    client.sendMessage(from, buffer, image, {quoted: mek2, caption: ini_txt})
                    get_audio = await getBuffer(get_result.audio[3].link)
                    client.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_info.title}.mp3`, quoted: fgif })
                    break
		 case 'limit':
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				checkLimit(sender)
				break
		 case 'vinta':
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (args.length < 1) return reply(ind.wrongf())
				vin = body.slice(7)
				client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
				vintage = await getBuffer(`https://m.arugaz.my.id/api/textpro/realvintage?text=${vin}`)
				client.sendMessage(from, vintage, image, {caption: `Nih kak ${vin}`, quoted: mek2})
				await limitAdd(sender)
				break
                case '1cak':
				    try {
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					    if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					    if (!isGroup) return reply(ind.groupo())
					    if (!isNsfw) return reply(ind.nsfwoff())
						res = await fetchJson(`https://st4rz.herokuapp.com/api/1cak`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek2, caption: 'Nih Kak udah Jadi'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(ind.wrongf())
					}
					await limitAdd(sender)
					break
                case 'animequotes':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/quotesnime/random`, {method: 'get'})
					reply(anu.data.quote)
					await limitAdd(sender)
					break	
                case 'twichquotes':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/twichquote`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break	
                case 'faktaunik': // Fixed By Yogiツ & FxSx
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/random/faktaunik?apikey=${LoLKey}`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break		
		case 'quotes':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					data = await fetchJson(`https://api.shizukaa.xyz/api/randomquote?apikey=itsmeiky633`)
					cop = `Quotes : _${data.quotes}_\n\nAuthor : _${data.author}_`
					reply(cop)
					await limitAdd(sender)
					break
		case 'covidindo': 
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					data = await fetchJson(`https://videfikri.com/api/covidindo/`)
					hasil = `Positif : ${data.result.positif}\nSembuh : ${data.result.sembuh}\nMeninggal : ${data.result.meninggal}\nDirawat : ${data.result.dalam_perawatan}`
					reply(hasil)
					await limitAdd(sender)
					break	
		case 'infonomor':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if (args.length < 1) return reply(`Masukan Nomor\nContoh : ${prefix}infonomor 0812345678`)
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infonomor?no=${body.slice(11)}`)
					if (data.error) return reply(data.error)
					if (data.result) return reply(data.result)
					hasil = `╠➥ internasional : ${data.international}\n╠➥ nomor : ${data.nomor}\n╠➥ operator : ${data.op}`
					reply(hasil)
					await limitAdd(sender)
					break 
		case 'infogempa':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/infogempa?apikey=${TobzKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer= await getBuffer(anu.map)
					hasil = `*Potensi*\n${anu.potensi}\n*Lokasi*\n${anu.lokasi}\n*Magnitude*\n${anu.magnitude}\n*Koordinat*\n${anu.koordinat}\n*Kedalaman*\n${anu.kedalaman}\n*Waktu*\n${anu.waktu}\n*Map*\n${anu.map}`
					client.sendMessage(from, buffer, image, {quoted: mek, caption: hasil})
					await limitAdd(sender)
					break
		case 'infocuaca':
					tels = body.slice(11)
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/cuaca?wilayah=${tels}&apikey=${TobzKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					hasil = `*Tempat* : ${anu.result.tempat}\n*Cuaca* : ${anu.result.cuaca}\n*Angin* : ${anu.result.angin}\n*Suhu* : ${anu.result.suhu}\n*Kelembapan* : ${anu.result.kelembapan}`
					client.sendMessage(from, hasil, MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					await limitAdd(sender)
					break
		case 'kurs': 
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					anu = await fetchJson(`https://api.vhtear.com/kurs&apikey=c1d162b46e634f389efa1ac715f03d03`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					hasil = `\n*==========*\n*USD Jual* : ${anu.result.Data.USD.Jual}\n*USD Beli* : ${anu.result.Data.USD.Beli}\n*==========*\n*SGD Jual* : ${anu.result.Data.SGD.Jual}\n*SGD Beli* : ${anu.result.Data.SGD.Beli}\n*==========*\n*EUR Jual* : ${anu.result.Data.EUR.Jual}\n*EUR Beli* : ${anu.result.Data.EUR.Beli}\n*==========*\n*AUD Jual* : ${anu.result.Data.AUD.Jual}\n*AUD Beli* : ${anu.result.Data.AUD.Beli}\n*==========*\n*DKK Jual* : ${anu.result.Data.DKK.Jual}\n*DKK Beli* : ${anu.result.Data.DKK.Beli}\n*==========*\n*SEK Jual* : ${anu.result.Data.SEK.Jual}\n*SEK Beli* : ${anu.result.Data.SEK.Beli}\n*==========*\n*CAD Jual* : ${anu.result.Data.CAD.Jual}\n*CAD Beli* : ${anu.result.Data.CAD.Beli}\n*==========*\n*CHF Jual* : ${anu.result.Data.CHF.Jual}\n*CHF Beli* : ${anu.result.Data.CHF.Beli}\n*==========*\n*NZD Jual* : ${anu.result.Data.NZD.Jual}\n*NZD Beli* : ${anu.result.Data.NZD.Beli}\n*==========*\n*GBP Jual* : ${anu.result.Data.GBP.Jual}\n*GBP Beli* : ${anu.result.Data.GBP.Beli}\n*==========*\n*HKD Jual* : ${anu.result.Data.HKD.Jual}\n*HKD Beli* : ${anu.result.Data.HKD.Beli}\n*==========*\n*JPY Jual* : ${anu.result.Data.JPY.Jual}\n*JPY Beli* : ${anu.result.Data.JPY.Beli}\n*==========*\n*SAR Jual* : ${anu.result.Data.SAR.Jual}\n*SAR Beli* : ${anu.result.Data.SAR.Beli}\n*==========*\n*CNH Jual* : ${anu.result.Data.CNH.Jual}\n*CNH Beli* : ${anu.result.Data.CNH.Beli}\n*==========*\n*MYR Jual* : ${anu.result.Data.MYR.Jual}\n*MYR Beli* : ${anu.result.Data.MYR.Beli}\n*==========*\n*THB Jual* : ${anu.result.Data.THB.Jual}\n*THB Beli* : ${anu.result.Data.THB.Beli}\n*==========*\n`
					client.sendMessage(from, hasil, MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					await limitAdd(sender)
					break
		case 'githubstalk':
					if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/github/${body.slice(13)}?apikey=${LoLKey}`, {method: 'get'})
					get_result = get_result.result
					txt = `Full : ${get_result.name}\n`
					txt += `Followers : ${get_result.followers}\n`
					txt += `Following : ${get_result.following}\n`
					txt += `Publick : ${get_result.public_repos}\n`
					txt += `Public Gits : ${get_result.public_gists}\n`
					txt += `User : ${get_result.user}\n`
					txt += `Compi : ${get_result.company}\n`
					txt += `Lokasi : ${get_result.location}\n`
					txt += `Email : ${get_result.email}\n`
					txt += `Bio : ${get_result.bio}\n`
					buffer = await getBuffer(get_result.avatar)
					client.sendMessage(from, buffer, image, {quoted: mek2, caption: txt})
					break
                case 'slap':
					kapankah = body.slice(1)
					if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				    if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					const slap =['anjing','babi lu','anak anjing','udah tolol nub Lagi','muka lo kek monyet','udah jomblo sendirian lagi dirumah tolol','so so an mau punya pacar muka aja kek monyet lepass dari kandang','ganteng doang di toxic aja dibilang baperan','pantek kau','bangsat kau','ku entod kalian nangis kau','anjing lu semua','lihat anak anjing lagi baca','ganteng doang jemput cewe dipanggang','kamu cantik beb bullshit anjing cowo buaya','anak setan','puki lu','anjing ngajak gelud','sama hantu takut cupu bangsat','cupu cupu aja gausah bacot','bangsat lu semua','bocah lu semua bangsat','3 Hari Lagi']
					const ple = slap[Math.floor(Math.random() * slap.length)]
					pod = await getBuffer(`https://media.giphy.com/media/S8507sBJm1598XnsgD/source.gif`)
					client.sendMessage(from, pod, image, { quoted: mek2, caption: '*Toxic*\n\n'+ ple })
					await limitAdd(sender)
					break
		case 'tampar':
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					buffer = await getBuffer('https://media.giphy.com/media/S8507sBJm1598XnsgD/source.gif', {method: 'get'})
					exec(`wget ${buffer.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek2})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
                case 'tribunews':
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/tribunews?apikey=apivinz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Judul* : ${i.title}\n*Time* : ${i.time}\n*Link* : ${i.url}\n*Keterangan* : ${i.ket}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
			    case 'liputan6': 
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/liputan6?apikey=apivinz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Judul* : ${i.title}\n*Url* : ${i.url}\n*Keterangan* : ${i.ket}\n*Category* : ${i.category}\n*Time* : ${i.time}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
				case 'foxnews': 
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/foxnews?apikey=apivinz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Judul* : ${i.title}\n*Url* : ${i.url}\n*Country* : ${i.country}\n*Content* : ${i.content}\n*Time* : ${i.time}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
				case 'nickff': 
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/nickepep?apikey=apivinz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Nick* : ${i}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
				case 'newsinfo':
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`http://lolhuman.herokuapp.com/api/newsinfo?apikey=${LoLKey}`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Source:* : ${i.source.name}\n*Author* : ${i.author}\n*Title* : ${i.title}\n*Description* : ${i.description}\n*Url* : ${i.url}\n*Published At* : ${i.publishedAt}\n*Content* : ${i.content}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
				case 'film': 	
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/film/2?q=${body.slice(6)}&apikey=apivinz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Title:* : ${i.title}\n*Url* : ${i.url}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
				case 'film2': 	
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/film/2?q=${body.slice(6)}&apikey=apivinz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Title:* : ${i.title}\n*Url* : ${i.url}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
					case 'searchfilm':
               
                pshh = `${body.slice(12)}`
                  anu = await fetchJson(`https://api.zeks.xyz/api/film/2?q=${pshh}&apikey=apivinz`, {method: 'get'})
                  puree = '======================\n'
                  for (let plyll of anu.result){
                  puree += `• *Judul:* ${plyll.title}\n• *Link:* ${plyll.url}\n=====================\n`
                  }
                  reply(puree.trim())
                  break
                case 'beritahoax':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infohoax`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Gambar* : ${i.image}\n*Title* : ${i.title}\n*link* : ${i.link}\n*tag* : ${i.tag}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break 
		case 'trendtwit':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					data = await fetchJson(`https://api.vhtear.com/trendtwitter?country=indonesia&apikey=c1d162b46e634f389efa1ac715f03d03`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Hastag* : ${i.hastag}\n*link* : ${i.link}\n*rank* : ${i.rank}\n*Tweet* : ${i.tweet}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
		case 'setppbot':
					if (!isOwner) return client.sendMessage(from, 'Only Admin Bot',MessageType.text, { quoted: ftroli, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					client.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(enmedia)
					await client.updateProfilePicture(botNumber, media)
					client.sendMessage(from, 'Makasih profile barunya owner😉',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					break 
		case 'setppbott':
				if (!isAdmin) return client.sendMessage(from, 'Only Admin Bot',MessageType.text, { quoted: ftroli, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					client.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(enmedia)
					await client.updateProfilePicture(botNumber, media)
					client.sendMessage(from, 'Makasih Profile Barunya Wakil Owner😉',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					break 
		case 'brainly':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					brien = body.slice(9)
					brainly(`${brien}`).then(res => {
					teks = '❉───────────❉\n'
					for (let Y of res.data) {
						teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉───────────❉\n`
					}
					client.sendMessage(from, teks, text, {quoted: mek2, detectLinks: false})
					console.log(res)
					})
					await limitAdd(sender)
					break 
		case 'bcgc':
					if (!isOwner) return client.sendMessage(from, 'Only Admin Bot',MessageType.text, { quoted: ftroli, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if (args.length < 1) return client.sendMessage(from, 'Text Nya Mana Owner 🙄',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')}})
					anu = await groupMembers 
					tagss = mek.participant
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buffer = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buffer, image, {caption: `*「 BC GROUP 」*\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`})
						}
						reply('')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 BROADCAST GROUP 」*\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`)
						}
						client.sendMessage(from, 'Sukses broadcast group',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					}
					break 
		case 'img2':
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://fdciabdul.tech/api/pinterest/?keyword=${body.slice(11)}`, {method: 'get'})
					client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: fgif})
					await limitAdd(sender)
					break 
		   case 'pinterest':
                    if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				    if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					client.updatePresence(from, Presence.composing) 
					client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    query = args.join(" ")
                    pinky_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${LoLKey}&query=${query}`)
                    nuy_url = pinky_url.result
                    buffer = await getBuffer(nuy_url)
                    client.sendMessage(from, buffer, image, { quoted: fgif })
                    break
           case 'img':
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} Cilok`)
                    client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fvideo, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    query = args.join(" ")
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${LoLKey}&query=${query}`)
                    ini_url = ini_url.result
                    buffer = await getBuffer(ini_url)
                    client.sendMessage(from, buffer, image, { quoted: fgif })
                    break
           case 'glitchtext':
                    if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
			        if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					var gh = body.slice(12)
					var gli = gh.split("/")[0];
					var tch = gh.split("/")[1];
					if (args.length < 1) return client.sendMessage(from, `Contoh : ${prefix}glitchtext Nuy/Cans`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
					buffer = await getBuffer(`https://api.zeks.xyz/api/gtext?text1=${gli}&text2=${tch}&apikey=apivinz`)
					client.sendMessage(from, buffer, image, {quoted: mek2})
					await limitAdd(sender)
				break
           case 'waifu':
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})			        
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/waifu?apikey=${TobzKey}`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek2 })
					await limitAdd(sender) 
					break
           case 'randombts':
			     if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					anu = await fetchJson(`https://api.shizukaa.xyz/api/randombts?apikey=itsmeiky633`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek2 })
					await limitAdd(sender) 
					break
		   case 'randomkpop':
			     if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomkpop?apikey=${TobzKey}`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek2})
					await limitAdd(sender) 
					break
					case 'cogan2':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                                        gatauda = body.slice(7)
					client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
                                        anu = await fetchJson(`https://api.lolhuman.xyz/api/random/cogan?apikey=${LoLKey}`, {method: 'get'})
                                        buffer = await getBuffer(anu.result)
                                        client.sendMessage(from, buffer, image, {quoted: mek2})
					await limitAdd(sender)
                                        break
		 case 'cogan':
			        
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					anu = await fetchJson(`https://api.lolhuman.xyz/api/random/cogan?apikey=${LoLKey}`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek2 })
					await limitAdd(sender) 
					break
					
           case 'randomexo':
			        
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					anu = await fetchJson(`https://api.shizukaa.xyz/api/randomexo?apikey=itsmeiky633`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek2 })
					await limitAdd(sender) 
					break
           case 'blackpink':
			        
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					anu = await fetchJson(`https://api.shizukaa.xyz/api/blackpink?apikey=itsmeiky633`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek2 })
					await limitAdd(sender) 
					break
				case 'faktaunik':
                case 'katabijak':
                if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/random/${command}?apikey=${LoLKey}`)
                    reply(get_result.result)
                    break
                    case 'quotesanime':
		            if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                    quotes = await fetchJson(`http://api.lolhuman.xyz/api/random/quotesnime?apikey=${LoLKey}`)
                    quotes = quotes.result
                    quote = quotes.quote
                    char = quotes.character
                    anime = quotes.anime
                    episode = quotes.episode
                    client.sendMessage(from, `_${quote}_\n\n*${char}*\n*${anime} ${episode}*`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    break
                case 'quotesdilan':
		if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                    quotedilan = await fetchJson(`http://api.lolhuman.xyz/api/quotes/dilan?apikey=${LoLKey}`)
                    reply(quotedilan.result)
                    break
                case 'quotesimage':
		if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
		buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/random/quotesimage?apikey=${LoLKey}`)
		client.sendMessage(from, buffer, image, { quoted: mek})
		break
		         case 'babi':
			        
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                 const gshizuka = await client.getGroupMembersId(groupId)
                 let gmik = gshizuka[Math.floor(Math.random() * gshizuka.length)]
                 const mmkk = `YANG PALING BABI DISINI ADALAH @${gmik.replace(/@c.us/g, '')}`
                 client.sendTextWithMentions(dari, mmkk, id)
                 break
				case 'tebakbendera':
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tebak/bendera?apikey=${LoLKey}`, {method: 'get'})
					anu.result = anu.result.result
					jawab3 = `*Jawabannya*\n\n>${anu.result.name}`
					tebakbender = `*bendera apa ini?*\n\n>[${anu.result.flag}]`
					setTimeout( () => {
					reply(jawab3)
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					reply('_10 detik lagi_') // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					reply('_20 detik lagi_')// ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					reply('_30 detik lagi_') // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					reply(tebakbender) // ur cods
					}, 0) // 1000 = 1s,
					break 
                case 'tebakgambar': 
                    if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/gambar?apikey=${LoLKey}`)
                    get_result = get_result.result
                    ini_image = get_result.image
                    jawaban = get_result.answer
                    ini_buffer = await getBuffer(ini_image)
                    await client.sendMessage(from, ini_buffer, image, { quoted: mek, caption: "Jawab gk? Jawab lahhh, masa enggak. 30 detik cukup kan? gk cukup pulang aja" }).then(() => {
                        tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
                        fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                      sleep(30000)
                    })
                    if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
                    	                        setTimeout( () => {
					reply('_10 detik lagi_') // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					reply('_20 detik lagi_')// ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					reply('_30 detik lagi_') // ur cods
					}, 2500) // 1000 = 1s,
                        reply("Jawaban: " + jawaban)
                        delete tebakgambar[sender.split('@')[0]]
                        fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                    }
                    break
                case 'canceltebak':
                    if (!tebakgambar.hasOwnProperty(sender.split('@')[0])) return client.sendMessage(from, 'Anda tidak memiliki tebak gambar sebelumnya',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    delete tebakgambar[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                    client.sendMessage(from, 'Success mengcancel tebak gambar sebelumnya',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    break
				case 'family100':
					if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					anu = await fetchJson(`http://api.lolhuman.xyz/api/tebak/family100?apikey=${LoLKey}`, {method: 'get'})
					jawab = `*Jawabannya*\n\n>${anu.result.aswer}`
					family = `*Pertanyaan*\n\n*_${anu.result.question}_*`
					setTimeout( () => {
					reply(jawab)
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					reply('_10 detik lagi_') // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					reply('_20 detik lagi_')// ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					reply('_30 detik lagi_') // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					reply(family) // ur cods
					}, 0) // 1000 = 1s,
					break
					case 'caklontong':
					if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					anu = await fetchJson(`http://api.lolhuman.xyz/api/tebak/caklontong?apikey=${LoLKey}`, {method: 'get'})
					jawab2 = `*Jawabannya*\n\n>${anu.result.answer}`
					caklontong = `*Pertanyaan*\n\n•*_${anu.result.question}_*`
					setTimeout( () => {
					reply(jawab2)
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					reply('_10 detik lagi_') // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					reply('_20 detik lagi_')// ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					reply('_30 detik lagi_') // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					reply(caklontong) // ur cods
					}, 0) // 1000 = 1s,
					break 
		case 'spamcall':
            if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
			call = `${body.slice(11)}`
			anu = await fetchJson(`https://tobz-api.herokuapp.com/api/spamcall?no=${call}&apikey=${TobzKey}`, {method: 'get'})
			client.sendMessage(from, `${anu.result.logs}`, MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
			break  
				case 'wiki':
		if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                    if (args.length == 0) return client.sendMessage(from, `Example: ${prefix + command} Tahu`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/wiki?apikey=${LoLKey}&query=${query}`)
                    get_result = get_result.result
                    reply(get_result)
                    break
               case 'ytmp4':
		if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                    if (args.length == 0) return client.sendMessage(from, `Example: ${prefix + command} https://www.youtube.com/`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytvideo?apikey=${LoLKey}&url=${ini_link}`)
                    get_result = get_result.result
                    asu2 = `
─────────────────────
◪ *YOUTUBE DOWNLOAD*
│
└ ❏ Judul: *${get_result.title}*
    ❏ Chanel: *${get_result.uploader}*
    ❏ Durasi: ${get_result.duration}
    ❏ Viewers: *${get_result.view}*
    ❏ Tipe: *${command}*
─────────────────────`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    client.sendMessage(from, ini_buffer, image, { quoted: mek, caption: asu2, contextInfo: { forwardingScore: 2, isForwarded: true} })
                    get_audio = await getBuffer(get_result.link[0].link)
                    client.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    break
			case 'ytmp3':
		if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytaudio?apikey=${LoLKey}&url=${ini_link}`)
                    get_result = get_result.result
                    asu = `
─────────────────────
◪ *YOUTUBE DOWNLOAD*
│
└ ❏ Judul: *${get_result.title}*
    ❏ Chanel: *${get_result.uploader}*
    ❏ Durasi: ${get_result.duration}
    ❏ Viewers: *${get_result.view}*
    ❏ Tipe: *${command}*
─────────────────────`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    client.sendMessage(from, ini_buffer, image, { quoted: mek, caption: asu, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    get_audio = await getBuffer(get_result.link[3].link)
                    client.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: mek, duration: 99999999999, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    break
		case 'hilih': 
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if (args.length < 1) return client.sendMessage(from, 'kasih teks lah^_^!!!',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					anu = await fetchJson(`https://api.zeks.xyz/api/hilihmaker?text=${body.slice(7)}&apikey=apivinz`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
		case 'holoh': 
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if (args.length < 1) return client.sendMessage(from, 'kasih teks lah^_^!!!',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					anu = await fetchJson(`https://a.apimau.ga/vokal?vokal=o&teks=${body.slice(7)}`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
		case 'halah': 
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if (args.length < 1) return client.sendMessage(from, 'kasih teks lah^_^!!!',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					anu = await fetchJson(`https://a.apimau.ga/vokal?vokal=a&teks=${body.slice(7)}`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
		case 'huluh': 
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if (args.length < 1) return client.sendMessage(from, 'kasih teks lah^_^!!!',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					anu = await fetchJson(`https://a.apimau.ga/vokal?vokal=u&teks=${body.slice(7)}`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
		case 'heleh': 
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if (args.length < 1) return client.sendMessage(from, 'kasih teks lah^_^!!!',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					anu = await fetchJson(`https://a.apimau.ga/vokal?vokal=e&teks=${body.slice(7)}`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
		case 'hurufterbalik': 
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					gatauda = body.slice(14)
					anu = await fetchJson(`https://videfikri.com/api/hurufterbalik/?query=${gatauda}`, {method: 'get'})
					reply(anu.result.kata)
					await limitAdd(sender)
					break
		case 'lirik': 
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					teks = body.slice(6)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/lirik?q=${teks}&apikey=${TobzKey}`, {method: 'get'})
					reply('Lirik dari lagu '+teks+' adalah :\n\n'+anu.result.lirik)
					await limitAdd(sender)
					break
		case 'alay':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if (args.length < 1) return client.sendMessage(from, 'kasih teks lah^_^!!!',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					data = await fetchJson(`https://api.zeks.xyz/api/alaymaker?kata=${body.slice(6)}&apikey=apivinz`)
					reply(data.result)
				        await limitAdd(sender)
					break
		case 'fml':	// Fixed By Yogiツ & FxSx
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					data = await fetchJson(`https://tobz-api.herokuapp.com/api/randomfmylife?apikey=${TobzKey}`)
					hasil = data.result
					reply(hasil)
					await limitAdd(sender)
					break	
		case 'chord':
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if (args.length < 1) return client.sendMessage(from, 'Judul lagunya mana kak',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					tels = body.slice(7)					
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/chord?q=${tels}&apikey=${TobzKey}`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
		case 'katacinta':
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					gatauda = body.slice(8)
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/katacinta`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
		case 'pantun':
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					gatauda = body.slice(8)					
					anu = await fetchJson(`https://api.zeks.xyz/api/pantun?apikey=apivinz`, {method: 'get'})
					reply(anu.result.pantun)
					await limitAdd(sender)
					break
		case 'cersex': 
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					gatauda = body.slice(8)					
					anu = await fetchJson(`https://api.vhtear.com/cerita_sex&apikey=c1d162b46e634f389efa1ac715f03d03`, {method: 'get'})
					reply(anu.result.cerita)
					await limitAdd(sender)
					break
		case 'jadwaltv':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					gatauda = body.slice(10)					
					anu = await fetchJson(`https://api.zeks.xyz/api/jadwaltv?channel=${gatauda}&apikey=apivinz`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
		case 'katadilan': 
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					anu = await fetchJson(`https://api.shizukaa.xyz/api/bacotandilan?apikey=itsmeiky633`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
		case 'katabucin': 
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					anu = await fetchJson(`https://api.shizukaa.xyz/api/bucin?apikey=itsmeiky633`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
		case 'katabucin2': 
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					anu = await fetchJson(`https://api.shizukaa.xyz/api/bucin?apikey=itsmeiky633`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
					case 'wame':
       if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
       if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
          client.updatePresence(from, Presence.composing)
          options = {
             text: `By PinkyBot : *wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
              contextInfo: {
              mentionedJid: [sender]
                }
                  }
            client.sendMessage(from, options, MessageType.text, {quoted: mek2})
           breaki
		case 'cerpen': 
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/cerpen?apikey=${LoLKey}`, {method: 'get'})
					reply(anu.result.cerpen)
					await limitAdd(sender)
					break
		case 'quotes': 
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/random/quotes?apikey=${LoLKey}`, {method: 'get'})
					reply(anu.result.quote)
					await limitAdd(sender)
					break
		case 'bacotanhacker': 
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					anu = await fetchJson(`https://api.shizukaa.xyz/api/bacotanhacker?apikey=itsmeiky633`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
		case 'quotedoraemon': 
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					anu = await fetchJson(`https://api.shizukaa.xyz/api/quotedoraemon?apikey=itsmeiky633`, {method: 'get'})
					reply(anu.result.quote)
					await limitAdd(sender)
					break
		case 'resepmasakan':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/resep?key=${body.slice(14)}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.thumb_item)
					hasil = `*title* \n ${anu.title} *item_name* \n ${anu.item_name} *ingredient* \n${anu.ingredient} *step* \n${anu.step}`
					client.sendMessage(from, buffer, image, {quoted: mek, caption: hasil})
					await limitAdd(sender)
					break 
		case 'igstalk':
					if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/stalkig/${body.slice(9)}?apikey=${LoLKey}`, {method: 'get'})
					get_result = get_result.result
					txt = `Link : https://www.instagram.com/${get_result.username}\n`
					txt += `Full : ${get_result.fullname}\n`
					txt += `Post : ${get_result.posts}\n`
					txt += `Followers : ${get_result.followers}\n`
					txt += `Following : ${get_result.following}\n`
					txt += `Bio : ${get_result.bio}\n`
					buffer = await getBuffer(get_result.photo_profile)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: txt})
					break
					case 'tkstalk':
			if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
			username = args[0]
					get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/stalktiktok/${username}?apikey=${LoLKey}`, {method: 'get'})
					get_result = get_result.result
					txt = `Link : ${get_result.username}\n`
					txt += `Bio : ${get_result.bio}\n`
					txt += `Followers : ${get_result.followers}\n`
					txt += `Following : ${get_result.followings}\n`
					txt += `Likes : ${get_result.likes}\n`
					txt += `Vidio : ${get_result.video}\n`
					buffer = await getBuffer(get_result.user_picture)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: txt})
					break
		case 'infofilm': 
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					ige = body.slice(10)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/film2?q=${ige}&apikey=${TobzKey}`)
					buffer7 = await getBuffer(anu.result.thumbnail)
					capt = `➸ Judul : ${anu.result.judul}\n*➸ Bahasa :* ${anu.result.bahasa}\n*➸ Negara :* ${anu.result.negara}\n*➸ Aktor :* ${anu.result.aktor}\n*➸ Boxoffice :* ${anu.result.boxoffice}\n*➸ Dirilis :* ${anu.result.dirilis}\n*➸ Durasi :* ${anu.result.durasi}\n*➸ Katagori :* ${anu.result.kategori}\n*➸ Metascore :* ${anu.result.metascore}\n*➸ Vote :* ${anu.result.voting_imdb}\n*➸ Negara :* ${anu.result.negara}\n*➸ Sinopsis :* ${anu.result.sinopsis}\n*➸ Penghargaan :* ${anu.result.penghargaan}`
					client.sendMessage(from, buffer7, image, {quoted: mek, caption: capt})
					await limitAdd(sender)
					break
		case 'infofilm2': 
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					ige = body.slice(10)
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/lk21?apikey=${LoLKey}&query=${ige}`)
					buffer7 = await getBuffer(anu.result.thumbnail)
					capt = `➸ Nama Film : ${anu.result.title}\n*➸ Link :* ${anu.result.link}\n*➸ Genre :* ${anu.result.genre}\n*➸ Views :* ${anu.result.views}\n*➸ Durasi :* ${anu.result.duration}\n*➸ Dirilis :* ${anu.result.tahun}\n*➸ Rating :* ${anu.result.rating}\n*➸ Description :* ${anu.result.desc}\n*➸ Aktor :* ${anu.result.actors}\n*➸ Location :* ${anu.result.location}\n*➸ Date Release :* ${anu.result.date_release}\n*➸ Language :* ${anu.result.language}\n*➸ Link Download :* ${anu.result.link_dl}`
					client.sendMessage(from, buffer7, image, {quoted: mek, caption: capt})
					await limitAdd(sender)
					break
		case 'heroml':  
		       if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
			    if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
				ige = body.slice(8)
				anu = await fetchJson(`http://api.hurtzcrafter.xyz/herodetail?hero=${ige}`) 
				buffer7 = await getBuffer(anu.result.image)
				teks = `Hasil\n*Hero Name*: ${anu.result.hero_name}\n*Quotes Hero*: ${anu.result.entrance_quotes}\n*Hero Feature*: ${anu.result.hero_feature}\n*Items*: ${anu.result.items}\n*Character*: ${anu.result.character.chara}\n*Movement Speed*: ${anu.result.attributes.movement_speed}\n*Physical Attack*: ${anu.result.attributes.physical_attack}\n*Magic Power*: ${anu.result.attributes.magic_power}\n*Attack Speed*: ${anu.result.attributes.attack_speed}\n*Physical Defense*: ${anu.result.attributes.physical_defense}\n*Basic Atk Crit Rate*: ${anu.result.attributes.basic_atk_crit_rate}\n*HP*: ${anu.result.attributes.hp}\n*Mana*: ${anu.result.attributes.mana}\n*ability_crit_rate*: ${anu.result.attributes.ability_crit_rate}\n*hp_regen*: ${anu.result.attributes.hp_regen}\n*mana_regen*: ${anu.result.attributes.mana_regen}\n*Price Hero BP*: ${anu.result.price.battle_point}\n*Price Hero DM*: ${anu.result.price.diamond}\n*Price Hero FRAG*: ${anu.result.price.hero_fragment}\n*Role*: ${anu.result.role}\n*Durability*: ${anu.result.skill.durability}\n*offense*: ${anu.result.skill.offense}\n*skill_effects*: ${anu.result.skill.skill_effects}\n*difficulty*: ${anu.result.skill.difficulty}\n*speciality*: ${anu.result.speciality}\n*laning_recommendation*: ${anu.result.laning_recommendation}\n*release_date*: ${anu.result.release_date}`
				client.sendMessage(from, buffer7, image, {quoted: mek, caption: teks})
				await limitAdd(sender)
				break
				case 'igvideo': 
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (args.length < 1) return client.sendMessage(from, 'Urlnya mana kak?',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
				if (!isUrl(args[0]) && !args[0].includes('www.instagram.com')) return reply(mess.error.lv)
					 client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					 ige = body.slice(9)
                     anu = await fetchJson(`http://lolhuman.herokuapp.com/api/instagram?apikey=${LoLKey}&url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result)
                    client.sendMessage(from, buffer, video, {quoted: mek2})
				    break
				case 'igpost': 
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (args.length < 1) return client.sendMessage(from, 'Urlnya mana kak?',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
				if (!isUrl(args[0]) && !args[0].includes('www.instagram.com')) return reply(mess.error.lv)
					 client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					 ige = body.slice(8)
                     anu = await fetchJson(`http://lolhuman.herokuapp.com/api/instagram?apikey=${LoLKey}&url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result)
                    client.sendMessage(from, buffer, image, {quoted: mek2})
				    break
				case 'igtv': 
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (args.length < 1) return client.sendMessage(from, 'Urlnya mana kak?',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
				if (!isUrl(args[0]) && !args[0].includes('www.instagram.com')) return reply(mess.error.lv)
					 client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					 ige = body.slice(6)
                     anu = await fetchJson(`http://lolhuman.herokuapp.com/api/instagram?apikey=${LoLKey}&url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result)
                    client.sendMessage(from, buffer, video, {quoted: mek2})
				    break
				case 'tiktok': 
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (args.length < 1) return reply('Urlnya mana sayang?')
				if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.error.lv)
					client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					pinky = args[0]
                    anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tiktok?apikey=${LoLKey}&url=${pinky}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result.link)
                    client.sendMessage(from, buffer, video, {quoted: fgif})
				    break
                 case 'tiktokmusic':
                   if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
			    	if (args.length < 1) return reply('Urlnya mana sayang?')
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} https://vt.tiktok.com/....`)
                   client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
                     ini_link = args[0]
                    get_audio = await getBuffer(`http://api.lolhuman.xyz/api/tiktokmusic?apikey=${LoLKey}&url=${ini_link}`)
                    client.sendMessage(from, get_audio, audio, {mimetype: 'audio/mp4', quoted: fgif})
                    break
				 case 'ccgenerator': 
					if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                   client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
				   anu = await fetchJson(`https://videfikri.com/api/ccgenerator/`, {method:'get'})
				   teks = `*Hasil CCGenerator*\n*♻️NUMBER*: ${anu.result.card.number}\n*♻️TYPE*: ${anu.result.card.network}\n*♻️CVV*: ${anu.result.card.cvv}\n*♻️PIN*: ${anu.result.card.pin}\n*♻️MONEY*: ${anu.result.card.balance}\n*♻️EXPIRE-MONTH*: *Custom*\n*♻️EXPIRE-YEAR*: *Custume*\n*♻️COUTRY*: ${anu.result.customer.country}\n*♻️NAME*: ${anu.result.customer.name}\n*♻️ADDRESS*: ${anu.result.customer.address}`
				   client.sendMessage(from, teks, MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
				   await limitAdd(sender)
				   break
				 case 'ceritahorror': 
					if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                   client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
				   anu = await fetchJson(`https://naufalhoster.xyz/tools/story_horror?apikey=IgygEb-7vT4iB-h2zOyi`, {method:'get'})
				   teks = `*Hasil Cerita*\n*Nama Cerita*: ${anu.result.title}\n*Cerita*: ${anu.result.story}`
				   client.sendMessage(from, teks, MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
				   await limitAdd(sender)
				   break
		case 'setreply':
					if (!isOwner) return client.sendMessage(from, 'Only Admin Bot',MessageType.text, { quoted: ftroli, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					client.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					cr = body.slice(10)
					client.sendMessage(from, `reply berhasil di ubah menjadi : ${cr}`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					await limitAdd(sender)
					break 
		case 'setreplyy':
				if (!isAdmin) return client.sendMessage(from, 'Only Admin Bot',MessageType.text, { quoted: ftroli, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					client.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					cr = body.slice(10)
					client.sendMessage(from, `reply berhasil di ubah menjadi : ${cr}`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					await limitAdd(sender)
					break 
		case 'grouplist':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					client.updatePresence(from, Presence.composing) 
					teks = `\`\`\`Ini adalah list group pinky :\n\n\`\`\``
					no = 0
					for (let hehehe of groupId) {
						no += 1
						teks += `\`\`\`[${no.toString()}]\`\`\` @${hehehe.split('@')[0]}\n`
					}
					teks += `\n\`\`\`Total grup : ${groupId.length}\`\`\``
					client.sendMessage(from, teks.trim(), extendedText, {quoted: fgclink})
					break
		//daftar 
		case 'daftar':
                			if (isRegistered) return  reply(ind.rediregis())
                			if (!q.includes('|')) return  reply(ind.wrongf())
                			const namaUser = q.substring(0, q.indexOf('|') - 0)
                			const umurUser = q.substring(q.lastIndexOf('|') + 1)
                			const serialUser = createSerial(20)
                			if(isNaN(umurUser)) return await reply('Umur harus berupa angka!!')
                			if (namaUser.length >= 30) return reply(`why is your name so long it's a name or a train`)
                			if (umurUser > 40) return reply(`your age is too  old maximum 40 years`)
                			if (umurUser < 12) return reply(`your age is too young minimum 12 years`)
                					try {
								ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@c.us`)
								} catch {
								ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
							daftarimg = await getBuffer(ppimg)
                					veri = sender
                					if (isGroup) {
                    			addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    			await client.sendMessage(from, daftarimg, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Pinky Bot","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: ind.registered(namaUser, umurUser, serialUser, time, sender)})
                    			addATM(sender)
                    			addLevelingId(sender)
                    			checkLimit(sender)
                    			console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                			} else {
                    			addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    			await client.sendMessage(from, daftarimg, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"Pinky Bot","currencyCode":"IDR","priceAmount1000":"9999","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: ind.registered(namaUser, umurUser, serialUser, time, sender)})
                    			addATM(sender)
                    			addLevelingId(sender)
                    			checkLimit(sender)
                    			console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
                			}
				        break
		case 'mining':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if (!isEventon) return reply(`Maaf ${pushname} event mining tidak di aktifkan oleh owner`)
					if (isOwner | isAdmin | isPremium) {
					const one = Math.ceil(Math.random() * 100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000)
					addLevelingXp(sender, one)
					await reply(`Kamu bagian dari prabayar, aku akan berikan sebanyak *${one}Xp* untuk anda`)
                 					     }else{
					const mining = Math.ceil(Math.random() * 1000000000000000000000000)
					addLevelingXp(sender, mining)
					await reply(`*Selamat* ${pushname} kamu mendapatkan *${mining}Xp*`)
					}
					await limitAdd(sender)
					break
		case 'bisakah':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					bisakah = body.slice(1)
					const bisa =['Bisa','Tidak Bisa','Coba Ulangi']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					client.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					await limitAdd(sender)
					break
		case 'kapankah':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					kapankah = body.slice(1)
					const kapan =['Besok','Lusa','1 Hari Lagi','2 Hari Lagi','3 Hari Lagi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','7 Bulan Lagi','8 Bulan Lagi','9 Bulan Lagi','10 Bulan Lagi','11 Bulan Lagi','1 Tahun lagi','2 Tahun lagi','3 Tahun lag0i','4 Tahun lagi','5 Tahun lagi','6 Tahun lagi','7 Tahun lagi','8 Tahun lagi','9 Tahun lagi','10 Tahun lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					client.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					await limitAdd(sender)
					break
		case 'apakah':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					apakah = body.slice(1)
					const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					client.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					await limitAdd(sender)
					break
		case 'bagaimanakah':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					bagaimanakah = body.slice(1)
					const bagai =['Kita Kenal?','Nanya Terus deh','Tidak Tahu','Coba Ulangi','Cari Aja Sendiri','Kurang Tahu','Mana Saya Tahu, Saya kan ikan']
					const mana = bagai[Math.floor(Math.random() * bagai.length)]
					client.sendMessage(from, 'Pertanyaan : *'+bagaimanakah+'*\n\nJawaban : '+ mana, MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					await limitAdd(sender)
					break
		case 'rate':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					rate = body.slice(1)
					const ra =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
					client.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					await limitAdd(sender)
					break
                case 'sangecek':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					sange = body.slice(1)
					const sang =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const nge = sang[Math.floor(Math.random() * sang.length)]
					client.sendMessage(from, 'Pertanyaan : *'+sange+'*\n\nJawaban : '+ nge+'%', MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					await limitAdd(sender)
					break
                case 'gaycek':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					gayy = body.slice(1)
					const gay =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const yag = gay[Math.floor(Math.random() * gay.length)]
					client.sendMessage(from, 'Pertanyaan : *'+gayy+'*\n\nJawaban : '+ yag+'%', MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					await limitAdd(sender)
					break
                case 'lesbicek':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					lesbii = body.slice(1)
					const lesbi =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const bi = lesbi[Math.floor(Math.random() * lesbi.length)]
					client.sendMessage(from, 'Pertanyaan : *'+lesbii+'*\n\nJawaban : '+ bi+'%', MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					await limitAdd(sender)
					break
                case 'gantengcek':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					ganteng = body.slice(1)
					const gan =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
					client.sendMessage(from, 'Pertanyaan : *'+ganteng+'*\n\nJawaban : '+ teng+'%', MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					await limitAdd(sender)
					break
		case 'cantikcek':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					cantik = body.slice(1)
					const can =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
					client.sendMessage(from, 'Pertanyaan : *'+cantik+'*\n\nJawaban : '+ tik+'%', MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					await limitAdd(sender)
					break
		case 'watak':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					watak = body.slice(1)
					const wa =['Penyayang','Pemurah','Pemarah','Pemaaf','Penurut','Baik','Baperan','Baik Hati','penyabar','UwU','top deh, pokoknya','Suka Membantu']
					const tak = wa[Math.floor(Math.random() * wa.length)]
					client.sendMessage(from, 'Pertanyaan : *'+watak+'*\n\nJawaban : '+ tak, MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					await limitAdd(sender)
				        break
		case 'hobby':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					hobby = body.slice(1)
					const hob =['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
					const by = hob[Math.floor(Math.random() * hob.length)]
					client.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					await limitAdd(sender)
					break
         case 'help': 
		case 'menu':
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, 'Maaf kamu sudah terbenned!',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					const reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
					const uangku = checkATMuser(sender)
					num = `${sender.split("@")[0]}@s.whatsapp.net`
                    menusu = `╭─「 *Pinky Bot* 」
${fxsx} Hai...Selamat ${tampilHari} 
${fxsx} kak ${pushname}
╰──────────

╭─「 *USER INFO* 」
${fxsx} Prefix: 「  ${prefix}  」
${fxsx} Nama: ${pushname}
${fxsx} Duit: *Rp.${uangku}.-*
${fxsx} Tag: @${num.split('@')[0]}
${fxsx} Role: *${role}*
${fxsx} Level: ${getLevelingLevel(sender)}
${fxsx} Xp: ${getLevelingXp(sender)}/${reqXp}
${fxsx} User Register : ${_registered.length}
${fxsx} Speed : ${process.uptime()}
╰──────────

╭─「 *ABOUT MENU* 」
${fxsx} *${prefix}info*
${fxsx} *${prefix}snk*
${fxsx} *${prefix}lpr*
${fxsx} *${prefix}request*
${fxsx} *${prefix}blocklist*
${fxsx} *${prefix}join*
${fxsx} *${prefix}ping*
${fxsx} *${prefix}buypremium*
${fxsx} *${prefix}hargaprem*
${fxsx} *${prefix}bahasa*
${fxsx} *${prefix}kodenegara*
╰──────────

╭─「 *GROUP MENU* 」
${fxsx} ${prefix}welcome [1/0]
${fxsx} ${prefix}nsfw [1/0]
${fxsx} ${prefix}antilink [1/0]
${fxsx} ${prefix}leveling [1/0]
${fxsx} ${prefix}antibadword [1/0]
${fxsx} ${prefix}simih [1/0] 
${fxsx} ${prefix}promote [@tag]
${fxsx} ${prefix}demote [@tag]
${fxsx} ${prefix}tagall
${fxsx} ${prefix}listadmin
${fxsx} ${prefix}wakillist
${fxsx} ${prefix}premiumlist
${fxsx} ${prefix}banlist
${fxsx} ${prefix}blocklist
${fxsx} ${prefix}linkgc
${fxsx} ${prefix}infogc
${fxsx} ${prefix}stag
${fxsx} ${prefix}mctag
${fxsx} ${prefix}mining
${fxsx} ${prefix}hidetag
${fxsx} ${prefix}grouplist
${fxsx} ${prefix}add [62]
${fxsx} ${prefix}kick [@tag]
${fxsx} ${prefix}setname
${fxsx} ${prefix}setdesc
${fxsx} ${prefix}setpp
${fxsx} ${prefix}listadmin
${fxsx} ${prefix}antidelete [1/0]
${fxsx} ${prefix}mining
${fxsx} ${prefix}level
${fxsx} ${prefix}grup [buka/tutup)
╰──────────

╭─「 *OWNER MENU* 」
${fxsx} ${prefix}bc
${fxsx} ${prefix}addbadword
${fxsx} ${prefix}delbadword
${fxsx} ${prefix}bcgc
${fxsx} ${prefix}kickall
${fxsx} ${prefix}setreply
${fxsx} ${prefix}setprefix
${fxsx} ${prefix}clearall
${fxsx} ${prefix}block
${fxsx} ${prefix}unblock
${fxsx} ${prefix}outpinky
${fxsx} ${prefix}event [1/0]
${fxsx} ${prefix}clone
${fxsx} ${prefix}setppbot
╰──────────

╭─「 *INFORMASI MENU* 」
${fxsx} ${prefix}covidindo
${fxsx} ${prefix}infonomor
${fxsx} ${prefix}infogempa
${fxsx} ${prefix}infocuaca
${fxsx} ${prefix}infofilm
${fxsx} ${prefix}jadwaltv
${fxsx} ${prefix}jadwalsholat
${fxsx} ${prefix}tribunews
${fxsx} ${prefix}checkapikey
${fxsx} ${prefix}liputan6
${fxsx} ${prefix}foxnews
${fxsx} ${prefix}apkpure
${fxsx} ${prefix}film1
${fxsx} ${prefix}film2
${fxsx} ${prefix}lirik
${fxsx} ${prefix}searchfilm
${fxsx} ${prefix}nickff
╰──────────

╭─「 *MAKER MENU* 」
${fxsx} ${prefix}sticker
${fxsx} ${prefix}ttp
${fxsx} ${prefix}attp
${fxsx} ${prefix}emottoimg
${fxsx} ${prefix}nulis
${fxsx} ${prefix}nulis2
${fxsx} ${prefix}tahta
${fxsx} ${prefix}darkneon
${fxsx} ${prefix}candlemug
${fxsx} ${prefix}lovemsg
${fxsx} ${prefix}mugflower
${fxsx} ${prefix}narutobanner
${fxsx} ${prefix}paperonglass
${fxsx} ${prefix}romancetext
${fxsx} ${prefix}shadowtext
${fxsx} ${prefix}coffeecup
${fxsx} ${prefix}coffeecup2
${fxsx} ${prefix}glowingneon
${fxsx} ${prefix}underwater
${fxsx} ${prefix}hpotter
${fxsx} ${prefix}woodblock
${fxsx} ${prefix}gplaybutton
${fxsx} ${prefix}splaybutton
${fxsx} ${prefix}barcode
${fxsx} ${prefix}qrencode
${fxsx} ${prefix}ttp
${fxsx} ${prefix}attp
${fxsx} ${prefix}jokerlogo
${fxsx} ${prefix}calendermaker
${fxsx} ${prefix}pornhub
${fxsx} ${prefix}googletext
${fxsx} ${prefix}glitchtext
${fxsx} ${prefix}crosslogo
${fxsx} ${prefix}naruto
${fxsx} ${prefix}flowertext
${fxsx} ${prefix}silktext
${fxsx} ${prefix}flametext
${fxsx} ${prefix}glowtext
${fxsx} ${prefix}skytext
${fxsx} ${prefix}cslogo
${fxsx} ${prefix}pixelate
${fxsx} ${prefix}pixelate2
${fxsx} ${prefix}lithgtext
${fxsx} ${prefix}crismes
${fxsx} ${prefix}bneon
${fxsx} ${prefix}matrix
${fxsx} ${prefix}breakwall
${fxsx} ${prefix}dropwater
${fxsx} ${prefix}leavest
${fxsx} ${prefix}darkjokes
${fxsx} ${prefix}darklogo
${fxsx} ${prefix}logobp
${fxsx} ${prefix}goodgirl
${fxsx} ${prefix}bucinserti
${fxsx} ${prefix}pacarserti
${fxsx} ${prefix}fuckgirl
${fxsx} ${prefix}fuckboy
${fxsx} ${prefix}goodboy
${fxsx} ${prefix}badboy
${fxsx} ${prefix}badgirl
${fxsx} ${prefix}mlwall
${fxsx} ${prefix}cartoongravity
${fxsx} ${prefix}pubgmaskot
${fxsx} ${prefix}shadow2
${fxsx} ${prefix}cup
${fxsx} ${prefix}cup2
${fxsx} ${prefix}romance2
${fxsx} ${prefix}smoke
${fxsx} ${prefix}burnpaper
${fxsx} ${prefix}lovemessage
${fxsx} ${prefix}undergrass
${fxsx} ${prefix}love
${fxsx} ${prefix}coffe
${fxsx} ${prefix}woodheart
${fxsx} ${prefix}flowerheart
${fxsx} ${prefix}woodenboard
${fxsx} ${prefix}summer3d
${fxsx} ${prefix}wolfmetal
${fxsx} ${prefix}nature3d
${fxsx} ${prefix}underwater
${fxsx} ${prefix}golderrose
${fxsx} ${prefix}summernature
${fxsx} ${prefix}letterleaves
${fxsx} ${prefix}glowingneon
${fxsx} ${prefix}falleaves
${fxsx} ${prefix}flamming
${fxsx} ${prefix}potter
${fxsx} ${prefix}carvedwood
${fxsx} ${prefix}wetglass
${fxsx} ${prefix}multicolor3d
${fxsx} ${prefix}watercolor
${fxsx} ${prefix}luxurygold
${fxsx} ${prefix}galaxywallpaper
${fxsx} ${prefix}lighttext
${fxsx} ${prefix}beautifulflower
${fxsx} ${prefix}puppycute
${fxsx} ${prefix}royaltext
${fxsx} ${prefix}heartshaped
${fxsx} ${prefix}birthdaycake
${fxsx} ${prefix}galaxystyle
${fxsx} ${prefix}hologram3d
${fxsx} ${prefix}greenneon
${fxsx} ${prefix}glossychrome
${fxsx} ${prefix}greenbush
${fxsx} ${prefix}metallogo
${fxsx} ${prefix}noeltext
${fxsx} ${prefix}glittergold
${fxsx} ${prefix}textcake
${fxsx} ${prefix}starsnight
${fxsx} ${prefix}wooden3d
${fxsx} ${prefix}textbyname
${fxsx} ${prefix}writegalacy
${fxsx} ${prefix}galaxybat
${fxsx} ${prefix}snow3d
${fxsx} ${prefix}birthdayday
${fxsx} ${prefix}gplybutton
${fxsx} ${prefix}splybutton
${fxsx} ${prefix}epep
${fxsx} ${prefix}galaxtext
${fxsx} ${prefix}thunder
${fxsx} ${prefix}imgmaker
${fxsx} ${prefix}calendermaker
${fxsx} ${prefix}pantaimalam
${fxsx} ${prefix}costumwp
${fxsx} ${prefix}facebookpage
${fxsx} ${prefix}gtav
${fxsx} ${prefix}wanted
${fxsx} ${prefix}bplogo
${fxsx} ${prefix}pencil
${fxsx} ${prefix}crossgun
${fxsx} ${prefix}bakar
${fxsx} ${prefix}blackpink
${fxsx} ${prefix}neon
${fxsx} ${prefix}greenneon
${fxsx} ${prefix}advanceglow
${fxsx} ${prefix}futureneon
${fxsx} ${prefix}sandwriting
${fxsx} ${prefix}sandsummer
${fxsx} ${prefix}sandengraved
${fxsx} ${prefix}metaldark
${fxsx} ${prefix}neonlight
${fxsx} ${prefix}holographic
${fxsx} ${prefix}text1917
${fxsx} ${prefix}minion
${fxsx} ${prefix}deluxesilver
${fxsx} ${prefix}newyearcard
${fxsx} ${prefix}bloodfrosted
${fxsx} ${prefix}halloween
${fxsx} ${prefix}jokerlogo
${fxsx} ${prefix}fireworksparkle
${fxsx} ${prefix}natureleaves
${fxsx} ${prefix}bokeh
${fxsx} ${prefix}toxic
${fxsx} ${prefix}strawberry
${fxsx} ${prefix}box3d
${fxsx} ${prefix}roadwarning
${fxsx} ${prefix}breakwall
${fxsx} ${prefix}icecold
${fxsx} ${prefix}luxury
${fxsx} ${prefix}cloud
${fxsx} ${prefix}summersand
${fxsx} ${prefix}horrorblood
${fxsx} ${prefix}thunder2
╰──────────

╭─「 *FILTER MENU* 」
${fxsx} ${prefix}1977
${fxsx} ${prefix}aden
${fxsx} ${prefix}brannan
${fxsx} ${prefix}brooklyn
${fxsx} ${prefix}clarendon
${fxsx} ${prefix}gingham
${fxsx} ${prefix}hudson
${fxsx} ${prefix}inkwell
${fxsx} ${prefix}earlybird
${fxsx} ${prefix}kelvin
${fxsx} ${prefix}lark
${fxsx} ${prefix}lofi
${fxsx} ${prefix}maven
${fxsx} ${prefix}mayfair
${fxsx} ${prefix}moon
${fxsx} ${prefix}nashville
${fxsx} ${prefix}perpetua
${fxsx} ${prefix}reyes
${fxsx} ${prefix}rise
${fxsx} ${prefix}slumber
${fxsx} ${prefix}stinson
${fxsx} ${prefix}toaster
${fxsx} ${prefix}valencia
${fxsx} ${prefix}walden
${fxsx} ${prefix}willow
${fxsx} ${prefix}xpro2
╰──────────

╭─「 *EFEK MENU* 」
${fxsx} ${prefix}affect
${fxsx} ${prefix}beautiful
${fxsx} ${prefix}facepalm
${fxsx} ${prefix}hitler
${fxsx} ${prefix}jail
${fxsx} ${prefix}rainbow
${fxsx} ${prefix}rip
${fxsx} ${prefix}trash
${fxsx} ${prefix}sepia
${fxsx} ${prefix}wanted
${fxsx} ${prefix}gtav
${fxsx} ${prefix}crossgun
${fxsx} ${prefix}bakar
${fxsx} ${prefix}facebookpage
${fxsx} ${prefix}costumwp
${fxsx} ${prefix}pantaimalam
${fxsx} ${prefix}pencil
 ╰──────────
 
╭─「 *FUN MENU* 」
${fxsx} ${prefix}gantengcek
${fxsx} ${prefix}cantikcek
${fxsx} ${prefix}sangecek
${fxsx} ${prefix}gaycek
${fxsx} ${prefix}lesbicek
${fxsx} ${prefix}watak
${fxsx} ${prefix}hobby
${fxsx} ${prefix}apakah
${fxsx} ${prefix}kapankah
${fxsx} ${prefix}bisakah
${fxsx} ${prefix}bagaimanakah
${fxsx} ${prefix}rate
${fxsx} ${prefix}alay
${fxsx} ${prefix}fml
${fxsx} ${prefix}tebakbendera
${fxsx} ${prefix}tebakgambar
${fxsx} ${prefix}randomnama
${fxsx} ${prefix}tebakkimia
${fxsx} ${prefix}tebakgokil
${fxsx} ${prefix}tebakgokil2
${fxsx} ${prefix}tebaklirik
${fxsx} ${prefix}caklontong
${fxsx} ${prefix}family100
${fxsx} ${prefix}slot
${fxsx} ${prefix}suit
${fxsx} ${prefix}katacinta
${fxsx} ${prefix}pantun
${fxsx} ${prefix}hilih
${fxsx} ${prefix}holoh
${fxsx} ${prefix}halah
${fxsx} ${prefix}hurufterbalik
${fxsx} ${prefix}upswvideo
${fxsx} ${prefix}upswimg
╰──────────

╭─「 *APK MENU* 」
${fxsx} ${prefix}apkpure
${fxsx} ${prefix}happymod
${fxsx} ${prefix}moddroid
╰──────────

╭─「 *MEDIA MENU* 」
${fxsx} ${prefix}brainly 
${fxsx} ${prefix}stickerwa 
${fxsx} ${prefix}playstore
${fxsx} ${prefix}pinterest
${fxsx} ${prefix}img
${fxsx} ${prefix}wallpapersearch
${fxsx} ${prefix}wallpapersearch2
${fxsx} ${prefix}resepmasakan
${fxsx} ${prefix}igstalk
${fxsx} ${prefix}bitly
${fxsx} ${prefix}tkstalk 
${fxsx} ${prefix}twtstalk
${fxsx} ${prefix}ssweb
${fxsx} ${prefix}kbbi
${fxsx} ${prefix}meme
${fxsx} ${prefix}memeindo
${fxsx} ${prefix}githubstalk
╰──────────
 
╭─「 *DONLOAD MENU* 」
${fxsx} ${prefix}joox 
${fxsx} ${prefix}ytmp4 
${fxsx} ${prefix}ytmp3 
${fxsx} ${prefix}play
${fxsx} ${prefix}tiktokmusic
${fxsx} ${prefix}tiktok
╰──────────

╭─「 *ANIME MENU* 」
${fxsx} ${prefix}peluk
${fxsx} ${prefix}cium
${fxsx} ${prefix}husbu
${fxsx} ${prefix}ranime
${fxsx} ${prefix}waifu
${fxsx} ${prefix}animeboy
${fxsx} ${prefix}animegirl
${fxsx} ${prefix}animeimg
${fxsx} ${prefix}loli
${fxsx} ${prefix}shota
${fxsx} ${prefix}neko
${fxsx} ${prefix}animehug
${fxsx} ${prefix}animecry
${fxsx} ${prefix}mikasa
${fxsx} ${prefix}eren
${fxsx} ${prefix}titan
${fxsx} ${prefix}levi
${fxsx} ${prefix}neji
${fxsx} ${prefix}jiraya
${fxsx} ${prefix}tsunade
${fxsx} ${prefix}kiba
${fxsx} ${prefix}sarada
${fxsx} ${prefix}madara
${fxsx} ${prefix}obito
${fxsx} ${prefix}tanjiro
${fxsx} ${prefix}nezuko
${fxsx} ${prefix}luffy
${fxsx} ${prefix}zoro
${fxsx} ${prefix}sanji
${fxsx} ${prefix}gon
${fxsx} ${prefix}killua
${fxsx} ${prefix}sagiri
${fxsx} ${prefix}rimuru
${fxsx} ${prefix}natsu
${fxsx} ${prefix}genos
${fxsx} ${prefix}saitama
╰──────────

╭─「 *DOSA MENU* 」
${fxsx} ${prefix}randomhentai 
${fxsx} ${prefix}randomsfw
${fxsx} ${prefix}randomnsfw
${fxsx} ${prefix}sfw
${fxsx} ${prefix}nsfw
${fxsx} ${prefix}nsfwneko 
╰──────────

╭─「 *RANDOM MENU* 」
${fxsx} ${prefix}aesthetic
${fxsx} ${prefix}fotocewek 
${fxsx} ${prefix}doraemon
${fxsx} ${prefix}pokemon 
${fxsx} ${prefix}kucing
${fxsx} ${prefix}hamster 
${fxsx} ${prefix}kelinci
${fxsx} ${prefix}bluesky
${fxsx} ${prefix}icecream
${fxsx} ${prefix}pemandangan
${fxsx} ${prefix}osakana
${fxsx} ${prefix}menherachan
${fxsx} ${prefix}uzumakinaruto
${fxsx} ${prefix}quotesid
${fxsx} ${prefix}quotesen
${fxsx} ${prefix}freefireimg 
${fxsx} ${prefix}ww2 
${fxsx} ${prefix}shota 
${fxsx} ${prefix}neko 
${fxsx} ${prefix}randomexo
${fxsx} ${prefix}randombts
${fxsx} ${prefix}imagegame
${fxsx} ${prefix}imagemountain
${fxsx} ${prefix}randomkpop
${fxsx} ${prefix}doraemon 
${fxsx} ${prefix}pokemon
╰──────────
 
╭─「 *QUOTES MENU* 」
${fxsx} ${prefix}quotesanime
${fxsx} ${prefix}quotesdilan
${fxsx} ${prefix}quotesimage
${fxsx} ${prefix}quoteskehidupan
${fxsx} ${prefix}fakta
${fxsx} ${prefix}katabijak
${fxsx} ${prefix}bacotanhacker
${fxsx} ${prefix}quotedoraemon
${fxsx} ${prefix}pantun
${fxsx} ${prefix}bucin
╰──────────

╭─「 *LIMIT MENU* 」
${fxsx} ${prefix}limit
${fxsx} ${prefix}buylimit
${fxsx} ${prefix}buypremiumlimit
${fxsx} ${prefix}transfer
${fxsx} ${prefix}leaderboard
╰──────────
 
╭─「 *TOOLS MENU* 」
${fxsx} ${prefix}bass
${fxsx} ${prefix}toimg
${fxsx} ${prefix}tomp3
${fxsx} ${prefix}slowmo
${fxsx} ${prefix}tempo
${fxsx} ${prefix}vibra
${fxsx} ${prefix}tvrusak
${fxsx} ${prefix}gemes
${fxsx} ${prefix}gemok
${fxsx} ${prefix}tupai
${fxsx} ${prefix}tinyurl
${fxsx} ${prefix}bitly
${fxsx} ${prefix}ocr
${fxsx} ${prefix}tts
${fxsx} ${prefix}kalkulator
╰──────────
 
╭─「 *AUDIO MENU* 」
${fxsx} ${prefix}fast
${fxsx} ${prefix}tupai
${fxsx} ${prefix}gemuk
${fxsx} ${prefix}nightcore
${fxsx} ${prefix}slow
╰──────────

╭─「 *ISLAM MENU* 」
${fxsx} ${prefix}asmaulhusna
${fxsx} ${prefix}kisahnabi
${fxsx} ${prefix}jadwalsholat
${fxsx} ${prefix}alquranaudio
╰──────────

╭─「 *STORAGE MENU* 」
${fxsx} ${prefix}addstic
${fxsx} ${prefix}slist
${fxsx} ${prefix}gets
${fxsx} ${prefix}addvn
${fxsx} ${prefix}vnlist
${fxsx} ${prefix}addimg
${fxsx} ${prefix}imglist
${fxsx} ${prefix}gimg
${fxsx} ${prefix}addvid
${fxsx} ${prefix}vidlist
${fxsx} ${prefix}getvid
╰──────────

╭─「 *RANDOM IMG* 」
${fxsx} ${prefix}art
${fxsx} ${prefix}bts
${fxsx} ${prefix}exo
${fxsx} ${prefix}elf
${fxsx} ${prefix}loli
${fxsx} ${prefix}neko
${fxsx} ${prefix}waifu2
${fxsx} ${prefix}shota
${fxsx} ${prefix}husbu
${fxsx} ${prefix}sagiri
${fxsx} ${prefix}shinobu
${fxsx} ${prefix}megumin
${fxsx} ${prefix}wallnime
${fxsx} ${prefix}bj
${fxsx} ${prefix}ero
${fxsx} ${prefix}cum
${fxsx} ${prefix}feet
${fxsx} ${prefix}yuri
${fxsx} ${prefix}trap
${fxsx} ${prefix}lewd
${fxsx} ${prefix}feed
${fxsx} ${prefix}eron
${fxsx} ${prefix}solo
${fxsx} ${prefix}gasm
${fxsx} ${prefix}poke
${fxsx} ${prefix}anal
${fxsx} ${prefix}holo
${fxsx} ${prefix}tits
${fxsx} ${prefix}kuni
${fxsx} ${prefix}kiss
${fxsx} ${prefix}erok
${fxsx} ${prefix}smug
${fxsx} ${prefix}baka
${fxsx} ${prefix}solog
${fxsx} ${prefix}feetg
${fxsx} ${prefix}lewdk
${fxsx} ${prefix}waifu3
${fxsx} ${prefix}pussy
${fxsx} ${prefix}femdom
${fxsx} ${prefix}cuddle
${fxsx} ${prefix}hentai
${fxsx} ${prefix}eroyuri
${fxsx} ${prefix}cum_jpg
${fxsx} ${prefix}blowjob
${fxsx} ${prefix}erofeet
${fxsx} ${prefix}holoero
${fxsx} ${prefix}classic
${fxsx} ${prefix}erokemo
${fxsx} ${prefix}fox_girl
${fxsx} ${prefix}futanari
${fxsx} ${prefix}lewdkemo
${fxsx} ${prefix}wallpaper
${fxsx} ${prefix}pussy_jpg
${fxsx} ${prefix}kemonomimi
${fxsx} ${prefix}nsfw_avatar
${fxsx} ${prefix}chiisaihentai
${fxsx} ${prefix}trap
${fxsx} ${prefix}blowjob
${fxsx} ${prefix}yaoi
${fxsx} ${prefix}ecchi
${fxsx} ${prefix}hentai
${fxsx} ${prefix}ahegao
${fxsx} ${prefix}hololewd
${fxsx} ${prefix}sideoppai
${fxsx} ${prefix}animefeets
${fxsx} ${prefix}animebooty
${fxsx} ${prefix}animethighss
${fxsx} ${prefix}hentaiparadise
${fxsx} ${prefix}animearmpits
${fxsx} ${prefix}hentaifemdom
${fxsx} ${prefix}lewdanimegirls
${fxsx} ${prefix}biganimetiddies
${fxsx} ${prefix}animebellybutton
${fxsx} ${prefix}hentai4everyone
╰──────────

╭─「 *NEW MENU* 」
${fxsx} ${prefix}splaybutton
${fxsx} ${prefix}gplaybutton
${fxsx} ${prefix}togif
${fxsx} ${prefix}stickerwa
${fxsx} ${prefix}harta
${fxsx} ${prefix}harcos
${fxsx} ${prefix}twtstalk
${fxsx} ${prefix}bneon
${fxsx} ${prefix}matrix
${fxsx} ${prefix}breakwall
${fxsx} ${prefix}dropwater
${fxsx} ${prefix}leavest
${fxsx} ${prefix}logobp
${fxsx} ${prefix}quotesislami
${fxsx} ${prefix}qrencode
${fxsx} ${prefix}barcode
${fxsx} ${prefix}bacotanhacker
${fxsx} ${prefix}randomhentai
${fxsx} ${prefix}randomnsfw
${fxsx} ${prefix}nsfwneko
${fxsx} ${prefix}katadilan
${fxsx} ${prefix}katabucin
${fxsx} ${prefix}wame
╰──────────

╭─「 *Thanks Too* 」
${fxsx} FxSx
${fxsx} FdlX
${fxsx} NuyFaa
╰──────────` 
buffer = await getBuffer('https://raw.githubusercontent.com/alonecans/foto-manca/main/me.jpg')
                    client.sendMessage(from, buffer, image, {quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64'), mentionedJid: [num]}, displayname: mem, caption: menusu })
					break
                  case 'addstic':
                case 'adds':
				    if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if (!isQuotedSticker) return client.sendMessage(from, 'Reply stiker nya',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					svst = body.slice(12)
					if (!svst) return client.sendMessage(from, 'Nama sticker nya apa?',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await client.downloadMediaMessage(boij)
					setiker.push(`${svst}`)
					fs.writeFileSync(`./storage/sticker/${svst}.webp`, delb)
					fs.writeFileSync(`./storage/stik.json`, JSON.stringify(setiker))
					client.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}slist`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					break
               case 'slist':
				case 'lists':
				if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					teks = '*Sticker List :*\n\n'
					for (let awokwkwk of setiker) {
					teks += `${fxsx} ${awokwkwk}\n`
					}
					teks += `\n*Total : ${setiker.length}*\n*Ketik : ${prefix}gets [nama sticker nya]*`
					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true, contextInfo: { "mentionedJid": setiker } }})
					break
              case 'gs':
				case 'gets':
				if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					namastc = body.slice(12)
					result = fs.readFileSync(`./storage/sticker/${namastc}.webp`)
					client.sendMessage(from, result, sticker, {quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					break
              case 'addvn':
				if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if (!isQuotedAudio) return client.sendMessage(from, 'Reply Audio Nya',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					svst = body.slice(7)
					if (!svst) return client.sendMessage(from, 'Nama audionya?',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await client.downloadMediaMessage(boij)
					audionye.push(`${svst}`)
					fs.writeFileSync(`./storage/audio/${svst}.mp3`, delb)
					fs.writeFileSync('./storage/audio.json', JSON.stringify(audionye))
					client.sendMessage(from, `Sukses Menambahkan Audio\nCek dengan cara ${prefix}vnlist`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					break
               case 'vnlist':
				case 'listvn':
				if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					teks = '*List Vn:*\n\n'
					for (let awokwkwk of audionye) {
						teks += `${fxsx} ${awokwkwk}\n`
					}
					teks += `\n*Total : ${audionye.length}*\n*Ketik : [nama vn nya]*`
					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true, contextInfo: { "mentionedJid": audionye } }})
					break
            case 'getvn':
             case 'gvn':
             if (!isRegistered) return reply( ind.noregis())
					namastc = body.slice(7)
					buffer = fs.readFileSync(`./storage/audio/${namastc}.mp3`)
					client.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: fgif, ptt: true })
					break
             case 'addimg':
				if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if (!isQuotedImage) return client.sendMessage(from, 'Reply imagenya!',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					svst = body.slice(10)
					if (!svst) return client.sendMessage(from, 'Nama imagenya apa?',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await client.downloadMediaMessage(boij)
					imagenye.push(`${svst}`)
					fs.writeFileSync(`./storage/image/${svst}.jpeg`, delb)
					fs.writeFileSync('./storage/image.json', JSON.stringify(imagenye))
					client.sendMessage(from, `Sukses Menambahkan Image\nCek dengan cara ${prefix}imglist`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					break
            case 'imglist':
				case 'listimg':
				if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					teks = '*List Image :*\n\n'
					for (let awokwkwk of imagenye) {
						teks += `${fxsx} ${awokwkwk}\n`
					}
					teks += `\n*Total : ${imagenye.length}*\n*Ketik : ${prefix}getimg [nama image nya]*`
					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true, contextInfo: { "mentionedJid": imagenye } }})
					break
            case 'gimg':
            case 'getimg':
            if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					namastc = body.slice(10)
					buffer = fs.readFileSync(`./storage/image/${namastc}.jpeg`)
					client.sendMessage(from, buffer, image, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true, caption: `Result From Database : ${namastc}.jpeg` }})
					break
            case 'addvid':
				if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if (!isQuotedVideo) return client.sendMessage(from, 'Reply videonya!',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					svst = body.slice(10)
					if (!svst) return client.sendMessage(from, 'Nama videonya apa?',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await client.downloadMediaMessage(boij)
					videonye.push(`${svst}`)
					fs.writeFileSync(`./storage/video/${svst}.mp4`, delb)
					fs.writeFileSync('./storage/video.json', JSON.stringify(videonye))
					client.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}vidlist`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					break
             case 'vidlist':
				case 'listvid':
				if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					teks = '*List Video :*\n\n'
					for (let awokwkwk of videonye) {
						teks += `${fxsx} ${awokwkwk}\n`
					}
					teks += `\n*Total : ${videonye.length}*\n*Ketik : ${prefix}getvid [nama video nya]*`
					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true, contextInfo: { "mentionedJid": videonye } }})
					break
             case 'getvid':
             case 'gvid':
                    if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					namastc = body.slice(10)
					buffer = fs.readFileSync(`./storage/video/${namastc}.mp4`)
					client.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true }})
					break
					case 'playstore':
		if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                    if (args.length == 0) return client.sendMessage(from, `Example: ${prefix + command} telegram`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/playstore?apikey=${LoLKey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = 'Play Store Search : \n'
                    for (var x of get_result) {
                        ini_txt += `Name : ${x.title}\n`
                        ini_txt += `ID : ${x.appId}\n`
                        ini_txt += `Developer : ${x.developer}\n`
                        ini_txt += `Link : ${x.url}\n`
                        ini_txt += `Price : ${x.priceText}\n`
                        ini_txt += `Price : ${x.price}\n\n`
                    }
                    reply(ini_txt)
                    break
                    case 'alquranaudio':
		if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                    if (args.length == 0) return client.sendMessage(from, `Example: ${prefix + command} 18 or ${prefix + command} 18/10`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    surah = args[0]
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=${LoLKey}`)
                    client.sendMessage(from, ini_buffer, audio, { quoted: mek2, mimetype: Mimetype.mp4Audio })
                    break
                case 'asmaulhusna':
		if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/asmaulhusna?apikey=${LoLKey}`)
                    get_result = get_result.result
                    ini_txt = `No : ${get_result.index}\n`
                    ini_txt += `Latin: ${get_result.latin}\n`
                    ini_txt += `Arab : ${get_result.ar}\n`
                    ini_txt += `Indonesia : ${get_result.id}\n`
                    ini_txt += `English : ${get_result.en}`
                    reply(ini_txt)
                    break
                case 'kisahnabi':
		if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                    if (args.length == 0) return client.sendMessage(from, `Example: ${prefix + command} Muhammad`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${LoLKey}`)
                    get_result = get_result.result
                    ini_txt = `Name : ${get_result.name}\n`
                    ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
                    ini_txt += `Umur : ${get_result.age}\n`
                    ini_txt += `Tempat : ${get_result.place}\n`
                    ini_txt += `Story : \n${get_result.story}`
                    reply(ini_txt)
                    break
                case 'jadwalsholat':
		if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                    if (args.length == 0) return client.sendMessage(from, `Example: ${prefix + command} Banten`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    daerah = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${LoLKey}`)
                    get_result = get_result.result
                    ini_txt = `Wilayah : ${get_result.wilayah}\n`
                    ini_txt += `Tanggal : ${get_result.tanggal}\n`
                    ini_txt += `Sahur : ${get_result.sahur}\n`
                    ini_txt += `Imsak : ${get_result.imsak}\n`
                    ini_txt += `Subuh : ${get_result.subuh}\n`
                    ini_txt += `Terbit : ${get_result.terbit}\n`
                    ini_txt += `Dhuha : ${get_result.dhuha}\n`
                    ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
                    ini_txt += `Ashar : ${get_result.ashar}\n`
                    ini_txt += `Maghrib : ${get_result.imsak}\n`
                    ini_txt += `Isya : ${get_result.isya}`
                    reply(ini_txt)
                    break
                    case 'stickerwa':
		             if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                    if (args.length == 0) return client.sendMessage(from, `Example: ${prefix + command} Koceng Imot`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/stickerwa?apikey=${LoLKey}&query=${query}`)
                    get_result = get_result.result[0].stickers
                    for (var x of get_result) {
                        ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/convert/towebp?apikey=${LoLKey}&img=${x}`)
                        client.sendMessage(from, ini_buffer, sticker, {quoted: mek2})
                    }
                    break
					case 'wallpapersearch':
		            if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                    if (args.length == 0) return client.sendMessage(from, `Example: ${prefix + command} loli`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    query = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/wallpaper?apikey=${LoLKey}&query=${query}`)
                    client.sendMessage(from, ini_buffer, image, { quoted: mek2})
                    break
                    case 'twtstalk':
				if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				username = args[0]
					get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/twitter/${username}?apikey=${LoLKey}`, {method: 'get'})
					get_result = get_result.result
					txt = `Nama : ${get_result.name}\n`
					txt += `Name Screen : ${get_result.screen_name}\n`
					txt += `Bio : ${get_result.description}\n`
						txt += `Followers : ${get_result.followers}\n`
					txt += `Following: ${get_result.following}\n`
					txt += `Like : ${get_result.like}\n`
					txt += `Tweet : ${get_result.tweet}\n`
					txt += `Join : ${get_result.joined}\n`
					profile = await getBuffer(get_result.profile_picture)
					banner = await getBuffer(get_result.banner)
					client.sendMessage(from, profile, image, {quoted: mek, caption: txt})
					client.sendMessage(from, banner, image, {quoted: mek2, caption: 'BANNERNYA OM!' })
					break
                case 'wallpapersearch2':
		if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                    if (args.length == 0) return client.sendMessage(from, `Example: ${prefix + command} loli`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/wallpaper2?apikey=${LoLKey}&query=${query}`)
                    ini_buffer = await getBuffer(get_result.result)
                    client.sendMess
					case 'pantun':
                case 'bucin':
		if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/random/${command}?apikey=${LoLKey}`)
                    reply(get_result.result)
                    break
                    case 'checkapikey':
		if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/checkapikey?apikey=${LoLKey}`)
                    reply(get_result.result)
                    break
                    case 'randomnama':
		if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                    anu = await fetchJson(`http://api.lolhuman.xyz/api/random/nama?apikey=${LoLKey}`)
                    reply(anu.result)
                    break
		case 'crosslogo':
                case 'naruto':
                case 'flowertext':
                case 'silktext':
                case 'flametext':
                case 'glowtext':
                case 'skytext':
                case 'cslogo':
                case 'lithgtext':
                case 'crismes':
                if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                    if (args.length == 0) return client.sendMessage(from, `Usage: ${prefix + command} text\nExample: ${prefix + command} nuy`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    txt = args.join(" ")
                    client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fvideo, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    anu = await fetchJson(`https://api.zeks.xyz/api/${command}?text=${txt}&apikey=apivinz`, {method: 'get'})
                    tod = await getBuffer(anu.result)
                    client.sendMessage(from, tod, image, {quoted: ftroli, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    break
                case 'bneon':
                case 'matrix':
                case 'breakwall':
                case 'dropwater':
                case 'leavest':
                case 'logobp':
                if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                    if (args.length == 0) return client.sendMessage(from, `Usage: ${prefix + command} text\nExample: ${prefix + command} nuy`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    txt = args.join(" ")
                    client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: flokasi, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    buffer = await getBuffer(`https://api.zeks.xyz/api/${command}?text=${txt}&apikey=apivinz`)
                    client.sendMessage(from, buffer, image, {quoted: ftroli, contextInfo: { forwardingScore: 508, isForwarded: true}})
         break
		case 'donasi':
		case 'donate':
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					client.sendMessage(from, donasi(), MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')}})
					break
		case 'menupicture':
		case 'menupict':
		case 'pictmenu':
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				wew = fs.readFileSync(`./src/me.jpg`)
					client.sendMessage(from, wew, image, { quoted: mek2, caption: randompict(prefix)})
					break
		case 'menuowner':
		case 'ownermenu':
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					wew = fs.readFileSync(`./src/me.jpg`)
					client.sendMessage(from, wew, image, { quoted: mek2, caption: developer(prefix)})
					break
		case 'bahasa':
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					client.sendMessage(from, bahasa(), MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					await limitAdd(sender)
					break
		case 'kodenegara':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					client.sendMessage(from, negara(), MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					await limitAdd(sender)
					break
		case 'del':
		case 'd':
		case 'delete':
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					await limitAdd(sender)
					break
		case 'level':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if (!isLevelingOn) return reply(ind.lvlnoon())
					if (!isGroup) return reply(ind.groupo())
					const userLevel = getLevelingLevel(sender)
					const userXp = getLevelingXp(sender)
					if (userLevel === undefined && userXp === undefined) return reply(ind.lvlnul())
					const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
					resul = `◪ *LEVEL*\n  ├─ ❏ *Name* : ${pushname}\n  ├─ ❏ *Nomor* : ${sender.split("@")[0]}\n  ├─ ❏ *User XP* : ${userXp}/${requiredXp}\n  └─ ❏ *User Level* : ${userLevel}\n`
					client.sendMessage(from, resul, MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					.catch(async (err) => {
					console.error(err)
					await reply(`Error!\n${err}`)
					})
					break
		case 'say':
                                        teks = body.slice(5)
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                                        if (args.length < 1) return client.sendMessage(from, 'Teksnya mana kak?',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
                                        saying = teks
                                        client.sendMessage(from, saying, MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					await limitAdd(sender)
                                        break
		case 'info':
					me = client.user
					ow = "6283815956151@s.whatsapp.net"
					uptime = process.uptime()
					teks = `➽ *Name Bot* : Pinky\n➽ *Owner* : @${ow.split('@')[0]}\n➽ *Prefix* : | ${prefix} |\n➽ *Total Block* : ${blocked.length}\n➽ *Bot Aktif* : ${kyun(uptime)}\n➽\n➽ *ɢʀᴜᴘ* : coming soon\n➽ *ꜱᴘᴇᴄɪᴀʟ ᴛʜᴀɴᴋꜱ ᴛᴏ* :\n➽ FxSx\n➽ FdlXploit`
					const daca = fs.readFileSync('me.jpg');
				    client.sendMessage(from, daca, image, {quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [ow]}, caption: teks})
					break 
		case 'snk':
					me = client.user
					uptime = process.uptime()
					teks = `*Syarat & Ketentuan*\n1. Teks dan nama pengguna WhatsApp anda kami simpan di dalam server selama bot aktif.\n2. Data anda akan di hapus ketika bot offline.\n3. Kami tidak menyimpan gambar, video, file, audio, dan dokumen yang anda kirim.\n4. Kami tidak pernah meminta anda untuk memberikan informasi pribadi.\n5. Jika menemukan Bug/Error silahkan langsung lapor ke Owner bot.\n6. Cukup perintah 1x jika bot tidak merespon harap ulangi kembali, Jika di ulangi kembali tidak merespon, Bot tidak aktif\n7. Dilarang spam, Share virus virtex, Telpon, Video call, Kami akan blockir anda.\n8. Apapun yang anda perintah pada bot ini, *KAMI TIDAK BERTANGGUNG JAWAB!*\n\nTERIMA KASIH !~`
					buffer = await getBuffer(me.imgUrl)
					client.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break
		case 'lpr':
				if (isBanned) return reply(ind.baned())
                if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                if (args.length < 1) return reply(`Yang mau direport apaan?`)
                     const pesan = body.slice(5)
                      if (pesan.length > 300) return client.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, {quoted: mek2})
                        var nomor = mek.participant
                       const tekst1 = `*[LAPOR]*\nNomor : wa.me/${sender.split("@")[0]}\nPesan : ${pesan}`
                      var options = {
                         text: tekst1,
                         contextInfo: {mentionedJid: [nomor]},
                     }
                    client.sendMessage('6283815956151@s.whatsapp.net', options, text, {quoted: mek})
                    client.sendMessage(from, 'Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi!!',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    break
		case 'request':
					const cfrr = body.slice(8)
					if (cfrr.length > 300) return client.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
					var nomor = mek.participant
					const ress = `*[REQUEST VITUR]*\nNomor : wa.me/${sender.split("@")[0]}\nPesan : ${cfrr}`
							var options = {
							text: ress,
                         				contextInfo: {mentionedJid: [nomor]},
                     			}
					client.sendMessage('6283815956151@s.whatsapp.net', options, text, {quoted: mek})
					client.sendMessage(from, 'REQUEST ANDA TELAH SAMPAI KE OWNER PINKY, Requests palsu atau main² tidak akan ditanggapi!!',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
					break
		case 'blocklist': 
					teks = '*This is list of blocked number* :\n'
					for (let block of blocked) {
						teks += `*~>* @${block.split('@')[0]}\n`
					}
					teks += `*Total* : ${blocked.length}`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek2, contextInfo: {"mentionedJid": blocked}})
					break
                case 'hidetag':
					// NuyFaa
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					var value = body.slice(9)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					client.sendMessage(from, options, MessageType.text, {quoted: ftroli, sendEphemeral: true, contextInfo: { forwardingScore: 508, isForwarded: true}, thumbnail: fs.readFileSync('./src/me.jpg', 'base64')})
					await limitAdd(sender)
					break

                case 'afk':
				
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                                tels = body.slice(4)
                                if (args.length < 1) return reply('Kakak afk karena apa?')
                                var ain = mek.participant
                                const tagzz = {
                                                text: `@${tagzz.split("@s.whatsapp.net")[0]} *SEDANG AFK ${tels} JANGAN GANGGU YA*`,
                                                contextInfo: { mentionedJid: [ain] }
                                        }
                                        client.sendMessage(from, tagzz, MessageType.text, {quoted: mek2})
					await limitAdd(sender)
                                        break
                                        case 'profile':

    				client.updatePresence(from, Presence.composing)

				
    				try {

					ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)

					} catch {

					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'

					}

					 profile = `╭─「 *PROFILE ANDA* 」\n│• *Name:* ${pushname}\n│• *XP:* ${getLevelingXp(sender)}\n│• *Level:* ${getLevelingLevel(sender)}\n│• *Role:* ${role}\n│• *User Terdaftar:* ✓\n│• *Link:* wa.me/${sender.split("@")[0]}\n╰──────────────────`

					buffer = await getBuffer(ppimg)

					client.sendMessage(from, buffer, image, {quoted: mek2, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64'), caption: profile})

					break
                case 'quotemaker':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					var gh = body.slice(12)
					var quote = gh.split("/")[0];
					var wm = gh.split("/")[1];
					const pref = `Usage: \n${prefix}quotemaker teks|watermark\n\nEx :\n${prefix}quotemaker ini contoh|bicit`
					if (args.length < 1) return reply(pref)
					client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
					anu = await fetchJson(`https://terhambar.com/aw/qts/?kata=${quote}&author=${wm}&tipe=random`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break
                case 'truth':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					client.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: mek })
					await limitAdd(sender)
					break
		case 'dare':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "🦄💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
					const der = dare[Math.floor(Math.random() * dare.length)]
					tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					client.sendMessage(from, tod, image, { quoted: mek, caption: '*Dare*\n\n'+ der })
					await limitAdd(sender)
					break
		case 'quoteskehidupan':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					const quotes =['Jangan pernah mengabaikan apapun yang terjadi, suatu saat akan sadar dan menyesal, ingat tuhan akan selalu memberikan penyesalan terakhir ...','Aku percaya, suatu hari nanti, aku akan memiliki semua hal yang telah aku doa kan selama ini.','Balas dendam yang paling terbaik adalah mengubah dirimu menjadi yang lebih baik lagi.','Hidupku jauh dari kata mewah, kalau kalian lihat aku selalu senang, itu karena aku tau cara menikmati hidup.','Persahabatan bukan tentang orang yang baik didepanmu, tetapi tentang orang yang tetap baik di belakangmu.','Tidak semua bisa dimiliki. Jaga yang sudah termiliki. Tidak semua bisa diterima. Pertahankan yang sudah ada.','Mereka pikir hidupku enak, padahal aku hanya berusaha untuk tidak mengeluh.','Ibu, sebajingan apapun anakmu ini, Hatiku selalu ingin bisa Membahagiakanmu.','Tidak semua hari berjalan dengan baik tapi ada hal baik di setiap harinya.','Pikiran negatif tidak akan pernah memberi kamu kehidupan yang positif','Mereka pikir hidupku enak, padahal aku hanya berusaha untuk tidak mengeluh.','Saya percaya bahwa satu-satunya keberanian yang dibutuhkan oleh seseorang adalah keberanian untuk mengikuti impian Anda sendiri.','Arti hidup adalah menemukan hadiahmu. Tujuan hidup adalah untuk memberikannya.','Ada kalanya kita dicari ketika diperlukan, Dan dilupakan setelah dapat apa yang dia inginkan.','Aku suka tidur, Bukan karena aku pemalas Hanya saja mimpiku lebih indah dari kenyataan.','Jika kamu terlahir bukan dari keluarga kaya, Maka pastikanlah keluarga kaya berasal dari mu.','Saat kamu memberi orang lain, sesungguhnya pemberian itu adalah untukmu. Dan saat kamu mendoakan orang lain, sesungguhnya doa itu juga untukmu. Maka sibuklah membahagiakan orang lain, agar kemudian dunia akan sibuk membahagiakanmu.','Pernah salah pilih, Pernah salah jalan, Karena ego, Karena ceroboh, Tapi kalau bukan karena salah, Kita tidak akan pernah belajar.','Teruntuk hatiku semoga kamu sabar dan tabah bukan untuk hari ini, tapi untuk setiap hari.','Apapun yang kamu alami hari ini tetaplah terlihat baik-baik saja, are you oke?','Wajar kulitku hitam, Tanganku kasar, Penampilanku dekil, KARENA KEGIATANKU KERJA BUKAN MEMINTA.','Sibuklah mencintai hidupmu sampai kamu tidak punya waktu untuk membenci, menyesal, ataupun merasa takut.','AKU BAHAGIA KARENA BERSYUKUR, BUKAN BERSYUKUR KARENA BAHAGIA.','Hanya karena kamu bisa melakukan apa saja, bukan berarti kamu mampu melakukan segalanya.','Kegagalan adalah kesempatan untuk memulai lagi dengan cara yang lebih cerdas.','Dulu waktu masih kecil tidak sabar pengen jadi dewasa, tapi ketika udah besar, aku baru sadar bahwa jaman kecil lah yang paling bahagia.','Saya adalah saya, Saya bukan dia ataupun mereka Jika ingin bersama saya, Terimalah apa adanya.','Online ku sangatlah santai ada yang chat ya syukur, tidak ada yang chat ya tidur.','Kamu tidak begitu dalam mengenaliku, jadi tolong berhentilah sok tau tentang hidup ku.','Saya terlahir dari keluarga sederhana jadi maaf kalau penampilan saya apa adanya.','Dirimu sebenarnya adalah apa yang kamu lakukan di saat tiada orang yang melihatmu.','Ada dua pilihan hidup di pagi hari. Kembali tidur untuk melanjutkan mimpi, atau bangun tidur untuk mewujudkan mimpi.','Orang yang dibelakangku membicarakan diriku, keadaanku, keburukanku, mungkin ia membahayakan dalam duniaku tapi yang jelas ia bermanfaat untuk akhiratku, maka biarlah ia meneruskannya. *#Jangan lupa tersenyum untuk setiap harinya*','Lupakanlah masalahmu sejenak, dan berbahagialah kamu.','Mencintai memang tentang penerimaan. Tapi bukan untuk dibodohi.','Hidup adalah keseimbangan antara menggenggam dan melepaskan.','Jalanan yang sulit seringkali membawamu ke tujuan yang paling indah.','Kita tidak gagal. Kita hanya telah belajar dari 1000 cara yang salah.','Kalau kamu menginginkan sesuatu yang belum pernah kamu miliki, kamu harus melakukan sesuatu yang belum pernah kamu lakukan.','Jangan berhenti sebelum kamu bangga dengan dirimu sendiri.','Siapapun yang kamu cari.. Percayalah, dia juga sedang mencarimu.','Bahagia itu tujuan, kecewa itu jalan. Seseorang tidak akan sampai ke tujuan, tanpa melewati sebuah jalan.','Teruslah update status, setidaknya orang lain tau bahwa kamu masih hidup.','Bukan aku yang hebat. Tapi doa orang tua ku.','Kalau kamu sering disakiti orang itu artinya kamu orang baik. Ingat, cuma pohon berbuah yang dilempari batu.','Dalam hidup ini, Sadar itu penting loh, Jangan sabar mulu, CAPEK!','Kamu mempunyai banyak pilihan hidup untuk itu, Pilihlah hanya yang bisa benar-benar menjadikanmu lebih baik.','Aku kuat karena aku pernah lemah. Aku berani karena aku pernah merasa takut. Aku bijak karena aku pernah melakukan kesalahan.','Bukan berdoa untuk meminta hidup yang lebih mudah, Tapi berdoalah untuk bisa menjadi manusia yang lebih tangguh dalam menjalani hidup.','Selalu ada kisah yang kamu tidak tau di balik setiap orang. Selalu ada alasan mengapa mereka menjadi seperti itu. Pikiran hal ini sebelum kamu mencoba menghakimi orang lain.','Orang lain hanya melihat hasil akhir tanpa pernah tau bagaimana lelahnya berproses.','Kebahagiaan bukan milik mereka yang memiliki segalanya, Tetapi untuk mereka yang bisa menghargai apa yang mereka miliki.','Aku hanya ingin diperlakukan spesial lagi.','Terkadang, Hal yang menahan mu untuk bergerak maju hanyalah Pikiranmu sendiri.','Dua hal Menggambarkan dirimu : Kesabaranmu saat tak punya apa-apa Dan Sikapmu saat memiliki segalanya.','Kita hanya bersama bukan bersatu.','Saat kamu benar Semua orang lupa Saat kamu salah Semua orang ingat','Uang memang bukan segalanya tapi Tanpa uang kehidupan ini akan susah','Bila kamu Yakin , Tak perlu ada kata Mungkin','Jadilah kuat untuk melepaskan, Dan sabar untuk apa yang layak kamu dapatkan.','Pembenci itu sangat pemilih, Mereka hanya membenci orang yang hidupnya lebih baik  daripada hidup mereka.','Pasangan adalah cerminan diri kita. Maka teruslah perbaiki diri menjadi lebih baik setiap harinya, Maka pasangan terbaikpun akan diberikan tuhan.','Persahabatan adalah berbagi suka duka dan menua bersama.','Tersenyumlah ketika melihat masa lalu yang kelam, Karena engkau telah berhasil melewatinya.','Ketika banyak permasalahan yang menghampiri dirimu janganlah meminta untuk lekas dihilangkan. Tapi mintalah agar kamu bisa kuat untuk menyelesaikan.','Kehidupanmu adalah buah dari tindakan yang kamu lakukan. Tidak ada yang bisa disalahkan selain dirimu.','Kehidupan bukanlah masalah yang harus diselesaikan namun kenyataan yang harus diambil pengalamannya.','Semoga di tahun baru, Buku baru, Penulisan yang baru dengan isi yang lebih menarik untuk diimbas kembali di penghujung cerita nanti.','Masa lalu memang menyimpan banyak kenangan, Namun itu bukan alasan untuk tidak terus melangkah ke depan.','Santailah, Nikmati saja hidup, Tersenyumlah lebih banyak, Tertawalah lebih banyak, Dan janganlah memikirkan banyak hal.','Setiap perbuatan yang membahagiakan sesama adalah suatu sikap yang mencerminkan pribadi yang mulia.','Jarang yang sadar kalau kegagalan juga merupakan kesempatan emas untuk menuju kesuksesan.','Lebih baik bekerja keras dalam kediamnya kesunyian, Biarkan nanti sukses mu yang berbicara.','Belajar dari kesalahan masa lalu merupakan salah satu langkah awal untuk maju.']
					const quo = quotes[Math.floor(Math.random() * quotes.length)]
					crot = await getBuffer(`https://i.ibb.co/Bj8tD93/IMG-20210126-WA0018.jpg`)
					client.sendMessage(from, crot, image, { quoted: mek, caption: '*Quotes Kehidupan*\n\n'+ quo })
					await limitAdd(sender)
					break
		case 'quotesislami':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					const islami =['Hal yang paling manis adalah ketika seseorang menyebutkan nama kamu di tahajjud mereka.','Ya Allah panggillah diriku dan orang tuaku ke baitullah dalam keadaan sehat walafiat.','Ya Allah semoga seseorang yang engkau jodohkan denganku adalah seseorang yang saat ini sedang aku perjuangkan.','Allah tidak pernah tidur. Semua pasti akan di balas kelak. Orang-orang jahat yang sekarang bisa tertawa karena banyak uang, berkuasa, tapi besok-besok mereka semua di balas seadil-adilnya.','Jangan putus asa, Allah tidak akan mengecewakan hambanya yang ingin memperbaiki diri.','Percayalah orang yang menasehatimu untuk sholat adalah dia yang paling mencintaimu.','Bukannya Allah tidak tahu sedihmu, Tapi Allah tahu kalau kamu itu kuat.','Bacalah Al-Quran, Ia akan menenangkan hatimu meskipun engkau tidak memahami artinya.','Saat kita sakit hati sama omongan orang, saat itu juga sebenarnya Allah ngajarin kita buat jaga omongan kita ke orang lain. Sederhana bukan?','Di dunia ini orang paling baik pun bisa dicela, dan bahkan orang paling jahat sekalipun bisa di bela.','Al-Quran adalah teman yang tidak akan mengecewakan kamu di dunia dan akhirat.','Cara Allah menjawab doa hambanya : Iyaa.. aku beri untukmu sekarang. Tunggu, aku ingin melihat dulu perjuanganmu. Tidak, aku punya yang lebih baik untukmu.','Dan Allah tidak akan mengadzab mereka selama mereka mau Memohon ampun kepada-Nya. [Al-Anfaal, 8:33]','Kesabaran itu ada dua macam : Sabar atas sesuatu yang tidak kamu ingin. Sabar menahan diri dari sesuatu yang kamu ingini. -Ali bin Abi Thalib','Ambillah kebenaran, jika kamu telah mendengarnya. Karena sungguh di atas kebenaran ada cahaya. (HR. Abu Daud)','Sholatlah agar hatimu tenang, Istighfarlah agar kecewamu hilang, Berdoalah agar bahagiamu segera datang.','Surga itu mahal.. Akan tetapi orang miskin tetap mampu membelinya, Karena harganya bukan pada Harta melainkan Taqwa.','Ya Allah... Perbaikilah lisanku, Perbaikilah hatiku, Perbaikilah akhlakku, Perbaikilah hidupku, Aamiin..','Semoga hari ini Allah memudahkan setiap urusan kita, melapangkan hati kita serta meringankan langkah kita, dalam kebaikan kita Aamiin.','Peganglah aku, bacalah aku setiap hari, karena aku akan menjadi penerang didalam kuburmu nanti. #Al-Quran','Kematian..Kamu terlalu banyak bercanda. Hingga sampai kamu lupa, kematian mungkin tidak menunggumu selesai tertawa.','Jangan khawatirkan rizkimu, karena Allah telah menjaminnya untukmu, namun khawatirkanlah amalanmu, karena Allah tidak menjamin surga-Nya untukmu..','Wahai orang-orang yang beriman! Ingatlah kepada Allah, Dengan mengingat (nama-Nya) sebanyak-banyaknya dan bertasbihlah kepada-nya pada waktu pagi dan petang.','Aku sangat ingin menjadi pemburu surga. Namun aku lupa bahwa aku juga buronan neraka.','Karena aku percaya apapun yang menjadi milikku akan tetap menjadi milikku. Sejauh apapun dia (mencoba) pergi. Sejauh apapun usaha orang lain ingin merebutnya dariku. Aku hanya perlu percaya pada Allah bahwa yang menjadi milikku tidak akan pernah menjadi milik orang lain.','Andai hidayah itu seperti buah yang bisa kubeli, maka akan kubeli berkeranjang-keranjang untuk aku bagikan kepada orang-orang yang aku cintai.','Bila kamu tidak melihatku di syurga. Tolong tanya kepada Allah dimana aku, Tolonglah aku ketika itu..','Hanya Allah yang mengerti bagaimana sulitnya menahan sabar tanpa harus bercerita panjang lebar.','Letakkan hpmu lalu ambil air wudhu, shalatlah kamu, Allah menunggu curhatan darimu.','Maafin aku Ya Allah Gara gara aku mencintai dia tapi tidak pasti, sampai aku lupa mencintai mu juga.','Akan ada saatnya setelah salam dari sholatku, tanganmu yang pertama kali kusentuh.','Mungkin maksud Tuhan mempertemukan kamu dengannya adalah, sekedar mengingatkan bahwa tidak semua yang kamu inginkan bisa kamu dapatkan.','Percayalah Seorang wanita yang mencintai Allah. Allah akan berikan lelaki terbaik untuk menjaganya.','Berterimakasihlah kepada tuhan, Yang memberimu hidup dan kehidupan.','Mungkin kamu hanya harus sedikit peka untuk menyadari petunjuk dari Tuhan atas doa-doamu.']
					const isl = islami[Math.floor(Math.random() * islami.length)]
					islam = await getBuffer(`https://i.ibb.co/dPnjvD3/IMG-20210127-WA0018.jpg`)
					client.sendMessage(from, islam, image, { quoted: mek, caption: '*Quotes Islami*\n\n'+ isl })
					await limitAdd(sender)
					break	
		case 'quotesnasehat':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					const nasehat =['Jangan pernah mengabaikan apapun yang terjadi, suatu saat akan sadar dan menyesal, ingat tuhan akan selalu memberikan penyesalan terakhir ...','Ingat iya.. Perilaku mu bisa mengubah perasaan seseorang.','Setia itu bukan yang selalu ada, namun saat tak bersama dia tahu hatinya milik siapa.','Kamu perlu belajar satu hal : "Menghargai seriusnya seseorang."','Jangan cari yang sempurna, Sempurnakan saja yang ada.','Ketika seseorang menghina kamu, itu adalah sebuah pujian bahwa selama ini mereka menghabiskan banyak waktu untuk memikirkan kamu, bahkan ketika kamu tidak memikirkan mereka.','Yang terbaik tidak akan hilang. Jika dia hilang maka dia bukanlah yang terbaik.','Percayalah. Suatu hari nanti pasti akan ada seseorang yang bangga memilikimu.','Tidak ada karya yang pernah dibuat oleh seorang seniman yang malas.','Jika seseorang memberimu perhatian jangan pernah mengabaikannya karena suatu saat perhatian sekecil itu kamu rindukan saat kamu kesepian.','Bersyukurlah.. Untuk segala apapun yang engkau miliki saat ini, sebab nikmat itu akan bertambah ketika kamu dapat mensyukuri apa yang telah diberi saat ini. #Buat diri ini jangan banyak mengeluh yah.','Ada perbedaan antara menyerah dan tau kapan kamu merasa cukup dalam berusaha.','Jangan sampai kesenanganmu menyusahkan orang lain. Jangan pula kesusahanmu menyenangkan orang lain.','Semakin banyak kamu memberi, semakin banyak pula yang akan kembali padamu.','Jangan pernah bandingkan akhir kesuksesan orang lain dengan pertengahan prosesmu.','Lakukan apa yang kamu bisa, dengan apa kamu miliki, dimanapun kamu berada.','Hidup memang bukan balapan, tetapi kamu memang perlu untuk terus bergerak maju.','NIKMATI HIDUPMU, LUPAKAN UMURMU.','Sebaik-baiknya permintaan maaf adalah membaiknya tingkah laku.','Belajarlah memahami bahwa tidak semua keinginan bisa terpenuhi, barangkali itu adalah obat yang terbaik untuk mencegah kecewa dan sakit hati.','Kamu akan menemukan yang terbaik, ketika kamu sudah berhenti membanding-bandingkan.','Jangan menilai orang dari masa lalunya karena kita semua sudah tidak hidup disana. Semua orang bisa berubah, biarkan mereka membuktikannya.','Jika dia tidak merasakan kehadiranmu, buat dia merasakan kepergianmu.','Orang pintar mampu memecahkan masalah. Orang bijak mampu menghindarinya.','Bersikap tidak lagi peduli lebih baik dari pada balas dendam.','Tegas akan diri sendiri, buang pikiran negatif dan lakukan yang baik. Kegelisahan hanya milik mereka yang putus asa.','Jangan pikirkan kegagalan kemarin, hari ini sudah lain, sukses pasti diraih selama semangat masih menyengat.','Memaafkanmu bukan berarti memberimu kesempatan sekali lagi.','Berubah menjadi lebih baik adalah pilihan. Tapi, merasa paling baik adalah kesalahan.','Jangan pernah bandingkan dirimu dengan orang lain, tapi bandingkanlah dengan dirimu yang lalu, apakah hari ini sudah lebih baik?','Ketahuilah orang yang paling sering memberi nasihat kepadamu, itulah orang yang paling mencintai kamu.','Jangan pernah berhenti belajar, karena hidup tidak pernah berhenti mengajarkan.','Salah satu tanda dirimu tidak berakhlak adalah main HP ketika ada orang yang berbicara.','Raihlah kesuksesan yang tidak seseorangpun berfikir kamu bisa meraihnya. Buktikan pada mereka kalau kamu bisa!','Kesalahan adalah bukti nyata kalau kamu pernah mencoba. Jangan takut salah. Takutlah untuk melakukan kesalahan-kesalahan yang sama dua kalinya.','Cepat atau lambat bukan masalah. Selama kamu tetap bergerak maju, tidak ada akhirnya kamu akan tetap sampai tidak ada tujuan.','Jika kamu tidak bisa membahagiakan orang lain, Setidaknya janganlah kamu tambah dukanya.','Teruslah berusaha sampai temanmu berkata kepadamu "Sombong iya sekarang."','Ketika kamu melakukan sebuah kesalahan, Akuilah dan jangan ragu untuk meminta maaf. Tidak pernah ada satupun orang dalam sejarah yang mati tersedak karena menelan gengsinya sendiri.','Syukuri yang menyayangimu, Maafkan yang menyakitimu.','Tunjukkan keburukanmu, lalu lihat siapa yang bertahan.','Kamu boleh lelah, tetapi tidak boleh menyerah untuk selamanya.','Jangan pernah lupa bilang "Terima Kasih." Jangan pernah gengsi bilang "Maaf." Jangan pernah jadi terlalu sombong untuk bilang "Tolong."','Masa lalu tidak bisa berubah, diubah, dilupakan, ataupun di hapus. Masa lalu hanya bisa di terima','Kita ini.. sangat pintar menghakimi, Namun bodoh dalam memperbaiki diri.','Tidak peduli seberapa baiknya kamu, Kebaikan tidak akan berarti apa-apa jika kamu memberikan kepada orang yang salah.','Orang sabar selalu menang, Orang tamak selalu rugi, Orang marah selalu kalah, Orang baik selalu diuji.','Carilah tempat dimana kamu bisa dihargai, Bukan dibutuhkan. Karena banyak orang mencarimu hanya saat butuh saja, Hingga lupa bagaimana cara menghargaimu.','Melupakan orang yang melukaimu adalah hadiahmu untuk mereka. Memaafkan orang yang melukaimu adalah hadiahmu untuk dirimu sendiri.','Maafkan orang yang menyakitimu... Bukan karena mereka pantas di maafkan, Tapi karena kamu harus berbahagia.','Tetaplah kuat, Tetaplah positif, Buatlah mereka bertanya-tanya bagaimana kamu masih tetap bisa tersenyum.','Jangan meninggalkan yang pasti demi yang mungkin. Sebab semua kemungkinan, belum tentu menjadi kepastian.','Seseorang pernah berkata padaku, Merelakan bukan berarti menyerah, Tapi tidak bisa dipaksakan.','Ikuti alurnya, Nikmati prosesnya, Tuhan tau kapan kita harus bahagia.','Usia hanyalah angka, Hanya mereka yang terus berusaha yang berhasil.','Jangan pernah meremehkan siapapun! Karena sukses adalah balas dendam Terbaik.','Pria sejati.. Harus menyelesaikan apa yang sudah dimulai.','Jika kau ingin terbang, Kau harus melepaskan hal-hal yang membuatmu berat.','Siapapun yang meremehkan mu hari ini, Suatu saat harus kamu lewati.','Jangan Mencintai terlalu mudah, Jangan Percaya terlalu cepat, Jangan Berhenti terlalu dini, Jangan Berharap terlalu tinggi, Jangan Bicara terlalu banyak.','Jadilah orang baik tapi jangan biarkan orang lain mengambil keuntungan dari mu. Ketahuilah kapan kamu harus bilang tidak.','Sahabat sejati adalah mereka tau semua kelemahan mu, Tapi tidak menggunakan nya untuk menjatuhkan mu.','Ada tiga hal yang harus dimiliki dalam hidup yaitu : Perubahan, Pilihan dan Prinsip.','Orang bodoh mengira dirinya bijak. orang bijak tau dirinya bodoh.','Jatuh cintalah seperlunya.. Kemudian patah hatilah secukupnya. Karena semua ada porsinya, Karena semua ada masanya.','Kita tidak pernah tau jalan hidup seseorang.. Maka ada baiknya jika kita tidak menghakiminya atas keputusan dalam hidupnya.','Jangan pernah menyesal mengenal seseorang dalam hidupmu, Orang baik akan memberi mu Kebahagiaan, Orang jahat akan memberi mu Pengalaman, Bahkan seburuk-buruk manusia akan memberi mu Pelajaran.','Jangan menilai kedewasaan dari usia seseorang, Karena itu bukan jaminan.']
					const nsh = nasehat[Math.floor(Math.random() * nasehat.length)]
					nase = await getBuffer(`https://i.ibb.co/bspYPtC/IMG-20210125-WA0018.jpg`)
					client.sendMessage(from, nase, image, { quoted: mek, caption: '*Quotes Nasehat*\n\n'+ nsh })
					await limitAdd(sender)
					break	
		case 'quotescinta':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					const cinta =['SABAR MASIH TAHAP PEMBUATAN','MASIH TAHAP PEMBUATAN']
					const cin = cinta[Math.floor(Math.random() * cinta.length)]
					cta = await getBuffer(`https://i.ibb.co/vL5x6F7/IMG-20210126-WA0018.jpg`)
					client.sendMessage(from, cta, image, { quoted: mek, caption: '*Quotes Cinta*\n\n'+ cin })
					await limitAdd(sender)
					break
		case 'quotesmotivasi':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					const motiv =['Nilai sebuah tindakan terletak dalam usaha menyelesaikan sampai tuntas','Kebaikan adalah seorang yang matanya penuh perhatian, serta tangannya yang penuh manfaat','Hiduplah seperti kamu akan mati besok, dan berbahagialah seperti kamu akan hidup selamanya','Kita tidak usah saling menyalahkan, agar dimasa depan tak ada yang menuntut akan kesalahan','Ketika semua hal tidak sejalan dengan anda, ingatlah bahwa sebuah pesawat terbang melawan angin, bukan dengan mengikuti angin','Belajarlah menikmati apa yang kamu miliki, itu akan membuat hidupmu lebih bernilai','Selalu ada kegelapan yang tergelap sebelum terbitnya fajar','Sahabat itu seperti bintang, tak selalu Nampak tetapi selalu ada dihati','Sibuk bukanlah jaminan karir karena hasil jauh lebih didengar orang','semua kemajuan tidak akan ada tanpa kesalahan, kesalahan adalah bagian dari kemajuan selama diakui dan diperbaiki','Sukses meninggalkan jejak, gagal meninggalkan pelajaran, diam meninggalkan penyesalan','Keraguan bersahabat dekat dengan kegagalan','uang tidak merusak seseorang, keserakahan lah yang merusak manusia','Kepercayaan tidak bisa dibeli, tapi kepercayaan bisa dipelihara','Impian, target, kemauan dan tujuan semuanya sia-sia tanpa tindakan','usia bisa berbohong tapi kedewasaan tidak','Ada yang lebih berharga dari uang dan emas yaitu waktu','Tidak ada yang gagal mereka hanya berhenti terlalu cepat','Terasa sakit selalu hampir tidak ada rasanya setelah apa yang kita perjuangkan tercapai','Seseorang tidak bisa sukses seringkali karena kurangnya keberanian untuk mencobaterasa sakit selalu hampir tidak ada rasanya setelah apa yang kita perjuangkan tercapai','Bicaralah secukupnya, lakukanlah semampunya. Jangan melakukan sebaliknya','Ada saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan','jangan takut karena masalah yang anda hadapi tidak lebih besar dari jalan keluarnya, Allah siapkan bagi andaAda saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan','Kadang cara terbaik untuk Memanfaatkan peluang adalah dengan mengatakan tidak pada peluang baru dan fokus mengembangkan apa yang sudah ada di tanganjangan takut karena masalah yang anda hadapi tidak lebih besar dari jalan keluarnya, Allah siapkan bagi andaAda saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan','atasan hanya memberikan tugas berat pada karyawan terbaik, Allah hanya memberikan ujian pada pada manusia terbaikKadang cara terbaik untuk Memanfaatkan peluang adalah dengan mengatakan tidak pada peluang baru dan fokus mengembangkan apa yang sudah ada di tanganjangan takut karena masalah yang anda hadapi tidak lebih besar dari jalan keluarnya, Allah siapkan bagi andaAda saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan','berusaha dan gagal Ternyata jauh lebih melegakan daripada pasrah melihat ke kanan dengan tangan terlipat','lewat kesulitan lah manusia belajar, lewatnya kenyamanan lah manusia Terlena','Saat kita merasa hebat kita baru saja kehilangan separuh pangkat kita karena lengah untuk terus belajar','hidup seseorang telah ditebak, tapi Nasib orang malas mudah untuk ditebak','Orang pintar itu biasa orang hebat itu luar biasa tapi orang berani lah pemenangnyahidup seseorang telah ditebak, tapi Nasib orang malas mudah untuk ditebak','Orang hebat membicarakan ide, orang menengah membicarakan pengalaman, orang lemah membicarakan orang lainOrang pintar itu biasa orang hebat itu luar biasa tapi orang berani lah pemenangnyahidup seseorang telah ditebak, tapi Nasib orang malas mudah untuk ditebak','Anda tidak akan mengubah kehidupan sampai anda mengubah Apa yang anda lakukan setiap hari','bertahan saja tidak cukup anda perlu bereaksi terhadap tekanan dan merubah keadaan','masa depan kita tergantung pada apa yang kita lakukan pada saat ini. Maka jangan sia-siakan waktumu sekarang','Nilai manusia ditentukan bukan dari apa yang diperoleh melainkan apa yang telah diberikan','Malas adalah kemenangan saat ini dan kekalahan di masa nanti','sebuah masalah merupakan kesempatan bagi anda untuk mengeluarkan kemampuan terbaik anda','Kematian tidak dapat mengubur perbuatan baik seseorang','Asal percaya dengan sungguh-sungguh apapun keyakinan Anda dapat menjadi kenyataan','Jika ada hari buruk maka pasti akan hari ada hari baik tugas kita adalah terus bergerak majuAsal percaya dengan sungguh-sungguh apapun keyakinan Anda dapat menjadi kenyataan','Mengeluh adalah cara paling buruk dalam menyelesaikan masalah','Tetap Bertahan dan setia pada tujuan saat menghadapi Hambatan adalah kunci kesuksesan','Tidak perlu keahlian khusus untuk mencari musuh, tapi perlu kesetiaan untuk mempertahankan teman','Orang tua bukan hanya punya kekuatan untuk menatap juga untuk mengalah','Keuletan adalah tanda jadi kesuksesan','cepat atau lambat mereka yang menang adalah mereka yang berfikir dan yakin bahwa mereka bisa','Jaga terus Api Harapan Anda seperti menjaga hidup anda sendiri','Saat semua jalan tertutup. Buatlah jalan dan berserahlah kepada Allah','lari dari masalah bukanlah penyelesaian masalah, hadapi dan Belajarlah dari masalah itu','Rezeki itu ditangan Allah yang kita lakukan hanya berusaha semaksimal mungkin dan menyerahkan hasilnya kepada yang kuasa','Sukses dimulai dengan melakukan apa yang harus dilakukan','rasa syukur membuat kita tidak pernah merasa kekurangan','goal hanya sekedar goal kalau kita tidak mempunyai alasan yang kuat Mengapa kita harus mencapainya','Apapun yang terjadi Yakinlah bahwa Allah menginginkan kita akan jadi lebih baik karena Kejadian ini','orang yang paling Bahagia bukanlah orang yang punya hal-hal terbaik tapi orang yang bisa menjadikan hal-hal yang ia punya menjadi yang terbaikApapun yang terjadi Yakinlah bahwa Allah menginginkan kita akan jadi lebih baik karena Kejadian ini','Respon kita terhadap masalah menentukan kualitas berita fokus pada solusi','Semua yang terlalu sedikit dan terlalu banyak tidak akan membawa kebaikan','Tidak semua usaha kita dibayar oleh manusia, tapi Allah akan membayarnya kelak','Tidak ada harga untuk waktu, tetapi waktu sangat berharga','Sukses seringkali datang pada mereka yang berani bertindak dan jarang menghampiri pada mereka yang dikalahkan ketakutan','Katakan bisa pasti bisa dengan penuh keyakinan otak kita akan segera mencari solusi','Orang yang tidak belajar dari kegagalan adalah orang yang gagal sesungguhnya','Segala sesuatu masalah yang menimpa Anda tidak akan pernah melatih kekuatan anda untuk menyelesaikannya','Saat orang lain melakukan impianmu itu berarti mereka belum mampu melihat sejauh anda melihat','Allah tidak pernah terlambat ia akan menunjukkan kuasanya, pada detik terakhir sekalipun','Bukan banyaknya panah yang menentukan kemenangan tapi tajam panah dan tujuannya yang menentukan','Mengeluh itu sisi lain dari pemborosan, pemborosan waktu dan energy','Pikiran negatif sangat berkuasa bila diberi kesempatan, jadi jangan memberinya kesempatan','Cinta akan membuat kita menjadi orang terkaya di dunia, oleh karena itu mulailah mencintai','Cemas yang berlebihan tidak akan mengubah apapun kecuali merusak diri sendiri','Hidup ini sederhana terkadang pikiran manusia yang membuatnya rumit','Siapa yang bisa menerima kelemahannya sesungguhnya baru saja menambah satu kelebihan pada dirinya','Ada saatnya dimana kekalahan rasa manis yaitu Saat anda sudah melakukan yang terbaik','Menabung itu hanya untuk mempertahankan kekayaan, untuk meningkatkannya berinvestasilah','Jika selamanya anda bermain aman, selamanya juga Anda di tempat yang sama','Lari dari masalah akan membuat masalah menjadi lebih besar, menghadapinya akan membuat anda menjadi lebih besar','Yang menyedihkan bukanlah bidikan yang meleset tapi bidikan tanpa target','Hati yang sedang panas menumpulkan logika dinginkan terlebih dahulu sebelum mengambil keputusan','bila ingin hasil yang besar jangan kerjakan hal yang mudah saja','Jangan biarkan impianmu dijajah oleh pendapat orang lain','Mulailah dengan yang kecil, Kerjakanlah dengan cara yang besar adalah dengan cara yang benar','Pengaruh perkataan orang kepada anda 100% adalah atas izin anda sendiri','Bekerjalah dengan ikhlas karena bekerja tanpa paksaan akan memberi hasil maksimal','Suka belajar, suka jualan, hidup hemat, beli aset suka, sedekah adalah 5 resep Makmur','Lebih baik menjadi raja tikus daripada ekor naga','Kerja keras dan kerja cerdas dapat memastikan keberhasilan dan sedekah dapat memudahkannya','Sakit dalam perjuangan itu hanya berlangsung sementara, namun jika anda menyerah rasa sakit itu akan terasa selamanya','Kegagalan terbesar adalah ketika tidak berani mencoba','Langkah pertama yang diperlukan untuk mendapatkan hal yang anda inginkan adalah memutuskan apa yang anda inginkan','Jangan takut menghadapi masa depan, hadapi dan perjuangkanlah','Dahulukan Allah dalam setiap langkah hidupmu maka semuanya akan ditambahkan kepadamu','Kesulitan adalah hujan terbaik untuk menunjukkan kualitas diri yang sebenarnya','Kesalahan dan kegagalan adalah guru terbaik jika kita mau jujur mengakui dan belajar darinya','Diam belum tentu menyelesaikan masalah tapi setidaknya tidak membesarkan masalah','Pemenang sejati selalu memberikan 100% upayanya, bahkan ketika tidak seorang pun melihatnya','Memaafkan orang lain bagai Menyiram air Bara dendam di hati baik untuk kesehatan kita','Jenius adalah 1 inspirasi dan 99 keringat tidak ada yang dapat menggantikan kerja keras','Disiplin memang tidak mudah tapi tanpa kedisiplinan hidup anda akan jauh lebih sulit','Orang yang berhenti belajar akan menjadi pemilik masa lalu, orang yang terus belajar akan menjadi pemilik masa depan','Hujan tidak hanya datang sendirian Ia datang bersama kesejukan, hal buruk tidak datang sendirian ia datang bersama pembelajaran','Menang atau kalah lakukanlah dengan jujur','Lihatlah tantangan sebagai ujian dan lihatlah masalah Sebagai teguran','Lihat ke atas agar terinspirasi lihat ke bawah agar bersyukur','Untuk meraih apa yang benar-benar anda inginkan fokus saja tidak cukup. Anda harus memiliki rasa lapar untuk meraihnya','90% dari kegagalan berasal dari orang-orang yang memiliki kebiasaan membuat alasan-alasan','Allah tidak membenci orang malas, tapi Allah mengizinkan orang rajin mengambil rezeki orang malas','Keajaiban itu nyata bagi mereka yang yakin berserah diri dan bekerja keras','Orang optimis dapat melihat peluang dalam masalah, orang pesimis akan melihat masalah dalam peluangKeajaiban itu nyata bagi mereka yang yakin berserah diri dan bekerja keras','Kualitas pikiran anda menentukan kualitas kehidupan anda','Bersyukur adalah cara ampuh untuk meraih energi yang dahsyat, Sudahkah anda bersyukur hari ini','Jangan mengharapkan sesuatu yang luar biasa jika anda hanya mau melakukan hal yang biasa saja','Kebahagiaan dimulai dengan ketulusan','1000 perkataan dan pengetahuan tidak berarti tanpa adanya satu tindakan yang nyata','Tangkap peluang, kerjakan, selesaikan','Ketika situasi di sekolah Anda tidak menyenangkan. Di saat itulah sebenarnya karakter anda sedang dibentuk','Seorang pemberani bukan orang yang tidak mempunyai rasa takut. Tapi orang yang mampu berjalan diatas rasa takutnya','dalam takut yang tampak adalah hambatan, dalam yakin yang tampak adalah kesempatan','Tidak ada kata gagal yang ada hanya sukses atau perlu belajar lagi sampai berhasil','Menjadi tua itu pasti menjadi dewasa itu pilihan','Kehidupan yang besar dimulai dari mimpi yang besar','Tragedi dalam kehidupan ini bukanlah yang berakhir terlalu cepat, tetapi kita menunggu terlalu lama untuk memulainya','Takut akan kegagalan seharusnya tidak menjadi alasan untuk tidak mencoba sesuatu','Hari ini adalah hari pertama dalam hidup anda. Buatlah hari ini menjadi hari yang terbaik sepanjang hidup anda dan semoga hari esok matahari bersinar dengan terang','Saya berpikir bahwa ada suatu hal yang lebih penting daripada sekedar percaya, tindakan Dunia ini penuh dengan pemimpi ,tidaklah banyak orang yang berani maju ke depan dan Mulai mengambil langkah pasti untuk mewujudkan visi mereka','Anda tidak dapat mengubah masa lalu anda dan janganlah terlalu khawatir dengan hari esok .Hari ini adalah hari yang dapat mengubah masa depan Anda','Allah, aku tahu bahwa saat aku kehilangan sesuatu engkau sedang mempersiapkan hal yang lebih baik untukkuAnda tidak dapat mengubah masa lalu anda dan janganlah terlalu khawatir dengan hari esok .Hari ini adalah hari yang dapat mengubah masa depan Anda','Pergilah sejauh mungkin dan ketika anda tiba di sana anda akan melihat lebih jauh lagiAllah, aku tahu bahwa saat aku kehilangan sesuatu engkau sedang mempersiapkan hal yang lebih baik untukkuAnda tidak dapat mengubah masa lalu anda dan janganlah terlalu khawatir dengan hari esok .Hari ini adalah hari yang dapat mengubah masa depan Anda','Menangis dapat melepaskan tambahan hormon stress, itulah mengapa kita sehabis menangis merasa lebih baikPergilah sejauh mungkin dan ketika anda tiba di sana anda akan melihat lebih jauh lagiAllah, aku tahu bahwa saat aku kehilangan sesuatu engkau sedang mempersiapkan hal yang lebih baik untukkuAnda tidak dapat mengubah masa lalu anda dan janganlah terlalu khawatir dengan hari esok .Hari ini adalah hari yang dapat mengubah masa depan Anda','Ketika cinta itu dipertahankan kamu akan tau siapa yang lebih menghargai tentang sebuah hubungan','Dalam hidup ini banyak orang tahu apa yang harus dilakukan, tetapi hanya sedikit yang melakukan apa yang ia ketahui. Mengetahui tidaklah cukup, Anda harus mengambil tindakan','Berilah perhatian lebih ke orang yang kamu sayangi, itu yang mereka butuhkan','Satu ons tindakan sama berharganya dengan satu ton teori','Kita mungkin terpisah sejak lama ketika tak mampu belajar untuk lebih dewasa','Sayangilah dia walau tidak sesempurna seperti yang kau inginkan','Kecantikan akan mengundang perhatian sikap santun memikat Kalbu','Mengetahui tidaklah cukup kita harus melakukannya, keinginan tak cukup hanya dengan berangan kita harus melakukannya','Kesalahan adalah bukti bahwa kamu sedang mencoba','Betapapun jauhnya air mengalir ia takkan pernah lupa hulunya','Lebih baik sendiri daripada bersama dengan orang yang salahBetapapun jauhnya air mengalir ia takkan pernah lupa hulunya','Lakukan sesuatu hari ini yang akan membuat dirimu berterima kasih di hari-hari mendatang','Waktu yang memutuskan Dengan siapa kamu akan berjumpa','Hati yang memutuskan siapa yang kamu inginkan dalam hidup ini','Dengan sikap yang akan menentukan siapa yang akan bertahan dalam hidupmu','Menjadi dewasa dan bijak diawali dengan menjadi muda dan bodoh','Lakukanlah apa yang paling kamu takutkan dalam hidupmu','Bekerjalah seolah kamu tak butuh uang, Cintailah seolah Kamu takkan Tersakiti dan menarilah seakan tak ada yang melihatmu','Jika hari ini sudah sempurna maka Apalah arti hari esok','Bintang pun tak kan bersinar tanpa kegelapan','Suatu saat aku akan menjadi tempat yang akan selalu kau rindu','Guru terbaik kamu adalah kesalahan terakhir yang kamu lakukan','Diam adalah respon terbaik untuk orang bodoh','Jangan pernah membuat keputusan yang permanen untuk perasaan yang sementara','Jika Allah yang menjadi alasan anda untuk hidup maka takkan pernah ada alasan untuk menyerah','Kegagalan ada bukan untuk ditakuti tetapi untuk dipelajari','Anda saat ini adalah hasil dari pengalaman anda','Keberuntungan adalah saat kesempatan datang, anda telah matang dengan segala persiapan','Jangan Menunggu hari yang terbaik untuk melangkah karena setiap hari sangatlah berharga','Keputusan yang baik diperoleh dari pengalaman, dan pengalaman didapat dari keputusan yang buruk','Setiap waktu yang anda lewati dengan sia-sia hanya menjauhkan anda dan semakin jauh dari kata sukses','Realitas kehidupan Anda adalah deskripsi dari jiwa dan pikiran anda','Berani mengambil keputusan maka anda telah melangkah 10 kali lebih cepat untuk sukses','Allah masih mencintai anda jika masih banyak cobaan dan tantangan hidup yang datang menghampiri anda. Allah percaya bahwa anda mampu melaluinya, maka jagalah kepercayaan itu','Ketika orang mengatakan anda sudah berubah sebenarnya itu hanya karena anda berhenti melakukan apa yang mereka ingin anda lakukan','Jangan menukar apa yang sangat anda inginkan untuk apa yang Anda ingin untuk saat ini','Orang-orang yang mengikuti keramaian biasanya tersesat di dalamnya','Orang tua saya bekerja terlalu keras untuk saya bukan supaya saya tidak hanya menjadi orang biasa tetapi menjadi orang luar biasa','Anda menghalangi impian anda ketika anda mengizinkan ketakutan Anda tumbuh lebih besar dari keyakinan anda','Sang juara percaya kepada dirinya sendiri bahkan ketika orang lain tidak percaya','Hanya mereka yang berani mengambil resiko yang jauh pasti dapat menemukan Seberapa jauh seseorang dapat pergi','Tunjukkan teman Anda, saya akan menunjukkan masa depan Anda','Beberapa orang ingin sesuatu terjadi, beberapa orang berharap itu akan terjadi, yang lain mewujudkannya jadi kenyataan','Jika anda menghabiskan waktu untuk mencoba menjadi baik dalam segala hal, Anda tidak akan pernah menjadi hebat dalam apapun','Sebuah perjalanan ribuan mil dimulai dari langkah kecil','Apa yang akan Anda kerjakan, Ketika anda tahu anda tidak mungkin gagal','Ketika kita memiliki satu sama lain, kita Memiliki segalanya','Kebesaran sebenarnya dapat ditemukan dalam hal hal kecil yang terkadang kita lewatkan','Bekerja keraslah, Bermimpilah lebih besar dan jadilah yang terbaik','Apa yang kita pikirkan menentukan apa yang akan terjadi pada kita. Jadi jika kita ingin mengubah hidup kita, kita perlu sedikit mengubah pikiran kita.','Seseorang yang berani membuang satu jam waktunya tidak mengetahui nilai dari kehidupan.','Saya memiliki filosofi yang sederhana: isi apa yang kosong, kosongkan apa yang terlalu penuh.','Hidup adalah cermin dan akan merefleksikan kembali kepada para pemikir mengenai apa yang mereka pikirkan.','Anda di sini hanya untuk persinggahan yang singkat. Jangan terburu, jangan khawatir. Yakinlah bahwa Anda menghirup wangi bunga sepanjang perjalanan.Hidup adalah cermin dan akan merefleksikan kembali kepada para pemikir mengenai apa yang mereka pikirkan.','Hidup adalah serangkaian perubahan yang alami dan spontan. Jangan tolak mereka karena itu hanya membuat penyesalan dan duka. Biarkan realita menjadi realita. Biarkan sesuatu mengalir dengan alami ke manapun mereka suka.','Hidup yang baik adalah hidup yang diinspirasi oleh cinta dan dipandu oleh ilmu pengetahuan.','Kenyataannya, Anda tidak tahu apa yang akan terjadi besok. Hidup adalah pengendaraan yang gila dan tidak ada yang menjaminnya.','Hidup adalah mimpi bagi mereka yang bijaksana, permainan bagi mereka yang bodoh, komedi bagi mereka yang kaya, dan tragedi bagi mereka yang miskin','Hidup itu bukan soal menemukan diri Anda sendiri, hidup itu membuat diri Anda sendiri.','Hal yang paling penting adalah menikmati hidupmu, menjadi bahagia, apapun yang terjadi.','Hidup itu sederhana, kita yang membuatnya sulit.']
					const vasi = motiv[Math.floor(Math.random() * motiv.length)]
					vass = await getBuffer(`https://i.ibb.co/346nsHC/56806462-399407660892553-4745814299438481408-o.jpg`)
					client.sendMessage(from, vass, image, { quoted: mek, caption: '*Motivasi*\n\n'+ cin })
					await limitAdd(sender)
					break
                case 'fotocewek':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
	                                const cangti = ['https://i.ibb.co/1T1DCz7/cewek-thailand-20200325-007-non-fotografer-kly.jpg','https://i.ibb.co/FsJ6jjs/kucing2.jpg','https://i.ibb.co/vvkdS7n/kucing3.jpg','https://i.ibb.co/1QHWxts/kucing4.jpg','https://i.ibb.co/JQmRz4n/kucing5.jpg','https://i.ibb.co/tBwrFkG/kucing6.jpg','https://i.ibb.co/dp0YhYm/kucing7.jpg','https://i.ibb.co/R03smZT/kucing8.jpg','https://i.ibb.co/17tw0dp/kucing9.jpg','https://i.ibb.co/7XdGGqc/kucing10.jpg','https://i.ibb.co/XL9PZxg/kucing11.jpg','https://i.ibb.co/gyjvXWN/kucing12.jpg','https://i.ibb.co/R4gg4wH/kucing13.jpg','https://i.ibb.co/PmLYtFm/kucing14.jpg','https://i.ibb.co/XbSDh47/kucing15.jpg','https://i.ibb.co/kSXNJzt/kucing16.jpg']
                                        let cangtip = cangti[Math.floor(Math.random() * cangti.length)]
                                        client.sendMessage(from, cangtip, image, {quote: mek})
					await limitAdd(sender)
                                        break
                /*case 'kucing':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
	                                const kucings = ['https://i.ibb.co/vvmp82w/kucing1.jpg']
                                        let kucigz = kucings[Math.floor(Math.random() * kucings.length)]
                                        client.sendMessage(from, kucigz, image, {quote: mek})
					await limitAdd(sender)
                                        break*/
		case 'ssweb':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if (args.length < 1) return reply('Urlnya mana kak?')
					teks = body.slice(7)
					client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/screenshotweb?url=${teks}`)
					buffer = await getBuffer(anu.gambar)
					client.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
					break
		case 'loli':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                                        gatauda = body.slice(6)
					client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomloli?apikey=${TobzKey}`, {method: 'get'})
                                        buffer = await getBuffer(anu.result)
                                        client.sendMessage(from, buffer, image, {quoted: mek2})
					await limitAdd(sender)
                                        break
		/*case 'waifu':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					gatauda = body.slice(7)
					client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
					data = await fetchJson('https://waifu.pics/api/sfw/neko')
					hasil = await getBuffer(data.url)
					client.sendMessage(from, hasil, image, {quoted: mek})
					await limitAdd(sender)
					break*/
		/*case 'loli2':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					gatauda = body.slice(7)
					client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
					data = await fetchJson('https://akaneko-api.herokuapp.com/api/loli')
					hasil = await getBuffer(data.url)
					client.sendMessage(from, hasil, image, {quoted: mek})
					await limitAdd(sender)
					break*/
		case 'hentai2':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					
					if (!isNsfw) return reply(ind.nsfwoff())
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					gatauda = body.slice(9)
					client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
					data = await fetchJson('https://akaneko-api.herokuapp.com/api/hentai')
					hasil = await getBuffer(data.url)
					client.sendMessage(from, hasil, image, {quoted: mek2})
					await limitAdd(sender)
					break
		case 'animecry':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					await limitAdd(sender)
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/cry?apikey=${TobzKey}', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek2})
						fs.unlinkSync(rano)
					})
					break
		case 'animehug':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					await limitAdd(sender)
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/hug?apikey=${TobzKey}', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
		case 'pokemon':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					anu = await fetchJson(`https://fdciabdul.tech/api/rep.php?gambar=pokemon`, {method: 'get'})
					client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek2 })
					await limitAdd(sender)
					break
				case 'freefireimg':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					anu = await fetchJson(`https://fdciabdul.tech/api/rep.php?gambar=freefire`, {method: 'get'})
					client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
				case 'ww2':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					anu = await fetchJson(`https://fdciabdul.tech/api/rep.php?gambar=ww2`, {method: 'get'})
					client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
                case 'anjing':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					anu = await fetchJson(`https://fdciabdul.tech/api/rep.php?gambar=anjing`, {method: 'get'})
					client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break

                case 'kucing':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					anu = await fetchJson(`https://fdciabdul.tech/api/rep.php?gambar=kucing`, {method: 'get'})
					client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'doraemon':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					data = await fetchJson(`https://fdciabdul.tech/api/rep.php?gambar=doraemon`, {method: 'get'})
					client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'hamster':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://fdciabdul.tech/api/rep.php?gambar=aesthetic-hamsters`, {method: 'get'})
					client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
		case 'kelinci':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://fdciabdul.tech/api/rep.php?gambar=aesthetic-rabbit`, {method: 'get'})
					client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
					case 'nangis':
				if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/cry?apikey=${TobzKey}', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
                case 'blowjob':
				if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (!isNsfw) return reply(ind.nsfwoff())
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey=${TobzKey}', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
					case 'cium':
				if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (!isNsfw) return reply(ind.nsfwoff())
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/kiss?apikey=${TobzKey}', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
					case 'peluk':
				if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (!isNsfw) return reply(ind.nsfwoff())
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/hug?apikey=${TobzKey}', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
				case 'husbu':
				if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (!isNsfw) return reply(ind.nsfwoff())
				    try {
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/husbu?apikey=${TobzKey}`)
						buffer = await getBuffer(res.image)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Ingat! Cintai husbumu'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					await limitAdd(sender)
					break
                case 'ranime':
				if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (!isNsfw) return reply(ind.nsfwoff())
					gatauda = body.slice(8)
					client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomanime?apikey=${TobzKey}`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
					break
				//anime
				/*case 'waifu':
				   	anu = await fetchJson(`https://arugaz.herokuapp.com/api/waifu`)
				  	buf = await getBuffer(anu.image)
				   	texs = ` *anime name* : ${anu.name} \n*deskripsi* : ${anu.desc} \n*source* : ${anu.source}`
				   	client.sendMessage(from, buf, image, { quoted: mek, caption: `${texs}`})
				        break*/
					case 'animeboy':
					anu = await fetchJson(`https://fdciabdul.tech/api/rep.php?gambar=anime%20boy`, {method: 'get'})
					client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					break
					case 'animegirl':
					anu = await fetchJson(`https://fdciabdul.tech/api/rep.php?gambar=anime%20girl`, {method: 'get'})
					client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					break

				case 'animeimg':
					anu = await fetchJson(`https://fdciabdul.tech/api/rep.php?gambar=anime`, {method: 'get'})
					client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					break

				case 'loli':
					anu = await fetchJson(`https://fdciabdul.tech/api/rep.php?gambar=loli`, {method: 'get'})
					client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					break
	
                		case 'dewabatch':
                    			teks = body.slice(11)
                    			anu = await fetchJson(`https://arugaz.herokuapp.com/api/dewabatch?q=${teks}` , {method: 'get'})
                    			thum = await getBuffer(anu.thumb)
                    			client.sendMessage(from, thum, image, {quoted: mek, caption: `${anu.result}`})
                 			break
			   case 'animequotes':
				
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/quotesnime/random`, {method: 'get'})
					reply(anu.data.quote)
					await limitAdd(sender)
					break
		case 'mobil':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://fdciabdul.tech/api/rep.php?gambar=cars`, {method: 'get'})
					client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek2 })
					await limitAdd(sender)
					break
		case 'motor':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://fdciabdul.tech/api/rep.php?gambar=motorcycle`, {method: 'get'})
					client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek2 })
					await limitAdd(sender)
					break
		case 'sepeda':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://fdciabdul.tech/api/rep.php?gambar=bicycle`, {method: 'get'})
					client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek2 })
					await limitAdd(sender)
					break
		case 'bluesky':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://fdciabdul.tech/api/rep.php?gambar=aesthetic-blue-sky`, {method: 'get'})
					client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek2 })
					await limitAdd(sender)
					break
		case 'flower':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://fdciabdul.tech/api/rep.php?gambar=aesthetic-flower`, {method: 'get'})
					client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek2 })
					await limitAdd(sender)
					break
		case 'icecream':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://fdciabdul.tech/api/rep.php?gambar=aesthetic%20ice%20cream`, {method: 'get'})
					client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek2 })
					await limitAdd(sender)
					break
		case 'pemandangan':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://fdciabdul.tech/api/rep.php?gambar=aesthetic%20pemandangan%20alam`, {method: 'get'})
					client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek2 })
					await limitAdd(sender)
					break
		case 'osakana':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://fdciabdul.tech/api/rep.php?gambar=osakana`, {method: 'get'})
					client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek2 })
					await limitAdd(sender)
					break
		case 'menherachan':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://fdciabdul.tech/api/rep.php?gambar=menhera-chan`, {method: 'get'})
					client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek2 })
					await limitAdd(sender)
					break
		case 'uzumakinaruto':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://fdciabdul.tech/api/rep.php?gambar=naruto%20uzumaki%20wallpaper%20hd`, {method: 'get'})
					client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek2 })
					await limitAdd(sender)
					break
		case 'animegirl':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://fdciabdul.tech/api/rep.php?gambar=anime-girl`, {method: 'get'})
					client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek2 })
					await limitAdd(sender)
					break
		case 'animeboy':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://fdciabdul.tech/api/rep.php?gambar=anime-boy`, {method: 'get'})
					client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek2 })
					await limitAdd(sender)
					break
		case 'quotesid':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://fdciabdul.tech/api/rep.php?gambar=quotes%20indonesia`, {method: 'get'})
					client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek2 })
					await limitAdd(sender)
					break
		case 'quotesen':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://fdciabdul.tech/api/rep.php?gambar=quotes`, {method: 'get'})
					client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek2 })
					await limitAdd(sender)
					break
		case 'katakata':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://fdciabdul.tech/api/rep.php?gambar=katakata`, {method: 'get'})
					client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek2 })
					await limitAdd(sender)
					break
		case 'katamotivasi':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://fdciabdul.tech/api/rep.php?gambar=kata%20motivasi`, {method: 'get'})
					client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek2 })
					await limitAdd(sender)
					break
		case 'kehidupan':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://fdciabdul.tech/api/rep.php?gambar=kata%20kata%20bijak%20kehidupan`, {method: 'get'})
					client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek2 })
					await limitAdd(sender)
					break
		case 'islami':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://fdciabdul.tech/api/rep.php?gambar=quotes%20islami`, {method: 'get'})
					client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek2 })
					await limitAdd(sender)
					break
        case 'mikasa':
        case 'eren':
        case 'titan':
        case 'levi':
        case 'neji':
        case 'jiraya':
        case 'tsunade':
        case 'kiba':
        case 'sarada': 
        case 'madara':
        case 'obito':
        case 'tanjiro':
        case 'nezuko':
        case 'luffy':
        case 'zoro':
        case 'sanji':
        case 'gon':
        case 'killua':
        case 'sagiri':
        case 'rimuru':
        case 'natsu':
        case 'genos':
        case 'saitama':
                client.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://fdciabdul.tech/api/rep.php?gambar=karakter anime ${command} hd`, {method: 'get'})
				masa = JSON.parse(JSON.stringify(data));
				laiya =  masa[Math.floor(Math.random() * masa.length)];
				tollp = await getBuffer(laiya)
				client.sendMessage(from, tollp, image, {quoted: mek2})
				break
		case 'fototiktok':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					gatauda = body.slice(12)
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/tiktokpp?user=${gatauda}` , {method: 'get'})
					buffer = await getBuffer(anu.result)
					reply(buffer)
					await limitAdd(sender)
					break
		case 'map':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/maps?search=${body.slice(5)}`, {method: 'get'})
					buffer = await getBuffer(anu.gambar)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: `${body.slice(5)}`})
					await limitAdd(sender)
					break
                case 'kbbi':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if (args.length < 1) return reply('Apa yang mau dicari kak?')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/kbbi?search=${body.slice(6)}`, {method: 'get'})
					reply('Menurut Kbbi:\n\n'+anu.result)
					await limitAdd(sender)
					break
                case 'artinama':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if (args.length < 1) return reply('Apa yang mau dicari kak?')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/arti?nama=${body.slice(10)}`, {method: 'get'})
					reply('Menurut nama:\n\n'+anu.result)
					await limitAdd(sender)
					break
		case 'quran':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					anu = await fetchJson(`https://api.banghasan.com/quran/format/json/acak`, {method: 'get'})
					quran = `${anu.acak.ar.teks}\n\n${anu.acak.id.teks}\nQ.S ${anu.surat.nama} ayat ${anu.acak.id.ayat}`
					client.sendMessage(from, quran, text, {quoted: mek})
					await limitAdd(sender)
					break
		case 'quran':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					anu = await fetchJson(`https://api.banghasan.com/quran/format/json/acak`, {method: 'get'})
					quran = `${anu.acak.ar.teks}\n\n${anu.acak.id.teks}\nQ.S ${anu.surat.nama} ayat ${anu.acak.id.ayat}`
					client.sendMessage(from, quran, text, {quoted: mek})
					await limitAdd(sender)
					break
		case 'jadwalsholat':
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (args.length < 1) return reply('kota nya mana kak?')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/jadwalshalat?q=${body.slice(14)}&apikey=${TobzKey}`, {method: 'get'})
					sholat = `Ashar : ${anu.result.ashar}\nDzuhur : ${anu.result.dzuhur}\nMagrib : ${anu.result.maghrib}\nIsha : ${anu.result.isha}\nSubuh : ${anu.result.subuh}`
					client.sendMessage(from, sholat, text, {quoted: mek})
					await limitAdd(sender)
					break
                case 'neonime':
				        
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				        
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/neonime_lastest`, {method: 'get'})
					teks = '################\n'
					for (let i of data.result) {
						teks += `*Title* : ${i.judul}\n*link* : ${i.link}\n*rilis* : ${i.rilis}\n###############\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
					case 'sticker':
					case 'stiker':
					case 'stick':
					case 's':
				if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(ind.stikga)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata(namo, ator)} ${ran} -o ${ran}`, async (error) => {
									//if (error) {
											// reply(ind.stikga())
											// fs.unlinkSync(media)	
											// fs.unlinkSync(ran)
											// }
									client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: ftroli, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
									fs.unlinkSync(media)	
									fs.unlinkSync(ran)	
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: ftroli, contextInfo: { forwardingScore: 508, isForwarded: true}})
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(` Gagal, pada saat mengkonversi ${tipe} ke stiker`)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata(namo, ator)} ${ran} -o ${ran}`, async (error) => {
									//if (error) {
											// reply(ind.stikga())
											// fs.unlinkSync(media)	
											// fs.unlinkSync(ran)
											// }
									client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: ftroli, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
									fs.unlinkSync(media)
									fs.unlinkSync(ran)
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else {
						reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
					}
					break
		case 'ocr': 
					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply(`*Kirim foto dengan caption ${prefix}ocr*`)
					}
					await limitAdd(sender)
					break
		case 'gtts':
		case 'tts':
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (args.length < 1) return client.sendMessage(from, 'Diperlukan kode bahasa kak!!', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return client.sendMessage(from, 'Mana teks yang mau di jadiin suara? suara setan kah?', text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 500
					? reply('Textnya kebanyakan setan!! 😤')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buffer = fs.readFileSync(rano)
							if (err) return reply(ind.stikga())
							client.sendMessage(from, buffer, audio, {quoted: mek2, ptt:true})
							fs.unlinkSync(rano)
						})
					}) 
					await limitAdd(sender)
					break
		case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return client.sendMessage(from, 'Only Admin Bot',MessageType.text, { quoted: ftroli, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					prefix = args[0]
					client.sendMessage(from, `*Prefix berhasil di ubah menjadi* : ${prefix}`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					break 
		case 'setprefixx':
					if (args.length < 1) return
					if (!isAdmin) return client.sendMessage(from, 'Only Admin Bot',MessageType.text, { quoted: ftroli, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					prefix = args[0]
					client.sendMessage(from, `*Prefix berhasil di ubah menjadi* : ${prefix}`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					break 
		case 'setlimit':
		case 'addlimit':
					if (args.length < 1) return
					if (!isOwner) return client.sendMessage(from, 'Only Admin Bot',MessageType.text, { quoted: ftroli, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					limitawal = args[0]
					client.sendMessage(from, `*Limit berhasil di ubah menjadi* : ${limitawal}`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					break 
		case 'setlimitt':
		case 'addlimitt':
					if (args.length < 1) return
				    if (!isAdmin) return client.sendMessage(from, 'Only Admin Bot',MessageType.text, { quoted: ftroli, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					limitawal = args[0]
					client.sendMessage(from, `*Limit berhasil di ubah menjadi* : ${limitawal}`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					break 
		case 'setmemlimit':
					if (args.length < 1) return
					if (!isOwner) return client.sendMessage(from, 'Only Admin Bot',MessageType.text, { quoted: ftroli, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if (isNaN(args[0])) return reply('Limit harus angka')
					memberlimit = args[0]
					client.sendMessage(from, `Change Member limit To ${memberlimit} SUCCESS!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					break 
		case 'setmemlimitt':
					if (args.length < 1) return
				    if (!isAdmin) return client.sendMessage(from, 'Only Admin Bot',MessageType.text, { quoted: ftroli, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if (isNaN(args[0])) return reply('Limit harus angka')
					memberlimit = args[0]
					client.sendMessage(from, `Change Member limit To ${memberlimit} SUCCESS!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					break 
		case 'tiktokstalk':
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				try {
						if (args.length < 1) return client.sendMessage(from, 'Username mana kak?',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
						let { user, stats } = await tiktod.getUserProfileInfo(args[0])
						client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
						teks = `*ID* : ${user.id}\n*Username* : ${user.uniqueId}\n*Nickname* : ${user.nickname}\n*Followers* : ${stats.followerCount}\n*Followings* : ${stats.followingCount}\n*Posts* : ${stats.videoCount}\n*Luv* : ${stats.heart}\n`
						buffer = await getBuffer(user.avatarLarger)
						client.sendMessage(from, buffer, image, {quoted: fgif, caption: teks})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('*(ERROR)* *Kemungkinan username tidak valid*')
					}
					await limitAdd(sender)
					break
                 case 'linkgc':
				if (!isGroup) return reply(ind.groupo())
				
				if (!isBotGroupAdmins) return reply(ind.badmin())
				linkgc = await client.groupInviteCode (from)
				yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				client.sendMessage(from, yeh, MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				await limitAdd(sender)
				break
		case 'hargaprem':
		case 'hargapremium':
					client.sendMessage(from, 'Level 100 = Free 3 day (premium)\n10k = 30day (premium)',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					break
		case 'buypremium':
					client.sendMessage(from, 'Ingin membeli premium?\nHarap hubungi kami : wa.me/6283815956151',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					break

		case 'wa.me':
		case 'wame':
  					
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
  					client.updatePresence(from, Presence.composing) 
  					options = {
  					text: `「 *SELF WHATSAPP* 」\n\n_Request by_ : *@${sender.split("@s.whatsapp.net")[0]}\n\nYour link WhatsApp : *https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
  					contextInfo: { mentionedJid: [sender] }
  					}
  					client.sendMessage(from, options, MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
  					break
  					if (data.error) return reply(data.error)
  					reply(data.result)
					await limitAdd(sender)
  					break
		case 'tagall2':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					query = args.join(" ")
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n'
					for (let mem of groupMembers) {
						teks += `├ ${fxsx} *@${mem.jid.split('@')[0]}*\n`
						members_id.push(mem.jid)
					}
					mentions(`┌───「PINKY TAG」───\n│•Dari: ${pushname}\n│•Pesan: *${query}*\n├──────────────`+ teks +'└───「 *NUYFAA* 」────', members_id, true)
					break
					case 'tagall':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					query = args.join(" ")
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n'
					for (let mem of groupMembers) {
						teks += `├ ${fxsx} *@${mem.jid.split('@')[0]}*\n`
						members_id.push(mem.jid)
					}
					mentions(`┌───「PINKY TAG」───`+ teks +'└───「 *FXSX* 」────', members_id, true)
					break
		case 'clearall':
					if (!isOwner) return client.sendMessage(from, 'Only Admin Bot',MessageType.text, { quoted: ftroli, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					anu = await client.chats.all()
					client.setMaxListeners(25)
					for (let _ of anu) {
						client.deleteChat(_.jid)
					}
					reply(ind.clears())
					break
		case 'blockk':
				 client.updatePresence(from, Presence.composing) 
				 client.chatRead (from)
					if (!isGroup) return reply(ind.groupo())
				if (!isAdmin) return client.sendMessage(from, 'Only Admin Bot',MessageType.text, { quoted: ftroli, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					client.blockUser (`${body.slice(8)}@c.us`, "add")
					client.sendMessage(from, `*Perintah Diterima, Memblokir* ${body.slice(7)}@c.us`, MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					break
		case 'unblockk':
					if (!isGroup) return reply(ind.groupo())
				if (!isAdmin) return client.sendMessage(from, 'Only Admin Bot',MessageType.text, { quoted: ftroli, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				    client.blockUser (`${body.slice(10)}@c.us`, "remove")
					client.sendMessage(from, `*Perintah Diterima, Membuka Blockir* ${body.slice(9)}@c.us`, MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					break
		case 'block':
				 client.updatePresence(from, Presence.composing) 
				 client.chatRead (from)
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return client.sendMessage(from, 'Only Admin Bot',MessageType.text, { quoted: ftroli, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					client.blockUser (`${body.slice(7)}@c.us`, "add")
					client.sendMessage(from, `*Perintah Diterima, Memblokir* ${body.slice(7)}@c.us`, MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					break
		case 'unblock':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return client.sendMessage(from, 'Only Admin Bot',MessageType.text, { quoted: ftroli, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				    client.blockUser (`${body.slice(9)}@c.us`, "remove")
					client.sendMessage(from, `*Perintah Diterima, Membuka Blockir* ${body.slice(9)}@c.us`, MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					break
		case 'leave':
		case 'outpinky':
			if (!isOwner) return client.sendMessage(from, 'Only Admin Bot',MessageType.text, { quoted: ftroli, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                      setTimeout( () => {
                      client.groupLeave (from) 
                      }, 2000)
                      setTimeout( () => {
                      client.updatePresence(from, Presence.composing) 
                      client.sendMessage(from, 'Sukses Owner😉',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                      }, 0)
                      break			
		case 'bc': 
					if (!isOwner) return client.sendMessage(from, 'Only Admin Bot',MessageType.text, { quoted: ftroli, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `*「 PESAN BROADCAST 」*\n\n${body.slice(4)}`})
						}
						client.sendMessage(from, '*Suksess broadcast*',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 BC BY OWNER 」*\n\n${body.slice(4)}`)
						}
						client.sendMessage(from, '*Suksess broadcast*',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					}
					break
		case 'bcc': 
				if (!isAdmin) return client.sendMessage(from, 'Only Admin Bot',MessageType.text, { quoted: ftroli, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `*「 PESAN BROADCAST 」*\n\n${body.slice(4)}`})
						}
						client.sendMessage(from, '*Suksess broadcast*',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 BC BY OWNER 」*\n\n${body.slice(4)}`)
						}
						client.sendMessage(from, '*Suksess broadcast*',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					}
					break
		case 'setpp': 
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
                   			if (!isBotGroupAdmins) return reply(ind.badmin())
					media = await client.downloadAndSaveMediaMessage(mek)
					await client.updateProfilePicture (from, media)
					client.sendMessage(from, '*Sukses mengganti icon group*',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					break				
		case 'add':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return client.sendMessage(from, 'Yang mau di add tuyul ya?',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if (args[0].startsWith('08')) return client.sendMessage(from, 'Gunakan kode negara kak',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						client.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
		case 'grup':
		case 'group':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args[0] === 'buka') {
					    client.sendMessage(from, '*BERHASIL MEMBUKA GROUP*',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
						client.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'tutup') {
						client.sendMessage(from, '*BERHASIL MENUTUP GROUP*',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
						client.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break      
		 case 'infogc':
				case 'groupinfo':
				case 'infogrup':
				case 'grupinfo':
		    	if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (isBanned) return client.sendMessage(from, `Maaf ${pushname} kamu sudah terbenned!`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                if (!isGroup) return client.sendMessage(from, 'Only Group',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}})
                client.updatePresence(from, Presence.composing)
                try {
					ppUrl = await client.getProfilePicture(from)
					} catch {
					ppUrl = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
			    buffer = await getBuffer(ppUrl)
		        client.sendMessage(from, buffer, image, {quoted: mek2, caption: `*NAME* : ${groupName}\n*MEMBER* : ${groupMembers.length}\n*ADMIN* : ${groupAdmins.length}\n*DESK* : ${groupDesc}`})
                break
            case 'admin':
            case 'owner':
            case 'creator':
            case 'developer':
                  client.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: {"contactMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": fakereply, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./me.jpg')}}}, contextInfo: { forwardingScore: 508, isForwarded: true}})
                  client.sendMessage(from, 'Tuh Kontak Owner Pinky, Jangan Spam Vc dll Chat Ga Pph Asal Jangan Jorok!!',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					break    
           case 'kick':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return client.sendMessage(from, 'BOT JADIIN ADMIN DULU',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 Y𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						client.groupRemove(from, mentioned)
						}
					break
		case 'demote':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return client.sendMessage(from, 'BOT JADIIN ADMIN DULU',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 𝘆𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Status adminmu dicopot. Makanya jan jadi beban🏃 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`MAAF @${mentioned[0].split('@')[0]} Jabatan adminmu di copt, Makanya jan jadi beban🏃`, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'promote':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return client.sendMessage(from, 'BOT JADIIN ADMIN DULU',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮?? 𝘁𝗮𝗿𝗴𝗲𝘁 𝘆𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Selamat🥳 anda naik menjadi admin grub (>_<) :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`selamat🥳 @${mentioned[0].split('@')[0]} anda naik menjadi admin grub (>_<)`, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					}
					break	
					case 'grup':
					case 'group':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return client.sendMessage(from, 'BOT JADIIN ADMIN DULU',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if (args[0] === 'buka') {
					    client.sendMessage(from, '*BERHASIL MEMBUKA GROUP*',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
						client.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'tutup') {
						client.sendMessage(from, '*BERHASIL MENUTUP GROUP*',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
						client.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break       
           	case 'setname':
                if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return client.sendMessage(from, 'BOT JADIIN ADMIN DULU',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                client.groupUpdateSubject(from, `${body.slice(9)}`)
                client.sendMessage(from, 'Succes, Ganti Nama Grup',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					break
                case 'setdesc':
                if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return client.sendMessage(from, 'BOT JADIIN ADMIN DULU',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
                client.groupUpdateDescription(from, `${body.slice(9)}`)
                client.sendMessage(from, 'Succes, Ganti Deskripsi Grup',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					break
		case 'listadmin':
					if (!isGroup) return reply(ind.groupo())
					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
					case 'upswvideo':
					client.updatePresence(from, Presence.composing)
					if (isQuotedVideo) {
						const swew = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						sweb = await client.downloadMediaMessage(swew)
						client.sendMessage('status@broadcast', sweb, video, { caption: `${q}` })
					}
					bur = `Sukses Upload Story Video dengan Caption: ${q}`
					client.sendMessage(from, bur, MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					break
      case 'upswimg':
					client.updatePresence(from, Presence.composing)
					if (isQuotedImage) {
						const swew = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						sweb = await client.downloadMediaMessage(swew)
						client.sendMessage('status@broadcast', sweb, image, { caption: `${q}` })
					}
					bur = `Sukses Upload Story Image dengan Caption: ${q}`
					client.sendMessage(from, bur, MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					break
		case 'toimg':
				
                 if (!isRegistered) return client.sendMessage(from, `╭─「 *BELUM VERIFIKASI* 」\n${fxsx} ${pushname}\n${fxsx} Daftar Dulu Kak Dengan Cara\n${fxsx} ${prefix}daftar pinky|16\n╰──────────`,MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
				if (!isQuotedSticker) return client.sendMessage(from, '*Reply/Tag sticker!*',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, image, {quoted: mek2, caption: '*Nih Kack...*'})
						fs.unlinkSync(ran)
					})
					await limitAdd(sender)
					break
                 case 'simi':
					if (args.length < 1) return client.sendMessage(from, 'Textnya mana kak?',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					teks = body.slice(5)
					anu = await simih(teks) //fetchJson(`https://mhankbarbars.herokuapp.com/api/samisami?text=${teks}`, {method: 'get'})
					//if (anu.error) return reply('Simi ga tau kak')
					reply(anu)
					break
		case 'simih':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return client.sendMessage(from, 'Mengaktifkan Ketik 1, Menonaktif Ketik 0',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if (Number(args[0]) === 1) {
						if (isSimi) return client.sendMessage(from, '*Fitur simi sudah aktif sebelum nya*',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
						samih.push(from)
						fs.writeFileSync('./database/bot/simi.json', JSON.stringify(samih))
						client.sendMessage(from, '❬ SUCCSESS ❭ mengaktifkan mode simi di group ini ✔',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./database/bot/simi.json', JSON.stringify(samih))
						client.sendMessage(from, '❬ SUCCSESS ❭ menonaktifkan mode simi di group ini ✔',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					} else {
						reply(ind.satukos())
					}
					break
		case 'nsfw':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return client.sendMessage(from, 'Mengaktifkan Ketik 1, Menonaktif Ketik 0',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if (Number(args[0]) === 1) {
						if (isNsfw) return client.sendMessage(from, '*Fitur nsfw sudah aktif sebelum nya*',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
						nsfw.push(from)
						fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
						client.sendMessage(from, '❬ SUCCSESS ❭ mengaktifkan mode nsfw di group ini ✔',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					} else if (Number(args[0]) === 0) {
						nsfw.splice(from, 1)
						fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
						client.sendMessage(from, '❬ SUCCSESS ❭ menonaktifkan mode nsfw di group ini ✔',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					} else {
						reply(ind.satukos())
					}
					break
		case 'leveling':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return client.sendMessage(from, 'Mengaktifkan Ketik 1, Menonaktif Ketik 0',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if (args[0] === '1') {
					if (isLevelingOn) return client.sendMessage(from, '*Fitur level sudah aktif sebelum nya*',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					_leveling.push(from)
					fs.writeFileSync('./database/kelompok/leveling.json', JSON.stringify(_leveling))
					reply(ind.lvlon())
					} else if (args[0] === '0') {
					_leveling.splice(from, 1)
						fs.writeFileSync('./database/kelompok/leveling.json', JSON.stringify(_leveling))
						reply(ind.lvloff())
					} else {
						reply(ind.satukos())
					}
					break
		case 'welcome':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return client.sendMessage(from, 'Mengaktifkan Ketik 1, Menonaktif Ketik 0',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if (Number(args[0]) === 1) {
						if (isWelkom) return client.sendMessage(from, '*Fitur welcome sudah aktif sebelum nya',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
						welkom.push(from)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						client.sendMessage(from, '❬ SUCCSESS ❭ mengaktifkan fitur welcome di group ini',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						client.sendMessage(from, '❬ SUCCSESS ❭ menonaktifkan fitur welcome di group ini',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					} else {
						reply(ind.satukos())
					}
					break
                 case 'antilink':
                    if (!isGroup) return reply('ONLY GRUP')
					if (!isGroupAdmins) return reply('ONLY ADMIN')
					if (!isBotGroupAdmins) return client.sendMessage(from, 'BOT JADIIN ADMIN DULU',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if (args.length < 1) return client.sendMessage(from, 'Mengaktifkan Ketik 1, Menonaktif Ketik 0',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if (Number(args[0]) === 1) {
						if (isAntilink) return client.sendMessage(from, 'Anti link group sudah aktif',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
						antilink.push(from)
						fs.writeFileSync('./database/kelompok/antilink.json', JSON.stringify(antilink))
						client.sendMessage(from, '❬ SUCCSESS ❭ mengaktifkan anti link group di group ini ✔',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
						client.sendMessage(from, 'Perhatian kepada seluruh member anti link group aktif apabila anda mengirim link group anda akan di kick dari group',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					} else if (Number(args[0]) === 0) {
						if (!isAntilink) return reply('Mode anti link group sudah disable')
						antilink.splice(from, 1)
						fs.writeFileSync('./database/kelompok/antilink.json', JSON.stringify(antilink))
						client.sendMessage(from, '❬ SUCCSESS ❭ menonaktifkan anti link group di group ini ✔',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					} else {
						client.sendMessage(from, '1 untuk mengaktifkan, 0 untuk menonaktifkan',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					}
					break
                 case 'event':
					if (!isGroup) return reply(ind.groupo())
					if (!isAdmin) return client.sendMessage(from, 'Only Adminban & Owner Kami!',MessageType.text, { quoted: ftroli, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if (args.length < 1) return client.sendMessage(from, 'Mengaktifkan Ketik 1, Menonaktif Ketik 0',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if (Number(args[0]) === 1) {
						if (isEventon) return client.sendMessage(from, '*Fitur event sudah aktif sebelum nya*',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
						event.push(from)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						client.sendMessage(from, '❬ SUCCSESS ❭ mengaktifkan fitur event di group ini',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					} else if (Number(args[0]) === 0) {
						event.splice(from, 1)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						client.sendMessage(from, '❬ SUCCSESS ❭ menonaktifkan fitur event di group ini',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					} else {
						reply(ind.satukos())
					}
					break
                 case 'eventt':
					if (!isGroup) return reply(ind.groupo())
				if (!isAdmin) return client.sendMessage(from, 'Only Admin Bot',MessageType.text, { quoted: ftroli, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if (args.length < 1) return client.sendMessage(from, 'Mengaktifkan Ketik 1, Menonaktif Ketik 0',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if (Number(args[0]) === 1) {
						if (isEventon) return client.sendMessage(from, '*Fitur event sudah aktif sebelum nya*',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
						event.push(from)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						client.sendMessage(from, '❬ SUCCSESS ❭ mengaktifkan fitur event di group ini',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					} else if (Number(args[0]) === 0) {
						event.splice(from, 1)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						client.sendMessage(from, '❬ SUCCSESS ❭ menonaktifkan fitur event di group ini',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					} else {
						reply(ind.satukos())
					}
					break
		case 'clone':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return client.sendMessage(from, 'Only Admin Bot',MessageType.text, { quoted: ftroli, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if (args.length < 1) return client.sendMessage(from, '*TAG YANG MAU DI CLONE!!!*',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return client.sendMessage(from, '❬ SUCCSESS ❭',MessageType.text, { quoted: mek2, contextInfo: { forwardingScore: 508, isForwarded: true}, sendEphemeral: true, thumbnail: fs.readFileSync(`./me.jpg`, 'base64')})
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await client.getProfilePicture(id)
						buffer = await getBuffer(pp)
						client.updateProfilePicture(botNumber, buffer)
						mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply(ind.stikga())
					}
					await limitAdd(sender)
					break
				case 'wait':
					
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						client.sendMessage(from, 'Sedang Diproses...',MessageType.text, { quoted: fgif, contextInfo: { forwardingScore: 508, isForwarded: true}})
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await client.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							client.sendMessage(from, res.video, video, {quoted: mek2, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply(ind.ocron())
					}
					await limitAdd(sender)
					break
				default:
	        if (body.startsWith(`${prefix}${command}`)) {
            const loli = fs.readFileSync('./mp3/tidakada.mp3')
            client.sendMessage(from, loli, MessageType.audio, {quoted: fdocs, mimetype: 'audio/mp4', ptt:true, duration:999999999999})
            }
            if (isGroup && !isCmd && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						reply(ind.cmdnf(prefix, command))
					} else {
						console.log(color('[ERROR]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
					}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
