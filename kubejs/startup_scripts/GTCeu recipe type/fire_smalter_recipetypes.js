GTCEuStartupEvents.registry("gtceu:recipe_type", event=>{

    event.create("fire_smalter")
        .category("multiblock")
        .setEUIO('in')
        .setMaxIOSize(3, 1, 1, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT) 
        .setSound(GTSoundEntries.FURNACE)

})