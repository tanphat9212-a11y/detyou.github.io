import "./CheapPhone.css";

import cheapPhones from "../../assets/data/cheapPhones";

import CheapPhoneCard from "./CheapPhoneCard";
import CheapPhoneHeader from "./CheapPhoneHeader";

export default function CheapPhone() {
  return (
    <section className="cheap-section">

      <div className="container">

        <CheapPhoneHeader />

        <div className="cheap-grid">

          {cheapPhones.map((item) => (
            <CheapPhoneCard
              key={item.id}
              item={item}
            />
          ))}

        </div>

      </div>

    </section>
  );
}
