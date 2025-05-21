GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    GTRecipeTypes.WIREMILL_RECIPES.setMaxIOSize(4, 2, 0, 0)

    GTRecipeTypes.CHEMICAL_RECIPES.setMaxIOSize(3, 2, 3, 2)

    GTRecipeTypes.FORGE_HAMMER_RECIPES.setMaxIOSize(1, 2, 0, 0)

})