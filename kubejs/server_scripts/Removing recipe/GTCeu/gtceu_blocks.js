ServerEvents.recipes( event=> {

    event.remove( { output:"gtceu:wood_crate" } )
    event.remove( { output:'gtceu:coke_oven_bricks' } )
    event.remove( { id:'gtceu:shaped/bronze_bricks_hull' } )
    event.remove( { id:'gtceu:shaped/steel_bricks_hull' } )

})