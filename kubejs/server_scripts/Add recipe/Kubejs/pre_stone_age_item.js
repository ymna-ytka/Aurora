ServerEvents.recipes( event=> {

    event.shapeless("kubejs:mini_cobblestone",

        [
            "4x kubejs:pebbles"
        ]

    )

    event.shaped('kubejs:bad_stone_hammer',

        [
            "CCC",
            "CRC",
            " S "
        ],

        {
            C:'kubejs:mini_cobblestone',
            R:"farmersdelight:rope",
            S:"minecraft:stick"
        }

    )

    event.shaped('gregtech:primitive_furnace',

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

    ).damageIngredient('kubejs:bad_stone_hammer')

    event.shaped('kubejs:ingot_wood_mold',

        [
            "PP ",
            " K ",
            "   "
        ],

        {
            P:"#minecraft:planks",
            K:"#forge:tools/knives"
        }

    )

})