ServerEvents.recipes(event => {
    
   event.replaceInput ({ id: 'gtceu:shaped/steam_boiler_solar_bronze' },

      "gtceu:silver_plate", 
      "kubejs:solar_element"

   )
     
   event.replaceInput( { id: 'gtceu:shaped/steam_boiler_lava_bronze' },

      "minecraft:glass", 
      "fluidtank:tank_wood"

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

   event.replaceInput( { id: "gtceu:shaped/steam_compressor_bronze" },

      "#forge:pistons",
      "gtac:steam_piston"

   )

   event.replaceInput( { id: "gtceu:shaped/steam_extractor_bronze" },

      "#forge:pistons",
      "gtac:steam_piston"

   )

})