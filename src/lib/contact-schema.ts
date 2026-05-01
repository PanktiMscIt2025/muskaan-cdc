import { z } from "zod";

export const contactSchema = z.object({
  parentName: z.string().min(2, "Parent name must be at least 2 characters"),
  childName: z.string().min(2, "Child name must be at least 2 characters"),
  childAge: z.string().min(1, "Please enter child's age"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  concern: z.string().min(1, "Please select a concern area"),
  preferredTime: z.string().optional(),
  message: z.string().min(10, "Please tell us a bit more (min 10 characters)"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
