ServerEvents.recipes(event => {
   
    event.replaceInput({ id: 'gtceu:shaped/bronze_bricks_hull' },

        "minecraft:bricks", 
        "gtceu:firebricks"

    ) 

    event.replaceInput( { id: "gtceu:shaped/steel_bricks_hull" },

        "minecraft:bricks",
        "gtceu:firebricks"

    )

     event.replaceInput( { id: "gtceu:shaped/casing_bronze_bricks" },

        "minecraft:bricks",
        "gtceu:firebricks"


     )

})