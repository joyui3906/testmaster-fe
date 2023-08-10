import React, {ChangeEvent, FormEvent, useState} from 'react';
import {Button, Container, Stack, TextField} from '@mui/material';
import Page from "@src/components/common/page/Page";
import { CenteredContainer } from './LoginPage.style';


interface FormData {
    username: string;
    password: string;
}

const LoginPage: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        username: '',
        password: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData); // 로그인 로직 추가
    };

    return (
        <Page>
            <CenteredContainer>
                <Stack
                    display="flex"
                    spacing={2}
                    direction='row'
                >
                    <Stack>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            label="아이디"
                            fullWidth
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            label="비밀번호"
                            fullWidth
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </Stack>
                    <Stack sx={{flexShrink: 0}} justifyContent="center">
                        <Button
                            style={{height: '85%'}}
                            type="submit"
                            variant="contained"
                            color="primary"
                        >
                            로그인
                        </Button>
                    </Stack>
                </Stack>
            </CenteredContainer>
        </Page>
    );
};

export default LoginPage;
