const fs = require('fs-extra')
const { 
    prefix
} = JSON.parse(fs.readFileSync('./settings/setting.json'))

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textTnC = () => {
    return `
Proximamente
antetos a la pagina`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textMenu = (pushname) => {
    return `
EH ${pushname}! Que alegria verte👋️
Mira todo lo que puedo hacer✨

Gracias a The Joker por brindarme este numero :)

¿Tienes sugerencias?, algun error en el bot?
Dilo aqui: https://chat.whatsapp.com/LpBgvOcx0mqHQx9GzY2aZQ

Changelog: https://ferhacks2.my.id/Lolbot

Invocar a los admins:

-❥ *${prefix}admins*

Crear ;D

-❥ *${prefix}cooltext*
-❥ *${prefix}sticker*
-❥ *${prefix}stickergif*
-❥ *${prefix}stickergiphy*
-❥ *${prefix}meme*
-❥ *${prefix}quotemaker*
-❥ *${prefix}nulis*

idk
-❥ *${prefix}infosurah*
-❥ *${prefix}surah*
-❥ *${prefix}tafsir*
-❥ *${prefix}ALaudio*
-❥ *${prefix}jsolat*

18+:
-❥ *${prefix}nekopoi*

Descargas :D
-❥ *${prefix}ytmp3*
-❥ *${prefix}ytmp4*
-❥ *${prefix}facebook*

Horoscopo:
-❥ *${prefix}cekzodiak*
-❥ *${prefix}artinama*
-❥ *${prefix}cekjodoh*

Buscador :D
-❥ *${prefix}dewabatch*
-❥ *${prefix}images*
-❥ *${prefix}sreddit*
-❥ *${prefix}resep*
-❥ *${prefix}stalkig*
-❥ *${prefix}wiki*
-❥ *${prefix}cuaca*
-❥ *${prefix}chord*
-❥ *${prefix}lirik*
-❥ *${prefix}ss*
-❥ *${prefix}play*
-❥ *${prefix}movie*
-❥ *${prefix}whatanime*

Textos random: (Español pronto)
-❥ *${prefix}motivasi*
-❥ *${prefix}howgay*
-❥ *${prefix}fakta*
-❥ *${prefix}pantun*
-❥ *${prefix}katabijak*
-❥ *${prefix}quote*
-❥ *${prefix}cerpen*
-❥ *${prefix}cersex*
-❥ *${prefix}puisi*

Random Images:
-❥ *${prefix}anime*
-❥ *${prefix}kpop*
-❥ *${prefix}memes* (No soporta español)

Utilidades:
-❥ *${prefix}profile*
-❥ *${prefix}tts*
-❥ *${prefix}translate*
-❥ *${prefix}resi*
-❥ *${prefix}covidindo*
-❥ *${prefix}ceklokasi*
-❥ *${prefix}shortlink*
-❥ *${prefix}bapakfont*
-❥ *${prefix}grouplink*
-❥ *${prefix}revoke*

ETC:
-❥ *${prefix}miembros*
-❥ *${prefix}listblock*
-❥ *${prefix}tnc*
-❥ *${prefix}donasi*
-❥ *${prefix}botstat*
-❥ *${prefix}ownerbot*


_-_-_-_-_-_-_-_-_-_-_-_-_-_

Ahora ${pushname} Chinga a tu madre!✨`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textAdmin = (pushname) => {
    return `
⚠ [ *${pushname}* ] ⚠ 
Miraa lo que puedes hacer!

-❥ *${prefix}add*
-❥ *${prefix}kick* @tag
-❥ *${prefix}promote* @tag
-❥ *${prefix}demote* @tag
-❥ *${prefix}mutegrup*
-❥ *${prefix}tagall*
-❥ *${prefix}setprofile*
-❥ *${prefix}del*
-❥ *${prefix}welcome*

_-_-_-_-_-_-_-_-_-_-_-_-_-_

⚠ [ *SOLO EL CREADOR* ] ⚠
Este comando solo lo puede hacer el creador
-❥ *${prefix}kickall*

Alabado sea ${pushname} Por ser admin :D
Besos en el poto
`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textDonasi = () => {
    return `
Gracias por tu interes en ayudarme :D
exe.io/Apoyaalbot`
}
