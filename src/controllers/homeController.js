const db = require('../db.json');

exports.getHomePage = (req, res) => {
    const { search, from: difficultyFrom, to: difficaltyTo } = req.query;

    let cubes = db.cubes;

    if (search) {
        cubes = cubes.filter(cube => cube.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (difficultyFrom) {
        cubes = cubes.filter(cube => cube.difficultyLevel >= difficultyFrom);
    }

    if (difficaltyTo) {
        cubes = cubes.filter(cube => cube.difficultyLevel <= difficaltyTo);
    }

    res.render('index', { cubes, search , difficultyFrom, difficaltyTo });
};

exports.getAboutPage = (req, res) => {
    res.render('about')
};

exports.getErrorPage = (req, res) => {
    res.render('404');
};