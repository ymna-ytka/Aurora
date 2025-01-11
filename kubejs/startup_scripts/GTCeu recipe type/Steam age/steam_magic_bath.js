GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create("steam_magic_bath")
        .category("multiblock")
        .setEUIO('in')
        .setMaxIOSize(3, 3, 4, 0)  
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT) // 
        .setSound(GTSoundEntries.BATH)
})