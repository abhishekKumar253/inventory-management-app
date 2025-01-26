import React, { useState } from "react";

function InventoryTable({ inventory, editItem, deleteItem }) {
  const [editingId, setEditingId] = useState(null); // Track which item is being edited
  const [editedItem, setEditedItem] = useState({}); // Store the edited item data

  // Handle the "Edit" button click
  const handleEdit = (item) => {
    setEditingId(item.id); // Set the ID of the item being edited
    setEditedItem(item); // Populate the form with the item's current data
  };

  // Handle the "Save" button click
  const handleSave = () => {
    editItem(editingId, editedItem); // Pass the updated item data to the parent component
    setEditingId(null); // Exit edit mode
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
            {/* Name Column */}
            <td>
              {editingId === item.id ? ( // If the item is being edited, show an input field
                <input
                  type="text"
                  value={editedItem.name}
                  onChange={(e) =>
                    setEditedItem({ ...editedItem, name: e.target.value })
                  }
                />
              ) : (
                item.name // Otherwise, display the item's name
              )}
            </td>

            {/* Category Column */}
            <td>
              {editingId === item.id ? ( // If the item is being edited, show an input field
                <input
                  type="text"
                  value={editedItem.category}
                  onChange={(e) =>
                    setEditedItem({ ...editedItem, category: e.target.value })
                  }
                />
              ) : (
                item.category // Otherwise, display the item's category
              )}
            </td>

            {/* Quantity Column */}
            <td>
              {editingId === item.id ? ( // If the item is being edited, show an input field
                <input
                  type="number"
                  value={editedItem.quantity}
                  onChange={(e) =>
                    setEditedItem({ ...editedItem, quantity: e.target.value })
                  }
                />
              ) : (
                item.quantity // Otherwise, display the item's quantity
              )}
            </td>

            {/* Actions Column */}
            <td>
              {editingId === item.id ? ( // If the item is being edited, show the "Save" button
                <button onClick={handleSave}>Save</button>
              ) : (
                // Otherwise, show the "Edit" and "Delete" buttons
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
