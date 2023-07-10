import React from 'react';
import {useNavigate} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { setCategory, setDifficultyLevel, setName, setNoOfQuestion } from '../Redux/actionCreator';

import style from "../Style/Form.module.css"

const Form = () => {
    let navigate=useNavigate()
  const dispatch = useDispatch();
  const { name, category, difficulty, numQuestions } = useSelector(
    (state) => state
  );

  const handleNameChange = (e) => {
    dispatch(setName(e.target.value));
  };

  const handleCategoryChange = (e) => {
    dispatch(setCategory(e.target.value));
  };

  const handleDifficultyChange = (e) => {
    dispatch(setDifficultyLevel(e.target.value));
  };

  const handleNumQuestionsChange = (e) => {
    dispatch(setNoOfQuestion(e.target.value));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form Data:');
    console.log('Name:', name);
    console.log('Category:', category);
    console.log('Difficulty:', difficulty);
    console.log('Number of Questions:', numQuestions);
    navigate("/quiz")
  };
  return (
    <div className={style.Form1}>
    <form className={style.Form}>
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange}placeholder='Enter name' />
      </label>
      <br />
      <br />
      <label>
        Category:
        <select value={category} onChange={handleCategoryChange}>
          <option value="">Select Category</option>
          <option value="General Knowledge">General Knowledge</option>
          <option value="Sports">Sports</option>
          <option value="Geography">Geography</option>
        </select>
      </label>
      <br />
      <label>
        Difficulty:
        <select value={difficulty} onChange={handleDifficultyChange}>
          <option value="">Select Difficulty</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </label>
      <br />
      <label>
        Number of Questions
        <br />
        <input
          type="number"
          placeholder='Enter no. of Question'
          value={numQuestions}
          onChange={handleNumQuestionsChange}
        />
      </label>
      <br />
      <br />
     
     
     
      <button className={style.btn} onClick={handleSubmit}>Submit</button>
    </form>
    </div>
  );
};

export default Form;
