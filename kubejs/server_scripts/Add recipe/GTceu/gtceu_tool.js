ServerEvents.recipes(event=>{
    
    event.recipes.gtceu.assembler('item_filter_polyeth_assemb')

    .itemInputs(
        "64x gtceu:fine_steel_wire",
        "16x gtceu:zinc_foil"
    )

    .inputFluids(
        Fluid.of("gtceu:polyethylene", 144)
    )

    .itemOutputs(
        "gtceu:item_filter"
    )

    .duration(1600)
    .EUt(16)
    .circuit(1)

    event.recipes.gtceu.assembler('item_filter_assemb')

    .itemInputs(
        "gtceu:carbon_fiber_mesh",
        "16x gtceu:zinc_foil"
    )

    .itemOutputs(
        "gtceu:item_filter"
    )

    .duration(1600)
    .EUt(GTValues.VA[GTValues.LV])
    .circuit(1)

    event.recipes.gtceu.assembler('item_tag_filter_ol_polyeth_assemb')

    .itemInputs(
        '64x gtceu:fine_olivine_wire',
        "16x gtceu:zinc_foil"
    )

    .inputFluids(
        Fluid.of("gtceu:polyethylene", 144)
    )

    .itemOutputs(
        "gtceu:item_tag_filter"
    )

    .duration(1600)
    .EUt(16)
    .circuit(2)


    event.recipes.gtceu.assembler('item_tag_filter_em_polyeth_assemb')

    .itemInputs(
        "64x gtceu:fine_emerald_wire",
        "16x gtceu:zinc_foil"
    )

    .inputFluids(
        Fluid.of("gtceu:polyethylene", 144)
    )

    .itemOutputs(
        "gtceu:item_tag_filter"
    )

    .duration(1600)
    .EUt(16)
    .circuit(2)

    event.recipes.gtceu.assembler('item_tag_filter_assemb')

    .itemInputs(
        "gtceu:carbon_fiber_mesh",
        "16x gtceu:zinc_foil"
    )

    .itemOutputs(
        "gtceu:item_tag_filter"
    )

    .duration(1600)
    .EUt(GTValues.VA[GTValues.LV])
    .circuit(2)

    event.recipes.gtceu.assembler('fluid_filter_so_polyeth_assemb')

    .itemInputs(
        "64x gtceu:fine_sodalite_wire",
        "16x gtceu:zinc_foil"
    )

    .inputFluids(
        Fluid.of("gtceu:polyethylene", 144)
    )

    .itemOutputs(
        "gtceu:fluid_filter"
    )

    .duration(1600)
    .EUt(16)
    .circuit(3)


    event.recipes.gtceu.assembler('fluid_filter_laz_polyeth_assemb')

    .itemInputs(
        "64x gtceu:fine_lazurite_wire",
        "16x gtceu:zinc_foil"
    )

    .inputFluids(
        Fluid.of("gtceu:polyethylene", 144)
    )

    .itemOutputs(
        "gtceu:fluid_filter"
    )

    .duration(1600)
    .EUt(16)
    .circuit(3)

    event.recipes.gtceu.assembler('fluid_filter_lap_polyeth_assemb')

    .itemInputs(
        "64x gtceu:fine_lapis_wire",
        "16x gtceu:zinc_foil"
    )

    .inputFluids(
        Fluid.of("gtceu:polyethylene", 144)
    )

    .itemOutputs(
        "gtceu:fluid_filter"
    )

    .duration(1600)
    .EUt(16)
    .circuit(3)

    event.recipes.gtceu.assembler('fluid_filter_assemb')

    .itemInputs(
        "gtceu:carbon_fiber_mesh",
        "16x gtceu:zinc_foil"
    )

    .itemOutputs(
        "gtceu:fluid_filter"
    )

    .duration(1600)
    .EUt(GTValues.VA[GTValues.LV])
    .circuit(3)

    event.recipes.gtceu.assembler('fluid_tag_filter_polyeth_assemb')

    .itemInputs(
        "64x gtceu:fine_amethyst_wire",
        "16x gtceu:zinc_foil"
    )

    .inputFluids(
        Fluid.of("gtceu:polyethylene", 144)
    )

    .itemOutputs(
        "gtceu:fluid_tag_filter"
    )

    .duration(1600)
    .EUt(16)
    .circuit(4)

    event.recipes.gtceu.assembler('fluid_tag_filter_assemb')

    .itemInputs(
        "gtceu:carbon_fiber_mesh",
        "16x gtceu:zinc_foil"
    )

    .itemOutputs(
        "gtceu:fluid_tag_filter"
    )

    .duration(1600)
    .EUt(GTValues.VA[GTValues.LV])
    .circuit(4)

    event.recipes.gtceu.assembler('item_smart_filter_polyeth_assemb')

    .itemInputs(
        "64x gtceu:fine_ruby_wire",
        "16x gtceu:zinc_foil",
        "#gtceu:circuits/lv"
    )

    .inputFluids(
        Fluid.of("gtceu:polyethylene", 144)
    )

    .itemOutputs(
        "gtceu:item_smart_filter"
    )

    .duration(1600)
    .EUt(16)
    .circuit(5)

    event.recipes.gtceu.assembler('item_smart_filter_assemb')

    .itemInputs(
        "gtceu:carbon_fiber_mesh",
        "16x gtceu:zinc_foil",
        "#gtceu:circuits/lv"

    )

    .itemOutputs(
        "gtceu:item_smart_filter"
    )

    .duration(1600)
    .EUt(GTValues.VA[GTValues.LV])
    .circuit(5)

})