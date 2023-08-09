import styled from '@emotion/styled';
import {
    Box,
    Button,
    Container,
    Divider,
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,
    Stack,
    TextField,
    Typography
} from '@mui/material';
import {ChangeEvent, FormEventHandler, useState} from 'react';
import Page from "@src/components/common/page/Page";
import {HeaderBlock} from './RegisterPage.style';

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

const RegisterPage = ({delayTimeMills = 0}: Page404Props) => {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
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
            <Container maxWidth={false}>
                <Box>
                    <HeaderBlock>
                        <Typography component="h1" variant="h5">
                            회원 정보 입력
                        </Typography>
                    </HeaderBlock>
                </Box>
                <Stack spacing={2}>
                    <Stack
                        sx={{pt: 1}}
                        direction='row'
                        divider={<Divider orientation="vertical" flexItem></Divider>}
                        alignItems={"center"}
                        spacing={2}
                    >
                        <Typography width='20%' sx={{flexShrink: 0}}>
                            회원 정보 구분
                        </Typography>
                        <FormControl sx={{pl: 2}}>
                            <RadioGroup sx={{justifyContent: "space-between"}} row name="userType"
                                        onChange={handleChange}>
                                <FormControlLabel value="student" control={<Radio/>} label="학생"/>
                                <FormControlLabel value="teacher" control={<Radio/>} label="선생님"/>
                            </RadioGroup>
                        </FormControl>
                    </Stack>
                    <Stack direction='row'
                           divider={<Divider orientation="vertical" flexItem></Divider>}
                           alignItems={"center"}
                           spacing={2}
                    >
                        <Typography width='20%' sx={{flexShrink: 0}}>
                            학교
                        </Typography>
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
                    <Stack direction='row'
                           divider={<Divider orientation="vertical" flexItem></Divider>}
                           alignItems={"center"}
                           spacing={2}
                    >
                        <Typography width='20%' sx={{flexShrink: 0}}>
                            이름
                        </Typography>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            label="이름"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </Stack>
                    <Stack direction='row'
                           divider={<Divider orientation="vertical" flexItem></Divider>}
                           alignItems={"center"}
                           spacing={2}
                    >
                        <Typography width='20%' sx={{flexShrink: 0}}>
                            성별
                        </Typography>
                        <FormControl sx={{pl: 2}}>
                            <RadioGroup sx={{justifyContent: "space-between"}} row name="userType"
                                        onChange={handleChange}>
                                <FormControlLabel value="M" control={<Radio/>} label="남"/>
                                <FormControlLabel value="F" control={<Radio/>} label="여"/>
                            </RadioGroup>
                        </FormControl>
                    </Stack>
                    <Stack direction='row'
                           divider={<Divider orientation="vertical" flexItem></Divider>}
                           alignItems={"center"}
                           spacing={2}
                    >
                        <Typography width='20%' sx={{flexShrink: 0}}>
                            아이디
                        </Typography>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            label="아이디"
                            fullWidth
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </Stack>
                    <Stack direction='row'
                           divider={<Divider orientation="vertical" flexItem></Divider>}
                           alignItems={"center"}
                           spacing={2}
                    >
                        <Typography width='20%' sx={{flexShrink: 0}}>
                            비밀번호
                        </Typography>
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
                    <Stack direction='row'
                           divider={<Divider orientation="vertical" flexItem></Divider>}
                           alignItems={"center"}
                           spacing={2}
                    >
                        <Typography width='20%' sx={{flexShrink: 0}}>
                            헨드폰 번호
                        </Typography>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            label="핸드폰 번호"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </Stack>
                    <Stack direction='row'
                           divider={<Divider orientation="vertical" flexItem></Divider>}
                           alignItems={"center"}
                           spacing={2}
                    >
                        <Typography width='20%' sx={{flexShrink: 0}}>
                            이메일
                        </Typography>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            label="이메일"
                            name="name"
                            type="email"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </Stack>
                    <Stack direction={"row"} spacing={1}>
                        <Button
                            type="button"
                            fullWidth
                            variant="outlined"
                            color="primary"
                        >
                            취소
                        </Button>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                        >
                            회원 가입
                        </Button>
                    </Stack>
                </Stack>
            </Container>
        </Page>
    );
};

export default RegisterPage;