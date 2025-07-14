ServerEvents.recipes( event=> {

    event.shapeless("gtceu:wheat_dust",

        [
            "minecraft:wheat",
            "kubejs:bad_stone_hammer"
        ]

    ).damageIngredient('kubejs:bad_stone_hammer')

})