import './App.css';
import Graph from './components/graph';
import Form from './components/form';
function App() {
  return (
    <div className="App">
      <div className="container mx-auto max-w-6xl text-center drop-shadow-lg text-gray-900">
    <h1 className="text-4xl py-8 mb-10 bg-slate-800 text-white rounded">Expense Tracker</h1>
    {/*Grid coloums*/}
    <div className="grid md:grid-cols-2 gap-4">
      {/*Chart*/}
      <Graph></Graph>
      {/*Form*/}
      <Form></Form>
    </div>
      </div>
      <h4 className='Author'>Made by <a target="_blank"  href="https://www.linkedin.com/in/amanmalviya1/" rel="noreferrer"> Aman malviya❤️</a></h4>
    </div>
  );
}

export default App;
