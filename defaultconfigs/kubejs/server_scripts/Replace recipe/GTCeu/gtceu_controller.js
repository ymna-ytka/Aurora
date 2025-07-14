ServerEvents.recipes(event => {
   
    event.replaceInput({ id: 'gtceu:shaped/wood_multiblock_tank' },

        "gtceu:lead_ring", 
        "gtceu:copper_ring"

    )
    
    event.replaceInput({ id: 'gtceu:shaped/steam_grinder' },

        "gtceu:potin_gear", 
        "gtceu:tumbaga_gear"

    ) 
    
    event.replaceInput({ id: 'gtceu:shaped/steam_oven' },

        "gtceu:invar_gear", 
        "gtac:tumbaga_gear"

    )
    
    event.replaceInput({ id: 'gtceu:shaped/large_bronze_boiler' },

        "#gtceu:circuits/lv", 
        "#gtceu:circuits/mv"

    ) 
    
})