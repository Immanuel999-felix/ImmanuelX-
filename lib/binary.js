
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


async function dBinary(str) {
var newBin = str.split(" ")
var binCode = []
for (i = 0; i < newBin.length; i++) {
    binCode.push(String.fromCharCode(parseInt(newBin[i], 2)))
  }
return binCode.join("")
}

async function eBinary(str = ''){    
let res = ''
res = str.split('').map(char => {       
return char.charCodeAt(0).toString(2);  
 }).join(' ')
return res
}

module.exports = { dBinary, eBinary }
