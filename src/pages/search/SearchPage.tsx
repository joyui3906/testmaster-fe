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
import React, {ChangeEvent, FormEventHandler, useEffect, useState} from 'react';
import Page from "@src/components/common/page/Page";
import {AddSettingButton} from "@src/pages/search/SearchPage.style";

const ContentStyle = styled.div`
    maxWidth: 480,
    margin: auto,
    minHeight: 100vh,
    display: flex,
    justifyContent: center,
    flexDirection: column,
    padding: theme . spacing(12, 0),
`;

interface SearchProps {
    delayTimeMills?: number;
}

const SearchPage = ({delayTimeMills = 0}: SearchProps) => {

    const [bookTypes, setBookType] = useState([
        {label: '배틀영어문제집',value: 'BATTLE_WORKBOOK'},
        {label: '부교재', value: 'SUPPLEMENT'},
        {label: '모의고사', value: 'PRACTICE_TEST'},
        {label: '교과서문제집', value: 'TEXTBOOK_WORKBOOK'}
    ]);
    const [selectedBookType, setSelectedBookType] = useState<string>('BATTLE_WORKBOOK');

    const [commonFilterOption, setCommonFilterOption] = useState([
        {label: 'OMR 유형', value: 'OMR_TYPE'},
        {label: '표지', value: 'COVER'}
    ]);
    const [battleFilterOption, setBattleFilterOption] = useState([
        {label: '유형', value: 'TEST_TYPE'},
        {label: '학년', value: 'GRADE'},
        {label: '문제유형', value: 'PROBLEM_TYPE'},
        {label: '소분류', value: 'SUBCATEGORY'},
        {label: '등급', value: 'RANK'}
    ]);
    const [supplementFilterOption, setSupplementFilterOption] = useState([
        {label: '유형', value: 'TEST_TYPE'},
        {label: '출판사', value: 'PUBLISHER'},
        {label: '년도', value: 'YEAR'},
        {label: '문제집 Title', value: 'BOOK_TITLE'}
    ]);

    const [practiceTestFilterOption, setPracticeTestFilterOption] = useState([
        {label: '유형', value: 'TEST_TYPE'},
        {label: '학년', value: 'GRADE'},
        {label: '년도', value: 'YEAR'},
        {label: '월', value: 'MONTH'}
    ]);

    const [textbookFilterOption, setTextbookFilterOption] = useState([
        {label: '학년', value: 'GRADE'},
        {label: '출판사', value: 'PUBLISHER'},
        {label: '학기-시험', value: 'SEMESTER_TEST'},
        {label: '년도', value: 'YEAR'},
        {label: '문제집 Title', value: 'BOOK_TITLE'}
    ]);

    const [filterOptions, setFilterOptions] = useState([

    ]);

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

    const handleSelectedBookTypeChange = (event: React.SyntheticEvent, newValue: string) => {
        setSelectedBookType(newValue);
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


    const renderFilterOptions = () => {
        if (selectedBookType === 'BATTLE_WORKBOOK') {
            return (
                <Stack spacing={2}>
                {battleFilterOption.map((filterOption) => (
                        <Stack direction='row'
                               divider={<Divider orientation="vertical" flexItem></Divider>}
                               alignItems={"center"}
                               spacing={2}
                        >
                            <Typography width='20%' sx={{flexShrink: 0}}>
                                {filterOption.label}
                            </Typography>
                            <Tabs value={selectedTestType} onChange={handleTestTypeChange}>
                                {testType.map((item) => (
                                    <Tab label={item} value={item}/>
                                ))}
                            </Tabs>
                        </Stack>
                ))}
                </Stack>
            );
        } else if (selectedBookType === 'SUPPLEMENT') {
            return (
                <Stack spacing={2}>
                    {supplementFilterOption.map((filterOption) => (
                        <Stack direction='row'
                               divider={<Divider orientation="vertical" flexItem></Divider>}
                               alignItems={"center"}
                               spacing={2}
                        >
                            <Typography width='20%' sx={{flexShrink: 0}}>
                                {filterOption.label}
                            </Typography>
                            <Tabs value={selectedTestType} onChange={handleTestTypeChange}>
                                {testType.map((item) => (
                                    <Tab label={item} value={item}/>
                                ))}
                            </Tabs>
                        </Stack>
                    ))}
                </Stack>
            );
        } else if (selectedBookType === 'PRACTICE_TEST') {
            return (
                <Stack spacing={2}>
                    {practiceTestFilterOption.map((filterOption) => (
                        <Stack direction='row'
                               divider={<Divider orientation="vertical" flexItem></Divider>}
                               alignItems={"center"}
                               spacing={2}
                        >
                            <Typography width='20%' sx={{flexShrink: 0}}>
                                {filterOption.label}
                            </Typography>
                            <Tabs value={selectedTestType} onChange={handleTestTypeChange}>
                                {testType.map((item) => (
                                    <Tab label={item} value={item}/>
                                ))}
                            </Tabs>
                        </Stack>
                    ))}
                </Stack>
            );
        }else if (selectedBookType === 'TEXTBOOK_WORKBOOK') {
            return (
                <Stack spacing={2}>
                    {textbookFilterOption.map((filterOption) => (
                        <Stack direction='row'
                               divider={<Divider orientation="vertical" flexItem></Divider>}
                               alignItems={"center"}
                               spacing={2}
                        >
                            <Typography width='20%' sx={{flexShrink: 0}}>
                                {filterOption.label}
                            </Typography>
                            <Tabs value={selectedTestType} onChange={handleTestTypeChange}>
                                {testType.map((item) => (
                                    <Tab label={item} value={item}/>
                                ))}
                            </Tabs>
                        </Stack>
                    ))}
                </Stack>
            );
        }
    }



    return (
        <Page>
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
                        <AddSettingButton>+</AddSettingButton>
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
                        <AddSettingButton>+</AddSettingButton>
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
                        <AddSettingButton>+</AddSettingButton>
                    </Box>
                </Stack>
                <Stack sx={{pt: 1}} direction="row">
                    <Tabs value={selectedBookType} onChange={handleSelectedBookTypeChange}>
                        {bookTypes.map((bookType) => (
                            <Tab label={bookType.label} value={bookType.value}/>
                        ))}
                    </Tabs>
                    <AddSettingButton>+</AddSettingButton>
                </Stack>
                <Box
                    sx={{border: '1px solid black', mt: 1}}
                >
                    {renderFilterOptions()}
                    <Stack spacing={2} sx={{mt:2}}>
                        {commonFilterOption.map((filterOption) => (
                            <Stack direction='row'
                                   divider={<Divider orientation="vertical" flexItem></Divider>}
                                   alignItems={"center"}
                                   spacing={2}
                            >
                                <Typography width='20%' sx={{flexShrink: 0}}>
                                    {filterOption.label}
                                </Typography>
                                <Tabs value={selectedTestType} onChange={handleTestTypeChange}>
                                    {testType.map((item) => (
                                        <Tab label={item} value={item}/>
                                    ))}
                                </Tabs>
                            </Stack>
                        ))}
                    </Stack>

                </Box>
            </Container>
        </Page>
    );
};

export default SearchPage;