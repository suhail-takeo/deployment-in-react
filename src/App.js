import "./App.css";
import { Button, DatePicker } from "antd";

function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>New Website v2 with major changes</h1>
      <img
        src="https://www.takeo.ai/wp-content/uploads/2020/06/takeologofulldark-1.png.webp"
        alt="Logo"
        style={{
          width: "40%",
        }}
      />

      <input type="date" name="date" />

      <DatePicker
        onChange={(date) => {
          console.log(date);
        }}
      />
    </div>
  );
}

export default App;
