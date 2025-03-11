GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('air_cooler', 'simple')
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM)
        .definition((tier, builder) =>
            builder
                .langValue(GTValues.VLVH[tier] + " Air Cooler")
                .recipeType('air_cooler')
                .workableTieredHullRenderer('gtceu:block/machines/gas_collector')
        )

    event.create('cooler', 'simple')
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM)
        .definition((tier, builder) =>
            builder
                .langValue(GTValues.VLVH[tier] + " Cooler")
                .recipeType('cooler')
                .workableTieredHullRenderer('gtceu:block/machines/brewery')
        )

    event.create('twilight_farmer', 'simple')
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM)
        .definition((tier, builder) =>
            builder
                .langValue(GTValues.VLVH[tier] + " Twilight Farmer")
                .recipeType('cooler')
                .workableTieredHullRenderer('gtceu:block/machines/rock_crusher')
        )

})