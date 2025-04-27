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

router.post('/contact', [ContactsController, 'store']).use(throttle);

router.on('/').renderInertia('Home');