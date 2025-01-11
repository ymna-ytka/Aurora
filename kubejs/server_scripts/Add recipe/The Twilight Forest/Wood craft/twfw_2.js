ServerEvents.recipes( event=> {

    event.shapeless('2x twilightforest:canopy_planks',

        [
          'twilightforest:canopy_log'  
        ]
    )

    event.shapeless('4x twilightforest:canopy_planks',

        [
          'twilightforest:canopy_log',  
          "#forge:tools/saws"  
        ]
    )

    event.recipes.gtceu.cutter('canopy_lubricant')

        .itemInputs(
            'twilightforest:canopy_log',  
        )

        .inputFluids(
            Fluid.of("gtceu:lubricant", 1)
        )

        .itemOutputs(
            "6x twilightforest:canopy_planks",
            "2x gtceu:wood_dust"
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.gtceu.cutter('canopy_dist_water')

        .itemInputs(
            "twilightforest:canopy_log"
        )

        .inputFluids(
            Fluid.of("gtceu:distilled_water", 3)
        )

        .itemOutputs(
            "6x twilightforest:canopy_planks",
            "2x gtceu:wood_dust"
        )
        .duration(350)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.gtceu.cutter('canopy_plank_water')

        .itemInputs(
            "twilightforest:canopy_log"
        )

        .inputFluids(
            Fluid.of("minecraft:water", 4)
        )

        .itemOutputs(
            "6x twilightforest:canopy_planks",
            "2x gtceu:wood_dust"
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])
    
    event.recipes.farmersdelight.cutting("twilightforest:canopy_door", "#minecraft:axes", ["twilightforest:canopy_planks"] )    

    event.recipes.farmersdelight.cutting("twilightforest:canopy_trapdoor", "#minecraft:axes", ["twilightforest:canopy_planks"] )

    event.recipes.farmersdelight.cutting("twilightforest:canopy_sign", "#minecraft:axes", ["twilightforest:canopy_planks"] )

    event.recipes.farmersdelight.cutting("twilightforest:canopy_hanging_sign", "#minecraft:axes", ["twilightforest:canopy_planks"] )

    event.shaped("twilightforest:canopy_sign",

        [
            "SSS",
            "CPC",
            "ATR"
        ],

        {
            S:"twilightforest:canopy_slab",
            C:"gtceu:iron_screw",
            P:"twilightforest:canopy_planks",
            T:"#balm:wooden_rods",
            A:"#forge:tools/saws",
            R:"#forge:tools/screwdrivers"
        }

    )

    event.shaped("2x twilightforest:canopy_sign",

        [
            "SSS",
            "CPC",
            "ATR"
        ],

        {
            S:"twilightforest:canopy_slab",
            C:"gtceu:steel_screw",
            P:"twilightforest:canopy_planks",
            T:"#balm:wooden_rods",
            A:"#forge:tools/saws",
            R:"#forge:tools/screwdrivers"
        }

    )

    event.recipes.gtceu.assembler("canopy_sign_assemb")

        .itemInputs(
            "twilightforest:canopy_slab",
            "#balm:wooden_rods",
        )

        .inputFluids(
            Fluid.of("gtceu:iron", 16)
        )

        .itemOutputs(
            "3x twilightforest:canopy_sign"
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(4)

    event.recipes.gtceu.assembler("canopy_sign_steel_assemb")

        .itemInputs(
            "twilightforest:canopy_slab",
            "#balm:wooden_rods",
        )

        .inputFluids(
            Fluid.of("gtceu:steel", 16)
        )

        .itemOutputs(
            "5x twilightforest:canopy_sign"
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(4)

    event.shaped("twilightforest:canopy_hanging_sign",

        [
            "SSS",
            "C C",
            "RIR"
        ],

        {
            S:"twilightforest:canopy_slab",
            C:"minecraft:chain",
            R:"gtceu:iron_ring",
            I:"balm:wooden_rods"
        }

    )    

    event.shaped("2x twilightforest:canopy_hanging_sign",

        [
            "SSS",
            "C C",
            "RIR"
        ],

        {
            S:"twilightforest:canopy_slab",
            C:"minecraft:chain",
            R:"gtceu:steel_ring",
            I:"balm:wooden_rods"
        }

    )    

    event.recipes.gtceu.assembler("canopy_hanging_sign_assemb")

        .itemInputs(
            "3x twilightforest:canopy_slab",
            "twilightforest:canopy_sign",
            "minecraft:chain"
        )

        .itemOutputs(
            "twilightforest:canopy_hanging_sign"
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(5)

    event.shaped("twilightforest:canopy_boat",

        [
            "PSP",
            "PKP",
            "LLL"
        ],

        {
            P:"twilightforest:canopy_planks",
            S:"#minecraft:shovels",
            K:"#forge:tools/knives",
            L:"twilightforest:canopy_slab"
        }

    )    

    event.recipes.gtceu.assembler("canopy_boat_assemb")

        .itemInputs(
            "5x twilightforest:canopy_planks",
        )

        .itemOutputs(
            "twilightforest:canopy_boat"
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(15)

    event.shaped("twilightforest:canopy_chest_boat",

        [
            " B ",
            "OCO",
            " W "
        ],

        {
            B:"twilightforest:canopy_boat",
            O:"gtceu:wood_bolt",
            C:"minecraft:chest",
            W:"#forge:tools/wrenches"
        }

    )
    event.recipes.gtceu.assembler("canopy_chest_boat_assemb")

        .itemInputs(
            "5x twilightforest:canopy_planks",
            "minecraft:chest"
        )

        .itemOutputs(
            "twilightforest:canopy_chest_boat"
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(16)
    

    event.shaped("twilightforest:canopy_door",

        [
            "PTS",
            "PRI",
            "PPA"
        ],

        {
            P:"twilightforest:canopy_planks",
            T:"twilightforest:canopy_trapdoor",
            R:"gtceu:iron_ring",
            I:"gtceu:iron_screw",
            S:"#forge:tools/screwdrivers",
            A:"#forge:tools/saws"
        }
    )

    event.recipes.gtceu.assembler('canopy_door_assemb')

        .itemInputs(
            "4x twilightforest:canopy_planks",
            "twilightforest:canopy_trapdoor",
        )

        .inputFluids(
            Fluid.of("gtceu:iron", 16)
        )

        .itemOutputs(
            "twilightforest:canopy_door",
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])

    event.shaped("twilightforest:canopy_trapdoor",

        [
            "IPT",
            "PSP",
            "TPI"
        ],

        {
            P:"twilightforest:canopy_planks",
            T:"#balm:wooden_rods",
            I:"gtceu:iron_bolt",
            S:"#forge:tools/screwdrivers"
        }
    )
   
    event.shaped("2x twilightforest:canopy_trapdoor",

        [
            "IPT",
            "PSP",
            "TPI"
        ],

        {
            P:"twilightforest:canopy_planks",
            T:"#balm:wooden_rods",
            I:"gtceu:steel_bolt",
            S:"#forge:tools/screwdrivers"
        }
    )    

    event.recipes.gtceu.assembler('canopy_trapdoor_assemb')

        .itemInputs(
            "2x twilightforest:canopy_planks",
        )

        .inputFluids(
            Fluid.of("gtceu:iron", 16)
        )

        .itemOutputs(
            "twilightforest:canopy_trapdoor",
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(3)
    
    event.recipes.gtceu.assembler('canopy_trapdoor_steel_assemb')

        .itemInputs(
            "2x twilightforest:canopy_planks",
        )

        .inputFluids(
            Fluid.of("gtceu:steel", 16)
        )

        .itemOutputs(
            "2x twilightforest:canopy_trapdoor",
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(3)

    event.shaped("twilightforest:canopy_fence",

        [
            "PTP",
            "PTP",
            "PTP"
        ],

        {
            P:"twilightforest:canopy_planks",
            T:"#balm:wooden_rods"
        }
    )    

    event.recipes.gtceu.assembler('canopy_fence_assemb')

        .itemInputs(
            "twilightforest:canopy_planks",
        )

        .itemOutputs(
            "twilightforest:canopy_fence",
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(13)

    event.recipes.gtceu.assembler('canopy_stairs_assemb')

        .itemInputs(
            "3x twilightforest:canopy_planks",
        )

        .itemOutputs(
            "4x twilightforest:canopy_stairs",
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(7)

    event.shaped("twilightforest:canopy_fence_gate",

        [
            "F F",
            "TPT",
            "TPT"
        ],

        {
            P:"twilightforest:canopy_planks",
            T:"#balm:wooden_rods",
            F:"minecraft:flint"
        }
    )    

    event.shaped("2x twilightforest:canopy_fence_gate",

        [
            "SDS",
            "TPT",
            "TPT"
        ],

        {
            P:"twilightforest:canopy_planks",
            T:"#balm:wooden_rods",
            S:"gtceu:iron_screw",
            D:"#forge:tools/screwdrivers"
        }
    )    

    event.recipes.gtceu.assembler('canopy_fence_gate_assemb')

        .itemInputs(
            "2x twilightforest:canopy_planks",
            "2x #balm:wooden_rods"
        )

        .itemOutputs(
            "twilightforest:canopy_fence_gate",
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(2)

    event.shapeless('2x twilightforest:canopy_slab',

        [
            "twilightforest:canopy_planks",
            "#forge:tools/saws"
        ]
    )

    event.recipes.gtceu.cutter('canopy_slab_lubricant')

        .itemInputs(
            "twilightforest:canopy_planks"
        )

        .inputFluids(
            Fluid.of("gtceu:lubricant", 1)
        )

        .itemOutputs(   
            "2x twilightforest:canopy_slab",
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.gtceu.cutter('canopy_slab_dist_water')

        .itemInputs(
            "twilightforest:canopy_planks"
        )

        .inputFluids(
            Fluid.of("gtceu:distilled_water", 3)
        )

        .itemOutputs(
            "2x twilightforest:canopy_slab",
        )
        .duration(350)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.gtceu.cutter('canopy_slab_water')

        .itemInputs(
            "twilightforest:canopy_planks"
        )

        .inputFluids(
            Fluid.of("minecraft:water", 4)
        )

        .itemOutputs(
            "2x twilightforest:canopy_slab",
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])

    event.shaped("twilightforest:canopy_pressure_plate",

        [
            "BSB",
            "LPL",
            "BRB"
        ],

        {
            B:"gtceu:wood_bolt",
            S:"#forge:tools/mallets",
            L:"twilightforest:canopy_slab",
            P:"gtceu:iron_spring",
            R:"#forge:tools/screwdrivers"
        }

    )    

    event.recipes.gtceu.assembler('canopy_pressure_plate')

        .itemInputs(
            "2x twilightforest:canopy_planks",
            "gtceu:iron_spring"
        )
        
        .itemOutputs(
            "twilightforest:canopy_pressure_plate",
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(7)

    event.recipes.gtceu.cutter('canopy_button_lubricant')

        .itemInputs(
            "twilightforest:canopy_pressure_plate"
        )

        .inputFluids(
            Fluid.of("gtceu:lubricant", 1)
        )

        .itemOutputs(   
            "12x twilightforest:canopy_button",
        )
        .duration(250)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.gtceu.cutter('canopy_button_dist_water')

        .itemInputs(
            "twilightforest:canopy_pressure_plate"
        )

        .inputFluids(
            Fluid.of("gtceu:distilled_water", 3)
        )

        .itemOutputs(
            "12x twilightforest:canopy_button",
        )
        .duration(375)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.gtceu.cutter('canopy_button_water')

        .itemInputs(
            "twilightforest:canopy_pressure_plate"
        )

        .inputFluids(
            Fluid.of("minecraft:water", 4)
        )

        .itemOutputs(
            "12x twilightforest:canopy_button",
        )
        .duration(450)
        .EUt(GTValues.VA[GTValues.ULV])
      
    event.shapeless("6x twilightforest:canopy_button",

        [
            "#forge:tools/saws",
            "twilightforest:canopy_pressure_plate"
        ]

    )    
 
    event.shapeless("twilightforest:canopy_chest",

        [
            "minecraft:chest",
            "twilightforest:canopy_planks"
        ]

    )    
  
    event.shaped("4x twilightforest:canopy_stairs",

        [
            "P  ",
            "PP ",
            "PPP"
        ],

        {
            P:"twilightforest:canopy_planks"
        }

    )
    
})