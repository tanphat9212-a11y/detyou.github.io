import tabs from "../../assets/data/suggestTabs";
import FilterTag from "./FilterTag";

export default function SuggestTabs() {
  return (
    <div className="suggest-tabs">

      {tabs.map((item) => (
        <FilterTag
          key={item}
          text={item}
        />
      ))}

    </div>
  );
}
