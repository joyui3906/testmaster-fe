import styled from '@emotion/styled';
import {Checkbox} from "@mui/material";

export const AnswerBox = styled(Checkbox)`
 border: 1px solid #ccc;
 border-radius: 5px;
 padding: 8px;  
`;


export const MarkedAnswerBox = styled(AnswerBox)`
  background-color: #3f51b5;
  color: #fff; 
`;
