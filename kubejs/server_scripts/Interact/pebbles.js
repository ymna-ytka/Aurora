BlockEvents.rightClicked('minecraft:stone', event => {

    if (event.player.isCrouching()) {

        event.player.give('1x gtac:pebbles')

    }
    
});