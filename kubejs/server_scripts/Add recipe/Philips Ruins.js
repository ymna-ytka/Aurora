ServerEvents.recipes( event=>{

    event.recipes.gtceu.assembler('frozen_sea_lantern_assemb')
        
        .itemInputs(
            "4x philipsruins:frozen_prismarine_shard",
            "5x philipsruins:frozen_prismarine_crystals"
        )

        .itemOutputs(
            "philipsruins:frozen_sea_lantern"
        )
        .duration(40)
        .EUt(GTValues.VHA[GTValues.ULV])

    event.shapeless("philipsruins:obsidian_brick_slab",

        [
           "philipsruins:obsidian_brick",
           "#forge:tools/saws"    
        ]
    )    

    event.recipes.gtceu.cutter('philipsruins:obsidian_brick_slab_lubricant')

        .itemInputs(
            "philipsruins:obsidian_brick"
        )

        .inputFluids(
            Fluid.of("gtceu:lubricant", 1)
        )

        .itemOutputs(   
            "2x philipsruins:obsidian_brick_slab",
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
    
    event.recipes.gtceu.cutter('obsidian_dist_water')

        .itemInputs(
            "philipsruins:obsidian_brick" 
        )

        .inputFluids(
            Fluid.of("gtceu:distilled_water", 3)
        )

        .itemOutputs(
            "2x philipsruins:obsidian_brick_slab",
        )
        .duration(350)
        .EUt(GTValues.VA[GTValues.ULV]) 
    
    event.recipes.gtceu.cutter('obsidian_water')

        .itemInputs(
            "philipsruins:obsidian_brick"  
        )

        .inputFluids(
            Fluid.of("minecraft:water", 4)
        )

        .itemOutputs(
            "2x philipsruins:obsidian_brick_slab",
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])

    event.shapeless("philipsruins:bone_bricks_slab",

        [
            "philipsruins:bone_bricks",
            "#forge:tools/saws"    
        ]
    ) 
               
    event.recipes.gtceu.cutter('bone_lubricant')
            
        .itemInputs(
            "philipsruins:bone_bricks"
        )
            
        .inputFluids(
            Fluid.of("gtceu:lubricant", 1)
        )
            
        .itemOutputs(   
            "2x philipsruins:bone_bricks_slab",
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
                
    event.recipes.gtceu.cutter('bone_bricks_slab_dist_water')
            
        .itemInputs(
            "philipsruins:bone_bricks" 
        )
            
        .inputFluids(
            Fluid.of("gtceu:distilled_water", 3)
        )
            
        .itemOutputs(
            "2x philipsruins:bone_bricks_slab",
        )
        .duration(350)
        .EUt(GTValues.VA[GTValues.ULV]) 
                
    event.recipes.gtceu.cutter('bone_bricks_slab_water')
            
        .itemInputs(
            "philipsruins:bone_bricks"  
        )
            
        .inputFluids(
            Fluid.of("minecraft:water", 4)
        )
            
        .itemOutputs(
            "2x philipsruins:bone_bricks_slab",
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV]) 
                    
    event.shapeless("philipsruins:sculk_bone_bricks_slab",

            [
                "philipsruins:sculk_bone_bricks",
                "#forge:tools/saws"    
            ]
        ) 
                        
    
    event.recipes.gtceu.cutter('sculk_bone_lubricant')
                
        .itemInputs(
            "philipsruins:sculk_bone_bricks"
        )
                
        .inputFluids(
            Fluid.of("gtceu:lubricant", 1)
        )
                
        .itemOutputs(   
            "2x philipsruins:sculk_bone_bricks_slab",
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
                    
    event.recipes.gtceu.cutter('sculk_bone_bricks_slab_dist_water')
                
        .itemInputs(
            "philipsruins:sculk_bone_bricks" 
        )
                
        .inputFluids(
            Fluid.of("gtceu:distilled_water", 3)
        )
                
        .itemOutputs(
            "2x philipsruins:sculk_bone_bricks_slab",
        )
        .duration(350)
        .EUt(GTValues.VA[GTValues.ULV]) 
                    
    event.recipes.gtceu.cutter('sculk_bone_bricks_slab_water')
                
        .itemInputs(
            "philipsruins:sculk_bone_bricks"  
        )
                
        .inputFluids(
            Fluid.of("minecraft:water", 4)
        )
                
        .itemOutputs(
            "2x philipsruins:sculk_bone_bricks_slab",
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])
                        
    event.shapeless("naturesaura:ancient_slab",

        [
            "naturesaura:ancient_planks",
            "#forge:tools/saws"    
        ]
    ) 
    
})