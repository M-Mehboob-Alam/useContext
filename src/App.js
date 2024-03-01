import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Blog from './components/Blog';
import Pagination from './components/Pagination';
import { useContext, useEffect } from 'react';
import { AppContext } from './context/AppContext';

function App() {

  const {fetchPostData} = useContext(AppContext);
  useEffect(()=> {
    fetchPostData();
  }, []);
  return (
    <>
    <Header />
    <Blog/>
    <Pagination />

    </>
  );
}

export default App;
