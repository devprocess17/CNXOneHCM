'use client';

export default function TagsSection() {
  const tags = [
    '#GestionRH',
    '#CapitalHumain',
    '#GestionPaie',
    '#TransformationDigitale',
    '#ExcellenceOpérationnelle',
    '#SystèmeIntégréRessourcesHumaines',
    '#PerformanceRH',
    '#ConformitéLégale',
    '#EngagementCollaborateurs',
    '#AnalyticsRH'
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl lg:text-2xl font-bold text-gray-900">
            Se lancer
          </h2>
          <p className="text-gray-600 mt-2">
            Nous sommes là pour vous accompagner à chaque étape.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm hover:shadow transition-shadow border border-gray-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}