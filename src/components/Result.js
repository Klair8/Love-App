import{connect} from 'react-redux'
import Navbar from './Navbar'
import Footer from './Footer'


const capitalizeFirstLetter = (str)=>{
	return str.charAt(0).toUpperCase() + str.slice(1);
};

const result =(props) =>{
	const formattedFname = capitalizeFirstLetter(props.fname);
	const formattedSname = capitalizeFirstLetter(props.sname);
	const heartSymbol = '❤️';

	const resultWithHeart = `${heartSymbol} ${props.percentage} % ${heartSymbol}`;

    return(
		<div>
		<Navbar/>
		<div className='ResultsPage'>
		<h3>{formattedFname} & {formattedSname}</h3>
		<br></br>
		<div className='heart'>
          <div className='result'>{props.percentage} %</div>
        </div>
		<br></br>
		<h3> {props.showR}</h3>
		</div>
		<Footer/>
		</div>

    )
}

const mapStateToProps =(state) =>{
	console.log('result page result',state)
	return{
		fname : state.firstname,
        sname: state.secondname,
		percentage: state.percentage,
		showR: state.result
	}
}

export default connect (mapStateToProps) (result)