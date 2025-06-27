import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { DollarSign, CheckCircle, Clock } from 'lucide-react';

const ServiceOfferings = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const offeringsData = [
    {
      icon: <DollarSign className="w-10 h-10" />,
      title: "Cost-Effective",
      description: "Our team discusses projects that best fit your budget, ensuring cost-effectiveness and value for money."
    },
    {
      icon: <CheckCircle className="w-10 h-10" />,
      title: "Quality Assurance",
      description: "At every production stage, our engineers verify requirements and drawings to ensure work quality and reliability."
    },
    {
      icon: <Clock className="w-10 h-10" />,
      title: "Prompt Delivery",
      description: "We believe in completing work within decided timeframes and promptly delivering projects to our clients."
    }
  ];

  return (
    <section id="about" className="py-20 bg-[#141414] w-full">
      <div className="w-full max-w-[2400px] mx-auto px-4 md:px-8 lg:px-16">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            We Offer Quality Services
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-white/70 max-w-2xl mx-auto">
            When you plan to outsource engineering services, we deliver excellence irrespective of geographical boundaries and international codes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offeringsData.map((offering, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: index * 0.2, ease: "easeOut" }}
              className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-black/40 transition-all hover:-translate-y-1 group"
            >
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4 mx-auto text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                {offering.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{offering.title}</h3>
              <p className="text-white/70">{offering.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceOfferings;