GTCEuStartupEvents.registry('gtceu:material', event => {

    //Red alloy
    GTMaterials.RedAlloy.addFlags(GTMaterialFlags.GENERATE_GEAR)
    //

    //Copper
    GTMaterials.Copper.addFlags(GTMaterialFlags.GENERATE_ROTOR)
    //

    //Obsidian
    GTMaterials.Obsidian.addFlags(GTMaterialFlags.GENERATE_ROD)
    GTMaterials.Obsidian.addFlags(GTMaterialFlags.GENERATE_BOLT_SCREW)

    //Netherite
    GTMaterials.Netherite.addFlags(GTMaterialFlags.GENERATE_PLATE)
    GTMaterials.Netherite.addFlags(GTMaterialFlags.GENERATE_BOLT_SCREW)
    
});