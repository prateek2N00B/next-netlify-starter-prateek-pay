import '@styles/globals.css'

export const getStaticProps = async ({ res }) => {
  // Set custom response headers
  res.setHeader('X-Custom-Header', 'Hello World');

  // Return props if needed
  return {
    props: {},
  };
};

const Application = () => {
  return <div>Example Page</div>;
};

export default Application;
