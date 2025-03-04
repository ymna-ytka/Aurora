ServerEvents.recipes( event=> {

    event.shaped('ceramicbucket:ceramic_bucket',

        [
            " S ",
            "CHC",
            "CCC"
        ],

        {
            C:"minecraft:brick",
            H:"kubejs:bad_stone_hammer",
            S:"minecraft:stick"
        }

    ).damageIngredient('kubejs:bad_stone_hammer')

})