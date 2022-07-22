import React from 'react'
import Userimg from '../assets/Profile.png'

const Profile = () => {
  return (
        
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <div className='card m-4'>
            <div className='row g-0'>
              <div className='col-md-2'>
                <img src={Userimg} className='card-img-top image-fluid' style={{'width':'100px', 'height':'100px'}}/>
              </div>
              <div className='col-md-10'>
                <div className='card-body'>
                  <form>
                  <label>Display Name</label> &nbsp; &nbsp;
                  <input type='text'/> 
                  <label>First Name</label> &nbsp; &nbsp;
                  <input type='text'/> 
                  <label>Last Name</label> &nbsp; &nbsp;
                  <input type='text'/>
                  <br></br>
                  <br></br>
                  <label>About Yourself</label> &nbsp; &nbsp;
                  <textarea row='5'></textarea>

                  <br></br>
                  <br></br>

                  <h5>Your Areas of interest</h5>
                  <input type='checkbox' name='Designer' value='Designer' id ='c1' /> &nbsp;
                  <label for='c1'>Designer</label> <br></br>

                  <input type='checkbox' name='Developer' value='Developer' id ='c2' /> &nbsp;
                  <label for='c2'>Developer</label> <br></br>

                  <input type='checkbox' name='Product Manager' value='Product Manager' id ='c3' /> &nbsp;
                  <label for='c3'>Designer</label> <br></br>

                  <input type='checkbox' name='Sales' value='Sales' id ='c4' /> &nbsp;
                  <label for='c4'>Designer</label> <br></br>

                  <br></br>
                  <br></br>
                
                <div>
                <h5>Are you a Student or Professional</h5>
                <input type="radio" id="Student" name="Student" value="Student" />
                <label for="Student">Student</label><br/>
                <input type="radio" id="Professional" name="Professional" value="Professional" />
                <label for="Professional">Professional</label><br/>
                  </div>
                <br/>


                  <button type='button' className="btn btn-danger">Save</button>

                  </form>

                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  );
}

export default Profile