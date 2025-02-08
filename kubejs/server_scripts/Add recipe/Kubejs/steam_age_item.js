ServerEvents.recipes(event =>{

   event.shaped("kubejs:solar_element",

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
 
   event.shaped("kubejs:copper_voltage_coil",

      [
         "CCC",
         "CRC",
         "CCC"
      ],

      {
         C:"gtceu:fine_copper_wire",
         R:"gtceu:magnetic_iron_rod"
      }

   )

   event.shaped("kubejs:whisk",

      [
         "FPH",
         "RRR",
         "WIS"
      ],

      {
         P:"gtceu:iron_plate",
         R:"gtceu:iron_rod",
         I:"gtceu:iron_ring",
         F:"#forge:tools/files",
         H:"#forge:tools/hammers",
         W:"#forge:tools/wrench",
         S:"#forge:tools/screwdrivers"
      }

   )

   event.shaped("kubejs:blank_lv_electric_motor",

      [
         "FPR",
         "HGR",
         "PPP"
      ],

      {
         P:"gtceu:constantan_plate",
         R:"gtceu:constantan_rod",
         F:"#forge:tools/files",
         H:"#forge:tools/hammers",
         G:"gtceu:constantan_gear",
      }

   )

   event.shaped("kubejs:blank_lv_conveyor",

      [
         "RPR",
         "PFP",
         "RPR"
      ],

      {
         P:"gtceu:constantan_plate",
         R:"gtceu:constantan_ring",
         F:"#forge:tools/files"
      }

   )

   event.shaped("kubejs:blank_lv_electric_piston",

      [
         "PHP",
         "PRF",
         "GPP"
      ],

      {
         P:"gtceu:constantan_plate",
         R:"gtceu:constantan_rod",
         F:"#forge:tools/files",
         H:"#forge:tools/hammers",
         G:"gtceu:constantan_gear"
      }

   )

   event.shaped("kubejs:blank_lv_electric_pump",

      [
         "FPR",
         "PLP",
         "RPH"
      ],

      {
         P:"gtceu:constantan_plate",
         R:"gtceu:constantan_rod",
         L:"gtceu:long_constantan_rod",
         F:"#forge:tools/files",
         H:"#forge:tools/hammers"
      }

   )

   event.shaped("kubejs:blank_lv_robot_arm",

      [
         "HPI",
         "RSR",
         "GRR"
      ],

      {
         P:"gtceu:constantan_plate",
         R:"gtceu:constantan_rod",
         I:"gtceu:constantan_ring",
         H:"#forge:tools/hammers",
         G:"gtceu:constantan_gear",
         S:"#forge:tools/screwdrivers"
      }

   )

   event.shaped("kubejs:blank_lv_sensor",

      [
         "P  ",
         "PW ",
         "IPP"
      ],

      {
         P:"gtceu:constantan_plate",
         I:"gtceu:constantan_ring",
         W:"#forge:tools/wrench"
      }

   )

   event.shaped("kubejs:blank_lv_emitter",

      [
         "PHP",
         "PPP",
         "RFR"
      ],

      {
         P:"gtceu:constantan_plate",
         R:"gtceu:constantan_rod",
         F:"#forge:tools/files",
         H:"#forge:tools/hammers"
      }

   )

   event.shaped("kubejs:blank_lv_field_generator",

      [
         "PHP",
         "SGF",
         "PWP"
      ],

      {
         P:"gtceu:constantan_plate",
         F:"#forge:tools/files",
         H:"#forge:tools/hammers",
         W:"#forge:tools/wrench",
         S:"#forge:tools/screwdrivers",
         G:"gtceu:constantan_gear"
      }

   )

   event.recipes.gtceu.assembler('blank_lv_electric_motor_assemb')

      .itemInputs(
         "4x gtceu:constantan_plate",
         "2x gtceu:constantan_rod",
         "gtceu:constantan_gear"
      )

      .inputFluids(
         Fluid.of("gtceu:lubricant", 50)
      )

      .itemOutputs(
         "kubejs:blank_lv_electric_motor"
   )
   .duration(100)
   .EUt(16)


   event.recipes.gtceu.assembler('blank_lv_conveyor_assemb')

      .itemInputs(
         "4x gtceu:constantan_plate",
         "4x gtceu:constantan_ring",
      )

      .inputFluids(
         Fluid.of("gtceu:lubricant", 50)
      )

      .itemOutputs(
         "kubejs:blank_lv_conveyor"
   )
   .duration(100)
   .EUt(16)

   event.recipes.gtceu.assembler('blank_lv_electric_piston_assemb')

      .itemInputs(
         "5x gtceu:constantan_plate",
         "gtceu:constantan_rod",
         "gtceu:constantan_gear"
      )

      .inputFluids(
         Fluid.of("gtceu:lubricant", 50)
      )

      .itemOutputs(
         "kubejs:blank_lv_electric_piston"
   )
   .duration(100)
   .EUt(16)

   event.recipes.gtceu.assembler('blank_lv_electric_pump_assemb')

      .itemInputs(
         "4x gtceu:constantan_plate",
         "2x gtceu:constantan_rod",
         "gtceu:long_constantan_rod"
      )

      .inputFluids(
         Fluid.of("gtceu:lubricant", 50)
      )

      .itemOutputs(
         "kubejs:blank_lv_electric_pump"
   )
   .duration(100)
   .EUt(16)

   event.recipes.gtceu.assembler('blank_lv_robot_arm_assemb')

      .itemInputs(
         "gtceu:constantan_plate",
         "4x gtceu:constantan_rod",
         "gtceu:constantan_gear",
         "gtceu:constantan_ring"
      )

      .inputFluids(
         Fluid.of("gtceu:lubricant", 50)
      )

      .itemOutputs(
         "kubejs:blank_lv_robot_arm"
   )
   .duration(100)
   .EUt(16)

   event.recipes.gtceu.assembler('blank_lv_sensor_assemb')

      .itemInputs(
         "4x gtceu:constantan_plate",
         "gtceu:constantan_ring",
      )

      .inputFluids(
         Fluid.of("gtceu:lubricant", 50)
      )

      .itemOutputs(
         "kubejs:blank_lv_sensor"
   )
   .duration(100)
   .EUt(16)

   event.recipes.gtceu.assembler('blank_lv_emitter_assemb')

      .itemInputs(
         "5x gtceu:constantan_plate",
         "2x gtceu:constantan_rod",
      )

      .inputFluids(
         Fluid.of("gtceu:lubricant", 50)
      )

      .itemOutputs(
         "kubejs:blank_lv_emitter"
   )
   .duration(100)
   .EUt(16)

   event.recipes.gtceu.assembler('blank_lv_field_generator')

      .itemInputs(
         "4x gtceu:constantan_plate",
         "gtceu:constantan_gear"
      )

      .inputFluids(
         Fluid.of("gtceu:lubricant", 50)
      )

      .itemOutputs(
         "kubejs:blank_lv_field_generator"
   )
   .duration(100)
   .EUt(16)

   event.shapeless("kubejs:tanning_mixture",

      [
         "minecraft:flint",
         "minecraft:green_dye",
         "#forge:tools/mortars"
      ]

   )

})