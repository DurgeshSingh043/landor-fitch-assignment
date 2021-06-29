import Home from './pages/home/Home';
import './app.scss';
import PageTemplate from './components/templates/pageTemplate';

export default function App() {
  return (
    <div className="App">
      <PageTemplate>
        <Home />
      </PageTemplate>
    </div>
  );
}
