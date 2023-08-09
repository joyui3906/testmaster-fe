import styled from '@emotion/styled';
import {Box, Button, Container, Paper, TextField, Typography} from '@mui/material';
import { PATH } from '@src/constants/path';
import useInterval from '@src/hooks/useInterval';
import {ChangeEvent, FormEventHandler, useState} from 'react';
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

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: FormEventHandler<HTMLFormElement>) => {
//        e.preventDefault();
        console.log(formData); // 이곳에서 회원 가입 로직을 추가하면 됩니다.
    };
  return (
    <Page>
      <Box>
          <Container component="main" maxWidth="xs">
                  <Typography component="h1" variant="h5">
                      회원 가입
                  </Typography>
                      <TextField
                          variant="outlined"
                          margin="normal"
                          fullWidth
                          label="이메일"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          autoFocus
                      />
                      <TextField
                          variant="outlined"
                          margin="normal"
                          fullWidth
                          label="비밀번호"
                          name="password"
                          type="password"
                          value={formData.password}
                          onChange={handleChange}
                      />
                      <TextField
                          variant="outlined"
                          margin="normal"
                          fullWidth
                          label="이름"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                      />
                      <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          color="primary"
                      >
                          회원 가입
                      </Button>
          </Container>
      </Box>
    </Page>
  );
};

export default RegisterPage;