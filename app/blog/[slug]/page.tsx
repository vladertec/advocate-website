"use client"

import { notFound } from "next/navigation"
import Link from "next/link"
import { Calendar, ArrowLeft } from "lucide-react"
import CTASection from "@/components/CTASection"
import { useLanguage } from "@/contexts/LanguageContext"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const { t } = useLanguage()
  const post = t.blogPage.posts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      <article className="py-20 pt-32 bg-dark-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center space-x-2 text-white hover:text-white-600 transition-colors mb-6"
            >
              <ArrowLeft size={18} className="text-gold" />
              <span>{t.blog.backToBlog}</span>
            </Link>

            <div className="flex items-center space-x-2 text-white text-sm mb-6">
              <Calendar size={16} className="text-gold" />
              <span className="text-white font-semibold">{post.category}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-serif text-white mb-8">
              {post.title}
            </h1>

            <div className="prose prose-invert max-w-none text-gray-300">
              <p className="text-lg leading-relaxed">{post.excerpt}</p>
              <p className="mt-4 text-gray-400">
                {t.contact.sendMessage} - {t.cta.getConsultation}
              </p>
            </div>
          </div>
        </div>
      </article>

      <CTASection />
    </>
  )
}
