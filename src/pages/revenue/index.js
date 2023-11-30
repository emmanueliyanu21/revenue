import React from "react";
import Revenue from "./Revenue";
import withPageWrapper from "../../commons/PageWrapper";

function Index() {
  const RevenuePage = withPageWrapper(Revenue);

  const headProps = {
    title: "Revenue",
    description: "Revenue generated",
    keywords: "Finance",
  };
  return <RevenuePage {...headProps} />;
}

export default Index;
