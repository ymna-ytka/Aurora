ServerEvents.recipes(event=>{   

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

})