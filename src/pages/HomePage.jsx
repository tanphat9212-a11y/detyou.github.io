import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Category from "../components/Category/Category";

export default function HomePage() {
  return (
    <>
      <Header />
      <Banner />
      <Category />

      <main className="container"></main>
    </>
  );
}