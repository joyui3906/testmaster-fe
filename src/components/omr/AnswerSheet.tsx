import React from 'react';
import {FormControlLabel, Grid} from '@mui/material';
import {AnswerBox, MarkedAnswerBox} from './AnswerSheet.style';

const AnswerSheet = () => {
    const options = ['1', '2', '3', '4', '5']; // 답변 옵션

    const [selectedOptions, setSelectedOptions] = React.useState<string[]>([]);

    const handleCheckboxChange = (option: string) => {
        const currentIndex = selectedOptions.indexOf(option);
        const newSelectedOptions = [...selectedOptions];

        if (currentIndex === -1) {
            newSelectedOptions.push(option);
        } else {
            newSelectedOptions.splice(currentIndex, 1);
        }

        setSelectedOptions(newSelectedOptions);
    };

    return (
        <Grid container spacing={1}>
            {options.map((option) => (
                <Grid item key={option}>
                    <FormControlLabel
                        control={
                            selectedOptions.includes(option) ? (
                                    <MarkedAnswerBox
                                        icon={<span>{option}</span>}
                                        checkedIcon={<span>{option}</span>}
                                        checked={true}
                                        onChange={() => handleCheckboxChange(option)}
                                        color="primary"
                                    />
                                ) :
                                (
                                    <AnswerBox
                                        icon={<span>{option}</span>}
                                        checkedIcon={<span>{option}</span>}
                                        checked={false}
                                        onChange={() => handleCheckboxChange(option)}
                                        color="primary"
                                    />)
                        }
                        label={option}
                        labelPlacement={"bottom"}
                    />

                </Grid>
            ))}
        </Grid>
    );
};

export default AnswerSheet;