ServerEvents.recipes( event=> {

    event.shaped("toolbelt:belt",

        [
            "LLL",
            "SRS",
            "LRL"
        ],

        {
            L:"gtac:tanned_leather",
            S:"minecraft:string",
            R:"gtceu:steel_ring"
        }

    )

    event.shaped("toolbelt:pouch",

        [
            "SRS",
            "LCL",
            "LLL"
        ],

        {
            L:"gtac:tanned_leather",
            S:"minecraft:string",
            R:"gtceu:gold_ring",
            C:"minecraft:chest"
        }

    )


})