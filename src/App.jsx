import Calculator from "./components/Calculator";

function App() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="max-w-sm bg-black/30 mx-auto p-4 rounded-[30px]">
        <Calculator />
      </div>
    </div>
  );
}

export default App;
