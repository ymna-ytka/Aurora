ServerEvents.recipes(event=>{

    event.campfireCooking("kubejs:coal_chunk", "farmersdelight:straw")


    event.shapeless("kubejs:stone_stick",
        
        [
            "2x stone"
        ]

    )

    event.shaped("kubejs:coal_stone_stick",
    
        [
            "CCC",    
            "CSC",
            "CCC"
        ],

        {
            C:"kubejs:coal_chunk",
            S:"kubejs:stone_stick"  
        }
        
    )
    
    event.campfireCooking("kubejs:chunk_stone", "minecraft:flint", 0, 200)

    event.recipes.gtceu.bronze_mixer("raw_cleansed_leather_bronze")

        .itemInputs(
            "minecraft:leather"
        )

        .inputFluids(
            Fluid.of("kubejs:salter_water", 432)
        )

        .itemOutputs(
            "kubejs:raw_cleansed_leather"
        )

        .duration(900)
        .EUt(GTValues.VH[GTValues.LV])

    event.recipes.gtceu.mixer("raw_cleansed_leather")

        .itemInputs(
            "minecraft:leather"
        )

        .inputFluids(
            Fluid.of("kubejs:salter_water", 432)
        )

        .itemOutputs(
            "kubejs:raw_cleansed_leather"
        )

        .duration(900)
        .EUt(GTValues.VH[GTValues.LV])

    event.recipes.gtceu.alloy_smelter("tanned_leather_alloy")

        .itemInputs(
            "kubejs:raw_cleansed_leather",
            "4x kubejs:tanning_mixture"
        )

        .itemOutputs(
            "kubejs:tanned_leather"
        )
        .duration(1800)
        .EUt(GTValues.VH[GTValues.LV])

    event.recipes.gtceu.mixer("raw_cleansed_leather_mixer")
        
        .itemInputs(
            "minecraft:leather",
            "kubejs:flint_dye"
        )

        .itemOutputs(
            "kubejs:cleansed_leather"
        )
        .duration(200)
        .EUt(GTValues.VH[GTValues.LV])
        .circuit(2)

    event.recipes.gtceu.cutter("tanned_leather_cutter")
    
        .itemInputs(
            "kubejs:cleansed_leather"
        )

        .inputFluids(
            Fluid.of("gtceu:lubricant", 5)
        )

        .itemOutputs(
            "kubejs:tanned_leather"
        )

        .duration(100)
        .EUt(GTValues.VH[GTValues.ULV])

    event.recipes.gtceu.cutter("tanned_leather_cutter_dis_water")
    
        .itemInputs(
            "kubejs:cleansed_leather"
        )

        .inputFluids(
            Fluid.of("gtceu:distilled_water", 25)
        )

        .itemOutputs(
            "kubejs:tanned_leather"
        )

        .duration(300)
        .EUt(GTValues.VH[GTValues.ULV])

    event.recipes.gtceu.cutter("tanned_leather_cutter_water")
    
        .itemInputs(
            "kubejs:cleansed_leather"
        )

        .inputFluids(
            Fluid.of("minecraft:water", 55)
        )

        .itemOutputs(
            "kubejs:tanned_leather"
        )

        .duration(600)
        .EUt(GTValues.VH[GTValues.ULV])


})