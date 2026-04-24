import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Home Page</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <button onClick={() => setCount(count - 1)}>Subtract</button>
    </div>
  );
}
