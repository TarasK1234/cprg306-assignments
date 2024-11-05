export default function Item({ name, quantity, category, onSelect }) {
  const categoryColors = {
    dairy: 'bg-yellow-300',
    produce: 'bg-green-400',
    bakery: 'bg-yellow-500',
    meat: 'bg-red-500', 'canned goods': 'bg-red-300', 'dry goods': 'bg-red-400',
    household: 'bg-violet-400',
  };
  const categoryClass = categoryColors[category] || 'bg-white';

  return (
    <li className={`p-1 mb-2 ml-2 ${categoryClass} max-w-80 font-serif cursor-pointer`} onClick={onSelect}>
      <div className="text-black">Buy {quantity} in {category}</div>
      <div className="text-lg font-bold text-black">{name}</div>
    </li>
  );
}