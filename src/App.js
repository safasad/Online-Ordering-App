import React ,{useState} from "react";
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'
import Cart from './components/Cart/Cart'

function App() {

  const [cartIsVisible ,setCartIsVisible] = useState(false);

  const showCartHandler =()=>{
    setCartIsVisible(true)
  }
  const hideCartHandler=()=>{
    setCartIsVisible(false)
  }

  return (
    <React.Fragment>
      {/* Render cart only if visible = true */}
      {cartIsVisible && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}></Header>
      <main>
        <Meals></Meals>
      </main>
    </React.Fragment>
  );
}

export default App;
