'use strict';
const BootBot = require('bootbot');

const bot = new BootBot({
  accessToken: 'accessToken',
  verifyToken: 'SapexHosting.dk',
  appSecret: 'appSecret'
});

bot.hear('Hvor langtid tager det før at jeg har adgang til min server?', (payload, chat) => {
  console.log('Input modtaget - sender automatisk svar til kunde');
  chat.say('Du vil få adgang til din server umiddelbart lige efter din betaling er godkendt. Du vil modtage en e-mail med yderligere informationer. Bemærk, der kan gå op til 24 timer i særtilfælde.');
});

bot.hear(['Hvilken CPU har jeres servere?', 'Hvad CPU'], (payload, chat) => {
  console.log('Input modtaget - sender automatisk svar til kunde');
  chat.say('Alle vores servere har en AMD Ryzen™ 9 5950X CPU.');
});

bot.hear('Hvad betyder ECC RAM?', (payload, chat) => {
  console.log('Input modtaget - sender automatisk svar til kunde');
  chat.say('ECC står for fejlkorrektionskode, som sørger for at scanne og reparere hukommelsesfejl i ens RAM. ECC RAM er helt klart en fordel til f.eks. din Minecraft server. Det sørger blandt andet for, at der ikke lige pludselig forsvinder noget af din verden.');
});
/*
bot.hear(['Hvad skal jeg vælge? Paper, Spigot, Vanilla, Bungeecord, Forge eller Sponge?', 'Paper', 'Spigot', 'Vanilla', 'Bungeecord', 'Forge', 'Sponge'], (payload, chat) => {
  console.log('Input modtaget - sender automatisk svar til kunde');
  chat.say('Paper er vores anbefaling, det minder om Vanilla dog kan få lugins til din server. Det er desuden optimeret meget mere, så det køre lagfrit og bruger færre ressourcer.\n\nSpigot er ligesom Paper, udover at Paper er optimeret mere.\n\nTest');

});

Tilføj en til hver Minecraft type og sætninger?
*/

bot.start();

