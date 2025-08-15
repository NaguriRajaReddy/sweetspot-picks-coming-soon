type ReviewPageProps = {
  params: {
    slug: string;
  };
};

// This function would typically fetch data based on the slug
// For now, it returns static placeholder data
const getReviewData = (slug: string) => {
  const formattedSlug = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  return {
    title: `${formattedSlug}`,
    content: `This is a detailed review for ${formattedSlug}. Here we would discuss the pros, cons, features, pricing, and our final verdict. The content is currently a placeholder and will be replaced with real data.`,
    affiliateLink: '#',
  };
};

const ReviewPage = ({ params }: ReviewPageProps) => {
  const { slug } = params;
  const review = getReviewData(slug);

  return (
    <div className="space-y-8">
      <h1 className="text-5xl font-bold text-gray-800">{review.title}</h1>

      <div className="prose prose-lg max-w-none">
        <p>{review.content}</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.</p>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Verdict</h3>
        <p className="text-gray-700 mb-6">
          This is a great product for those looking to get started. Check out their best deal below.
        </p>
        <a
          href={review.affiliateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Get the Best Deal
        </a>
      </div>
    </div>
  );
};

export default ReviewPage;
