import "./App.css";
import Select from "react-select";
import AsyncSelect from "react-select/async";
function App() {
  const options = [
    {
      value: "jack",
      label: "Jack",
    },
    {
      value: "rox",
      label: "Rok",
    },
    {
      value: "lime",
      label: "Lime",
    },
    {
      value: "mike",
      label: "Mike",
    },
    {
      value: "rohan",
      label: "Rohan",
    },
    {
      value: "raf",
      label: "Raf",
    },
    {
      value: "jack",
      label: "Jack",
    },
    {
      value: "rox",
      label: "Rok",
    },
    {
      value: "lime",
      label: "Lime",
    },
    {
      value: "mike",
      label: "Mike",
    },
    {
      value: "rohan",
      label: "Rohan",
    },
    {
      value: "raf",
      label: "Raf",
    },
  ];

  const handleChange = (selectedOptions) => {
    console.log("selectedOptions", selectedOptions);
  };
  const loadOptions = (searchValue, callback) => {
    setTimeout(() => {
      const filteOptions = options.filter((option) =>
        option.label.toLowerCase().includes(searchValue.toLowerCase())
      );
      console.log("loadOptions", searchValue, filteOptions);
      callback(filteOptions);
    }, 3000);
  };
  return (
    <>
      <Select options={options} onChange={handleChange} isMulti />
      <AsyncSelect
        loadOptions={loadOptions}
        defaultOptions
        onChange={handleChange}
        isMulti
      />
    </>
  );
}

export default App;
