ServerEvents.recipes(event=>{

    event.shaped("sophisticatedbackpacks:backpack",
        
        [
            "OTO",
            "SCS",
            "TTT"
        ],

        {
            S:"minecraft:string",
            T:"kubejs:tanned_leather",
            C:"minecraft:chest",
            O:"gtceu:wood_screw"
        }
    
    )

    event.shaped("sophisticatedbackpacks:copper_backpack",
        
        [
            "BTB",
            "BCB",
            "BTB"
        ],
        
        {
            B:"gtceu:bronze_plate",
            T:"kubejs:tanned_leather",
            C:"sophisticatedbackpacks:backpack"
        }
    
    )

    event.shaped("sophisticatedbackpacks:iron_backpack",
        
        [
            "STS",
            "SCS",
            "STS"
        ],
        
        {
            S:"gtceu:steel_plate",
            T:"kubejs:tanned_leather",
            C:"sophisticatedbackpacks:copper_backpack"
        }
    
    )

    event.shaped("sophisticatedbackpacks:gold_backpack",
        
        [
            "ATA",
            "ACA",
            "ATA"
        ],
        
        {
            A:"gtceu:aluminium_plate",
            T:"kubejs:tanned_leather",
            C:"sophisticatedbackpacks:iron_backpack"
        }
    
    )

    event.shaped("sophisticatedbackpacks:diamond_backpack",
        
        [
            "STS",
            "SCS",
            "STS"
        ],
        
        {
            S:"gtceu:stainless_steel_plate",
            T:"kubejs:tanned_leather",
            C:"sophisticatedbackpacks:gold_backpack"
        }
    
    )

    event.shaped("sophisticatedbackpacks:netherite_backpack",
        
        [
            "ITI",
            "ICI",
            "ITI"
        ],
        
        {
            I:"gtceu:titanium_plate",
            T:"kubejs:tanned_leather",
            C:"sophisticatedbackpacks:diamond_backpack"
        }
    
    )

})