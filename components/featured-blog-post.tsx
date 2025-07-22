import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

interface FeaturedBlogPostProps {
  title: string
  excerpt: string
  image: string
  category: string
  date: string
  readTime: string
  slug: string
}

export default function FeaturedBlogPost({
  title,
  excerpt,
  image,
  category,
  date,
  readTime,
  slug,
}: FeaturedBlogPostProps) {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group">
      <div className="md:flex">
        <div className="md:w-1/2 relative">
          <div className="relative h-56 md:h-full w-full">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute top-3 left-3 md:top-4 md:left-4">
              <span className="bg-teal-600 dark:bg-teal-500 text-white text-xs px-2 py-1 rounded-full">{category}</span>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 p-4 sm:p-6 md:p-8 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center text-xs sm:text-sm text-muted-foreground mb-2">
              <span>{date}</span>
              <span>{readTime}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 md:mb-4 text-card-foreground group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors line-clamp-2">
              {title}
            </h3>
            <p className="text-muted-foreground mb-4 md:mb-6 text-sm sm:text-base line-clamp-3">{excerpt}</p>
          </div>
          <Link
            href={`/blog/${slug}`}
            className="inline-flex items-center text-teal-600 dark:text-teal-400 font-medium hover:text-teal-700 dark:hover:text-teal-300 transition-colors group/link text-sm sm:text-base"
          >
            Read full article
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  )
}
