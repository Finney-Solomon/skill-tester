import { Button, TextareaAutosize } from '@mui/material';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { openTestPage } from '../Redux/action';

const Test = () => {
 const data = useSelector((state) => state?.testQuestionAndAnswer);
  const dispatch = useDispatch()
  const handleSubmit = () => {
    dispatch(openTestPage(false))
  };
  return (
    <div>
      <h3>Welcome to skill tester</h3>
      
      {data?.map((data)=>{return (<>
      <p>{data.question}</p>
      <TextareaAutosize
   minRows={8}
  aria-label="maximum height"
  defaultValue="Enter the Answer"
  style={{ width: 500 }}
/>{data.answer}</>)})}
<div> <Button onClick={handleSubmit}>Submit</Button></div>

    </div>
  )
}

export default Test
