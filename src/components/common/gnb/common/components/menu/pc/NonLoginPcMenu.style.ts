import styled from '@emotion/styled';
import {Button, Divider, Typography} from "@mui/material";
import {Color} from "../../../../../../../components/common";

export const NonLoginPcMenuBase = styled.div`
  display: flex;
  flex-direction: row;

  gap: 8px;
`;

export const MenuGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const MenuDivider = styled(Divider)`
  height: 12px;
`;

export const LinkText = styled(Typography)`
  color: ${Color.grey600};
`;

export const QuestAddButton = styled(Button)`
  min-width: 88px;

  padding: 8px 12px;
  border-radius: 6px;
`;
