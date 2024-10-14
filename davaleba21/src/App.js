import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ItemList from './components/ItemList';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const theme = useSelector((state) => state.theme.mode);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="App">
      <ThemeToggle />
      <ItemList />
    </div>
  );
}

export default App;
