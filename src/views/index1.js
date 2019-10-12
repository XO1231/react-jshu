import React, { Component } from 'react';

// class ShoppingList extends React.Component {
//     render() {
//       return (
//         <div className="shopping-list">
//           <h1>Shopping List for {this.props.name}</h1>
//           <ul>
//             <li>{false ?'地方后i故事哦规划':'aaaaa' }</li>
//             <li>WhatsApp</li>
//             <li>Oculus</li>
//           </ul>
//         </div>
//       );
//     }
//   }
  class ShoppingList extends Component {
    render() {
      return (
        <div className="shopping-list">
          <h1>Shopping List for {this.props.name}</h1>
          <ul>
            <li>{false ?'地方后i故事哦规划':'aaaaa' }</li>
            <li>WhatsApp</li>
            <li>Oculus</li>
          </ul>
        </div>
      );
    }
  }
  export default ShoppingList;
