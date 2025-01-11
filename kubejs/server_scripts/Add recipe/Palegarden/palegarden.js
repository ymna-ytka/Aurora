ServerEvents.recipes( event=> {

    event.shapeless('2x palegarden:pale_plank',

        [
          'palegarden:pale_log'  
        ]
    )

    event.shapeless('4x palegarden:pale_plank',

        [
          'palegarden:pale_log',
          "#forge:tools/saws"  
        ]
    )

    event.recipes.gtceu.cutter('pale_plank_lubricant')

        .itemInputs(
            "palegarden:pale_log"
        )

        .inputFluids(
            Fluid.of("gtceu:lubricant", 1)
        )

        .itemOutputs(
            "6x palegarden:pale_plank",
            "2x gtceu:wood_dust"
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.gtceu.cutter('pale_plank_dist_water')

        .itemInputs(
            "palegarden:pale_log"
        )

        .inputFluids(
            Fluid.of("gtceu:distilled_water", 3)
        )

        .itemOutputs(
            "6x palegarden:pale_plank",
            "2x gtceu:wood_dust"
        )
        .duration(350)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.gtceu.cutter('pale_plank_water')

        .itemInputs(
            "palegarden:pale_log"
        )

        .inputFluids(
            Fluid.of("minecraft:water", 4)
        )

        .itemOutputs(
            "6x palegarden:pale_plank",
            "2x gtceu:wood_dust"
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])
    
    event.recipes.farmersdelight.cutting("palegarden:pale_oak_door", "#minecraft:axes", ["palegarden:pale_plank"] )    

    event.recipes.farmersdelight.cutting("palegarden:pale_oak_trapdoor", "#minecraft:axes", ["palegarden:pale_plank"] )    

})