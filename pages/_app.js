import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="bg-circle1"></div>
      <div className="bg-circle2"></div>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
