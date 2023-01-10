import Expense from "./components/expenses/Expense";

function App() {
  const expense = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 282.23,
      date: new Date("March 28 2022"),
    },
    {
      id: "e2",
      title: "New Tv",
      amount: 282.23,
      date: new Date("March 28 2022"),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 282.23,
      date: new Date("March 28 2022"),
    },
    {
      id: "e4",
      title: "Bicycel",
      amount: 282.23,
      date: new Date("March 28 2022"),
    },
  ];
  return (
    <div>
      <h1>Hello World</h1>
      <p>This react</p>
      <Expense items={expense} />
    </div>
  );
}

export default App;
