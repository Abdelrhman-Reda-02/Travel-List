export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>let's start adding some items to your list 🚀 </em>
      </p>
    );
  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItems / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything ready to go ✈️"
          : `👜You have ${numItems} items , and you already packed ${packedItems} (
        ${percentage}%)`}
      </em>
    </footer>
  );
}
