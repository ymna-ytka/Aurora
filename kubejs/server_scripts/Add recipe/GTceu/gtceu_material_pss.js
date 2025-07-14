ServerEvents.recipes(event => {

  event.shaped("4x gtac:refractory_paste", 

    [
      "ABA",
      "BCB",
      "DED"
    ], 

    {
      A: "gtac:sand_dust",
      B: "#gtac:aluminum_oxide",
      C: "gtceu:clay_dust",
      D: "gtceu:ash_dust",
      E: "gtac:wooden_paste_form"
    }
).damageIngredient("gtac:wooden_paste_form")

  event.shaped("2x gtceu:compressed_fireclay", 
    [
      "AAA",
      "ABA",
      "AAA"
    ], 

    {
      A: "gtac:refractory_paste",
      B: "gtac:wooden_brick_form"
    }
).damageIngredient("gtac:wooden_brick_form")

  event.recipes.gtceu.stone_brick_smelter("firebrick_stone_furnace")
    .itemInputs("3x gtceu:compressed_fireclay")
    .itemInputs("#minecraft:coals")
    .itemOutputs("3x gtceu:firebrick")
    .chancedOutput("gtceu:ash_dust", 5000, 0)
    .duration(200)

  event.shaped("2x gtceu:compressed_clay", 
    [
      "AAA",
      "ABA",
      "AAA"
    ],  

    {
      A: "gtceu:clay_dust",
      B: "gtac:wooden_brick_form"
    }
  ).damageIngredient("gtac:wooden_brick_form")
  
  

  //Bronze
  
  event.recipes.gtceu.refractory_alloy_furnace("primitive_bronze")
    .itemInputs("3x minecraft:copper_ingot")
    .itemInputs("gtceu:tin_ingot")
    .itemInputs("gtceu:coke_gem")
    .itemOutputs("4x gtceu:bronze_ingot")
    .duration(400)

  event.recipes.gtceu.refractory_alloy_furnace("primitive_bronze_2")
    .itemInputs("3x gtceu:copper_dust")
    .itemInputs("gtceu:tin_dust")
    .itemInputs("gtceu:coke_gem")
    .itemOutputs("4x gtceu:bronze_ingot")
    .duration(400) 
    
  event.recipes.gtceu.refractory_alloy_furnace("primitive_bronze_3")
    .itemInputs("3x gtceu:copper_dust")
    .itemInputs("gtceu:tin_ingot")
    .itemInputs("gtceu:coke_gem")
    .itemOutputs("4x gtceu:bronze_ingot")
    .duration(400)

  event.recipes.gtceu.refractory_alloy_furnace("primitive_bronze_4")
    .itemInputs("3x minecraft:copper_ingot")
    .itemInputs("gtceu:tin_dust")
    .itemInputs("gtceu:coke_gem")
    .itemOutputs("4x gtceu:bronze_ingot")
    .duration(400)  

  //

  event.shaped('gtceu:wrought_iron_ingot',
    
    [
      ' A ',
      ' B ',
      '   '
    ],

    {
      A: "#forge:tools/hammers",
      B: 'gtac:hot_iron_ingot'
    }

  )

  event.recipes.gtceu.forge_hammer("wrought_iron_hammer")
    .itemInputs("gtac:hot_iron_ingot")
    .itemOutputs("gtceu:wrought_iron_ingot")
    .duration(300)
    .EUt(16)    

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
    
  event.recipes.gtceu.mixer('tumbaga_dust_electric')

    .itemInputs(
      "3x gtceu:copper_dust",
      "7x gtceu:gold_dust"
    )

    .itemOutputs(
      "10x gtac:tumbaga_dust"
    )
    
    .duration(200)
    .EUt(16)      
    
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
    .EUt(16)
    
  event.recipes.gtceu.mixer('ferabrass_dust_electric')

    .itemInputs(
      "gtceu:iron_dust",
      "5x gtceu:steel_dust",
      "3x gtceu:brass_dust"
    )

    .itemOutputs(
      "10x gtac:ferabrass_dust"
    )
    
    .duration(500)
    .EUt(16)      
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
    .EUt(16)
  
  event.recipes.gtceu.mixer('constantan_dust')

    .itemInputs(
      "gtceu:nickel_dust",
      "2x gtceu:copper_dust",
    )

    .itemOutputs(
      "3x gtac:constantan_dust"
    )
    
    .duration(500)
    .EUt(16)    
    
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



  event.recipes.gtceu.bronze_vat("limestone_water_vat")
      
    .itemInputs(
      "4x gtceu:marble_dust"
    )

    .inputFluids(
      Fluid.of("minecraft:water", 1000)
    )

    .outputFluids(
      Fluid.of("gtac:limestone_water", 1000)
    )
    .duration(600)
    .EUt(7)

  event.recipes.gtceu.bronze_vat("soaked_leather")
  
    .itemInputs(
      "minecraft:leather"
    )

    .inputFluids(
      Fluid.of("gtac:limestone_water", 150)
    )

    .itemOutputs(
      "gtac:soaked_leather"
    )
    .duration(300)
    .EUt(6)

  event.shapeless("gtac:scraped_leather",

    [
      "gtac:soaked_leather",
      "#forge:tools/knives"
    ]

  )
  
  event.recipes.gtceu.bronze_vat("prepared_leather")
  
    .itemInputs(
      "gtac:scraped_leather"
    )

    .inputFluids(
      Fluid.of("minecraft:water", 150)
    )

    .itemOutputs(
      "gtac:prepared_leather"
    )
    .duration(300)
    .EUt(6)

  event.recipes.gtceu.bronze_vat("tanned_leather")
  
    .itemInputs(
      "gtac:prepared_leather"
    )

    .inputFluids(
      Fluid.of("gtac:tannin", 200)
    )

    .itemOutputs(
      "gtac:tanned_leather"
    )
    .duration(300)
    .EUt(6)
    
  event.shaped("gtac:blank_steam_piston",

    [
      "PPP",
      "HRR",
      "WFG"
    ],

    {
      P:"gtceu:bronze_plate",
      R:"gtceu:bronze_rod",
      G:"gtceu:small_bronze_gear",
      H:"#forge:tools/hammers",
      W:"#forge:tools/wrench",
      F:"#forge:tools/files"
    }

  )
   
  event.shaped("gtac:blank_steam_motor",

    [
      "HPR",
      "PWP",
      "RPF"
    ],

    {
      P:"gtceu:bronze_plate",
      R:"gtceu:bronze_rod",
      H:"#forge:tools/hammers",
      W:"#forge:tools/wrench",
      F:"#forge:tools/files"
    }

  )

  event.shaped("gtac:blank_steam_robot_arm",

    [
      "HWF",
      "PRP",
      "PGR"
    ],

    {
      P:"gtceu:bronze_plate",
      R:"gtceu:bronze_rod",
      G:"gtceu:small_bronze_gear",
      H:"#forge:tools/hammers",
      W:"#forge:tools/wrench",
      F:"#forge:tools/files"
    }

  )
  
  event.shaped("gtac:blank_steam_pump",

    [
      "SOF",
      "HLR",
      "PWP"
    ],

    {
      P:"gtceu:bronze_plate",
      R:"gtceu:bronze_rod",
      S:"gtceu:bronze_screw",
      O:"gtceu:bronze_rotor",
      L:"gtceu:bronze_normal_fluid_pipe",
      H:"#forge:tools/hammers",
      W:"#forge:tools/wrench",
      F:"#forge:tools/files"
    }

  )
  
  event.shaped("gtac:steam_motor",

    [
      "WCR",
      "CBC",
      "RCW"
    ],

    {
      W:"gtceu:wood_small_fluid_pipe",
      C:"gtceu:copper_small_fluid_pipe",
      B:"gtac:blank_steam_motor",
      R:"gtceu:iron_screw",
    }

  )

  event.shaped("gtac:steam_piston",

    [
      "IRI",
      "WCC",
      "WBC"
    ],

    {
      W:"gtceu:wood_small_fluid_pipe",
      C:"gtceu:copper_small_fluid_pipe",
      B:"gtac:blank_steam_piston",
      I:"gtceu:wood_normal_fluid_pipe",
      R:"gtceu:iron_screw",
    }

  )
  
  event.shaped("gtac:steam_robot_arm",

    [
      "CCC",
      "IBI",
      "RWW"
    ],

    {
      W:"gtceu:wood_small_fluid_pipe",
      C:"gtceu:copper_small_fluid_pipe",
      B:"gtac:blank_steam_robot_arm",
      I:"gtceu:wood_normal_fluid_pipe",
      R:"gtceu:iron_screw",
    }

  )  
  
  event.shaped("gtac:steam_pump",

    [
      "IRN",
      "DBE",
      "NWC"
    ],

    {
      W:"gtceu:wood_small_fluid_pipe",
      C:"gtceu:copper_small_fluid_pipe",
      B:"gtac:blank_steam_pump",
      I:"gtceu:wood_normal_fluid_pipe",
      R:"gtceu:iron_screw",
      N:"gtceu:rubber_ring",
      D:"#forge:tools/screwdrivers",
      E:"#forge:tools/wrench"
    }

  )
  
    event.shaped("gtac:steam_pump",

    [
      "IRN",
      "DBE",
      "NWC"
    ],

    {
      W:"gtceu:wood_small_fluid_pipe",
      C:"gtceu:copper_small_fluid_pipe",
      B:"gtac:blank_steam_pump",
      I:"gtceu:wood_normal_fluid_pipe",
      R:"gtceu:iron_screw",
      N:"gtceu:silicone_rubber_ring",
      D:"#forge:tools/screwdrivers",
      E:"#forge:tools/wrench"
    }

  ) 

  event.shaped("gtac:steam_pump",

    [
      "IRN",
      "DBE",
      "NWC"
    ],

    {
      W:"gtceu:wood_small_fluid_pipe",
      C:"gtceu:copper_small_fluid_pipe",
      B:"gtac:blank_steam_pump",
      I:"gtceu:wood_normal_fluid_pipe",
      R:"gtceu:iron_screw",
      N:"gtceu:styrene_butadiene_rubber_ring",
      D:"#forge:tools/screwdrivers",
      E:"#forge:tools/wrench"
    }

  )

  event.recipes.gtceu.river_digger("river_digger_iron")
    .chancedInput("minecraft:iron_shovel", 500, 0)
    .chancedInput("minecraft:iron_pickaxe", 500, 0)
    .chancedOutput("minecraft:sand", 9000, 0)
    .chancedOutput("gtceu:tiny_gold_dust", 2500, 0)    
    .chancedOutput("minecraft:gravel", 9000, 0)
    .chancedOutput("minecraft:clay_ball", 9000, 0)
    .EUt(12)
    .duration(1200)
    .biome("minecraft:river")
    
  event.recipes.gtceu.river_digger("river_digger_bronze")
    .chancedInput("gtceu:bronze_shovel", 750, 0)
    .chancedInput("gtceu:bronze_pickaxe", 750, 0)
    .chancedOutput("minecraft:red_sand", 9000, 0)
    .chancedOutput("2x minecraft:gravel", 9000, 0)
    .chancedOutput("2x minecraft:clay_ball", 9000, 0)
    .chancedOutput("gtceu:quartz_sand_block", 7000, 0)
    .EUt(12)
    .duration(1200)
    .biome("minecraft:river")
    
  event.recipes.gtceu.river_digger("river_digger_wrought")
    .chancedInput("gtceu:wrought_iron_shovel", 1000, 0)
    .chancedInput("gtceu:wrought_iron_pickaxe", 1000, 0)
    .chancedOutput("4x minecraft:sand", 9000, 0)
    .chancedOutput("4x minecraft:gravel", 9000, 0)
    .chancedOutput("minecraft:clay", 9000, 0)
    .chancedOutput("2x gtceu:quartz_sand_block", 8000, 0)
    .EUt(12)
    .duration(1200)
    .biome("minecraft:river")
})

