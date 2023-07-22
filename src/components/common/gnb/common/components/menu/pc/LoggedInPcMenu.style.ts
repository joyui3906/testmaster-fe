import styled from '@emotion/styled';
import {Button, ListItem, Typography} from "@mui/material";
import {Color} from "@src/components/common";

export const MenuBase = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;

  gap: 24px;
`;

export const DropdownLabel = styled(Typography)`
  color: ${Color.grey600};
  font-weight: 500;
  line-height: 140%;
`;

export const DropdownListItem = styled(ListItem)`
  padding: 8px 14px;
  text-align: center;
`;

export const QuestAddButton = styled(Button)`
  padding: 8px 12px;
  border-radius: 6px;
`;
