import { defineCollection, z } from 'astro:content';

const caseStudies = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      industry: z.enum([
        'Privatbank',
        'Kantonalbank',
        'Versicherer',
        'Krankenversicherer',
        'Bank-Konsolidierung',
      ]),
      platform: z.enum(['Avaloq', 'Finnova', 'SYRIUS', 'BSI CRM', 'Other']).optional(),
      serviceLine: z.enum([
        'Project Services',
        'Solution Services',
        'Quality Services',
        'Software Services',
      ]),
      // Non-negotiable per brand doc: every tile must have a number.
      headlineMetric: z.string(),
      summary: z.string(),
      heroImage: image().optional(),
      publishedAt: z.date(),
      featured: z.boolean().default(false),
      clientNamed: z.boolean().default(false),
      clientName: z.string().optional(),
    }),
});

const insights = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      lede: z.string(),
      category: z.enum(['Testing', 'Migration', 'Compliance', 'Engineering', 'Manifest']),
      author: z.string(),
      heroImage: image().optional(),
      publishedAt: z.date(),
      readMinutes: z.number().int().positive(),
      featured: z.boolean().default(false),
    }),
});

const testimonials = defineCollection({
  type: 'content',
  schema: z.object({
    quote: z.string(),
    author: z.string(),
    role: z.string(),
    industry: z.enum([
      'Privatbank',
      'Kantonalbank',
      'Versicherer',
      'Krankenversicherer',
    ]),
    nameVisible: z.boolean().default(false),
  }),
});

export const collections = {
  'case-studies': caseStudies,
  insights,
  testimonials,
};
