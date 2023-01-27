const { Schema, model } = require('mongoose');

const cubeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        maxLength: 50,
    },
    imageUrl: {
        type: String,
        required: true,
        //add http//htttps validation
    },
    difficultyLevel: {
        type: Number,
        required: true,
        max: 6,
        min: 1,
    },
    //accessories: {
      ///  type: String,
     //   required: true,
  //  }
});

const Cube = model('Cube', cubeSchema);

module.exports = Cube;