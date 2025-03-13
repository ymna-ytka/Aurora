ServerEvents.recipes( event=> {

    event.shaped("gtceu:lv_chemical_reactor",

        [
            "HRE",
            "CMC",
            "IAI"
        ],

        {
            H:"gtceu:hydrogen_bucket",
            R:"gtceu:tin_rotor",
            E:"gtceu:mercury_bucket",
            C:"gtceu:tin_single_cable",
            M:"gtceu:lv_electric_motor",
            I:"gtceu:basic_electronic_circuit",
            A:"gtceu:lv_machine_hull"
        }
    )

    event.shaped('gtceu:lv_cooler',

        [
            'GIG',
            'PHP',
            'CMC'
        ],

        {
            G:"minecraft:glass",
            I:"minecraft:ice",
            P:"gtceu:lv_electric_pump",
            H:"gtceu:lv_machine_hull",
            C:"gtceu:tin_single_cable",
            M:"gtceu:basic_electronic_circuit"
        }

    )

    event.shaped('gtceu:lv_air_cooler',

        [
            'GIG',
            'PHS',
            'CMC'
        ],

        {
            G:"minecraft:glass",
            I:'gtceu:cold_water_bucket',
            P:"gtceu:lv_electric_pump",
            S:"gtceu:lv_electric_piston",
            H:"gtceu:lv_machine_hull",
            C:"gtceu:tin_single_cable",
            M:"gtceu:basic_electronic_circuit"
        }

    )

})