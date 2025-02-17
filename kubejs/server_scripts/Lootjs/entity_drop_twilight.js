LootJS.modifiers((event) => {

    event
        .addEntityLootModifier("twilightforest:naga")
        .randomChanceWithLooting(0.3, 4)
        .addLoot("kubejs:essence_naga");

        event
        .addEntityLootModifier("twilightforest:naga")
        .removeLoot("twilightforest:naga_trophy");
    
});