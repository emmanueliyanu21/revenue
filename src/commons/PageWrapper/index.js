import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const withPageWrapper = (WrappedComponent) => {
  const PageWrapper = (props) => {
    const { title, description, keywords, ...rest } = props;

    useEffect(() => {
      return () => {};
    }, []);

    return (
      <>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
        </Helmet>
        <WrappedComponent {...rest} />
      </>
    );
  };

  return PageWrapper;
};

export default withPageWrapper;
