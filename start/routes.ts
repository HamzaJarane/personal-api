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
import BlogController from '#controllers/blog_controller';

router.on('/').renderInertia('Home');
router.get('/blog', [BlogController, 'index']);
router.get('/blog/:post', [BlogController, 'show']);
router.post('/contact', [ContactsController, 'store']).use(throttle);