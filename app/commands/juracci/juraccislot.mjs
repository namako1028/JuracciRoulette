import { SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
  .setName("juraccislot")
  .setDescription("ジュラッチスロットが回せます　ジュラッチじゃないものも混ざってます（絵柄が揃っても特に何もありません）");

export async function execute(interaction) {
  const Result = ["" , "" , ""];
  const arr = [
    "<:smilejuracci:1273681565288763422>",
    "<:kanasimijuracci:1273681708813647874>",
    "<:hayaranaijuracci:1273682016541343817>",
    "<:bikkurijuracci:1273682255004434513>",
    "<:zekkujuracci:1273682575256322068>",
    "<:magaojuracci:1273682400672743547>",
    "<:funnujuracci:1273681850753351832>",
    "<:hatenajuracci:1267436666948419635>",
    "<:kibounko:1267435202804973618>",
    "<:gamingkataya:1267436459191832617>",
    "<:waya:1288508550615797770>",
    "<:inbouronzunya:1273687848184320082>",
    "<:nansuu:1267080374777937930>",
    "<:aramaki_kuN:1300445192498970655>",
    "<:lonely_kuN:1300445000785723463>",
    "<:gekiatuwaya:1316024166075600977>"
  ];
  for(let i = 0; i < 3 ; i++) {
    const random = Math.floor(Math.random() * arr.length);
    Result[i] = arr[random];
  }

  await interaction.reply(`${Result[0]}${Result[1]}${Result[2]}`);
}
