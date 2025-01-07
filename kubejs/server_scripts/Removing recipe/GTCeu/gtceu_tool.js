ServerEvents.recipes(event=>{
    event.shaped(Item.of('gtceu:flint_pickaxe', '{DisallowContainerItem:0b,GT.Behaviours:{},GT.Tool:{AttackDamage:2.0f,AttackSpeed:-2.8f,Damage:0,HarvestLevel:2,MaxDamage:63,ToolSpeed:5.5f},HideFlags:2}'),
        
        [
            "FFF",
            " S ",
            " S " 
        ],
        
        {
            F:"minecraft:flint",
            S:"kubejs:coal_stone_stick"  
        }
     
    )
    
    event.shaped(Item.of('gtceu:flint_sword', '{DisallowContainerItem:0b,GT.Behaviours:{},GT.Tool:{AttackDamage:4.0f,AttackSpeed:-2.4f,Damage:0,HarvestLevel:2,MaxDamage:63},HideFlags:2}').enchant('minecraft:fire_aspect', 2),
    
        [
            " F ",
            " F ",
            " S "
        ],

        {
            F:"minecraft:flint",
            S:"kubejs:coal_stone_stick"
        }

    )

    event.shaped(Item.of('gtceu:flint_knife', '{DisallowContainerItem:0b,GT.Behaviours:{},GT.Tool:{AttackDamage:1.0f,AttackSpeed:3.0f,Damage:0,HarvestLevel:2,MaxDamage:63},HideFlags:2}').enchant('minecraft:fire_aspect', 2),

        [
            "   ",
            " F ",
            " S "
              
        ],
        
        {
            F:"minecraft:flint",   
            S:"kubejs:coal_stone_stick"    
        }

    )
    
    event.shaped(Item.of('gtceu:flint_hoe', '{DisallowContainerItem:0b,GT.Behaviours:{},GT.Tool:{AttackDamage:0.0f,AttackSpeed:-1.0f,Damage:0,MaxDamage:63},HideFlags:2}'),

        [
            "FF ",
            " S ",
            " S "
        ],
        
        {
            F:"minecraft:flint",   
            S:"kubejs:coal_stone_stick"    
        }

    )

    event.shaped(Item.of('gtceu:flint_shovel', '{DisallowContainerItem:0b,GT.Behaviours:{},GT.Tool:{AttackDamage:2.5f,AttackSpeed:-3.0f,Damage:0,HarvestLevel:2,MaxDamage:63,ToolSpeed:5.5f},HideFlags:2}'),
        
        [
            " F ",
            " S ",
            " S "
        ],

        {
            F:"minecraft:flint",   
            S:"kubejs:coal_stone_stick"    
        }
    )

    event.shaped(Item.of('gtceu:flint_axe', '{DisallowContainerItem:0b,GT.Behaviours:{DisableShields:1b,TreeFelling:1b},GT.Tool:{AttackDamage:6.0f,AttackSpeed:-3.2f,Damage:0,HarvestLevel:2,MaxDamage:63,ToolSpeed:3.5f},HideFlags:2}'),
        
        [
            "FF ",
            "FS ",
            " S "
        ],

        {
            F:"minecraft:flint",   
            S:"kubejs:coal_stone_stick"    
        }
    )

    event.recipes.gtceu.assembler('item_filter_polyeth_assemb')

    .itemInputs(
        "64x gtceu:fine_steel_wire",
        "16x gtceu:zinc_foil"
    )

    .inputFluids(
        Fluid.of("gtceu:polyethylene", 144)
    )

    .itemOutputs(
        "gtceu:item_filter"
    )

    .duration(1600)
    .EUt(16)
    .circuit(1)

    event.recipes.gtceu.assembler('item_filter_assemb')

    .itemInputs(
        "gtceu:carbon_fiber_mesh",
        "16x gtceu:zinc_foil"
    )

    .itemOutputs(
        "gtceu:item_filter"
    )

    .duration(1600)
    .EUt(GTValues.VA[GTValues.LV])
    .circuit(1)

    event.recipes.gtceu.assembler('item_tag_filter_ol_polyeth_assemb')

    .itemInputs(
        '64x gtceu:fine_olivine_wire',
        "16x gtceu:zinc_foil"
    )

    .inputFluids(
        Fluid.of("gtceu:polyethylene", 144)
    )

    .itemOutputs(
        "gtceu:item_tag_filter"
    )

    .duration(1600)
    .EUt(16)
    .circuit(2)


    event.recipes.gtceu.assembler('item_tag_filter_em_polyeth_assemb')

    .itemInputs(
        "64x gtceu:fine_emerald_wire",
        "16x gtceu:zinc_foil"
    )

    .inputFluids(
        Fluid.of("gtceu:polyethylene", 144)
    )

    .itemOutputs(
        "gtceu:item_tag_filter"
    )

    .duration(1600)
    .EUt(16)
    .circuit(2)

    event.recipes.gtceu.assembler('item_tag_filter_assemb')

    .itemInputs(
        "gtceu:carbon_fiber_mesh",
        "16x gtceu:zinc_foil"
    )

    .itemOutputs(
        "gtceu:item_tag_filter"
    )

    .duration(1600)
    .EUt(GTValues.VA[GTValues.LV])
    .circuit(2)

    event.recipes.gtceu.assembler('fluid_filter_so_polyeth_assemb')

    .itemInputs(
        "64x gtceu:fine_sodalite_wire",
        "16x gtceu:zinc_foil"
    )

    .inputFluids(
        Fluid.of("gtceu:polyethylene", 144)
    )

    .itemOutputs(
        "gtceu:fluid_filter"
    )

    .duration(1600)
    .EUt(16)
    .circuit(3)


    event.recipes.gtceu.assembler('fluid_filter_laz_polyeth_assemb')

    .itemInputs(
        "64x gtceu:fine_lazurite_wire",
        "16x gtceu:zinc_foil"
    )

    .inputFluids(
        Fluid.of("gtceu:polyethylene", 144)
    )

    .itemOutputs(
        "gtceu:fluid_filter"
    )

    .duration(1600)
    .EUt(16)
    .circuit(3)

    event.recipes.gtceu.assembler('fluid_filter_lap_polyeth_assemb')

    .itemInputs(
        "64x gtceu:fine_lapis_wire",
        "16x gtceu:zinc_foil"
    )

    .inputFluids(
        Fluid.of("gtceu:polyethylene", 144)
    )

    .itemOutputs(
        "gtceu:fluid_filter"
    )

    .duration(1600)
    .EUt(16)
    .circuit(3)

    event.recipes.gtceu.assembler('fluid_filter_assemb')

    .itemInputs(
        "gtceu:carbon_fiber_mesh",
        "16x gtceu:zinc_foil"
    )

    .itemOutputs(
        "gtceu:fluid_filter"
    )

    .duration(1600)
    .EUt(GTValues.VA[GTValues.LV])
    .circuit(3)

    event.recipes.gtceu.assembler('fluid_tag_filter_polyeth_assemb')

    .itemInputs(
        "64x gtceu:fine_amethyst_wire",
        "16x gtceu:zinc_foil"
    )

    .inputFluids(
        Fluid.of("gtceu:polyethylene", 144)
    )

    .itemOutputs(
        "gtceu:fluid_tag_filter"
    )

    .duration(1600)
    .EUt(16)
    .circuit(4)

    event.recipes.gtceu.assembler('fluid_tag_filter_assemb')

    .itemInputs(
        "gtceu:carbon_fiber_mesh",
        "16x gtceu:zinc_foil"
    )

    .itemOutputs(
        "gtceu:fluid_tag_filter"
    )

    .duration(1600)
    .EUt(GTValues.VA[GTValues.LV])
    .circuit(4)

    event.recipes.gtceu.assembler('item_smart_filter_polyeth_assemb')

    .itemInputs(
        "64x gtceu:fine_ruby_wire",
        "16x gtceu:zinc_foil",
        "gtceu:basic_electronic_circuit"
    )

    .inputFluids(
        Fluid.of("gtceu:polyethylene", 144)
    )

    .itemOutputs(
        "gtceu:item_smart_filter"
    )

    .duration(1600)
    .EUt(16)
    .circuit(5)

    event.recipes.gtceu.assembler('item_smart_filter_assemb')

    .itemInputs(
        "gtceu:carbon_fiber_mesh",
        "16x gtceu:zinc_foil",
        "gtceu:basic_electronic_circuit"

    )

    .itemOutputs(
        "gtceu:item_smart_filter"
    )

    .duration(1600)
    .EUt(GTValues.VA[GTValues.LV])
    .circuit(5)

})