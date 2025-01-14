ServerEvents.recipes( event=>{

    event.replaceInput ( { id:"miners_delight:copper_pot" },

        "minecraft:wooden_shovel",
        "gtceu:flint_shovel"

    ),

    event.replaceInput ( { id:"miners_delight:copper_pot" },

        "minecraft:copper_ingot",
        "gtceu:bad_bronze_ingot"

    )

})