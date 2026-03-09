import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, ArrowLeft, Facebook, Twitter, Mail, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BlogCard from '@/components/BlogCard';
import blogPosts from '@/data/blogPosts';
import { useToast } from '@/components/ui/use-toast';

function BlogPostPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const post = blogPosts.find(p => p.id === id);
  
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Article Not Found</h2>
          <Button onClick={() => navigate('/blog')} className="bg-orange-600 hover:bg-orange-700 text-white">
            Back to Blog
          </Button>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && (p.category === post.category || p.tags.some(tag => post.tags.includes(tag))))
    .slice(0, 3);

  const handleShare = (platform) => {
    const url = window.location.href;
    const text = `Check out this article: ${post.title}`;
    
    let shareUrl = '';
    
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
        break;
      case 'email':
        shareUrl = `mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(text + '\n\n' + url)}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        toast({ title: 'Link Copied', description: 'Article link copied to clipboard!' });
        return;
      default:
        return;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  return (
    <>
      <Helmet>
        <title>{post.title} - freakytourz Blog</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Progress Bar (simplified) */}
        <motion.div 
          className="fixed top-0 left-0 right-0 h-1 bg-orange-600 origin-left z-50"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[400px]">
          <img 
            src={post.featuredImage} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex flex-col justify-end pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <Link 
              to="/blog" 
              className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors w-fit"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block bg-orange-600 text-white text-sm font-bold px-3 py-1 rounded-full mb-4">
                {post.category}
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-white/90">
                <div className="flex items-center">
                  <img 
                    src={post.author.avatar} 
                    alt={post.author.name} 
                    className="w-10 h-10 rounded-full border-2 border-white/50 mr-3"
                  />
                  <div>
                    <p className="font-semibold text-sm">{post.author.name}</p>
                    <p className="text-xs text-white/70">Author</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <article className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="prose prose-lg prose-orange max-w-none text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            <div className="mt-12 pt-6 border-t border-gray-100">
              <h3 className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wider">Filed Under</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span key={tag} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-orange-50 hover:text-orange-600 transition-colors cursor-pointer">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Author Bio */}
            <div className="mt-12 bg-orange-50 rounded-xl p-8 flex flex-col md:flex-row items-center md:items-start gap-6">
              <img 
                src={post.author.avatar} 
                alt={post.author.name} 
                className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
              />
              <div className="text-center md:text-left">
                <h3 className="text-lg font-bold text-gray-900 mb-2">About {post.author.name}</h3>
                <p className="text-gray-600 mb-4">{post.author.bio}</p>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            {/* Share Buttons */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <Share2 className="w-5 h-5 mr-2 text-orange-600" />
                Share this Article
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" onClick={() => handleShare('facebook')} className="w-full justify-start hover:bg-blue-50 hover:text-blue-600">
                  <Facebook className="w-4 h-4 mr-2" /> Facebook
                </Button>
                <Button variant="outline" onClick={() => handleShare('twitter')} className="w-full justify-start hover:bg-sky-50 hover:text-sky-500">
                  <Twitter className="w-4 h-4 mr-2" /> Twitter
                </Button>
                <Button variant="outline" onClick={() => handleShare('email')} className="w-full justify-start hover:bg-gray-50">
                  <Mail className="w-4 h-4 mr-2" /> Email
                </Button>
                <Button variant="outline" onClick={() => handleShare('copy')} className="w-full justify-start hover:bg-green-50 hover:text-green-600">
                  <Share2 className="w-4 h-4 mr-2" /> Copy Link
                </Button>
              </div>
            </div>

            {/* Newsletter CTA */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-lg p-6 text-white text-center">
              <h3 className="text-xl font-bold mb-2">Join Our Newsletter</h3>
              <p className="text-gray-300 text-sm mb-4">Get the latest travel tips and exclusive offers delivered to your inbox.</p>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 mb-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold">
                Subscribe
              </Button>
            </div>
          </aside>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">You Might Also Like</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost, index) => (
                  <motion.div
                    key={relatedPost.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <BlogCard post={relatedPost} />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default BlogPostPage;