ServerEvents.recipes(event =>{

   event.shaped("gtac:solar_element",

      [
         "GGG",
         "SSS",
         "EEE"
      ],

      {
         G:"minecraft:glass",
         S:"gtceu:silver_plate",
         E:"gtceu:steel_plate"
      }

   )

   event.shaped("gtac:blank_lv_electric_motor",

      [
         "FPR",
         "HGR",
         "PPP"
      ],

      {
         P:"gtac:constantan_plate",
         R:"gtac:constantan_rod",
         F:"#forge:tools/files",
         H:"#forge:tools/hammers",
         G:"gtac:constantan_gear",
      }

   )

   event.shaped("gtac:blank_lv_conveyor",

      [
         "RPR",
         "PFP",
         "RPR"
      ],

      {
         P:"gtac:constantan_plate",
         R:"gtac:constantan_ring",
         F:"#forge:tools/files"
      }

   )

   event.shaped("gtac:blank_lv_electric_piston",

      [
         "PHP",
         "PRF",
         "GPP"
      ],

      {
         P:"gtac:constantan_plate",
         R:"gtac:constantan_rod",
         F:"#forge:tools/files",
         H:"#forge:tools/hammers",
         G:"gtac:constantan_gear"
      }

   )

   event.shaped("gtac:blank_lv_electric_pump",

      [
         "FPR",
         "PLP",
         "RPH"
      ],

      {
         P:"gtac:constantan_plate",
         R:"gtac:constantan_rod",
         L:"gtac:long_constantan_rod",
         F:"#forge:tools/files",
         H:"#forge:tools/hammers"
      }

   )

   event.shaped("gtac:blank_lv_robot_arm",

      [
         "HPI",
         "RSR",
         "GRR"
      ],

      {
         P:"gtac:constantan_plate",
         R:"gtac:constantan_rod",
         I:"gtac:constantan_ring",
         H:"#forge:tools/hammers",
         G:"gtac:constantan_gear",
         S:"#forge:tools/screwdrivers"
      }

   )

   event.shaped("gtac:blank_lv_sensor",

      [
         "P  ",
         "PW ",
         "IPP"
      ],

      {
         P:"gtac:constantan_plate",
         I:"gtac:constantan_ring",
         W:"#forge:tools/wrench"
      }

   )

   event.shaped("gtac:blank_lv_emitter",

      [
         "PHP",
         "PPP",
         "RFR"
      ],

      {
         P:"gtac:constantan_plate",
         R:"gtac:constantan_rod",
         F:"#forge:tools/files",
         H:"#forge:tools/hammers"
      }

   )

   event.shaped("gtac:blank_lv_field_generator",

      [
         "PHP",
         "SGF",
         "PWP"
      ],

      {
         P:"gtac:constantan_plate",
         F:"#forge:tools/files",
         H:"#forge:tools/hammers",
         W:"#forge:tools/wrench",
         S:"#forge:tools/screwdrivers",
         G:"gtac:constantan_gear"
      }

   )

   event.recipes.gtceu.assembler('blank_lv_electric_motor_assemb')

      .itemInputs(
         "4x gtac:constantan_plate",
         "2x gtac:constantan_rod",
         "gtac:constantan_gear"
      )

      .inputFluids(
         Fluid.of("gtceu:lubricant", 50)
      )

      .itemOutputs(
         "gtac:blank_lv_electric_motor"
   )
   .duration(100)
   .EUt(16)


   event.recipes.gtceu.assembler('blank_lv_conveyor_assemb')

      .itemInputs(
         "4x gtac:constantan_plate",
         "4x gtac:constantan_ring",
      )

      .inputFluids(
         Fluid.of("gtceu:lubricant", 50)
      )

      .itemOutputs(
         "gtac:blank_lv_conveyor"
   )
   .duration(100)
   .EUt(16)

   event.recipes.gtceu.assembler('blank_lv_electric_piston_assemb')

      .itemInputs(
         "5x gtac:constantan_plate",
         "gtac:constantan_rod",
         "gtac:constantan_gear"
      )

      .inputFluids(
         Fluid.of("gtceu:lubricant", 50)
      )

      .itemOutputs(
         "gtac:blank_lv_electric_piston"
   )
   .duration(100)
   .EUt(16)

   event.recipes.gtceu.assembler('blank_lv_electric_pump_assemb')

      .itemInputs(
         "4x gtac:constantan_plate",
         "2x gtac:constantan_rod",
         "gtac:long_constantan_rod"
      )

      .inputFluids(
         Fluid.of("gtceu:lubricant", 50)
      )

      .itemOutputs(
         "gtac:blank_lv_electric_pump"
   )
   .duration(100)
   .EUt(16)

   event.recipes.gtceu.assembler('blank_lv_robot_arm_assemb')

      .itemInputs(
         "gtac:constantan_plate",
         "4x gtac:constantan_rod",
         "gtac:constantan_gear",
         "gtac:constantan_ring"
      )

      .inputFluids(
         Fluid.of("gtceu:lubricant", 50)
      )

      .itemOutputs(
         "gtac:blank_lv_robot_arm"
   )
   .duration(100)
   .EUt(16)

   event.recipes.gtceu.assembler('blank_lv_sensor_assemb')

      .itemInputs(
         "4x gtac:constantan_plate",
         "gtac:constantan_ring",
      )

      .inputFluids(
         Fluid.of("gtceu:lubricant", 50)
      )

      .itemOutputs(
         "gtac:blank_lv_sensor"
   )
   .duration(100)
   .EUt(16)

   event.recipes.gtceu.assembler('blank_lv_emitter_assemb')

      .itemInputs(
         "5x gtac:constantan_plate",
         "2x gtac:constantan_rod",
      )

      .inputFluids(
         Fluid.of("gtceu:lubricant", 50)
      )

      .itemOutputs(
         "gtac:blank_lv_emitter"
   )
   .duration(100)
   .EUt(16)

   event.recipes.gtceu.assembler('blank_lv_field_generator')

      .itemInputs(
         "4x gtac:constantan_plate",
         "gtac:constantan_gear"
      )

      .inputFluids(
         Fluid.of("gtceu:lubricant", 50)
      )

      .itemOutputs(
         "gtac:blank_lv_field_generator"
   )
   .duration(100)
   .EUt(16)

   event.recipes.gtceu.steam_magic_bath('twilight_gem')
    
      .inputFluids(
         Fluid.of("gtceu:steam", 64000)
      )    

      .itemInputs(
         "gtceu:wrought_iron_dust",
         "#gtceu:circuits/lv"
      )   

      .itemOutputs(
         'gtac:twilight_gem'
      )

      .duration(1000)
      
})