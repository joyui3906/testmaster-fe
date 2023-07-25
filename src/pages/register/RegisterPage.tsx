import styled from '@emotion/styled';
import {Box, Button, Typography} from '@mui/material';
import { PATH } from '@src/constants/path';
import useInterval from '@src/hooks/useInterval';
import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import Page from "@src/components/common/page/Page";

const ContentStyle = styled.div`
  maxWidth: 480,
  margin: auto,
  minHeight: 100vh,
  display: flex,
  justifyContent: center,
  flexDirection: column,
  padding: theme.spacing(12, 0),
`;

interface Page404Props {
  delayTimeMills?: number;
}

const RegisterPage = ({ delayTimeMills = 0 }: Page404Props) => {

  return (
    <Page>
      <Box>
      </Box>
    </Page>
  );
};

export default RegisterPage;