//import { ndnDice } from "../commands/utils/dice.mjs"

export default async(message) => {
  if (message.content.match(/ジュラッチ反応しろ/)) {
    await message.react("😆");
  }
  
  if (message.content.match(/ジュラッチ～/)) {
    const arr = [
    "<:smilejuracci:1273681565288763422>呼んだ～？",
    "<:kanasimijuracci:1273681708813647874>訳もなく悲しいよぉ…",
    "<:hayaranaijuracci:1273682016541343817>僕だよー！",
    "<:bikkurijuracci:1273682255004434513>わ！びっくりしたー！",
    "<:zekkujuracci:1273682575256322068>んぇ～",
    "<:magaojuracci:1273682400672743547>はーい！",
    "<:funnujuracci:1273681850753351832>貴様だけは許さん",
    "<:hatenajuracci:1267436666948419635>どしたの？",
  ];
  const random = Math.floor(Math.random() * arr.length);
  const str = arr[random];

    await message.reply(`${str}`);
  }
  
};
