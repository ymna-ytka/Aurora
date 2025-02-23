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

})