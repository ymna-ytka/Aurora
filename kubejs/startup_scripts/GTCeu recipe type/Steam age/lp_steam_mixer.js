GTCEuStartupEvents.registry("gtceu:recipe_type", event=>{

    event.create("bronze_mixer")
        .category("bronze_mixer")
        .setEUIO('in')
        .setMaxIOSize(6, 2, 0, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT) 
        .setSound(GTSoundEntries.MIXER)

})