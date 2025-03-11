GTCEuStartupEvents.registry("gtceu:recipe_type", event=>{

    event.create("air_cooler")
        .category("air_cooler")
        .setEUIO('in')
        .setMaxIOSize(0, 1, 1, 1)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_GAS_COLLECTOR, FillDirection.LEFT_TO_RIGHT) 
        .setSound(GTSoundEntries.MIXER)

})