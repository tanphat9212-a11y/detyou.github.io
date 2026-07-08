  import "./Student.css";

  import StudentBanner from "./StudentBanner";
  import StudentCard from "./StudentCard";

  import products from "../../assets/data/studentProducts";

  export default function StudentSection() {
    return (
      <section className="student-section">

        <div className="container">

          <StudentBanner />

          <div className="student-grid">

            {products.map(item => (
              <StudentCard
                key={item.id}
                item={item}
              />
            ))}

          </div>

        </div>

      </section>
    );
  }