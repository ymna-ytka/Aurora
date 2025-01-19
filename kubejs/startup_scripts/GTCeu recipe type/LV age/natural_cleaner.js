GTCEuStartupEvents.registry("gtceu:recipe_type", event=>{

    event.create("natural_cleaner")
        .category("multiblock")
        .setEUIO('in')
        .setMaxIOSize(3, 2, 1, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT) 
        .setSound(GTSoundEntries.MIXER)

})