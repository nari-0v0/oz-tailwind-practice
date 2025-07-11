import './App.css';
import { contents } from './assets/data/data';
import Content from './components/Content';
import Header from './components/Header';

function App() {
  return (
    <main className="w-full mx-auto p-5">
      <Header />
      <section className="flex flex-wrap gap-4 mt-6">
        {contents.map((el) => (
          <Content key={el.id} content={el} />
        ))}
      </section>
    </main>
  );
}

export default App;
