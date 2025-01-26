import { useState } from "react";
import AddItemForm from "./components/AddItemForm";
import InventoryTable from "./components/InventoryTable";
import FilterSortControls from "./components/FilterSortControls";
import "./index.css";

function App() {
  const [inventory, setInventory] = useState([
    { id: 1, name: "Laptop", category: "Electronics", quantity: 5 },
    { id: 2, name: "T-Shirt", category: "Clothing", quantity: 20 },
    { id: 3, name: "Smartphone", category: "Electronics", quantity: 8 },
  ]);

  const [filterCategory, setFilterCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("asc");

  const addItem = (item) => {
    setInventory([...inventory, { ...item, id: inventory.length + 1 }]);
  };

  const editItem = (id, updatedItem) => {
    setInventory(
      inventory.map((item) => (item.id === id ? updatedItem : item))
    );
  };

  const deleteItem = (id) => {
    setInventory(inventory.filter((item) => item.id !== id));
  };

  const filteredInventory = inventory.filter(
    (item) => filterCategory === "All" || item.category === filterCategory
  );

  const sortedInventory = filteredInventory.sort((a, b) =>
    sortOrder === "asc" ? a.quantity - b.quantity : b.quantity - a.quantity
  );

  return (
    <div className="app">
      <h1>Inventory Management</h1>
      <AddItemForm addItem={addItem} />
      <FilterSortControls
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />
      <InventoryTable
        inventory={sortedInventory}
        editItem={editItem}
        deleteItem={deleteItem}
      />
    </div>
  );
}

export default App;
