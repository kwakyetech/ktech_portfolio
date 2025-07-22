"use client"
import ContactForm from "@/components/contact-form"
import AnimatedSection from "@/components/animated-section"
import AnimatedText from "@/components/animated-text"
import ResponsiveImage from "@/components/responsive-image"
import Header from "@/components/header"
import WorkExperience from "@/components/work-experience"
import FeaturedBlogPost from "@/components/featured-blog-post"
import TestimonialsSection from "@/components/testimonials-section"
import SkillsSection from "@/components/skills-section"
import AnimatedJobTitle from "@/components/animated-job-title"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center md:gap-8">
            <AnimatedSection className="md:w-1/2 mb-10 md:mb-0" animation="fade-in">
              <AnimatedText as="h1" className="text-4xl md:text-5xl font-bold mb-4" delay={200}>
                <span className="text-foreground">Hi! I'm Prince</span>
                <div className="mt-4">
                  <AnimatedJobTitle />
                </div>
              </AnimatedText>
              <AnimatedText className="text-foreground/80 text-lg mb-8 max-w-md" delay={400}>
                Passionate about creating beautiful, responsive websites with clean code. Always eager to learn and grow
                as a developer.
              </AnimatedText>
              <div className="flex space-x-4">
                <a
                  href="#contact"
                  className="bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  Contact Me
                </a>
                <a
                  href="#"
                  className="border border-teal-600 dark:border-teal-400 text-teal-600 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/20 px-6 py-3 rounded-md font-medium transition-all duration-300 hover:-translate-y-1"
                >
                  Download Resume
                </a>
              </div>
            </AnimatedSection>
            <AnimatedSection className="md:w-1/2 flex justify-center" animation="fade-in" delay={300}>
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg transition-transform duration-700 hover:scale-105 relative z-10">
                  <ResponsiveImage
                    src="/images/profile.png"
                    alt="Prince Kwakye Ofori"
                    className="object-cover"
                    priority={true}
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedText as="h2" className="text-3xl font-bold text-center mb-4">
            About Me
          </AnimatedText>
          <AnimatedText className="text-teal-600 dark:text-teal-400 text-lg font-medium text-center mb-12" delay={200}>
            Designing. Coding. Marketing. Creating Impact
          </AnimatedText>
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fade-up">
              <div className="relative">
                {/* Floating image */}
                <div className="float-left mr-6 mb-4 w-48 h-48 md:w-56 md:h-56">
                  <div className="bg-card border border-border rounded-lg shadow-md p-3 w-full h-full">
                    <div className="aspect-square w-full overflow-hidden rounded-md">
                      <ResponsiveImage
                        src="/images/profile.png"
                        alt="Prince Kwakye Ofori"
                        className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  </div>
                </div>

                {/* Text content */}
                <div className="text-foreground/80 space-y-6">
                  <p>
                    Hi there! I'm Prince — a passionate creative with a strong foundation in frontend development, web
                    design, web development, UI/UX design, graphic design, and digital marketing. My journey began
                    during the pandemic when I discovered how much I love bringing ideas to life for the web — from
                    writing clean, efficient code to designing beautiful, user-friendly interfaces that align with smart
                    marketing strategies.
                  </p>
                  <p>
                    Over the last year, I've been sharpening my skills in HTML, CSS, JavaScript, modern workflows with
                    Git and GitHub, while expanding my design abilities and diving into the world of digital marketing
                    to understand how great visuals and solid code help brands connect with their audiences.
                  </p>
                  <p>
                    I'm especially passionate about crafting responsive, accessible websites and digital experiences
                    that look amazing and perform well across all devices. Whether it's developing pixel-perfect
                    layouts, designing striking graphics, improving user journeys, or supporting online campaigns, I
                    love the challenge of blending design, technology, and marketing together.
                  </p>
                  <p>
                    Right now, I'm looking for opportunities where I can contribute my range of skills — as a junior
                    developer, web designer, UI/UX designer, graphic designer, or digital marketer — while learning from
                    experienced professionals and growing with meaningful projects.
                  </p>
                  <p>
                    When I'm not creating or coding, you'll find me exploring hiking trails, reading up on the latest
                    design trends, or trying out new recipes in the kitchen.
                  </p>

                  {/* CTA Button */}
                  <div className="pt-4 clear-both">
                    <a
                      href="mailto:kwakye792@gmail.com"
                      className="inline-block bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 dark:from-teal-500 dark:to-teal-600 dark:hover:from-teal-600 dark:hover:to-teal-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 transform"
                    >
                      Let's connect & build something impactful!
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-muted relative">
        <div className="container mx-auto px-4 md:px-6 relative z-0">
          <AnimatedText as="h2" className="text-3xl font-bold text-center mb-4">
            My Skills
          </AnimatedText>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-foreground/80">
              I'm constantly learning and expanding my skillset. Here's a breakdown of my technical and soft skills:
            </p>
          </div>

          <SkillsSection />
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedText as="h2" className="text-3xl font-bold text-center mb-4">
            Work Experience
          </AnimatedText>
          <AnimatedText className="text-foreground/80 text-center max-w-2xl mx-auto mb-12" delay={200}>
            My professional journey in web development.
          </AnimatedText>
          <WorkExperience />
        </div>
      </section>

      {/* Learning Journey Section */}
      <section id="journey" className="py-20 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedText as="h2" className="text-3xl font-bold text-center mb-4">
            My Learning Journey
          </AnimatedText>
          <AnimatedText className="text-foreground/80 text-center max-w-2xl mx-auto mb-12" delay={200}>
            I'm constantly building and learning. Currently enrolled in the ALX Frontend Web Development program where
            I'm mastering modern frontend technologies and building real-world applications.
          </AnimatedText>

          <AnimatedSection animation="fade-up" delay={100} className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">ALX Frontend Web Development</h3>
                <p className="text-muted-foreground mb-4">
                  I'm currently enrolled in the ALX Frontend Web Development program, a comprehensive course focused on
                  modern frontend technologies and best practices. This program covers advanced HTML, CSS, JavaScript,
                  React, and other essential frontend frameworks, along with hands-on projects to build real-world
                  applications.
                </p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <span className="bg-teal-600 dark:bg-teal-500 text-white text-xs px-2 py-1 rounded-full">
                    In Progress
                  </span>
                  <span className="mx-2">•</span>
                  <span>Expected completion: October 2025</span>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">Mega Digital Marketing Course</h3>
                <p className="text-muted-foreground mb-4">
                  Currently taking this comprehensive digital marketing course on Udemy by Pouya Eti, a Digital
                  Marketing Expert. This course covers all aspects of digital marketing including SEO, social media
                  marketing, content marketing, email marketing, PPC advertising, analytics, and conversion optimization
                  strategies.
                </p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <span className="bg-purple-600 dark:bg-purple-500 text-white text-xs px-2 py-1 rounded-full">
                    In Progress
                  </span>
                  <span className="mx-2">•</span>
                  <span>Udemy • Pouya Eti</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={200} className="mt-8">
            <h3 className="text-xl font-semibold mb-4 text-center">Completed Courses</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-card border border-border rounded-lg p-5 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <h4 className="font-medium mb-2">ALX Professional Foundation</h4>
                <p className="text-sm text-muted-foreground mb-3">ALX</p>
                <div className="mt-2">
                  <p className="text-sm font-medium text-foreground mb-1">Key Skills:</p>
                  <div className="flex flex-wrap gap-1">
                    <span className="text-xs bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300 px-2 py-0.5 rounded-full">
                      Software Engineering
                    </span>
                    <span className="text-xs bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300 px-2 py-0.5 rounded-full">
                      Problem Solving
                    </span>
                    <span className="text-xs bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300 px-2 py-0.5 rounded-full">
                      Algorithms
                    </span>
                    <span className="text-xs bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300 px-2 py-0.5 rounded-full">
                      Data Structures
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-5 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <h4 className="font-medium mb-2">ALX AI Starter Kit</h4>
                <p className="text-sm text-muted-foreground mb-3">ALX</p>
                <div className="mt-2">
                  <p className="text-sm font-medium text-foreground mb-1">Key Skills:</p>
                  <div className="flex flex-wrap gap-1">
                    <span className="text-xs bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 px-2 py-0.5 rounded-full">
                      AI Fundamentals
                    </span>
                    <span className="text-xs bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 px-2 py-0.5 rounded-full">
                      Machine Learning
                    </span>
                    <span className="text-xs bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 px-2 py-0.5 rounded-full">
                      AI Applications
                    </span>
                    <span className="text-xs bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 px-2 py-0.5 rounded-full">
                      Data Analysis
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-5 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <h4 className="font-medium mb-2">Career Essentials in Business Analysis</h4>
                <p className="text-sm text-muted-foreground mb-3">Microsoft and LinkedIn</p>
                <div className="mt-2">
                  <p className="text-sm font-medium text-foreground mb-1">Key Skills:</p>
                  <div className="flex flex-wrap gap-1">
                    <span className="text-xs bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 px-2 py-0.5 rounded-full">
                      Requirements Gathering
                    </span>
                    <span className="text-xs bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 px-2 py-0.5 rounded-full">
                      Stakeholder Management
                    </span>
                    <span className="text-xs bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 px-2 py-0.5 rounded-full">
                      Process Modeling
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-5 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <h4 className="font-medium mb-2">Explore a Career in Business Analysis</h4>
                <p className="text-sm text-muted-foreground mb-3">LinkedIn Learning</p>
                <div className="mt-2">
                  <p className="text-sm font-medium text-foreground mb-1">Key Skills:</p>
                  <div className="flex flex-wrap gap-1">
                    <span className="text-xs bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 px-2 py-0.5 rounded-full">
                      Business Process Modeling
                    </span>
                    <span className="text-xs bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 px-2 py-0.5 rounded-full">
                      Use Case Development
                    </span>
                    <span className="text-xs bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 px-2 py-0.5 rounded-full">
                      Industry Analysis
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-5 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <h4 className="font-medium mb-2">Getting Started as a Business Analyst</h4>
                <p className="text-sm text-muted-foreground mb-3">LinkedIn Learning</p>
                <div className="mt-2">
                  <p className="text-sm font-medium text-foreground mb-1">Key Skills:</p>
                  <div className="flex flex-wrap gap-1">
                    <span className="text-xs bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300 px-2 py-0.5 rounded-full">
                      Documentation
                    </span>
                    <span className="text-xs bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300 px-2 py-0.5 rounded-full">
                      Analysis Techniques
                    </span>
                    <span className="text-xs bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300 px-2 py-0.5 rounded-full">
                      Requirements Elicitation
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-5 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <h4 className="font-medium mb-2">Agile Software Development</h4>
                <p className="text-sm text-muted-foreground mb-3">Coursera</p>
                <div className="mt-2">
                  <p className="text-sm font-medium text-foreground mb-1">Key Skills:</p>
                  <div className="flex flex-wrap gap-1">
                    <span className="text-xs bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 px-2 py-0.5 rounded-full">
                      Scrum
                    </span>
                    <span className="text-xs bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 px-2 py-0.5 rounded-full">
                      Kanban
                    </span>
                    <span className="text-xs bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 px-2 py-0.5 rounded-full">
                      Sprint Planning
                    </span>
                    <span className="text-xs bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 px-2 py-0.5 rounded-full">
                      User Stories
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-5 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <h4 className="font-medium mb-2">Figma Design Course 2023: Your Website From Start to Finish</h4>
                <p className="text-sm text-muted-foreground mb-3">Udemy</p>
                <div className="mt-2">
                  <p className="text-sm font-medium text-foreground mb-1">Key Skills:</p>
                  <div className="flex flex-wrap gap-1">
                    <span className="text-xs bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300 px-2 py-0.5 rounded-full">
                      Web Development
                    </span>
                    <span className="text-xs bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300 px-2 py-0.5 rounded-full">
                      Responsive Design
                    </span>
                    <span className="text-xs bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300 px-2 py-0.5 rounded-full">
                      CSS Layouts
                    </span>
                    <span className="text-xs bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300 px-2 py-0.5 rounded-full">
                      Web Hosting
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-5 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <h4 className="font-medium mb-2">Programming with JavaScript</h4>
                <p className="text-sm text-muted-foreground mb-3">Meta</p>
                <div className="mt-2">
                  <p className="text-sm font-medium text-foreground mb-1">Key Skills:</p>
                  <div className="flex flex-wrap gap-1">
                    <span className="text-xs bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300 px-2 py-0.5 rounded-full">
                      JavaScript Fundamentals
                    </span>
                    <span className="text-xs bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300 px-2 py-0.5 rounded-full">
                      DOM Manipulation
                    </span>
                    <span className="text-xs bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300 px-2 py-0.5 rounded-full">
                      ES6 Features
                    </span>
                    <span className="text-xs bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300 px-2 py-0.5 rounded-full">
                      Debugging
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-5 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <h4 className="font-medium mb-2">Introduction to Front-End Development</h4>
                <p className="text-sm text-muted-foreground mb-3">Meta</p>
                <div className="mt-2">
                  <p className="text-sm font-medium text-foreground mb-1">Key Skills:</p>
                  <div className="flex flex-wrap gap-1">
                    <span className="text-xs bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 px-2 py-0.5 rounded-full">
                      HTML
                    </span>
                    <span className="text-xs bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 px-2 py-0.5 rounded-full">
                      CSS
                    </span>
                    <span className="text-xs bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 px-2 py-0.5 rounded-full">
                      Responsive Design
                    </span>
                    <span className="text-xs bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 px-2 py-0.5 rounded-full">
                      Web Accessibility
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedText as="h2" className="text-3xl font-bold text-center mb-4">
            My Blog
          </AnimatedText>
          <AnimatedText className="text-foreground/80 text-center max-w-2xl mx-auto mb-12" delay={200}>
            I write about my learning journey, web development tips, and tutorials to help other beginners.
          </AnimatedText>

          {/* Featured Blog Post */}
          <AnimatedSection animation="fade-up" delay={100} className="mb-12">
            <FeaturedBlogPost
              title="Digital Marketing Essentials: Strategies for 2024 and Beyond"
              excerpt="Explore the fundamentals of digital marketing and discover effective strategies to grow your online presence in today's competitive landscape."
              image="/images/blog/digital-marketing-strategy.png"
              category="Marketing"
              date="May 15, 2024"
              readTime="8 min read"
              slug="digital-marketing-essentials"
            />
          </AnimatedSection>

          <AnimatedSection animation="fade-up" className="flex justify-center mb-8">
            <a
              href="/blog"
              className="bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1 inline-flex items-center"
            >
              Read more articles
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedText as="h2" className="text-3xl font-bold text-center mb-12">
            Get In Touch
          </AnimatedText>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <AnimatedSection animation="slide-in-left">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <p className="text-foreground/80 mb-6">
                I'm currently available for freelance work, internships, or junior developer positions. Feel free to
                reach out if you'd like to connect!
              </p>
              <div className="space-y-4">
                <div className="flex items-center transition-transform duration-300 hover:translate-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-teal-600 dark:text-teal-400 mr-3"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <a
                    href="mailto:kwakye792@gmail.com"
                    className="text-foreground/80 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                  >
                    kwakye792@gmail.com
                  </a>
                </div>
                <div className="flex items-center transition-transform duration-300 hover:translate-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-teal-600 dark:text-teal-400 mr-3"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  <a
                    href="https://github.com/kwakyetech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                  >
                    github.com/kwakyetech
                  </a>
                </div>
                <div className="flex items-center transition-transform duration-300 hover:translate-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-teal-600 dark:text-teal-400 mr-3"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  <a
                    href="https://www.linkedin.com/in/prince-kwakye-ofori-730060195/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                  >
                    linkedin.com/in/prince-kwakye-ofori
                  </a>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slide-in-right">
              <ContactForm />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-800 dark:bg-gray-900 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p>© {new Date().getFullYear()} Prince Kwakye Ofori. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a
              href="https://github.com/kwakyetech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <span className="sr-only">GitHub</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/prince-kwakye-ofori-730060195/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <span className="sr-only">LinkedIn</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              href="mailto:kwakye792@gmail.com"
              className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <span className="sr-only">Email</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-mail"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
