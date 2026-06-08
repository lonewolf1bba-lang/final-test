import { Link } from "react-router";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import Watermark from "@/components/Watermark";
import { Calendar, User, ArrowRight, Tag, Search, BookOpen } from "lucide-react";

const categories = ["All", "AI Technology", "Automation", "Business", "Security", "Cloud Computing"];

const blogPosts = [
  {
    id: "1",
    slug: "future-ai-creative-workflows",
    title: "The Future of AI-Powered Creative Workflows",
    excerpt: "Discover how artificial intelligence is transforming the creative industry and what it means for designers, writers, and artists building the next generation of digital experiences.",
    coverImage: "/images/blog-cover-1.jpg?v=2",
    category: "AI Technology",
    author: "Smart AI Team",
    date: "June 17, 2025",
  },
  {
    id: "2",
    slug: "maximizing-roi-ai-integration",
    title: "Maximizing ROI with AI Integration",
    excerpt: "A comprehensive guide to measuring and maximizing return on investment when implementing AI solutions in your business operations.",
    coverImage: "/images/blog-cover-2.jpg?v=2",
    category: "Business",
    author: "Smart AI Team",
    date: "June 17, 2025",
  },
  {
    id: "3",
    slug: "digital-transformation-trends-2025",
    title: "Digital Transformation Trends in 2025",
    excerpt: "Explore the key digital transformation trends that will shape businesses in 2025 and beyond, from cloud computing to AI-driven automation.",
    coverImage: "/images/blog-cover-3.jpg?v=2",
    category: "Automation",
    author: "Smart AI Team",
    date: "June 17, 2025",
  },
];

const featuredPost = blogPosts[0];

export default function Blog() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <Watermark />
      <Navbar />
      <PageHero
        title="Our Blog"
        subtitle="Explore the latest trends, tutorials, and insights from the world of AI, digital transformation, and creative technology."
        breadcrumb="Insights"
      />

      {/* Featured Post */}
      <section className="pt-12 pb-8">
        <div className="container-main">
          <ScrollReveal>
            <motion.div whileHover={{ scale: 1.005 }} transition={{ type: "spring" }}>
              <Link to={`/blog/${featuredPost.slug}`} className="group block">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-electric-blue-50 rounded-3xl overflow-hidden border border-electric-blue-100/50 hover:border-orange-300 hover:shadow-premium transition-all">
                  <div className="aspect-[16/10] lg:aspect-auto overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                      src={featuredPost.coverImage}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 lg:p-10 flex flex-col justify-center">
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-electric-blue-brand bg-electric-blue-50 px-3 py-1 rounded-full mb-4 w-fit border border-electric-blue-100">
                      <Tag className="w-3 h-3" />
                      {featuredPost.category}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-dark mb-4 group-hover:text-neon-blue-brand transition-colors leading-tight">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-500 mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {featuredPost.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {featuredPost.date}
                        </span>
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.1, x: 3 }}
                        className="w-10 h-10 rounded-full bg-white border border-electric-blue-200 flex items-center justify-center text-neon-blue-brand group-hover:bg-neon-blue-brand group-hover:text-white group-hover:border-neon-blue-brand transition-all"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* Category Filter + Search */}
      <section className="py-6">
        <div className="container-main">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-8 border-b border-gray-100">
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <motion.button
                  key={cat}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    cat === "All"
                      ? "bg-gradient-to-r from-neon-blue-brand to-electric-blue-brand text-white shadow-glow"
                      : "bg-electric-blue-50 text-gray-600 hover:bg-electric-blue-50 hover:text-electric-blue-brand border border-electric-blue-100"
                  }`}
                >
                  {cat}
                </motion.button>
              ))}
            </div>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-electric-blue-50 border border-electric-blue-100 text-dark placeholder-gray-400 focus:border-electric-blue-brand focus:outline-none text-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-8 pb-16">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <ScrollReveal key={post.id} delay={i * 0.08}>
                <motion.div whileHover={{ y: -8, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="group block bg-electric-blue-50 rounded-3xl overflow-hidden border border-electric-blue-100/50 hover:border-orange-300 hover:shadow-premium transition-all duration-500 h-full"
                  >
                    <div className="aspect-[16/10] overflow-hidden">
                      <motion.img
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.6 }}
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      {post.category && (
                        <span className="inline-flex items-center gap-1 text-xs font-medium text-electric-blue-brand bg-electric-blue-50 px-3 py-1 rounded-full mb-3 border border-electric-blue-100">
                          <Tag className="w-3 h-3" />
                          {post.category}
                        </span>
                      )}
                      <h3 className="text-lg font-bold text-dark mb-2 group-hover:text-neon-blue-brand transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      {post.excerpt && (
                        <p className="text-gray-500 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                      )}
                      <div className="flex items-center gap-4 text-xs text-gray-400">
                        <span className="flex items-center gap-1">
                          <User className="w-3.5 h-3.5" />
                          {post.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {post.date}
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
