import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const MobileMenuBase = styled.div`
  display: flex;
  flex-direction: row;
  gap: 21px;
`;

export const ToggleButton = styled(Button)`
  width: 32px;
  min-width: 0;
  padding: 0;
`;
