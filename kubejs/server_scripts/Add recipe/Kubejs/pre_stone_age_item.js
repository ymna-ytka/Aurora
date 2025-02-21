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

})