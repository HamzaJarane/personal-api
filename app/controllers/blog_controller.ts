import type { HttpContext } from '@adonisjs/core/http';

export default class BlogController {
    public async index({ inertia }: HttpContext) {
        return inertia.render('Blog');
    }

    public async show({ inertia }: HttpContext) {
        return inertia.render('Post');
    }
}