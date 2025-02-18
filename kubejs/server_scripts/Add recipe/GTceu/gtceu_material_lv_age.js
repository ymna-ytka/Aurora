ServerEvents.recipes(event=>{

    event.recipes.gtceu.mixer('silicon_carbide_dust_mixer')

        .itemInputs(
            "5x gtceu:silicon_dust",
            "3x gtceu:carbon_dust"
        )

        .itemOutputs(
            "8x gtceu:carbide_silicon_dust"
        )

        .circuit(8)
        .duration(160)
        .EUt(32)

    event.recipes.gtceu.chemical_bath('silicon_carbide_ingot_chem_bath')

        .itemInputs(
            "gtceu:hot_carbide_silicon_ingot"
        )

        .inputFluids(
            Fluid.of("minecraft:water", 100)
        )

        .itemOutputs(
            "gtceu:carbide_silicon_ingot"
        )

        .duration(400)
        .EUt(GTValues.VHA[GTValues.LV])

    event.recipes.gtceu.chemical_bath('silicon_carbide_ingot_chem_bath_water')

        .itemInputs(
            "gtceu:hot_carbide_silicon_ingot"
        )

        .inputFluids(
            Fluid.of("gtceu:distilled_water", 100)
        )

        .itemOutputs(
            "gtceu:carbide_silicon_ingot"
        )

        .duration(250)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.mixer('ecoferum_dust_mixer')
          
        .itemInputs(
            "6x gtceu:iron_dust",
            "2x gtceu:nickel_dust",
            "gtceu:copper_dust",
            "gtceu:rubber_dust"
        )

        .inputFluids(
            Fluid.of("gtceu:biomass", 100)
        )

        .itemOutputs(
            "10x gtceu:ecoferum_dust"
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(10)

    event.recipes.gtceu.assembler('alum_ing_assemb')
       
        .itemInputs(
            "kubejs:high_quality_aluminium_ingot"
        )

        .inputFluids(
            Fluid.of("gtceu:lubricant", 100)
        )

        .itemOutputs(
            "gtceu:aluminium_ingot"
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.electric_blast_furnace('alum_blast_furn')
      
        .itemInputs(
            "gtceu:aluminium_dust"
        )

        .itemOutputs(
            "gtceu:aluminium_ingot"
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.MV])
        .blastFurnaceTemp(1900)

    event.recipes.gtceu.electric_blast_furnace('alum_blast_furn_gas')
      
        .itemInputs(
            "gtceu:aluminium_dust"
        )

        .inputFluids(
            Fluid.of("gtceu:nitrogen", 100)
        )

        .itemOutputs(
            "gtceu:aluminium_ingot"
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.MV])
        .blastFurnaceTemp(1900)

    event.recipes.gtceu.mixer('cold_quartz_dust')
      
        .itemInputs(
            "gtceu:quartz_sand_dust",
            "2x gtceu:ice_dust",
            "2x gtceu:lazurite_dust"
        )


        .itemOutputs(
            "2x gtceu:cold_quartz_dust"
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.gas_collector('twilight_gas')
    
        .outputFluids(
           Fluid.of("gtceu:twilight_gas", 10000)
        )
        .duration(200)
        .EUt(GTValues.V[GTValues.MV])
        .circuit(4)


})