GTCEuServerEvents.oreVeins(event => {

    event.add('gtceu:nickel_twilight', vein => vein
        .weight(25).clusterSize(25).density(0.25)
        .layer('twilight')
        .heightRangeUniform(-25, -5)
        .layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Garnierite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Nickel).size(1, 1))
                .layer(l => l.weight(2).mat(GTMaterials.Cobaltite).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Pentlandite).size(1, 1))
            )
        )
        .surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Nickel)
            .density(0.2)
            .radius(5)
        )
    )

    event.add('gtceu:mica_twilight', vein => vein
        .weight(20).clusterSize(32).density(0.25)
        .layer('twilight')
        .heightRangeUniform(-25, -5)
        .layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Kyanite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Mica).size(1, 1))
                .layer(l => l.weight(2).mat(GTMaterials.Bauxite).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Pollucite).size(1, 1))
            )
        )
        .surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Mica)
            .density(0.2)
            .radius(3)
        )
    )

    event.add('gtceu:twilight_gold', vein => vein
        .weight(15).clusterSize(32).density(0.25)
        .layer('twilight')
        .heightRangeUniform(-25, -5)
        .layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).block(() => Block.getBlock('gtceu:twilight_gold_ore')).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Gold).size(1, 1))
                .layer(l => l.weight(2).mat(GTMaterials.Iron).size(1, 1))
            )
        )
        .surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Gold)
            .density(0.2)
            .radius(3)
        )
    )

})