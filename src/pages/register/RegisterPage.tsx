import styled from '@emotion/styled';
import {
    Box,
    Button,
    Checkbox,
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
import {Color} from "@src/components/common";

const ContentStyle = styled.div`
  maxWidth: 480,
  margin: auto,
  minHeight: 100vh,
  display: flex,
  justifyContent: center,
  flexDirection: column,
  padding: theme.spacing(12, 0),
`;

interface RegisterProps {
    delayTimeMills?: number;
}

const RegisterPage = ({delayTimeMills = 0}: RegisterProps) => {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        passwordConfirm: '',
        name: '',
        phoneNumber: '',
        address: '',
        detailAddress: '',

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
        console.log(formData);
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
                            아이디 (이름)
                        </Typography>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            label="아이디"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <Button sx={{background: Color.black}} variant={"contained"}>
                            중복확인
                        </Button>
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
                            label="핸드폰 가운데 4자리"
                            fullWidth
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            label="비밀번호 확인"
                            fullWidth
                            name="passwordConfirm"
                            type="password"
                            value={formData.passwordConfirm}
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
                            헨드폰 번호
                        </Typography>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            label="01012345678(숫자만)"
                            name="name"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                        />
                    </Stack>
                    <Stack direction='row'
                           divider={<Divider orientation="vertical" flexItem></Divider>}
                           alignItems={"center"}
                           spacing={2}
                    >
                        <Typography width='20%' sx={{flexShrink: 0}}>
                            주소
                        </Typography>
                        <Stack sx={{width: '100%'}}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                label="도로명 주소 검색"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                label="상세주소"
                                name="detailAddress"
                                value={formData.detailAddress}
                                onChange={handleChange}
                            />
                        </Stack>
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
                            label="abcd@daum.net"
                            name="name"
                            type="email"
                            value={formData.email}
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
                            label="abcd@daum.net"
                            name="name"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </Stack>
                    <Stack direction='row'
                           divider={<Divider orientation="vertical" flexItem></Divider>}
                           alignItems={"center"}
                           spacing={2}
                    >
                        <Typography width='20%' sx={{flexShrink: 0}}>
                            개인정보 수집 활용 동의
                        </Typography>
                        <Stack sx={{width: '100%'}}
                               spacing={2}>
                            <Stack direction='row'
                                   spacing={2}>
                                <Typography>
                                    「개인정보보호법」등 관련 법규에 의거 위와 같이 개인정보 수집 및 활용에 동의함.
                                </Typography>
                                <Checkbox/>
                            </Stack>
                            <Typography>
                                위 항목은 등록을 위한 필수적인 항목으로 수강 및 관리를 위한 목적으로만 사용하며 법령의 근거 없이 제 3자에게 제공하지 않습니다.
                            </Typography>
                            <Typography>
                                수집된 개인 정보는 학원 퇴원 후 (1년)까지 보유하며 그 이후는 파기합니다.
                            </Typography>
                        </Stack>
                    </Stack>
                    <Stack direction={"row"} spacing={1}>
                        <Button
                            type="button"
                            fullWidth
                            variant="contained"
                            sx={{background: Color.grey400}}
                        >
                            취소
                        </Button>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{background: Color.black}}
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