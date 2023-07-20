"use client";

const counterview = () => {
  const counterValue = 0;
  const increment = () => {};
  return (
    <div className="flex justify-center gap-6">
      <button className="px-3 py-4 bg-green-500 ronded-md" onClick={increment}>
        +
      </button>
      <div>Counter Value {counterValue}</div>
      <button className="px-3 py-4 bg-red-400 ronded-md">-</button>
    </div>
  );
};

export default counterview;
