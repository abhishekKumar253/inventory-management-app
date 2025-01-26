import React, { useState } from "react";

function InventoryTable({ inventory, editItem, deleteItem }) {
  const [editingId, setEditingId] = useState(null); 
  const [editedItem, setEditedItem] = useState({});

  
  const handleEdit = (item) => {
    setEditingId(item.id); 
    setEditedItem(item); 
  };

  const handleSave = () => {
    editItem(editingId, editedItem);
    setEditingId(null); 
  };

  return (
    <table className="inventory-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Quantity</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {inventory.map((item) => (
          <tr key={item.id} className={item.quantity < 10 ? "low-stock" : ""}>
            <td>
              {editingId === item.id ? ( 
                <input
                  type="text"
                  value={editedItem.name}
                  onChange={(e) =>
                    setEditedItem({ ...editedItem, name: e.target.value })
                  }
                />
              ) : (
                item.name 
              )}
            </td>

            <td>
              {editingId === item.id ? (
                <input
                  type="text"
                  value={editedItem.category}
                  onChange={(e) =>
                    setEditedItem({ ...editedItem, category: e.target.value })
                  }
                />
              ) : (
                item.category
              )}
            </td>

            <td>
              {editingId === item.id ? ( 
                <input
                  type="number"
                  value={editedItem.quantity}
                  onChange={(e) =>
                    setEditedItem({ ...editedItem, quantity: e.target.value })
                  }
                />
              ) : (
                item.quantity 
              )}
            </td>

            <td>
              {editingId === item.id ? (
                <button onClick={handleSave}>Save</button>
              ) : (
                <>
                  <button onClick={() => handleEdit(item)}>Edit</button>
                  <button onClick={() => deleteItem(item.id)}>Delete</button>
                </>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default InventoryTable;
