import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Items from './components/items';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
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
  }
  render(){
  return (
        <div className="wrapper">
          <Header />
          <Items items={this.state.items} />
          <Footer />
        </div>
    );
  }
}

export default App;
