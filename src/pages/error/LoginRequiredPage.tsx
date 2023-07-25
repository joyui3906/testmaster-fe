import styled from '@emotion/styled';
import {Box, Button, Typography} from '@mui/material';
//import LoginDialog from '@src/dialogs/login/LoginDialog';
import useAuth from '@src/hooks/useAuth';
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

const getMessageByLoginStatus = (loginStatusStr?: string) => {
  if (!loginStatusStr) {
    return '로그인이 필요합니다.';
  }
  const loginStatus = loginStatusStr as LoginStatusType;
  switch (loginStatus) {
    case 'token-expired':
      return '장시간 활동이 감지되지 않아 로그아웃 되었습니다.';
    case 'not-login':
      return '로그인이 필요합니다.';
    default:
      return '로그인 정보가 잘못되어 재로그인이 필요합니다.';
  }
};

const LoginRequiredPage = () => {
  // state
  const [openLoginDialog, setOpenLoginDialog] = useState(true);

  // hooks
  const navigate = useNavigate();
  const auth = useAuth();

  // handlers
  const handleClickOpenLoginDialog = () => {
    setOpenLoginDialog(true);
  };

  const handleOnCloseLoginDialog = () => {
    setOpenLoginDialog(false);
  };

  const handleOnSuccessLogin = () => {
    setOpenLoginDialog(false);
    navigate(0);
  };

  return (
    <Page>
      <Box>
        <ContentStyle style={{ textAlign: 'center', alignItems: 'center' }}>
          <Typography variant="h3" paragraph>
            {getMessageByLoginStatus(auth.getLoginStatus())}
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>로그인 후 다시 시도해주세요.</Typography>
          <Button variant="contained" onClick={handleClickOpenLoginDialog} style={{ marginTop: '28px' }}>
            로그인
          </Button>
        </ContentStyle>
        {/*<LoginDialog open={openLoginDialog} onSuccessLogin={handleOnSuccessLogin} onClose={handleOnCloseLoginDialog} />*/}
      </Box>
    </Page>
  );
};

export default LoginRequiredPage;
