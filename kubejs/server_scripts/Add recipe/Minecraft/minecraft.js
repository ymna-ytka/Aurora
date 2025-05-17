ServerEvents.recipes(event=>{

    event.shaped("minecraft:campfire",
    
        [
            " S ",
            "SIS",
            "OOO"
        ],
    
        {
             S:"minecraft:stick",
             I:"farmersdelight:straw",
             O:"#minecraft:logs"
        } 


    )

    event.shaped("minecraft:furnace",

        [
            "DDD",
            "LSL",
            "DDD"
        ],

        {
            D:"minecraft:cobblestone",
            L:"minecraft:cobbled_deepslate",
            S:"gtceu:sponge_metal_ingot"      
        }
    )

    event.shaped("minecraft:stonecutter",

        [
            "   ",
            " S ",
            "OCO"
        ],
        
        {
            S:"gtceu:steel_buzz_saw_blade",
            O:"minecraft:oak_wood",
            C:"minecraft:stone_slab"   
        }
    
    )

    event.shaped("minecraft:enchanting_table",

        [
            " B ",
            "DOD",
            "OPO"
        ],

        {
            B:"minecraft:book",
            D:"gtceu:diamond_plate",
            O:"minecraft:obsidian",
            P:"gtceu:dense_obsidian_plate"
        }

    )

    event.recipes.gtceu.assembler('enchanting_table')
    
    .itemInputs(
        "2x gtceu:diamond_plate",
        "gtceu:dense_obsidian_plate",
        "minecraft:book",
        "minecraft:obsidian"
      )
  
    .itemOutputs(
        "minecraft:enchanting_table"
      )
  
    .duration(100)
    .EUt(7)
        
    event.recipes.gtceu.compressor('compresor_netherite_block')
    
    .itemInputs(
        "9x minecraft:netherite_ingot",
      )
  
    .itemOutputs(
        "minecraft:netherite_block"
      )
  
    .duration(300)
    .EUt(2)

    event.shapeless("2x minecraft:stick",

        [
            "2x palegarden:pale_plank"
        ]

    )

    event.shapeless("4x minecraft:stick",

        [
            "2x palegarden:pale_plank",
            "#forge:tools/saws"
        ]

    )

    event.recipes.gtceu.lathe('pale_stick_lathe')
        .itemInputs(
            "palegarden:pale_plank",
        )

        .itemOutputs(
            "2x minecraft:stick"
        )
        .duration(10)
        .EUt(GTValues.VA[GTValues.ULV])

    event.shapeless("minecraft:flint",

        [
            "4x kubejs:mini_cobblestone"
        ]

    )

    event.shaped('minecraft:clay',

        [
            "CCC",
            "CCC",
            "CCH"
        ],

        {
            C:"minecraft:clay_ball",
            H:"kubejs:bad_stone_hammer"
        }

    ).damageIngredient('kubejs:bad_stone_hammer')


    event.campfireCooking('minecraft:terracotta', 'compressium:clay_1', 5, 600)
    
    event.shaped("minecraft:cobblestone_slab",

        [
            "   ",
            "CCC",
            "CCC"
        ],

        {
            C:"kubejs:mini_cobblestone"
        }

    )

    event.recipes.gtceu.cooler('gtceu:cooler/snowball')

        .itemInputs(
            "gtceu:ball_casting_mold"
        )

        .inputFluids(
            Fluid.of("minecraft:water", 72)
        )

        .itemOutputs(
            "minecraft:snowball"
        )

        .duration(400)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.cooler('gtceu:cooler/snow_block')

        .itemInputs(
            "gtceu:block_casting_mold"
        )

        .inputFluids(
            Fluid.of("minecraft:water", 642)
        )

        .itemOutputs(
            "minecraft:snow_block"
        )

        .duration(600)
        .EUt(GTValues.VA[GTValues.LV])
        
    event.recipes.gtceu.steam_coke_oven('charcoal')
    
        .itemInputs(
            "#minecraft:logs",
    )

    .inputFluids(
        Fluid.of("gtceu:steam", 2500)
    )

        .outputFluids(
            Fluid.of("gtceu:creosote", 500)
    )

        .itemOutputs(
            "minecraft:charcoal"
    )
        .EUt(7)
        .duration(450)
    
    event.recipes.gtceu.fire_saw("oak_plank_fire_saw")

        .itemInputs(
            "#minecraft:oak_logs"
        )

        .itemOutputs(
            "4x minecraft:oak_planks"
        )
        .duration(1200)

    event.recipes.gtceu.fire_saw("spruce_plank_fire_saw")

        .itemInputs(
            "#minecraft:spruce_logs"
        )

        .itemOutputs(
            "4x minecraft:spruce_planks"
        )
        .duration(1200)

    event.recipes.gtceu.fire_saw("birch_plank_fire_saw")

        .itemInputs(
            "#minecraft:birch_logs"
        )

        .itemOutputs(
            "4x minecraft:birch_planks"
        )
        .duration(1200)
        
    event.recipes.gtceu.fire_saw("jungle_plank_fire_saw")

        .itemInputs(
            "#minecraft:jungle_logs"
        )

        .itemOutputs(
            "4x minecraft:jungle_planks"
        )
        .duration(1200)

    event.recipes.gtceu.fire_saw("acacia_plank_fire_saw")

        .itemInputs(
            "#minecraft:acacia_logs"
        )

        .itemOutputs(
            "4x minecraft:acacia_planks"
        )
        .duration(1200)

    event.recipes.gtceu.fire_saw("cherry_plank_fire_saw")

        .itemInputs(
            "#minecraft:cherry_logs"
        )

        .itemOutputs(
            "4x minecraft:cherry_planks"
        )
        .duration(1200)

    event.recipes.gtceu.fire_saw("dark_oak_plank_fire_saw")

        .itemInputs(
            "#minecraft:dark_oak_logs"
        )

        .itemOutputs(
            "4x minecraft:dark_oak_planks"
        )
        .duration(1200)

    event.recipes.gtceu.fire_saw("mangrove_plank_fire_saw")

        .itemInputs(
            "#minecraft:mangrove_logs"
        )

        .itemOutputs(
            "4x minecraft:mangrove_planks"
        )
        .duration(1200)

    event.recipes.gtceu.fire_saw("bamboo_plank_fire_saw")

        .itemInputs(
            "#minecraft:bamboo_blocks"
        )

        .itemOutputs(
            "4x minecraft:bamboo_planks"
        )
        .duration(1200)

    event.recipes.gtceu.fire_saw("crimson_plank_fire_saw")

        .itemInputs(
            "#minecraft:crimson_stems"
        )

        .itemOutputs(
            "4x minecraft:crimson_planks"
        )
        .duration(1200)

    event.recipes.gtceu.fire_saw("warped_plank_fire_saw")

        .itemInputs(
            "#minecraft:warped_stems"
        )

        .itemOutputs(
            "4x minecraft:warped_planks"
        )
        .duration(1200)

})