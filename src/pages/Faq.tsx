import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Faq = () => {
  const faqItems = [
    {
      question: "What services does Terrene Engineering offer?",
      answer: "Terrene Engineering provides a comprehensive range of services including structural engineering, civil engineering, architectural drafting, project management, and construction supervision. We specialize in both residential and commercial projects."
    },
    {
      question: "How long has Terrene Engineering been in business?",
      answer: "Terrene Engineering has been providing expert engineering solutions for over 20 years, with a proven track record of successful projects across residential, commercial, and industrial sectors."
    },
    {
      question: "Do you handle both residential and commercial projects?",
      answer: "Yes, we have extensive experience in both residential and commercial projects. Our team is equipped to handle projects of all sizes, from single-family homes to large-scale commercial developments."
    },
    {
      question: "What software does your team use?",
      answer: "Our engineering team is proficient in industry-leading software including AutoCAD, Revit, ETABS, and STAAD Pro. This allows us to deliver precise designs and analysis for all our projects."
    },
    {
      question: "How do I request a quote for my project?",
      answer: "You can request a quote by filling out our inquiry form online, calling our office directly, or sending us an email with your project details. We aim to respond to all quote requests within 24-48 hours."
    },
    {
      question: "What is your typical project timeline?",
      answer: "Project timelines vary depending on scope and complexity. Small residential projects may take 2-4 weeks, while larger commercial projects can take several months. We'll provide you with a detailed timeline during our initial consultation."
    }
  ];

  return (
    <section className="py-20 bg-[#141414]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h1>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-800 rounded-lg bg-[#1a1a1a] overflow-hidden">
                <AccordionTrigger className="px-6 py-4 text-white hover:text-primary hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-12 text-center">
            <p className="text-gray-300 mb-6">
              Still have questions? Contact our team for more information.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
