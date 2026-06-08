import { useParams, Link } from "react-router";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Watermark from "@/components/Watermark";
import {
  ArrowLeft, Calendar, Tag, Clock, User,
  Share2, Bookmark,
  BookOpen, Twitter, Linkedin, Facebook, ChevronRight,
} from "lucide-react";
import { SITE_URL } from "@/config";

const allPosts = [
  {
    slug: "future-ai-creative-workflows",
    title: "The Future of AI-Powered Creative Workflows",
    excerpt: "Discover how artificial intelligence is transforming the creative industry and what it means for designers, writers, and artists building the next generation of digital experiences.",
    coverImage: "/images/blog-cover-1.jpg?v=2",
    category: "AI Technology",
    author: "Smart AI Team",
    date: "June 17, 2025",
    content: `Artificial intelligence is rapidly transforming the creative industry, enabling designers, writers, and artists to push the boundaries of what's possible. From AI-powered design tools to intelligent content generation, the future of creative workflows is being reshaped before our eyes.

**AI in Design**
Modern design tools now incorporate AI to suggest layouts, color palettes, and typography combinations. These intelligent assistants learn from millions of design examples to provide contextual recommendations that enhance creativity rather than replace it.

**Content Creation**
AI writing assistants are becoming indispensable for content creators. They help with research, grammar, style consistency, and even generate creative ideas. The key is using AI as a collaborative tool that amplifies human creativity.

**Video and Media Production**
AI is revolutionizing video editing with automated scene detection, smart cropping, and real-time effects. Content creators can now produce professional-quality videos in a fraction of the time.

**The Human-AI Partnership**
The most successful creative professionals are those who embrace AI as a partner. By automating repetitive tasks, AI frees up time for the strategic and imaginative work that truly requires human insight.

**Looking Ahead**
As AI technology continues to evolve, we can expect even more sophisticated tools that seamlessly integrate into creative workflows. The future belongs to those who can effectively combine human creativity with artificial intelligence.`,
  },
  {
    slug: "maximizing-roi-ai-integration",
    title: "Maximizing ROI with AI Integration",
    excerpt: "A comprehensive guide to measuring and maximizing return on investment when implementing AI solutions in your business operations.",
    coverImage: "/images/blog-cover-2.jpg?v=2",
    category: "Business",
    author: "Smart AI Team",
    date: "June 17, 2025",
    content: `Implementing AI solutions represents a significant investment for any organization. To ensure you're getting the most out of your AI initiatives, it's crucial to have a clear framework for measuring and maximizing ROI.

**Setting Clear Objectives**
Before implementing any AI solution, define what success looks like. Whether it's reducing operational costs, improving customer satisfaction, or increasing revenue, having clear KPIs is essential for measuring ROI.

**Start with Pilot Projects**
Rather than undertaking massive AI transformations, start with smaller pilot projects. This approach allows you to test the technology, measure results, and refine your strategy before scaling up.

**Measure Both Tangible and Intangible Benefits**
While cost savings and revenue increases are easy to quantify, don't overlook intangible benefits like improved employee satisfaction, better decision-making, and enhanced customer experiences.

**Continuous Optimization**
AI systems improve over time as they learn from more data. Regular monitoring and optimization are essential to ensure your AI solutions continue to deliver value.

**Common Pitfalls to Avoid**
Avoid the trap of implementing AI for its own sake. Every AI initiative should be tied to clear business outcomes. Also, ensure you have the right data infrastructure and talent to support your AI goals.`,
  },
  {
    slug: "digital-transformation-trends-2025",
    title: "Digital Transformation Trends in 2025: What Businesses Should Expect",
    excerpt: "Explore the key digital transformation trends that will shape businesses in 2025 and beyond, from cloud computing to AI-driven automation.",
    coverImage: "/images/blog-cover-3.jpg?v=2",
    category: "Automation",
    author: "Smart AI Team",
    date: "June 17, 2025",
    content: `Digital transformation is no longer a buzzword—it's a business imperative. As we move into 2025, organizations that fail to adapt risk being left behind by more agile competitors.

**AI-Powered Automation**
Artificial intelligence continues to be the driving force behind digital transformation. From chatbots to predictive analytics, AI is helping businesses automate processes and make data-driven decisions.

**Cloud-First Strategies**
The shift to cloud computing is accelerating. Organizations are moving away from on-premises infrastructure to embrace the scalability and flexibility of cloud solutions.

**Cybersecurity Integration**
As digital threats evolve, cybersecurity is becoming an integral part of digital transformation strategies rather than an afterthought.

**Customer Experience Focus**
Digital transformation is increasingly centered around improving customer experience through personalized interactions and seamless omnichannel engagement.

**Data-Driven Decision Making**
Organizations are leveraging big data and analytics to make more informed decisions. Real-time data processing and visualization tools are becoming essential for competitive advantage.`,
  },
];

const relatedPosts = [
  {
    slug: "maximizing-roi-ai-integration",
    title: "Maximizing ROI with AI Integration",
    excerpt: "A comprehensive guide to measuring and maximizing return on investment when implementing AI solutions.",
    coverImage: "/images/blog-cover-2.jpg?v=2",
    category: "Business",
    author: "Smart AI Team",
    date: "June 17, 2025",
  },
  {
    slug: "digital-transformation-trends-2025",
    title: "Digital Transformation Trends in 2025",
    excerpt: "Explore the key digital transformation trends that will shape businesses in 2025 and beyond.",
    coverImage: "/images/blog-cover-3.jpg?v=2",
    category: "Automation",
    author: "Smart AI Team",
    date: "June 17, 2025",
  },
  {
    slug: "future-ai-creative-workflows",
    title: "The Future of AI-Powered Creative Workflows",
    excerpt: "Discover how artificial intelligence is transforming the creative industry.",
    coverImage: "/images/blog-cover-1.jpg?v=2",
    category: "AI Technology",
    author: "Smart AI Team",
    date: "June 17, 2025",
  },
];

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = allPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
          <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h1 className="text-2xl font-semibold text-dark mb-2">Post Not Found</h1>
          <p className="text-gray-500 mb-6">The article you are looking for does not exist.</p>
          <Link to="/blog" className="gradient-btn px-6 py-3 rounded-xl text-sm inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </motion.div>
      </div>
    );
  }

  const postUrl = `${SITE_URL}/blog/${post.slug}`;
  const postTitle = encodeURIComponent(post.title);
  const postUrlEncoded = encodeURIComponent(postUrl);

  const shareLinks = {
    Twitter: `https://twitter.com/intent/tweet?url=${postUrlEncoded}&text=${postTitle}`,
    LinkedIn: `https://www.linkedin.com/sharing/share-offsite/?url=${postUrlEncoded}`,
    Facebook: `https://www.facebook.com/sharer/sharer.php?u=${postUrlEncoded}`,
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(postUrl);
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <Watermark />
      <Navbar />

      {/* Hero Header */}
      <div className="pt-28 pb-0 relative">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm text-gray-400 mb-6"
          >
            <Link to="/" className="hover:text-neon-blue-brand transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/blog" className="hover:text-neon-blue-brand transition-colors">Blog</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-600 truncate max-w-[200px]">{post.title}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {post.category && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-1 text-sm text-electric-blue-brand bg-electric-blue-50 px-4 py-1.5 rounded-full mb-4 border border-electric-blue-100 font-medium"
              >
                <Tag className="w-3.5 h-3.5" />
                {post.category}
              </motion.span>
            )}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-6 leading-tight max-w-4xl">
              {post.title}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-8"
          >
            <span className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-neon-blue-brand to-electric-blue-brand flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <span className="font-medium text-dark">{post.author}</span>
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4 text-electric-blue-brand" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-electric-blue-brand" />
              5 min read
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="container-main"
        >
          <div className="rounded-3xl overflow-hidden shadow-premium-lg">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="py-12 sm:py-16">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-8">
              <ScrollReveal>
                {post.excerpt && (
                  <p className="text-xl text-gray-600 leading-relaxed font-medium mb-8 pb-8 border-b border-gray-100">
                    {post.excerpt}
                  </p>
                )}
                <div className="prose prose-lg max-w-none text-dark leading-relaxed whitespace-pre-wrap mb-10">
                  {post.content}
                </div>
                <div className="flex flex-wrap items-center gap-2 mb-10 pb-10 border-b border-gray-100">
                  <span className="text-sm text-gray-400 mr-2">Tags:</span>
                  {[post.category, "Technology", "AI"].filter(Boolean).map((tag) => (
                    <Link
                      key={tag}
                      to="/blog"
                      className="px-3 py-1 rounded-full bg-electric-blue-50 text-electric-blue-brand text-sm font-medium hover:bg-electric-blue-50 transition-colors border border-electric-blue-100"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
                <div className="flex items-center justify-between mb-10">
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-500 mr-2">Share:</span>
                    {[
                      { icon: Twitter, label: "Twitter", href: shareLinks.Twitter },
                      { icon: Linkedin, label: "LinkedIn", href: shareLinks.LinkedIn },
                      { icon: Facebook, label: "Facebook", href: shareLinks.Facebook },
                    ].map(({ icon: Icon, label, href }) => (
                      <motion.a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-9 h-9 rounded-lg bg-electric-blue-50 flex items-center justify-center text-gray-400 hover:text-electric-blue-brand hover:bg-electric-blue-50 transition-all border border-electric-blue-100"
                        title={`Share on ${label}`}
                      >
                        <Icon className="w-4 h-4" />
                      </motion.a>
                    ))}
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleCopyLink}
                      className="w-9 h-9 rounded-lg bg-electric-blue-50 flex items-center justify-center text-gray-400 hover:text-electric-blue-brand hover:bg-electric-blue-50 transition-all border border-electric-blue-100"
                      title="Copy link"
                    >
                      <Share2 className="w-4 h-4" />
                    </motion.button>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-electric-blue-50 text-gray-500 hover:text-electric-blue-brand hover:bg-electric-blue-50 transition-all text-sm border border-electric-blue-100"
                  >
                    <Bookmark className="w-4 h-4" />
                    Save
                  </motion.button>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-electric-blue-50 rounded-2xl p-6 border border-electric-blue-100/50"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-neon-blue-brand to-electric-blue-brand flex items-center justify-center shadow-glow flex-shrink-0">
                      <User className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-dark mb-1">{post.author}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        Expert content writer at Smart AI, covering AI technology,
                        digital transformation, and enterprise innovation.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-4">
              <div className="sticky top-24 space-y-6">
                <ScrollReveal>
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    className="bg-gradient-to-br from-neon-blue-brand to-electric-blue-600 rounded-2xl p-6 text-white relative overflow-hidden"
                  >
                    <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.4%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z%22/%3E%3C/g%3E%3C/svg%3E')]" />
                    <div className="relative">
                      <h4 className="font-bold text-lg mb-2">Subscribe to Our Newsletter</h4>
                      <p className="text-white/70 text-sm mb-4">Get the latest AI insights delivered to your inbox.</p>
                      <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
                        <input
                          type="email"
                          placeholder="your@email.com"
                          className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40 text-sm"
                        />
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          type="submit"
                          className="w-full py-2.5 rounded-xl bg-white text-neon-blue-brand font-semibold text-sm hover:shadow-lg transition-all"
                        >
                          Subscribe
                        </motion.button>
                      </form>
                    </div>
                  </motion.div>
                </ScrollReveal>
                <ScrollReveal delay={0.1}>
                  <div className="bg-electric-blue-50 rounded-2xl p-6 border border-electric-blue-100/50">
                    <h4 className="font-bold text-dark mb-4">Categories</h4>
                    <div className="space-y-2">
                      {["AI Technology", "Automation", "Business", "Security", "Cloud Computing"].map((cat) => (
                        <Link
                          key={cat}
                          to="/blog"
                          className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-white transition-colors group"
                        >
                          <span className="text-gray-600 text-sm group-hover:text-neon-blue-brand transition-colors">{cat}</span>
                          <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-electric-blue-brand transition-colors" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={0.2}>
                  <div className="bg-electric-blue-50 rounded-2xl p-6 border border-electric-blue-100/50">
                    <h4 className="font-bold text-dark mb-4">Recent Posts</h4>
                    <div className="space-y-4">
                      {relatedPosts.slice(0, 3).map((rp) => (
                        <Link key={rp.slug} to={`/blog/${rp.slug}`} className="flex gap-3 group">
                          <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                            <img src={rp.coverImage} alt={rp.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                          </div>
                          <div>
                            <h5 className="text-sm font-medium text-dark group-hover:text-neon-blue-brand transition-colors line-clamp-2">{rp.title}</h5>
                            <span className="text-xs text-gray-400">{rp.date}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Posts */}
      <section className="py-16 bg-electric-blue-50 border-t border-electric-blue-100/50">
        <div className="container-main">
          <ScrollReveal>
            <h3 className="text-2xl font-bold text-dark mb-8">
              Related <span className="text-gradient-red-orange">Articles</span>
            </h3>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((rp, i) => (
              <ScrollReveal key={rp.slug} delay={i * 0.1}>
                <motion.div whileHover={{ y: -6, scale: 1.01 }} transition={{ type: "spring" }}>
                  <Link to={`/blog/${rp.slug}`} className="group block bg-white rounded-2xl overflow-hidden border border-electric-blue-100/50 hover:border-orange-300 hover:shadow-premium transition-all">
                    <div className="aspect-[16/9] overflow-hidden">
                      <img src={rp.coverImage} alt={rp.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-5">
                      <span className="text-xs text-electric-blue-brand font-medium">{rp.category}</span>
                      <h4 className="font-bold text-dark mt-1 group-hover:text-neon-blue-brand transition-colors line-clamp-2">{rp.title}</h4>
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
