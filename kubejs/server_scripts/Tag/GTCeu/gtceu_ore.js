ServerEvents.tags('block', event=>{

    //Asbetos
     event.remove('forge:needs_wood_tool', [
        'gtceu:asbestos_ore', 
        'gtceu:granite_asbestos_ore',
        'gtceu:diorite_asbestos_ore',
        'gtceu:andesite_asbestos_ore',
        'gtceu:red_granite_asbestos_ore',
        'gtceu:marble_asbestos_ore',
        'gtceu:deepslate_asbestos_ore',
        'gtceu:tuff_asbestos_ore'
      ])
  
      event.add('minecraft:needs_diamond_tool', [
        'gtceu:asbestos_ore', 
        'gtceu:granite_asbestos_ore',
        'gtceu:diorite_asbestos_ore',
        'gtceu:andesite_asbestos_ore',
        'gtceu:red_granite_asbestos_ore',
        'gtceu:marble_asbestos_ore',
        'gtceu:deepslate_asbestos_ore',
        'gtceu:tuff_asbestos_ore'
      ])
    //
    
    //Pyrolusite
    event.remove('minecraft:needs_stone_tool', [
      'gtceu:pyrolusite_ore', 
      'gtceu:granite_pyrolusite_ore',
      'gtceu:diorite_pyrolusite_ore',
      'gtceu:andesite_pyrolusite_ore',
      'gtceu:red_granite_pyrolusite_ore',
      'gtceu:marble_pyrolusite_ore',
      'gtceu:deepslate_pyrolusite_ore',
      'gtceu:tuff_pyrolusite_ore'
    ])

    event.add('minecraft:needs_diamond_tool', [
      'gtceu:pyrolusite_ore', 
      'gtceu:granite_pyrolusite_ore',
      'gtceu:diorite_pyrolusite_ore',
      'gtceu:andesite_pyrolusite_ore',
      'gtceu:red_granite_pyrolusite_ore',
      'gtceu:marble_pyrolusite_ore',
      'gtceu:deepslate_pyrolusite_ore',
      'gtceu:tuff_pyrolusite_ore'
    ])
    //

 

   
    
})