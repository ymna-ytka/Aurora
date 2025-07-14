ServerEvents.recipes( event=>{

    event.remove({ type: 'gtceu:alloy_smelter', output: '#forge:ingots/invar' })
    event.remove( { id:"gtceu:electric_blast_furnace/blast_aluminium" } )
    event.remove( { id:"gtceu:electric_blast_furnace/blast_aluminium_gas" } )
    event.remove( { id:"gtceu:electric_blast_furnace/aluminium_from_green_sapphire_dust" } )
    event.remove( { id:"gtceu:electric_blast_furnace/aluminium_from_ruby_dust" } )
    event.remove( { id:"gtceu:electric_blast_furnace/aluminium_from_sapphire_dust" } )
    event.remove( { id:"gtceu:electric_blast_furnace/aluminium_from_ruby_gem" } )
    event.remove( { id:"gtceu:electric_blast_furnace/aluminium_from_sapphire_gem" } )
    event.remove( { id:"gtceu:electric_blast_furnace/aluminium_from_green_sapphire_gem" } )
    event.remove( { id:"gtceu:smelting/smelt_dust_invar_to_ingot" } )
    event.remove({ type: 'gtceu:alloy_smelter', output: 'gtceu:cupronickel_ingot' })
    event.remove( { id:"gtceu:smelting/smelt_dust_cupronickel_to_ingot" } )
    event.remove({ type: 'gtceu:alloy_smelter', output: 'gtceu:electrum_ingot' })
    event.remove( { id:"gtceu:smelting/smelt_dust_electrum_to_ingot" } )

})