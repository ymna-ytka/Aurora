ServerEvents.recipes( event=> {

    event.shapeless("gtac:mini_cobblestone",

        [
            "4x gtac:pebbles"
        ]

    )

    event.shaped("kubejs:bad_stone_hammer",

        [
            "CCC",
            "CRC",
            " S "
        ],

        {
            C:"gtac:mini_cobblestone",
            R:"farmersdelight:rope",
            S:"minecraft:stick"
        }

    )

    event.shaped("gregtech:primitive_furnace",

        [
        "TTT",
        "THT",
        "SSS"
        ],

        {
            T:"minecraft:terracotta",
            S:"minecraft:cobblestone_slab",
            H:"kubejs:bad_stone_hammer"
        }

    ).damageIngredient("kubejs:bad_stone_hammer")


})