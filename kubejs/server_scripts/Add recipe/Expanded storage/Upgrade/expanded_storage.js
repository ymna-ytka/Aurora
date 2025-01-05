ServerEvents.recipes( event=> {

    event.shaped("expandedstorage:iron_to_gold_conversion_kit",

        [
            "SDS",
            " I ",
            "HDC"
        ],

        {
            S:"gtceu:gold_screw",
            D:"gtceu:gold_plate",
            I:"gtceu:iron_plate",
            H:"#forge:tools/hammers",
            C:"#forge:tools/screwdrivers"
        }

    )

    event.shaped("expandedstorage:gold_to_diamond_conversion_kit",

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

    event.shaped("expandedstorage:diamond_to_obsidian_conversion_kit",

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

    event.shaped("expandedstorage:obsidian_to_netherite_conversion_kit",

        [
            "SDS",
            " B ",
            "HDC"
        ],

        {
            S:"gtceu:netherite_screw",
            D:"gtceu:netherite_plate",
            B:"gtceu:obsidian_plate",
            H:"#forge:tools/hammers",
            C:"#forge:tools/screwdrivers"
        }

    )

    event.shaped("expandedstorage:wood_to_iron_conversion_kit",

        [
            "SDS",
            " I ",
            "HDC"
        ],

        {
            S:"gtceu:iron_screw",
            D:"gtceu:iron_plate",
            I:"#minecraft:planks",
            H:"#forge:tools/hammers",
            C:"#forge:tools/screwdrivers"
        }

    )

})