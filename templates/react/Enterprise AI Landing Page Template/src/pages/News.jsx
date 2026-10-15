import React from 'react'

const News = () => {
  const articles = [
    {
      type: "Press Release",
      title: "Subgen AI announces strategic partnership to expand Serenity Star capabilities",
      excerpt: "We are thrilled to announce a new milestone in our journey to provide the most robust enterprise AI orchestration platform. This partnership will enable seamless integration with legacy systems.",
      date: "October 12, 2023"
    },
    {
      type: "Product Update",
      title: "Introducing enhanced compliance frameworks for Substrate Cloud",
      excerpt: "In response to growing regulatory requirements, our latest update brings native support for European data sovereignty standards, ensuring your deployments remain compliant.",
      date: "September 28, 2023"
    },
    {
      type: "Company News",
      title: "Subgen AI named 'Visionary' in latest Enterprise AI Infrastructure Report",
      excerpt: "Leading industry analysts have recognized our unique approach to decoupling AI orchestration from underlying LLM providers, highlighting Serenity Star's flexibility.",
      date: "September 15, 2023"
    },
    {
      type: "Event",
      title: "Join us at the European AI Summit 2023",
      excerpt: "Our leadership team will be keynoting at this year's summit, discussing the realities of moving generative AI from experimentation to production.",
      date: "August 30, 2023"
    }
  ];

  return (
    <div className="min-h-[70vh] bg-gray-50/30 py-24">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#0a1433] mb-4">
          News & Insights
        </h1>
        <p className="text-lg text-[#263669] mb-12 max-w-2xl">
          Stay updated with the latest announcements, product updates, and thought leadership from the Subgen AI team.
        </p>
        
        <div className="grid gap-8">
          {articles.map((article, idx) => (
            <article key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row gap-6 cursor-pointer">
              <div className="md:w-1/4 shrink-0">
                <div className="text-xs font-medium text-[#4ba8ed] mb-1 uppercase tracking-wider">{article.type}</div>
                <div className="text-sm text-gray-400">{article.date}</div>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-[#0a1433] mb-3 tracking-tight group-hover:text-[#4ba8ed] transition-colors">
                  {article.title}
                </h3>
                <p className="text-[#263669] leading-relaxed">
                  {article.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center">
          <button className="px-6 py-3 border border-gray-200 text-[#263669] font-medium rounded-md hover:border-[#4ba8ed] hover:text-[#4ba8ed] transition-colors">
            Load More Articles
          </button>
        </div>
      </div>
    </div>
  )
}

export default News