ServerEvents.recipes(event=>{

    const ironInputs = [
        'minecraft:raw_iron',
        'minecraft:iron_ore',
        'minecraft:deepslate_iron_ore',        
        'gtceu:iron_ore',
        'gtceu:netherrack_iron_ore',
        'gtceu:endstone_iron_ore',
        'gtceu:iron_dust',
        'gtceu:impure_iron_dust',
        'gtceu:pure_iron_dust',
        'gtceu:crushed_iron_ore',
        'gtceu:refined_iron_ore',
        'gtceu:raw_yellow_limonite',
        'gtceu:yellow_limonite_ore',
        'gtceu:netherrack_yellow_limonite_ore',
        'gtceu:endstone_yellow_limonite_ore',
        'gtceu:yellow_limonite_dust',
        'gtceu:impure_yellow_limonite_dust',
        'gtceu:pure_yellow_limonite_dust',
        'gtceu:crushed_yellow_limonite_ore',
        'gtceu:refined_yellow_limonite_ore',
        'gtceu:raw_pyrite',
        'gtceu:pyrite_ore',
        'gtceu:netherrack_pyrite_ore',
        'gtceu:endstone_pyrite_ore',
        'gtceu:pyrite_dust',
        'gtceu:impure_pyrite_dust',
        'gtceu:pure_pyrite_dust',
        'gtceu:crushed_pyrite_ore',
        'gtceu:refined_pyrite_ore',
        'gtceu:raw_granitic_mineral_sand',
        'gtceu:granitic_mineral_sand_ore',
        'gtceu:netherrack_granitic_mineral_sand_ore',
        'gtceu:endstone_granitic_mineral_sand_ore',
        'gtceu:granitic_mineral_sand_dust',
        'gtceu:impure_granitic_mineral_sand_dust',
        'gtceu:pure_granitic_mineral_sand_dust',
        'gtceu:crushed_granitic_mineral_sand_ore',
        'gtceu:refined_granitic_mineral_sand_ore',
        'gtceu:raw_basaltic_mineral_sand',
        'gtceu:basaltic_mineral_sand_ore',
        'gtceu:netherrack_basaltic_mineral_sand_ore',
        'gtceu:endstone_basaltic_mineral_sand_ore',
        'gtceu:basaltic_mineral_sand_dust',
        'gtceu:impure_basaltic_mineral_sand_dust',
        'gtceu:pure_basaltic_mineral_sand_dust',
        'gtceu:crushed_basaltic_mineral_sand_ore',
        'gtceu:refined_basaltic_mineral_sand_ore'                                 
    ];

  const copperInputs = [
        'gtceu:raw_tetrahedrite',
        'gtceu:tetrahedrite_ore',
        'gtceu:netherrack_tetrahedrite_ore',
        'gtceu:endstone_tetrahedrite_ore',
        'gtceu:tetrahedrite_dust',
        'gtceu:impure_tetrahedrite_dust',
        'gtceu:pure_tetrahedrite_dust',
        'gtceu:crushed_tetrahedrite_ore',
        'gtceu:refined_tetrahedrite_ore',
        'gtceu:raw_malachite',
        'gtceu:malachite_ore',
        'gtceu:netherrack_malachite_ore',
        'gtceu:endstone_malachite_ore',
        'gtceu:malachite_dust',
        'gtceu:impure_malachite_dust',
        'gtceu:pure_malachite_dust',
        'gtceu:crushed_malachite_ore',
        'gtceu:refined_malachite_ore',                                
        'minecraft:raw_copper',
        'minecraft:deepslate_copper_ore',        
        'minecraft:copper_ore',
        'gtceu:copper_ore',
        'gtceu:netherrack_copper_ore',
        'gtceu:endstone_copper_ore',
        'gtceu:copper_dust',
        'gtceu:impure_copper_dust',
        'gtceu:pure_copper_dust',
        'gtceu:crushed_copper_ore',
        'gtceu:refined_copper_ore', 
        'gtceu:raw_chalcopyrite',
        'gtceu:chalcopyrite_ore',
        'gtceu:netherrack_chalcopyrite_ore',
        'gtceu:endstone_chalcopyrite_ore',
        'gtceu:chalcopyrite_dust',
        'gtceu:impure_chalcopyrite_dust',
        'gtceu:pure_chalcopyrite_dust',
        'gtceu:crushed_chalcopyrite_ore',
        'gtceu:refined_chalcopyrite_ore',
        'gtceu:raw_chalcocite',
        'gtceu:chalcocite_ore',
        'gtceu:netherrack_chalcocite_ore',
        'gtceu:endstone_chalcocite_ore',
        'gtceu:chalcocite_dust',
        'gtceu:impure_chalcocite_dust',
        'gtceu:pure_chalcocite_dust',
        'gtceu:crushed_chalcocite_ore',
        'gtceu:refined_chalcocite_ore',  
        'gtceu:raw_bornite',
        'gtceu:bornite_ore',
        'gtceu:netherrack_bornite_ore',
        'gtceu:endstone_bornite_ore',
        'gtceu:bornite_dust',
        'gtceu:impure_bornite_dust',
        'gtceu:pure_bornite_dust',
        'gtceu:crushed_bornite_ore',
        'gtceu:refined_bornite_ore'                              
    ];

  const tinInputs = [
        'gtceu:raw_tin',
        'gtceu:tin_ore',
        'gtceu:netherrack_tin_ore',
        'gtceu:endstone_tin_ore',
        'gtceu:tin_dust',
        'gtceu:impure_tin_dust',
        'gtceu:pure_tin_dust',
        'gtceu:crushed_tin_ore',
        'gtceu:refined_tin_ore',
        'gtceu:raw_cassiterite',
        'gtceu:cassiterite_ore',
        'gtceu:netherrack_cassiterite_ore',
        'gtceu:endstone_cassiterite_ore',
        'gtceu:cassiterite_dust',
        'gtceu:impure_cassiterite_dust',
        'gtceu:pure_cassiterite_dust',
        'gtceu:crushed_cassiterite_ore',
        'gtceu:refined_cassiterite_ore',
        'gtceu:raw_cassiterite_sand',
        'gtceu:cassiterite_sand_ore',
        'gtceu:netherrack_cassiterite_sand_ore',
        'gtceu:endstone_cassiterite_sand_ore',
        'gtceu:cassiterite_sand_dust',
        'gtceu:impure_cassiterite_sand_dust',
        'gtceu:pure_cassiterite_sand_dust',
        'gtceu:crushed_cassiterite_sand_ore',
        'gtceu:refined_cassiterite_sand_ore'                                                       
    ];   
    
  const leadInputs = [
        'gtceu:raw_lead',
        'gtceu:lead_ore',
        'gtceu:netherrack_lead_ore',
        'gtceu:endstone_lead_ore',
        'gtceu:lead_dust',
        'gtceu:impure_lead_dust',
        'gtceu:pure_lead_dust',
        'gtceu:crushed_lead_ore',
        'gtceu:refined_lead_ore',
        'gtceu:raw_galena',
        'gtceu:galena_ore',
        'gtceu:netherrack_galena_ore',
        'gtceu:endstone_galena_ore',
        'gtceu:galena_dust',
        'gtceu:impure_galena_dust',
        'gtceu:pure_galena_dust',
        'gtceu:crushed_galena_ore',
        'gtceu:refined_galena_ore',                                                       
    ];    
   

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

    ironInputs.forEach((input, i) => {
        
            event.recipes.gtceu.stone_blast_furnace(`primitive_blast_${i}`)
                .itemInputs(`10x ${input}`)
                .itemInputs('2x #minecraft:coals')
                .itemOutputs('8x minecraft:iron_ingot')
                .chancedOutput("2x gtac:iron_slag", 3000, 0)
                .chancedOutput('2x gtceu:ash_dust', 5000, 0)
                .duration(4000);
        
    });

    copperInputs.forEach((input, i) => {

            event.recipes.gtceu.stone_blast_furnace(`primitive_blast_${i}_2`)
                .itemInputs(`10x ${input}`)
                .itemInputs('2x #minecraft:coals')
                .itemOutputs('8x minecraft:copper_ingot')
                .chancedOutput("2x gtac:copper_slag", 3000, 0)
                .chancedOutput('2x gtceu:ash_dust', 5000, 0)
                .duration(4000);
        
    });
    
    tinInputs.forEach((input, i) => {
        
            event.recipes.gtceu.stone_blast_furnace(`primitive_blast_${i}_3`)
                .itemInputs(`10x ${input}`)
                .itemInputs('2x #minecraft:coals')
                .itemOutputs('8x gtceu:tin_ingot')
                .chancedOutput("2x gtac:tin_slag", 3000, 0)
                .chancedOutput('2x gtceu:ash_dust', 5000, 0)
                .duration(4000);
        
    });
    
    leadInputs.forEach((input, i) => {
            event.recipes.gtceu.stone_blast_furnace(`primitive_blast_${i}_4`)
                .itemInputs(`10x ${input}`)
                .itemInputs('2x #minecraft:coals')
                .itemOutputs('8x gtceu:lead_ingot')
                .chancedOutput("2x gtac:lead_slag", 3000, 0)
                .chancedOutput('2x gtceu:ash_dust', 5000, 0)
                .duration(4000);
    }); 

    event.recipes.gtceu.stone_brick_smelter("primitive_brick_vanilla")
        .itemInputs("3x gtceu:compressed_clay")
        .itemInputs("#minecraft:coals")
        .itemOutputs("3x minecraft:brick")
        .duration(150)   

    event.shaped("minecraft:furnace",

        [
            "DDD",
            "LSL",
            "DDD"
        ],

        {
            D:"minecraft:cobblestone",
            L:"gtceu:raw_coal",
            S:"minecraft:iron_ingot"      
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
        
    event.recipes.gtceu.compressor('compresor_netherite_block')
    
    .itemInputs(
        "9x minecraft:netherite_ingot",
      )
  
    .itemOutputs(
        "minecraft:netherite_block"
      )
  
    .duration(300)
    .EUt(2)

    event.shapeless("2x minecraft:stick",

        [
            "2x palegarden:pale_plank"
        ]

    )

    event.shapeless("4x minecraft:stick",

        [
            "2x palegarden:pale_plank",
            "#forge:tools/saws"
        ]

    )

    event.recipes.gtceu.lathe('pale_stick_lathe')
        .itemInputs(
            "palegarden:pale_plank",
        )

        .itemOutputs(
            "2x minecraft:stick"
        )
        .duration(10)
        .EUt(GTValues.VA[GTValues.ULV])

    event.shapeless("minecraft:flint",

        [
            "4x gtac:mini_cobblestone"
        ]

    )

    event.shaped('minecraft:clay',

        [
            "CCC",
            "CCC",
            "CCH"
        ],

        {
            C:"minecraft:clay_ball",
            H:"gtac:bad_stone_hammer"
        }

    ).damageIngredient('gtac:bad_stone_hammer')
    
    event.shaped("minecraft:cobblestone_slab",

        [
            "   ",
            "CCC",
            "CCC"
        ],

        {
            C:"gtac:mini_cobblestone"
        }

    )

    event.shaped("minecraft:stone_bricks",

        [
            "BBB",
            "BWB",
            "BBB"
        ],

        {
            B:"minecraft:stone",
            W:"minecraft:water_bucket"
        }

    )

    event.recipes.gtceu.cooler('gtceu:cooler/snowball')

        .itemInputs(
            "gtceu:ball_casting_mold"
        )

        .inputFluids(
            Fluid.of("minecraft:water", 72)
        )

        .itemOutputs(
            "minecraft:snowball"
        )

        .duration(400)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.cooler('gtceu:cooler/snow_block')

        .itemInputs(
            "gtceu:block_casting_mold"
        )

        .inputFluids(
            Fluid.of("minecraft:water", 642)
        )

        .itemOutputs(
            "minecraft:snow_block"
        )

        .duration(600)
        .EUt(GTValues.VA[GTValues.LV])

})