GTCEuServerEvents.oreVeins(event => {

    event.add('gtceu:galena_nether', vein => vein
        .weight(40).clusterSize(32).density(0.25)
        .layer('nether')
        .heightRangeUniform(0, 45)
        .layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Galena).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Silver).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Lead).size(1, 1))
            )
        )
        .surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Galena)
            .density(0.2)
            .radius(5)
        )
    )

})