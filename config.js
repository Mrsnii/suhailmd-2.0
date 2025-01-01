const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "09160967729";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || ""  // PUT your SESSION_ID SUHAIL_08_36_01_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNjksXG4gICAgICAgIDIyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDYzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNjksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjExLFxuICAgICAgICAxNzksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTYsXG4gICAgICAgIDAsXG4gICAgICAgIDM1LFxuICAgICAgICAyMjksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTksXG4gICAgICAgIDIzOCxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTksXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIzLFxuICAgICAgICAzNixcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTc2LFxuICAgICAgICA5NyxcbiAgICAgICAgODAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQxLFxuICAgICAgICAyMyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDQ4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMjUzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDQ5LFxuICAgICAgICA3OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTMwLFxuICAgICAgICA4NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDgzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDU3LFxuICAgICAgICAxODMsXG4gICAgICAgIDM3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDc2LFxuICAgICAgICA4NixcbiAgICAgICAgMTI0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjAzLFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTI3LFxuICAgICAgICA2NixcbiAgICAgICAgMTQyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjM5LFxuICAgICAgICA2MixcbiAgICAgICAgMTIzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjE4LFxuICAgICAgICA5MSxcbiAgICAgICAgMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDg4LFxuICAgICAgICA3NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDM2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgODAsXG4gICAgICAgIDE4MixcbiAgICAgICAgNDMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgODcsXG4gICAgICAgIDU1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNixcbiAgICAgICAgMTczLFxuICAgICAgICAxMDEsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQzLFxuICAgICAgICAxNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDc2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDM5LFxuICAgICAgICAxODAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTA5LFxuICAgICAgICA0LFxuICAgICAgICA3MyxcbiAgICAgICAgODIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjUyLFxuICAgICAgICA5NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDM0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEyNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTk1LFxuICAgICAgICA4MyxcbiAgICAgICAgODcsXG4gICAgICAgIDM2LFxuICAgICAgICA2LFxuICAgICAgICA2NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDQwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTI4LFxuICAgICAgICA2MixcbiAgICAgICAgMjE3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDg0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDc3LFxuICAgICAgICAyNixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDc1LFxuICAgICAgICA2NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE1MixcbiAgICAgICAgNixcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDQzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxODcsXG4gICAgICAgIDIzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTU4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyLFxuICAgICAgICAyOSxcbiAgICAgICAgODUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2MixcbiAgICAgICAgODYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjM4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNixcbiAgICAgICAgMTAwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTMzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJLS0NKdFhOeGVIMmgyeFFnc3FPcDRtL2M5UDRldVFmTUVheVpUdzZVOTRZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkxNjA5Njc3MjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkM0NzA2NDhCODM2MkU2NjVGMEVDMURGODYxRTJGQTdCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNTcyMDYwOVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJKOE9LQkpoMVQ5YUhvc1Mybm9XMkpnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjM4N2MyMGE1LWZkODAtNDFlZC05NjMzLTc5NTBjMjE2M2E2MlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzgsXG4gICAgICA0MCxcbiAgICAgIDE2MixcbiAgICAgIDI0NCxcbiAgICAgIDIwNyxcbiAgICAgIDIxMixcbiAgICAgIDM0LFxuICAgICAgMjQ3LFxuICAgICAgNDIsXG4gICAgICAyMjAsXG4gICAgICAxNTYsXG4gICAgICAxMSxcbiAgICAgIDE3NSxcbiAgICAgIDczLFxuICAgICAgMjIsXG4gICAgICAyMDMsXG4gICAgICAxMDYsXG4gICAgICAzMSxcbiAgICAgIDI1NCxcbiAgICAgIDMwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzOSxcbiAgICAgIDIzOCxcbiAgICAgIDY5LFxuICAgICAgMTUyLFxuICAgICAgOTIsXG4gICAgICA2NSxcbiAgICAgIDU2LFxuICAgICAgMjE4LFxuICAgICAgMjE5LFxuICAgICAgMjksXG4gICAgICAyMzcsXG4gICAgICAxMjgsXG4gICAgICA2LFxuICAgICAgODEsXG4gICAgICA5MyxcbiAgICAgIDcsXG4gICAgICAyMjksXG4gICAgICA5MSxcbiAgICAgIDIxMyxcbiAgICAgIDIzNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJKQlBFR1A4V1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTE2MDk2NzcyOTozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiTXJzIE5hZmlzYXQgSWx5YXMgSW1hbVwiLFxuICAgIFwibGlkXCI6IFwiMjEzNDY0NTM4NzIyMzI4OjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSjZjeDhBQ0VKajkwN3NHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJXdlBFNTZGWDNmZHhxTTQ4RXR6ZmNoU0dNS2tnZ2Q5SldxZGs0MDBnVUJzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImM1L1hLOFpycVpwVDdqVjNmODY3Q0crTnlmNGFXSEVwRW9HMWtDOWhCUnNOVllvY3FjNWRZaFo3cDNKN0tPRkxudVZhNGc5aHRhRUxIRDgwd1FsMUFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInRIZDV4NUlzaGNaU3hyNnFsN29HZDc4SDZYbm5xRys5blBycmd5bDN0LzB3MU92d1pudU4vT1loMEF4MVl6L2V5TnJPd2srRERIS1g4YmxPS0RHNWlRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxNjA5Njc3Mjk6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM1NzIwNjAzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSHRkXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIdGQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJpN3orbjNUcFZVSitKckNXSmFEM2RzcW9LbDFUeHlpc1pjOXNFZng3UnQ0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY3MjI1NTUxNyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTczNTcyMDU2NzY4OVwifSIKfQ==


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
