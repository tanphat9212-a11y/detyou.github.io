import "./SuggestSection.css";

import SuggestTabs from "./SuggestTabs";
import SuggestBanner from "./SuggestBanner";
import ProductGrid from "../Product/ProductGrid";

export default function SuggestSection() {
  return (
    <section className="suggest-section">

      <div className="container">

        <SuggestBanner />

        <div className="suggest-header">

          <h2>Gợi ý cho bạn</h2>

          <SuggestTabs />

        </div>

      </div>

      <ProductGrid />

    </section>
  );
}