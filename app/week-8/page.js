"use client";

import { useState } from 'react';
import Link from "next/link";
import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';
import MealIdeas from './meal-ideas';

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (item) => {
    setItems((prevItems) => [...prevItems, { ...item, id: Math.random().toString(36).substring(7) }]);
  };

  const handleItemSelect = (item) => {
    const cleanedName = item.name.split(",")[0].trim().replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\ud83c[\udf00-\udfff]|\ud83d[\udc00-\ude4f\ude80-\udeff]|[\u2011-\u26FF]|\ud83e[\udd10-\uddff])/g, '');
    setSelectedItemName(cleanedName);
  };

  return (
    <main className="flex flex-col items-center space-y-8 bg-violet-200 min-h-screen">
      <div className="flex w-full justify-between">
        <div className="flex flex-col w-1/2 space-y-4">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <MealIdeas ingredient={selectedItemName} />
      </div>
      <Link href="../" className="underline text-violet-500 hover:text-cyan-400">Back Page</Link>
    </main>
  );
}