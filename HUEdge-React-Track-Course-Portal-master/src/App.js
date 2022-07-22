import { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Cart from './components/Cart';
import Courses from './components/Courses';
import Navbar from './components/Navbar';
import Wishlist from './components/Wishlist';
import Profile from './components/Profile';

function App() {
  const [courseStock, setCourseStock]= useState([])
  const [wishList, setWishList]= useState([])
  const [courses, setCourses]= useState([])
  const [cartItems, setCartItems]= useState([])

  const searchCourses = (searchText) => {
    const filteredCourses = courseStock.filter((course) => (!course.title.search(searchText)))
    setCourses(filteredCourses);
  }

  const sortCourse = (order) => {
    
    if(order === 'inc') {
      console.log(order)
      courses.sort((a, b) => (parseFloat(a.actual_price) - parseFloat(b.actual_price)))
      setCourses([...courses])
    } else {
      console.log(order)
      courses.sort((a, b) => (parseFloat(b.actual_price) - parseFloat(a.actual_price)))
      setCourses([...courses])
    }
  }

  const addToWishList = (course) => {
    course.isWishListed = true
    const newWishList = [...wishList, course]
    setWishList(newWishList)
  }

  const removeFromWishList = (course) => {
    course.isWishListed = undefined
    const newWishList = wishList.filter(courseInList => courseInList.id !== course.id)
    setWishList(newWishList)
  }

  const addToCart = (course) => {
    if(course.inCart === undefined) {
      course.inCart = true
      setCartItems([...cartItems, course])
    } 
  }

  const removeFromCart = (course) => {
    if(course.inCart) {
      course.inCart = undefined
      const newCartItems = cartItems.filter(items => items.id !== course.id)
      setCartItems(newCartItems)
    } 
  }

  useEffect(()=> {
    fetch('data.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
    .then(function(response){
      console.log(response)
      return response.json()
    })
    .then(function(jsonData) {
      console.log(jsonData)
      setCourses(jsonData)
      setCourseStock(jsonData)
    });
  }
  ,[])

  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route exact path="/" 
            element = {<Navigate replace to="/courses" /> }>
          </Route>
          <Route path='/courses' element={<Courses courses = { courses } removeFromWishList = { removeFromWishList } addToWishList = { addToWishList } addToCart= { addToCart } cartItems = {cartItems} searchCourses= {searchCourses} sortCourse = {sortCourse}/>} />
          <Route path='/wishlist' element={<Wishlist wishlistedCourses = {wishList} removeFromWishList = { removeFromWishList } addToWishList = { addToWishList }  addToCart= { addToCart }/> }/>
          <Route path='/cart' element={<Cart cartItems = {cartItems} removeFromCart = {removeFromCart} isCoursePage= {false} />} />
          <Route path='/profile' element={<Profile/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
