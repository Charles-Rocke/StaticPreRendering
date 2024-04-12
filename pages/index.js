function HomePage(props) {
  const { products } = props;
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
}

// this function  will be executed first then the react component function
// This prepares the props data
// fetches and exposes data through props to the component function
// can do server side things
// can use credentials that users shouldn't see
export async function getStaticProps() {
  return {
    props: {
      products: [{ id: 1, title: "Milk" }],
    },
  };
}
export default HomePage;
