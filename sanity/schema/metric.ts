export default {
  name: 'metric',
  title: 'Metric',
  type: 'document',
  fields: [
    { name: 'label', title: 'Label', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug' },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Chip Pricing', value: 'chip-pricing' },
          { title: 'Foundry', value: 'foundry' },
          { title: 'Infrastructure', value: 'infrastructure' },
          { title: 'Training', value: 'training' },
        ],
      },
    },
    { name: 'currentValue', title: 'Current Value', type: 'string' },
    { name: 'change', title: 'Change', type: 'string' },
    {
      name: 'direction',
      title: 'Direction',
      type: 'string',
      options: { list: ['up', 'down', 'flat'] },
    },
    { name: 'period', title: 'Period', type: 'string', description: 'QoQ, MoM, YoY' },
    {
      name: 'history',
      title: 'History',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'date', title: 'Date', type: 'date' },
            { name: 'value', title: 'Value', type: 'number' },
          ],
        },
      ],
    },
  ],
  preview: {
    select: { title: 'label', subtitle: 'currentValue' },
  },
}
