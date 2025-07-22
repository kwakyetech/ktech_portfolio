import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import Header from "@/components/header"
import BlogFooter from "@/components/blog-footer"

export const metadata: Metadata = {
  title: "Blog | Prince Kwakye Ofori",
  description: "Technical articles and thoughts on web development by Prince Kwakye Ofori",
}

// Sample blog post data
const blogPosts = [
  {
    id: "ai-powered-marketing-automation-2024",
    title: "AI-Powered Marketing Automation: The Future is Now",
    date: "December 15, 2024",
    excerpt:
      "Discover how artificial intelligence is revolutionizing marketing automation, from personalized customer journeys to predictive analytics that drive real results.",
    image: "/images/blog/ai-marketing-automation.png",
    category: "AI Marketing",
    readTime: "7 min read",
  },
  {
    id: "voice-search-optimization-strategies",
    title: "Voice Search Optimization: Capturing the Conversational Web",
    date: "December 10, 2024",
    excerpt:
      "With voice assistants becoming mainstream, learn the essential strategies to optimize your content for voice search and stay ahead of the competition.",
    image: "/images/blog/voice-search-optimization.png",
    category: "SEO",
    readTime: "6 min read",
  },
  {
    id: "interactive-content-marketing-trends",
    title: "Interactive Content Marketing: Engaging Audiences in 2024",
    date: "December 5, 2024",
    excerpt:
      "Explore the latest interactive content trends that are driving engagement, from AR experiences to gamified marketing campaigns that convert.",
    image: "/images/blog/interactive-content-marketing.png",
    category: "Content Marketing",
    readTime: "8 min read",
  },
  {
    id: "digital-marketing-essentials",
    title: "Digital Marketing Essentials: Strategies for 2024 and Beyond",
    date: "May 15, 2024",
    excerpt:
      "Explore the fundamentals of digital marketing and discover effective strategies to grow your online presence in today's competitive landscape.",
    image: "/images/blog/digital-marketing-strategy.png",
    category: "Marketing",
    readTime: "8 min read",
  },
  {
    id: "getting-started-with-html",
    title: "Getting Started with HTML: A Beginner's Guide",
    date: "May 1, 2024",
    excerpt:
      "HTML is the foundation of web development. In this post, I'll walk through the basics of HTML and how to create your first webpage.",
    image: "/images/blog/html-basics-tutorial.png",
    category: "HTML",
    readTime: "5 min read",
  },
  {
    id: "css-flexbox-explained",
    title: "CSS Flexbox Explained: A Visual Guide",
    date: "April 15, 2024",
    excerpt:
      "Flexbox has revolutionized how we create layouts in CSS. Let's explore how it works with practical examples.",
    image: "/images/blog/css-flexbox-guide.png",
    category: "CSS",
    readTime: "8 min read",
  },
  {
    id: "javascript-array-methods",
    title: "10 JavaScript Array Methods You Should Know",
    date: "March 28, 2024",
    excerpt:
      "JavaScript arrays come with powerful built-in methods that can make your code cleaner and more efficient. Here are 10 essential methods every developer should master.",
    image: "/images/blog/javascript-array-methods.png",
    category: "JavaScript",
    readTime: "6 min read",
  },
  {
    id: "git-workflow-for-beginners",
    title: "Git Workflow for Beginners: From Init to Push",
    date: "March 10, 2024",
    excerpt:
      "Understanding Git is essential for modern development. This post covers a basic Git workflow for beginners.",
    image: "/images/blog/git-workflow-guide.png",
    category: "Git",
    readTime: "7 min read",
  },
]

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Blog Header */}
        <section className="py-10 md:py-16 bg-gradient-to-b from-background to-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">My Blog</h1>
              <p className="text-base md:text-lg text-foreground/70 px-2">
                Thoughts, tutorials, and insights about web development, digital marketing, and my learning journey.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-8 md:py-12 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
                >
                  <Link href={`/blog/${post.id}`} className="flex flex-col h-full">
                    <div className="relative h-48 sm:h-56 w-full">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute top-3 left-3 md:top-4 md:left-4">
                        <span className="bg-teal-600 text-white text-xs px-2 py-1 rounded-full">{post.category}</span>
                      </div>
                    </div>
                    <div className="p-4 md:p-6 flex flex-col flex-grow">
                      <div className="flex justify-between items-center text-xs sm:text-sm text-foreground/60 mb-2">
                        <span>{post.date}</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h2 className="text-lg sm:text-xl font-semibold mb-2 text-foreground hover:text-teal-600 dark:hover:text-teal-400 transition-colors line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="text-foreground/70 mb-4 text-sm sm:text-base line-clamp-3 flex-grow">
                        {post.excerpt}
                      </p>
                      <span className="text-teal-600 dark:text-teal-400 font-medium hover:text-teal-700 dark:hover:text-teal-300 transition-colors inline-flex items-center text-sm mt-auto">
                        Read more
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="ml-1"
                        >
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-10 md:py-16 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-md sm:max-w-lg md:max-w-2xl mx-auto text-center">
              <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Subscribe to my newsletter</h2>
              <p className="text-foreground/70 mb-6 text-sm md:text-base px-2">
                Get notified when I publish new articles about web development and digital marketing. No spam, just
                quality content.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent bg-background text-sm md:text-base"
                  required
                />
                <button
                  type="submit"
                  className="bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white px-4 py-2 rounded-md font-medium transition-colors text-sm md:text-base whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <BlogFooter />
    </>
  )
}
