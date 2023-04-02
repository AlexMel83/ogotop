import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Items from './components/items';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      orders: [],
      items: [
        {
          id: 1, title: 'Chair grey', img: 'Chair-grey.jfif', 
          desc: 'Lorem ipsum dolor sit amet, consectetur adipsicing',
          category: 'chairs', price: '49.99'
        },
        {
          id: 2, title: 'Table', img: 'Table.jpg', 
          desc: 'Lorem ipsum dolor sit amet, consectetur adipsicing',
          category: 'tables', price: '149.00'
        },
        {
          id: 3, title: 'Sofa', img: 'Sofa.jfif', 
          desc: 'Lorem ipsum dolor sit amet, consectetur adipsicing',
          category: 'sofas', price: '320.00'
        },
        {
          id: 4, title: 'Lampa', img: 'Lampa.jpg', 
          desc: 'Lorem ipsum dolor sit amet, consectetur adipsicing',
          category: 'lampas', price: '10.00'
        },
        {
          id: 5, title: 'Chair white', img: 'Chair-white.jpg', 
          desc: 'Lorem ipsum dolor sit amet, consectetur adipsicing',
          category: 'chairs', price: '45.50'
        }
      ]
    }
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
  }
  render(){
  return (
        <div className="wrapper">
          <Header orders={this.state.orders} onDelete={this.deleteOrder} />
          <Items items={this.state.items} onAdd={this.addToOrder} />
          <Footer />
        </div>
    );
  }
  deleteOrder(id){
    this.setState({orders: this.state.orders.filter(el=>el.id !== id)})
  }
  addToOrder(item){
    let isInArray = false;
    this.state.orders.forEach(el => {
      if(el.id === item.id)
        isInArray = true;
    })
    if(!isInArray)
      this.setState({orders: [...this.state.orders, item]})
  }
}

export default App;
