import { useState } from 'react';
import Item from './item';

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState('name');

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div>
      <div className="mb-4">
        <button 
          className={`mr-2 p-2 ${sortBy === 'name' ? 'bg-violet-500 text-white' : 'bg-violet-200 text-black'}`} 
          onClick={() => setSortBy('name')}
        >
          Sort by Name
        </button>
        <button 
          className={`p-2 ${sortBy === 'category' ? 'bg-violet-500 text-white' : 'bg-violet-200 text-black'}`} 
          onClick={() => setSortBy('category')}
        >
          Sort by Category
        </button>
      </div>

      <ul>
        {sortedItems.map(item => (
          <Item 
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
            onSelect={() => onItemSelect(item)}
          />
        ))}
      </ul>
    </div>
  );
}