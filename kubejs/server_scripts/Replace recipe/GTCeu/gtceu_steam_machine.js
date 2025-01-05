ServerEvents.recipes(event => {
   
   event.replaceInput( { id: 'gtceu:shaped/steam_boiler_coal_bronze' },

      "minecraft:bricks", 
      "gtceu:coke_oven_bricks"

   )
    
   event.replaceInput ({ id: 'gtceu:shaped/steam_boiler_solar_bronze' },

      "gtceu:silver_plate", 
      "kubejs:solar_element"

   )
     
   event.replaceInput( { id: 'gtceu:shaped/steam_boiler_lava_bronze' },

      "minecraft:glass", 
      "fluidtank:tank_wood"

   )

   event.replaceInput( { id: "gtceu:shaped/steam_boiler_coal_steel" },

      "minecraft:bricks",
      "gtceu:firebricks"

   )

   event.replaceInput( { id: "gtceu:shaped/steam_compressor_bronze" },

      "gtceu:bronze_machine_casing",
      "gtceu:bronze_brick_casing"

   )

   event.replaceInput( { id: "gtceu:shaped/steam_extractor_bronze" },

      "gtceu:bronze_machine_casing",
      "gtceu:bronze_brick_casing"

   )

   event.replaceInput( { id: "gtceu:shaped/steam_compressor_bronze" },

      "gtceu:bronze_machine_casing",
      "gtceu:bronze_brick_casing"

   )

   event.replaceInput( { id: "gtceu:shaped/steam_rock_breaker_bronze" },

      "gtceu:bronze_machine_casing",
      "gtceu:bronze_brick_casing"

   )

   event.replaceInput ({ id: 'gtceu:shaped/steam_boiler_solar_steel' },

      "minecraft:glass", 
      "kubejs:solar_element"
      
   )

})