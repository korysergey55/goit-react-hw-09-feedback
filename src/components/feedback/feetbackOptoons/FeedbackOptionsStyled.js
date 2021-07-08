import styled from "styled-components";
export const FeedbackContainer = styled.div`
 .good {
  margin-right: 20px;
  padding: 10px;
  border-radius: 14px;
  background-color: #21cc21;

  :hover {
   background-color: black;
   color: white;
  }
 }
 .neutral {
  margin-right: 20px;
  padding: 10px;
  border-radius: 14px;
  background-color: #fcff2f;
  :hover {
   background-color: black;
   color: white;
  }
 }
 .bad {
  margin-right: 20px;
  padding: 10px;
  border-radius: 14px;
  background-color: #fc4141;
  :hover {
   background-color: black;
   color: white;
  }
 }
`;
