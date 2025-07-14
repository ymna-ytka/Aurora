ServerEvents.recipes(event=>{

    event.recipes.gtceu.mixer('silicon_carbide_dust_mixer')

        .itemInputs(
            "5x gtceu:silicon_dust",
            "3x gtceu:carbon_dust"
        )

        .itemOutputs(
            "8x gtac:carbide_silicon_dust"
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
            "gtac:carbide_silicon_ingot"
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
            "gtac:carbide_silicon_ingot"
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
            "10x gtac:ecoferum_dust"
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(10)

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
            "2x gtac:cold_quartz_dust"
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

    event.recipes.gtceu.vacuum_freezer('liquid_twilight_gas')
    
        .inputFluids(
            Fluid.of('gtceu:twilight_gas', 4000)
        )

        .outputFluids(
            Fluid.of("gtceu:liquid_twilight_gas", 4000)
        )

        .duration(80)
        .EUt(GTValues.V[GTValues.MV])
 
    event.recipes.gtceu.cooler('gtceu:cooler/cooled_water')    

        .inputFluids(
            Fluid.of("minecraft:water", 72)
        )

        .outputFluids(
            Fluid.of('gtceu:cold_water', 72)
        )

        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.vacuum_freezer('gtceu:vacuum_freezer/cooled_water')    

        .inputFluids(
            Fluid.of("minecraft:water", 7200)
        )

        .outputFluids(
            Fluid.of('gtceu:cold_water', 7200)
        )

        .duration(600)
        .EUt(GTValues.V[GTValues.MV])


    event.recipes.gtceu.air_cooler('gtceu:air_cooler/liquid_twilight_gas')    

        .inputFluids(
            Fluid.of("gtceu:twilight_gas", 50)
        )

        .outputFluids(
            Fluid.of('gtceu:liquid_twilight_gas', 45)
        )

        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.air_cooler('gtceu:air_cooler/liquid_air')    

        .inputFluids(
            Fluid.of("gtceu:air", 50)
        )

        .outputFluids(
            Fluid.of('gtceu:liquid_air', 45)
        )

        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.air_cooler('gtceu:air_cooler/liquid_nether_air')    

        .inputFluids(
            Fluid.of("gtceu:nether_air", 50)
        )

        .outputFluids(
            Fluid.of('gtceu:liquid_nether_air', 45)
        )

        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.air_cooler('gtceu:air_cooler/liquid_ender_air')    

        .inputFluids(
            Fluid.of("gtceu:ender_air", 50)
        )

        .outputFluids(
            Fluid.of('gtceu:liquid_ender_air', 45)
        )

        .duration(200)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.distillery('gtceu:distillery/magical_essence')    

        .inputFluids(
            Fluid.of("gtceu:liquid_twilight_gas", 50)
        )

        .outputFluids(
            Fluid.of('gtceu:magical_essence', 25)
        )

        .duration(200)
        .EUt(GTValues.V[GTValues.MV])

    event.recipes.gtceu.chemical_reactor('vitalized_iron_dust_chemical_reactor')
            
        .itemInputs(
            "4x gtceu:magnetic_steel_dust"
        )

        .inputFluids(
            Fluid.of('gtceu:beryllium', 192),
            Fluid.of('gtceu:magical_essence', 72)
        )

        .itemOutputs(
            "4x gtac:vitalized_iron_dust"
        )

        .duration(400)
        .EUt(GTValues.VHA[GTValues.LV])

    event.recipes.gtceu.chemical_reactor('infused_iron_dust_chemical_reactor')
            
        .itemInputs(
            "4x gtac:vitalized_iron_dust",
            "2x gtac:leaf_gold_dust"
        )

        .inputFluids(
            Fluid.of('gtceu:salt_water', 192),
            Fluid.of('gtceu:magical_essence', 72)
        )

        .itemOutputs(
            "4x gtac:infused_iron_dust"
        )

        .duration(260)
        .EUt(GTValues.V[GTValues.MV])

    event.recipes.gtceu.mixer('tainted_gold_dust')
            
        .itemInputs(
            "2x gtceu:nether_aura_dust",
            "2x gtceu:gold_dust",
            "2x gtac:vitalized_iron_dust",
            "2x gtceu:copper_dust",
            "2x gtceu:charcoal_dust",
        )

        .itemOutputs(
            "9x gtac:tainted_gold_dust"
        )

        .duration(210)
        .EUt(GTValues.V[GTValues.MV])

    event.recipes.gtceu.extractor('fiery_magic_water')

        .itemInputs(
            "#twilightforest:fiery_vial"
        )

        .outputFluids(
            Fluid.of('gtceu:fiery_magic_water', 72)
        )

        .duration(100)
        .EUt(GTValues.V[GTValues.ULV])

    event.recipes.gtceu.macerator('leaf_gold_dust')
    
        .itemInputs(
            "naturesaura:gold_leaf"
        )

        .itemOutputs(
            "2x gtac:leaf_gold_dust"
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.gtceu.electrolyzer('fiery_iron_dust')

        .inputFluids(
            Fluid.of("gtceu:fiery_magic_water", 144)
        )

        .itemOutputs(
            "gtceu:fiery_iron_dust"
        )

        .outputFluids(
            Fluid.of("gtceu:steam", 25)
        )

        .duration(800)
        .EUt(GTValues.VA[GTValues.MV])
        .circuit(1)

   
    event.recipes.gtceu.chemical_reactor('ammonium_chloride_dust')

        .inputFluids(
            Fluid.of("gtceu:ammonia", 458),
            Fluid.of("gtceu:hydrochloric_acid", 982)
        )

        .itemOutputs(
            "10x gtceu:ammonium_chloride_dust"
        )
        .duration(4800)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.chemical_reactor('potassium_sulfate_dust')

        .itemInputs(
            "10x gtceu:small_potassium_hydroxide_dust"
        )

        .inputFluids(
            Fluid.of("gtceu:sulfuric_acid", 424)
        )

        .itemOutputs(
            "5x gtceu:potassium_sulfate_dust"
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.extractor('liquid_overworld_aura')
     
        .itemInputs(
            "naturesaura:gold_leaf"
        )

        .outputFluids(
            Fluid.of("gtceu:overworld_aura", 15)
        )
        .duration(40)
        .EUt(GTValues.VA[GTValues.ULV])        

    event.recipes.gtceu.macerator('soul_sand_dust')
     
        .itemInputs(
            "minecraft:soul_sand"
        )


        .itemOutputs(
            "gtac:soul_sand_dust"
        )
        .duration(24)
        .EUt(GTValues.V[GTValues.ULV])        

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

    event.recipes.gtceu.induction_furnace('ecoferum_ingot')
      
        .itemInputs(
            'gtac:ecoferum_dust'
        )


        .itemOutputs(
            'gtac:ecoferum_ingot'
        )
        .duration(160)
        .EUt(GTValues.VA[GTValues.LV])
        
})
