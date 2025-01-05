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

})