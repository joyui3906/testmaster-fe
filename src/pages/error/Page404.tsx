import styled from '@emotion/styled';
import {Box, Button, Typography} from '@mui/material';
import { PATH } from '@src/constants/path';
import useInterval from '@src/hooks/useInterval';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

const Page404 = ({ delayTimeMills = 0 }: Page404Props) => {
  // states
  const [isShow, setShow] = useState(delayTimeMills === 0);

  // hooks
  const navigate = useNavigate();

  const timer = useInterval(() => {
    setShow(true);
  }, delayTimeMills);

  // handlers
  const handleClickGotoHome = () => {
    navigate(PATH.HOME.getPath());
  };

  return (
    <Page>
      <Box>
        {isShow ? (
          <ContentStyle style={{ textAlign: 'center', alignItems: 'center' }}>
            <Typography variant="h3" paragraph>
              존재하지 않는 페이지 입니다.
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>올바른 주소를 입력해주세요.</Typography>
            <Button variant="contained" onClick={handleClickGotoHome}>
              홈으로 돌아가기
            </Button>
          </ContentStyle>
        ) : null}
      </Box>
    </Page>
  );
};

export default Page404;
