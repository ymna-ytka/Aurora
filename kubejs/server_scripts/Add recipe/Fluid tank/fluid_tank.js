ServerEvents.recipes(event =>{

    event.shaped("fluidtank:tank_wood",

        [
            "BPB",
            "IPI",
            "III"
        ],

        {
            B:"minecraft:bucket",
            P:"gtceu:double_iron_plate",
            I:"gtceu:bad_bronze_plate"
        }


    )

    event.shaped("fluidtank:tank_stone",

        [
            "SDS",
            "PBP",
            "HDC"
        ],

        {
            B:"fluidtank:tank_wood",
            P:"#forge:glass_panes",
            S:"gtceu:steel_screw",
            D:"gtceu:double_steel_plate",
            H:"#forge:tools/hammers",
            C:"#forge:tools/screwdrivers"
        }


    )

})