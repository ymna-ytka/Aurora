ServerEvents.recipes( event=> {

    event.shaped("naturesaura:wood_stand",

        [
            "OPF",
            "DPD",
            "SPS"
        ],

        {
            P:"gtceu:wood_plate",
            S:"gtceu:wood_screw",
            D:"gtceu:leaf_gold_dust",
            O:"#forge:tools/mallets",
            F:"#forge:tools/files"
        }

    )

    event.recipes.gtceu.cutter('ancient_slab_lubricant')
                    
        .itemInputs(
            "naturesaura:ancient_planks"
        )
                    
        .inputFluids(
            Fluid.of("gtceu:lubricant", 1)
        )
                    
        .itemOutputs(   
            "2x naturesaura:ancient_slab",
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
                        
    event.recipes.gtceu.cutter('ancient_slab_dist_water')
                    
        .itemInputs(
            "naturesaura:ancient_planks" 
        )
                    
        .inputFluids(
            Fluid.of("gtceu:distilled_water", 3)
        )
                    
        .itemOutputs(
            "2x naturesaura:ancient_slab",
        )
        .duration(350)
        .EUt(GTValues.VA[GTValues.ULV]) 
                        
    event.recipes.gtceu.cutter('ancient_slab_water')
                    
        .itemInputs(
        "naturesaura:ancient_planks"  
        )
                    
        .inputFluids(
            Fluid.of("minecraft:water", 4)
        )
                    
        .itemOutputs(
            "2x naturesaura:ancient_slab",
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])
                            
    event.shapeless("naturesaura:infused_slab",

        [
            "naturesaura:infused_stone",
            "#forge:tools/saws"    
        ]
    ) 
                                
            
    event.recipes.gtceu.cutter('infused_slab_lubricant')
                        
        .itemInputs(
            "naturesaura:infused_stone"
        )
                        
        .inputFluids(
            Fluid.of("gtceu:lubricant", 1)
        )
                    
        .itemOutputs(   
            "2x naturesaura:infused_slab",
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
                            
    event.recipes.gtceu.cutter('infused_slab_dist_water')
                        
        .itemInputs(
            "naturesaura:infused_stone" 
        )
                        
        .inputFluids(
            Fluid.of("gtceu:distilled_water", 3)
        )
                        
        .itemOutputs(
            "2x naturesaura:infused_slab",
        )
        .duration(350)
        .EUt(GTValues.VA[GTValues.ULV]) 
                            
    event.recipes.gtceu.cutter('infused_slab_water')
                        
        .itemInputs(
            "naturesaura:infused_stone"  
        )
                        
        .inputFluids(
            Fluid.of("minecraft:water", 4)
        )
                        
        .itemOutputs(
            "2x naturesaura:infused_slab",
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])

    event.shapeless("naturesaura:infused_brick_slab",

        [
            "naturesaura:infused_brick",
            "#forge:tools/saws"    
        ]
    ) 
                                    
                
    event.recipes.gtceu.cutter('infused_brick_slab_lubricant')
                            
        .itemInputs(
            "naturesaura:infused_brick"
        )
                            
        .inputFluids(
            Fluid.of("gtceu:lubricant", 1)
        )
                            
        .itemOutputs(   
            "2x naturesaura:infused_brick_slab",
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
                                
    event.recipes.gtceu.cutter('infused_brick_slab_dist_water')
                            
        .itemInputs(
            "naturesaura:infused_brick" 
        )
                
        .inputFluids(
            Fluid.of("gtceu:distilled_water", 3)
        )
                            
        .itemOutputs(
            "2x naturesaura:infused_brick_slab",
        )
        .duration(350)
        .EUt(GTValues.VA[GTValues.ULV]) 
                                
    event.recipes.gtceu.cutter('infused_brick_slab_water')
                            
        .itemInputs(
            "naturesaura:infused_brick"  
        )
                            
        .inputFluids(
            Fluid.of("minecraft:water", 4)
        )
                            
        .itemOutputs(
            "2x naturesaura:infused_brick_slab",
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.gtceu.farmer('gtceu:farmer/gold_leaf')
      
        .itemInputs(
            "16x naturesaura:gold_fiber"
        )

        .inputFluids(
            Fluid.of('gtceu:basic_liquid_fertilizer', 750)
        )

        .itemOutputs(
            "48x naturesaura:gold_leaf"
        )

        .duration(72000)
        .EUt(GTValues.VH[GTValues.LV])
     
    event.shaped("naturesaura:range_visualizer",

        [
            "SS ",
            "SLS",
            " ST"
        ],

        {
            S:"gtceu:infused_iron_screw",
            L:"gtceu:glass_lens",
            T:"naturesaura:ancient_stick"
        }

    )    

    event.shaped("naturesaura:placer",

        [
            "MSM",
            "ROR",
            "CDC"
        ],

        {
            S:"gtceu:mv_sensor",
            M:"gtceu:small_sponge_metal_gear",
            R:"gtceu:mv_robot_arm",
            O:"gtceu:double_infused_iron_plate",
            C:"gtceu:constantan_gear",
            D:"minecraft:dispenser"
        }

    )    

    event.shaped("naturesaura:pickup_stopper",

        [
            "DOD",
            "RSR",
            "MCM"
        ],

        {
            S:"gtceu:lv_field_generator",
            M:"gtceu:small_sponge_metal_gear",
            R:"gtceu:long_steel_rod",
            O:"gtceu:infused_iron_plate",
            C:"gtceu:constantan_gear",
            D:"minecraft:comparator"
        }

    )
    
    event.shaped("naturesaura:oak_generator",

        [
            "GAG",
            "FEF",
            "WDW"
        ],

        {
            G:"gtceu:small_sponge_metal_gear",
            A:'gtceu:overworld_aura_bucket',
            F:"gtceu:zinc_foil",
            E:"gtceu:lv_emitter",
            W:"gtceu:treated_wood_planks",
            D:"naturesaura:token_fear"
        }

    )

    event.shaped("naturesaura:moss_generator",

        [
            "GDG",
            "DFD",
            "EEE"
        ],

        {
            G:"naturesaura:token_joy",
            F:"gtceu:infused_iron_frame",
            E:"gtceu:emerald_plate",
            D:"gtceu:leaf_gold_dust"
        }

    )

    event.recipes.gtceu.assembler('hopper_upgrade')

        .itemInputs(
            "gtceu:mv_sensor",
            "2x gtceu:mv_robot_arm",
            "gtceu:mv_electric_motor",
            "gtceu:leaf_gold_dust",
            "2x gtceu:infused_iron_gear",
            "2x gtceu:magnetic_steel_plate"
        )

        .itemOutputs(
            "naturesaura:hopper_upgrade"
        )
        .circuit(1)
        .duration(600)
        .EUt(GTValues.VA[GTValues.MV])
    
    event.recipes.gtceu.assembler('grated_chute')

        .itemInputs(
            "gtceu:mv_electric_motor",
            "4x gtceu:leaf_gold_dust",
            "minecraft:hopper",
            "gtceu:infused_iron_frame",
            "gtceu:item_filter"
        )

        .itemOutputs(
            "naturesaura:grated_chute"
        )
        .circuit(1)
        .duration(400)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.assembler('flower_generator')

        .itemInputs(
            "2x gtceu:leaf_gold_dust",
            "2x gtceu:infused_iron_ring",
            "2x gtceu:treated_wood_planks",
            "6x kubejs:flower_bud",
            "2x naturesaura:token_joy",
            "gtceu:mv_robot_arm"
        )

        .itemOutputs(
            "naturesaura:flower_generator"
        )
        .circuit(1)
        .duration(600)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.assembler('aura_timer')

        .itemInputs(
            "8x gtceu:leaf_gold_dust",
            "4x gtceu:infused_iron_foil",
            "3x gtceu:stone_plate",
            "gtceu:infused_iron_frame",
            "gtceu:lv_emitter",
            "gtceu:lv_sensor",
            "4x naturesaura:bottle_two_the_rebottling"
        )

        .inputFluids(
            Fluid.of("gtceu:glass", 576)
        )

        .itemOutputs(
            "naturesaura:aura_timer"
        )
        .circuit(1)
        .duration(400)
        .EUt(GTValues.VA[GTValues.LV])
        
})