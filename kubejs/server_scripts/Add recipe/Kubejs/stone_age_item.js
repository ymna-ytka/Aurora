ServerEvents.recipes(event=>{

    event.campfireCooking("kubejs:coal_chunk", "farmersdelight:straw")


    event.shapeless("kubejs:stone_stick",
        
        [
            "2x stone"
        ]

    )

    event.shaped("kubejs:coal_stone_stick",
    
        [
            "CCC",    
            "CSC",
            "CCC"
        ],

        {
            C:"kubejs:coal_chunk",
            S:"kubejs:stone_stick"  
        }
        
    )

    event.shapeless("kubejs:cleansed_leather",
        
        [
              "minecraft:leather",
              "#forge:tools/knives",
              "minecraft:flint",
              "minecraft:water_bucket"
        ]

    )
    
    event.campfireCooking("kubejs:tanned_leather", "kubejs:cleansed_leather", 0, 2400)
    
    event.blasting("kubejs:tanned_leather", "kubejs:cleansed_leather")

    event.campfireCooking("kubejs:chunk_stone", "minecraft:flint", 0, 200)


})