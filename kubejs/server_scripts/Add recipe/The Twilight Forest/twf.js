ServerEvents.recipes( event=> {

    event.shapeless('2x twilightforest:twilight_oak_planks',

        [
          'twilightforest:twilight_oak_log'  
        ]
    )

    event.shapeless('4x twilightforest:twilight_oak_planks',

        [
          'twilightforest:twilight_oak_log',  
          "#forge:tools/saws"  
        ]
    )

    event.recipes.gtceu.cutter('twilight_oak_lubricant')

        .itemInputs(
            'twilightforest:twilight_oak_log',  
        )

        .inputFluids(
            Fluid.of("gtceu:lubricant", 1)
        )

        .itemOutputs(
            "6x twilightforest:twilight_oak_planks",
            "2x gtceu:wood_dust"
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.gtceu.cutter('twilight_oak_dist_water')

        .itemInputs(
            "twilightforest:twilight_oak_log"
        )

        .inputFluids(
            Fluid.of("gtceu:distilled_water", 3)
        )

        .itemOutputs(
            "6x twilightforest:twilight_oak_planks",
            "2x gtceu:wood_dust"
        )
        .duration(350)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.gtceu.cutter('twilight_oak_plank_water')

        .itemInputs(
            "twilightforest:twilight_oak_log"
        )

        .inputFluids(
            Fluid.of("minecraft:water", 4)
        )

        .itemOutputs(
            "6x twilightforest:twilight_oak_planks",
            "2x gtceu:wood_dust"
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])
    
    event.recipes.farmersdelight.cutting("twilightforest:twilight_oak_door", "#minecraft:axes", ["twilightforest:twilight_oak_planks"] )    

    event.recipes.farmersdelight.cutting("twilightforest:twilight_oak_trapdoor", "#minecraft:axes", ["twilightforest:twilight_oak_planks"] )

    event.recipes.farmersdelight.cutting("twilightforest:twilight_oak_sign", "#minecraft:axes", ["twilightforest:twilight_oak_planks"] )

    event.recipes.farmersdelight.cutting("twilightforest:twilight_oak_hanging_sign", "#minecraft:axes", ["twilightforest:twilight_oak_planks"] )

    event.shaped("twilightforest:twilight_oak_sign",

        [
            "SSS",
            "CPC",
            "ATR"
        ],

        {
            S:"twilightforest:twilight_oak_slab",
            C:"gtceu:iron_screw",
            P:"twilightforest:twilight_oak_planks",
            T:"#balm:wooden_rods",
            A:"#forge:tools/saws",
            R:"#forge:tools/screwdrivers"
        }

    )

    event.shaped("2x twilightforest:twilight_oak_sign",

        [
            "SSS",
            "CPC",
            "ATR"
        ],

        {
            S:"twilightforest:twilight_oak_slab",
            C:"gtceu:steel_screw",
            P:"twilightforest:twilight_oak_planks",
            T:"#balm:wooden_rods",
            A:"#forge:tools/saws",
            R:"#forge:tools/screwdrivers"
        }

    )

    event.recipes.gtceu.assembler("twilight_oak_sign_assemb")

        .itemInputs(
            "twilightforest:twilight_oak_slab",
            "#balm:wooden_rods",
        )

        .inputFluids(
            Fluid.of("gtceu:iron", 16)
        )

        .itemOutputs(
            "3x twilightforest:twilight_oak_sign"
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(4)

    event.recipes.gtceu.assembler("twilight_oak_sign_steel_assemb")

        .itemInputs(
            "twilightforest:twilight_oak_slab",
            "#balm:wooden_rods",
        )

        .inputFluids(
            Fluid.of("gtceu:steel", 16)
        )

        .itemOutputs(
            "5x twilightforest:twilight_oak_sign"
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(4)

    event.shaped("twilightforest:twilight_oak_hanging_sign",

        [
            "SSS",
            "C C",
            "RIR"
        ],

        {
            S:"twilightforest:twilight_oak_slab",
            C:"minecraft:chain",
            R:"gtceu:iron_ring",
            I:"balm:wooden_rods"
        }

    )    

    event.shaped("2x twilightforest:twilight_oak_hanging_sign",

        [
            "SSS",
            "C C",
            "RIR"
        ],

        {
            S:"twilightforest:twilight_oak_slab",
            C:"minecraft:chain",
            R:"gtceu:steel_ring",
            I:"balm:wooden_rods"
        }

    )    

    event.recipes.gtceu.assembler("twilight_oak_hanging_sign_assemb")

        .itemInputs(
            "3x twilightforest:twilight_oak_slab",
            "twilightforest:twilight_oak_sign",
            "minecraft:chain"
        )

        .itemOutputs(
            "twilightforest:twilight_oak_hanging_sign"
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(5)

    event.shaped("twilightforest:twilight_oak_boat",

        [
            "PSP",
            "PKP",
            "LLL"
        ],

        {
            P:"twilightforest:twilight_oak_planks",
            S:"#minecraft:shovels",
            K:"#forge:tools/knives",
            L:"twilightforest:twilight_oak_slab"
        }

    )    

    event.recipes.gtceu.assembler("twilight_oak_boat_assemb")

        .itemInputs(
            "5x twilightforest:twilight_oak_planks",
        )

        .itemOutputs(
            "twilightforest:twilight_oak_boat"
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(15)

    event.shaped("twilightforest:twilight_oak_chest_boat",

        [
            " B ",
            "OCO",
            " W "
        ],

        {
            B:"twilightforest:twilight_oak_boat",
            O:"gtceu:wood_bolt",
            C:"minecraft:chest",
            W:"#forge:tools/wrenches"
        }

    )
    event.recipes.gtceu.assembler("twilight_oak_boat_chest_assemb")

        .itemInputs(
            "5x twilightforest:twilight_oak_planks",
            "minecraft:chest"
        )

        .itemOutputs(
            "twilightforest:twilight_oak_boat_chest"
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(16)
    

    event.shaped("twilightforest:twilight_oak_door",

        [
            "PTS",
            "PRI",
            "PPA"
        ],

        {
            P:"twilightforest:twilight_oak_planks",
            T:"twilightforest:twilight_oak_trapdoor",
            R:"gtceu:iron_ring",
            I:"gtceu:iron_screw",
            S:"#forge:tools/screwdrivers",
            A:"#forge:tools/saws"
        }
    )

    event.recipes.gtceu.assembler('twilight_oak_door_assemb')

        .itemInputs(
            "4x twilightforest:twilight_oak_planks",
            "twilightforest:twilight_oak_trapdoor",
        )

        .inputFluids(
            Fluid.of("gtceu:iron", 16)
        )

        .itemOutputs(
            "twilightforest:twilight_oak_door",
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])

    event.shaped("twilightforest:twilight_oak_trapdoor",

        [
            "IPT",
            "PSP",
            "TPI"
        ],

        {
            P:"twilightforest:twilight_oak_planks",
            T:"#balm:wooden_rods",
            I:"gtceu:iron_bolt",
            S:"#forge:tools/screwdrivers"
        }
    )
   
    event.shaped("2x twilightforest:twilight_oak_trapdoor",

        [
            "IPT",
            "PSP",
            "TPI"
        ],

        {
            P:"twilightforest:twilight_oak_planks",
            T:"#balm:wooden_rods",
            I:"gtceu:steel_bolt",
            S:"#forge:tools/screwdrivers"
        }
    )    

    event.recipes.gtceu.assembler('twilight_oak_trapdoor_assemb')

        .itemInputs(
            "2x twilightforest:twilight_oak_planks",
        )

        .inputFluids(
            Fluid.of("gtceu:iron", 16)
        )

        .itemOutputs(
            "twilightforest:twilight_oak_trapdoor",
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(3)
    
    event.recipes.gtceu.assembler('twilight_oak_trapdoor_steel_assemb')

        .itemInputs(
            "2x twilightforest:twilight_oak_planks",
        )

        .inputFluids(
            Fluid.of("gtceu:steel", 16)
        )

        .itemOutputs(
            "2x twilightforest:twilight_oak_trapdoor",
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(3)

    event.shaped("twilightforest:twilight_oak_fence",

        [
            "PTP",
            "PTP",
            "PTP"
        ],

        {
            P:"twilightforest:twilight_oak_planks",
            T:"#balm:wooden_rods"
        }
    )    

    event.recipes.gtceu.assembler('twilight_oak_fence_assemb')

        .itemInputs(
            "twilightforest:twilight_oak_planks",
        )

        .itemOutputs(
            "twilightforest:twilight_oak_fence",
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(13)

    event.recipes.gtceu.assembler('twilight_oak_stairs_assemb')

        .itemInputs(
            "3x twilightforest:twilight_oak_planks",
        )

        .itemOutputs(
            "4x twilightforest:twilight_oak_stairs",
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(7)

    event.shaped("twilightforest:twilight_oak_fence_gate",

        [
            "F F",
            "TPT",
            "TPT"
        ],

        {
            P:"twilightforest:twilight_oak_planks",
            T:"#balm:wooden_rods",
            F:"minecraft:flint"
        }
    )    

    event.shaped("twilightforest:twilight_oak_fence_gate",

        [
            "SDS",
            "TPT",
            "TPT"
        ],

        {
            P:"twilightforest:twilight_oak_planks",
            T:"#balm:wooden_rods",
            S:"gtceu:iron_screw",
            D:"#forge:tools/screwdrivers"
        }
    )    

    event.recipes.gtceu.assembler('twilight_oak_fence_gate_assemb')

        .itemInputs(
            "2x twilightforest:twilight_oak_planks",
            "2x #balm:wooden_rods"
        )

        .itemOutputs(
            "twilightforest:twilight_oak_fence_gate",
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(2)

    event.shapeless('2x twilightforest:twilight_oak_slab',

        [
            "twilightforest:twilight_oak_planks",
            "#forge:tools/saws"
        ]
    )

    event.recipes.gtceu.cutter('twilight_oak_slab_lubricant')

        .itemInputs(
            "twilightforest:twilight_oak_planks"
        )

        .inputFluids(
            Fluid.of("gtceu:lubricant", 1)
        )

        .itemOutputs(   
            "2x twilightforest:twilight_oak_slab",
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.gtceu.cutter('twilight_oak_slab_dist_water')

        .itemInputs(
            "twilightforest:twilight_oak_planks"
        )

        .inputFluids(
            Fluid.of("gtceu:distilled_water", 3)
        )

        .itemOutputs(
            "2x twilightforest:twilight_oak_slab",
        )
        .duration(350)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.gtceu.cutter('twilight_oak_slab_water')

        .itemInputs(
            "twilightforest:twilight_oak_planks"
        )

        .inputFluids(
            Fluid.of("minecraft:water", 4)
        )

        .itemOutputs(
            "2x twilightforest:twilight_oak_slab",
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])

    event.shaped("twilightforest:twilight_oak_pressure_plate",

        [
            "BSB",
            "LPL",
            "BRB"
        ],

        {
            B:"gtceu:wood_bolt",
            S:"#forge:tools/mallets",
            L:"twilightforest:twilight_oak_slab",
            P:"gtceu:iron_spring",
            R:"#forge:tools/screwdrivers"
        }

    )    

    event.recipes.gtceu.assembler('twilight_oak_pressure_plate_assemb')

        .itemInputs(
            "2x twilightforest:twilight_oak_planks",
            "gtceu:iron_spring"
        )
        
        .itemOutputs(
            "twilightforest:twilight_oak_pressure_plate",
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(7)

    event.recipes.gtceu.cutter('twilight_oak_pressure_plate_lubricant')

        .itemInputs(
            "twilightforest:twilight_oak_pressure_plate"
        )

        .inputFluids(
            Fluid.of("gtceu:lubricant", 1)
        )

        .itemOutputs(   
            "12x twilightforest:twilight_oak_button",
        )
        .duration(250)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.gtceu.cutter('twilight_oak_pressure_plate_dist_water')

        .itemInputs(
            "twilightforest:twilight_oak_pressure_plate"
        )

        .inputFluids(
            Fluid.of("gtceu:distilled_water", 3)
        )

        .itemOutputs(
            "12x twilightforest:twilight_oak_button",
        )
        .duration(375)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.gtceu.cutter('twilight_oak_pressure_plate_water')

        .itemInputs(
            "twilightforest:twilight_oak_pressure_plate"
        )

        .inputFluids(
            Fluid.of("minecraft:water", 4)
        )

        .itemOutputs(
            "12x twilightforest:twilight_oak_button",
        )
        .duration(450)
        .EUt(GTValues.VA[GTValues.ULV])
      
    event.shapeless("6x twilightforest:twilight_oak_button",

        [
            "forge:tools/saws",
            "twilightforest:twilight_oak_pressure_plate"
        ]

    )    
 
    event.shapeless("twilightforest:twilight_oak_chest",

        [
            "minecraft:chest",
            "twilightforest:twilight_oak_planks"
        ]

    )    
    
})