BlockEvents.rightClicked('gtac:masonry_bricks', event => {
    const { player, item, block } = event;

    if (item.id === 'minecraft:iron_nugget') {
        block.set('gtac:stone_blast_furnace');

        if (!player.isCreative()) {
            item.damage(1);
            if (item.count <= 0) {
                player.mainHandItem = null;
            }
        }

    }
});

BlockEvents.rightClicked('#storagedrawers:full_drawers', event => {
    const { player, item, block } = event;

    if (item.id === 'minecraft:iron_nugget') {
        block.set('gtceu:masonry_item_import_bus');

        if (!player.isCreative()) {
            item.damage(1);
            if (item.count <= 0) {
                player.mainHandItem = null;
            }
        }

    }
});

BlockEvents.rightClicked('#storagedrawers:full_drawers', event => {
    const { player, item, block } = event;

    if (item.id === 'gtceu:lead_nugget') {
        block.set('gtceu:masonry_item_export_bus');

        if (!player.isCreative()) {
            item.damage(1);
            if (item.count <= 0) {
                player.mainHandItem = null;
            }
        }

    }
});