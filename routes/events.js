
/** Events Routes
 *  /api/events
 * 
 */

const { Router } = require('express');
const { check } = require('express-validator');
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');
const { isDate } = require('../helpers/isDate');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

//Todas tienen que pasar por la validacion de JWT
router.use( validarJWT );

// Obtener eventos
router.get('/', getEventos);

router.post('/',[
    check('title').not().isEmpty().withMessage('El titulo es obligatorio'),
    check('start').not().isEmpty().withMessage('El campo start es obligatorio').custom( isDate ),
    check('end').not().isEmpty().withMessage('El campo end es obligatorio').custom( isDate ),
    validarCampos
], crearEvento);

router.put('/:id',[
    check('title').not().isEmpty().withMessage('El titulo es obligatorio'),
    check('start').not().isEmpty().withMessage('El campo start es obligatorio').custom( isDate ),
    check('end').not().isEmpty().withMessage('El campo end es obligatorio').custom( isDate ),
    validarCampos
], actualizarEvento);

router.delete('/:id', eliminarEvento);


module.exports = router;