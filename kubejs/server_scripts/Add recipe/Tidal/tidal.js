ServerEvents.recipes( event=> {

    event.shapeless('2x tidal:palm_planks',

        [
          'tidal:palm_log'  
        ]
    )

    event.shapeless('4x tidal:palm_planks',

        [
          'tidal:palm_log',  
          "#forge:tools/saws"  
        ]
    )

    event.recipes.gtceu.cutter('palm_lubricant')

        .itemInputs(
            'tidal:palm_log',  
        )

        .inputFluids(
            Fluid.of("gtceu:lubricant", 1)
        )

        .itemOutputs(
            "6x tidal:palm_planks",
            "2x gtceu:wood_dust"
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.gtceu.cutter('palm_dist_water')

        .itemInputs(
            "tidal:palm_log"
        )

        .inputFluids(
            Fluid.of("gtceu:distilled_water", 3)
        )

        .itemOutputs(
            "6x tidal:palm_planks",
            "2x gtceu:wood_dust"
        )
        .duration(350)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.gtceu.cutter('palm_plank_water')

        .itemInputs(
            "tidal:palm_log"
        )

        .inputFluids(
            Fluid.of("minecraft:water", 4)
        )

        .itemOutputs(
            "6x tidal:palm_planks",
            "2x gtceu:wood_dust"
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])
    
    event.recipes.farmersdelight.cutting("tidal:palm_wood_door", "#minecraft:axes", ["tidal:palm_planks"] )    

    event.recipes.farmersdelight.cutting("tidal:palm_wood_trapdoor", "#minecraft:axes", ["tidal:palm_planks"] )

    event.shapeless('2x tidal:palm_slab',

        [
            "tidal:palm_planks",
            "#forge:tools/saws"
        ]
    )

    event.recipes.gtceu.cutter('palm_slab_lubricant')

        .itemInputs(
            "tidal:palm_planks"
        )

        .inputFluids(
            Fluid.of("gtceu:lubricant", 1)
        )

        .itemOutputs(   
            "2x tidal:palm_slab",
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.gtceu.cutter('palm_slab_dist_water')

        .itemInputs(
            "tidal:palm_planks"
        )

        .inputFluids(
            Fluid.of("gtceu:distilled_water", 3)
        )

        .itemOutputs(
            "2x tidal:palm_slab",
        )
        .duration(350)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.gtceu.cutter('palm_slab_water')

        .itemInputs(
            "tidal:palm_planks"
        )

        .inputFluids(
            Fluid.of("minecraft:water", 4)
        )

        .itemOutputs(
            "2x tidal:palm_slab",
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])

    event.shaped("tidal:plam_pressureplate",

        [
            "BSB",
            "LPL",
            "BRB"
        ],

        {
            B:"gtceu:wood_bolt",
            S:"#forge:tools/mallets",
            L:"tidal:palm_slab",
            P:"gtceu:iron_spring",
            R:"#forge:tools/screwdrivers"
        }

    )    

    event.recipes.gtceu.assembler('palm_pressure_plate')

        .itemInputs(
            "2x tidal:palm_planks",
            "gtceu:iron_spring"
        )
        
        .itemOutputs(
            "tidal:plam_pressureplate",
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(7)

    event.recipes.gtceu.cutter('palm_button_lubricant')

        .itemInputs(
            "tidal:plam_pressureplate"
        )

        .inputFluids(
            Fluid.of("gtceu:lubricant", 1)
        )

        .itemOutputs(   
            "12x tidal:plam_button",
        )
        .duration(250)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.gtceu.cutter('palm_button_dist_water')

        .itemInputs(
            "tidal:plam_pressureplate"
        )

        .inputFluids(
            Fluid.of("gtceu:distilled_water", 3)
        )

        .itemOutputs(
            "12x tidal:plam_button",
        )
        .duration(375)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.gtceu.cutter('palm_button_water')

        .itemInputs(
            "tidal:plam_pressureplate"
        )

        .inputFluids(
            Fluid.of("minecraft:water", 4)
        )

        .itemOutputs(
            "12x tidal:plam_button",
        )
        .duration(450)
        .EUt(GTValues.VA[GTValues.ULV])
      
    event.shapeless("6x tidal:plam_button",

        [
            "#forge:tools/saws",
            "tidal:plam_pressureplate"
        ]
    )

    event.shaped("4x tidal:plam_stairs",

        [
            "P  ",
            "PP ",
            "PPP"
        ],

        {
            P:"tidal:palm_planks"
        }

    )

    event.recipes.gtceu.assembler('plam_stairs_assemb')

        .itemInputs(
            "3x tidal:palm_planks",
        )

        .itemOutputs(
            "4x tidal:plam_stairs",
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(7)

        event.shaped("tidal:plam_fence",

            [
                "PTP",
                "PTP",
                "PTP"
            ],
    
            {
                P:"tidal:palm_planks",
                T:"#balm:wooden_rods"
            }
        )    
    
        event.recipes.gtceu.assembler('palm_fence_assemb')
    
            .itemInputs(
                "tidal:palm_planks",
            )
    
            .itemOutputs(
                "tidal:plam_fence",
            )
            .duration(100)
            .EUt(GTValues.VA[GTValues.ULV])
            .circuit(13)
    
    event.shaped("tidal:plam_fence_gate",

        [
            "F F",
            "TPT",
            "TPT"
        ],

        {
            P:"tidal:palm_planks",
            T:"#balm:wooden_rods",
            F:"minecraft:flint"
        }
    )    

    event.shaped("2x tidal:plam_fence_gate",

        [
            "SDS",
            "TPT",
            "TPT"
        ],

        {
            P:"tidal:palm_planks",
            T:"#balm:wooden_rods",
            S:"gtceu:iron_screw",
            D:"#forge:tools/screwdrivers"
        }
    )    

    event.recipes.gtceu.assembler('plam_fence_gate_assemb')

        .itemInputs(
            "2x tidal:palm_planks",
            "2x #balm:wooden_rods"
        )

        .itemOutputs(
            "tidal:plam_fence_gate",
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(2)

    event.shaped("tidal:palm_wood_door",

        [
            "PTS",
            "PRI",
            "PPA"
        ],

        {
            P:"tidal:palm_planks",
            T:"tidal:palm_wood_trapdoor",
            R:"gtceu:iron_ring",
            I:"gtceu:iron_screw",
            S:"#forge:tools/screwdrivers",
            A:"#forge:tools/saws"
        }
    )

    event.recipes.gtceu.assembler('palm_wood_door_assemb')

        .itemInputs(
            "4x tidal:palm_planks",
            "tidal:palm_wood_trapdoor",
        )

        .inputFluids(
            Fluid.of("gtceu:iron", 16)
        )

        .itemOutputs(
            "tidal:palm_wood_door",
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])

    event.shaped("tidal:palm_wood_trapdoor",

        [
            "IPT",
            "PSP",
            "TPI"
        ],

        {
            P:"tidal:palm_planks",
            T:"#balm:wooden_rods",
            I:"gtceu:iron_bolt",
            S:"#forge:tools/screwdrivers"
        }
    )
   
    event.shaped("2x tidal:palm_wood_trapdoor",

        [
            "IPT",
            "PSP",
            "TPI"
        ],

        {
            P:"tidal:palm_planks",
            T:"#balm:wooden_rods",
            I:"gtceu:steel_bolt",
            S:"#forge:tools/screwdrivers"
        }
    )    

    event.recipes.gtceu.assembler('palm_wood_trapdoor_assemb')

        .itemInputs(
            "2x tidal:palm_planks",
        )

        .inputFluids(
            Fluid.of("gtceu:iron", 16)
        )

        .itemOutputs(
            "tidal:palm_wood_trapdoor",
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(3)
    
    event.recipes.gtceu.assembler('palm_wood_trapdoor_steel_assemb')

        .itemInputs(
            "2x tidal:palm_planks",
        )

        .inputFluids(
            Fluid.of("gtceu:steel", 16)
        )

        .itemOutputs(
            "2x tidal:palm_wood_trapdoor",
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(3)

    event.recipes.gtceu.fire_saw("palm_plank_fire_bath")

        .itemInputs(
            "tidal:palm_log"
        )

        .itemOutputs(
            "4x tidal:palm_planks"
        )
        .duration(1200)

})