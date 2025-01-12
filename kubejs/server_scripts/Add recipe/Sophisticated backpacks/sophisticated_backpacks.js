ServerEvents.recipes(event=>{

    event.shaped("sophisticatedbackpacks:backpack",
        
        [
            "OTO",
            "SCS",
            "TTT"
        ],

        {
            S:"minecraft:string",
            T:"kubejs:tanned_leather",
            C:"minecraft:chest",
            O:"gtceu:wood_screw"
        }
    
    )

    event.shaped("sophisticatedbackpacks:copper_backpack",
        
        [
            "BTB",
            "BCB",
            "BTB"
        ],
        
        {
            B:"gtceu:bronze_plate",
            T:"kubejs:tanned_leather",
            C:"sophisticatedbackpacks:backpack"
        }
    
    )

    event.shaped("sophisticatedbackpacks:iron_backpack",
        
        [
            "STS",
            "SCS",
            "STS"
        ],
        
        {
            S:"gtceu:steel_plate",
            T:"kubejs:tanned_leather",
            C:"sophisticatedbackpacks:copper_backpack"
        }
    
    )

    event.shaped("sophisticatedbackpacks:gold_backpack",
        
        [
            "ATA",
            "ACA",
            "ATA"
        ],
        
        {
            A:"gtceu:aluminium_plate",
            T:"kubejs:tanned_leather",
            C:"sophisticatedbackpacks:iron_backpack"
        }
    
    )

    event.shaped("sophisticatedbackpacks:diamond_backpack",
        
        [
            "STS",
            "SCS",
            "STS"
        ],
        
        {
            S:"gtceu:stainless_steel_plate",
            T:"kubejs:tanned_leather",
            C:"sophisticatedbackpacks:gold_backpack"
        }
    
    )

    event.shaped("sophisticatedbackpacks:netherite_backpack",
        
        [
            "ITI",
            "ICI",
            "ITI"
        ],
        
        {
            I:"gtceu:titanium_plate",
            T:"kubejs:tanned_leather",
            C:"sophisticatedbackpacks:diamond_backpack"
        }
    
    )

    event.recipes.gtceu.assembler('upgrade_base_assemb')
        
        .itemInputs(
            "#forge:leather",
            "4x minecraft:string"
        )

        .inputFluids(
            Fluid.of("gtceu:iron", 432)
        )

        .itemOutputs(
            "sophisticatedbackpacks:upgrade_base"
        )
        .duration(600)
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(1)

    event.recipes.gtceu.assembler('filter_upgrade_assemb')
        
        .itemInputs(
            "sophisticatedbackpacks:upgrade_base",
            "gtceu:item_filter"
        )

        .inputFluids(
            Fluid.of("gtceu:redstone", 432)
        )

        .itemOutputs(
            "sophisticatedbackpacks:filter_upgrade"
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(1)

    event.recipes.gtceu.assembler('void_upgrade_assemb')
        
        .itemInputs(
            "sophisticatedbackpacks:upgrade_base",
            "3x gtceu:obsidian_plate",
            "trashcans:item_trash_can"
        )

        .inputFluids(
            Fluid.of("gtceu:redstone", 288)
        )

        .itemOutputs(
            "sophisticatedbackpacks:void_upgrade"
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(1)

    event.recipes.gtceu.assembler('anvil_upgrade_assemb')
        
        .itemInputs(
            "sophisticatedbackpacks:upgrade_base",
            "2x minecraft:anvil",
            "minecraft:chest",
            "gtceu:diamond_plate",
            "gtceu:iron_plate"
        )

        .itemOutputs(
            "sophisticatedbackpacks:anvil_upgrade"
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(1)
        
    event.recipes.gtceu.assembler('deposit_upgrade_assemb')
        
        .itemInputs(
            "sophisticatedbackpacks:upgrade_base",
            "minecraft:chest",
            "gtceu:lv_robot_arm",
            "gtceu:iron_plate"
        )

        .inputFluids(
            Fluid.of("gtceu:redstone", 288)
        )

        .itemOutputs(
            "sophisticatedbackpacks:deposit_upgrade"
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(1)
        
    event.recipes.gtceu.assembler('stonecutter_upgrade_assemb')
        
        .itemInputs(
            "sophisticatedbackpacks:upgrade_base",
            "minecraft:stonecutter",
            "2x gtceu:iron_plate"
        )

        .inputFluids(
            Fluid.of("gtceu:redstone", 288)
        )

        .itemOutputs(
            "sophisticatedbackpacks:stonecutter_upgrade"
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(1)

    event.recipes.gtceu.assembler('jukebox_upgrade_assemb')
        
        .itemInputs(
            "sophisticatedbackpacks:upgrade_base",
            "minecraft:jukebox",
            "2x gtceu:iron_plate"
        )

        .inputFluids(
            Fluid.of("gtceu:redstone", 288)
        )

        .itemOutputs(
            "sophisticatedbackpacks:jukebox_upgrade"
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(1)

    event.recipes.gtceu.assembler('restock_upgrade_assemb')
        
        .itemInputs(
            "sophisticatedbackpacks:upgrade_base",
            "minecraft:chest",
            "gtceu:lv_robot_arm",
            "2x gtceu:iron_plate"
        )

        .inputFluids(
            Fluid.of("gtceu:redstone", 288)
        )

        .itemOutputs(
            "sophisticatedbackpacks:restock_upgrade"
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(2)
 
    event.recipes.gtceu.assembler('pickup_upgrade_assemb')
        
        .itemInputs(
            "sophisticatedbackpacks:upgrade_base",
            "gtceu:lv_item_magnet",
        )

        .inputFluids(
            Fluid.of("gtceu:redstone", 432)
        )

        .itemOutputs(
            "sophisticatedbackpacks:pickup_upgrade"
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(1)

    event.recipes.gtceu.assembler('magnet_upgrade_assemb')
        
        .itemInputs(
            "sophisticatedbackpacks:upgrade_base",
            "3x gtceu:iron_plate",
            "gtceu:magnetic_steel_plate"
        )

        .inputFluids(
            Fluid.of("gtceu:redstone", 144)
        )

        .itemOutputs(
            "sophisticatedbackpacks:magnet_upgrade"
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(1)

    event.recipes.gtceu.assembler('compacting_upgrade_assemb')
        
        .itemInputs(
            "sophisticatedbackpacks:upgrade_base",
            "2x gtceu:iron_plate",
            "2x gtceu:lv_electric_piston"
        )

        .inputFluids(
            Fluid.of("gtceu:redstone", 288)
        )

        .itemOutputs(
            "sophisticatedbackpacks:compacting_upgrade"
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(1)

    event.recipes.gtceu.assembler('smelting_upgrade_assemb')
        
        .itemInputs(
            "sophisticatedbackpacks:upgrade_base",
            "3x gtceu:iron_plate",
            "minecraft:furnace"
        )

        .inputFluids(
            Fluid.of("gtceu:redstone", 432)
        )

        .itemOutputs(
            "sophisticatedbackpacks:smelting_upgrade"
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(1)

    event.recipes.gtceu.assembler('smoking_upgrade_assemb')
        
        .itemInputs(
            "sophisticatedbackpacks:upgrade_base",
            "3x gtceu:iron_plate",
            "minecraft:smoker"
        )

        .inputFluids(
            Fluid.of("gtceu:redstone", 432)
        )

        .itemOutputs(
            "sophisticatedbackpacks:smoking_upgrade"
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(1)

    event.recipes.gtceu.assembler('blasting_upgrade_assemb')
        
        .itemInputs(
            "sophisticatedbackpacks:upgrade_base",
            "3x gtceu:iron_plate",
            "minecraft:blast_furnace"
        )

        .inputFluids(
            Fluid.of("gtceu:redstone", 432)
        )

        .itemOutputs(
            "sophisticatedbackpacks:blasting_upgrade"
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(1)

    event.recipes.gtceu.assembler('crafting_upgrade_assemb')
        
        .itemInputs(
            "sophisticatedbackpacks:upgrade_base",
            "2x gtceu:iron_plate",
            "minecraft:crafting_table",
            "minecraft:chest"
        )

        .itemOutputs(
            "sophisticatedbackpacks:crafting_upgrade"
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(1)

    event.recipes.gtceu.assembler('tool_swapper_upgrade_assemb')
        
        .itemInputs(
            "sophisticatedbackpacks:upgrade_base",
            "4x gtceu:lv_robot_arm"
        )

        .inputFluids(
            Fluid.of("gtceu:redstone", 432)
        )

        .itemOutputs(
            "sophisticatedbackpacks:tool_swapper_upgrade"
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(1)

    event.recipes.gtceu.assembler('pump_upgrade_assemb')
        
        .itemInputs(
            "sophisticatedbackpacks:upgrade_base",
            "4x #forge:glass",
            "2x gtceu:lv_electric_pump"
        )

        .itemOutputs(
            "sophisticatedbackpacks:pump_upgrade"
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(1)

    event.recipes.gtceu.assembler('smithing_upgrade_assemb')
        
        .itemInputs(
            "sophisticatedbackpacks:upgrade_base",
            "2x gtceu:iron_plate",
            "minecraft:smithing_table"
        )

        .itemOutputs(
            "sophisticatedbackpacks:smithing_upgrade"
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(1)

    event.recipes.gtceu.assembler('refill_upgrade_assemb')
        
        .itemInputs(
            "sophisticatedbackpacks:upgrade_base",
            "2x gtceu:iron_plate",
            "gtceu:lv_emitter",
            "gtceu:lv_sensor"
        )

        .inputFluids(
            Fluid.of("gtceu:redstone", 288)
        )

        .itemOutputs(
            "sophisticatedbackpacks:refill_upgrade"
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(1)

    event.recipes.gtceu.assembler('tank_upgrade_assemb')
        
        .itemInputs(
            "sophisticatedbackpacks:upgrade_base",
            "8x #forge:glass",
            "fluidtank:tank_stone"
        )

        .itemOutputs(
            "sophisticatedbackpacks:tank_upgrade"
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(1)

    event.recipes.gtceu.assembler('feeding_upgrade_assemb')
        
        .itemInputs(
            "sophisticatedbackpacks:upgrade_base",
            "gtceu:ender_pearl_plate",
            "minecraft:golden_carrot",
            "minecraft:golden_apple",
            "minecraft:glistering_melon_slice"
        )

        .itemOutputs(
            "sophisticatedbackpacks:feeding_upgrade"
        )
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])
        .circuit(1)
        
})