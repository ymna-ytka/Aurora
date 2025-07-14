ServerEvents.recipes( event=> {

    event.recipes.gtceu.assembler('item_trash_can_assemb')

        .itemInputs(
            "3x #forge:stone",
            "#balm:wooden_chests",
            "5x gtceu:steel_plate"
        )

        .itemOutputs(
            "trashcans:item_trash_can"
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(1)

    event.recipes.gtceu.assembler('liquid_trash_can_assemb')

        .itemInputs(
            "3x #forge:stone",
            "minecraft:bucket",
            "5x gtceu:steel_plate"
        )

        .itemOutputs(
            "trashcans:liquid_trash_can"
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(1)

    event.recipes.gtceu.assembler('energy_trash_can_assemb')

        .itemInputs(
            "3x #forge:stone",
            "minecraft:redstone",
            "5x gtceu:steel_plate"
        )

        .itemOutputs(
            "trashcans:energy_trash_can"
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(1)

})