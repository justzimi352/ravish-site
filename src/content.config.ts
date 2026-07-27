import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Markdown collections so cabinet officers can add a camp, a news item or a
 * story by dropping a file in — no code, no build knowledge required.
 * See src/content/README.md for the copy-paste templates.
 */

const camps = defineCollection({
  loader: glob({ base: './src/content/camps', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    location: z.string(),
    city: z.string(),
    chapter: z.string().optional(),
    patients: z.number().optional(),
    kind: z
      .enum(['general', 'flood-relief', 'label-step', 'dental', 'blood', 'screening', 'clinic'])
      .default('general'),
    partners: z.array(z.string()).default([]),
    summary: z.string(),
    instagram: z.string().url().optional(),
    featured: z.boolean().default(false),
  }),
});

const news = defineCollection({
  loader: glob({ base: './src/content/news', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    kind: z.enum(['camp', 'partnership', 'appointment', 'milestone', 'campaign']).default('milestone'),
    summary: z.string(),
    instagram: z.string().url().optional(),
  }),
});

const stories = defineCollection({
  loader: glob({ base: './src/content/stories', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date().optional(),
    voice: z.string(),
    role: z.string(),
    chapter: z.string().optional(),
    excerpt: z.string(),
  }),
});

export const collections = { camps, news, stories };
