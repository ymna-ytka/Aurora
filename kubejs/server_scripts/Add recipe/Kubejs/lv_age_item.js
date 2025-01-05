ServerEvents.recipes(event=>{

    event.shaped("kubejs:carbide_silicon_orb",

        [
            "FPF",
            "PHP",
            "FPF"
        ],

        {
            F:"gtceu:carbide_silicon_foil",
            P:"gtceu:carbide_silicon_plate",
            H:"forge:tools/hammers"
        }

    )

    event.recipes.gtceu.assembler('carbide_silicon_orb_assemb')

    .itemInputs(
        "4x gtceu:carbide_silicon_foil",
        "4x gtceu:carbide_silicon_plate"
    )

    .itemOutputs(
        "kubejs:carbide_silicon_orb"
    )
    .duration(400)
    .EUt(32)


    event.recipes.gtceu.canner('graphite_orb_fill')

    .itemInputs(
        "kubejs:carbide_silicon_orb",
        "2x gtceu:graphite_dust",
    )

    .itemOutputs(
        "kubejs:carbide_silicon_fill_orb"
    )
    .duration(1600)
    .EUt(16)

    event.shaped("kubejs:wrough_iron_bender_path",

        [
            " R ",
            "SGS",
            "FDC"
        ],

        {
            R:"gtceu:wrought_iron_rod",
            D:"gtceu:double_wrought_iron_plate",
            S:"gtceu:wrought_iron_screw",
            G:"gtceu:wrought_iron_gear",
            F:"forge:tools/files",
            C:"forge:tools/screwdrivers"
        }

    )

    event.recipes.gtceu.assembler('wrough_iron_bender_path_assemb')

    .itemInputs(
        "gtceu:wrought_iron_rod",
        "gtceu:double_wrought_iron_plate",
        "gtceu:wrought_iron_gear",
    )

    .inputFluids(
        Fluid.of("gtceu:lubricant", 2400)
    )

    .itemOutputs(
        "kubejs:wrough_iron_bender_path"
    )
    .duration(400)
    .EUt(32)

})