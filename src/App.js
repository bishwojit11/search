import { useState } from "react";
import "./App.css";
import jasondata from "./MOCK_DATA.json";

function App() {
  const [searcItem, setSearchItem] = useState("");
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search The name"
        className="search"
        onChange={(event) => {
          setSearchItem(event.target.value);
        }}
      />
      {
        jasondata.filter((usr) =>{
          if (searcItem == ""){
            return usr
          }else if (usr.first_name.toLowerCase().includes(searcItem.toLowerCase())){
            return usr
          }
        }).map((usr, key) => {
          return(
            <div key={key}>
              <h4>{usr.first_name}</h4>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
