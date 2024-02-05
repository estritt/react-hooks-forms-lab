import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const [search, setSearch] = useState("");

  function onSearchChange(event) { 
    setSearch(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All" && search === "") return true
    else if (selectedCategory === "All") return item.name.includes(search)
    else if (search === "") return item.category === selectedCategory
    else return (item.category === selectedCategory && item.name.includes(search));
  });

  const [newItem, setNewItem] = useState({id: uuid(), name: "", category: "Produce"})

  function handleNewItem(e) {
    setNewItem({
      ...newItem,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    console.log(newItem)
    e.preventDefault();
    setItems([
      ...items,
      newItem
    ]);
    setNewItem({id: uuid(), name: "", category: "Produce"});
  }

  return (
    <div className="ShoppingList">
      <ItemForm newItem={newItem} handleNewItem={handleNewItem} handleSubmit={handleSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={onSearchChange} search={search} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
