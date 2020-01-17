// import React, { Component } from 'react';
// import '../App.css';

// class Todolist extends Component {
//     index = 0;
//     state = {
//         element: '',
//         items: []
//     };

//     onChange = (event) => {
//         this.setState({ element: event.target.value });
//     }

//     onSubmit = (event) => {
//         event.preventDefault();
//         if (this.state.element.length > 0) {
//             let obj = { item: this.state.element, status: false, id: this.index };
//             this.setState({
//                 element: '',
//                 items: [...this.state.items, obj]
//             });
//             this.index++;
//         }
//     }

//     onClick = (event) => {
//         event.stopPropagation();
//         let index = parseInt(event.target.parentNode.id);
//         this.setState({
//             items:
//                 this.state.items.map(item => {
//                     if (item.id === index) {
//                         item.status = event.target.checked;
//                     }
//                     return item;
//                 })

//         });
//     }

//     removeItem = (event) => {
//         event.stopPropagation();
//         let allData = [];
//         let ind = parseInt(event.target.parentNode.id);
//         for (let i in this.state.items) {
//             if (ind !== this.state.items[i].id) {
//                 allData.push(this.state.items[i]);
//             }
//         }
//         this.setState({ items: allData });
//     }

//     lineThrough(item) {
//         return item.status ? { textDecorationLine: 'line-through' }
//             : { textDecorationLine: 'none' };
//     }

//     render() {
//         return (

//             <div className='App'>
//                 <h1 className='logo'>To-Do-List</h1>
//                 <form className="input-area" onSubmit={this.onSubmit}>
//                     <input value={this.state.element} onChange={this.onChange} />
//                     <button>Add-Item</button>
//                 </form>

//                 <ul>{
//                     this.state.items.map((item) =>
//                         <li key={item.id} id={item.id} className='list-item'>
//                             <input type="checkbox" onClick={this.onClick} />
//                             <div style={this.lineThrough(item)}>{item.item}</div>
//                             <button onClick={this.removeItem}>x</button>
//                         </li>)

//                 }</ul>
//             </div>
//         );
//     }
// }


// export default Todolist;