ServerEvents.recipes(event=>{

    event.shaped("minecraft:campfire",
    
        [
            " S ",
            "SIS",
            "OOO"
        ],
    
        {
             S:"minecraft:stick",
             I:"farmersdelight:straw",
             O:"#minecraft:logs"
        } 


    )

    event.shaped("minecraft:furnace",

        [
            "DLD",
            "DCD",
            "DDD"
        ],

        {
            D:"minecraft:cobblestone",
            L:"minecraft:cobbled_deepslate",
            C:"gtceu:raw_coal"      
        }
    )

    event.shaped("minecraft:stonecutter",

        [
            "   ",
            " S ",
            "OCO"
        ],
        
        {
            S:"gtceu:steel_buzz_saw_blade",
            O:"minecraft:oak_wood",
            C:"minecraft:stone_slab"   
        }
    
    )

    event.shaped("minecraft:enchanting_table",

        [
            " B ",
            "DOD",
            "OPO"
        ],

        {
            B:"minecraft:book",
            D:"gtceu:diamond_plate",
            O:"minecraft:obsidian",
            P:"gtceu:dense_obsidian_plate"
        }

    )

    event.recipes.gtceu.assembler('enchanting_table')
    
    .itemInputs(
        "2x gtceu:diamond_plate",
        "gtceu:dense_obsidian_plate",
        "minecraft:book",
        "minecraft:obsidian"
      )
  
    .itemOutputs(
        "minecraft:enchanting_table"
      )
  
    .duration(100)
    .EUt(7)
    
    event.shaped("minecraft:bookshelf",

        [
            "WWW",
            "BBB",
            "WWW"
        ],

        {
            B:"minecraft:book",
            W:"gtceu:wood_plate",
        }

    )
    
    event.shapeless("3x minecraft:flint",
        
        [
            "kubejs:chunk_stone",
            "3x minecraft:gravel"
        ]

    )
 
    event.shaped("minecraft:stone",

        [
            "WWW",
            "WWW",
            "WWW"
        ],

        {
            W:"kubejs:chunk_stone"
        }

    )
    
})