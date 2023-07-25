import styled from "@emotion/styled";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #F5F6FA;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  min-width: 320px;

  position: fixed;
`;

export const BREAK_POINT = {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
};


export const SIZE = {
    mobile: {
        minWidth: '320px',
        minHeight: '720px',
    },
    page: {
        maxWidth: '848px',
        maxHeight: '803px',
    },
    gnb: {
        width: '1280px',
        height: '72px',
        heightValue: 72,
        shadow: '4px',
    },
    loading: {
        width: '80px',
        height: '80px',
    },
    // TODO : Naming 일관성이 깨졌음.
    select: {
        item_height: 46,
        item_padding_top: 8,
        item_count_default_shown: 4.15,
    },
    homeCard: {
        maxWidth: '1920px',
        maxHeight: '940px',
    },
    dialog: {
        borderRadius: '12px',
        title: {
            headerHeight: '62px',
        },
    },
};

export const SPACING = {
    page: {
        marginTop: '48px',
        marginBottom: '120px',
        title: {
            marginBottom: '16px',
        },
    },
    gnb: {
        marginBottom: '5px',
    },
};

export const RowEmptyBox = styled.div`
  height: ${SPACING.page.marginBottom};
  background-color: transparent;
`;