import Banner from '@/components/banner/banner';
import FrequentlyAskedQuestions from '@/components/faq/faq';
import ProjectOverview from '@/components/project-overview/project-overview';

export function HomePage() {
  return (
    <div>
      <Banner />
      <ProjectOverview />
      <FrequentlyAskedQuestions />
    </div>
  );
}
