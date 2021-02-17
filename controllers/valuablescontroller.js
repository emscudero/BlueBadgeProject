let express = require("express");
let router = express.Router();
const validateSession = require('../middleware/validate-session');
const Valuable = require('../db').import('../models/valuables');


router.post('/create', validateSession, (req, res) => {
    const valuableEntry = {
        name: req.body.valuables.name,
        year: req.body.valuables.year,
        model: req.body.valuables.model,
        serial_number: req.body.valuables.serial_number,
        photo: req.body.valuables.photo,
        dollar_value: req.body.valuables.dollar_value,
        owner_id: req.user.id
    }
    Valuable.create(valuableEntry)
    .then(valuables => res.status(200).json(valuables))
    .catch(err => res.status(500).json({error: err}))
});

router.get("/:id", validateSession, (req, res) => {
    let userId = req.user.id;
    Valuable.findAll({
      where: { owner_id: userId },
    })
      .then((valuables) => res.status(200).json(valuables))
      .catch((err) => res.status(500).json({ error: err }));
  });
  
router.put("/update/:entryId", validateSession, function(req, res){
    const updateEntry = {
        name: req.body.valuables.name,
        year: req.body.valuables.year,
        model: req.body.valuables.model,
        serial_number: req.body.valuables.serial_number,
        photo: req.body.valuables.photo,
        dollar_value: req.body.valuables.dollar_value,
    };

    const query = { where: { id: req.params.entryId, owner_id: req.user.id} };

   Valuable.update(updateEntry, query)
    .then(valuables => res.status(200).json(valuables))
    .catch(err => res.status(500).json({error:err}))
});

router.delete("/delete/:id", validateSession, function (req, res){
    const query = { where: { id: req.params.id, owner_id: req.user.id} };

    Valuable.destroy(query)
    .then(() => res.status(200).json({message: "Item Removed"}))
    .catch(err => res.status(500).json({error:err}))
});

module.exports = router;