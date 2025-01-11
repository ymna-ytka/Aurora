ServerEvents.recipes( event=> {

    event.shapeless('2x twilightforest:mangrove_planks',

        [
          'twilightforest:mangrove_log'  
        ]
    )

    event.shapeless('4x twilightforest:mangrove_planks',

        [
          'twilightforest:mangrove_log',  
          "#forge:tools/saws"  
        ]
    )

    event.recipes.gtceu.cutter('mangrove_lubricant')

        .itemInputs(
            'twilightforest:mangrove_log',  
        )

        .inputFluids(
            Fluid.of("gtceu:lubricant", 1)
        )

        .itemOutputs(
            "6x twilightforest:mangrove_planks",
            "2x gtceu:wood_dust"
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.gtceu.cutter('mangrove_dist_water')

        .itemInputs(
            "twilightforest:mangrove_log"
        )

        .inputFluids(
            Fluid.of("gtceu:distilled_water", 3)
        )

        .itemOutputs(
            "6x twilightforest:mangrove_planks",
            "2x gtceu:wood_dust"
        )
        .duration(350)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.gtceu.cutter('mangrove_plank_water')

        .itemInputs(
            "twilightforest:mangrove_log"
        )

        .inputFluids(
            Fluid.of("minecraft:water", 4)
        )

        .itemOutputs(
            "6x twilightforest:mangrove_planks",
            "2x gtceu:wood_dust"
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])
    
    event.recipes.farmersdelight.cutting("twilightforest:mangrove_door", "#minecraft:axes", ["twilightforest:mangrove_planks"] )    

    event.recipes.farmersdelight.cutting("twilightforest:mangrove_trapdoor", "#minecraft:axes", ["twilightforest:mangrove_planks"] )

    event.recipes.farmersdelight.cutting("twilightforest:mangrove_sign", "#minecraft:axes", ["twilightforest:mangrove_planks"] )

    event.recipes.farmersdelight.cutting("twilightforest:mangrove_hanging_sign", "#minecraft:axes", ["twilightforest:mangrove_planks"] )

    event.shaped("twilightforest:mangrove_sign",

        [
            "SSS",
            "CPC",
            "ATR"
        ],

        {
            S:"twilightforest:mangrove_slab",
            C:"gtceu:iron_screw",
            P:"twilightforest:mangrove_planks",
            T:"#balm:wooden_rods",
            A:"#forge:tools/saws",
            R:"#forge:tools/screwdrivers"
        }

    )

    event.shaped("2x twilightforest:mangrove_sign",

        [
            "SSS",
            "CPC",
            "ATR"
        ],

        {
            S:"twilightforest:mangrove_slab",
            C:"gtceu:steel_screw",
            P:"twilightforest:mangrove_planks",
            T:"#balm:wooden_rods",
            A:"#forge:tools/saws",
            R:"#forge:tools/screwdrivers"
        }

    )

    event.recipes.gtceu.assembler("mangrove_sign_assemb")

        .itemInputs(
            "twilightforest:mangrove_slab",
            "#balm:wooden_rods",
        )

        .inputFluids(
            Fluid.of("gtceu:iron", 16)
        )

        .itemOutputs(
            "3x twilightforest:mangrove_sign"
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(4)

    event.recipes.gtceu.assembler("mangrove_sign_steel_assemb")

        .itemInputs(
            "twilightforest:mangrove_slab",
            "#balm:wooden_rods",
        )

        .inputFluids(
            Fluid.of("gtceu:steel", 16)
        )

        .itemOutputs(
            "5x twilightforest:mangrove_sign"
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(4)

    event.shaped("twilightforest:mangrove_hanging_sign",

        [
            "SSS",
            "C C",
            "RIR"
        ],

        {
            S:"twilightforest:mangrove_slab",
            C:"minecraft:chain",
            R:"gtceu:iron_ring",
            I:"balm:wooden_rods"
        }

    )    

    event.shaped("2x twilightforest:mangrove_hanging_sign",

        [
            "SSS",
            "C C",
            "RIR"
        ],

        {
            S:"twilightforest:mangrove_slab",
            C:"minecraft:chain",
            R:"gtceu:steel_ring",
            I:"balm:wooden_rods"
        }

    )    

    event.recipes.gtceu.assembler("mangrove_hanging_sign_assemb")

        .itemInputs(
            "3x twilightforest:mangrove_slab",
            "twilightforest:mangrove_sign",
            "minecraft:chain"
        )

        .itemOutputs(
            "twilightforest:mangrove_hanging_sign"
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(5)

    event.shaped("twilightforest:mangrove_boat",

        [
            "PSP",
            "PKP",
            "LLL"
        ],

        {
            P:"twilightforest:mangrove_planks",
            S:"#minecraft:shovels",
            K:"#forge:tools/knives",
            L:"twilightforest:mangrove_slab"
        }

    )    

    event.recipes.gtceu.assembler("mangrove_boat_assemb")

        .itemInputs(
            "5x twilightforest:mangrove_planks",
        )

        .itemOutputs(
            "twilightforest:mangrove_boat"
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(15)

    event.shaped("twilightforest:mangrove_chest_boat",

        [
            " B ",
            "OCO",
            " W "
        ],

        {
            B:"twilightforest:mangrove_boat",
            O:"gtceu:wood_bolt",
            C:"minecraft:chest",
            W:"#forge:tools/wrenches"
        }

    )
    event.recipes.gtceu.assembler("mangrove_chest_boat_assemb")

        .itemInputs(
            "5x twilightforest:mangrove_planks",
            "minecraft:chest"
        )

        .itemOutputs(
            "twilightforest:mangrove_chest_boat"
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(16)
    

    event.shaped("twilightforest:mangrove_door",

        [
            "PTS",
            "PRI",
            "PPA"
        ],

        {
            P:"twilightforest:mangrove_planks",
            T:"twilightforest:mangrove_trapdoor",
            R:"gtceu:iron_ring",
            I:"gtceu:iron_screw",
            S:"#forge:tools/screwdrivers",
            A:"#forge:tools/saws"
        }
    )

    event.recipes.gtceu.assembler('mangrove_door_assemb')

        .itemInputs(
            "4x twilightforest:mangrove_planks",
            "twilightforest:mangrove_trapdoor",
        )

        .inputFluids(
            Fluid.of("gtceu:iron", 16)
        )

        .itemOutputs(
            "twilightforest:mangrove_door",
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])

    event.shaped("twilightforest:mangrove_trapdoor",

        [
            "IPT",
            "PSP",
            "TPI"
        ],

        {
            P:"twilightforest:mangrove_planks",
            T:"#balm:wooden_rods",
            I:"gtceu:iron_bolt",
            S:"#forge:tools/screwdrivers"
        }
    )
   
    event.shaped("2x twilightforest:mangrove_trapdoor",

        [
            "IPT",
            "PSP",
            "TPI"
        ],

        {
            P:"twilightforest:mangrove_planks",
            T:"#balm:wooden_rods",
            I:"gtceu:steel_bolt",
            S:"#forge:tools/screwdrivers"
        }
    )    

    event.recipes.gtceu.assembler('mangrove_trapdoor_assemb')

        .itemInputs(
            "2x twilightforest:mangrove_planks",
        )

        .inputFluids(
            Fluid.of("gtceu:iron", 16)
        )

        .itemOutputs(
            "twilightforest:mangrove_trapdoor",
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(3)
    
    event.recipes.gtceu.assembler('mangrove_trapdoor_steel_assemb')

        .itemInputs(
            "2x twilightforest:mangrove_planks",
        )

        .inputFluids(
            Fluid.of("gtceu:steel", 16)
        )

        .itemOutputs(
            "2x twilightforest:mangrove_trapdoor",
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(3)

    event.shaped("twilightforest:mangrove_fence",

        [
            "PTP",
            "PTP",
            "PTP"
        ],

        {
            P:"twilightforest:mangrove_planks",
            T:"#balm:wooden_rods"
        }
    )    

    event.recipes.gtceu.assembler('mangrove_fence_assemb')

        .itemInputs(
            "twilightforest:mangrove_planks",
        )

        .itemOutputs(
            "twilightforest:mangrove_fence",
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(13)

    event.recipes.gtceu.assembler('mangrove_stairs_assemb')

        .itemInputs(
            "3x twilightforest:mangrove_planks",
        )

        .itemOutputs(
            "4x twilightforest:mangrove_stairs",
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(7)

    event.shaped("twilightforest:mangrove_fence_gate",

        [
            "F F",
            "TPT",
            "TPT"
        ],

        {
            P:"twilightforest:mangrove_planks",
            T:"#balm:wooden_rods",
            F:"minecraft:flint"
        }
    )    

    event.shaped("twilightforest:mangrove_fence_gate",

        [
            "SDS",
            "TPT",
            "TPT"
        ],

        {
            P:"twilightforest:mangrove_planks",
            T:"#balm:wooden_rods",
            S:"gtceu:iron_screw",
            D:"#forge:tools/screwdrivers"
        }
    )    

    event.recipes.gtceu.assembler('mangrove_fence_gate_assemb')

        .itemInputs(
            "2x twilightforest:mangrove_planks",
            "2x #balm:wooden_rods"
        )

        .itemOutputs(
            "twilightforest:mangrove_fence_gate",
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(2)

    event.shapeless('2x twilightforest:mangrove_slab',

        [
            "twilightforest:mangrove_planks",
            "#forge:tools/saws"
        ]
    )

    event.recipes.gtceu.cutter('mangrove_slab_lubricant')

        .itemInputs(
            "twilightforest:mangrove_planks"
        )

        .inputFluids(
            Fluid.of("gtceu:lubricant", 1)
        )

        .itemOutputs(   
            "2x twilightforest:mangrove_slab",
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.gtceu.cutter('mangrove_slab_dist_water')

        .itemInputs(
            "twilightforest:mangrove_planks"
        )

        .inputFluids(
            Fluid.of("gtceu:distilled_water", 3)
        )

        .itemOutputs(
            "2x twilightforest:mangrove_slab",
        )
        .duration(350)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.gtceu.cutter('mangrove_slab_water')

        .itemInputs(
            "twilightforest:mangrove_planks"
        )

        .inputFluids(
            Fluid.of("minecraft:water", 4)
        )

        .itemOutputs(
            "2x twilightforest:mangrove_slab",
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])

    event.shaped("twilightforest:mangrove_pressure_plate",

        [
            "BSB",
            "LPL",
            "BRB"
        ],

        {
            B:"gtceu:wood_bolt",
            S:"#forge:tools/mallets",
            L:"twilightforest:mangrove_slab",
            P:"gtceu:iron_spring",
            R:"#forge:tools/screwdrivers"
        }

    )    

    event.recipes.gtceu.cutter('mangrove_button_lubricant')

        .itemInputs(
            "twilightforest:mangrove_pressure_plate"
        )

        .inputFluids(
            Fluid.of("gtceu:lubricant", 1)
        )

        .itemOutputs(   
            "12x twilightforest:mangrove_button",
        )
        .duration(250)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.gtceu.cutter('mangrove_button_dist_water')

        .itemInputs(
            "twilightforest:mangrove_pressure_plate"
        )

        .inputFluids(
            Fluid.of("gtceu:distilled_water", 3)
        )

        .itemOutputs(
            "12x twilightforest:mangrove_button",
        )
        .duration(375)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.gtceu.cutter('mangrove_button_water')

        .itemInputs(
            "twilightforest:mangrove_pressure_plate"
        )

        .inputFluids(
            Fluid.of("minecraft:water", 4)
        )

        .itemOutputs(
            "12x twilightforest:mangrove_button",
        )
        .duration(450)
        .EUt(GTValues.VA[GTValues.ULV])
      
    event.shapeless("6x twilightforest:mangrove_button",

        [
            "#forge:tools/saws",
            "twilightforest:mangrove_pressure_plate"
        ]

    )    
 
    event.shapeless("twilightforest:mangrove_chest",

        [
            "minecraft:chest",
            "twilightforest:mangrove_planks"
        ]

    )
    
    event.shaped("4x twilightforest:mangrove_stairs",

        [
            "P  ",
            "PP ",
            "PPP"
        ],

        {
            P:"twilightforest:mangrove_planks"
        }

    )
    
    event.recipes.gtceu.assembler('mangrove_pressure_plate')

        .itemInputs(
            "2x twilightforest:mangrove_planks",
            "gtceu:iron_spring",
        )
        
        .itemOutputs(
            "twilightforest:mangrove_pressure_plate",
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(7)

})