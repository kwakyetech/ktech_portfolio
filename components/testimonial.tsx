import Image from "next/image"
import { Quote } from "lucide-react"

interface TestimonialProps {
  content: string
  author: string
  position: string
  image: string
}

export default function Testimonial({ content, author, position, image }: TestimonialProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
      <div className="mb-4 text-teal-600 dark:text-teal-400">
        <Quote className="h-8 w-8 opacity-80" />
      </div>
      <p className="text-card-foreground/90 mb-6 flex-grow italic">{content}</p>
      <div className="flex items-center mt-4">
        <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-teal-600 dark:border-teal-400">
          <Image src={image || "/placeholder.svg"} alt={author} fill className="object-cover" sizes="48px" />
        </div>
        <div className="ml-4">
          <h4 className="font-medium text-card-foreground">{author}</h4>
          <p className="text-sm text-muted-foreground">{position}</p>
        </div>
      </div>
    </div>
  )
}
