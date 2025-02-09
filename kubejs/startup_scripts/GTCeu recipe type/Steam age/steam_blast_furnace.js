GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    event.create("steam_blast_furnace")
        .category("multiblock")
        .setEUIO('in')
        .setMaxIOSize(3, 1, 1, 1)  
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT) // 
        .setSound(GTSoundEntries.FIRE)
        
})