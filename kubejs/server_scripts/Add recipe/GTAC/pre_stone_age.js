ServerEvents.recipes( event=> {

    event.shapeless("gtac:mini_cobblestone",

        [
            "4x gtac:pebbles"
        ]

    )

    event.shaped("gtac:bad_stone_hammer",

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
            H:"gtac:bad_stone_hammer"
        }

    ).damageIngredient("gtac:bad_stone_hammer")    

    event.shaped("gtac:wooden_brick_form",

        [
            "AB ",
            "   ",
            "   "
        ], 

        {

            A: '#forge:tools/knives',
            B: '#minecraft:planks'

        }
    ).damageIngredient('#forge:tools/knives')

    event.shaped("gtac:wooden_paste_form",

        [
            "A  ",
            " B ",
            "   "
        ], 

        {

            A: '#forge:tools/knives',
            B: '#minecraft:planks'

        }
    ).damageIngredient('#forge:tools/knives')

    event.shaped("2x gtac:masonry_bricks", 

        [
            "AAA",
            "ABA",
            "AAA"
        ], 
        
        {
            A: "gtac:masonry_brick",
            B: "minecraft:water_bucket"
        }
    )

  event.recipes.gtceu.coke_oven("hot_iron_coke")
    .itemInputs("minecraft:iron_ingot")
    .itemOutputs("gtac:hot_iron_ingot")
    .duration(300)

  event.shaped('gtceu:wrought_iron_ingot',
    
    [
      ' A ',
      ' B ',
      '   '
    ],

    {
      A: "#forge:tools/hammers",
      B: 'gtac:hot_iron_ingot'
    }

  )

})