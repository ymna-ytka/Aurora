ServerEvents.recipes( event=>{

    event.recipes.gtceu.cutter('water_stone_plate')
    
        .itemInputs(
            "3x minecraft:smooth_stone_slab",
        )

        .inputFluids(
            Fluid.of("minecraft:water", 4)
        )

        .itemOutputs(
            "12x morered:stone_plate"
        )

    .duration(400)    
    .EUt(12)
    
        event.recipes.gtceu.cutter('distilled_water_stone_plate')
    
        .itemInputs(
            "3x minecraft:smooth_stone_slab",
        )

        .inputFluids(
            Fluid.of("gtceu:distilled_water", 3)
        )

        .itemOutputs(
            "12x morered:stone_plate"
        )

    .duration(300)    
    .EUt(12)
    
        event.recipes.gtceu.cutter('lubricant_stone_plate')
    
        .itemInputs(
            "3x minecraft:smooth_stone_slab",
        )

        .inputFluids(
            Fluid.of("gtceu:lubricant", 1)
        )

        .itemOutputs(
            "12x morered:stone_plate"
        )

    .duration(200)    
    .EUt(12)

    event.shaped("3x morered:stone_plate",

        [
            "   ",
            "PPP",
            "   "
        ],

        {
            P:"minecraft:smooth_stone_slab"
        }

    )

    event.shaped("morered:bitwise_diode",

        [
            " I ",
            "IQI",
            "PWP"
        ],

        {
            P:"morered:stone_plate",
            W:"morered:bundled_network_cable",
            Q:"minecraft:quartz",
            I:"gtceu:red_alloy_ingot"
        }

    )

    event.shaped("morered:bitwise_or_gate",

        [
            " I ",
            "GQI",
            "PWP"
        ],

        {
            P:"morered:stone_plate",
            W:"morered:bundled_network_cable",
            Q:"minecraft:quartz",
            I:"gtceu:red_alloy_ingot",
            G:"morered:or_gate"
        }

    )

    event.shaped("morered:bitwise_not_gate",

        [
            " I ",
            "GQI",
            "PWP"
        ],

        {
            P:"morered:stone_plate",
            W:"morered:bundled_network_cable",
            Q:"minecraft:quartz",
            I:"gtceu:red_alloy_ingot",
            G:"morered:not_gate"
        }

    )

    event.shaped("morered:bitwise_and_gate",

        [
            " I ",
            "GQI",
            "PWP"
        ],

        {
            P:"morered:stone_plate",
            W:"morered:bundled_network_cable",
            Q:"minecraft:quartz",
            I:"gtceu:red_alloy_ingot",
            G:"morered:and_gate"
        }

    )

    event.shaped("morered:bitwise_xor_gate",

        [
            " I ",
            "GQI",
            "PWP"
        ],

        {
            P:"morered:stone_plate",
            W:"morered:bundled_network_cable",
            Q:"minecraft:quartz",
            I:"gtceu:red_alloy_ingot",
            G:"morered:xor_gate"
        }

    )

    event.shaped("morered:bitwise_xnor_gate",

        [
            " I ",
            "GQI",
            "PWP"
        ],

        {
            P:"morered:stone_plate",
            W:"morered:bundled_network_cable",
            Q:"minecraft:quartz",
            I:"gtceu:red_alloy_ingot",
            G:"morered:xnor_gate"
        }

    )

    event.recipes.gtceu.assembler('rubber/bundled_network_cable')
    
        .itemInputs(
            "3x #morered:network_cables"
        )

        .inputFluids(
            Fluid.of("gtceu:rubber", 288)
        )

        .itemOutputs(
            "3x morered:bundled_network_cable"
        )

    .duration(100)    
    .EUt(7)
    
    event.recipes.gtceu.assembler('silicone_rubber/bundled_network_cable')
    
        .itemInputs(
            "3x #morered:network_cables"
        )

        .inputFluids(
            Fluid.of("gtceu:silicone_rubber", 144)
        )

        .itemOutputs(
            "3x morered:bundled_network_cable"
        )

    .duration(100)    
    .EUt(7)    
    
    event.recipes.gtceu.assembler('styrene_butadiene_rubber/bundled_network_cable')
    
        .itemInputs(
            "3x #morered:network_cables"
        )

        .inputFluids(
            Fluid.of("gtceu:styrene_butadiene_rubber", 72)
        )

        .itemOutputs(
            "3x morered:bundled_network_cable"
        )

    .duration(100)    
    .EUt(7)    


})