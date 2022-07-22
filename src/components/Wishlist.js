import React from 'react'
import CourseItem from './CourseItem'

const Wishlist = ({ wishlistedCourses, removeFromWishList, addToWishList, addToCart }) => {
    return (
        wishlistedCourses && wishlistedCourses.length === 0 ? 
        (<p>Your wishlist is empty.</p>)
        :
        ( wishlistedCourses.map((course) => (
            <CourseItem key = {course.id} courseItem = {course} removeFromWishList ={ removeFromWishList } addToWishList = { addToWishList} addToCart= { addToCart }/>
        )))
    )
}

export default Wishlist