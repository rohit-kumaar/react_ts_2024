import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [value, setValue] = useState<string>("");
  return (
    <>
      <Header
        title="Header"
        func={(a) => {
          alert(a);
        }}
      >
        <button>This is children</button>
      </Header>

      <Main label="User Name" value={value} setValue={setValue} />

      <Form />
    </>
  );
}

export default App;
