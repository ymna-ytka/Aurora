//const $ItemBusPartMachine = Java.loadClass('com.gregtechceu.gtceu.common.machine.multiblock.part.ItemBusPartMachine')
//
//const $FluidBusPartMachine = Java.loadClass('com.gregtechceu.gtceu.common.machine.multiblock.part.FluidHatchPartMachine')
//
//GTCEuStartupEvents.registry('gtceu:machine', event=>{
//    event.create("item_import_hatch_fire", "custom")
//        
//        .tiers(GTValues.ULV)
//        .machine((holder, tier, t)=> new $ItemBusPartMachine)
//        .definition((tier, builder)=>{
//        builder.rotationState(RotationState.ALL)
//               
//
//        .overlayTieredHullRenderer('item_bus.import')
//                
//        .abilities(PartAbility.IMPORT_ITEMS)
//    
//
//    })
//
//    event.create("item_export_hatch_fire", "custom")
//        
//    .tiers(GTValues.ULV)
//    .machine((holder, tier, t)=> new $ItemBusPartMachine)
//    .definition((tier, builder)=>{
//        builder.rotationState(RotationState.ALL)
//           
//
//    .overlayTieredHullRenderer('item_bus.export')
//            
//    .abilities(PartAbility.EXPORT_ITEMS)
//
//
//})
//
//    event.create("fluid_input_hatch_fire", "custom")
//        
//        .tiers(GTValues.ULV)
//        .machine((holder, tier, t)=>new $FluidBusPartMachine)
//        .definition((tier, builder)=>{
//            builder.rotationState(RotationState.ALL)
//               
//
//        .overlayTieredHullRenderer('fluid_hatch.import')
//        
//        .abilities(PartAbility.IMPORT_FLUIDS)
//
//    }
//})
