ServerEvents.recipes( event=> {
 
    //Chest
    event.shaped("expandedstorage:iron_chest",

        [
            "SDS",
            "DBD",
            "HDC"
        ],

        {
            S:"gtceu:iron_screw",
            D:"gtceu:double_iron_plate",
            B:"minecraft:chest",
            H:"#forge:tools/hammers",
            C:"#forge:tools/screwdrivers"
        }

    )

    event.shaped("expandedstorage:gold_chest",

        [
            "SDS",
            "DBD",
            "HDC"
        ],

        {
            S:"gtceu:gold_screw",
            D:"gtceu:double_gold_plate",
            B:"minecraft:chest",
            H:"#forge:tools/hammers",
            C:"#forge:tools/screwdrivers"
        }

    )

    event.shaped("expandedstorage:diamond_chest",

        [
            "SDS",
            "DBD",
            "HDC"
        ],

        {
            S:"gtceu:diamond_screw",
            D:"gtceu:diamond_plate",
            B:"minecraft:chest",
            H:"#forge:tools/hammers",
            C:"#forge:tools/screwdrivers"
        }

    )

    event.shaped("expandedstorage:obsidian_chest",

        [
            "SDS",
            "DBD",
            "HDC"
        ],

        {
            S:"gtceu:obsidian_screw",
            D:"gtceu:obsidian_plate",
            B:"minecraft:chest",
            H:"#forge:tools/hammers",
            C:"#forge:tools/screwdrivers"
        }

    )

    event.shaped("expandedstorage:netherite_chest",

        [
            "SDS",
            "DBD",
            "HDC"
        ],

        {
            S:"gtceu:netherite_screw",
            D:"gtceu:netherite_plate",
            B:"minecraft:chest",
            H:"#forge:tools/hammers",
            C:"#forge:tools/screwdrivers"
        }

    )

    event.shaped("4x expandedstorage:iron_mini_chest",

        [
            " P ",
            "PCP",
            " P "
        ],

        {
            P:"minecraft:paper",
            C:"expandedstorage:iron_chest"
        }

    )

    event.shaped("4x expandedstorage:gold_mini_chest",

        [
            " P ",
            "PCP",
            " P "
        ],

        {
            P:"minecraft:paper",
            C:"expandedstorage:gold_chest"
        }

    )

    event.shaped("4x expandedstorage:diamond_mini_chest",

        [
            " P ",
            "PCP",
            " P "
        ],

        {
            P:"minecraft:paper",
            C:"expandedstorage:diamond_chest"
        }

    )

    event.shaped("4x expandedstorage:obsidian_mini_chest",

        [
            " P ",
            "PCP",
            " P "
        ],

        {
            P:"minecraft:paper",
            C:"expandedstorage:obsidian_chest"
        }

    )

    event.shaped("4x expandedstorage:netherite_mini_chest",

        [
            " P ",
            "PCP",
            " P "
        ],

        {
            P:"minecraft:paper",
            C:"expandedstorage:netherite_chest"
        }

    )

    event.recipes.gtceu.assembler("iron_chest_assemb")

    .itemInputs(
        "minecraft:chest",
        "4x gtceu:double_iron_plate"
    )

    .itemOutputs(
        "expandedstorage:iron_chest"
    )

    .duration(800)
    .EUt(GTValues.VA[GTValues.LV])
    .circuit(4)

    event.recipes.gtceu.assembler("gold_chest_assemb")

    .itemInputs(
        "minecraft:chest",
        "4x gtceu:double_gold_plate"
    )

    .itemOutputs(
        "expandedstorage:gold_chest"
    )

    .duration(800)
    .EUt(GTValues.VA[GTValues.MV])
    .circuit(4)

    event.recipes.gtceu.assembler("diamond_chest_assemb")

    .itemInputs(
        "minecraft:chest",
        "4x gtceu:diamond_plate"
    )

    .itemOutputs(
        "expandedstorage:diamond_chest"
    )

    .duration(800)
    .EUt(GTValues.VA[GTValues.MV])
    .circuit(4)

    event.recipes.gtceu.assembler("obsidian_chest_assemb")

    .itemInputs(
        "minecraft:chest",
        "4x gtceu:obsidian_plate"
    )

    .itemOutputs(
        "expandedstorage:obsidian_chest"
    )

    .duration(800)
    .EUt(GTValues.VA[GTValues.MV])
    .circuit(4)

    event.recipes.gtceu.assembler("netherite_chest_assemb")

    .itemInputs(
        "minecraft:chest",
        "4x gtceu:netherite_plate"
    )

    .itemOutputs(
        "expandedstorage:netherite_chest"
    )

    .duration(800)
    .EUt(GTValues.VA[GTValues.HV])
    .circuit(4)

    //
    
    //Barrel
    event.shaped("expandedstorage:iron_barrel",

        [
            "SDS",
            "DBD",
            "HDC"
        ],

        {
            S:"gtceu:iron_screw",
            D:"gtceu:double_iron_plate",
            B:"minecraft:barrel",
            H:"#forge:tools/hammers",
            C:"#forge:tools/screwdrivers"
        }

    )

    event.shaped("expandedstorage:gold_barrel",

        [
            "SDS",
            "DBD",
            "HDC"
        ],

        {
            S:"gtceu:gold_screw",
            D:"gtceu:double_gold_plate",
            B:"minecraft:barrel",
            H:"#forge:tools/hammers",
            C:"#forge:tools/screwdrivers"
        }

    )

    event.shaped("expandedstorage:diamond_barrel",

        [
            "SDS",
            "DBD",
            "HDC"
        ],

        {
            S:"gtceu:diamond_screw",
            D:"gtceu:diamond_plate",
            B:"minecraft:barrel",
            H:"#forge:tools/hammers",
            C:"#forge:tools/screwdrivers"
        }

    )

    event.shaped("expandedstorage:obsidian_barrel",

        [
            "SDS",
            "DBD",
            "HDC"
        ],

        {
            S:"gtceu:obsidian_screw",
            D:"gtceu:obsidian_plate",
            B:"minecraft:barrel",
            H:"#forge:tools/hammers",
            C:"#forge:tools/screwdrivers"
        }

    )

    event.shaped("expandedstorage:netherite_barrel",

        [
            "SDS",
            "DBD",
            "HDC"
        ],

        {
            S:"gtceu:netherite_screw",
            D:"gtceu:netherite_plate",
            B:"minecraft:barrel",
            H:"#forge:tools/hammers",
            C:"#forge:tools/screwdrivers"
        }

    )

    event.shaped("4x expandedstorage:iron_mini_barrel",

        [
            " P ",
            "PCP",
            " P "
        ],

        {
            P:"minecraft:paper",
            C:"expandedstorage:iron_barrel"
        }

    )

    event.shaped("4x expandedstorage:gold_mini_barrel",

        [
            " P ",
            "PCP",
            " P "
        ],

        {
            P:"minecraft:paper",
            C:"expandedstorage:gold_barrel"
        }

    )

    event.shaped("4x expandedstorage:diamond_mini_barrel",

        [
            " P ",
            "PCP",
            " P "
        ],

        {
            P:"minecraft:paper",
            C:"expandedstorage:diamond_barrel"
        }

    )

    event.shaped("4x expandedstorage:obsidian_mini_barrel",

        [
            " P ",
            "PCP",
            " P "
        ],

        {
            P:"minecraft:paper",
            C:"expandedstorage:obsidian_barrel"
        }

    )

    event.shaped("4x expandedstorage:netherite_mini_barrel",

        [
            " P ",
            "PCP",
            " P "
        ],

        {
            P:"minecraft:paper",
            C:"expandedstorage:netherite_barrel"
        }

    )

    event.recipes.gtceu.assembler("iron_barrel_assemb")

    .itemInputs(
        "minecraft:barrel",
        "4x gtceu:double_iron_plate"
    )

    .itemOutputs(
        "expandedstorage:iron_barrel"
    )

    .duration(800)
    .EUt(GTValues.VA[GTValues.LV])
    .circuit(4)

    event.recipes.gtceu.assembler("gold_barrel_assemb")

    .itemInputs(
        "minecraft:barrel",
        "4x gtceu:double_gold_plate"
    )

    .itemOutputs(
        "expandedstorage:gold_barrel"
    )

    .duration(800)
    .EUt(GTValues.VA[GTValues.MV])
    .circuit(4)

    event.recipes.gtceu.assembler("diamond_barrel_assemb")

    .itemInputs(
        "minecraft:barrel",
        "4x gtceu:diamond_plate"
    )

    .itemOutputs(
        "expandedstorage:diamond_barrel"
    )

    .duration(800)
    .EUt(GTValues.VA[GTValues.MV])
    .circuit(4)

    event.recipes.gtceu.assembler("obsidian_barrel_assemb")

    .itemInputs(
        "minecraft:barrel",
        "4x gtceu:obsidian_plate"
    )

    .itemOutputs(
        "expandedstorage:obsidian_barrel"
    )

    .duration(800)
    .EUt(GTValues.VA[GTValues.MV])
    .circuit(4)

    event.recipes.gtceu.assembler("netherite_barrel_assemb")

    .itemInputs(
        "minecraft:barrel",
        "4x gtceu:netherite_plate"
    )

    .itemOutputs(
        "expandedstorage:netherite_barrel"
    )

    .duration(800)
    .EUt(GTValues.VA[GTValues.HV])
    .circuit(4)

//


})