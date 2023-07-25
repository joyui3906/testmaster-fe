import styled from '@emotion/styled';
import { BREAK_POINT, SIZE, SPACING } from '@src/styles/CommonStyle';
import {Typography} from "@mui/material";

interface PageContentProps {
  hasFooter: boolean;
}

export const PageBase = styled.div`
  display: flex;
  width: 100%;

  flex-direction: column;
  align-items: center;

  // Page 전체 스크롤
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90vw;
  max-width: ${SIZE.page.maxWidth};
  align-items: center;

  @media (max-width: ${BREAK_POINT.sm}px) {
    width: 90%;
  }
`;

export const PageFooter = styled.div`
  width: 90vw;
  display: inline-flex;
  position: fixed;
  bottom: 12px;
  zindex: 99999;
`;

export const PageTitle = styled(Typography)`
  width: 100%;
  margin-bottom: ${SPACING.page.title.marginBottom};
`;

// TODO : Horizontal Scroll 제한
export const ScrollArea = styled.div<PageContentProps>`
  max-width: 90vw;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  // 모바일 화면에서 Content 스크롤
  @media (max-width: ${BREAK_POINT.sm}px) {
    width: 90vw;
    flex-direction: column;
    align-items: center;
    ::-webkit-scrollbar {
      display: none;
    }
    scrollbar-width: none;
    // Footer 영역 확보
    height: auto;
    // ${(props) => (props.hasFooter ? '100vh' : 'auto')}
    overflow-y: ${(props) => (props.hasFooter ? 'auto' : 'unset')};
  }
`;

export const TopEmptyBox = styled.div`
  width: 100%;
  margin-top: ${SPACING.page.marginTop};
`;

export const TitleBottomEmptyBox = styled.div`
  width: 100%;
  margin-bottom: 16px;
`;
