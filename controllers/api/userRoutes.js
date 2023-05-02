const router = require('express').Router();
const { User } = require('../../models/user');


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
router.get('/:id', async (req, res) => {
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

// Ask tutor if I wrote this correctly
// Update a User's email 
router.put('/:id', async (req, res) => {
    try {
      const userData = await User.update(
        {email: req.body.email},
        {
        where: {
              id: req.params.id,
            }, 
      });
      if(!userData[0]) {
        res.status(404).json({message: 'No user with this id!'});
        return;
      }
      res.status(200).json(userData);
    } catch (err) {
      res.status(500).json(err);
     console.log(err);
    }
  
  });