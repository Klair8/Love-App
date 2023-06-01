import {connect} from 'react-redux'
import {secondName} from '../action/action'


const SecondName =(props) =>{
    return(
        <div>
            <h4> Your Love Crush </h4>
            <input type='text' className='BoxName' onChange={props.sname}/>
        </div>
    )
}

const mapDisptachToProps = dispatch => {
    return{
    sname: (e) => dispatch (secondName(e.target.value))
    }
}


export default connect(null, mapDisptachToProps)(SecondName)