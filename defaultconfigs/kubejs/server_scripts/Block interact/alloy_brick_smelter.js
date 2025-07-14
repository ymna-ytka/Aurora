BlockEvents.rightClicked('gtac:masonry_bricks', event => {
    const { player, item, block } = event;

    if (item.id === 'gtac:wooden_brick_form') {
        block.set('gtac:alloy_brick_smelter');

        if (!player.isCreative()) {
            item.damage(1);
            if (item.count <= 0) {
                player.mainHandItem = null;
            }
        }

    }
});