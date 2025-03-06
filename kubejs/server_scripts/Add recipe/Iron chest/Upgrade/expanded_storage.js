ServerEvents.recipes( event=> {

    event.shaped("ironchest:iron_to_gold_chest_upgrade",

        [
            "SDS",
            " I ",
            "HDC"
        ],

        {
            S:"gtceu:gold_screw",
            D:"gtceu:double_gold_plate",
            I:"gtceu:iron_plate",
            H:"#forge:tools/hammers",
            C:"#forge:tools/screwdrivers"
        }

    )

    event.shaped("ironchest:gold_to_diamond_chest_upgrade",

        [
            "SDS",
            " I ",
            "HDC"
        ],

        {
            S:"gtceu:diamond_screw",
            D:"gtceu:diamond_plate",
            I:"gtceu:gold_plate",
            H:"#forge:tools/hammers",
            C:"#forge:tools/screwdrivers"
        }

    )

    event.shaped("ironchest:diamond_to_obsidian_chest_upgrade",

        [
            "SDS",
            " B ",
            "HDC"
        ],

        {
            S:"gtceu:obsidian_screw",
            D:"gtceu:obsidian_plate",
            B:"gtceu:diamond_plate",
            H:"#forge:tools/hammers",
            C:"#forge:tools/screwdrivers"
        }

    )

    event.shaped("ironchest:diamond_to_crystal_chest_upgrade",

        [
            "SDS",
            " B ",
            "HDC"
        ],

        {
            S:"gtceu:glass_screw",
            D:"gtceu:glass_plate",
            B:"gtceu:diamond_plate",
            H:"#forge:tools/hammers",
            C:"#forge:tools/screwdrivers"
        }

    )

    event.shaped("ironchest:wood_to_iron_chest_upgrade",

        [
            "SDS",
            " I ",
            "HDC"
        ],

        {
            S:"gtceu:iron_screw",
            D:"gtceu:double_iron_plate",
            I:"#minecraft:planks",
            H:"#forge:tools/hammers",
            C:"#forge:tools/screwdrivers"
        }

    )

})