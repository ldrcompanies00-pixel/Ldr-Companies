import { motion } from 'motion/react';
import { Calendar, ArrowRight } from 'lucide-react';
import { CONTENT } from '../constants';

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-futuristic">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            {CONTENT.blog.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-lg max-w-2xl mx-auto"
          >
            {CONTENT.blog.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CONTENT.blog.items.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 group cursor-pointer hover:bg-white/10 transition-all"
            >
              <div className="flex items-center gap-2 text-brand-primary text-sm mb-4">
                <Calendar size={16} />
                <span>{post.date}</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-white/60 mb-6 leading-relaxed">
                {post.excerpt}
              </p>
              <button className="flex items-center gap-2 text-white font-bold group-hover:gap-4 transition-all">
                Citește Mai Mult <ArrowRight size={18} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
