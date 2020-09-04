import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  padding: 0.7rem 2.5rem;
  border-radius: ${props => (props.alignRight ? '50px 0 0 50px' : '0 50px 50px 0')};
  float: ${props => (props.alignRight ? 'right' : 'none')};
  border: none;
  -webkit-appearance: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  transition: 1s;
  color: #fff;
  background: #0074d9;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: black;
    border-radius: ${props => (props.alignRight ? '100px 0 0 20px' : '0 100px 20px 0')};
  }

  &:disabled {
    background: gray;
  }

  ${({ secondary }) =>
    secondary &&
    `
		background: #001F3F;
	`}
`;
