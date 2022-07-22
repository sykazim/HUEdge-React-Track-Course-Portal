import React, { useState } from 'react'
import CourseItem from './CourseItem'
import Cart from './Cart'

const Courses = ({courses, removeFromWishList, addToWishList, addToCart, cartItems, searchCourses, sortCourse}) => {
    const [searchText, setSearchText] = useState('');

    return (
        <>
        <div className="jumbotron bg-black h-100 rounded my-2">
            <h6 className='text-white p-4'>Discover Latest Courses on <br/>React</h6>
        </div>
        <div className='container my-4'>
          <div className='row'>
            <div className="col-lg-6 ms-0">
              <h5>All Courses</h5>
            </div>
            <div className="col-lg-3">
              <div className="dropdown">
                <button className="btn btn-muted dropdown-toggle" type="button" id="dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Course Price
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdown">
                  <a className="dropdown-item" href="#" onClick={() => sortCourse('inc')}>Low to high</a>
                  <a className="dropdown-item" href="#" onClick={() => sortCourse('desc')}>High to low</a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className='input-group'>
                <input type="search" id="search" className="form-control" value = {searchText} onChange={(e) => setSearchText(e.target.value)}/>
                <div className="input-group-append">
                  <button type="button" className="btn btn-danger" onClick={() => searchCourses(searchText)}>
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-9'>
                { 
                  courses && courses.map((course) => (
                    <CourseItem key = {course.id} courseItem = {course} removeFromWishList ={ removeFromWishList } addToWishList ={  addToWishList} addToCart= { addToCart }/>
                  )) 
                }
            </div>
            <div className='col-lg-3'>
              <Cart cartItems = {cartItems} isCoursePage = {true}/>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <nav aria-label="Page navigation example mx-2">
              <ul className="pagination">
                <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item"><a className="page-link" href="#">Next</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </> 
    )
}

export default Courses