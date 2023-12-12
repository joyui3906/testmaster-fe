import styled from '@emotion/styled';
import {
    Box,
    Container,
    Divider,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    Tab,
    Tabs,
    Typography
} from '@mui/material';
import {ChangeEvent, FormEventHandler, useEffect, useState} from 'react';
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

interface SearchProps {
    delayTimeMills?: number;
}

const SearchPage = ({delayTimeMills = 0}: SearchProps) => {

    const [searchType, setSearchType] = useState<string>('SMART');
    const [bookType, setBookType] = useState<string>('TEXTBOOK');

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: '',
    });

    const [subjects, setSubjects] = useState<string[]>([]);
    const [levels, setLevels] = useState<string[]>([]);
    const [types, setTypes] = useState<string[]>([]);
    const [grade, setGrade] = useState<string[]>([]);
    const [selectedGrade, setSelectedGrade] = useState<string>();
    const [publisher, setPublisher] = useState<string[]>([]);
    const [selectedPublisher, setSelectedPublisher] = useState<string>();
    const [testType, setTestType] = useState<string[]>([]);
    const [selectedTestType, setSelectedTestType] = useState<string>();
    const [years, setYears] = useState<string[]>([]);
    const [selectedYear, setSelectedYear] = useState<string>();
    const [bookTitle, setBookTitle] = useState<string[]>([]);
    const [selectedBookTitle, setSelectedBookTitle] = useState<string>();
    const [answerSheetType, setAnswerSheetType] = useState<string[]>([]);
    const [selectedAnswerSheetType, setSelectedAnswerSheetType] = useState<string>();


    useEffect(() => {
        // 서버에서 선택지를 가져오는 API 호출
        // 예를 들어, getSubjects(), getLevels(), getTypes() 등의 함수를 활용

        // 예시 데이터
        const serverSubjects = ['Math', 'Science', 'History'];
        const serverLevels = ['Beginner', 'Intermediate', 'Advanced'];
        const serverTypes = ['Textbook', 'Workbook'];
        const serverGrades = ['중1', '중2', '중3'];
        const serverPublishers = ['A 출판사', 'B 출판사', 'C 출판사', 'D 출판사', 'E 출판사'];
        const serverTestTypes = ['1학기 중간', '1학기 기말', '2학기 중간', '2학기 기말'];
        const serverYears = ['2022', '2023'];
        const serverBookTitles = ['내신특급', '내신100', '기출100', '기출문제'];

        setSubjects(serverSubjects);
        setLevels(serverLevels);
        setTypes(serverTypes);
        setGrade(serverGrades);
        setPublisher(serverPublishers);
        setTestType(serverTestTypes);
        setYears(serverYears);
        setBookTitle(serverBookTitles);
    }, []);

    const handleSearchTypeChange = (event: React.SyntheticEvent, newValue: string) => {
        setSearchType(newValue);
    };
    const handleBookTypeChange = (event: React.SyntheticEvent, newValue: string) => {
        setBookType(newValue);
    };

    const handleGradeChange = (event: React.SyntheticEvent, newValue: string) => {
        setSelectedGrade(newValue);
    };
    const handlePublisherChange = (event: React.SyntheticEvent, newValue: string) => {
        setSelectedPublisher(newValue);
    };
    const handleTestTypeChange = (event: React.SyntheticEvent, newValue: string) => {
        setSelectedTestType(newValue);
    };
    const handleYearChange = (event: React.SyntheticEvent, newValue: string) => {
        setSelectedYear(newValue);
    };
    const handleBookTitleChange = (event: React.SyntheticEvent, newValue: string) => {
        setSelectedBookTitle(newValue);
    };


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
                <Tabs
                    sx={{
                        "& button.Mui-selected": {backgroundColor: 'orange'}
                    }}
                    value={searchType}
                    onChange={handleSearchTypeChange}>
                    <Tab label='스마트 검색' value='SMART'/>
                    <Tab label='일반 검색' value='GENERAL'/>
                </Tabs>
            </Container>
            <Container maxWidth={false} sx={{pt: 2}}>
                <Stack direction={"row"} spacing={2}>
                    <Box>
                        <FormControl sx={{minWidth: 120}}>
                            <InputLabel>과목</InputLabel>
                            <Select label={"과목"}>
                                {subjects.map((subject) => (
                                    <MenuItem key={subject} value={subject}>
                                        {subject}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>
                    <Box>
                        <FormControl sx={{minWidth: 120}}>
                            <InputLabel>레벨</InputLabel>
                            <Select label={"레벨"}>
                                {levels.map((level) => (
                                    <MenuItem key={level} value={level}>
                                        {level}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>
                    <Box>
                        <FormControl sx={{minWidth: 120}}>
                            <InputLabel>종류</InputLabel>
                            <Select label={"종류"}>
                                {types.map((type) => (
                                    <MenuItem key={type} value={type}>
                                        {type}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>
                </Stack>
                <Stack sx={{pt: 1}}>
                    <Tabs value={bookType} onChange={handleBookTypeChange}>
                        <Tab label='교과서' value='TEXTBOOK'/>
                        <Tab label='부교재' value='SUPPLEMENT'/>
                    </Tabs>
                </Stack>
                <Box
                    sx={{border: '1px solid black', mt: 1}}
                >
                    <Stack direction='row'
                           divider={<Divider orientation="vertical" flexItem></Divider>}
                           alignItems={"center"}
                           spacing={2}
                    >
                        <Typography width='20%' sx={{flexShrink: 0}}>
                            학년
                        </Typography>
                        <Tabs value={selectedGrade} onChange={handleGradeChange}>
                            {grade.map((item) => (
                                <Tab label={item} value={item}/>
                            ))}
                        </Tabs>
                    </Stack>
                    <Stack direction='row'
                           divider={<Divider orientation="vertical" flexItem></Divider>}
                           alignItems={"center"}
                           spacing={2}
                    >
                        <Typography width='20%' sx={{flexShrink: 0}}>
                            출판사
                        </Typography>
                        <Tabs value={selectedPublisher} onChange={handlePublisherChange}>
                            {publisher.map((item) => (
                                <Tab label={item} value={item}/>
                            ))}
                        </Tabs>
                    </Stack>
                    <Stack direction='row'
                           divider={<Divider orientation="vertical" flexItem></Divider>}
                           alignItems={"center"}
                           spacing={2}
                    >
                        <Typography width='20%' sx={{flexShrink: 0}}>
                            학기-시험
                        </Typography>
                        <Tabs value={selectedTestType} onChange={handleTestTypeChange}>
                            {testType.map((item) => (
                                <Tab label={item} value={item}/>
                            ))}
                        </Tabs>
                    </Stack>
                    <Stack direction='row'
                           divider={<Divider orientation="vertical" flexItem></Divider>}
                           alignItems={"center"}
                           spacing={2}
                    >
                        <Typography width='20%' sx={{flexShrink: 0}}>
                            년도
                        </Typography>
                        <Tabs value={selectedYear} onChange={handleYearChange}>
                            {years.map((item) => (
                                <Tab label={item} value={item}/>
                            ))}
                        </Tabs>
                    </Stack>
                    <Stack direction='row'
                           divider={<Divider orientation="vertical" flexItem></Divider>}
                           alignItems={"center"}
                           spacing={2}
                    >
                        <Typography width='20%' sx={{flexShrink: 0}}>
                            문제집 Title
                        </Typography>
                        <Tabs value={selectedBookTitle} onChange={handleBookTitleChange}>
                            {bookTitle.map((item) => (
                                <Tab label={item} value={item}/>
                            ))}
                        </Tabs>
                    </Stack>

                </Box>
            </Container>
        </Page>
    );
};

export default SearchPage;