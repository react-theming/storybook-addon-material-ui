import React from 'react';
import { styled } from '@storybook/theming';

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  border: none;
  border-radius: 2px;
  padding: 0;
  background-color: unset;
  height: 20px;
  width: 20px;
  background-repeat: no-repeat;
  background-size: contain;

  :hover {
    background-color: white;
    svg {
      stroke: #eeeeee;
    }
  }
`;

const copyIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
  >
    <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
  </svg>
);

const icons = {
  copy: copyIcon,
};

const IconButton = ({ onClick, title, icon }) => {
  const svg = icons[icon];
  return (
    <Button onClick={onClick} title={title}>
      {svg}
    </Button>
  );
};

export default IconButton;
