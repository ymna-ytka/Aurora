ServerEvents.recipes( event=> {
 
    //Chest
    event.shaped("ironchest:iron_chest",

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

    event.shaped("ironchest:gold_chest",

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

    event.shaped("ironchest:diamond_chest",

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

    event.shaped("ironchest:obsidian_chest",

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

    event.shaped("ironchest:crystal_chest",

        [
            "SDS",
            "DBD",
            "HDC"
        ],

        {
            S:"gtceu:glass_screw",
            D:"gtceu:glass_plate",
            B:"minecraft:chest",
            H:"#forge:tools/hammers",
            C:"#forge:tools/screwdrivers"
        }

    )

    event.recipes.gtceu.assembler("iron_chest_assemb")

    .itemInputs(
        "minecraft:chest",
        "4x gtceu:double_iron_plate"
    )

    .itemOutputs(
        "ironchest:iron_chest"
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
        "ironchest:gold_chest"
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
        "ironchest:diamond_chest"
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
        "ironchest:obsidian_chest"
    )

    .duration(800)
    .EUt(GTValues.VA[GTValues.MV])
    .circuit(4)

    event.recipes.gtceu.assembler("crystal_chest_assemb")

    .itemInputs(
        "minecraft:chest",
        "4x gtceu:glass_plate"
    )

    .itemOutputs(
        "ironchest:crystal_chest"
    )

    .duration(800)
    .EUt(GTValues.VA[GTValues.MV])
    .circuit(4)

    //
    


})