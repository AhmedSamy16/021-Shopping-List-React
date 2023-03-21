import { useState, useEffect } from 'react';
import { AiFillPlusCircle } from "react-icons/ai"
import Item from './Item';

const App = () => {
	const [items, setItems] = useState([]);
  const [input, setInput] = useState("")
  const [total, setTotal] = useState(0)
  // Calc Total
  useEffect(() => {
    const totalAmount = items.reduce((prev, curr) => {
      return !curr.isSelected ? prev + curr.quantity : prev
    }, 0)
    setTotal(totalAmount)
  }, [items])
  // Add Item
  const addItem = () => {
    if (!input || [...new Set(input)][0] === " ") {
      return
    }
    const newItem = {
      id: new Date().getTime().toString(),
      name: input,
      isSelected: false,
      quantity: 1,
    }
    setItems([...items, newItem])
    setInput("")
  }
  // Check Item
  const checkItem = (index) => {
    const newItems = [...items]
    newItems[index].isSelected = !items[index].isSelected
    setItems(newItems)
  }
  // Increment Amount
  const increment = (index) => {
    if (items[index].isSelected) {
      return
    }
    const newItems = [...items]
    newItems[index].quantity++
    setItems(newItems)
  }
  // Decrement Amount
  const decrement = (index) => {
    if (items[index].isSelected || items[index].quantity === 0) {
      return
    }
    if (items[index].quantity === 1) {
      checkItem(index)
    }
    const newItems = [...items]
    newItems[index].quantity--
    setItems(newItems)
  }
	return (
		<div className='app-background'>
			<div className='main-container'>
				<div className='add-item-box'>
					<input type="text" value={input} onChange={(e) => setInput(e.target.value)} className='add-item-input' placeholder='Add an item...' />
					<AiFillPlusCircle onClick={addItem} />
				</div>
				<div className='item-list'>
          {items.map((item, index) => {
            return <Item key={item.id} {...item} index={index} checkItem={checkItem} increment={increment} decrement={decrement} />
          })}
				</div>
				<div className='total'>Total: {total}</div>
			</div>
		</div>
	);
};

export default App;