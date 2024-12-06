// pages/index.tsx

import React from "react";
import Banner from "../components/Banner";
import Layout from "@/layout/Layout";

const Home: React.FC = () => {
  return (
    <Layout>
      <Banner />
    </Layout>
  );
};

export default Home;
