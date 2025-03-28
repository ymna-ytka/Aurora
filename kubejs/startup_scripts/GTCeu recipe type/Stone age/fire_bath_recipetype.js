GTCEuStartupEvents.registry("gtceu:recipe_type", event=>{

    event.create("fire_bath")
        .category("multiblock")
        .setEUIO('in')
        .setMaxIOSize(3, 3, 3, 3)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT) 
        .setSound(GTSoundEntries.BATH)

})