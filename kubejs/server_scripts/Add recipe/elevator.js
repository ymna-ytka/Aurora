ServerEvents.recipes( event=> {

    event.recipes.gtceu.assembler('elevator_white')

        .itemInputs(
            "2x gtceu:polyethylene_plate",
            "3x gtceu:nether_quartz_plate",
            "2x minecraft:lead",
            "gtceu:mv_electric_motor"
        )

        .inputFluids(
            Fluid.of("gtac:ender_pearl", 144)
        )

        .itemOutputs(
            "elevatorid:elevator_white"
        )
        .duration(900)
        .EUt(76)

})