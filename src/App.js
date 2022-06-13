import ButtonTerm from "./components/buttons/ButtonTerm";
import CheckBox from "./components/buttons/CheckBox";
import InputNumDoc from "./components/inputs/InputNumDoc";
import InputTypeDoc from "./components/inputs/InputTypeDoc";

function App() {
  return (
    <div className="container mt-5">
      <InputTypeDoc />
      <InputNumDoc />
      <ButtonTerm />
      <CheckBox />
    </div>
  );
}

export default App;
