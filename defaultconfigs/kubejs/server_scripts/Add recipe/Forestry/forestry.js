ServerEvents.recipes( event => {

    event.shaped("forestry:worktable",

        [
            "SHS",
            "PWP",
            "SCS"
        ],

        {
            S:"gtceu:wood_screw",
            H:"minecraft:bookshelf",
            P:"minecraft:paper",
            W:"minecraft:crafting_table",
            C:"minecraft:chest"
        }

    )

    event.recipes.gtceu.assembler('worktable_forestry')

        .itemInputs(
            "minecraft:bookshelf",
            "2x minecraft:paper",
            "minecraft:crafting_table",
            "minecraft:chest"
        )

        .itemOutputs(
            "forestry:worktable"
        )
        .duration(300)
        .EUt(16)

})