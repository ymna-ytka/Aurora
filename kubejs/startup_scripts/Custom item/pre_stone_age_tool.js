StartupEvents.registry('item', event=> {

    event.create('bad_stone_hammer', 'shovel')
    .texture('kubejs:item/pre_stone_age/bad_stone_hammer')
    .displayName('Давній кам\'яний молот')
    .tier('stone')
    .maxDamage(131)
    .attackDamageBaseline(1)
    .speedBaseline(-3.6)
    
})