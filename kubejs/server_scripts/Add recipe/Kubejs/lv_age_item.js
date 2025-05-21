ServerEvents.recipes( event=> {

    event.shaped("gtac:carbide_silicon_orb",

        [
            "FPF",
            "PHP",
            "FPF"
        ],

        {
            F:"gtac:carbide_silicon_foil",
            P:"gtac:carbide_silicon_plate",
            H:"#forge:tools/hammers"
        }

    )

    event.recipes.gtceu.assembler('carbide_silicon_orb_assemb')

    .itemInputs(
        "4x gtac:carbide_silicon_foil",
        "4x gtac:carbide_silicon_plate"
    )

    .itemOutputs(
        "gtac:carbide_silicon_orb"
    )

    .duration (400)
    .EUt      (32)


    event.recipes.gtceu.canner('graphite_orb_fill')

    .itemInputs(
        "gtac:carbide_silicon_orb",
        "2x gtceu:graphite_dust",
    )

    .itemOutputs(
        "gtac:fill_carbide_silicon_orb"
    )

    .duration (1600)
    .EUt      (16)

    event.shaped("gtac:wrough_iron_bender_path",

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
            F:"#forge:tools/files",
            C:"#forge:tools/screwdrivers"
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
        "gtac:wrough_iron_bender_path"
    )

    .duration (400)
    .EUt      (32)

    event.recipes.gtceu.autoclave('plant_fibers_autoclave_biomass')

    .itemInputs(
        "16x gtceu:plant_ball",
    )

    .inputFluids(
        Fluid.of("gtceu:biomass", 8)
    )
    
    .chancedOutput(
        "gtac:plant_fibers", 3300, 150    
    )

    .duration (200)
    .EUt      (20)

    event.recipes.gtceu.autoclave('plant_fibers_autoclave_methanol')

    .itemInputs(
        "16x gtceu:plant_ball",
    )

    .inputFluids(
        Fluid.of("gtceu:methanol", 8)
    )

    .chancedOutput(
        "gtac:plant_fibers", 5000, 150    
    )

    .duration (150)
    .EUt      (20)

    event.recipes.gtceu.autoclave('plant_fibers_autoclave_diesel')

    .itemInputs(
        "16x gtceu:plant_ball",
    )

    .inputFluids(
        Fluid.of("gtceu:diesel", 8)
    )

    .chancedOutput(
        "gtac:plant_fibers", 8000, 150    
    )

    .duration (100)
    .EUt      (20)

    event.recipes.gtceu.autoclave('plant_fibers_autoclave_b_diesel')

    .itemInputs(
        "16x gtceu:plant_ball",
    )

    .inputFluids(
        Fluid.of("gtceu:cetane_boosted_diesel", 8)
    )

    .itemOutputs(
        "gtac:plant_fibers"
    )

    .duration (50)
    .EUt      (20)

    event.recipes.gtceu.assembler('plant_fiber_mesh_assemb')

    .itemInputs(
        "2x gtac:plant_fibers",
    )

    .itemOutputs(
        "gtac:plant_fiber_mesh"
    )

    .duration (50)
    .circuit  (2)
    .EUt      (GTValues.VA[GTValues.LV])

    event.recipes.gtceu.electric_blast_furnace('plant_fiber_mesh_ebf')

    .itemInputs(
        "gtac:plant_fiber_mesh",
    )

    .itemOutputs(
        "gtceu:carbon_fiber_mesh"
    )
    
    .duration (50)
    .EUt      (20)

    event.recipes.gtceu.bender("empty_flask_bender_hull")

    .itemInputs(
        "gtceu:lv_battery_hull"
    )

    .itemOutputs(
        "gtac:empty_flask"
    )

    .duration(200)
    .EUt(GTValues.VA[GTValues.ULV])
    .circuit(4)

    event.recipes.gtceu.bender("empty_flask_bender_tin")

    .itemInputs(
        "2x gtceu:tin_plate"
    )

    .itemOutputs(
        "gtac:empty_flask"
    )

    .duration(200)
    .EUt(GTValues.VA[GTValues.MV])
    .circuit(4)

    event.shaped('gtac:ballon_mold',

        [
            "  H",
            "   ",
            "M  "
        ],

        {
            H:"#forge:tools/hammers",
            M:"gtceu:empty_mold"
        }

    )

    event.recipes.gtceu.fluid_solidifier('glass_ballon_solid')

        .notConsumable(
            'gtac:ballon_mold'
        )

        .inputFluids(
            Fluid.of("gtceu:glass", 288)
        )

        .itemOutputs(
            'gtac:glass_balloon'
        )
        .duration(300)
        .EUt(GTValues.VHA[GTValues.LV])
    
})