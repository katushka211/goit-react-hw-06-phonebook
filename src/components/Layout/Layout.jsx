import { createAction } from '@reduxjs/toolkit';
import { Container } from './Layout.styled';

export const Layout = ({ children }) => {
  return <Container>{children}</Container>;
};
