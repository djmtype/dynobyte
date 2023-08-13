import { defineCollection, reference, z } from 'astro:content';

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: ({ image }) => z.object({
		title: z.string(),
		author: reference('authors'),
		description: z.string(),
		// Transform string to Date object
		date: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		updatedDate: z
			.string()
			.optional()
			.transform((str) => (str ? new Date(str) : undefined)),
		image: image().refine((img) => img.width >= 630, {
      message: "Cover image must be at least 630 pixels wide!",
    }).optional(),
		imageAlt: z.string().optional(),
		categories: z.array(z.string().optional()).optional(),
		tags: z.array(z.string().optional()).optional(),
		status: z.string(z.enum(["draft", "publish"]).default("draft"))
	}),
});

const authors = defineCollection({
  schema: z.object({
    name: z.string(),
    portfolio: z.string().url().optional(),
		description: z.string().optional()
  })
});

export const collections = { blog, authors };
