ServerEvents.recipes( event=> {

    event.shapeless("ribbits:mossy_oak_planks_slab",

        [
            "ribbits:mossy_oak_planks",
            "#forge:tools/saws"    
        ]
        ) 
           
    event.recipes.gtceu.cutter('ribbits:mossy_oak_planks_slab_lubricant')
        
        .itemInputs(
            "ribbits:mossy_oak_planks"
        )
        
        .inputFluids(
            Fluid.of("gtceu:lubricant", 1)
        )
        
        .itemOutputs(   
            "2x ribbits:mossy_oak_planks_slab",
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
            
    event.recipes.gtceu.cutter('mossy_oak_dist_water')
        
        .itemInputs(
            "ribbits:mossy_oak_planks" 
        )
        
        .inputFluids(
            Fluid.of("gtceu:distilled_water", 3)
        )
        
        .itemOutputs(
            "2x ribbits:mossy_oak_planks_slab",
        )
        .duration(350)
        .EUt(GTValues.VA[GTValues.ULV]) 
            
    event.recipes.gtceu.cutter('mossy_oak_water')
        
        .itemInputs(
            "ribbits:mossy_oak_planks"  
        )
        
        .inputFluids(
            Fluid.of("minecraft:water", 4)
        )
        
        .itemOutputs(
            "2x ribbits:mossy_oak_planks_slab",
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])


})