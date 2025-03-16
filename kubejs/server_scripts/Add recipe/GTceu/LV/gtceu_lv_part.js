ServerEvents.recipes(event=>{

  event.shaped("gtceu:lv_electric_motor",

    [
      "CW ",
      "WOW",
      " WC"
    ],

    {
      C:"gtceu:tin_single_cable",
      W:"gtceu:copper_single_wire",
      O:"kubejs:blank_lv_electric_motor"
    }

  )

  event.recipes.gtceu.assembler('lv_motor_assemb')

  .itemInputs(
    "2x gtceu:tin_single_cable",
    "4x gtceu:copper_single_wire",
    "kubejs:blank_lv_electric_motor"
  )

  .itemOutputs(
    "gtceu:lv_electric_motor"
  )
    
  .duration(100)
  .EUt(30)

  event.shaped("gtceu:lv_robot_arm",

    [
      "CCC",
      "MOM",
      "PIR"
    ],

    {
      C:"gtceu:tin_single_cable",
      O:"kubejs:blank_lv_robot_arm",
      M:"gtceu:lv_electric_motor",
      R:"gtceu:steel_rod",
      P:"gtceu:lv_electric_piston",
      I:"#gtceu:circuits/lv"
    }

  )

  event.recipes.gtceu.assembler('lv_robot_assemb')

  .itemInputs(
    "3x gtceu:tin_single_cable",
    "kubejs:blank_lv_robot_arm",
    "2x gtceu:lv_electric_motor",
    "gtceu:steel_rod",
    "gtceu:lv_electric_piston",
    "#gtceu:circuits/lv"
  )

  .itemOutputs(
    "gtceu:lv_robot_arm"
  )
  
  .duration(100)
  .EUt(30)

  event.shaped("gtceu:lv_sensor",

    [
      "P Q",
      "IR ",
      "OIP"
    ],

    {
      O:"kubejs:blank_lv_sensor",
      Q:"gtceu:quartzite_gem",
      R:"gtceu:brass_rod",
      P:"gtceu:steel_plate",
      I:"#gtceu:circuits/lv"
    }

  )

  event.recipes.gtceu.assembler('lv_sensor_assemb')

  .itemInputs(
    "kubejs:blank_lv_sensor",
    "gtceu:quartzite_gem",
    "gtceu:brass_rod",
    "2x gtceu:steel_plate",
    "2x #gtceu:circuits/lv"
)

  .itemOutputs(
    "gtceu:lv_sensor"
  )
  
  .duration(100)
  .EUt(30)

  event.shaped("gtceu:lv_emitter",

    [
      "CRC",
      "RQR",
      "IOI"
    ],

    {
      C:"gtceu:tin_single_cable",
      O:"kubejs:blank_lv_emitter",
      Q:"gtceu:quartzite_gem",
      R:"gtceu:brass_rod",
      I:"#gtceu:circuits/lv"
    }

  )

  event.recipes.gtceu.assembler('lv_emitter_assemb')

  .itemInputs(
    "2x gtceu:tin_single_cable",
    "kubejs:blank_lv_emitter",
    "gtceu:quartzite_gem",
    "3x gtceu:brass_rod",
    "2x #gtceu:circuits/lv"
)

  .itemOutputs(
    "gtceu:lv_emitter"
  )
  
  .duration(100)
  .EUt(30)
  
  event.shaped("gtceu:lv_field_generator",

    [
      "WPW",
      "IQI",
      "WOW"
    ],

    {
      W:"gtceu:manganese_phosphide_quadruple_wire",
      O:"kubejs:blank_lv_field_generator",
      Q:"minecraft:ender_pearl",
      P:"gtceu:steel_plate",
      I:"#gtceu:circuits/lv"
    }

  )

  event.recipes.gtceu.assembler('lv_field_generator_assemb')

  .itemInputs(
    "4x gtceu:manganese_phosphide_quadruple_wire",
    "kubejs:blank_lv_field_generator",
    "minecraft:ender_pearl",
    "gtceu:steel_plate",
    "2x #gtceu:circuits/lv"
)

  .itemOutputs(
    "gtceu:lv_field_generator"
  )
  
  .duration(100)
  .EUt(30)

})