ServerEvents.recipes(event => {
 
  //Steel 
  event.recipes.gtceu.steam_blast_furnace('steel_coke_gem_steam')
    
    .itemInputs(
      "2x gtceu:coke_gem",
      "minecraft:iron_ingot"
    )

    .inputFluids(
      Fluid.of("gtceu:steam", 16000)
    )

    .itemOutputs(
      "gtceu:steel_ingot"
    )

    .duration(1066)

    event.recipes.gtceu.steam_blast_furnace('steel_coke_dust_steam')
    
    .itemInputs(
      "2x gtceu:coke_dust",
      "minecraft:iron_ingot"
    )

    .inputFluids(
      Fluid.of("gtceu:steam", 16000)
    )

    .itemOutputs(
      "gtceu:steel_ingot"
    )

    .duration(1066)

    event.recipes.gtceu.steam_blast_furnace('steel_coke_block_steam')
    
    .itemInputs(
      "2x gtceu:coke_block",
      "minecraft:iron_block"
    )

    .inputFluids(
      Fluid.of("gtceu:steam", 48000)
    )

    .itemOutputs(
      "gtceu:steel_block"
    )

    .duration(9333)
  //      

})

