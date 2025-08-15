type ComparisonPageProps = {
  params: {
    slug: string;
  };
};

// This function would typically fetch data based on the slug
// For now, it returns static placeholder data
const getComparisonData = (slug: string) => {
  const formattedSlug = slug.replace(/-/g, ' ').replace('vs', 'vs.');
  const products = slug.split('-vs-');
  const product1 = products[0]?.replace(/-/g, ' ')?.replace(/\b\w/g, l => l.toUpperCase()) || 'Product 1';
  const product2 = products[1]?.replace(/-/g, ' ')?.replace(/\b\w/g, l => l.toUpperCase()) || 'Product 2';

  return {
    title: `Comparison: ${product1} vs. ${product2}`,
    product1,
    product2,
    features: [
      { feature: 'Pricing', product1: '$2.95/mo', product2: '$2.75/mo' },
      { feature: 'Uptime', product1: '99.98%', product2: '99.99%' },
      { feature: 'Support', product1: 'Good', product2: 'Excellent' },
      { feature: 'Free Domain', product1: 'Yes', product2: 'Yes' },
      { feature: 'Money-back Guarantee', product1: '30-Day', product2: '45-Day' },
    ],
  };
};


const ComparisonPage = ({ params }: ComparisonPageProps) => {
  const { slug } = params;
  const comparison = getComparisonData(slug);

  return (
    <div className="space-y-8">
      <h1 className="text-5xl font-bold text-gray-800 text-center mb-12">{comparison.title}</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-4 border border-gray-300 text-left text-xl font-semibold">Feature</th>
              <th className="p-4 border border-gray-300 text-left text-xl font-semibold">{comparison.product1}</th>
              <th className="p-4 border border-gray-300 text-left text-xl font-semibold">{comparison.product2}</th>
            </tr>
          </thead>
          <tbody>
            {comparison.features.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="p-4 border border-gray-300 font-medium">{item.feature}</td>
                <td className="p-4 border border-gray-300">{item.product1}</td>
                <td className="p-4 border border-gray-300">{item.product2}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComparisonPage;
