ServerEvents.recipes( event=> {

    event.shaped("kubejs:carbide_silicon_orb",

        [
            "FPF",
            "PHP",
            "FPF"
        ],

        {
            F:"gtceu:carbide_silicon_foil",
            P:"gtceu:carbide_silicon_plate",
            H:"#forge:tools/hammers"
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

    .duration (400)
    .EUt      (32)


    event.recipes.gtceu.canner('graphite_orb_fill')

    .itemInputs(
        "kubejs:carbide_silicon_orb",
        "2x gtceu:graphite_dust",
    )

    .itemOutputs(
        "kubejs:carbide_silicon_fill_orb"
    )

    .duration (1600)
    .EUt      (16)

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
        "kubejs:wrough_iron_bender_path"
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
        "kubejs:plant_fibers", 3300, 150    
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
        "kubejs:plant_fibers", 5000, 150    
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
        "kubejs:plant_fibers", 8000, 150    
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
        "kubejs:plant_fibers"
    )

    .duration (50)
    .EUt      (20)

    event.recipes.gtceu.assembler('plant_fiber_mesh_assemb')

    .itemInputs(
        "2x kubejs:plant_fibers",
    )

    .itemOutputs(
        "kubejs:plant_fiber_mesh"
    )

    .duration (50)
    .circuit  (2)
    .EUt      (GTValues.VA[GTValues.LV])

    event.recipes.gtceu.electric_blast_furnace('plant_fiber_mesh_ebf')

    .itemInputs(
        "kubejs:plant_fiber_mesh",
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
        "kubejs:empty_flask"
    )

    .duration(200)
    .EUt(GTValues.VA[GTValues.ULV])
    .circuit(4)

    event.recipes.gtceu.bender("empty_flask_bender_tin")

    .itemInputs(
        "2x gtceu:tin_plate"
    )

    .itemOutputs(
        "kubejs:empty_flask"
    )

    .duration(200)
    .EUt(GTValues.VA[GTValues.MV])
    .circuit(4)

    event.shaped('kubejs:ballon_mold',

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
            'kubejs:ballon_mold'
        )

        .inputFluids(
            Fluid.of("gtceu:glass", 288)
        )

        .itemOutputs(
            'kubejs:glass_balloon'
        )
        .duration(300)
        .EUt(GTValues.VHA[GTValues.LV])
    
    event.recipes.gtceu.electric_blast_furnace('raw_alum_ing')
          
        .itemInputs(
            "gtceu:coke_block",
            "2x gtceu:aluminium_dust"
        )

        .itemOutputs(
            "kubejs:raw_aluminium_ingot"
        )

        .outputFluids(
            Fluid.of("gtceu:carbon_dioxide", 100 )
        )
        .duration(1200) 
        .EUt(GTValues.VA[GTValues.MV])
        .blastFurnaceTemp(1800)

    event.recipes.gtceu.natural_cleaner('clean_alum_ing')
          
        .itemInputs(
            "kubejs:raw_aluminium_ingot",
            "gtceu:steel_rod"
        )

        .inputFluids(
            Fluid.of("gtceu:sulfuric_acid", )
        )

        .itemOutputs(
            "kubejs:clean_aluminium_ingot",
        )

        .chancedOutput(
            "gtceu:silicon_dust", 1100, 400
        )

        .outputFluids(
            Fluid.of("gtceu:carbon_dioxide", 100 )
        )
        .duration(600) 
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.arc_furnace('high_qual_alum_ing')
       
        .itemInputs(
            "kubejs:clean_aluminium_ingot"
        )

        .inputFluids(
            Fluid.of("gtceu:oxygen", 60)
        )

        .itemOutputs(
            "kubejs:high_quality_aluminium_ingot"
        )
        .duration(60)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.electric_blast_furnace('flint_dye')
       
        .itemInputs(
            "minecraft:lime_dye",
            "gtceu:flint_dust"
        )

        .itemOutputs(
            "kubejs:flint_dye"
        )
        .duration(300)
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(1)
        .blastFurnaceTemp(900)

    event.recipes.gtceu.compressor('trophy_tablet')
    
        .itemInputs(
            "9x gtceu:twilight_gold_plate"
        )

        .itemOutputs(
            'kubejs:trophy_tablet'
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.alloy_smelter('gtceu:alloy_smelter/phantom_armor_set')    

        .itemInputs(
            "twilightforest:phantom_helmet",
            "twilightforest:phantom_chestplate"
        )

        .itemOutputs(
            'kubejs:phantom_armor_set'
        )

        .duration(6000)
        .EUt(GTValues.V[GTValues.LV])


    event.recipes.gtceu.chemical_reactor('gtceu:chemical_reactor/trash')    

        .itemInputs(
            "20x gtceu:paper_dust",
            "gtceu:polyethylene_dust",
            "gtceu:bio_chaff"
        )

        .inputFluids(
            
            Fluid.of("minecraft:water", 100)

        )

        .outputFluids(

            Fluid.of("gtceu:polluted_water", 50)

        )

        .itemOutputs(
            '20x kubejs:trash'
        )

        .duration(200)
        .EUt(GTValues.VH[GTValues.ULV])

    event.shaped("kubejs:incorrect_mold",

        [
            "  C",
            "   ",
            " R "
        ],

        {
            R:"gtceu:empty_mold",
            C:"#forge:tools/hammers"
        }

    )

    event.recipes.gtceu.alloy_smelter('metal_scrap')

        .itemInputs(
            "#balm:ingots",
        )

        .notConsumable(
            "kubejs:incorrect_mold"
        )

        .itemOutputs(
            "kubejs:metal_scrap"
        )
        .duration(80)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.gtceu.centrifuge('toxic_substance')

        .itemInputs(
            "2x kubejs:trash",
            "kubejs:scrap_metal"
        )

        .inputFluids(
            Fluid.of("minecraft:water", 1000)
        )

        .itemOutputs(
            "4x kubejs:toxic_substance"
        )
        .duration(320)
        .EUt(GTValues.VHA[GTValues.MV])

    event.recipes.gtceu.chemical_reactor('break_leaf')
    
        .itemInputs(
            "naturesaura:gold_leaf",
            "kubejs:toxic_substance"
        )

        .itemOutputs(
            "kubejs:broken_leaf"
        )
        .duration(200)
        .EUt(GTValues.VHA[GTValues.LV])


})