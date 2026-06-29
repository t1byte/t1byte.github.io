import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    category: z.string(),
    readTime: z.string(),
  }),
});

const products = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    price: z.number(),
    image: z.string(),
    category: z.string(),
    featured: z.boolean().optional().default(false),
    externalUrl: z.string(),
    date: z.date(),
  }),
});

export const collections = { blog, products };
