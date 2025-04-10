ServerEvents.recipes( event=> {

    event.recipes.gtceu.mixer('mag_map_focus')

        .itemInputs(
            "twilightforest:raven_feather",
            "8x twilightforest:torchberries"
        )

        .inputFluids(
            Fluid.of("gtceu:glowstone", 1152)
        )

        .itemOutputs(
            "twilightforest:magic_map_focus"
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.assembler('magic_map')

        .itemInputs(
            "twilightforest:magic_map_focus",
            "8x minecraft:paper",
            "4x twilightforest:transformation_powder"
        )

        .inputFluids(
            Fluid.of("gtceu:glue", 432)
        )

        .itemOutputs(
            "twilightforest:magic_map"
        )
        .duration(1200)
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(4)

    event.recipes.gtceu.mixer('transmutate_dust')
    
        .itemInputs(
            "twilightforest:naga_scale",
            "twilightforest:torchberries",
            "twilightforest:ironwood_ingot"
        )

        .itemOutputs(
            "64x twilightforest:transformation_powder"
        )
        .duration(600)
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(4)

    event.recipes.gtceu.twilight_farmer('gtceu:twilight_farmer/transformation_powder')

        .inputFluids(
            Fluid.of("gtceu:magical_essence", 25)
        )

        .itemOutputs(
            '4x twilightforest:transformation_powder'
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.MV])
        .circuit(1)

    event.recipes.gtceu.twilight_farmer('gtceu:twilight_farmer/naga_scale')

        .inputFluids(
            Fluid.of("gtceu:magical_essence", 125)
        )

        .itemOutputs(
            "2x twilightforest:naga_scale"
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.MV])
        .circuit(2)

    event.shapeless("twilightforest:aurora_slab",
        [
            "twilightforest:aurora_block",
            "#forge:tools/saws"    
        ]
    ) 
                                                                
                                            
    event.recipes.gtceu.cutter('aurora_slab_lubricant')
                                                        
        .itemInputs(
            "twilightforest:aurora_block"
        )
                                                        
        .inputFluids(
            Fluid.of("gtceu:lubricant", 1)
        )
                                                        
        .itemOutputs(   
            "2x twilightforest:aurora_slab",
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV])
                                                            
    event.recipes.gtceu.cutter('aurora_slab_dist_water')
                                                        
        .itemInputs(
            "twilightforest:aurora_block" 
        )
                                                        
        .inputFluids(
            Fluid.of("gtceu:distilled_water", 3)
        )
                                                        
        .itemOutputs(
            "2x twilightforest:aurora_slab",
        )
        .duration(350)
        .EUt(GTValues.VA[GTValues.ULV]) 
                                                            
    event.recipes.gtceu.cutter('aurora_slab_water')
                                                        
        .itemInputs(
            "twilightforest:aurora_block"  
        )
                                                        
        .inputFluids(
            Fluid.of("minecraft:water", 4)
        )
                                                        
        .itemOutputs(
            "2x twilightforest:aurora_slab",
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.ULV])
    
    event.recipes.gtceu.twilight_farmer('gtceu:twilight_farmer/twilight_scepter')

        .inputFluids(
            Fluid.of("gtceu:magical_essence", 990)
        )

        .itemOutputs(
            "twilightforest:twilight_scepter"
        )
        .duration(800)
        .EUt(GTValues.VA[GTValues.MV])
        .circuit(3)

    event.recipes.gtceu.twilight_farmer('gtceu:twilight_farmer/lifedrain_scepter')

        .inputFluids(
            Fluid.of("gtceu:magical_essence", 990)
        )

        .itemOutputs(
            "twilightforest:lifedrain_scepter"
        )
        .duration(800)
        .EUt(GTValues.VA[GTValues.MV])
        .circuit(4)

    event.recipes.gtceu.twilight_farmer('gtceu:twilight_farmer/zombie_scepter')

        .inputFluids(
            Fluid.of("gtceu:magical_essence", 990)
        )

        .itemOutputs(
            "twilightforest:zombie_scepter"
        )
        .duration(800)
        .EUt(GTValues.VA[GTValues.MV])
        .circuit(5)

    event.recipes.gtceu.twilight_farmer('gtceu:twilight_farmer/fortification_scepter')

        .inputFluids(
            Fluid.of("gtceu:magical_essence", 990)
        )

        .itemOutputs(
            "twilightforest:fortification_scepter"
        )
        .duration(800)
        .EUt(GTValues.VA[GTValues.MV])
        .circuit(6)

    event.recipes.gtceu.twilight_farmer('gtceu:twilight_farmer/raw_ironwood')

        .inputFluids(
            Fluid.of("gtceu:magical_essence", 440)
        )

        .itemOutputs(
            "4x twilightforest:raw_ironwood"
        )
        .duration(300)
        .EUt(GTValues.VA[GTValues.MV])
        .circuit(7)

    event.recipes.gtceu.twilight_farmer('gtceu:twilight_farmer/steeleaf_ingot')

        .inputFluids(
            Fluid.of("gtceu:magical_essence", 480)
        )

        .itemOutputs(
            "4x twilightforest:steeleaf_ingot"
        )
        .duration(400)
        .EUt(GTValues.VA[GTValues.MV])
        .circuit(8)

    event.recipes.gtceu.twilight_farmer('gtceu:twilight_farmer/diamond_minotaur_axe')

        .inputFluids(
            Fluid.of("gtceu:magical_essence", 990)
        )

        .itemOutputs(
            "twilightforest:diamond_minotaur_axe"
        )
        .duration(800)
        .EUt(GTValues.VA[GTValues.MV])
        .circuit(9)

    event.recipes.gtceu.twilight_farmer('gtceu:twilight_farmer/charm_of_life_1')

        .inputFluids(
            Fluid.of("gtceu:magical_essence", 1500)
        )

        .itemOutputs(
            "twilightforest:charm_of_life_1"
        )
        .duration(1600)
        .EUt(GTValues.VA[GTValues.MV])
        .circuit(10)

    event.recipes.gtceu.twilight_farmer('gtceu:twilight_farmer/carminite')

        .inputFluids(
            Fluid.of("gtceu:magical_essence", 800)
        )

        .itemOutputs(
            "8x twilightforest:carminite"
        )
        .duration(720)
        .EUt(GTValues.VA[GTValues.MV])
        .circuit(11)

    event.recipes.gtceu.twilight_farmer('gtceu:twilight_farmer/armor_shard')

        .inputFluids(
            Fluid.of("gtceu:magical_essence", 640)
        )

        .itemOutputs(
            "8x twilightforest:armor_shard"
        )
        .duration(680)
        .EUt(GTValues.VA[GTValues.MV])
        .circuit(12)


    event.recipes.gtceu.twilight_farmer('gtceu:twilight_farmer/phantom_helmet')

        .inputFluids(
            Fluid.of("gtceu:magical_essence", 1500)
        )

        .itemOutputs(
            "twilightforest:phantom_helmet"
        )
        .duration(1600)
        .EUt(GTValues.VA[GTValues.MV])
        .circuit(13)

    event.recipes.gtceu.twilight_farmer('gtceu:twilight_farmer/phantom_chestplate')

        .inputFluids(
            Fluid.of("gtceu:magical_essence", 1500)
        )

        .itemOutputs(
            "twilightforest:phantom_chestplate"
        )
        .duration(1600)
        .EUt(GTValues.VA[GTValues.MV])
        .circuit(14)

    event.recipes.gtceu.twilight_farmer('gtceu:twilight_farmer/ice_bomb')

        .inputFluids(
            Fluid.of("gtceu:magical_essence", 550)
        )

        .itemOutputs(
            "6x twilightforest:ice_bomb"
        )
        .duration(500)
        .EUt(GTValues.VA[GTValues.MV])
        .circuit(15)

    event.recipes.gtceu.twilight_farmer('gtceu:twilight_farmer/arctic_fur')

        .inputFluids(
            Fluid.of("gtceu:magical_essence", 750)
        )

        .itemOutputs(
            "4x twilightforest:arctic_fur"
        )
        .duration(600)
        .EUt(GTValues.VA[GTValues.MV])
        .circuit(16)

    event.recipes.gtceu.twilight_farmer('gtceu:twilight_farmer/alpha_yeti_fur')

        .inputFluids(
            Fluid.of("gtceu:magical_essence", 950)
        )

        .itemOutputs(
            "4x twilightforest:alpha_yeti_fur"
        )
        .duration(800)
        .EUt(GTValues.VA[GTValues.MV])
        .circuit(17)

    event.recipes.gtceu.twilight_farmer('gtceu:twilight_farmer/triple_bow')

        .inputFluids(
            Fluid.of("gtceu:magical_essence", 1500)
        )

        .itemOutputs(
            "twilightforest:triple_bow"
        )
        .duration(4800)
        .EUt(GTValues.VA[GTValues.MV])
        .circuit(18)

    event.recipes.gtceu.twilight_farmer('gtceu:twilight_farmer/seeker_bow')

        .inputFluids(
            Fluid.of("gtceu:magical_essence", 2000)
        )

        .itemOutputs(
            "twilightforest:seeker_bow"
        )
        .duration(6000)
        .EUt(GTValues.VA[GTValues.MV])
        .circuit(19)

    event.recipes.gtceu.twilight_farmer('gtceu:twilight_farmer/fiery_blood')

        .inputFluids(
            Fluid.of("gtceu:magical_essence", 450)
        )

        .itemOutputs(
            "8x twilightforest:fiery_blood"
        )
        .duration(440)
        .EUt(GTValues.VA[GTValues.MV])
        .circuit(20)
        
    event.recipes.gtceu.twilight_farmer('gtceu:twilight_farmer/lamp_of_cinders')

        .inputFluids(
            Fluid.of("gtceu:magical_essence", 5000)
        )

        .itemOutputs(
            "twilightforest:lamp_of_cinders"
        )
        .duration(12000)
        .EUt(GTValues.VA[GTValues.MV])
        .circuit(22)

    event.recipes.gtceu.twilight_farmer('gtceu:twilight_farmer/fiery_tears')

        .inputFluids(
            Fluid.of("gtceu:magical_essence", 470)
        )

        .itemOutputs(
            "8x twilightforest:fiery_tears"
        )
        .duration(440)
        .EUt(GTValues.VA[GTValues.MV])
        .circuit(21)

    event.recipes.gtceu.twilight_farmer('gtceu:twilight_farmer/giant_pickaxe')

        .inputFluids(
            Fluid.of("gtceu:magical_essence", 2500)
        )

        .itemOutputs(
            "twilightforest:giant_pickaxe"
        )
        .duration(8000)
        .EUt(GTValues.VA[GTValues.MV])
        .circuit(23)

    event.recipes.gtceu.twilight_farmer('gtceu:twilight_farmer/giant_sword')

        .inputFluids(
            Fluid.of("gtceu:magical_essence", 2500)
        )

        .itemOutputs(
            "twilightforest:giant_sword"
        )
        .duration(8000)
        .EUt(GTValues.VA[GTValues.MV])
        .circuit(24)

    event.recipes.gtceu.twilight_farmer('gtceu:twilight_farmer/essence_naga')

        .inputFluids(
            Fluid.of("gtceu:magical_essence", 150)
        )

        .itemOutputs(
            "4x kubejs:essence_naga"
        )
        .duration(800)
        .EUt(GTValues.VA[GTValues.MV])
        .circuit(25)

    event.recipes.gtceu.twilight_farmer('gtceu:twilight_farmer/essence_lich')

        .inputFluids(
            Fluid.of("gtceu:magical_essence", 150)
        )

        .itemOutputs(
            "4x kubejs:essence_lich"
        )
        .duration(800)
        .EUt(GTValues.VA[GTValues.MV])
        .circuit(26)

    event.recipes.gtceu.twilight_farmer('gtceu:twilight_farmer/essence_minoshroom')

        .inputFluids(
            Fluid.of("gtceu:magical_essence", 150)
        )

        .itemOutputs(
            "4x kubejs:essence_minoshroom"
        )
        .duration(800)
        .EUt(GTValues.VA[GTValues.MV])
        .circuit(27)

    event.recipes.gtceu.twilight_farmer('gtceu:twilight_farmer/essence_hydra')

        .inputFluids(
            Fluid.of("gtceu:magical_essence", 150)
        )

        .itemOutputs(
            "4x kubejs:essence_hydra"
        )
        .duration(800)
        .EUt(GTValues.VA[GTValues.MV])
        .circuit(28)

    event.recipes.gtceu.twilight_farmer('gtceu:twilight_farmer/essence_alpha_yeti')

        .inputFluids(
            Fluid.of("gtceu:magical_essence", 150)
        )

        .itemOutputs(
            "4x kubejs:essence_alpha_yeti"
        )
        .duration(800)
        .EUt(GTValues.VA[GTValues.MV])
        .circuit(30)

    event.recipes.gtceu.twilight_farmer('gtceu:twilight_farmer/essence_ur_ghast')

        .inputFluids(
            Fluid.of("gtceu:magical_essence", 150)
        )

        .itemOutputs(
            "4x kubejs:essence_ur_ghast"
        )
        .duration(800)
        .EUt(GTValues.VA[GTValues.MV])
        .circuit(29)

    event.recipes.gtceu.twilight_farmer('gtceu:twilight_farmer/essence_snow_queen')

        .inputFluids(
            Fluid.of("gtceu:magical_essence", 150)
        )

        .itemOutputs(
            "4x kubejs:essence_snow_queen"
        )
        .duration(800)
        .EUt(GTValues.VA[GTValues.MV])
        .circuit(31)

        

})