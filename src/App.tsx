import { useState } from "react";
import "./App.css";
import Select, { SelectOption } from "./select-component/Select";
const options = [
  { label: "First", value: 1 },
  { label: "Second", value: 2 },
  { label: "Third", value: 3 },
  { label: "Fourth", value: 4 },
  { label: "Fifth", value: 5 },
];

function App() {
  const [value1, setValue1] = useState<SelectOption | undefined>(options[0]);
  const [value2, setValue2] = useState<SelectOption[]>([options[0]]);

  return (
    <>
      {/* <Select
        value={value1}
        onChange={(value) => {
          setValue1(value);
        }}
        options={options}
      /> */}
      <br />
      <Select
        multiple
        value={value2}
        onChange={(value) => {
          setValue2(value);
        }}
        options={options}
      />
    </>
  );
}

export default App;
