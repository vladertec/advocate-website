"use client";

import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "@/contexts/LanguageContext";

export default function BlogSection() {
  const { t } = useLanguage();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Используем посты из переводов
  const recentPosts = t.blogPage.posts.slice(0, 3);

  return (
    <section ref={ref} className="py-12 sm:py-16 md:py-20 bg-dark-surface">
      <div className="container mx-auto px-4 sm:px-5 md:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white mb-3 sm:mb-4">
            {t.blog.recentPosts}
          </h2>
          <div className="h-0.5 sm:h-1 w-16 sm:w-20 bg-gold mx-auto"></div>
        </div>

        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 ${inView ? "animate-fade-in" : ""}`}>
          {recentPosts.map((post, index) => (
            <Link
              key={post.slug || index}
              href={`/blog/${post.slug}`}
              className="group bg-dark-600 border border-gray-800 rounded-lg p-4 sm:p-5 md:p-6 hover:border-gold transition-all hover:shadow-gold-glow-sm"
            >
              <div className="flex items-center space-x-2 text-gold text-xs sm:text-sm mb-2 sm:mb-3">
                <Calendar size={14} className="sm:w-4 sm:h-4" />
                <span>{post.category}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-serif text-white mb-2 group-hover:text-gold transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-gold text-sm font-semibold">{post.category}</span>
                <ArrowRight size={20} className="text-gold group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-10 md:mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center space-x-2 px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-gold text-gold font-semibold rounded hover:bg-gold/10 transition-colors relative overflow-hidden group text-sm sm:text-base"
          >
            <motion.div
              className="absolute inset-0 bg-gold/10"
              initial={{ scale: 0, borderRadius: "50%" }}
              whileHover={{ scale: 1, borderRadius: "8px" }}
              transition={{ duration: 0.4 }}
            />
            <span className="relative z-10">{t.blog.allPosts}</span>
            <motion.div
              className="relative z-10"
              animate={{ x: [0, 4, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ArrowRight size={20} />
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
}

