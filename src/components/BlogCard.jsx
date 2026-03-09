import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

function BlogCard({ post }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl h-full flex flex-col border border-orange-100"
    >
      {/* Image Container */}
      <Link to={`/blog/${post.id}`} className="relative h-48 overflow-hidden block group">
        <img
          src={post.featuredImage}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wide">
            {post.category}
          </span>
        </div>
      </Link>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Meta Info */}
        <div className="flex items-center text-gray-500 text-xs mb-3 space-x-4">
          <div className="flex items-center">
            <Calendar className="w-3 h-3 mr-1" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center">
            <User className="w-3 h-3 mr-1" />
            <span>{post.author.name}</span>
          </div>
        </div>

        {/* Title & Excerpt */}
        <Link to={`/blog/${post.id}`} className="block mb-3">
          <h3 className="text-xl font-bold text-gray-900 hover:text-orange-600 transition-colors line-clamp-2">
            {post.title}
          </h3>
        </Link>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
          {post.excerpt}
        </p>

        {/* Footer */}
        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
          <div className="flex items-center text-gray-500 text-xs">
            <span className="bg-orange-50 text-orange-700 px-2 py-1 rounded">
              {post.readTime}
            </span>
          </div>
          <Link
            to={`/blog/${post.id}`}
            className="flex items-center text-orange-600 text-sm font-semibold hover:text-orange-700 transition-colors group"
          >
            Read More
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default BlogCard;