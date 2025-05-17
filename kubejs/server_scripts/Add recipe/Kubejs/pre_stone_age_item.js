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

    event.shaped('kubejs:wood_mold',

        [
            "PP ",
            " K ",
            "   "
        ],

        {
            P:"#minecraft:planks",
            K:"#forge:tools/knives"
        }

    ).damageIngredient('#forge:tools/knives')

    event.shaped('kubejs:stone_hoe',

        [
            "IIH",
            "PS ",
            " S "
        ],

        {
            I:"kubejs:stone_ingot",
            H:"kubejs:bad_stone_hammer",
            S:"minecraft:stick",
            P:"kubejs:stone_plate"
        }

    ).damageIngredient('kubejs:bad_stone_hammer')

    event.shaped('kubejs:stone_shovel',

        [
            " PH",
            " S ",
            " S "
        ],

        {
            H:"kubejs:bad_stone_hammer",
            S:"minecraft:stick",
            P:"kubejs:stone_plate"
        }

    ).damageIngredient('kubejs:bad_stone_hammer')

    event.shaped('kubejs:stone_axe',

        [
            "PIH",
            "PS ",
            " S "
        ],

        {
            I:"kubejs:stone_ingot",
            H:"kubejs:bad_stone_hammer",
            S:"minecraft:stick",
            P:"kubejs:stone_plate"
        }

    ).damageIngredient('kubejs:bad_stone_hammer')

    event.shaped('kubejs:stone_pickaxe',

        [
            "PII",
            " SH",
            " S "
        ],

        {
            I:"kubejs:stone_ingot",
            H:"kubejs:bad_stone_hammer",
            S:"minecraft:stick",
            P:"kubejs:stone_plate"
        }

    ).damageIngredient('kubejs:bad_stone_hammer')

    event.shaped('kubejs:stone_sword',

        [
            " P ",
            " PH",
            " S "
        ],

        {
            H:"kubejs:bad_stone_hammer",
            S:"minecraft:stick",
            P:"kubejs:stone_plate"
        }

    ).damageIngredient('kubejs:bad_stone_hammer')
})