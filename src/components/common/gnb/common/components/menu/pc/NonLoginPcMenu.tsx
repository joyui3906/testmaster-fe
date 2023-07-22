import { LinkText, MenuDivider, MenuGroup, NonLoginPcMenuBase, QuestAddButton } from './NonLoginPcMenu.style';
import {Button} from "@mui/material";

const NonLoginPcMenu = ({
  subscriptionButtonClassName,
  onGoRegisterClick,
  onLoginClick,
  onSubscriptionClick,
}: NonLoginMenuProps) => (
  <NonLoginPcMenuBase>
    <MenuGroup>
      <Button onClick={onGoRegisterClick}>
        <LinkText>회원가입</LinkText>
      </Button>
      <MenuDivider />
      <Button onClick={onLoginClick}>
        <LinkText>로그인</LinkText>
      </Button>
    </MenuGroup>
    <QuestAddButton
      variant="outlined"
      className={subscriptionButtonClassName}
      onClick={onSubscriptionClick}
    >
      신청하기
    </QuestAddButton>
  </NonLoginPcMenuBase>
);

export default NonLoginPcMenu;
