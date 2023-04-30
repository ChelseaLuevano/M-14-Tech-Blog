const router = require('express').Router();
const { User } = require('../../models/User');


// Create New User
router.post('/', async (req, res) =>{
    try {
        const userData = await User.create(req.body);

        req.session(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
       

            req.status(200).json(userData)
        });
    } catch (err) {
        res.status(400).json(err);
    }
});


// GET All users
router.get('/', async (req, res) => {
    try {
    const userData = await User.findAll()
    res.status(200).json(userData);
    }
    catch (err) {
        res.status(400).json(err);
    }
})

// GET one user
route.get('/:id', async (req, res) => {
    try {
        const userData = await User.findByPk(req.params.id, {
            where: {
                id: req.params.id,
            },
        });
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});