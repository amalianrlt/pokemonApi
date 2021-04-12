
const express = require('express')

const PokemonCtrl = require('../controllers/pokemon-ctrl')

const router = express.Router()

router.post('/myPokemon', PokemonCtrl.Create)
router.delete('/myPokemon/:id', PokemonCtrl.Delete)
router.get('/myPokemon/:id', PokemonCtrl.GetOne)
router.get('/myPokemon', PokemonCtrl.GetAll)

module.exports = router