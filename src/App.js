import './App.css';
import React from 'react';
import { Header } from './components/page/Header';
import { Body } from './components/page/Body';
import { Cart } from './components/cart/Cart';
import { SingleProduct } from './components/page/SingleProduct';
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

function App() {

  const interfaceSlice = useSelector(state => state.interface.showCart);

  return (
    <div>
      {interfaceSlice && <Cart />}
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/:id" element={<SingleProduct/>} />
        </Routes>
      </main>
    </div>
  )
}

export default App;
