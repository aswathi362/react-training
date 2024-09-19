import { useContext, useState } from "react";
import "./App.css";
import { ItemContext } from "./contexts/ItemContext";
import AddItemFormComponent from "./components/AddItemFormComponent";
import ListItemComponent from "./components/ListItemComponent";

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Item Manager</h1>

      <AddItemFormComponent/>
      <ListItemComponent />
    </div>
  );
}

export default App;
