import { createRoot } from "react-dom";
import Pet from "./Pet";

const App = () => {
  <div>
    <h1>Adopt Me!</h1>
    <Pet name="T-Wex" animal="🐶" breed="Aspin" />
    <Pet name="Mona" animal="🐶" breed="Aspin" />
    <Pet name="Benjot" animal="🐶" breed="Belgian/Husky" />
  </div>;
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
