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
})