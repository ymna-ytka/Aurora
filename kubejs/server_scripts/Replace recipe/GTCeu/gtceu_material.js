ServerEvents.recipes(event=>{

    event.replaceOutput( { output: 'gtceu:quartz_sand_dust' },

        'gtceu:quartz_sand_dust',
        'gtac:sand_dust'

    )

    event.replaceOutput( { id: 'gtceu:macerator/macerate_quartz_sand_block' },

        'gtac:sand_dust',
        '4x gtceu:quartz_sand_dust'

    )
    

})