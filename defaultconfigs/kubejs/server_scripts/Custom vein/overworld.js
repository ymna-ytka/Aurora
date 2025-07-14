GTCEuServerEvents.oreVeins(event => {

    event.add('gtceu:molybdenium_austria', vein => vein
        .weight(3).clusterSize(4).density(0.25)
        .layer('stone')
        .heightRangeUniform(20, 50)
        .layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Biotite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Molybdenum).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Almandine).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Grossular).size(1, 1))
            )
        )
        .surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Biotite)
            .density(0.2)
            .radius(5)
        )
    )

})