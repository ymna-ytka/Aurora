ServerEvents.recipes( event=> {

    event.shapeless("tflostblocks:large_mazestone_brick_slab",

        [
            "tflostblocks:large_mazestone_bricks",
            "#forge:tools/saws"    
        ]
        ) 
       
    event.recipes.gtceu.cutter('tflostblocks:large_mazestone_brick_slab_lubricant')
    
        .itemInputs(
            "tflostblocks:large_mazestone_bricks"
        )
    
        .inputFluids(
            Fluid.of("gtceu:lubricant", 1)
        )
    
        .itemOutputs(   
            "2x tflostblocks:large_mazestone_brick_slab",
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
        
    event.recipes.gtceu.cutter('mazestone_dist_water')
    
        .itemInputs(
            "tflostblocks:large_mazestone_bricks" 
        )
    
        .inputFluids(
            Fluid.of("gtceu:distilled_water", 3)
        )
    
        .itemOutputs(
            "2x tflostblocks:large_mazestone_brick_slab",
        )
        .duration(350)
        .EUt(GTValues.VA[GTValues.ULV]) 
        
    event.recipes.gtceu.cutter('mazestone_water')
    
        .itemInputs(
            "tflostblocks:large_mazestone_bricks"  
        )
    
        .inputFluids(
            Fluid.of("minecraft:water", 4)
        )
    
        .itemOutputs(
            "2x tflostblocks:large_mazestone_brick_slab",
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])

    event.shapeless("tflostblocks:stone_tile_slab",
        [
            "tflostblocks:stone_tiles",
            "#forge:tools/saws"    
        ]
    ) 
                                                                    
                                                
    event.recipes.gtceu.cutter('stone_tile_slab_lubricant')
                                                            
        .itemInputs(
            "tflostblocks:stone_tiles"
        )
                                                            
        .inputFluids(
            Fluid.of("gtceu:lubricant", 1)
        )
                                                            
        .itemOutputs(   
            "2x tflostblocks:stone_tile_slab",
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
                                                                
    event.recipes.gtceu.cutter('stone_tile_slab_dist_water')
                                                            
        .itemInputs(
           "tflostblocks:stone_tiles" 
        )
                                                            
        .inputFluids(
            Fluid.of("gtceu:distilled_water", 3)
        )
                                                            
        .itemOutputs(
            "2x tflostblocks:stone_tile_slab",
        )
        .duration(350)
        .EUt(GTValues.VA[GTValues.ULV]) 
                                                                
    event.recipes.gtceu.cutter('stone_tile_slab_water')
                                                            
        .itemInputs(
            "tflostblocks:stone_tiles"  
        )
                                                            
        .inputFluids(
            Fluid.of("minecraft:water", 4)
        )
                                                            
        .itemOutputs(
            "2x tflostblocks:stone_tile_slab",
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])

     event.shapeless("tflostblocks:mossy_stone_tile_slab",
        [
            "tflostblocks:mossy_stone_tiles",
            "#forge:tools/saws"    
        ]
    ) 
                                                                        
                                                    
    event.recipes.gtceu.cutter('mossy_stone_tile_slab_lubricant')
                                                                
        .itemInputs(
            "tflostblocks:mossy_stone_tiles"
        )
                                                                
        .inputFluids(
            Fluid.of("gtceu:lubricant", 1)
        )
                                                                
        .itemOutputs(   
            "2x tflostblocks:mossy_stone_tile_slab",
    )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
                                                                    
    event.recipes.gtceu.cutter('mossy_stone_tile_slab_dist_water')
                                                                
        .itemInputs(
            "tflostblocks:mossy_stone_tiles" 
        )
                                                                
        .inputFluids(
            Fluid.of("gtceu:distilled_water", 3)
        )
                                                                
        .itemOutputs(
            "2x tflostblocks:mossy_stone_tile_slab",
        )
        .duration(350)
        .EUt(GTValues.VA[GTValues.ULV]) 
                                                                    
    event.recipes.gtceu.cutter('mossy_stone_tile_slab_water')
                                                                
        .itemInputs(
            "tflostblocks:mossy_stone_tiles"  
        )
                                                                
        .inputFluids(
            Fluid.of("minecraft:water", 4)
        )
                                                                
        .itemOutputs(
            "2x tflostblocks:mossy_stone_tile_slab",
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])

    event.shapeless("tflostblocks:castle_brick_slab",
        [
            "twilightforest:castle_brick",
            "#forge:tools/saws"    
        ]
    ) 
                                                                        
                                                    
    event.recipes.gtceu.cutter('castle_brick_slab_lubricant')
                                                                
        .itemInputs(
            "twilightforest:castle_brick"
        )
                                                                
        .inputFluids(
            Fluid.of("gtceu:lubricant", 1)
        )
                                                                
        .itemOutputs(   
            "2x tflostblocks:castle_brick_slab",
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
                                                                    
    event.recipes.gtceu.cutter('castle_brick_slab_dist_water')
                                                                
        .itemInputs(
            "twilightforest:castle_brick" 
        )
                                                                
        .inputFluids(
            Fluid.of("gtceu:distilled_water", 3)
        )
                                                                
        .itemOutputs(
            "2x tflostblocks:castle_brick_slab",
        )
        .duration(350)
        .EUt(GTValues.VA[GTValues.ULV]) 
                                                                    
    event.recipes.gtceu.cutter('castle_brick_slab_water')
                                                                
        .itemInputs(
            "twilightforest:castle_brick"  
        )
                                                                
        .inputFluids(
            Fluid.of("minecraft:water", 4)
        )
                                                                
        .itemOutputs(
            "2x tflostblocks:castle_brick_slab",
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])
        
    event.shapeless("tflostblocks:castle_brick_tile_slab",
        [
            "tflostblocks:castle_brick_tiles",
            "#forge:tools/saws"    
        ]
    ) 
                                                                            
                                                        
    event.recipes.gtceu.cutter('castle_brick_tile_slab_lubricant')
                                                                    
        .itemInputs(
            "tflostblocks:castle_brick_tiles"
        )
                                                                    
        .inputFluids(
            Fluid.of("gtceu:lubricant", 1)
        )
                                                                    
        .itemOutputs(   
            "2x tflostblocks:castle_brick_tile_slab",
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
                                                                        
    event.recipes.gtceu.cutter('castle_brick_tile_slab_dist_water')
                                                                    
        .itemInputs(
            "tflostblocks:castle_brick_tiles" 
        )
                                                                    
        .inputFluids(
            Fluid.of("gtceu:distilled_water", 3)
        )
                                                                    
        .itemOutputs(
            "2x tflostblocks:castle_brick_tile_slab",
        )
        .duration(350)
        .EUt(GTValues.VA[GTValues.ULV]) 
                                                                        
    event.recipes.gtceu.cutter('castle_brick_tile_slab_water')
                                                                    
        .itemInputs(
            "tflostblocks:castle_brick_tiles"  
        )
                                                                    
        .inputFluids(
            Fluid.of("minecraft:water", 4)
        )
                                                                    
        .itemOutputs(
            "2x tflostblocks:castle_brick_tile_slab",
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])
        
    event.shapeless("tflostblocks:bold_castle_brick_slab",
        [
            "twilightforest:bold_castle_brick_pillar",
            "#forge:tools/saws"    
        ]
    ) 
                                                                            
                                                        
    event.recipes.gtceu.cutter('bold_castle_brick_slab_lubricant')
                                                                    
        .itemInputs(
            "twilightforest:bold_castle_brick_pillar"
        )
                                                                    
        .inputFluids(
            Fluid.of("gtceu:lubricant", 1)
        )
                                                                    
        .itemOutputs(   
            "2x tflostblocks:bold_castle_brick_slab",
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
                                                                        
    event.recipes.gtceu.cutter('bold_castle_brick_slab_dist_water')
                                                                    
        .itemInputs(
            "twilightforest:bold_castle_brick_pillar" 
        )
                                                                    
        .inputFluids(
            Fluid.of("gtceu:distilled_water", 3)
        )
                                                                    
        .itemOutputs(
            "2x tflostblocks:bold_castle_brick_slab",
        )
        .duration(350)
        .EUt(GTValues.VA[GTValues.ULV]) 
                                                                        
    event.recipes.gtceu.cutter('bold_castle_brick_slab_water')
                                                                    
        .itemInputs(
            "twilightforest:bold_castle_brick_pillar"  
        )
                                                                    
        .inputFluids(
            Fluid.of("minecraft:water", 4)
        )
                                                                    
        .itemOutputs(
            "2x tflostblocks:bold_castle_brick_slab",
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])
        
    event.shapeless("tflostblocks:worn_castle_brick_slab",
        [
            "twilightforest:worn_castle_brick",
            "#forge:tools/saws"    
        ]
    ) 
                                                                                
                                                            
    event.recipes.gtceu.cutter('worn_castle_brick_slab_lubricant')
                                                                        
        .itemInputs(
            "twilightforest:worn_castle_brick"
        )
                                                                        
        .inputFluids(
            Fluid.of("gtceu:lubricant", 1)
        )
                                                                        
        .itemOutputs(   
            "2x tflostblocks:worn_castle_brick_slab",
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
                                                                            
    event.recipes.gtceu.cutter('worn_castle_brick_slab_dist_water')
                                                                        
        .itemInputs(
            "twilightforest:worn_castle_brick" 
        )
                                                                        
        .inputFluids(
            Fluid.of("gtceu:distilled_water", 3)
        )
                                                                        
        .itemOutputs(
            "2x tflostblocks:worn_castle_brick_slab",
        )
        .duration(350)
        .EUt(GTValues.VA[GTValues.ULV]) 
                                                                            
    event.recipes.gtceu.cutter('worn_castle_brick_slab_water')
                                                                        
        .itemInputs(
            "twilightforest:worn_castle_brick"  
        )
                                                                        
        .inputFluids(
            Fluid.of("minecraft:water", 4)
        )
                                                                        
        .itemOutputs(
            "2x tflostblocks:worn_castle_brick_slab",
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])

    event.shapeless("tflostblocks:cracked_castle_brick_slab",
        [
            "twilightforest:cracked_castle_brick",
            "#forge:tools/saws"    
        ]
    ) 
                                                                                    
                                                                
    event.recipes.gtceu.cutter('cracked_castle_brick_slab_lubricant')
                                                                            
        .itemInputs(
            "twilightforest:cracked_castle_brick"
        )
                                                                            
        .inputFluids(
            Fluid.of("gtceu:lubricant", 1)
        )
                                                                        
        .itemOutputs(   
            "2x tflostblocks:cracked_castle_brick_slab",
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
                                                                                
    event.recipes.gtceu.cutter('cracked_castle_brick_slab_dist_water')
                                                                        
        .itemInputs(
            "twilightforest:cracked_castle_brick" 
        )
                                                                    
        .inputFluids(
            Fluid.of("gtceu:distilled_water", 3)
        )
                                                                        
        .itemOutputs(
            "2x tflostblocks:cracked_castle_brick_slab",
        )
        .duration(350)
        .EUt(GTValues.VA[GTValues.ULV]) 
                                                                                
    event.recipes.gtceu.cutter('cracked_castle_brick_slab_water')
                                                                            
        .itemInputs(
            "twilightforest:cracked_castle_brick"  
        )
                                                                            
        .inputFluids(
            Fluid.of("minecraft:water", 4)
        )
                                                                            
        .itemOutputs(
            "2x tflostblocks:cracked_castle_brick_slab",
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])

    event.shapeless("tflostblocks:encased_castle_brick_slab",
        [
            "twilightforest:encased_castle_brick_pillar",
            "#forge:tools/saws"    
        ]
    ) 
                                                                                        
                                                                    
    event.recipes.gtceu.cutter('encased_castle_brick_slab_lubricant')
                                                                            
        .itemInputs(
            "twilightforest:encased_castle_brick_pillar"
        )
                                                                                
        .inputFluids(
            Fluid.of("gtceu:lubricant", 1)
        )
                                                                            
        .itemOutputs(   
            "2x tflostblocks:encased_castle_brick_slab",
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
                                                                                    
    event.recipes.gtceu.cutter('encased_castle_brick_slab_dist_water')
                                                                            
        .itemInputs(
            "twilightforest:encased_castle_brick_pillar" 
        )
                                                                    
        .inputFluids(
            Fluid.of("gtceu:distilled_water", 3)
        )
                                                                            
        .itemOutputs(
            "2x tflostblocks:encased_castle_brick_slab",
        )
        .duration(350)
        .EUt(GTValues.VA[GTValues.ULV]) 
                                                                                
    event.recipes.gtceu.cutter('encased_castle_brick_slab_water')
                                                                                
        .itemInputs(
            "twilightforest:encased_castle_brick_pillar"  
        )
                                                                                
        .inputFluids(
            Fluid.of("minecraft:water", 4)
        )
                                                                                
        .itemOutputs(
            "2x tflostblocks:encased_castle_brick_slab",
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])
        
    event.shapeless("tflostblocks:mossy_castle_brick_slab",
        [
            "twilightforest:mossy_castle_brick",
            "#forge:tools/saws"    
        ]
    ) 
                                                                                        
                                                                    
    event.recipes.gtceu.cutter('mossy_castle_brick_slab_lubricant')
                                                                                
        .itemInputs(
            "twilightforest:mossy_castle_brick"
        )
                                                                                
        .inputFluids(
            Fluid.of("gtceu:lubricant", 1)
        )
                                                                            
        .itemOutputs(   
            "2x tflostblocks:mossy_castle_brick_slab",
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
                                                                                    
    event.recipes.gtceu.cutter('mossy_castle_brick_slab_dist_water')
                                                                            
        .itemInputs(
            "twilightforest:mossy_castle_brick" 
        )
                                                                        
        .inputFluids(
            Fluid.of("gtceu:distilled_water", 3)
        )
                                                                            
        .itemOutputs(
            "2x tflostblocks:mossy_castle_brick_slab",
        )
        .duration(350)
        .EUt(GTValues.VA[GTValues.ULV]) 
                                                                                    
    event.recipes.gtceu.cutter('mossy_castle_brick_slab_water')
                                                                                
        .itemInputs(
            "twilightforest:mossy_castle_brick"  
        )
                                                                                
        .inputFluids(
            Fluid.of("minecraft:water", 4)
        )
                                                                                
        .itemOutputs(
            "2x tflostblocks:mossy_castle_brick_slab",
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])

    event.shapeless("tflostblocks:deadrock_slab",
        [
            "twilightforest:deadrock",
            "#forge:tools/saws"    
        ]
    ) 
                                                                                            
                                                                        
    event.recipes.gtceu.cutter('deadrock_slab_lubricant')
                                                                                    
        .itemInputs(
            "twilightforest:deadrock"
        )
                                                                                    
        .inputFluids(
            Fluid.of("gtceu:lubricant", 1)
        )
                                                                                
        .itemOutputs(   
            "2x tflostblocks:deadrock_slab",
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
                                                                                        
    event.recipes.gtceu.cutter('deadrock_slab_dist_water')
                                                                                
        .itemInputs(
            "twilightforest:deadrock" 
        )
                                                                            
        .inputFluids(
            Fluid.of("gtceu:distilled_water", 3)
        )
                                                                                
        .itemOutputs(
            "2x tflostblocks:deadrock_slab",
        )
        .duration(350)
        .EUt(GTValues.VA[GTValues.ULV]) 
                                                                                        
    event.recipes.gtceu.cutter('deadrock_slab_water')
                                                                                    
        .itemInputs(
            "twilightforest:deadrock"  
        )
                                                                                    
        .inputFluids(
            Fluid.of("minecraft:water", 4)
        )
                                                                                    
        .itemOutputs(
            "2x tflostblocks:deadrock_slab",
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])

    event.shapeless("tflostblocks:cracked_deadrock_slab",
        [
            "twilightforest:cracked_deadrock",
            "#forge:tools/saws"    
        ]
    ) 
                                                                                                
                                                                            
    event.recipes.gtceu.cutter('cracked_deadrock_slab_lubricant')
                                                                                        
        .itemInputs(
            "twilightforest:cracked_deadrock"
        )
                                                                                    
        .inputFluids(
            Fluid.of("gtceu:lubricant", 1)
        )
                                                                                    
        .itemOutputs(   
            "2x tflostblocks:cracked_deadrock_slab",
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
                                                                                            
    event.recipes.gtceu.cutter('cracked_deadrock_slab_dist_water')
                                                                                    
        .itemInputs(
            "twilightforest:cracked_deadrock" 
        )
                                                                            
        .inputFluids(
            Fluid.of("gtceu:distilled_water", 3)
        )
                                                                                
        .itemOutputs(
            "2x tflostblocks:cracked_deadrock_slab",
        )
        .duration(350)
        .EUt(GTValues.VA[GTValues.ULV]) 
                                                                                        
    event.recipes.gtceu.cutter('cracked_deadrock_slab_water')
                                                                                        
        .itemInputs(
            "twilightforest:cracked_deadrock"  
        )
                                                                                        
        .inputFluids(
            Fluid.of("minecraft:water", 4)
        )
                                                                                        
        .itemOutputs(
            "2x tflostblocks:cracked_deadrock_slab",
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])

    event.shapeless("tflostblocks:weathered_deadrock_slab",
        [
            "twilightforest:weathered_deadrock",
            "#forge:tools/saws"    
        ]
    ) 
                                                                                                    
                                                                                
    event.recipes.gtceu.cutter('weathered_deadrock_slab_lubricant')
                                                                                            
        .itemInputs(
            "twilightforest:weathered_deadrock"
        )
                                                                                        
        .inputFluids(
            Fluid.of("gtceu:lubricant", 1)
        )
                                                                                        
        .itemOutputs(   
            "2x tflostblocks:weathered_deadrock_slab",
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
                                                                                                
    event.recipes.gtceu.cutter('weathered_deadrock_slab_dist_water')
                                                                                        
        .itemInputs(
            "twilightforest:weathered_deadrock" 
        )
                                                                                
        .inputFluids(
            Fluid.of("gtceu:distilled_water", 3)
        )
                                                                                    
        .itemOutputs(
            "2x tflostblocks:weathered_deadrock_slab",
        )
        .duration(350)
        .EUt(GTValues.VA[GTValues.ULV]) 
                                                                                            
    event.recipes.gtceu.cutter('weathered_deadrock_slab_water')
                                                                                            
        .itemInputs(
            "twilightforest:weathered_deadrock"  
        )
                                                                                            
        .inputFluids(
            Fluid.of("minecraft:water", 4)
        )
                                                                                            
        .itemOutputs(
            "2x tflostblocks:weathered_deadrock_slab",
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])

    event.shapeless("tflostblocks:deadrock_brick_slab",
        [
            "tflostblocks:deadrock_bricks",
            "#forge:tools/saws"    
        ]
    ) 
                                                                                                        
                                                                                    
    event.recipes.gtceu.cutter('deadrock_brick_slab_lubricant')
                                                                                                
        .itemInputs(
            "tflostblocks:deadrock_bricks"
        )
                                                                                            
        .inputFluids(
            Fluid.of("gtceu:lubricant", 1)
        )
                                                                                            
        .itemOutputs(   
            "2x tflostblocks:deadrock_brick_slab",
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
                                                                                                    
    event.recipes.gtceu.cutter('deadrock_brick_slab_dist_water')
                                                                                            
        .itemInputs(
            "tflostblocks:deadrock_bricks" 
        )
                                                                                    
        .inputFluids(
            Fluid.of("gtceu:distilled_water", 3)
        )
                                                                                        
        .itemOutputs(
            "2x tflostblocks:deadrock_brick_slab",
        )
        .duration(350)
        .EUt(GTValues.VA[GTValues.ULV]) 
                                                                                                
    event.recipes.gtceu.cutter('deadrock_brick_slab_water')
                                                                                                
        .itemInputs(
            "tflostblocks:deadrock_bricks"  
        )
                                                                                                
        .inputFluids(
            Fluid.of("minecraft:water", 4)
        )
                                                                                                
        .itemOutputs(
            "2x tflostblocks:deadrock_brick_slab",
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])

    event.shapeless("tflostblocks:mazestone_slab",
        [
            "twilightforest:mazestone",
            "#forge:tools/saws"    
        ]
    ) 
                                                                                                            
                                                                                        
    event.recipes.gtceu.cutter('mazestone_slab_lubricant')
                                                                                                    
        .itemInputs(
            "twilightforest:mazestone"
        )
                                                                                                
        .inputFluids(
            Fluid.of("gtceu:lubricant", 1)
        )
                                                                                                
        .itemOutputs(   
            "2x tflostblocks:mazestone_slab",
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
                                                                                                        
    event.recipes.gtceu.cutter('mazestone_slab_dist_water')
                                                                                                
        .itemInputs(
            "twilightforest:mazestone" 
        )
                                                                                        
        .inputFluids(
            Fluid.of("gtceu:distilled_water", 3)
        )
                                                                                            
        .itemOutputs(
            "2x tflostblocks:mazestone_slab",
        )
        .duration(350)
        .EUt(GTValues.VA[GTValues.ULV]) 
                                                                                                    
    event.recipes.gtceu.cutter('mazestone_slab_water')
                                                                                                    
        .itemInputs(
            "twilightforest:mazestone"  
        )
                                                                                                    
        .inputFluids(
            Fluid.of("minecraft:water", 4)
        )
                                                                                                    
        .itemOutputs(
            "2x tflostblocks:mazestone_slab",
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])

    event.shapeless("tflostblocks:cut_mazestone_slab",
        [
            "twilightforest:cut_mazestone",
            "#forge:tools/saws"    
        ]
    ) 
                                                                                                                
                                                                                            
    event.recipes.gtceu.cutter('cut_mazestone_slab_lubricant')
                                                                                                        
        .itemInputs(
            "twilightforest:cut_mazestone"
        )
                                                                                                    
        .inputFluids(
            Fluid.of("gtceu:lubricant", 1)
        )
                                                                                                    
        .itemOutputs(   
            "2x tflostblocks:cut_mazestone_slab",
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
                                                                                                            
    event.recipes.gtceu.cutter('cut_mazestone_slab_dist_water')
                                                                                                
        .itemInputs(
            "twilightforest:cut_mazestone" 
        )
                                                                                        
        .inputFluids(
            Fluid.of("gtceu:distilled_water", 3)
        )
                                                                                                
        .itemOutputs(
            "2x tflostblocks:cut_mazestone_slab",
        )
        .duration(350)
        .EUt(GTValues.VA[GTValues.ULV]) 
                                                                                                        
    event.recipes.gtceu.cutter('cut_mazestone_slab_water')
                                                                                                        
        .itemInputs(
            "twilightforest:cut_mazestone"  
        )
                                                                                                        
        .inputFluids(
            Fluid.of("minecraft:water", 4)
        )
                                                                                                        
        .itemOutputs(
            "2x tflostblocks:cut_mazestone_slab",
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])
        
    event.shapeless("tflostblocks:mazestone_brick_slab",
        [
            "twilightforest:mazestone_brick",
            "#forge:tools/saws"    
        ]
    ) 
                                                                                                                    
                                                                                                
    event.recipes.gtceu.cutter('mazestone_brick_slab_lubricant')
                                                                                                            
        .itemInputs(
            "twilightforest:mazestone_brick"
        )
                                                                                                        
        .inputFluids(
            Fluid.of("gtceu:lubricant", 1)
        )
                                                                                                        
        .itemOutputs(   
            "2x tflostblocks:mazestone_brick_slab",
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
                                                                                                                
    event.recipes.gtceu.cutter('mazestone_brick_slab_dist_water')
                                                                                                    
        .itemInputs(
            "twilightforest:mazestone_brick" 
        )
                                                                                            
        .inputFluids(
            Fluid.of("gtceu:distilled_water", 3)
        )
                                                                                                    
        .itemOutputs(
            "2x tflostblocks:mazestone_brick_slab",
        )
        .duration(350)
        .EUt(GTValues.VA[GTValues.ULV]) 
                                                                                                            
    event.recipes.gtceu.cutter('mazestone_brick_slab_water')
                                                                                                            
        .itemInputs(
            "twilightforest:mazestone_brick"  
        )
                                                                                                            
        .inputFluids(
            Fluid.of("minecraft:water", 4)
        )
                                                                                                            
        .itemOutputs(
            "2x tflostblocks:mazestone_brick_slab",
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])
        
    event.shapeless("tflostblocks:mossy_mazestone_brick_slab",
        [
            "twilightforest:mossy_mazestone",
            "#forge:tools/saws"    
        ]
    ) 
                                                                                                                        
                                                                                                    
    event.recipes.gtceu.cutter('mossy_mazestone_brick_slab_lubricant')
                                                                                                            
        .itemInputs(
            "twilightforest:mossy_mazestone"
        )
                                                                                                            
        .inputFluids(
            Fluid.of("gtceu:lubricant", 1)
        )
                                                                                                            
        .itemOutputs(   
            "2x tflostblocks:mossy_mazestone_brick_slab",
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
                                                                                                                    
    event.recipes.gtceu.cutter('mossy_mazestone_brick_slab_dist_water')
                                                                                                        
        .itemInputs(
            "twilightforest:mossy_mazestone" 
        )
                                                                                                
        .inputFluids(
            Fluid.of("gtceu:distilled_water", 3)
        )
                                                                                                        
        .itemOutputs(
            "2x tflostblocks:mossy_mazestone_brick_slab",
        )
        .duration(350)
        .EUt(GTValues.VA[GTValues.ULV]) 
                                                                                                            
    event.recipes.gtceu.cutter('mossy_mazestone_brick_slab_water')
                                                                                                                
        .itemInputs(
            "twilightforest:mossy_mazestone"  
        )
                                                                                                                
        .inputFluids(
            Fluid.of("minecraft:water", 4)
        )
                                                                                                                
        .itemOutputs(
            "2x tflostblocks:mossy_mazestone_brick_slab",
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])

    event.shapeless("tflostblocks:nagastone_slab_right",
        [
            "twilightforest:etched_nagastone",
            "#forge:tools/saws"    
        ]
    ) 
                                                                                                                                
                                                                                                            
    event.recipes.gtceu.cutter('nagastone_slab_right_and_left_lubricant')
                                                                                                                
        .itemInputs(
            "twilightforest:etched_nagastone"
        )
                                                                                                                
        .inputFluids(
            Fluid.of("gtceu:lubricant", 1)
        )
                                                                                                                    
        .itemOutputs(   
            "tflostblocks:nagastone_slab_left",
            "tflostblocks:nagastone_slab_right",
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
                                                                                                                            
    event.recipes.gtceu.cutter('nagastone_slab_right_and_left_dist_water')
                                                                                                                
        .itemInputs(
            "twilightforest:etched_nagastone" 
        )
                                                                                                        
        .inputFluids(
            Fluid.of("gtceu:distilled_water", 3)
        )
                                                                                                                
        .itemOutputs(
            "tflostblocks:nagastone_slab_left",
            "tflostblocks:nagastone_slab_right",
        )
        .duration(350)
        .EUt(GTValues.VA[GTValues.ULV]) 
                                                                                                                    
    event.recipes.gtceu.cutter('nagastone_slab_righ_and_left_water')
                                                                                                                        
        .itemInputs(
            "twilightforest:etched_nagastone"  
        )
                                                                                                                        
        .inputFluids(
            Fluid.of("minecraft:water", 4)
        )
                                                                                                                        
        .itemOutputs(
            "tflostblocks:nagastone_slab_left",
            "tflostblocks:nagastone_slab_right",           
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])
        
    event.shapeless("tflostblocks:nagastone_slab_left",
        [
            "twilightforest:etched_nagastone",
            "#forge:tools/saws"    
        ]
    )

    event.shapeless("tflostblocks:cracked_nagastone_slab_right",
        [
            "twilightforest:cracked_etched_nagastone",
            "#forge:tools/saws"    
        ]
    ) 
                                                                                                                                
                                                                                                            
    event.recipes.gtceu.cutter('cracked_nagastone_slab_right_and_left_lubricant')
                                                                                                                
        .itemInputs(
            "twilightforest:cracked_etched_nagastone"
        )
                                                                                                                
        .inputFluids(
            Fluid.of("gtceu:lubricant", 1)
        )
                                                                                                                    
        .itemOutputs(   
            "tflostblocks:cracked_nagastone_slab_left",
            "tflostblocks:cracked_nagastone_slab_right",
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
                                                                                                                            
    event.recipes.gtceu.cutter('cracked_nagastone_slab_right_and_left_dist_water')
                                                                                                                
        .itemInputs(
            "twilightforest:cracked_etched_nagastone" 
        )
                                                                                                        
        .inputFluids(
            Fluid.of("gtceu:distilled_water", 3)
        )
                                                                                                                
        .itemOutputs(
            "tflostblocks:cracked_nagastone_slab_left",
            "tflostblocks:cracked_nagastone_slab_right",    
        )
        .duration(350)
        .EUt(GTValues.VA[GTValues.ULV]) 
                                                                                                                    
    event.recipes.gtceu.cutter('cracked_nagastone_slab_righ_and_left_water')
                                                                                                                        
        .itemInputs(
            "twilightforest:cracked_etched_nagastone"  
        )
                                                                                                                        
        .inputFluids(
            Fluid.of("minecraft:water", 4)
        )
                                                                                                                        
        .itemOutputs(
            "tflostblocks:cracked_nagastone_slab_left",
            "tflostblocks:cracked_nagastone_slab_right",    
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])
        
    event.shapeless("tflostblocks:cracked_nagastone_slab_left",
        [
            "twilightforest:cracked_etched_nagastone",
            "#forge:tools/saws"    
        ]
    )

    event.shapeless("tflostblocks:mossy_nagastone_slab_right",
        [
            "twilightforest:mossy_etched_nagastone",
            "#forge:tools/saws"    
        ]
    ) 
                                                                                                                                
                                                                                                            
    event.recipes.gtceu.cutter('mossy_nagastone_slab_right_and_left_lubricant')
                                                                                                                
        .itemInputs(
            "twilightforest:mossy_etched_nagastone"
        )
                                                                                                                
        .inputFluids(
            Fluid.of("gtceu:lubricant", 1)
        )
                                                                                                                    
        .itemOutputs(   
            "tflostblocks:mossy_nagastone_slab_left",
            "tflostblocks:mossy_nagastone_slab_right",
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
                                                                                                                            
    event.recipes.gtceu.cutter('mossy_nagastone_slab_right_and_left_dist_water')
                                                                                                                
        .itemInputs(
            "twilightforest:mossy_etched_nagastone" 
        )
                                                                                                        
        .inputFluids(
            Fluid.of("gtceu:distilled_water", 3)
        )
                                                                                                                
        .itemOutputs(
            "tflostblocks:mossy_nagastone_slab_left",
            "tflostblocks:mossy_nagastone_slab_right",    
        )
        .duration(350)
        .EUt(GTValues.VA[GTValues.ULV]) 
                                                                                                                    
    event.recipes.gtceu.cutter('mossy_nagastone_slab_righ_and_left_water')
                                                                                                                        
        .itemInputs(
            "twilightforest:mossy_etched_nagastone"  
        )
                                                                                                                        
        .inputFluids(
            Fluid.of("minecraft:water", 4)
        )
                                                                                                                        
        .itemOutputs(
            "tflostblocks:mossy_nagastone_slab_left",
            "tflostblocks:mossy_nagastone_slab_right",    
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])
        
    event.shapeless("tflostblocks:mossy_nagastone_slab_left",
        [
            "twilightforest:mossy_etched_nagastone",
            "#forge:tools/saws"    
        ]
    )
    
    event.shapeless("tflostblocks:towerwood_slab",
        [
            "twilightforest:towerwood",
            "#forge:tools/saws"    
        ]
    ) 
                                                                                                            
                                                                                        
    event.recipes.gtceu.cutter('towerwood_slab_lubricant')
                                                                                                    
        .itemInputs(
            "twilightforest:towerwood"
        )
                                                                                                
        .inputFluids(
            Fluid.of("gtceu:lubricant", 1)
        )
                                                                                                
        .itemOutputs(   
            "2x tflostblocks:towerwood_slab",
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
                                                                                                        
    event.recipes.gtceu.cutter('towerwood_slab_dist_water')
                                                                                                
        .itemInputs(
            "twilightforest:towerwood" 
        )
                                                                                        
        .inputFluids(
            Fluid.of("gtceu:distilled_water", 3)
        )
                                                                                            
        .itemOutputs(
            "2x tflostblocks:towerwood_slab",
        )
        .duration(350)
        .EUt(GTValues.VA[GTValues.ULV]) 
                                                                                                    
    event.recipes.gtceu.cutter('towerwood_slab_water')
                                                                                                    
        .itemInputs(
            "twilightforest:towerwood"  
        )
                                                                                                    
        .inputFluids(
            Fluid.of("minecraft:water", 4)
        )
                                                                                                    
        .itemOutputs(
            "2x tflostblocks:towerwood_slab",
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])

    event.shapeless("tflostblocks:mossy_towerwood_slab",
        [
            "twilightforest:mossy_towerwood",
            "#forge:tools/saws"    
        ]
    ) 
                                                                                                                
                                                                                            
    event.recipes.gtceu.cutter('mossy_towerwood_slab_lubricant')
                                                                                                        
        .itemInputs(
            "twilightforest:mossy_towerwood"
        )
                                                                                                    
        .inputFluids(
            Fluid.of("gtceu:lubricant", 1)
        )
                                                                                                
        .itemOutputs(   
            "2x tflostblocks:mossy_towerwood_slab",
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
                                                                                                            
    event.recipes.gtceu.cutter('mossy_towerwood_slab_dist_water')
                                                                                                    
        .itemInputs(
            "twilightforest:mossy_towerwood" 
        )
                                                                                            
        .inputFluids(
            Fluid.of("gtceu:distilled_water", 3)
        )
                                                                                                
        .itemOutputs(
            "2x tflostblocks:mossy_towerwood_slab",
        )
        .duration(350)
        .EUt(GTValues.VA[GTValues.ULV]) 
                                                                                                        
    event.recipes.gtceu.cutter('mossy_towerwood_slab_water')
                                                                                                        
        .itemInputs(
            "twilightforest:mossy_towerwood"  
        )
                                                                                                        
        .inputFluids(
            Fluid.of("minecraft:water", 4)
        )
                                                                                                        
        .itemOutputs(
            "2x tflostblocks:mossy_towerwood_slab",
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])        

    event.shapeless("tflostblocks:thorn_slab",
        [
            "tflostblocks:thorn_planks",
            "#forge:tools/saws"    
        ]
    ) 
                                                                                                                    
                                                                                                
    event.recipes.gtceu.cutter('thorn_slab_lubricant')
                                                                                                            
        .itemInputs(
            "tflostblocks:thorn_planks"
        )
                                                                                                        
        .inputFluids(
            Fluid.of("gtceu:lubricant", 1)
        )
                                                                                                    
        .itemOutputs(   
            "2x tflostblocks:thorn_slab",
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
                                                                                                                
    event.recipes.gtceu.cutter('thorn_slab_dist_water')
                                                                                                        
        .itemInputs(
            "tflostblocks:thorn_planks" 
        )
                                                                                                
        .inputFluids(
            Fluid.of("gtceu:distilled_water", 3)
        )
                                                                                                
        .itemOutputs(
            "2x tflostblocks:thorn_slab",
        )
        .duration(350)
        .EUt(GTValues.VA[GTValues.ULV]) 
                                                                                                            
    event.recipes.gtceu.cutter('thorn_slab_water')
                                                                                                            
        .itemInputs(
            "tflostblocks:thorn_planks"  
        )
                                                                                                            
        .inputFluids(
            Fluid.of("minecraft:water", 4)
        )
                                                                                                        
        .itemOutputs(
            "2x tflostblocks:thorn_slab",
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])

    event.shapeless("tflostblocks:underbrick_slab",
        [
            "twilightforest:underbrick",
            "#forge:tools/saws"    
        ]
    ) 
                                                                                                                        
                                                                                                    
    event.recipes.gtceu.cutter('underbrick_slab_lubricant')
                                                                                                                
        .itemInputs(
            "twilightforest:underbrick"
        )
                                                                                                            
        .inputFluids(
            Fluid.of("gtceu:lubricant", 1)
        )
                                                                                                        
        .itemOutputs(   
            "2x tflostblocks:underbrick_slab",
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
                                                                                                                    
    event.recipes.gtceu.cutter('underbrick_slab_dist_water')
                                                                                                            
        .itemInputs(
            "twilightforest:underbrick" 
        )
                                                                                                    
        .inputFluids(
            Fluid.of("gtceu:distilled_water", 3)
        )
                                                                                                    
        .itemOutputs(
            "2x tflostblocks:underbrick_slab",
        )
        .duration(350)
        .EUt(GTValues.VA[GTValues.ULV]) 
                                                                                                                
    event.recipes.gtceu.cutter('underbrick_slab_water')
                                                                                                            
        .itemInputs(
            "twilightforest:underbrick"  
        )
                                                                                                                
        .inputFluids(
            Fluid.of("minecraft:water", 4)
        )
                                                                                                            
        .itemOutputs(
            "2x tflostblocks:underbrick_slab",
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])
         
    event.shapeless("tflostblocks:cracked_underbrick_slab",
        [
            "twilightforest:cracked_underbrick",
            "#forge:tools/saws"    
        ]
    ) 
                                                                                                                            
                                                                                                        
    event.recipes.gtceu.cutter('cracked_underbrick_slab_lubricant')
                                                                                                                    
        .itemInputs(
            "twilightforest:cracked_underbrick"
        )
                                                                                                            
        .inputFluids(
            Fluid.of("gtceu:lubricant", 1)
        )
                                                                                                            
        .itemOutputs(   
            "2x tflostblocks:cracked_underbrick_slab",
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
                                                                                                                        
    event.recipes.gtceu.cutter('cracked_underbrick_slab_dist_water')
                                                                                                                
        .itemInputs(
            "twilightforest:cracked_underbrick" 
        )
                                                                                                        
        .inputFluids(
            Fluid.of("gtceu:distilled_water", 3)
        )
                                                                                                        
        .itemOutputs(
            "2x tflostblocks:cracked_underbrick_slab",
        )
        .duration(350)
        .EUt(GTValues.VA[GTValues.ULV]) 
                                                                                                                    
    event.recipes.gtceu.cutter('cracked_underbrick_slab_water')
                                                                                                                
        .itemInputs(
            "twilightforest:cracked_underbrick"  
        )
                                                                                                                    
        .inputFluids(
            Fluid.of("minecraft:water", 4)
        )
                                                                                                                
        .itemOutputs(
            "2x tflostblocks:cracked_underbrick_slab",
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])

    event.shapeless("tflostblocks:mossy_underbrick_slab",
        [
            "twilightforest:mossy_underbrick",
            "#forge:tools/saws"    
        ]
    ) 
                                                                                                                                
                                                                                                            
    event.recipes.gtceu.cutter('mossy_underbrick_slab_lubricant')
                                                                                                                        
        .itemInputs(
           "twilightforest:mossy_underbrick"
        )
                                                                                                                
        .inputFluids(
            Fluid.of("gtceu:lubricant", 1)
        )
                                                                                                                
        .itemOutputs(   
            "2x tflostblocks:mossy_underbrick_slab",
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
                                                                                                                            
    event.recipes.gtceu.cutter('mossy_underbrick_slab_dist_water')
                                                                                                                    
        .itemInputs(
            "twilightforest:mossy_underbrick" 
        )
                                                                                                            
        .inputFluids(
            Fluid.of("gtceu:distilled_water", 3)
        )
                                                                                                            
        .itemOutputs(
            "2x tflostblocks:mossy_underbrick_slab",
        )
        .duration(350)
        .EUt(GTValues.VA[GTValues.ULV]) 
                                                                                                                        
    event.recipes.gtceu.cutter('mossy_underbrick_slab_water')
                                                                                                                    
        .itemInputs(
            "twilightforest:mossy_underbrick"  
        )
                                                                                                                        
        .inputFluids(
            Fluid.of("minecraft:water", 4)
        )
                                                                                                                    
        .itemOutputs(
            "2x tflostblocks:mossy_underbrick_slab",
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])
        
    event.shapeless("tflostblocks:trollsteinn_slab",
        [
            "twilightforest:trollsteinn",
            "#forge:tools/saws"    
        ]
    ) 
                                                                                                                                    
                                                                                                                
    event.recipes.gtceu.cutter('trollsteinn_slab_lubricant')
                                                                                                                            
        .itemInputs(
           "twilightforest:trollsteinn"
        )
                                                                                                                    
        .inputFluids(
            Fluid.of("gtceu:lubricant", 1)
        )
                                                                                                                    
        .itemOutputs(   
            "2x tflostblocks:trollsteinn_slab",
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
                                                                                                                                
    event.recipes.gtceu.cutter('trollsteinn_slab_dist_water')
                                                                                                                        
        .itemInputs(
            "twilightforest:trollsteinn" 
        )
                                                                                                                
        .inputFluids(
            Fluid.of("gtceu:distilled_water", 3)
        )
                                                                                                                
        .itemOutputs(
            "2x tflostblocks:trollsteinn_slab",
        )
        .duration(350)
        .EUt(GTValues.VA[GTValues.ULV]) 
                                                                                                                        
    event.recipes.gtceu.cutter('trollsteinn_slab_water')
                                                                                                                        
        .itemInputs(
            "twilightforest:trollsteinn"  
        )
                                                                                                                            
        .inputFluids(
            Fluid.of("minecraft:water", 4)
        )
                                                                                                                    
        .itemOutputs(
            "2x tflostblocks:trollsteinn_slab",
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])

    event.shapeless("tflostblocks:polished_trollsteinn_slab",

        [
            "tflostblocks:polished_trollsteinn",
            "#forge:tools/saws"    
        ]

    ) 
                                                                                                                                        
                                                                                                                    
    event.recipes.gtceu.cutter('polished_trollsteinn_slab_lubricant')
                                                                                                                                
        .itemInputs(
           "tflostblocks:polished_trollsteinn"
        )
                                                                                                                        
        .inputFluids(
            Fluid.of("gtceu:lubricant", 1)
        )
                                                                                                                        
        .itemOutputs(   
            "2x tflostblocks:polished_trollsteinn_slab",
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
                                                                                                                                    
    event.recipes.gtceu.cutter('polished_trollsteinn_slab_dist_water')
                                                                                                                            
        .itemInputs(
            "tflostblocks:polished_trollsteinn" 
        )
                                                                                                                    
        .inputFluids(
            Fluid.of("gtceu:distilled_water", 3)
        )
                                                                                                                    
        .itemOutputs(
            "2x tflostblocks:polished_trollsteinn_slab",
        )
        .duration(350)
        .EUt(GTValues.VA[GTValues.ULV]) 
                                                                                                                            
    event.recipes.gtceu.cutter('polished_trollsteinn_slab_water')
                                                                                                                        
        .itemInputs(
            "tflostblocks:polished_trollsteinn"  
        )
                                                                                                                                
        .inputFluids(
            Fluid.of("minecraft:water", 4)
        )
                                                                                                                        
        .itemOutputs(
            "2x tflostblocks:polished_trollsteinn_slab",
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])

    event.shapeless("tflostblocks:trollsteinn_brick_slab",
        [
            "tflostblocks:trollsteinn_bricks",
            "#forge:tools/saws"    
        ]
    ) 
                                                                                                                                            
                                                                                                                        
    event.recipes.gtceu.cutter('trollsteinn_brick_slab_lubricant')
                                                                                                                                
        .itemInputs(
           "tflostblocks:trollsteinn_bricks"
        )
                                                                                                                            
        .inputFluids(
            Fluid.of("gtceu:lubricant", 1)
        )
                                                                                                                            
        .itemOutputs(   
            "2x tflostblocks:trollsteinn_brick_slab",
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
                                                                                                                                        
    event.recipes.gtceu.cutter('trollsteinn_brick_slab_dist_water')
                                                                                                                                
        .itemInputs(
            "tflostblocks:trollsteinn_bricks" 
        )
                                                                                                                        
        .inputFluids(
            Fluid.of("gtceu:distilled_water", 3)
        )
                                                                                                                        
        .itemOutputs(
            "2x tflostblocks:trollsteinn_brick_slab",
        )
        .duration(350)
        .EUt(GTValues.VA[GTValues.ULV]) 
                                                                                                                                
    event.recipes.gtceu.cutter('trollsteinn_brick_slab_water')
                                                                                                                            
        .itemInputs(
            "tflostblocks:trollsteinn_bricks"  
        )
                                                                                                                                    
        .inputFluids(
            Fluid.of("minecraft:water", 4)
        )
                                                                                                                        
        .itemOutputs(
            "2x tflostblocks:trollsteinn_brick_slab",
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])
            

})