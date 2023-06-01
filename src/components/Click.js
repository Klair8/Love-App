import React from 'react';
import { connect } from 'react-redux';
import { showResult } from '../action/action';
import { useNavigate } from 'react-router-dom';

const BtnClick = (props) => {
  const navigate = useNavigate();
 

  const fetchApi = () => {
    fetch(
      `https://love-calculator.p.rapidapi.com/getPercentage?sname=${props.fname}&fname=${props.sname}`,
      {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
          'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com',
        },
      }
    )
      .then((response) => response.json())
      .then((response) => {
        const { percentage, result } = response;
        props.response({ percentage, result });

        navigate('/Results');
      });
  };

  return (
    <button onClick={fetchApi} className='BoxCalcule'>
      Calculate your Chance
    </button>
  );
};

const mapStateToProps = (state) => {
  return {
    fname: state.firstname,
    sname: state.secondname,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    response: (obj) => dispatch(showResult(obj)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BtnClick);
