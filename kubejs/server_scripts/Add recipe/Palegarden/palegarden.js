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
    
    event.shaped("palegarden:pale_oak_door",

        [
            "PTS",
            "PRI",
            "PPA"
        ],

        {
            P:"palegarden:pale_plank",
            T:"palegarden:pale_oak_trapdoor",
            R:"gtceu:iron_ring",
            I:"gtceu:iron_screw",
            S:"#forge:tools/screwdrivers",
            A:"#forge:tools/saws"
        }
    )

    event.recipes.gtceu.assembler('pale_door_assemb')

        .itemInputs(
            "4x palegarden:pale_plank",
            "palegarden:pale_oak_trapdoor",
        )

        .inputFluids(
            Fluid.of("gtceu:iron", 16)
        )

        .itemOutputs(
            "palegarden:pale_oak_door",
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])

    event.shaped("palegarden:pale_oak_trapdoor",

        [
            "IPT",
            "PSP",
            "TPI"
        ],

        {
            P:"palegarden:pale_plank",
            T:"#balm:wooden_rods",
            I:"gtceu:iron_bolt",
            S:"#forge:tools/screwdrivers"
        }
    )
   
    event.shaped("2x palegarden:pale_oak_trapdoor",

        [
            "IPT",
            "PSP",
            "TPI"
        ],

        {
            P:"palegarden:pale_plank",
            T:"#balm:wooden_rods",
            I:"gtceu:steel_bolt",
            S:"#forge:tools/screwdrivers"
        }
    )    

    event.recipes.gtceu.assembler('pale_trapdoor_assemb')

        .itemInputs(
            "2x palegarden:pale_plank",
        )

        .inputFluids(
            Fluid.of("gtceu:iron", 16)
        )

        .itemOutputs(
            "palegarden:pale_oak_trapdoor",
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(3)
    
    event.recipes.gtceu.assembler('pale_trapdoor_steel_assemb')

        .itemInputs(
            "2x palegarden:pale_plank",
        )

        .inputFluids(
            Fluid.of("gtceu:steel", 16)
        )

        .itemOutputs(
            "2x palegarden:pale_oak_trapdoor",
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(3)

    event.shaped("palegarden:pale_oak_fence",

        [
            "PTP",
            "PTP",
            "PTP"
        ],

        {
            P:"palegarden:pale_plank",
            T:"#balm:wooden_rods"
        }
    )    

    event.recipes.gtceu.assembler('pale_fence_assemb')

        .itemInputs(
            "palegarden:pale_plank",
        )

        .itemOutputs(
            "palegarden:pale_oak_fence",
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(13)

    event.recipes.gtceu.assembler('pale_stairs_assemb')

        .itemInputs(
            "3x palegarden:pale_plank",
        )

        .itemOutputs(
            "4x palegarden:pale_oak_stairs",
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(7)

    event.shaped("palegarden:pale_oak_fence_gate",

        [
            "F F",
            "TPT",
            "TPT"
        ],

        {
            P:"palegarden:pale_plank",
            T:"#balm:wooden_rods",
            F:"minecraft:flint"
        }
    )    

    event.shaped("palegarden:pale_oak_fence_gate",

        [
            "SDS",
            "TPT",
            "TPT"
        ],

        {
            P:"palegarden:pale_plank",
            T:"#balm:wooden_rods",
            S:"gtceu:iron_screw",
            D:"#forge:tools/screwdrivers"
        }
    )    

    event.recipes.gtceu.assembler('pale_fence_gate_assemb')

        .itemInputs(
            "2x palegarden:pale_plank",
            "2x #balm:wooden_rods"
        )

        .itemOutputs(
            "palegarden:pale_oak_fence_gate",
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(2)

    event.shapeless('2x palegarden:pale_oak_slab',

        [
            "palegarden:pale_plank",
            "#forge:tools/saws"
        ]
    )

    event.recipes.gtceu.cutter('pale_slab_lubricant')

        .itemInputs(
            "palegarden:pale_plank"
        )

        .inputFluids(
            Fluid.of("gtceu:lubricant", 1)
        )

        .itemOutputs(   
            "2x palegarden:pale_oak_slab",
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.gtceu.cutter('pale_slab_dist_water')

        .itemInputs(
            "palegarden:pale_plank"
        )

        .inputFluids(
            Fluid.of("gtceu:distilled_water", 3)
        )

        .itemOutputs(
            "2x palegarden:pale_oak_slab",
        )
        .duration(350)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.gtceu.cutter('pale_slab_water')

        .itemInputs(
            "palegarden:pale_plank"
        )

        .inputFluids(
            Fluid.of("minecraft:water", 4)
        )

        .itemOutputs(
            "2x palegarden:pale_oak_slab",
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])
    
    event.shapeless("palegarden:resin_bricks_slab",
        [
            "palegarden:resin_bricks",
            "#forge:tools/saws"    
        ]
    ) 
                                            
                        
    event.recipes.gtceu.cutter('resin_bricks_slab_lubricant')
                                    
        .itemInputs(
            "palegarden:resin_bricks"
        )
                                    
        .inputFluids(
        Fluid.of("gtceu:lubricant", 1)
        )
                                    
        .itemOutputs(   
            "2x palegarden:resin_bricks_slab",
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
                                        
    event.recipes.gtceu.cutter('resin_bricks_slab_dist_water')
                                    
        .itemInputs(
            "palegarden:resin_bricks" 
        )
                                    
        .inputFluids(
            Fluid.of("gtceu:distilled_water", 3)
        )
                                    
        .itemOutputs(
            "2x palegarden:resin_bricks_slab",
        )
        .duration(350)
        .EUt(GTValues.VA[GTValues.ULV]) 
                                        
    event.recipes.gtceu.cutter('resin_bricks_slab_water')
                                    
        .itemInputs(
            "palegarden:resin_bricks"  
        )
                                    
        .inputFluids(
            Fluid.of("minecraft:water", 4)
        )
                                    
        .itemOutputs(
            "2x palegarden:resin_bricks_slab",
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])
        
})