import React, {ChangeEvent, FormEvent, useState} from 'react';
import {Button, Grid, Stack, TextField} from '@mui/material';
import Page from "@src/components/common/page/Page";


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
                <Stack
                    display="flex"
                    spacing={2}
                    direction='row'
                    height='60vh'
                >
                    <Stack justifyContent="center">
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
                    <Stack justifyContent="center">
                        <Button
                            style={{height:136}}
                            type="submit"
                            variant="contained"
                            color="primary"
                        >
                            로그인
                        </Button>
                    </Stack>
                </Stack>
        </Page>
    );
};

export default LoginPage;
