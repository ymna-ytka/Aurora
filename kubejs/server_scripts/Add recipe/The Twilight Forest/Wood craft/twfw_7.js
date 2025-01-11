ServerEvents.recipes( event=> {

    event.shapeless('2x twilightforest:mining_planks',

        [
          '#twilightforest:mining_logs'  
        ]
    )

    event.shapeless('4x twilightforest:mining_planks',

        [
          '#twilightforest:mining_logs',  
          "#forge:tools/saws"  
        ]
    )

    event.recipes.gtceu.cutter('mining_lubricant')

        .itemInputs(
            '#twilightforest:mining_logs'  
        )

        .inputFluids(
            Fluid.of("gtceu:lubricant", 1)
        )

        .itemOutputs(
            "6x twilightforest:mining_planks",
            "2x gtceu:wood_dust"
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.gtceu.cutter('mining_dist_water')

        .itemInputs(
            '#twilightforest:mining_logs'  
        )

        .inputFluids(
            Fluid.of("gtceu:distilled_water", 3)
        )

        .itemOutputs(
            "6x twilightforest:mining_planks",
            "2x gtceu:wood_dust"
        )
        .duration(350)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.gtceu.cutter('mining_plank_water')

        .itemInputs(
            '#twilightforest:mining_logs'  
        )

        .inputFluids(
            Fluid.of("minecraft:water", 4)
        )

        .itemOutputs(
            "6x twilightforest:mining_planks",
            "2x gtceu:wood_dust"
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])
    
    event.recipes.farmersdelight.cutting("twilightforest:mining_door", "#minecraft:axes", ["twilightforest:mining_planks"] )    

    event.recipes.farmersdelight.cutting("twilightforest:mining_trapdoor", "#minecraft:axes", ["twilightforest:mining_planks"] )

    event.recipes.farmersdelight.cutting("twilightforest:mining_sign", "#minecraft:axes", ["twilightforest:mining_planks"] )

    event.recipes.farmersdelight.cutting("twilightforest:mining_hanging_sign", "#minecraft:axes", ["twilightforest:mining_planks"] )

    event.shaped("twilightforest:mining_sign",

        [
            "SSS",
            "CPC",
            "ATR"
        ],

        {
            S:"twilightforest:mining_slab",
            C:"gtceu:iron_screw",
            P:"twilightforest:mining_planks",
            T:"#balm:wooden_rods",
            A:"#forge:tools/saws",
            R:"#forge:tools/screwdrivers"
        }

    )

    event.shaped("2x twilightforest:mining_sign",

        [
            "SSS",
            "CPC",
            "ATR"
        ],

        {
            S:"twilightforest:mining_slab",
            C:"gtceu:steel_screw",
            P:"twilightforest:mining_planks",
            T:"#balm:wooden_rods",
            A:"#forge:tools/saws",
            R:"#forge:tools/screwdrivers"
        }

    )

    event.recipes.gtceu.assembler("mining_sign_assemb")

        .itemInputs(
            "twilightforest:mining_slab",
            "#balm:wooden_rods",
        )

        .inputFluids(
            Fluid.of("gtceu:iron", 16)
        )

        .itemOutputs(
            "3x twilightforest:mining_sign"
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(4)

    event.recipes.gtceu.assembler("mining_sign_steel_assemb")

        .itemInputs(
            "twilightforest:mining_slab",
            "#balm:wooden_rods",
        )

        .inputFluids(
            Fluid.of("gtceu:steel", 16)
        )

        .itemOutputs(
            "5x twilightforest:mining_sign"
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(4)

    event.shaped("twilightforest:mining_hanging_sign",

        [
            "SSS",
            "C C",
            "RIR"
        ],

        {
            S:"twilightforest:mining_slab",
            C:"minecraft:chain",
            R:"gtceu:iron_ring",
            I:"balm:wooden_rods"
        }

    )    

    event.shaped("2x twilightforest:mining_hanging_sign",

        [
            "SSS",
            "C C",
            "RIR"
        ],

        {
            S:"twilightforest:mining_slab",
            C:"minecraft:chain",
            R:"gtceu:steel_ring",
            I:"balm:wooden_rods"
        }

    )    

    event.recipes.gtceu.assembler("mining_hanging_sign_assemb")

        .itemInputs(
            "3x twilightforest:mining_slab",
            "twilightforest:mining_sign",
            "minecraft:chain"
        )

        .itemOutputs(
            "twilightforest:mining_hanging_sign"
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(5)

    event.shaped("twilightforest:mining_boat",

        [
            "PSP",
            "PKP",
            "LLL"
        ],

        {
            P:"twilightforest:mining_planks",
            S:"#minecraft:shovels",
            K:"#forge:tools/knives",
            L:"twilightforest:mining_slab"
        }

    )    

    event.recipes.gtceu.assembler("mining_boat_assemb")

        .itemInputs(
            "5x twilightforest:mining_planks",
        )

        .itemOutputs(
            "twilightforest:mining_boat"
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(15)

    event.shaped("twilightforest:mining_chest_boat",

        [
            " B ",
            "OCO",
            " W "
        ],

        {
            B:"twilightforest:mining_boat",
            O:"gtceu:wood_bolt",
            C:"minecraft:chest",
            W:"#forge:tools/wrenches"
        }

    )
    event.recipes.gtceu.assembler("mining_chest_boat_assemb")

        .itemInputs(
            "5x twilightforest:mining_planks",
            "minecraft:chest"
        )

        .itemOutputs(
            "twilightforest:mining_chest_boat"
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(16)
    

    event.shaped("twilightforest:mining_door",

        [
            "PTS",
            "PRI",
            "PPA"
        ],

        {
            P:"twilightforest:mining_planks",
            T:"twilightforest:mining_trapdoor",
            R:"gtceu:iron_ring",
            I:"gtceu:iron_screw",
            S:"#forge:tools/screwdrivers",
            A:"#forge:tools/saws"
        }
    )

    event.recipes.gtceu.assembler('mining_door_assemb')

        .itemInputs(
            "4x twilightforest:mining_planks",
            "twilightforest:mining_trapdoor",
        )

        .inputFluids(
            Fluid.of("gtceu:iron", 16)
        )

        .itemOutputs(
            "twilightforest:mining_door",
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])

    event.shaped("twilightforest:mining_trapdoor",

        [
            "IPT",
            "PSP",
            "TPI"
        ],

        {
            P:"twilightforest:mining_planks",
            T:"#balm:wooden_rods",
            I:"gtceu:iron_bolt",
            S:"#forge:tools/screwdrivers"
        }
    )
   
    event.shaped("2x twilightforest:mining_trapdoor",

        [
            "IPT",
            "PSP",
            "TPI"
        ],

        {
            P:"twilightforest:mining_planks",
            T:"#balm:wooden_rods",
            I:"gtceu:steel_bolt",
            S:"#forge:tools/screwdrivers"
        }
    )    

    event.recipes.gtceu.assembler('mining_trapdoor_assemb')

        .itemInputs(
            "2x twilightforest:mining_planks",
        )

        .inputFluids(
            Fluid.of("gtceu:iron", 16)
        )

        .itemOutputs(
            "twilightforest:mining_trapdoor",
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(3)
    
    event.recipes.gtceu.assembler('mining_trapdoor_steel_assemb')

        .itemInputs(
            "2x twilightforest:mining_planks",
        )

        .inputFluids(
            Fluid.of("gtceu:steel", 16)
        )

        .itemOutputs(
            "2x twilightforest:mining_trapdoor",
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(3)

    event.shaped("twilightforest:mining_fence",

        [
            "PTP",
            "PTP",
            "PTP"
        ],

        {
            P:"twilightforest:mining_planks",
            T:"#balm:wooden_rods"
        }
    )    

    event.recipes.gtceu.assembler('mining_fence_assemb')

        .itemInputs(
            "twilightforest:mining_planks",
        )

        .itemOutputs(
            "twilightforest:mining_fence",
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(13)

    event.recipes.gtceu.assembler('mining_stairs_assemb')

        .itemInputs(
            "3x twilightforest:mining_planks",
        )

        .itemOutputs(
            "4x twilightforest:mining_stairs",
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(7)

    event.shaped("twilightforest:mining_fence_gate",

        [
            "F F",
            "TPT",
            "TPT"
        ],

        {
            P:"twilightforest:mining_planks",
            T:"#balm:wooden_rods",
            F:"minecraft:flint"
        }
    )    

    event.shaped("2x twilightforest:mining_fence_gate",

        [
            "SDS",
            "TPT",
            "TPT"
        ],

        {
            P:"twilightforest:mining_planks",
            T:"#balm:wooden_rods",
            S:"gtceu:iron_screw",
            D:"#forge:tools/screwdrivers"
        }
    )    

    event.recipes.gtceu.assembler('mining_fence_gate_assemb')

        .itemInputs(
            "2x twilightforest:mining_planks",
            "2x #balm:wooden_rods"
        )

        .itemOutputs(
            "twilightforest:mining_fence_gate",
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(2)

    event.shapeless('2x twilightforest:mining_slab',

        [
            "twilightforest:mining_planks",
            "#forge:tools/saws"
        ]
    )

    event.recipes.gtceu.cutter('mining_slab_lubricant')

        .itemInputs(
            "twilightforest:mining_planks"
        )

        .inputFluids(
            Fluid.of("gtceu:lubricant", 1)
        )

        .itemOutputs(   
            "2x twilightforest:mining_slab",
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.gtceu.cutter('mining_slab_dist_water')

        .itemInputs(
            "twilightforest:mining_planks"
        )

        .inputFluids(
            Fluid.of("gtceu:distilled_water", 3)
        )

        .itemOutputs(
            "2x twilightforest:mining_slab",
        )
        .duration(350)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.gtceu.cutter('mining_slab_water')

        .itemInputs(
            "twilightforest:mining_planks"
        )

        .inputFluids(
            Fluid.of("minecraft:water", 4)
        )

        .itemOutputs(
            "2x twilightforest:mining_slab",
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])

    event.shaped("twilightforest:mining_pressure_plate",

        [
            "BSB",
            "LPL",
            "BRB"
        ],

        {
            B:"gtceu:wood_bolt",
            S:"#forge:tools/mallets",
            L:"twilightforest:mining_slab",
            P:"gtceu:iron_spring",
            R:"#forge:tools/screwdrivers"
        }

    )    

    event.recipes.gtceu.assembler('mining_pressure_plate')

        .itemInputs(
            "2x twilightforest:mining_planks",
            "gtceu:iron_spring"
        )
        
        .itemOutputs(
            "twilightforest:mining_pressure_plate",
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(7)

    event.recipes.gtceu.cutter('mining_button_lubricant')

        .itemInputs(
            "twilightforest:mining_pressure_plate"
        )

        .inputFluids(
            Fluid.of("gtceu:lubricant", 1)
        )

        .itemOutputs(   
            "12x twilightforest:mining_button",
        )
        .duration(250)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.gtceu.cutter('mining_button_dist_water')

        .itemInputs(
            "twilightforest:mining_pressure_plate"
        )

        .inputFluids(
            Fluid.of("gtceu:distilled_water", 3)
        )

        .itemOutputs(
            "12x twilightforest:mining_button",
        )
        .duration(375)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.gtceu.cutter('mining_button_water')

        .itemInputs(
            "twilightforest:mining_pressure_plate"
        )

        .inputFluids(
            Fluid.of("minecraft:water", 4)
        )

        .itemOutputs(
            "12x twilightforest:mining_button",
        )
        .duration(450)
        .EUt(GTValues.VA[GTValues.ULV])
      
    event.shapeless("6x twilightforest:mining_button",

        [
            "#forge:tools/saws",
            "twilightforest:mining_pressure_plate"
        ]

    )    
 
    event.shapeless("twilightforest:mining_chest",

        [
            "minecraft:chest",
            "twilightforest:mining_planks"
        ]

    )    
  
    event.shaped("4x twilightforest:mining_stairs",

        [
            "P  ",
            "PP ",
            "PPP"
        ],

        {
            P:"twilightforest:mining_planks"
        }

    )
    
})