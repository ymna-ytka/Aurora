GTCEuStartupEvents.registry("gtceu:recipe_type", event=>{

    event.create("farmer")
        .category("farmer")
        .setEUIO('in')
        .setMaxIOSize(3, 3, 3, 3)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE, FillDirection.LEFT_TO_RIGHT) 
        .setSound(GTSoundEntries.ELECTROLYZER)

})