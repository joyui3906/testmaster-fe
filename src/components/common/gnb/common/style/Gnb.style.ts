import styled from '@emotion/styled';
import { GnbProps } from '../../Gnb.type';
import {Typography} from "@mui/material";
import {Breakpoint, Color} from "@src/components/common";

export const GnbBase = styled.div<GnbProps>`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  background-color: ${Color.white};

  box-shadow: ${(props) => (props.elevation !== 'mobile' ? '0px 8px 16px rgba(165, 174, 190, 0.16)' : 'none')};

  width: 100%;
  min-height: 72px;

  padding: 0px 20px;

  @media (max-width: ${Breakpoint.sm}px) {
    box-shadow: ${(props) => (props.elevation !== 'pc' ? '0px 8px 16px rgba(165, 174, 190, 0.16)' : 'none')};
  }
`;

export const GnbContentArea = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;

  width: 100%;
  max-width: 1280px;
`;

export const LogoArea = styled.div`
  width: 100%;
  max-width: 256px;
`;

export const LinkArea = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;

  width: fit-content;
  list-style: none;

  gap: 54px;

  @media (max-width: ${Breakpoint.md}px) {
    gap: 18px;
    display: none;
  }
`;

export const MenuArea = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: flex-end;

  margin-left: auto;

  width: 100%;
  max-width: 480px;
`;

export const LinkList = styled.ul`
  list-style: none;
  margin: 0px 12px;
  margin-left: 80px;
  padding: 0;
  flex-grow: 80;
  @media (max-width: 720px) {
    margin-left: 30px;
  }
  @media (max-width: ${Breakpoint.sm}px) {
    display: none;
  }
`;

export const LinkLabel = styled(Typography)`
  white-space: nowrap;
  color: ${Color.grey900};
`;

export const LinkItem = styled.li`
  display: flex;
  flex-direction: row;
  gap: 6px;
  
  align-items: center;

  float: left;
  padding: 0;
  position: relative;
  font-weight: 700;
  color: ${Color.grey600};

  user-select: none;

  &:before {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -3px;
    left: 50%;
    transform: translate(-50%,0%);
    background-color: ${Color.primary};
    transform-origin: center;
    visibility: hidden;
    transition: all 0.4s ease-in-out;
  },

  &:hover:before {
    visibility: visible;
    width: 100%;
  },
`;