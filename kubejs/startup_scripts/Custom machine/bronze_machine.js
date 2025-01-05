GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('steam_mixer', "steam")
        .hasHighPressure(false)
        .definition((hp,builder) =>
            builder
                .recipeType('bronze_mixer')
                .rotationState(RotationState.ALL)
                .workableTieredHullRenderer('gtceu:block/machines/mixer')
        )
})
