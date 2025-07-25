const express = require('express')
const router = express.Router()
// Controllers
const { create,
    list,
    read,
    update,
    remove,
    listby,
    searchFilters,
    createImages,
    removeImage
} = require('../controllers/product')
const { authCheck, adminCheck } = require('../middlewares/authCheck')
// @ENDPOINT https://ecom2025-api-amber.vercel.app/api/product
router.post('/product', create)
router.get('/products/:count', list)
router.get('/product/:id', read)
router.put('/product/:id', update)
router.delete('/product/:id', remove)
router.post('/productby', listby)
router.post('/search/filters', searchFilters)

// router.post('/images', authCheck, adminCheck, createImages)
// router.post('/removeimages', authCheck, adminCheck, removeImage)

router.post('/images', authCheck, createImages)
router.post('/removeimages', authCheck, removeImage)



module.exports = router