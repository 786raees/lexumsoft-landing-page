import { z } from "zod";

export const miniLeadFormSchema = z.object({
  firstName: z.string().min(2, "Name must be at least 2 characters"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .regex(/^[\d\s\-()+ ]+$/, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address").optional().or(z.literal("")),
  company: z.string().min(2, "Company name is required"),
  hasWhatsapp: z.boolean().optional(),
});

export const fullLeadFormSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .regex(/^[\d\s\-()+ ]+$/, "Please enter a valid phone number"),
  company: z.string().min(2, "Company name is required"),
  trucks: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().optional(),
});

// Unified schema for the API route — accepts submissions from either form variant
export const leadSubmissionSchema = z.object({
  firstName: z.string().min(2, "Name must be at least 2 characters"),
  lastName: z.string().optional(),
  email: z.string().email("Please enter a valid email address").optional().or(z.literal("")),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .regex(/^[\d\s\-()+ ]+$/, "Please enter a valid phone number"),
  company: z.string().min(2, "Company name is required"),
  trucks: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().optional(),
  hasWhatsapp: z.boolean().optional(),
});

export type MiniLeadFormValues = z.infer<typeof miniLeadFormSchema>;
export type FullLeadFormValues = z.infer<typeof fullLeadFormSchema>;
export type LeadSubmission = z.infer<typeof leadSubmissionSchema>;
