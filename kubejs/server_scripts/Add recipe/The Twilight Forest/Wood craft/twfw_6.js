ServerEvents.recipes( event=> {

    event.shapeless('2x twilightforest:transformation_planks',

        [
          '#twilightforest:transwood_logs'  
        ]
    )

    event.shapeless('4x twilightforest:transformation_planks',

        [
          '#twilightforest:transwood_logs',  
          "#forge:tools/saws"  
        ]
    )

    event.recipes.gtceu.cutter('transformation_lubricant')

        .itemInputs(
            '#twilightforest:transwood_logs'  
        )

        .inputFluids(
            Fluid.of("gtceu:lubricant", 1)
        )

        .itemOutputs(
            "6x twilightforest:transformation_planks",
            "2x gtceu:wood_dust"
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.gtceu.cutter('transformation_dist_water')

        .itemInputs(
            '#twilightforest:transwood_logs'  
        )

        .inputFluids(
            Fluid.of("gtceu:distilled_water", 3)
        )

        .itemOutputs(
            "6x twilightforest:transformation_planks",
            "2x gtceu:wood_dust"
        )
        .duration(350)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.gtceu.cutter('transformation_plank_water')

        .itemInputs(
            '#twilightforest:transwood_logs'  
        )

        .inputFluids(
            Fluid.of("minecraft:water", 4)
        )

        .itemOutputs(
            "6x twilightforest:transformation_planks",
            "2x gtceu:wood_dust"
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])
    
    event.recipes.farmersdelight.cutting("twilightforest:transformation_door", "#minecraft:axes", ["twilightforest:transformation_planks"] )    

    event.recipes.farmersdelight.cutting("twilightforest:transformation_trapdoor", "#minecraft:axes", ["twilightforest:transformation_planks"] )

    event.recipes.farmersdelight.cutting("twilightforest:transformation_sign", "#minecraft:axes", ["twilightforest:transformation_planks"] )

    event.recipes.farmersdelight.cutting("twilightforest:transformation_hanging_sign", "#minecraft:axes", ["twilightforest:transformation_planks"] )

    event.shaped("twilightforest:transformation_sign",

        [
            "SSS",
            "CPC",
            "ATR"
        ],

        {
            S:"twilightforest:transformation_slab",
            C:"gtceu:iron_screw",
            P:"twilightforest:transformation_planks",
            T:"#balm:wooden_rods",
            A:"#forge:tools/saws",
            R:"#forge:tools/screwdrivers"
        }

    )

    event.shaped("2x twilightforest:transformation_sign",

        [
            "SSS",
            "CPC",
            "ATR"
        ],

        {
            S:"twilightforest:transformation_slab",
            C:"gtceu:steel_screw",
            P:"twilightforest:transformation_planks",
            T:"#balm:wooden_rods",
            A:"#forge:tools/saws",
            R:"#forge:tools/screwdrivers"
        }

    )

    event.recipes.gtceu.assembler("transformation_sign_assemb")

        .itemInputs(
            "twilightforest:transformation_slab",
            "#balm:wooden_rods",
        )

        .inputFluids(
            Fluid.of("gtceu:iron", 16)
        )

        .itemOutputs(
            "3x twilightforest:transformation_sign"
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(4)

    event.recipes.gtceu.assembler("transformation_sign_steel_assemb")

        .itemInputs(
            "twilightforest:transformation_slab",
            "#balm:wooden_rods",
        )

        .inputFluids(
            Fluid.of("gtceu:steel", 16)
        )

        .itemOutputs(
            "5x twilightforest:transformation_sign"
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(4)

    event.shaped("twilightforest:transformation_hanging_sign",

        [
            "SSS",
            "C C",
            "RIR"
        ],

        {
            S:"twilightforest:transformation_slab",
            C:"minecraft:chain",
            R:"gtceu:iron_ring",
            I:"balm:wooden_rods"
        }

    )    

    event.shaped("2x twilightforest:transformation_hanging_sign",

        [
            "SSS",
            "C C",
            "RIR"
        ],

        {
            S:"twilightforest:transformation_slab",
            C:"minecraft:chain",
            R:"gtceu:steel_ring",
            I:"balm:wooden_rods"
        }

    )    

    event.recipes.gtceu.assembler("transformation_hanging_sign_assemb")

        .itemInputs(
            "3x twilightforest:transformation_slab",
            "twilightforest:transformation_sign",
            "minecraft:chain"
        )

        .itemOutputs(
            "twilightforest:transformation_hanging_sign"
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(5)

    event.shaped("twilightforest:transformation_boat",

        [
            "PSP",
            "PKP",
            "LLL"
        ],

        {
            P:"twilightforest:transformation_planks",
            S:"#minecraft:shovels",
            K:"#forge:tools/knives",
            L:"twilightforest:transformation_slab"
        }

    )    

    event.recipes.gtceu.assembler("transformation_boat_assemb")

        .itemInputs(
            "5x twilightforest:transformation_planks",
        )

        .itemOutputs(
            "twilightforest:transformation_boat"
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(15)

    event.shaped("twilightforest:transformation_chest_boat",

        [
            " B ",
            "OCO",
            " W "
        ],

        {
            B:"twilightforest:transformation_boat",
            O:"gtceu:wood_bolt",
            C:"minecraft:chest",
            W:"#forge:tools/wrenches"
        }

    )
    event.recipes.gtceu.assembler("transformation_chest_boat_assemb")

        .itemInputs(
            "5x twilightforest:transformation_planks",
            "minecraft:chest"
        )

        .itemOutputs(
            "twilightforest:transformation_chest_boat"
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(16)
    

    event.shaped("twilightforest:transformation_door",

        [
            "PTS",
            "PRI",
            "PPA"
        ],

        {
            P:"twilightforest:transformation_planks",
            T:"twilightforest:transformation_trapdoor",
            R:"gtceu:iron_ring",
            I:"gtceu:iron_screw",
            S:"#forge:tools/screwdrivers",
            A:"#forge:tools/saws"
        }
    )

    event.recipes.gtceu.assembler('transformation_door_assemb')

        .itemInputs(
            "4x twilightforest:transformation_planks",
            "twilightforest:transformation_trapdoor",
        )

        .inputFluids(
            Fluid.of("gtceu:iron", 16)
        )

        .itemOutputs(
            "twilightforest:transformation_door",
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])

    event.shaped("twilightforest:transformation_trapdoor",

        [
            "IPT",
            "PSP",
            "TPI"
        ],

        {
            P:"twilightforest:transformation_planks",
            T:"#balm:wooden_rods",
            I:"gtceu:iron_bolt",
            S:"#forge:tools/screwdrivers"
        }
    )
   
    event.shaped("2x twilightforest:transformation_trapdoor",

        [
            "IPT",
            "PSP",
            "TPI"
        ],

        {
            P:"twilightforest:transformation_planks",
            T:"#balm:wooden_rods",
            I:"gtceu:steel_bolt",
            S:"#forge:tools/screwdrivers"
        }
    )    

    event.recipes.gtceu.assembler('transformation_trapdoor_assemb')

        .itemInputs(
            "2x twilightforest:transformation_planks",
        )

        .inputFluids(
            Fluid.of("gtceu:iron", 16)
        )

        .itemOutputs(
            "twilightforest:transformation_trapdoor",
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(3)
    
    event.recipes.gtceu.assembler('transformation_trapdoor_steel_assemb')

        .itemInputs(
            "2x twilightforest:transformation_planks",
        )

        .inputFluids(
            Fluid.of("gtceu:steel", 16)
        )

        .itemOutputs(
            "2x twilightforest:transformation_trapdoor",
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(3)

    event.shaped("twilightforest:transformation_fence",

        [
            "PTP",
            "PTP",
            "PTP"
        ],

        {
            P:"twilightforest:transformation_planks",
            T:"#balm:wooden_rods"
        }
    )    

    event.recipes.gtceu.assembler('transformation_fence_assemb')

        .itemInputs(
            "twilightforest:transformation_planks",
        )

        .itemOutputs(
            "twilightforest:transformation_fence",
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(13)

    event.recipes.gtceu.assembler('transformation_stairs_assemb')

        .itemInputs(
            "3x twilightforest:transformation_planks",
        )

        .itemOutputs(
            "4x twilightforest:transformation_stairs",
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(7)

    event.shaped("twilightforest:transformation_fence_gate",

        [
            "F F",
            "TPT",
            "TPT"
        ],

        {
            P:"twilightforest:transformation_planks",
            T:"#balm:wooden_rods",
            F:"minecraft:flint"
        }
    )    

    event.shaped("2x twilightforest:transformation_fence_gate",

        [
            "SDS",
            "TPT",
            "TPT"
        ],

        {
            P:"twilightforest:transformation_planks",
            T:"#balm:wooden_rods",
            S:"gtceu:iron_screw",
            D:"#forge:tools/screwdrivers"
        }
    )    

    event.recipes.gtceu.assembler('transformation_fence_gate_assemb')

        .itemInputs(
            "2x twilightforest:transformation_planks",
            "2x #balm:wooden_rods"
        )

        .itemOutputs(
            "twilightforest:transformation_fence_gate",
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(2)

    event.shapeless('2x twilightforest:transformation_slab',

        [
            "twilightforest:transformation_planks",
            "#forge:tools/saws"
        ]
    )

    event.recipes.gtceu.cutter('transformation_slab_lubricant')

        .itemInputs(
            "twilightforest:transformation_planks"
        )

        .inputFluids(
            Fluid.of("gtceu:lubricant", 1)
        )

        .itemOutputs(   
            "2x twilightforest:transformation_slab",
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.gtceu.cutter('transformation_slab_dist_water')

        .itemInputs(
            "twilightforest:transformation_planks"
        )

        .inputFluids(
            Fluid.of("gtceu:distilled_water", 3)
        )

        .itemOutputs(
            "2x twilightforest:transformation_slab",
        )
        .duration(350)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.gtceu.cutter('transformation_slab_water')

        .itemInputs(
            "twilightforest:transformation_planks"
        )

        .inputFluids(
            Fluid.of("minecraft:water", 4)
        )

        .itemOutputs(
            "2x twilightforest:transformation_slab",
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])

    event.shaped("twilightforest:transformation_pressure_plate",

        [
            "BSB",
            "LPL",
            "BRB"
        ],

        {
            B:"gtceu:wood_bolt",
            S:"#forge:tools/mallets",
            L:"twilightforest:transformation_slab",
            P:"gtceu:iron_spring",
            R:"#forge:tools/screwdrivers"
        }

    )    

    event.recipes.gtceu.assembler('transformation_pressure_plate')

        .itemInputs(
            "2x twilightforest:transformation_planks",
            "gtceu:iron_spring"
        )
        
        .itemOutputs(
            "twilightforest:transformation_pressure_plate",
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(7)

    event.recipes.gtceu.cutter('transformation_button_lubricant')

        .itemInputs(
            "twilightforest:transformation_pressure_plate"
        )

        .inputFluids(
            Fluid.of("gtceu:lubricant", 1)
        )

        .itemOutputs(   
            "12x twilightforest:transformation_button",
        )
        .duration(250)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.gtceu.cutter('transformation_button_dist_water')

        .itemInputs(
            "twilightforest:transformation_pressure_plate"
        )

        .inputFluids(
            Fluid.of("gtceu:distilled_water", 3)
        )

        .itemOutputs(
            "12x twilightforest:transformation_button",
        )
        .duration(375)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.gtceu.cutter('transformation_button_water')

        .itemInputs(
            "twilightforest:transformation_pressure_plate"
        )

        .inputFluids(
            Fluid.of("minecraft:water", 4)
        )

        .itemOutputs(
            "12x twilightforest:transformation_button",
        )
        .duration(450)
        .EUt(GTValues.VA[GTValues.ULV])
      
    event.shapeless("6x twilightforest:transformation_button",

        [
            "#forge:tools/saws",
            "twilightforest:transformation_pressure_plate"
        ]

    )    
 
    event.shapeless("twilightforest:transformation_chest",

        [
            "minecraft:chest",
            "twilightforest:transformation_planks"
        ]

    )    
  
    event.shaped("4x twilightforest:transformation_stairs",

        [
            "P  ",
            "PP ",
            "PPP"
        ],

        {
            P:"twilightforest:transformation_planks"
        }

    )
    
})