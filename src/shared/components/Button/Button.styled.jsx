import styled from 'styled-components';

const StyledBtn = styled.button`
  border: ${({ type }) => (type === 'submit' ? 'none' : '1px solid grey')};
  outline: none;
  cursor: pointer;
  background-color: gray;
  border-radius: 5px;
  padding: 5px 10px;
  max-width: 100px;

  &:hover {
    background-color: gray;
    color: #ffffff;
  }
`;

export default StyledBtn;
