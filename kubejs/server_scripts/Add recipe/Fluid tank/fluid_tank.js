ServerEvents.recipes(event =>{

    event.shaped("fluidtank:tank_wood",

        [
            "BPB",
            "IPI",
            "III"
        ],

        {
            B:"minecraft:bucket",
            P:"gtceu:double_iron_plate",
            I:"gtceu:sponge_metal_plate"
        }


    )

    event.shaped("fluidtank:tank_stone",

        [
            "SDS",
            "PBP",
            "HDC"
        ],

        {
            B:"fluidtank:tank_wood",
            P:"#forge:glass_panes",
            S:"gtceu:steel_screw",
            D:"gtceu:double_steel_plate",
            H:"#forge:tools/hammers",
            C:"#forge:tools/screwdrivers"
        }


    )

    event.shaped("fluidtank:tank_lead",

        [
            "SDS",
            "PBP",
            "HDC"
        ],

        {
            B:"fluidtank:tank_wood",
            P:"#forge:glass_panes",
            S:"gtceu:lead_screw",
            D:"gtceu:double_lead_plate",
            H:"#forge:tools/hammers",
            C:"#forge:tools/screwdrivers"
        }


    )

    event.shaped("fluidtank:tank_bronze",

        [
            "SDS",
            "PBP",
            "HDC"
        ],

        {
            B:"fluidtank:tank_wood",
            P:"#forge:glass_panes",
            S:"gtceu:bronze_screw",
            D:"gtceu:double_bronze_plate",
            H:"#forge:tools/hammers",
            C:"#forge:tools/screwdrivers"
        }


    )

    event.recipes.gtceu.assembler('bad_bronze_tank_assemb')

        .itemInputs(
            "5x gtceu:bad_bronze_plate",
            "2x gtceu:double_iron_plate"
        )

        .inputFluids(
            Fluid.of("gtceu:glass", 72)
        )

        .itemOutputs(
            "fluidtank:tank_wood"
        )

        .duration(400)
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(1)

    event.recipes.gtceu.assembler('steel_tank_assemb')

        .itemInputs(
            "2x gtceu:double_steel_plate",
            "fluidtank:tank_wood"
        )

        .inputFluids(
            Fluid.of("gtceu:glass", 72)
        )

        .itemOutputs(
            "fluidtank:tank_stone"
        )

        .duration(400)
        .EUt(GTValues.VA[GTValues.MV])
        .circuit(1)

    event.recipes.gtceu.assembler('lead_tank_assemb')

        .itemInputs(
            "2x gtceu:double_lead_plate",
            "fluidtank:tank_wood"
        )

        .inputFluids(
            Fluid.of("gtceu:glass", 72)
        )

        .itemOutputs(
            "fluidtank:tank_lead"
        )

        .duration(400)
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(1)

    event.recipes.gtceu.assembler('bronze_tank_assemb')

        .itemInputs(
            "2x gtceu:double_bronze_plate",
            "fluidtank:tank_wood"
        )
        
        .inputFluids(
            Fluid.of("gtceu:glass", 72)
        )

        .itemOutputs(
            "fluidtank:tank_bronze"
        )

        .duration(400)
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(1)
       
})