ServerEvents.recipes( event=> {

    //Stone wand
    event.replaceInput( { id:"constructionwand:stone_wand" }, 

        "#forge:cobblestone",
        "minecraft:stone"

    )
    //

    //Iron wand
    event.replaceInput( { id:"constructionwand:iron_wand" }, 

        "minecraft:iron_ingot",
        "gtceu:steel_plate"

    )
    
    event.replaceInput( { id:"constructionwand:iron_wand" }, 

        "#forge:rods/wooden",
        "gtceu:treated_wood_rod"

    )
    //
    
    //Diamond wand
    event.replaceInput( { id:"constructionwand:diamond_wand" }, 

        "minecraft:diamond",
        "gtceu:diamond_plate"

    )

    event.replaceInput( { id:"constructionwand:diamond_wand" }, 

        "#forge:rods/wooden",
        "gtceu:treated_wood_rod"

    )
    //


}) 