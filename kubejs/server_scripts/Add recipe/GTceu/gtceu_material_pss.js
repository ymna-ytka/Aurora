ServerEvents.recipes(event => {
   
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
      "10x gtceu:tumbaga_dust"
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
      "10x gtceu:ferabrass_dust"
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
      "3x gtceu:constantan_dust"
    )
    
    .duration(500)
    .EUt(28)
  
  event.recipes.gtceu.mixer('constantan_dust')

    .itemInputs(
      "gtceu:nickel_dust",
      "2x gtceu:copper_dust",
    )

    .itemOutputs(
      "3x gtceu:constantan_dust"
    )
    
    .duration(500)
    .EUt(28)    
    
  //


  event.blasting("gtceu:tumbaga_ingot", "gtceu:tumbaga_dust", 0.7)

  event.blasting("gtceu:ferabrass_ingot", "gtceu:ferabrass_dust", 0.7)

  event.blasting("gtceu:constantan_ingot", "gtceu:constantan_dust", 0.7)

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


})

