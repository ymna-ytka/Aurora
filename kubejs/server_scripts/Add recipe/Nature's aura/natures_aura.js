ServerEvents.recipes( event=> {

    event.shaped("naturesaura:wood_stand",

        [
            "W W",
            "WWW",
            " S "
        ],

        {
            W:"#minecraft:logs",
            S:"forge:tools/saws"
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


})