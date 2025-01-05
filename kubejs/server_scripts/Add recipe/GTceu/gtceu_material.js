ServerEvents.recipes(event=>{

    event.shapeless("gtceu:flint_dust",

        [
            "#forge:tools/mortars",
            "minecraft:flint"
        ]

    )

    event.shaped("compressium:netherite_1",

        [
            "III",
            "III",
            "III"
        ],

        {
            I:"gtceu:netherite_block"
        }

    )

    event.shapeless("gtceu:netherite_block",

        [
            "compressium:netherite_1"
        ]

    )

})