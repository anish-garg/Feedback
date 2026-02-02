import { z } from 'zod';

export const usernameValidation = z
    .string()
    .min(3, "Username must have at least 3 characters")
    .max(12, "Username must be less than 12 characters")

export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(8, { message: "Password must have at least 8 characters" })
})