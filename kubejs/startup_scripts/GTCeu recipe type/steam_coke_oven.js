GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create("steam_coke_oven")
        .category("multiblock")
        .setEUIO('in')
        .setMaxIOSize(1, 1, 1, 1)  
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT) // 
        .setSound(GTSoundEntries.FIRE)
})