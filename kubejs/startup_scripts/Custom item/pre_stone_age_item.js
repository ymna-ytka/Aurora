StartupEvents.registry('item', event=> {

    event.create('pebbles')
    .displayName('Галька')
    .texture('kubejs:item/pre_stone_age/pebbles')

    event.create('mini_cobblestone')
    .displayName('Шматок кругляка')
    .texture('kubejs:item/pre_stone_age/mini_cobblestone')

    event.create('piece_wooden_rubber')
    .displayName('Шматок дерев\'яної резини')
    .texture('kubejs:item/pre_stone_age/piece_wooden_rubber')

    event.create('wood_mold')
    .displayName('Дерев\'яна форма')
    .maxDamage(64)
    .texture('kubejs:item/pre_stone_age/wood_mold')

    event.create('stone_ingot')
    .displayName('Кам\'яний злиток')
    .texture('kubejs:item/pre_stone_age/stone_ingot')

    event.create('stone_plate')
    .displayName('Кам\'яний пластина')
    .texture('kubejs:item/pre_stone_age/stone_plate')

    event.create('stone_mold')
    .displayName('Кам\'яний форма')
    .maxDamage(256)
    .texture('kubejs:item/pre_stone_age/stone_mold')




})