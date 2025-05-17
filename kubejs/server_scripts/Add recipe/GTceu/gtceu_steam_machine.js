ServerEvents.recipes( event =>{

    event.shaped("gtceu:lp_steam_alloy_smelter",

        [
            "PCP",
            "FBF",
            "PCP"
        ],

        {
            P:"gtceu:bronze_small_fluid_pipe",
            C:"kubejs:copper_voltage_coil",
            F:"minecraft:furnace",
            B:"gtceu:bronze_brick_casing"
        }

    )

    event.shaped("gtceu:lp_steam_macerator",

        [
            "DPD",
            "BRB",
            "IPI"
        ],

        {
            D:"minecraft:diamond",
            P:"gtceu:bronze_small_fluid_pipe",
            B:"gtceu:bronze_buzz_saw_blade",
            R:"gtceu:bronze_brick_casing",
            I:"minecraft:piston"            
        }

    )

    event.shaped("gtceu:lp_steam_furnace",

        [
            "PCP",
            "CBC",
            "PFP"
        ],

        {
            P:"gtceu:bronze_small_fluid_pipe",
            C:"kubejs:copper_voltage_coil",
            B:"gtceu:bronze_brick_casing",
            F:"minecraft:furnace"
        }

    )

    event.shaped("gtceu:lp_steam_forge_hammer",

        [
            "PFP",
            "CBC",
            "PFP"
        ],

        {
            P:"gtceu:bronze_small_fluid_pipe",
            C:"minecraft:piston",
            B:"gtceu:bronze_brick_casing",
            F:"minecraft:anvil"
        }

    )

    event.shaped("gtceu:lp_steam_mixer",

        [
            "PRP",
            "GBG",
            "WCW"
        ],

        {
            R:"gtceu:copper_rotor",
            G:"minecraft:glass",
            B:"gtceu:bronze_brick_casing",
            C:"kubejs:copper_voltage_coil",
            W:"kubejs:whisk",
            P:"#forge:pistons"
        }

    )

    event.shaped("gtceu:hp_steam_solar_boiler",

        [
            "PRP",
            "GGG",
            "WCW"
        ],

        {
            R:"gtceu:ulv_machine_hull",
            G:"gtceu:double_silver_plate",
            C:"gtceu:steel_brick_casing",
            W:"gtceu:steel_small_fluid_pipe",
            P:"kubejs:solar_element"
        }

    )

    event.shaped("gtceu:hp_steam_liquid_boiler",

        [
            "WRW",
            "WGW",
            "WCW"
        ],

        {
            R:"gtceu:ulv_machine_hull",
            G:"minecraft:glass",
            C:"gtceu:steel_brick_casing",
            W:"gtceu:steel_plate"
        }

    )

    event.shaped("gtceu:hp_steam_alloy_smelter",

        [
            "WRW",
            "WCW",
            "WGW"
        ],

        {
            R:"gtceu:ulv_machine_hull",
            G:"gtceu:tin_alloy_small_fluid_pipe",
            C:"gtceu:lp_steam_alloy_smelter",
            W:"gtceu:steel_plate"
        }

    )

    event.shaped('gtceu:lp_steam_autoclave',

        [
            "BBB",
            "PIP",
            "GPG"
        ],

        {
            B:"minecraft:bucket",
            P:"gtceu:bronze_small_fluid_pipe",
            I:"gtceu:bronze_brick_casing",
            G:"minecraft:glass"
        }
    )

    event.shaped('gtceu:hp_steam_autoclave',

        [
            "PPP",
            "LBL",
            "PPP"
        ],
        
        {
            P:"gtceu:steel_small_fluid_pipe",
            L:"gtceu:steel_plate",
            B:"gtceu:lp_steam_autoclave"
        }

    )

})