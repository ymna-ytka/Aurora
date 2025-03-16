GTCEuStartupEvents.registry("gtceu:recipe_type", event=>{

    event.create("twilight_farmer")
        .category("twilight_farmer")
        .setEUIO('in')
        .setMaxIOSize(1, 2, 1, 1)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_GAS_COLLECTOR, FillDirection.LEFT_TO_RIGHT) 
        .setSound(GTSoundEntries.MIXER)

})