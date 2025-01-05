ServerEvents.recipes(event=>{

    event.shapeless("craftingstation:crafting_station",
        
        [
            "minecraft:crafting_table",
            "#forge:tools/saws"
        ]

    )

    event.shapeless("craftingstation:crafting_station_slab",
        
        [
            "craftingstation:crafting_station",
            "#forge:tools/saws"
        ]

    )

})