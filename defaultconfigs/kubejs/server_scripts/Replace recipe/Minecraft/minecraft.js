ServerEvents.recipes( event=>{

    event.replaceInput( { id:"gtceu:assembler/bookshelf" }, 

        "#minecraft:planks",
        "gtceu:wood_plate"

    )

    event.replaceInput( { id:"minecraft:leather_helmet" }, 

        "minecraft:leather",
        "gtac:tanned_leather"

    )

    event.replaceInput( { id:"minecraft:leather_chestplate" }, 

        "minecraft:leather",
        "gtac:tanned_leather"

    )

    event.replaceInput( { id:"minecraft:leather_leggings" }, 

        "minecraft:leather",
        "gtac:tanned_leather"

    )

    event.replaceInput( { id:"minecraft:leather_boots" }, 

        "minecraft:leather",
        "gtac:tanned_leather"

    )

    event.replaceInput( { id:"minecraft:crafting_table" },

        "minecraft:flint",
        "gtac:mini_cobblestone"

    )

    event.replaceInput( { id:"gtceu:shaped/sticky_resin_torch" },

        'gtceu:sticky_resin',
        'gtac:piece_wooden_rubber'

    )    

})