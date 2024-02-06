import Banner from '@/components/banner/banner';
import Faq from '@/components/faq/faq';
import ProjectOverview from '@/components/project-overview/project-overview';

export function HomePage() {
  return (
    <div>
      <Banner />
      <ProjectOverview />
      <Faq />
    </div>
  );
}
