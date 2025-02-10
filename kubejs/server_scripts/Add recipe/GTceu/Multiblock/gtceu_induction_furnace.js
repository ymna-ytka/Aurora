ServerEvents.recipes( event=> {

    event.recipes.gtceu.induction_furnace("invar_ingot")

        .itemInputs(
            "gtceu:invar_dust"
        )


        .itemOutputs(
            "gtceu:invar_ingot"
        )
        .duration(160)
        .EUt(GTValues.VH[GTValues.LV])

    event.recipes.gtceu.induction_furnace("cupronickel_ingot")

        .itemInputs(
            "gtceu:cupronickel_dust"
        )


        .itemOutputs(
            "gtceu:cupronickel_ingot"
        )
        .duration(160)
        .EUt(GTValues.VH[GTValues.LV])

    event.recipes.gtceu.induction_furnace("electrum_ingot")

        .itemInputs(
            "gtceu:electrum_dust"
        )


        .itemOutputs(
            "gtceu:electrum_ingot"
        )
        .duration(160)
        .EUt(GTValues.VH[GTValues.LV])

})