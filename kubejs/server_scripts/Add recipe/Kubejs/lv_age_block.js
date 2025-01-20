ServerEvents.recipes( event=> {

    event.recipes.gtceu.assembler('reactive_cleaner_assemb')
        
        .itemInputs(
            "2x gtceu:steel_plate",
            "2x gtceu:wrought_iron_plate",
            "gtceu:steel_machine_casing", 
            "2x gtceu:lapis_dust",
            "gtceu:carbon_fiber_mesh", 
            'kubejs:glass_balloon'
        )

        .inputFluids(
            Fluid.of("gtceu:nitrogen", 1000)
        )

        .itemOutputs(
            "kubejs:reactive_cleaner"
        )
        .duration(500)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.assembler('filtering_camera_assemb')
        
        .itemInputs(
            "32x gtceu:fine_silver_wire",
            "gtceu:ecoferum_frame",
            "gtceu:rubber_plate"
        )

        .inputFluids(
            Fluid.of("gtceu:distilled_water", 4000)
        )

        .itemOutputs(
            "kubejs:filtering_camera"
        )
        .duration(500)
        .EUt(GTValues.VA[GTValues.LV])


})