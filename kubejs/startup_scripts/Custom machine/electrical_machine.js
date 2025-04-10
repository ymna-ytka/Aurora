GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('air_cooler', 'simple')
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM)
        .definition((tier, builder) =>
            builder
                .langValue("Охолоджувач повітря")
                .recipeType('air_cooler')
                .workableTieredHullRenderer('gtceu:block/machines/gas_collector')
        )

    event.create('cooler', 'simple')
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM)
        .definition((tier, builder) =>
            builder
                .langValue("Охолоджувач")
                .recipeType('cooler')
                .workableTieredHullRenderer('gtceu:block/machines/brewery')
        )

    event.create('twilight_farmer', 'simple')
        .tiers(GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM)
        .definition((tier, builder) =>
            builder
                .langValue("Сутінковий фермер")
                .recipeType('twilight_farmer')
                .workableTieredHullRenderer('gtceu:block/machines/rock_crusher')
        )

    event.create('farmer', 'simple')
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM)
        .definition((tier, builder) =>
            builder
                .langValue("Фермер")
                .recipeType('farmer')
                .workableTieredHullRenderer('gtceu:block/machines/autoclave')
        )

})