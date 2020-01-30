'use strict';

const express    = require('express');
const controller = require('../../controller/controller');

const router = express.Router();

router.get    ('/contatos/get'   ,       controller.rule);
router.get    ('/contatos/specific/:id', controller.rule);
router.post   ('/contatos/create',       controller.rule);
router.put    ('/contatos/update',       controller.rule);
router.delete ('/contatos/delete/:id',   controller.rule);

module.exports = router;
