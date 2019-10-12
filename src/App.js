import React, { Component ,Fragment} from 'react';
import  ShoppingList from './views/index1';
import Todolist3 from './views/todolist3'
//Fragment 在flex布局中，有的时候外层增加一个div 会影响布局
class App extends Component{
  render() {
    return(
     <Fragment>
     <ShoppingList name="七七"></ShoppingList>
     <Todolist3></Todolist3>
     </Fragment>
    )
  }
}

export default App;
