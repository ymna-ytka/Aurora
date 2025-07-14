BlockEvents.rightClicked("minecraft:logs", (event) => {

    const { player, item, block } = event;

    if (item.id === "gtceu:sticky_resin") {

        player.give("gtac:piece_wooden_rubber");

        item.count--;

        event.cancel();
    }

});