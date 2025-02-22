ServerEvents.recipes(event=>{

    event.shaped("farmersdelight:cooking_pot",
        
        [
            "R R",
            "P P",
            "PPP" 
        ],
        
        {
            P:"gtceu:iron_plate",
            R:"gtceu:bad_bronze_rod" 
        }
     
    )
   
    event.shaped("farmersdelight:skillet",
        
        [
            " PP",
            "RPP",
            " PP" 
        ],
        
        {
            P:"gtceu:iron_plate",
            R:"gtceu:bad_bronze_rod" 
        }
     
    )

    event.shaped("farmersdelight:stove",
        
        [
            "PAP",
            "PAP",
            "BFB" 
        ],
        
        {
            P:"gtceu:iron_plate",
            A:"minecraft:iron_bars",
            B:"gtceu:coke_oven_bricks",
            F:"minecraft:furnace"

        }
     
    )

    event.shaped("2x farmersdelight:rope",

        [
            " SR",
            "SRS",
            "RS "
        ],

        {
            S:"2x farmersdelight:straw",
            R:"2x kubejs:piece_wooden_rubber"
        }

    )

})