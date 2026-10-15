const s1 = "KAIRO カイロStoryCraftFlavorRecipesVoicesShopGet the bottle→0109下Chili garlicsauceカイロHEAT,COMPOSED.旨味と辛味Craftedin Japan.Small batch.Scroll180ml · 香味辣油Heat with intent香味辣油Slow-roasted garlicにんにくToasted sesame胡麻Small batch · Japan日本製Heat with intent香味辣油Slow-roasted garlicにんにくToasted sesame胡麻Small batch · Japan日本製01 Philosophy · 哲学Balance before burn · 調和HEAT, HELDIN BALANCE.Inspired by the precision of the Japanese pantry, KAIRO layers fragrant chili, slow-roasted garlic and toasted sesame. The heat arrives with purpose—then makes room for the food.0Core aromatics0Hours slow-roast0ml per bottle一Bright aroma.Measured heat.Deep umami.Red chiliGarlicSesameRice oil02 Ingredients · 素材Few ingredients. Clear purpose.PURE.TOASTED.ALIVE.01Red chili 唐辛子clean, measured heat02Garlic にんにくslow-roasted depth03Sesame 胡麻toasted warmth04Rice oil 米油silky, neutral finish01/ 0403 The craft · 製法Made in Wakayama ·…";
const s2 = "KAIRO カイロStoryCraftFlavorRecipesVoicesShopGet the bottle→0109下Chili garlicsauceカイロFire HEAT,COMPOSED.旨味と辛味Craftedin Japan.Small batch.Scroll180ml · 香味辣油Heat with intent香味辣油Slow-roasted garlicにんにくToasted sesame胡麻Small batch · Japan日本製Heat with intent香味辣油Slow-roasted garlicにんにくToasted sesame胡麻Small batch · Japan日本製01 Philosophy · 哲学Balance before burn · 調和HEAT, HELDIN BALANCE.Inspired by the precision of the Japanese pantry, KAIRO layers fragrant chili, slow-roasted garlic and toasted sesame. The heat arrives with purpose—then makes room for the food.0Core aromatics0Hours slow-roast0ml per bottle一Bright aroma.Measured heat.Deep umami.Red chiliGarlicSesameRice oil02 Ingredients · 素材Few ingredients. Clear purpose.PURE.TOASTED.ALIVE.01Red chili 唐辛子clean, measured heat02Garlic にんにくslow-roasted depth03Sesame 胡麻toasted warmth04Rice oil 米油silky, neutral finish01/ 0403 The craft · 製法Made in Wakay…";
const mod = s1.replace("HEAT,", "Fire HEAT,");
if (mod.startsWith(s2.slice(0, -1))) {
  console.log("Match!");
} else {
  console.log("Mismatch.");
  let i = 0;
  while(mod[i] === s2[i]) i++;
  console.log("diff at", i, mod.substring(Math.max(0, i-10), i+10), s2.substring(Math.max(0, i-10), i+10));
}
