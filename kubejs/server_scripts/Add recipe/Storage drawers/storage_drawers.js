ServerEvents.recipes( event=>{

    event.shaped('storagedrawers:upgrade_template',

        [
            "SPS",
            "SDS",
            " C "
        ],

        {
            S:"gtceu:steel_screw",
            P:"minecraft:piston",
            D:"#storagedrawers:drawers",
            C:"#forge:tools/screwdrivers"
        }

    )

    event.shaped("storagedrawers:iron_storage_upgrade",
               
        [
            "PTP",
            "TPT",
            "PRP"
        ],

        {
            P:"gtceu:iron_plate",
            T:"storagedrawers:upgrade_template",
            R:"gtceu:iron_rod"
        }


    )

    event.shaped("storagedrawers:gold_storage_upgrade",
               
        [
            "PTP",
            "TBT",
            "PRP"
        ],

        {
            P:"gtceu:gold_plate",
            T:"storagedrawers:upgrade_template",
            R:"gtceu:gold_rod",
            B:"gtceu:bronze_plate" 
        }


    )

    event.shaped("storagedrawers:obsidian_storage_upgrade",
               
        [
            "PTP",
            "TST",
            "PRP"
        ],

        {
            P:"gtceu:obsidian_plate",
            T:"storagedrawers:upgrade_template",
            R:"gtceu:obsidian_rod",
            S:"gtceu:steel_plate"
        }


    )

    event.shaped("storagedrawers:diamond_storage_upgrade",
               
        [
            "PTP",
            "TAT",
            "PRP"
        ],

        {
            P:"gtceu:diamond_plate",
            T:"storagedrawers:upgrade_template",
            R:"gtceu:diamond_rod",
            A:"gtceu:aluminium_plate"
        }


    )

    event.shaped("storagedrawers:emerald_storage_upgrade",
               
        [
            "PTP",
            "TAT",
            "PRP"
        ],

        {
            P:"gtceu:emerald_plate",
            T:"storagedrawers:upgrade_template",
            R:"gtceu:emerald_rod",
            A:"gtceu:tantalum_plate"
        }


    )

    event.shaped("storagedrawers:one_stack_upgrade",
               
        [
            "PTP",
            "TAT",
            "PRP"
        ],

        {
            P:"gtceu:rubber_plate",
            T:"storagedrawers:upgrade_template",
            R:"gtceu:rubber_rod",
            A:"minecraft:soul_sand"
        }


    )

    event.shaped("storagedrawers:void_upgrade",
               
        [
            "SRS",
            "DTD",
            "SRS"
        ],

        {
            S:"minecraft:stick",
            T:"storagedrawers:upgrade_template",
            R:"morered:red_alloy_wire",
            D:"gtceu:dense_obsidian_plate"
        }


    )

    event.shaped("storagedrawers:redstone_upgrade",

        [
            "PSP",
            "STS",
            "PWP"
        ],

        {
            P:"gtceu:redstone_plate",
            S:"minecraft:stick",
            T:"storagedrawers:upgrade_template",
            W:"morered:red_alloy_wire"
        }

    )

    event.shaped("storagedrawers:min_redstone_upgrade",

        [
            "SWS",
            "STS",
            "PPP"
        ],

        {
            P:"gtceu:redstone_plate",
            S:"minecraft:stick",
            T:"storagedrawers:upgrade_template",
            W:"morered:red_alloy_wire"
        }

    )

    event.shaped("storagedrawers:fill_level_upgrade",

        [
            "SPS",
            "WTW",
            "WWW"
        ],

        {
            P:"gtceu:redstone_plate",
            S:"minecraft:stick",
            T:"storagedrawers:upgrade_template",
            W:"morered:red_alloy_wire"
        }

    )

    event.shaped("storagedrawers:max_redstone_upgrade",

        [
            "PPP",
            "STS",
            "SWS"
        ],

        {
            P:"gtceu:redstone_plate",
            S:"minecraft:stick",
            T:"storagedrawers:upgrade_template",
            W:"morered:red_alloy_wire"
        }

    )

    event.shaped("storagedrawers:drawer_key",

        [
            " BP",
            "TPR",
            "GA "
        ],

        {
            P:"gtceu:steel_plate",
            G:"gtceu:gold_plate",
            T:"storagedrawers:upgrade_template",
            R:"gtceu:gold_rod",
            A:"#forge:tools/saws",
            B:"gtceu:gold_bolt"
        }

    )

    event.recipes.gtceu.assembler('quantify_key')
     
    .itemInputs(
      "storagedrawers:upgrade_template",
      "minecraft:writable_book"
    )

    .itemOutputs(
      "storagedrawers:quantify_key"
    )
    .duration(200)
    .EUt(30)

    event.recipes.gtceu.assembler('shroud_key')
     
    .itemInputs(
        "storagedrawers:upgrade_template",
        "minecraft:ender_eye"
    )

    .itemOutputs(
        "storagedrawers:shroud_key"
    )
    .duration(200)
    .EUt(30)

    event.recipes.gtceu.assembler('personal_key')
     
    .itemInputs(
        "storagedrawers:upgrade_template",
        "minecraft:name_tag"
    )

    .itemOutputs(
        "storagedrawers:personal_key"
    )
    .duration(200)
    .EUt(30)

    event.recipes.gtceu.assembler('priority_key')
     
    .itemInputs(
        "storagedrawers:upgrade_template",
        "minecraft:compass"
    )

    .itemOutputs(
        "storagedrawers:priority_key"
    )
    .duration(200)
    .EUt(30)

    event.shaped("storagedrawers:controller",

        [
            "SMS",
            "CDC",
            "OIO"
        ],

        {
            S:"gtceu:stainless_steel_plate",
            M:"#gtceu:circuits/mv",
            C:"morered:xnor_gate",
            D:"#storagedrawers:drawers",
            O:"gtceu:obsidian_plate",
            I:"gtceu:diamond_plate"
        }

    )

    event.shaped("storagedrawers:controller_slave",

        [
            "SMS",
            "CDC",
            "OIO"
        ],

        {
            S:"gtceu:stainless_steel_plate",
            M:"#gtceu:circuits/mv",
            C:"morered:xnor_gate",
            D:"#storagedrawers:drawers",
            O:"gtceu:obsidian_plate",
            I:"gtceu:ender_pearl_plate"
        }

    )



})