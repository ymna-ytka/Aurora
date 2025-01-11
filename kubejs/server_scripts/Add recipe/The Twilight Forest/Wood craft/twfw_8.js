ServerEvents.recipes( event=> {

    event.shapeless('2x twilightforest:sorting_planks',

        [
          'twilightforest:sorting_log'  
        ]
    )

    event.shapeless('4x twilightforest:sorting_planks',

        [
          'twilightforest:sorting_log',  
          "#forge:tools/saws"  
        ]
    )

    event.recipes.gtceu.cutter('sorting_lubricant')

        .itemInputs(
            'twilightforest:sorting_log',  
        )

        .inputFluids(
            Fluid.of("gtceu:lubricant", 1)
        )

        .itemOutputs(
            "6x twilightforest:sorting_planks",
            "2x gtceu:wood_dust"
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.gtceu.cutter('sorting_dist_water')

        .itemInputs(
            "twilightforest:sorting_log"
        )

        .inputFluids(
            Fluid.of("gtceu:distilled_water", 3)
        )

        .itemOutputs(
            "6x twilightforest:sorting_planks",
            "2x gtceu:wood_dust"
        )
        .duration(350)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.gtceu.cutter('sorting_plank_water')

        .itemInputs(
            "twilightforest:sorting_log"
        )

        .inputFluids(
            Fluid.of("minecraft:water", 4)
        )

        .itemOutputs(
            "6x twilightforest:sorting_planks",
            "2x gtceu:wood_dust"
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])
    
    event.recipes.farmersdelight.cutting("twilightforest:sorting_door", "#minecraft:axes", ["twilightforest:sorting_planks"] )    

    event.recipes.farmersdelight.cutting("twilightforest:sorting_trapdoor", "#minecraft:axes", ["twilightforest:sorting_planks"] )

    event.recipes.farmersdelight.cutting("twilightforest:sorting_sign", "#minecraft:axes", ["twilightforest:sorting_planks"] )

    event.recipes.farmersdelight.cutting("twilightforest:sorting_hanging_sign", "#minecraft:axes", ["twilightforest:sorting_planks"] )

    event.shaped("twilightforest:sorting_sign",

        [
            "SSS",
            "CPC",
            "ATR"
        ],

        {
            S:"twilightforest:sorting_slab",
            C:"gtceu:iron_screw",
            P:"twilightforest:sorting_planks",
            T:"#balm:wooden_rods",
            A:"#forge:tools/saws",
            R:"#forge:tools/screwdrivers"
        }

    )

    event.shaped("2x twilightforest:sorting_sign",

        [
            "SSS",
            "CPC",
            "ATR"
        ],

        {
            S:"twilightforest:sorting_slab",
            C:"gtceu:steel_screw",
            P:"twilightforest:sorting_planks",
            T:"#balm:wooden_rods",
            A:"#forge:tools/saws",
            R:"#forge:tools/screwdrivers"
        }

    )

    event.recipes.gtceu.assembler("sorting_sign_assemb")

        .itemInputs(
            "twilightforest:sorting_slab",
            "#balm:wooden_rods",
        )

        .inputFluids(
            Fluid.of("gtceu:iron", 16)
        )

        .itemOutputs(
            "3x twilightforest:sorting_sign"
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(4)

    event.recipes.gtceu.assembler("sorting_sign_steel_assemb")

        .itemInputs(
            "twilightforest:sorting_slab",
            "#balm:wooden_rods",
        )

        .inputFluids(
            Fluid.of("gtceu:steel", 16)
        )

        .itemOutputs(
            "5x twilightforest:sorting_sign"
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(4)

    event.shaped("twilightforest:sorting_hanging_sign",

        [
            "SSS",
            "C C",
            "RIR"
        ],

        {
            S:"twilightforest:sorting_slab",
            C:"minecraft:chain",
            R:"gtceu:iron_ring",
            I:"balm:wooden_rods"
        }

    )    

    event.shaped("2x twilightforest:sorting_hanging_sign",

        [
            "SSS",
            "C C",
            "RIR"
        ],

        {
            S:"twilightforest:sorting_slab",
            C:"minecraft:chain",
            R:"gtceu:steel_ring",
            I:"balm:wooden_rods"
        }

    )    

    event.recipes.gtceu.assembler("sorting_hanging_sign_assemb")

        .itemInputs(
            "3x twilightforest:sorting_slab",
            "twilightforest:sorting_sign",
            "minecraft:chain"
        )

        .itemOutputs(
            "twilightforest:sorting_hanging_sign"
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(5)

    event.shaped("twilightforest:sorting_boat",

        [
            "PSP",
            "PKP",
            "LLL"
        ],

        {
            P:"twilightforest:sorting_planks",
            S:"#minecraft:shovels",
            K:"#forge:tools/knives",
            L:"twilightforest:sorting_slab"
        }

    )    

    event.recipes.gtceu.assembler("sorting_boat_assemb")

        .itemInputs(
            "5x twilightforest:sorting_planks",
        )

        .itemOutputs(
            "twilightforest:sorting_boat"
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(15)

    event.shaped("twilightforest:sorting_chest_boat",

        [
            " B ",
            "OCO",
            " W "
        ],

        {
            B:"twilightforest:sorting_boat",
            O:"gtceu:wood_bolt",
            C:"minecraft:chest",
            W:"#forge:tools/wrenches"
        }

    )
    event.recipes.gtceu.assembler("sorting_chest_boat_assemb")

        .itemInputs(
            "5x twilightforest:sorting_planks",
            "minecraft:chest"
        )

        .itemOutputs(
            "twilightforest:sorting_chest_boat"
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(16)
    

    event.shaped("twilightforest:sorting_door",

        [
            "PTS",
            "PRI",
            "PPA"
        ],

        {
            P:"twilightforest:sorting_planks",
            T:"twilightforest:sorting_trapdoor",
            R:"gtceu:iron_ring",
            I:"gtceu:iron_screw",
            S:"#forge:tools/screwdrivers",
            A:"#forge:tools/saws"
        }
    )

    event.recipes.gtceu.assembler('sorting_door_assemb')

        .itemInputs(
            "4x twilightforest:sorting_planks",
            "twilightforest:sorting_trapdoor",
        )

        .inputFluids(
            Fluid.of("gtceu:iron", 16)
        )

        .itemOutputs(
            "twilightforest:sorting_door",
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])

    event.shaped("twilightforest:sorting_trapdoor",

        [
            "IPT",
            "PSP",
            "TPI"
        ],

        {
            P:"twilightforest:sorting_planks",
            T:"#balm:wooden_rods",
            I:"gtceu:iron_bolt",
            S:"#forge:tools/screwdrivers"
        }
    )
   
    event.shaped("2x twilightforest:sorting_trapdoor",

        [
            "IPT",
            "PSP",
            "TPI"
        ],

        {
            P:"twilightforest:sorting_planks",
            T:"#balm:wooden_rods",
            I:"gtceu:steel_bolt",
            S:"#forge:tools/screwdrivers"
        }
    )    

    event.recipes.gtceu.assembler('sorting_trapdoor_assemb')

        .itemInputs(
            "2x twilightforest:sorting_planks",
        )

        .inputFluids(
            Fluid.of("gtceu:iron", 16)
        )

        .itemOutputs(
            "twilightforest:sorting_trapdoor",
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(3)
    
    event.recipes.gtceu.assembler('sorting_trapdoor_steel_assemb')

        .itemInputs(
            "2x twilightforest:sorting_planks",
        )

        .inputFluids(
            Fluid.of("gtceu:steel", 16)
        )

        .itemOutputs(
            "2x twilightforest:sorting_trapdoor",
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(3)

    event.shaped("twilightforest:sorting_fence",

        [
            "PTP",
            "PTP",
            "PTP"
        ],

        {
            P:"twilightforest:sorting_planks",
            T:"#balm:wooden_rods"
        }
    )    

    event.recipes.gtceu.assembler('sorting_fence_assemb')

        .itemInputs(
            "twilightforest:sorting_planks",
        )

        .itemOutputs(
            "twilightforest:sorting_fence",
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(13)

    event.recipes.gtceu.assembler('sorting_stairs_assemb')

        .itemInputs(
            "3x twilightforest:sorting_planks",
        )

        .itemOutputs(
            "4x twilightforest:sorting_stairs",
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(7)

    event.shaped("twilightforest:sorting_fence_gate",

        [
            "F F",
            "TPT",
            "TPT"
        ],

        {
            P:"twilightforest:sorting_planks",
            T:"#balm:wooden_rods",
            F:"minecraft:flint"
        }
    )    

    event.shaped("2x twilightforest:sorting_fence_gate",

        [
            "SDS",
            "TPT",
            "TPT"
        ],

        {
            P:"twilightforest:sorting_planks",
            T:"#balm:wooden_rods",
            S:"gtceu:iron_screw",
            D:"#forge:tools/screwdrivers"
        }
    )    

    event.recipes.gtceu.assembler('sorting_fence_gate_assemb')

        .itemInputs(
            "2x twilightforest:sorting_planks",
            "2x #balm:wooden_rods"
        )

        .itemOutputs(
            "twilightforest:sorting_fence_gate",
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(2)

    event.shapeless('2x twilightforest:sorting_slab',

        [
            "twilightforest:sorting_planks",
            "#forge:tools/saws"
        ]
    )

    event.recipes.gtceu.cutter('sorting_slab_lubricant')

        .itemInputs(
            "twilightforest:sorting_planks"
        )

        .inputFluids(
            Fluid.of("gtceu:lubricant", 1)
        )

        .itemOutputs(   
            "2x twilightforest:sorting_slab",
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.gtceu.cutter('sorting_slab_dist_water')

        .itemInputs(
            "twilightforest:sorting_planks"
        )

        .inputFluids(
            Fluid.of("gtceu:distilled_water", 3)
        )

        .itemOutputs(
            "2x twilightforest:sorting_slab",
        )
        .duration(350)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.gtceu.cutter('sorting_slab_water')

        .itemInputs(
            "twilightforest:sorting_planks"
        )

        .inputFluids(
            Fluid.of("minecraft:water", 4)
        )

        .itemOutputs(
            "2x twilightforest:sorting_slab",
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])

    event.shaped("twilightforest:sorting_pressure_plate",

        [
            "BSB",
            "LPL",
            "BRB"
        ],

        {
            B:"gtceu:wood_bolt",
            S:"#forge:tools/mallets",
            L:"twilightforest:sorting_slab",
            P:"gtceu:iron_spring",
            R:"#forge:tools/screwdrivers"
        }

    )    

    event.recipes.gtceu.assembler('sorting_pressure_plate')

        .itemInputs(
            "2x twilightforest:sorting_planks",
            "gtceu:iron_spring"
        )
        
        .itemOutputs(
            "twilightforest:sorting_pressure_plate",
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(7)

    event.recipes.gtceu.cutter('sorting_button_lubricant')

        .itemInputs(
            "twilightforest:sorting_pressure_plate"
        )

        .inputFluids(
            Fluid.of("gtceu:lubricant", 1)
        )

        .itemOutputs(   
            "12x twilightforest:sorting_button",
        )
        .duration(250)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.gtceu.cutter('sorting_button_dist_water')

        .itemInputs(
            "twilightforest:sorting_pressure_plate"
        )

        .inputFluids(
            Fluid.of("gtceu:distilled_water", 3)
        )

        .itemOutputs(
            "12x twilightforest:sorting_button",
        )
        .duration(375)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.gtceu.cutter('sorting_button_water')

        .itemInputs(
            "twilightforest:sorting_pressure_plate"
        )

        .inputFluids(
            Fluid.of("minecraft:water", 4)
        )

        .itemOutputs(
            "12x twilightforest:sorting_button",
        )
        .duration(450)
        .EUt(GTValues.VA[GTValues.ULV])
      
    event.shapeless("6x twilightforest:sorting_button",

        [
            "#forge:tools/saws",
            "twilightforest:sorting_pressure_plate"
        ]

    )    
 
    event.shapeless("twilightforest:sorting_chest",

        [
            "minecraft:chest",
            "twilightforest:sorting_planks"
        ]

    )    
  
    event.shaped("4x twilightforest:sorting_stairs",

        [
            "P  ",
            "PP ",
            "PPP"
        ],

        {
            P:"twilightforest:sorting_planks"
        }

    )
    
})