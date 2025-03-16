ServerEvents.recipes( event=> {

    event.shapeless("naturalist:shellstone_slab",
        [
            "naturalist:shellstone",
            "#forge:tools/saws"    
        ]
    ) 
                                                
                            
    event.recipes.gtceu.cutter('shellstone_slab_lubricant')
                                        
        .itemInputs(
            "naturalist:shellstone"
        )
                                        
        .inputFluids(
        Fluid.of("gtceu:lubricant", 1)
        )
                                        
        .itemOutputs(   
            "2x naturalist:shellstone_slab",
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
                                            
    event.recipes.gtceu.cutter('shellstone_slab_dist_water')
                                        
        .itemInputs(
            "naturalist:shellstone" 
        )
                                        
        .inputFluids(
            Fluid.of("gtceu:distilled_water", 3)
        )
                                        
        .itemOutputs(
            "2x naturalist:shellstone_slab",
        )
        .duration(350)
        .EUt(GTValues.VA[GTValues.ULV]) 
                                            
    event.recipes.gtceu.cutter('shellstone_slab_water')
                                        
        .itemInputs(
            "naturalist:shellstone"  
        )
                                        
        .inputFluids(
            Fluid.of("minecraft:water", 4)
        )
                                        
        .itemOutputs(
            "2x naturalist:shellstone_slab",
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])
        
    event.shapeless("naturalist:shellstone_brick_slab",
        [
            "naturalist:shellstone_bricks",
            "#forge:tools/saws"    
        ]
    ) 
                                                    
                                
    event.recipes.gtceu.cutter('naturalist:shellstone_brick_slab_lubricant')
                                            
        .itemInputs(
            "naturalist:shellstone_bricks"
        )
                                            
        .inputFluids(
        Fluid.of("gtceu:lubricant", 1)
        )
                                            
        .itemOutputs(   
            "2x naturalist:shellstone_brick_slab",
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
                                                
    event.recipes.gtceu.cutter('shellstone_brick_slab_dist_water')
                                            
        .itemInputs(
            "naturalist:shellstone_bricks" 
        )
                                            
        .inputFluids(
            Fluid.of("gtceu:distilled_water", 3)
        )
                                            
        .itemOutputs(
            "2x naturalist:shellstone_brick_slab",
        )
        .duration(350)
        .EUt(GTValues.VA[GTValues.ULV]) 
                                                
    event.recipes.gtceu.cutter('shellstone_brick_slab_water')
                                            
        .itemInputs(
            "naturalist:shellstone_bricks"  
        )
                                            
        .inputFluids(
            Fluid.of("minecraft:water", 4)
        )
                                            
        .itemOutputs(
            "2x naturalist:shellstone_brick_slab",
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])

    event.shapeless("naturalist:cut_shellstone_slab",
        [
            "naturalist:cut_shellstone",
            "#forge:tools/saws"    
        ]
    ) 
                                                        
                                    
    event.recipes.gtceu.cutter('cut_shellstone_slab_lubricant')
                                                
        .itemInputs(
            "naturalist:cut_shellstone"
        )
                                                
        .inputFluids(
            Fluid.of("gtceu:lubricant", 1)
        )
                                                
        .itemOutputs(   
            "2x naturalist:cut_shellstone_slab",
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
                                                    
    event.recipes.gtceu.cutter('cut_shellstone_slab_dist_water')
                                                
        .itemInputs(
            "naturalist:cut_shellstone" 
        )
                                                
        .inputFluids(
            Fluid.of("gtceu:distilled_water", 3)
        )
                                                
        .itemOutputs(
            "2x naturalist:cut_shellstone_slab",
        )
        .duration(350)
        .EUt(GTValues.VA[GTValues.ULV]) 
                                                    
    event.recipes.gtceu.cutter('cut_shellstone_slab_water')
                                                
        .itemInputs(
            "naturalist:cut_shellstone"  
        )
                                                
        .inputFluids(
            Fluid.of("minecraft:water", 4)
        )
                                                
        .itemOutputs(
            "2x naturalist:cut_shellstone_slab",
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])

    event.shapeless("naturalist:smooth_shellstone_slab",
        [
            "naturalist:smooth_shellstone",
            "#forge:tools/saws"    
        ]
    ) 
                                                            
                                        
    event.recipes.gtceu.cutter('smooth_shellstone_slab_lubricant')
                                                    
        .itemInputs(
            "naturalist:smooth_shellstone"
        )
                                                    
        .inputFluids(
            Fluid.of("gtceu:lubricant", 1)
        )
                                                    
        .itemOutputs(   
            "2x naturalist:smooth_shellstone_slab",
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
                                                        
    event.recipes.gtceu.cutter('smooth_shellstone_slab_dist_water')
                                                    
        .itemInputs(
            "naturalist:smooth_shellstone" 
        )
                                                    
        .inputFluids(
            Fluid.of("gtceu:distilled_water", 3)
        )
                                                    
        .itemOutputs(
            "2x naturalist:smooth_shellstone_slab",
        )
        .duration(350)
        .EUt(GTValues.VA[GTValues.ULV]) 
                                                        
    event.recipes.gtceu.cutter('smooth_shellstone_slab_water')
                                                    
        .itemInputs(
            "naturalist:smooth_shellstone"  
        )
                                                    
        .inputFluids(
            Fluid.of("minecraft:water", 4)
        )
                                                    
        .itemOutputs(
            "2x naturalist:smooth_shellstone_slab",
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])



})