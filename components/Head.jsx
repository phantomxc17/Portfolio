import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content=""
      />
      <meta
        name="keywords"
        content=""
      />
      <meta property="og:title" content="Jonathan Aditya Portfolio" />
      <meta
        property="og:description"
        content=""
      />
      <meta property="og:image" content="" />
      <meta property="og:url" content="" />
      <meta name="twitter:card" content="" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Jonathan Aditya Sanusi',
};
