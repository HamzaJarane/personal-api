/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import ContactsController from '#controllers/contacts_controller'
import router from '@adonisjs/core/services/router'
import { throttle } from '#start/limiter'

router.get('/', async () => {
  return {
    status: 'ok',
  }
}).use(throttle);

router.post('/contact', [ContactsController, 'store']).use(throttle);