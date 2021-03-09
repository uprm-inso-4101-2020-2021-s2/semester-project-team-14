import SideBar from './components/SideBar/SideBar';
import QuoteGenerator from './components/QuoteGenerator/QuoteGenerator';
import { useState, useEffect } from 'react';
import Mindfulness from './components/Mindfulness/Mindfulness';
import Scheduler from './components/Scheduler/Scheduler';
import TodoList from './components/TodoList/TodoList';

function App() {
  const [selectedMenu, setSelectedMenu] = useState('todolist');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const randomQuote = async () => {
    try {
      const response = await fetch(
        'https://api.quotable.io/random?tags=inspirational'
      );
      const data = await response.json();
      setContent(data.content);
      setAuthor(data.author);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    randomQuote();
  }, []);
  return (
    <div className='app'>
      <SideBar setSelectedMenu={setSelectedMenu} randomQuote={randomQuote} />
      <QuoteGenerator content={content} author={author} />
      {selectedMenu == 'mindfulness' ? <Mindfulness /> : null}
      {selectedMenu == 'scheduler' ? <Scheduler /> : null}
      {selectedMenu == 'todolist' ? <TodoList /> : null}
    </div>
  );
}

export default App;
