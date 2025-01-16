ServerEvents.recipes ( event=> {

    event.recipes.gtceu.assembler('nature_compas_assemb')
        .itemInputs(
            "minecraft:compass",
            "4x #minecraft:logs",
            "4x #minecraft:saplings"
        )
        
        .itemOutputs(
            "naturescompass:naturescompass"
        )

})