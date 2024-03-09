import Navigation from "./components/organisms/Navigation/Navigation";
import Hi from "./components/templates/Hi/Hi";
import SelectedWorks from "./components/templates/SelectedWorks/SelectedWorks";
import WriteMe from "./components/templates/WriteMe/WriteMe";

import content from "../public/assets/content/content.json";

export default function Home() {
  const navigationData = content.navigation;

  return (
    <div className="container">
      <Navigation navigationData={navigationData} />
      <Hi />
      <main>
        <SelectedWorks />
      </main>
      <WriteMe />
    </div>
  );
}
