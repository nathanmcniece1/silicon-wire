export default {
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 } },
    {
      name: 'beat',
      title: 'Beat',
      type: 'string',
      options: {
        list: [
          { title: 'Materials & Fab', value: 'materials-fab' },
          { title: 'Chips', value: 'chips' },
          { title: 'Infrastructure', value: 'infrastructure' },
          { title: 'Software', value: 'software' },
          { title: 'Policy & Capital', value: 'policy-capital' },
        ],
      },
    },
    {
      name: 'format',
      title: 'Format',
      type: 'string',
      options: {
        list: [
          { title: 'Wire Dispatch', value: 'wire-dispatch' },
          { title: 'Deep Dive', value: 'deep-dive' },
          { title: 'Supply Chain Map', value: 'supply-chain-map' },
          { title: 'Earnings Breakdown', value: 'earnings-breakdown' },
          { title: 'Weekly Briefing', value: 'weekly-briefing' },
        ],
      },
    },
    { name: 'excerpt', title: 'Excerpt', type: 'text', rows: 3 },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }, { type: 'code' }],
    },
    { name: 'publishedAt', title: 'Published At', type: 'datetime' },
    { name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }] },
    {
      name: 'companies',
      title: 'Companies',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'company' }] }],
    },
    {
      name: 'confidenceScore',
      title: 'Confidence Score',
      type: 'number',
      description: 'Internal quality score 0-100',
    },
    {
      name: 'sources',
      title: 'Sources',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'url', title: 'URL', type: 'url' },
          ],
        },
      ],
    },
    { name: 'readTime', title: 'Read Time', type: 'number', description: 'Estimated minutes' },
  ],
  preview: {
    select: { title: 'title', beat: 'beat', date: 'publishedAt' },
    prepare({ title, beat, date }: any) {
      return { title, subtitle: `${beat} — ${new Date(date).toLocaleDateString()}` }
    },
  },
}
