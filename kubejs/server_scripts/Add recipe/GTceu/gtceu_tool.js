ServerEvents.recipes(event=>{
    event.shaped(Item.of('gtceu:flint_pickaxe', '{DisallowContainerItem:0b,GT.Behaviours:{},GT.Tool:{AttackDamage:2.0f,AttackSpeed:-2.8f,Damage:0,HarvestLevel:2,MaxDamage:63,ToolSpeed:5.5f},HideFlags:2}'),
        
        [
            "FFF",
            " S ",
            " S " 
        ],
        
        {
            F:"minecraft:flint",
            S:"kubejs:coal_stone_stick"  
        }
     
    )
    
    event.shaped(Item.of('gtceu:flint_sword', '{DisallowContainerItem:0b,GT.Behaviours:{},GT.Tool:{AttackDamage:4.0f,AttackSpeed:-2.4f,Damage:0,HarvestLevel:2,MaxDamage:63},HideFlags:2}').enchant('minecraft:fire_aspect', 2),
    
        [
            " F ",
            " F ",
            " S "
        ],

        {
            F:"minecraft:flint",
            S:"kubejs:coal_stone_stick"
        }

    )

    event.shaped(Item.of('gtceu:flint_knife', '{DisallowContainerItem:0b,GT.Behaviours:{},GT.Tool:{AttackDamage:1.0f,AttackSpeed:3.0f,Damage:0,HarvestLevel:2,MaxDamage:63},HideFlags:2}').enchant('minecraft:fire_aspect', 2),

        [
            "   ",
            " F ",
            " S "
              
        ],
        
        {
            F:"minecraft:flint",   
            S:"kubejs:coal_stone_stick"    
        }

    )
    
    event.shaped(Item.of('gtceu:flint_hoe', '{DisallowContainerItem:0b,GT.Behaviours:{},GT.Tool:{AttackDamage:0.0f,AttackSpeed:-1.0f,Damage:0,MaxDamage:63},HideFlags:2}'),

        [
            "FF ",
            " S ",
            " S "
        ],
        
        {
            F:"minecraft:flint",   
            S:"kubejs:coal_stone_stick"    
        }

    )

    event.shaped(Item.of('gtceu:flint_shovel', '{DisallowContainerItem:0b,GT.Behaviours:{},GT.Tool:{AttackDamage:2.5f,AttackSpeed:-3.0f,Damage:0,HarvestLevel:2,MaxDamage:63,ToolSpeed:5.5f},HideFlags:2}'),
        
        [
            " F ",
            " S ",
            " S "
        ],

        {
            F:"minecraft:flint",   
            S:"kubejs:coal_stone_stick"    
        }
    )

    event.shaped(Item.of('gtceu:flint_axe', '{DisallowContainerItem:0b,GT.Behaviours:{DisableShields:1b,TreeFelling:1b},GT.Tool:{AttackDamage:6.0f,AttackSpeed:-3.2f,Damage:0,HarvestLevel:2,MaxDamage:63,ToolSpeed:3.5f},HideFlags:2}'),
        
        [
            "FF ",
            "FS ",
            " S "
        ],

        {
            F:"minecraft:flint",   
            S:"kubejs:coal_stone_stick"    
        }
    )

})