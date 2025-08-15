import Link from 'next/link';

// Placeholder data for featured content
const featuredReviews = [
  {
    title: 'Bluehost Review: Is It the Best for Beginners?',
    description: 'We take a deep dive into Bluehost\'s features, pricing, and performance to see if it\'s the right choice for you.',
    slug: '/reviews/bluehost-review',
  },
  {
    title: 'HostGator Review: A Powerful and Affordable Option',
    description: 'HostGator offers a wide range of hosting plans. Find out if their performance and support live up to the hype.',
    slug: '/reviews/hostgator-review',
  },
];

const featuredComparisons = [
  {
    title: 'Bluehost vs. HostGator: Which One to Choose?',
    description: 'A head-to-head comparison of two of the most popular hosting providers in the industry.',
    slug: '/compare/bluehost-vs-hostgator',
  },
];

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gray-100 rounded-lg">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Find the Perfect Web Tools for Your Project
        </h1>
        <p className="text-xl text-gray-600">
          Honest reviews and comparisons of hosting, domains, and marketing tools.
        </p>
      </section>

      {/* Featured Reviews Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Featured Reviews</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {featuredReviews.map((review) => (
            <div key={review.slug} className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-semibold mb-2">{review.title}</h3>
              <p className="text-gray-600 mb-4">{review.description}</p>
              <Link href={review.slug} className="text-blue-600 hover:underline font-semibold">
                Read more &rarr;
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Comparisons Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Popular Comparisons</h2>
        <div className="space-y-6">
          {featuredComparisons.map((comparison) => (
            <div key={comparison.slug} className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-semibold mb-2">{comparison.title}</h3>
              <p className="text-gray-600 mb-4">{comparison.description}</p>
              <Link href={comparison.slug} className="text-blue-600 hover:underline font-semibold">
                View comparison &rarr;
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
