import {connect} from 'react-redux'
import {firstName} from '../action/action'


const FirstName = (props) =>{
 return (
    <div>
    <h4> Your Name </h4>  
    <input type='text' className='BoxName' onChange={props.fName}/>
    </div>
  )
  }

   const mapDisptachToProps =(dispatch) =>{
    return{
      fName : (e) => dispatch(firstName(e.target.value))
    }
   }
   
  export default connect(null,mapDisptachToProps)(FirstName)