import Projects from "@/components/Projects";
import FixedWidthContainer from "@/components/UI/FixedWidthContainer";
import Layout from "@/layout/Layout";

const ProjectsPage = () => {
  return (
    <Layout>
      <FixedWidthContainer>
        <Projects />
      </FixedWidthContainer>
    </Layout>
  );
};

export default ProjectsPage;
