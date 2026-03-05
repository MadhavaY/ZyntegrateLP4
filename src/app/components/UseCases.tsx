import { ImageWithFallback } from './figma/ImageWithFallback';
import { Check } from 'lucide-react';
import { motion } from 'motion/react';

const useCases = [
  {
    title: 'Legacy System Integration',
    description:
      'Connect outdated databases and systems with modern cloud applications without extensive rewrites.',
    benefits: [
      'Bridge legacy and modern systems',
      'Preserve existing investments',
      'No complex migrations required',
    ],
  },
  {
    title: 'Multi-Cloud Orchestration',
    description:
      'Seamlessly integrate services across AWS, Azure, Google Cloud, and other cloud providers.',
    benefits: [
      'Cross-platform data flow',
      'Unified management console',
      'Vendor-agnostic approach',
    ],
  },
  {
    title: 'Third-Party API Integration',
    description:
      'Connect with any REST, SOAP, or GraphQL API to extend your business capabilities.',
    benefits: [
      'Pre-built connectors for popular APIs',
      'Custom connector development',
      'API versioning support',
    ],
  },
];

function UseCaseCard({
  useCase,
  index,
}: {
  useCase: (typeof useCases)[0];
  index: number;
}) {
  return (
    <article
      className="sticky w-full max-w-5xl mx-auto"
      style={{
        top: 120 + index * 32, // stack offset
        zIndex: index + 10,    // 👈 FIXED (higher index = on top)
      }}
    >
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center bg-white rounded-3xl shadow-2xl border border-blue-100/60 overflow-hidden">
        {/* Content */}
        <div className={`p-8 lg:p-12 space-y-6 ${index % 2 ? 'lg:order-2' : ''}`}>
          <h3 className="text-3xl lg:text-4xl font-bold text-blue-900">
            {useCase.title}
          </h3>

          <p className="text-lg text-blue-800 leading-relaxed">
            {useCase.description}
          </p>

          <ul className="space-y-4">
            {useCase.benefits.map((benefit, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="size-6 rounded-full bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center">
                  <Check className="size-4 text-white" strokeWidth={3} />
                </div>
                <span className="text-blue-800 text-lg">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Image */}
        <div
          className={`relative min-h-[280px] lg:min-h-[360px] ${
            index % 2 ? 'lg:order-1' : ''
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-200/20 to-blue-300/20 blur-2xl rotate-3" />
          <div className="relative h-full overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1759752393975-7ca7b302fcc6?w=1080&q=80"
              alt={useCase.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </article>
  );
}

export function UseCases() {
  return (
    <section
      id="use-cases"
      className="relative bg-gradient-to-b from-white via-blue-50 to-white"
    >
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 size-[600px] bg-gradient-to-r from-blue-200/20 to-blue-300/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 pt-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-24 px-4"
        >
          <h2 className="text-5xl font-bold text-blue-900 mb-6">
            Built for Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">
              Use Case
            </span>
          </h2>
          <p className="text-xl text-blue-800">
            Whether you're bridging legacy databases, integrating cloud apps,
            or connecting third-party APIs
          </p>
        </motion.div>

        {/* Shared Scroll Container (CRITICAL) */}
        <div
          className="relative"
          style={{
            height: `${useCases.length * 70}vh`,
          }}
        >
          <div className="space-y-24">
            {useCases.map((useCase, index) => (
              <UseCaseCard
                key={index}
                useCase={useCase}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}