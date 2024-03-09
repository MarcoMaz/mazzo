import Hi from "./components/templates/Hi/Hi";
import SelectedWorks from "./components/templates/SelectedWorks/SelectedWorks";

export default function Home() {

  return (
    <div className="container">
      <Hi />
      <main>
        <SelectedWorks />
      </main>
    </div>
  );
}
