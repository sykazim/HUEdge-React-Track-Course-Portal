import React from 'react'

const CourseItem = ({courseItem, addToWishList, removeFromWishList, addToCart}) => {

    const toggleCourseItemInList = (course) => {
        if(course.isWishListed !== undefined) {
            removeFromWishList(course)
        } else {
            addToWishList(course)
        }
    }

  return (
    <div className="card flex-row my-2">
        <div className="card-header" style={{ 'width': '60px', 'height': '60px', 'margin':'auto 10px', 'padding': '10px', 'border': '0'}}> 
        </div>
        <div className="card-body d-flex flex-row justify-content-between align-items-center course-item">
            <h4 className='text-truncate' style={{ 'maxWidth': '200px'}} title={courseItem.title}>{ courseItem.title }</h4>
            <p className='text-muted'>{ courseItem.author }</p>
            <button className={courseItem.isWishListed === undefined ? 'btn text-muted' : 'btn text-warning'} onClick= {() => toggleCourseItemInList(courseItem)}><i className="fa fa-star"></i></button>
            <h4>Rs { courseItem.actual_price }/-</h4>
        </div>
        <div className="card-footer d-flex flex-row justify-content-center align-items-center" style={{'border': '0'}}>
            <button disabled = {courseItem.inCart !== undefined ? true : false} className='btn btn-danger text-uppercase' onClick={() => addToCart(courseItem)}>add to cart</button>
            <i className="btn fa-solid fa-angle-right ms-4"></i>
        </div>
    </div>
  )
}

export default CourseItem