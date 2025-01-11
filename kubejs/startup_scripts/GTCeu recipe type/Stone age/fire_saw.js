GTCEuStartupEvents.registry("gtceu:recipe_type", event=>{

    event.create("fire_saw")
        .category("multiblock")
        .setEUIO('in')
        .setMaxIOSize(3, 3, 0, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT) 
        .setSound(GTSoundEntries.SAW_TOOL)

})