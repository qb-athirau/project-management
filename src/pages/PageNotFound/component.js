import React from 'react';
import { Link } from 'react-router-dom';

import { PageNotFoundLayout, Image, Error } from './style';

const PageNotFound = () => {
  return (
    <PageNotFoundLayout>
      <Image src={`${process.env.PUBLIC_URL}/images/common/page_not_found.png`} />
      <Error>We couldn&apos;t find the page.</Error>
      <Link to="/" className="linkHome">
        Back to Home
      </Link>
    </PageNotFoundLayout>
  );
};

export default PageNotFound;
