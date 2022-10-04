
import logo from './logo.svg';
import './App.css';
import Header from './component/Header'
import Button from './component/Button';
import Input from './component/Input';
import Modal from './component/Modal';
import { useEffect, useState} from "react"

let data = [
    {productName: 'ao', quantity: 3, price: 200000},
    {productName: 'quan', quantity: 3, price: 400000},
    {productName: 'giay', quantity: 3, price: 600000},
]

function calculate (data) {
  let sum = 0
  for ( let i=0; i< data.length; i++) {
    sum+= data[i].quantity * data[i].price
  }
  return sum
} 

function sumQuan (data) {
  let sum = 0
  for (let i=0; i < data.length; i++) {
    sum+=data[i].quantity
  }
  return sum
}


function App() {
  const [cart,setCart] = useState(data)
  const [total, setTotal] = useState (0)
  const [quantity, setQuantity] = useState (0)
  const [index, setIndex] = useState (-1)
  function updateQ (change, index) {
    let cloneCart = [...cart]
    cloneCart[index].quantity +=change
    setCart(cloneCart)
  }


  function Delete (i) {
    let cloneCart = [...cart]
    cloneCart.splice(i,1)
    setCart(cloneCart)
  }

  function Add (){
    let cloneCart = [...cart]
    var a = (document.querySelector('.A').value == ''|| document.querySelector('.A').value == '' || document.querySelector('.A').value == '')?
     alert('Không đủ dữ liệu')
    :(cloneCart.push({productName: document.querySelector('.A').value,quantity:document.querySelector('.B').value/1,price: document.querySelector('.C').value}))
    setCart(cloneCart)
    return a
  }

  function Changeitem (i){
    document.querySelector('.A').value = cart[i].productName
    document.querySelector('.B').value = cart[i].quantity
    document.querySelector('.C').value = cart[i].price 
    setIndex(i)
  }

  function ChangeAll (i){
    let cloneCart = [...cart]
    cloneCart[i].productName = document.querySelector('.A').value
    cloneCart[i].quantity = document.querySelector('.B').value/1
    cloneCart[i].price = document.querySelector('.C').value
    setCart(cloneCart)    
  }

  function Search (){
    let cloneCart = [...cart]
    for (let i = 0; i < cloneCart.length; i++) {
      if (cloneCart[i].productName.toLowerCase() == document.querySelector('.A').value.toLowerCase()) {
        cloneCart = [cloneCart[i]]
      }
    }
    setCart(cloneCart)    
  }

  useEffect(function(){
    setTotal (calculate(cart))
    setQuantity (sumQuan(cart))
  },[cart])

  return (
    <div> 
      <Header quantity = {quantity} total = {total} className = 'header'/> 
      <Input className='A' type="text" value =''/>
      <Input className='B' type="number" value =''/>
      <Input className='C' type="number" value =''/>
      <Button value='Add' onClick = {function() {Add()}}></Button>
      <Button value='Update' onClick = {function() {ChangeAll(index)}}></Button>
      <Button value='Search' onClick = {function() {Search()}}></Button>
      {cart.map(function(value,index){    
       return(
        <table className='table'>
        <thead>
          <td>Tên</td>
          <td>Số Lượng</td>
          <td>Giá</td>
          <td>Thành Tiền</td>
          <td>Status</td>
          <td>Action</td>
        </thead>
        <tbody>
          <td>{value.productName}</td>
          <td>{value.quantity}</td>
          <td>{value.price}</td>
          <td>{value.quantity*value.price}</td>
          <td><select name="" id="">
            <option>pending</option>
            <option>paid</option>
            <option>unpaid</option>
            </select></td>
          <td>
            <Button value='+' onClick = {function() {updateQ(1,index)}}></Button>
            <Button value='-' onClick = {function() {updateQ(-1,index)}}></Button>
            <Button value='Delete' onClick = {function() {Delete(index)}}></Button>
            <Button value='Updateitem' onClick = {function() {Changeitem(index)}}></Button>
          </td>
        </tbody>
      </table>
       )
    })}
    </div>
  )
  }
export default App;



