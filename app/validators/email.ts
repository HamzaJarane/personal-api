import vine from '@vinejs/vine'

export const storeEmailValidator = vine.compile(
    vine.object({
        name: vine.string().trim().maxLength(25),
        email: vine.string().trim().email(),
        message: vine.string().trim().maxLength(255),
    })
)