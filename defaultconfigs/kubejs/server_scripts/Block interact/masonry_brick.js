BlockEvents.rightClicked("minecraft:stone_bricks", event => {
    const { level, player, block, item } = event;

    // Перевірка, чи гравець тримає кам'яний кайл
    if (item.id !== 'kubejs:bad_stone_hammer') return;

    // Зламати блок
    block.set('minecraft:air');

    // Викинути 4 землі гравцеві
    if (!level.isClientSide()) {
        player.give(Item.of('gtac:masonry_brick', 4));

        // Зменшити міцність кайла
        if (!player.isCreative()) {
            item.damage(1);
            if (item.count <= 0) {
                player.mainHandItem = null;
            }
        }
    }

    // Повідомлення
    player.send('§aТи ламаєш цеглу — випадає 4 землі.');
});