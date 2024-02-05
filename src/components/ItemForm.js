import React from "react";

function ItemForm({ newItem, handleNewItem, handleSubmit }) {


  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleNewItem} value={newItem.name} />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleNewItem} value={newItem.category}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
