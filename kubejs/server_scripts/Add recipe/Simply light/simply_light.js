ServerEvents.recipes( event=> {

    event.recipes.gtceu.assembler("edge_light_assemb")

        .itemInputs(
            "2x gtceu:glowstone_plate",
            "gtceu:steel_plate",
            "#gtceu:circuits/lv"
        )

        .inputFluids(
            Fluid.of("gtceu:tin_alloy", 144)
        )

        .itemOutputs(
            "12x simplylight:edge_light"
        )

        .duration(480)
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(12)

    event.recipes.gtceu.assembler('rodlamp_assemb')
         
        .itemInputs(
            "5x gtceu:glowstone_plate",
            "gtceu:steel_plate",
            "#gtceu:circuits/lv"
        )

        .inputFluids(
            Fluid.of("gtceu:tin_alloy", 144)
        )        

        .itemOutputs(
            "6x simplylight:rodlamp"
        )

        .duration(240)
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(6)

    event.recipes.gtceu.assembler('bulblamp_assemb')
         
        .itemInputs(
            "gtceu:glowstone_plate",
            "2x gtceu:steel_plate",
            "#gtceu:circuits/lv"
        )

        .inputFluids(
            Fluid.of("gtceu:tin_alloy", 72)
        )

        .itemOutputs(
            "12x simplylight:lightbulb"
        )

        .duration(480)
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(12)
    
    event.recipes.gtceu.assembler("walllamp_assemb")
    
        .itemInputs(
            "3x gtceu:steel_plate",
            "2x gtceu:glowstone_plate",
            "#gtceu:circuits/lv"
        )

        .inputFluids(
            Fluid.of("gtceu:tin_alloy", 144)
        )
        
        .itemOutputs(
            "8x simplylight:wall_lamp"
        )

        .duration(360)
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(8)
        
    event.recipes.gtceu.cutter("illumination_panel_assemb_lubricant")

        .itemInputs(
            "simplylight:illuminant_slab"
        )

        .inputFluids(
            Fluid.of("gtceu:lubricant", 2)
        )

        .itemOutputs(
           "2x simplylight:illuminant_panel"
        )
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.cutter("illumination_panel_assemb_dist_water")

        .itemInputs(
            "simplylight:illuminant_slab"
        )

        .inputFluids(
            Fluid.of("gtceu:distilled_water",6)
        )

        .itemOutputs(
           "2x simplylight:illuminant_panel"
        )
        .duration(150)
        .EUt(GTValues.VA[GTValues.LV])


    event.recipes.gtceu.cutter("illumination_panel_assemb_water")

        .itemInputs(
            "simplylight:illuminant_slab"
        )

        .inputFluids(
            Fluid.of("minecraft:water", 2)
        )

        .itemOutputs(
           "2x simplylight:illuminant_panel"
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.assembler("illuminant_slab_assemb")
    
        .itemInputs(
            "3x gtceu:glowstone_plate",
            "2x gtceu:steel_plate",
            "#gtceu:circuits/lv"   
        )

        .inputFluids(
            Fluid.of("gtceu:tin_alloy", 288)
        )

        .itemOutputs(
            "4x simplylight:illuminant_slab"
        )

        .duration(180)
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(4)
        
    event.recipes.gtceu.assembler("lamp_post_assemb")
    
        .itemInputs(
            "#simplylight:any_lamp_on",
            "gtceu:steel_plate",
            "gtceu:steel_rod",
            "#gtceu:circuits/lv"
        )

        .inputFluids(
            Fluid.of("gtceu:tin_alloy", 144)
        )

        .itemOutputs(
            "2x simplylight:lamp_post"
        )

        .duration(90)
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(2)

    event.recipes.gtceu.assembler("illumination_block_on_assemb")
    
        .itemInputs(
            "2x gtceu:glowstone_plate",
            "4x gtceu:steel_plate",
            "minecraft:redstone_torch",
            "2x #gtceu:circuits/lv"
        )

        .inputFluids(
            Fluid.of("gtceu:tin_alloy", 432)
        )

        .itemOutputs(
            "8x simplylight:illuminant_block_on"
        )
        
        .duration(360)
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(8)

    event.recipes.gtceu.assembler("illumination_block_assemb")
    
        .itemInputs(
            "2x gtceu:glowstone_plate",
            "4x gtceu:steel_plate",
            "gtceu:red_alloy_ingot",
            "2x #gtceu:circuits/lv"
        )

        .inputFluids(
            Fluid.of("gtceu:tin_alloy", 432)
        )

        .itemOutputs(
            "8x simplylight:illuminant_block"
        )

        .duration(360)
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(8)


})