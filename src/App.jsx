import useStore from "./store.js";

function App() {

  const count = useStore((state) => state.count);
  const add = useStore((state) => state.addCount);
  const sub = useStore((state) => state.subCount);
  const set = useStore((state) => state.setCount);

  return <>
    <h3>{count}</h3>
    <button onClick={add}>加</button>
    <button onClick={sub}>减</button>
    <div>
      <button onClick={set.bind(this,888)}>设置值为888</button>  
    </div>
  </>;
}

export default App;



