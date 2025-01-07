ServerEvents.recipes( event=> {
    
    event.recipes.gtceu.wiremill('fine_olivine_wire')

    .itemInputs(
        "gtceu:olivine_block"
    )

    .itemOutputs(
        '72x gtceu:fine_olivine_wire'
    )

    .duration(1600)
    .circuit(3)
    .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.wiremill('fine_emerald_wire')

    .itemInputs(
        "minecraft:emerald_block"
    )

    .itemOutputs(
        '72x gtceu:fine_emerald_wire'
    )

    .duration(1600)
    .circuit(3)
    .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.wiremill('fine_sodalite_wire')

    .itemInputs(
        "gtceu:sodalite_block"
    )

    .itemOutputs(
        '72x gtceu:fine_sodalite_wire'
    )

    .duration(1600)
    .circuit(3)
    .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.wiremill('fine_lazurite_wire')

    .itemInputs(
        "gtceu:lazurite_block"
    )

    .itemOutputs(
        '72x gtceu:fine_lazurite_wire'
    )

    .duration(1600)
    .circuit(3)
    .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.wiremill('fine_lapis_wire')

    .itemInputs(
        "minecraft:lapis_block"
    )

    .itemOutputs(
        '72x gtceu:fine_lapis_wire'
    )

    .duration(1600)
    .circuit(3)
    .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.wiremill('fine_amethyst_wire')

    .itemInputs(
        "minecraft:amethyst_block"
    )

    .itemOutputs(
        '32x gtceu:fine_amethyst_wire'
    )

    .duration(1600)
    .circuit(3)
    .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.wiremill('fine_ruby_wire')

    .itemInputs(
        "gtceu:ruby_block"
    )

    .itemOutputs(
        '72x gtceu:fine_ruby_wire'
    )

    .duration(1600)
    .circuit(3)
    .EUt(GTValues.VA[GTValues.MV])


})