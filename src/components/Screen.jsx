import React from 'react'
import './Screen.css'



const Screen = () => {
    return (
        <>
            <div className='row no-gutters'>
                <div className='col'>
                    <div className='leftside no-gutters'>
                        
                     <div>
                        <h1 className='title'>AEROSPACE</h1> 
                        <img className='img' src="https://www.innaviontech.com/assets/images/our_solutions/aerospace-defense.png" width="450" height="300" alt="aero space"/>
                        <div>
                        <h4 className="prdctdes">Product description :</h4>
                        </div>
                        <div>  
                        <h6 className="des">We convert unique ideas into engineering solutions that are central to our Aerospace customers. 
                         Our unique products built on strong foundations of deep industry expertise coupled with cutting edge technology
                         are designed to drive operational efficiency, improve productivity, reduce costs and accelerate return on investments.
                         </h6>
                         </div>
                     </div>
                    </div>
                    

                </div>
                <div className='col no-gutters'>
                
                    <div className='rightside'>
                        <p>Sign in to existing account</p>
                        
                
                        <h6>All from fileds are required</h6>
                    <form className="form">
                    <div className="iwouldlike">
                      
                    <select className="hi" >
                        <option hidden>I would like to</option>
                        <option value="state 1">state 1</option>
                        <option value="state 2">state 2</option>
                        <option value="state 3">state 3</option>
                        
                    </select>
                    <div>
                        <input className="firstname" placeholder="First name"></input>
                        <input className="lastname" placeholder="Last name"></input>
                    </div>
                    <div>
                        <input className="business" placeholder="Bussines Em@il"></input>
                        
                    </div>
                    <div>
                        <input className="company" placeholder="Company"></input>
                        <input className="bsphone" placeholder="Business Phone"></input>
                        
                    </div>
                    <div>
                    <select className="joblevel" >
                        <option  hidden>Job level</option>
                        <option value="state 1">state 1</option>
                        <option value="state 2">state 2</option>
                        <option value="state 3">state 3</option>
                        
                    </select>
                    </div>
                    <div>
                    <select className="department">
                        <option value="null" disabled selected>department</option>
                        <option value="state 1">state 1</option>
                        <option value="state 2">state 2</option>
                        <option value="state 3">state 3</option>
                        
                    </select>
                    </div>
                    <div>
                    <select className="jobfunction">
                        <option value="null" disabled selected>Job Function</option>
                        <option value="state 1">state 1</option>
                        <option value="state 2">state 2</option>
                        <option value="state 3">state 3</option>
                        
                    </select>
                    </div>
                    <div>
                    <select className="country">
                        <option value="null" disabled selected>Country</option>
                        <option value="state 1">state 1</option>
                        <option value="state 2">state 2</option>
                        <option value="state 3">state 3</option>
                        
                    </select>
                    <select className="stateprovince">
                        <option value="null" disabled selected>State province</option>
                        <option value="state 1">state 1</option>
                        <option value="state 2">state 2</option>
                        <option value="state 3">state 3</option>
                        
                    </select>
                    </div>
                    <div>
                        <textarea className='comments' placeholder='comments'></textarea>
                    </div>
                    <div>
                    <select className='intrested' >
                        <option value="null" disabled selected>Im interested in</option>
                        <option value="state 1">state 1</option>
                        <option value="state 2">state 2</option>
                        <option value="state 3">state 3</option>
                        
                    </select>
                    </div>
                    </div>
                    </form>
                    </div>
                </div>

            
            </div>            
        </>
    )
}

export default Screen;
