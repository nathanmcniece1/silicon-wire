export default {
  name: 'company',
  title: 'Company',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' } },
    { name: 'ticker', title: 'Ticker Symbol', type: 'string' },
    { name: 'description', title: 'Description', type: 'text' },
    {
      name: 'supplyChainPosition',
      title: 'Supply Chain Position',
      type: 'text',
      description: 'Where in the chain this company operates',
    },
    { name: 'beats', title: 'Beats', type: 'array', of: [{ type: 'string' }] },
    {
      name: 'relatedCompanies',
      title: 'Related Companies',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'company' }] }],
    },
    {
      name: 'metrics',
      title: 'Key Metrics',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'value', title: 'Value', type: 'string' },
            { name: 'change', title: 'Change', type: 'string' },
            {
              name: 'direction',
              title: 'Direction',
              type: 'string',
              options: { list: ['up', 'down', 'flat'] },
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: { title: 'name', subtitle: 'ticker' },
  },
}
