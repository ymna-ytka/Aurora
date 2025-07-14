ServerEvents.recipes(event=>{
    
    event.shaped("2x minecraft:piston",

        [
            "TTT",
            "SIS",
            "SRS"
        ],

        {
            S:"minecraft:smooth_stone",
            T:"gtceu:treated_wood_frame",
            R:"gtceu:red_alloy_gear",
            I:"gtceu:steel_ingot"
        }

    )

    event.shaped("minecraft:piston",

        [
            "TTT",
            "SIS",
            "SRS"
        ],

        {
            S:"minecraft:smooth_stone",
            T:"gtceu:treated_wood_frame",
            R:"gtceu:red_alloy_gear",
            I:"gtceu:bronze_ingot"
        }

    )

    event.shaped("4x minecraft:piston",

        [
            "TTT",
            "SIS",
            "SRS"
        ],

        {
            S:"minecraft:smooth_stone",
            T:"gtceu:treated_wood_frame",
            R:"gtceu:red_alloy_gear",
            I:"gtceu:aluminium_ingot"
        }

    )

    event.shaped("8x minecraft:piston",

        [
            "TTT",
            "SIS",
            "SRS"
        ],

        {
            S:"minecraft:smooth_stone",
            T:"gtceu:treated_wood_frame",
            R:"gtceu:red_alloy_gear",
            I:"gtceu:titanium_ingot"
        }

    )

    event.recipes.gtceu.assembler('pistone_bronze')
    
        .itemInputs(
            "3x gtceu:treated_wood_frame",
            "4x minecraft:smooth_stone",
            "gtceu:red_alloy_gear",
            "gtceu:bronze_ingot"
        )

        .itemOutputs(
            "minecraft:piston"
        )

    .duration(100)    
    .EUt(16)    

    event.recipes.gtceu.assembler('pistone_steel')
    
        .itemInputs(
            "3x gtceu:treated_wood_frame",
            "4x minecraft:smooth_stone",
            "gtceu:red_alloy_gear",
            "gtceu:steel_ingot"
        )

        .itemOutputs(
            "2x minecraft:piston"
        )

    .duration(100)    
    .EUt(16)    

    event.recipes.gtceu.assembler('pistone_aluminium')
    
        .itemInputs(
            "3x gtceu:treated_wood_frame",
            "4x minecraft:smooth_stone",
            "gtceu:red_alloy_gear",
            "gtceu:aluminium_ingot"
        )

        .itemOutputs(
            "4x minecraft:piston"
        )

    .duration(100)    
    .EUt(16)    

    event.recipes.gtceu.assembler('pistone_titanium')
    
        .itemInputs(
            "3x gtceu:treated_wood_frame",
            "4x minecraft:smooth_stone",
            "gtceu:red_alloy_gear",
            "gtceu:titanium_ingot"
        )

        .itemOutputs(
            "8x minecraft:piston"
        )

    .duration(100)
    .EUt(16)

})