ServerEvents.recipes( event=> {

    event.shapeless('2x twilightforest:dark_planks',

        [
          'twilightforest:dark_log'  
        ]
    )

    event.shapeless('4x twilightforest:dark_planks',

        [
          'twilightforest:dark_log',  
          "#forge:tools/saws"  
        ]
    )

    event.recipes.gtceu.cutter('dark_lubricant')

        .itemInputs(
            'twilightforest:dark_log',  
        )

        .inputFluids(
            Fluid.of("gtceu:lubricant", 1)
        )

        .itemOutputs(
            "6x twilightforest:dark_planks",
            "2x gtceu:wood_dust"
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.gtceu.cutter('dark_dist_water')

        .itemInputs(
            "twilightforest:dark_log"
        )

        .inputFluids(
            Fluid.of("gtceu:distilled_water", 3)
        )

        .itemOutputs(
            "6x twilightforest:dark_planks",
            "2x gtceu:wood_dust"
        )
        .duration(350)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.gtceu.cutter('dark_plank_water')

        .itemInputs(
            "twilightforest:dark_log"
        )

        .inputFluids(
            Fluid.of("minecraft:water", 4)
        )

        .itemOutputs(
            "6x twilightforest:dark_planks",
            "2x gtceu:wood_dust"
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])
    
    event.recipes.farmersdelight.cutting("twilightforest:dark_door", "#minecraft:axes", ["twilightforest:dark_planks"] )    

    event.recipes.farmersdelight.cutting("twilightforest:dark_trapdoor", "#minecraft:axes", ["twilightforest:dark_planks"] )

    event.recipes.farmersdelight.cutting("twilightforest:dark_sign", "#minecraft:axes", ["twilightforest:dark_planks"] )

    event.recipes.farmersdelight.cutting("twilightforest:dark_hanging_sign", "#minecraft:axes", ["twilightforest:dark_planks"] )

    event.shaped("twilightforest:dark_sign",

        [
            "SSS",
            "CPC",
            "ATR"
        ],

        {
            S:"twilightforest:dark_slab",
            C:"gtceu:iron_screw",
            P:"twilightforest:dark_planks",
            T:"#balm:wooden_rods",
            A:"#forge:tools/saws",
            R:"#forge:tools/screwdrivers"
        }

    )

    event.shaped("2x twilightforest:dark_sign",

        [
            "SSS",
            "CPC",
            "ATR"
        ],

        {
            S:"twilightforest:dark_slab",
            C:"gtceu:steel_screw",
            P:"twilightforest:dark_planks",
            T:"#balm:wooden_rods",
            A:"#forge:tools/saws",
            R:"#forge:tools/screwdrivers"
        }

    )

    event.recipes.gtceu.assembler("dark_sign_assemb")

        .itemInputs(
            "twilightforest:dark_slab",
            "#balm:wooden_rods",
        )

        .inputFluids(
            Fluid.of("gtceu:iron", 16)
        )

        .itemOutputs(
            "3x twilightforest:dark_sign"
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(4)

    event.recipes.gtceu.assembler("dark_sign_steel_assemb")

        .itemInputs(
            "twilightforest:dark_slab",
            "#balm:wooden_rods",
        )

        .inputFluids(
            Fluid.of("gtceu:steel", 16)
        )

        .itemOutputs(
            "5x twilightforest:dark_sign"
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(4)

    event.shaped("twilightforest:dark_hanging_sign",

        [
            "SSS",
            "C C",
            "RIR"
        ],

        {
            S:"twilightforest:dark_slab",
            C:"minecraft:chain",
            R:"gtceu:iron_ring",
            I:"balm:wooden_rods"
        }

    )    

    event.shaped("2x twilightforest:dark_hanging_sign",

        [
            "SSS",
            "C C",
            "RIR"
        ],

        {
            S:"twilightforest:dark_slab",
            C:"minecraft:chain",
            R:"gtceu:steel_ring",
            I:"balm:wooden_rods"
        }

    )    

    event.recipes.gtceu.assembler("dark_hanging_sign_assemb")

        .itemInputs(
            "3x twilightforest:dark_slab",
            "twilightforest:dark_sign",
            "minecraft:chain"
        )

        .itemOutputs(
            "twilightforest:dark_hanging_sign"
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(5)

    event.shaped("twilightforest:dark_boat",

        [
            "PSP",
            "PKP",
            "LLL"
        ],

        {
            P:"twilightforest:dark_planks",
            S:"#minecraft:shovels",
            K:"#forge:tools/knives",
            L:"twilightforest:dark_slab"
        }

    )    

    event.recipes.gtceu.assembler("dark_boat_assemb")

        .itemInputs(
            "5x twilightforest:dark_planks",
        )

        .itemOutputs(
            "twilightforest:dark_boat"
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(15)

    event.shaped("twilightforest:dark_chest_boat",

        [
            " B ",
            "OCO",
            " W "
        ],

        {
            B:"twilightforest:dark_boat",
            O:"gtceu:wood_bolt",
            C:"minecraft:chest",
            W:"#forge:tools/wrenches"
        }

    )
    event.recipes.gtceu.assembler("dark_chest_boat_assemb")

        .itemInputs(
            "5x twilightforest:dark_planks",
            "minecraft:chest"
        )

        .itemOutputs(
            "twilightforest:dark_chest_boat"
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(16)
    

    event.shaped("twilightforest:dark_door",

        [
            "PTS",
            "PRI",
            "PPA"
        ],

        {
            P:"twilightforest:dark_planks",
            T:"twilightforest:dark_trapdoor",
            R:"gtceu:iron_ring",
            I:"gtceu:iron_screw",
            S:"#forge:tools/screwdrivers",
            A:"#forge:tools/saws"
        }
    )

    event.recipes.gtceu.assembler('dark_door_assemb')

        .itemInputs(
            "4x twilightforest:dark_planks",
            "twilightforest:dark_trapdoor",
        )

        .inputFluids(
            Fluid.of("gtceu:iron", 16)
        )

        .itemOutputs(
            "twilightforest:dark_door",
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])

    event.shaped("twilightforest:dark_trapdoor",

        [
            "IPT",
            "PSP",
            "TPI"
        ],

        {
            P:"twilightforest:dark_planks",
            T:"#balm:wooden_rods",
            I:"gtceu:iron_bolt",
            S:"#forge:tools/screwdrivers"
        }
    )
   
    event.shaped("2x twilightforest:dark_trapdoor",

        [
            "IPT",
            "PSP",
            "TPI"
        ],

        {
            P:"twilightforest:dark_planks",
            T:"#balm:wooden_rods",
            I:"gtceu:steel_bolt",
            S:"#forge:tools/screwdrivers"
        }
    )    

    event.recipes.gtceu.assembler('dark_trapdoor_assemb')

        .itemInputs(
            "2x twilightforest:dark_planks",
        )

        .inputFluids(
            Fluid.of("gtceu:iron", 16)
        )

        .itemOutputs(
            "twilightforest:dark_trapdoor",
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(3)
    
    event.recipes.gtceu.assembler('dark_trapdoor_steel_assemb')

        .itemInputs(
            "2x twilightforest:dark_planks",
        )

        .inputFluids(
            Fluid.of("gtceu:steel", 16)
        )

        .itemOutputs(
            "2x twilightforest:dark_trapdoor",
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(3)

    event.shaped("twilightforest:dark_fence",

        [
            "PTP",
            "PTP",
            "PTP"
        ],

        {
            P:"twilightforest:dark_planks",
            T:"#balm:wooden_rods"
        }
    )    

    event.recipes.gtceu.assembler('dark_fence_assemb')

        .itemInputs(
            "twilightforest:dark_planks",
        )

        .itemOutputs(
            "twilightforest:dark_fence",
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(13)

    event.recipes.gtceu.assembler('dark_stairs_assemb')

        .itemInputs(
            "3x twilightforest:dark_planks",
        )

        .itemOutputs(
            "4x twilightforest:dark_stairs",
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(7)

    event.shaped("twilightforest:dark_fence_gate",

        [
            "F F",
            "TPT",
            "TPT"
        ],

        {
            P:"twilightforest:dark_planks",
            T:"#balm:wooden_rods",
            F:"minecraft:flint"
        }
    )    

    event.shaped("2x twilightforest:dark_fence_gate",

        [
            "SDS",
            "TPT",
            "TPT"
        ],

        {
            P:"twilightforest:dark_planks",
            T:"#balm:wooden_rods",
            S:"gtceu:iron_screw",
            D:"#forge:tools/screwdrivers"
        }
    )    

    event.recipes.gtceu.assembler('dark_fence_gate_assemb')

        .itemInputs(
            "2x twilightforest:dark_planks",
            "2x #balm:wooden_rods"
        )

        .itemOutputs(
            "twilightforest:dark_fence_gate",
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(2)

    event.shapeless('2x twilightforest:dark_slab',

        [
            "twilightforest:dark_planks",
            "#forge:tools/saws"
        ]
    )

    event.recipes.gtceu.cutter('dark_slab_lubricant')

        .itemInputs(
            "twilightforest:dark_planks"
        )

        .inputFluids(
            Fluid.of("gtceu:lubricant", 1)
        )

        .itemOutputs(   
            "2x twilightforest:dark_slab",
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.gtceu.cutter('dark_slab_dist_water')

        .itemInputs(
            "twilightforest:dark_planks"
        )

        .inputFluids(
            Fluid.of("gtceu:distilled_water", 3)
        )

        .itemOutputs(
            "2x twilightforest:dark_slab",
        )
        .duration(350)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.gtceu.cutter('dark_slab_water')

        .itemInputs(
            "twilightforest:dark_planks"
        )

        .inputFluids(
            Fluid.of("minecraft:water", 4)
        )

        .itemOutputs(
            "2x twilightforest:dark_slab",
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])

    event.shaped("twilightforest:dark_pressure_plate",

        [
            "BSB",
            "LPL",
            "BRB"
        ],

        {
            B:"gtceu:wood_bolt",
            S:"#forge:tools/mallets",
            L:"twilightforest:dark_slab",
            P:"gtceu:iron_spring",
            R:"#forge:tools/screwdrivers"
        }

    )    

    event.recipes.gtceu.assembler('dark_pressure_plate')

        .itemInputs(
            "2x twilightforest:dark_planks",
            "gtceu:iron_spring"
        )
        
        .itemOutputs(
            "twilightforest:dark_pressure_plate",
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(7)

    event.recipes.gtceu.cutter('dark_button_lubricant')

        .itemInputs(
            "twilightforest:dark_pressure_plate"
        )

        .inputFluids(
            Fluid.of("gtceu:lubricant", 1)
        )

        .itemOutputs(   
            "12x twilightforest:dark_button",
        )
        .duration(250)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.gtceu.cutter('dark_button_dist_water')

        .itemInputs(
            "twilightforest:dark_pressure_plate"
        )

        .inputFluids(
            Fluid.of("gtceu:distilled_water", 3)
        )

        .itemOutputs(
            "12x twilightforest:dark_button",
        )
        .duration(375)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.gtceu.cutter('dark_button_water')

        .itemInputs(
            "twilightforest:dark_pressure_plate"
        )

        .inputFluids(
            Fluid.of("minecraft:water", 4)
        )

        .itemOutputs(
            "12x twilightforest:dark_button",
        )
        .duration(450)
        .EUt(GTValues.VA[GTValues.ULV])
      
    event.shapeless("6x twilightforest:dark_button",

        [
            "#forge:tools/saws",
            "twilightforest:dark_pressure_plate"
        ]

    )    
 
    event.shapeless("twilightforest:dark_chest",

        [
            "minecraft:chest",
            "twilightforest:dark_planks"
        ]

    )    
  
    event.shaped("4x twilightforest:dark_stairs",

        [
            "P  ",
            "PP ",
            "PPP"
        ],

        {
            P:"twilightforest:dark_planks"
        }

    )
    
})