import z from 'zod'

export interface LikeOrDislikePostInputDTO {
    id: string,
    token: string,
    like: boolean

}

export type LikeOrDislikeOutputDTO = undefined

export const LikeOrDislikePostSchema = z.object({
    id: z.string().min(1),
    token: z.string().min(1),
    like: z.boolean()
})