const Pokemon = require("../models/pokemon");

module.exports = {
  async Create(req, res) {
    try {
      const { name } = req.body;

      // const avail = await Pokemon.find({ name: name });
      // if (avail) throw new Error("Name Already Taken");

      const row = await Pokemon.create({ name });

      res.status(201).json({
        success: true,
        message: "You Got a Pokemon",
        data: {
          id: row._id,
          name: row.name,
          species: {
            url:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
            pokemonName: "ditto",
          },
          types: [
            {
              type: {
                name: "normal",
              },
            },
            {
              type: {
                name: "poison",
              },
            },
          ],
        },
      });
    } catch (error) {
      res.status(400).json({
        succes: false,
        message: error.message,
      });
    }
  },

  async GetAll(req, res) {
    try {
      const data = await Pokemon.find();
      const result = data.map((item) => {
        return {
          id: item._id,
          name: item.name,
          species: {
            url:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
            pokemonName: "ditto",
          },
          types: [
            {
              type: {
                name: "normal",
              },
            },
            {
              type: {
                name: "poison",
              },
            },
          ],
        };
      });

      res.status(200).json({
        success: true,
        message: "All pokemon that you have",
        result,
      });
    } catch (error) {
      res.status(400).json({
        succes: false,
        message: error.message,
      });
    }
  },

  async GetOne(req, res) {
    let { id } = req.params;
    try {
      const row = await Pokemon.findById(id);
      if (!row) throw new Error(`Pokemon ID: ${id} not found`);

      res.status(200).json({
        success: true,
        message: `Retrieved Pokemons ID: ${id} data`,
        row,
      });
    } catch (error) {
      res.status(400).json({
        succes: false,
        message: error.message,
      });
    }
  },

  async Delete(req, res) {
    let { id } = req.params;
    try {
      const avail = await Pokemon.findById(id);
      if (!avail) throw new Error(`Pokemon ID: ${id} not found`);

      const row = await Pokemon.findByIdAndDelete(id);
      res.status(200).json({
        success: true,
        message: `Pokemons ID: ${id} deleted`,
        row,
      });
    } catch (error) {
      res.status(400).json({
        succes: false,
        message: error.message,
      });
    }
  },
};
