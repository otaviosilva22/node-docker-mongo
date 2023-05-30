const {Router} = require('express');
const CashController = require('./controller/cashController');

const router = Router();
const cashController = new CashController();

router.post('/create', cashController.create);
router.get('/readAll', cashController.readAll);
router.get('/readById', cashController.readById);
router.put('/update', cashController.update);
router.delete('/delete', cashController.delete);

module.exports = router;