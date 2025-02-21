StartupEvents.registry('item', event=> {

    event.create('bad_stone_hammer', 'sword')
    .texture('kubejs:item/pre_stone_age/bad_stone_hammer')
    .displayName('Кам\яний молот')
    .tier('stone')
    .maxDamage(16)
    .attackDamageBaseline(1)
    .speedBaseline(-3.6)

})