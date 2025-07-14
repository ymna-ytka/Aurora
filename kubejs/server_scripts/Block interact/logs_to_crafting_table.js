BlockEvents.rightClicked("#minecraft:logs", event => {
    const { player, item, block } = event;

    if (item.id === "minecraft:flint") {
        block.set("minecraft:crafting_table");

        if (!player.isCreative()) {
            item.damage(1);
            if (item.count <= 0) {
                player.mainHandItem = null;
            }
        }

    }
});