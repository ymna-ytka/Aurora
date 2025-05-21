ServerEvents.recipes(event => {

  event.shapeless("gtac:refined_iron_bloom",

    [
      "gtac:iron_bloom",
      "kubejs:bad_stone_hammer"
    ]

  ).damageIngredient('kubejs:bad_stone_hammer')
   
  //Fireclay Dust
  event.recipes.gtceu.bronze_mixer('fireclay_dust')
    
    .itemInputs(
      "gtceu:brick_dust",
      "gtceu:clay_dust",
      "gtceu:calcium_dust",
      "gtceu:gypsum_dust"
  )

    .itemOutputs(
      "4x gtceu:fireclay_dust"
  )

    .duration(200)
    .EUt(7)    
  //

  //Tumbaga Dust
  event.recipes.gtceu.bronze_mixer('tumbaga_dust')
     
    .itemInputs(
      "3x gtceu:copper_dust",
      "7x gtceu:gold_dust"
    )

    .itemOutputs(
      "10x gtac:tumbaga_dust"
    )
    .duration(200)
    .EUt(7)    
  //

  //Steel 
  event.recipes.gtceu.primitive_blast_furnace('steel_coke_gem')
    
    .itemInputs(
      "2x gtceu:coke_gem",
      "minecraft:iron_ingot"
    )

    .itemOutputs(
      "gtceu:steel_ingot"
    )

    .duration(1600)

    event.recipes.gtceu.primitive_blast_furnace('steel_coke_dust')
    
    .itemInputs(
      "2x gtceu:coke_dust",
      "minecraft:iron_ingot"
    )

    .itemOutputs(
      "gtceu:steel_ingot"
    )

    .duration(1600)

    event.recipes.gtceu.primitive_blast_furnace('steel_coke_block')
    
    .itemInputs(
      "2x gtceu:coke_block",
      "minecraft:iron_block"
    )

    .itemOutputs(
      "gtceu:steel_block"
    )

    .duration(14000)
  //
  
  //Ferabrass
  event.recipes.gtceu.bronze_mixer('ferabrass_dust')

    .itemInputs(
      "gtceu:iron_dust",
      "5x gtceu:steel_dust",
      "3x gtceu:brass_dust"
    )

    .itemOutputs(
      "10x gtac:ferabrass_dust"
    )
    
    .duration(500)
    .EUt(28)    
  //
 
  //Constantan
  event.recipes.gtceu.bronze_mixer('constantan_dust')

    .itemInputs(
      "gtceu:nickel_dust",
      "2x gtceu:copper_dust",
    )

    .itemOutputs(
      "3x gtac:constantan_dust"
    )
    
    .duration(500)
    .EUt(28)
  
  event.recipes.gtceu.mixer('constantan_dust')

    .itemInputs(
      "gtceu:nickel_dust",
      "2x gtceu:copper_dust",
    )

    .itemOutputs(
      "3x gtac:constantan_dust"
    )
    
    .duration(500)
    .EUt(28)    
    
  //


  event.blasting("gtac:tumbaga_ingot", "gtac:tumbaga_dust", 0.7)

  event.blasting("gtac:ferabrass_ingot", "gtac:ferabrass_dust", 0.7)

  event.blasting("gtac:constantan_ingot", "gtac:constantan_dust", 0.7)

  event.shapeless("gtceu:clay_dust",

    [
      'minecraft:clay',
      'kubejs:bad_stone_hammer'
    ]

  ).damageIngredient('kubejs:bad_stone_hammer')

  event.shaped("gtceu:stone_dust",

    [
      "CCC",
      "CCC",
      "CCH"
    ],

    {
      C:"kubejs:mini_cobblestone",
      H:"kubejs:bad_stone_hammer"
    }

  ).damageIngredient('kubejs:bad_stone_hammer')

  event.recipes.gtceu.tar_smokehouse('wood_tar_tar_smokehouse')

    .itemInputs(
      "64x #minecraft:logs",
      "minecraft:bucket"
    )

    .itemOutputs(
      "gtceu:wood_tar_bucket"
    )

    .duration(6000)
    .EUt(7)

  event.recipes.gtceu.bronze_mixer('impregnating_oil')
  
    .inputFluids(
      Fluid.of("gtceu:creosote", 700),
      Fluid.of("gtceu:wood_tar", 200),
      Fluid.of("gtceu:seed_oil", 100)
    )

    .outputFluids(
      Fluid.of("gtceu:impregnating_oil", 1000)
    )
    .duration(4200)
    .EUt(8)

  event.recipes.gtceu.autoclave('treated_wood_planks')
  
    .itemInputs(
      "#minecraft:planks"
    )

    .inputFluids(
      Fluid.of("gtceu:impregnating_oil", 100)
    )

    .itemOutputs(
      "gtceu:treated_wood_planks"
    )
    .duration(2400)
    .EUt(8) 

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
    
  event.shaped("3x gtceu:compressed_coke_clay",

    [
      "CWC",
      "SFS",
      "SSS"
    ],

    {
      C:"minecraft:clay_ball",
      W:"minecraft:water_bucket",
      F:"gtceu:brick_wooden_form",
      S:"minecraft:sand"
    }

  )
  

    
})

