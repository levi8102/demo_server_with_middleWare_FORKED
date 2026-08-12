import { z } from 'zod';

export const createUserSchema = z.object({
    fullName: z.string().min(1, 'Full Name shoud have contain 1 character').max(100, 'Full Name hsoul have contenined max of 100 characters'),
    email: z.email()
});

export type CreateUserDto = z.infer<typeof createUserSchema>;