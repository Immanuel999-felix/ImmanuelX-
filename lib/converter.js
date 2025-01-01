
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                    IMMANUELX-𝗠𝗗  𝐁𝐎𝐓                                                //
//                                                                                                      //
//                                         Ｖ：4.0                                                       //
//                                                                                                      //
//                                                                                                      //      
//    ╗███╗   ███╗███╗   ███╗ █████╗ ███╗   ██╗██╗   ██╗███████╗██╗     ██╗  ██╗     ███╗   ███╗██████╗    //
//  ██║████╗ ████║████╗ ████║██╔══██╗████╗  ██║██║   ██║██╔════╝██║     ╚██╗██╔╝     ████╗ ████║██╔══██╗   //
//  ██║██╔████╔██║██╔████╔██║███████║██╔██╗ ██║██║   ██║█████╗  ██║      ╚███╔╝█████╗██╔████╔██║██║  ██║  //
//  ██║██║╚██╔╝██║██║╚██╔╝██║██╔══██║██║╚██╗██║██║   ██║██╔══╝  ██║      ██╔██╗╚════╝██║╚██╔╝██║██║  ██║  //
//  ██║██║ ╚═╝ ██║██║ ╚═╝ ██║██║  ██║██║ ╚████║╚██████╔╝███████╗███████╗██╔╝ ██╗     ██║ ╚═╝ ██║██████╔╝  //
//  ╚═╝╚═╝     ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚══════╝╚══════╝╚═╝  ╚═╝     ╚═╝     ╚═╝╚═════╝   //       
//                                                                                                      //
//                                                                                                      //
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : IMMANUELX-MD
//  * @author : immanuelfelix
//  * @youtube : https://www.youtube.com/@Immanuelfelix999
//  * @description : IMMANUELX-MD ,A Multi-functional whatsapp user bot.
//*
//*
//Made with LOVE
//re-upload? recode? copy code? give credit ya :)
//Instagram: immanuel.999
//Telegram: t.me/Imma_nuel999
//GitHub: @Immanuel999-felix
//WhatsApp: +2349126807818
//want more free bot scripts? subscribe to my youtube channel: https://www.youtube.com/@Immanuelfelix999
//   * Created By Github: Immanuel999-felix.
//   * Credit To GOD
//   * © 2024 IMMANUELX-MD.
// ⛥┌┤
// */

let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
  return result;
  }

async function styletext(teks) {
    return new Promise((resolve, reject) => {
        axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('table > tbody > tr').each(function (a, b) {
                hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })
            })
            resolve(hasil)
        })
    })
}
        
        async function Telesticker(url) {
    return new Promise(async (resolve, reject) => {
        if (!url.match(/(https:\/\/t.me\/addstickers\/)/gi)) return replygcxeon('Enther your url telegram sticker link')
        packName = url.replace("https://t.me/addstickers/", "")
        data = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, {method: "GET",headers: {"User-Agent": "GoogleBot"}})
        const xeonyresult = []
        for (let i = 0; i < data.data.result.stickers.length; i++) {
            fileId = data.data.result.stickers[i].thumb.file_id
            data2 = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)
            result = {
            status: 200,
            author: 'DGXeon',
            url: "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + data2.data.result.file_path
            }
            xeonyresult.push(result)
        }
    resolve(xeonyresult)
    })
}
//mega download
function formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

//trace anime
function formatDuration(ms) {
  let seconds = Math.floor((ms / 1000) % 60);
  let minutes = Math.floor((ms / (1000 * 60)) % 60);
  let hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
  return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

module.exports = {
  toAudio,
  toPTT,
  toVideo,
  ffmpeg,
  addExifAvatar,
  makeid,
  styletext,
  Telesticker,
  formatBytes,
  formatDuration,
}
