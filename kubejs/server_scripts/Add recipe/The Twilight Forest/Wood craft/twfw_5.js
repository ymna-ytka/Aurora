ServerEvents.recipes( event=> {

    event.shapeless('2x twilightforest:time_planks',

        [
          '#twilightforest:timewood_logs'  
        ]
    )

    event.shapeless('4x twilightforest:time_planks',

        [
          '#twilightforest:timewood_logs',  
          "#forge:tools/saws"  
        ]
    )

    event.recipes.gtceu.cutter('time_lubricant')

        .itemInputs(
            '#twilightforest:timewood_logs'  
        )

        .inputFluids(
            Fluid.of("gtceu:lubricant", 1)
        )

        .itemOutputs(
            "6x twilightforest:time_planks",
            "2x gtceu:wood_dust"
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.gtceu.cutter('time_dist_water')

        .itemInputs(
            '#twilightforest:timewood_logs'  
        )

        .inputFluids(
            Fluid.of("gtceu:distilled_water", 3)
        )

        .itemOutputs(
            "6x twilightforest:time_planks",
            "2x gtceu:wood_dust"
        )
        .duration(350)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.gtceu.cutter('time_plank_water')

        .itemInputs(
            '#twilightforest:timewood_logs'  
        )

        .inputFluids(
            Fluid.of("minecraft:water", 4)
        )

        .itemOutputs(
            "6x twilightforest:time_planks",
            "2x gtceu:wood_dust"
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])
    
    event.recipes.farmersdelight.cutting("twilightforest:time_door", "#minecraft:axes", ["twilightforest:time_planks"] )    

    event.recipes.farmersdelight.cutting("twilightforest:time_trapdoor", "#minecraft:axes", ["twilightforest:time_planks"] )

    event.recipes.farmersdelight.cutting("twilightforest:time_sign", "#minecraft:axes", ["twilightforest:time_planks"] )

    event.recipes.farmersdelight.cutting("twilightforest:time_hanging_sign", "#minecraft:axes", ["twilightforest:time_planks"] )

    event.shaped("twilightforest:time_sign",

        [
            "SSS",
            "CPC",
            "ATR"
        ],

        {
            S:"twilightforest:time_slab",
            C:"gtceu:iron_screw",
            P:"twilightforest:time_planks",
            T:"#balm:wooden_rods",
            A:"#forge:tools/saws",
            R:"#forge:tools/screwdrivers"
        }

    )

    event.shaped("2x twilightforest:time_sign",

        [
            "SSS",
            "CPC",
            "ATR"
        ],

        {
            S:"twilightforest:time_slab",
            C:"gtceu:steel_screw",
            P:"twilightforest:time_planks",
            T:"#balm:wooden_rods",
            A:"#forge:tools/saws",
            R:"#forge:tools/screwdrivers"
        }

    )

    event.recipes.gtceu.assembler("time_sign_assemb")

        .itemInputs(
            "twilightforest:time_slab",
            "#balm:wooden_rods",
        )

        .inputFluids(
            Fluid.of("gtceu:iron", 16)
        )

        .itemOutputs(
            "3x twilightforest:time_sign"
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(4)

    event.recipes.gtceu.assembler("time_sign_steel_assemb")

        .itemInputs(
            "twilightforest:time_slab",
            "#balm:wooden_rods",
        )

        .inputFluids(
            Fluid.of("gtceu:steel", 16)
        )

        .itemOutputs(
            "5x twilightforest:time_sign"
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(4)

    event.shaped("twilightforest:time_hanging_sign",

        [
            "SSS",
            "C C",
            "RIR"
        ],

        {
            S:"twilightforest:time_slab",
            C:"minecraft:chain",
            R:"gtceu:iron_ring",
            I:"balm:wooden_rods"
        }

    )    

    event.shaped("2x twilightforest:time_hanging_sign",

        [
            "SSS",
            "C C",
            "RIR"
        ],

        {
            S:"twilightforest:time_slab",
            C:"minecraft:chain",
            R:"gtceu:steel_ring",
            I:"balm:wooden_rods"
        }

    )    

    event.recipes.gtceu.assembler("time_hanging_sign_assemb")

        .itemInputs(
            "3x twilightforest:time_slab",
            "twilightforest:time_sign",
            "minecraft:chain"
        )

        .itemOutputs(
            "twilightforest:time_hanging_sign"
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(5)

    event.shaped("twilightforest:time_boat",

        [
            "PSP",
            "PKP",
            "LLL"
        ],

        {
            P:"twilightforest:time_planks",
            S:"#minecraft:shovels",
            K:"#forge:tools/knives",
            L:"twilightforest:time_slab"
        }

    )    

    event.recipes.gtceu.assembler("time_boat_assemb")

        .itemInputs(
            "5x twilightforest:time_planks",
        )

        .itemOutputs(
            "twilightforest:time_boat"
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(15)

    event.shaped("twilightforest:time_chest_boat",

        [
            " B ",
            "OCO",
            " W "
        ],

        {
            B:"twilightforest:time_boat",
            O:"gtceu:wood_bolt",
            C:"minecraft:chest",
            W:"#forge:tools/wrenches"
        }

    )
    event.recipes.gtceu.assembler("time_chest_boat_assemb")

        .itemInputs(
            "5x twilightforest:time_planks",
            "minecraft:chest"
        )

        .itemOutputs(
            "twilightforest:time_chest_boat"
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(16)
    

    event.shaped("twilightforest:time_door",

        [
            "PTS",
            "PRI",
            "PPA"
        ],

        {
            P:"twilightforest:time_planks",
            T:"twilightforest:time_trapdoor",
            R:"gtceu:iron_ring",
            I:"gtceu:iron_screw",
            S:"#forge:tools/screwdrivers",
            A:"#forge:tools/saws"
        }
    )

    event.recipes.gtceu.assembler('time_door_assemb')

        .itemInputs(
            "4x twilightforest:time_planks",
            "twilightforest:time_trapdoor",
        )

        .inputFluids(
            Fluid.of("gtceu:iron", 16)
        )

        .itemOutputs(
            "twilightforest:time_door",
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])

    event.shaped("twilightforest:time_trapdoor",

        [
            "IPT",
            "PSP",
            "TPI"
        ],

        {
            P:"twilightforest:time_planks",
            T:"#balm:wooden_rods",
            I:"gtceu:iron_bolt",
            S:"#forge:tools/screwdrivers"
        }
    )
   
    event.shaped("2x twilightforest:time_trapdoor",

        [
            "IPT",
            "PSP",
            "TPI"
        ],

        {
            P:"twilightforest:time_planks",
            T:"#balm:wooden_rods",
            I:"gtceu:steel_bolt",
            S:"#forge:tools/screwdrivers"
        }
    )    

    event.recipes.gtceu.assembler('time_trapdoor_assemb')

        .itemInputs(
            "2x twilightforest:time_planks",
        )

        .inputFluids(
            Fluid.of("gtceu:iron", 16)
        )

        .itemOutputs(
            "twilightforest:time_trapdoor",
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(3)
    
    event.recipes.gtceu.assembler('time_trapdoor_steel_assemb')

        .itemInputs(
            "2x twilightforest:time_planks",
        )

        .inputFluids(
            Fluid.of("gtceu:steel", 16)
        )

        .itemOutputs(
            "2x twilightforest:time_trapdoor",
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(3)

    event.shaped("twilightforest:time_fence",

        [
            "PTP",
            "PTP",
            "PTP"
        ],

        {
            P:"twilightforest:time_planks",
            T:"#balm:wooden_rods"
        }
    )    

    event.recipes.gtceu.assembler('time_fence_assemb')

        .itemInputs(
            "twilightforest:time_planks",
        )

        .itemOutputs(
            "twilightforest:time_fence",
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(13)

    event.recipes.gtceu.assembler('time_stairs_assemb')

        .itemInputs(
            "3x twilightforest:time_planks",
        )

        .itemOutputs(
            "4x twilightforest:time_stairs",
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(7)

    event.shaped("twilightforest:time_fence_gate",

        [
            "F F",
            "TPT",
            "TPT"
        ],

        {
            P:"twilightforest:time_planks",
            T:"#balm:wooden_rods",
            F:"minecraft:flint"
        }
    )    

    event.shaped("2x twilightforest:time_fence_gate",

        [
            "SDS",
            "TPT",
            "TPT"
        ],

        {
            P:"twilightforest:time_planks",
            T:"#balm:wooden_rods",
            S:"gtceu:iron_screw",
            D:"#forge:tools/screwdrivers"
        }
    )    

    event.recipes.gtceu.assembler('time_fence_gate_assemb')

        .itemInputs(
            "2x twilightforest:time_planks",
            "2x #balm:wooden_rods"
        )

        .itemOutputs(
            "twilightforest:time_fence_gate",
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(2)

    event.shapeless('2x twilightforest:time_slab',

        [
            "twilightforest:time_planks",
            "#forge:tools/saws"
        ]
    )

    event.recipes.gtceu.cutter('time_slab_lubricant')

        .itemInputs(
            "twilightforest:time_planks"
        )

        .inputFluids(
            Fluid.of("gtceu:lubricant", 1)
        )

        .itemOutputs(   
            "2x twilightforest:time_slab",
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.gtceu.cutter('time_slab_dist_water')

        .itemInputs(
            "twilightforest:time_planks"
        )

        .inputFluids(
            Fluid.of("gtceu:distilled_water", 3)
        )

        .itemOutputs(
            "2x twilightforest:time_slab",
        )
        .duration(350)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.gtceu.cutter('time_slab_water')

        .itemInputs(
            "twilightforest:time_planks"
        )

        .inputFluids(
            Fluid.of("minecraft:water", 4)
        )

        .itemOutputs(
            "2x twilightforest:time_slab",
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])

    event.shaped("twilightforest:time_pressure_plate",

        [
            "BSB",
            "LPL",
            "BRB"
        ],

        {
            B:"gtceu:wood_bolt",
            S:"#forge:tools/mallets",
            L:"twilightforest:time_slab",
            P:"gtceu:iron_spring",
            R:"#forge:tools/screwdrivers"
        }

    )    

    event.recipes.gtceu.assembler('time_pressure_plate')

        .itemInputs(
            "2x twilightforest:time_planks",
            "gtceu:iron_spring"
        )
        
        .itemOutputs(
            "twilightforest:time_pressure_plate",
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(7)

    event.recipes.gtceu.cutter('time_button_lubricant')

        .itemInputs(
            "twilightforest:time_pressure_plate"
        )

        .inputFluids(
            Fluid.of("gtceu:lubricant", 1)
        )

        .itemOutputs(   
            "12x twilightforest:time_button",
        )
        .duration(250)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.gtceu.cutter('time_button_dist_water')

        .itemInputs(
            "twilightforest:time_pressure_plate"
        )

        .inputFluids(
            Fluid.of("gtceu:distilled_water", 3)
        )

        .itemOutputs(
            "12x twilightforest:time_button",
        )
        .duration(375)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.gtceu.cutter('time_button_water')

        .itemInputs(
            "twilightforest:time_pressure_plate"
        )

        .inputFluids(
            Fluid.of("minecraft:water", 4)
        )

        .itemOutputs(
            "12x twilightforest:time_button",
        )
        .duration(450)
        .EUt(GTValues.VA[GTValues.ULV])
      
    event.shapeless("6x twilightforest:time_button",

        [
            "#forge:tools/saws",
            "twilightforest:time_pressure_plate"
        ]

    )    
 
    event.shapeless("twilightforest:time_chest",

        [
            "minecraft:chest",
            "twilightforest:time_planks"
        ]

    )    
  
    event.shaped("4x twilightforest:time_stairs",

        [
            "P  ",
            "PP ",
            "PPP"
        ],

        {
            P:"twilightforest:time_planks"
        }

    )
    
})