ServerEvents.recipes( event=> {

    event.shaped('ceramicbucket:unfired_clay_bucket',

        [
            " S ",
            "CHC",
            "CCC"
        ],

        {
            C:'minecraft:clay_ball',
            H:"kubejs:bad_stone_hammer",
            S:"minecraft:stick"
        }

    ).damageIngredient('kubejs:bad_stone_hammer')

})