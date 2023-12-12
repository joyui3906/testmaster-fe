import {LinkText, MenuDivider, MenuGroup, NonLoginPcMenuBase} from './NonLoginPcMenu.style';
import {Button} from "@mui/material";

const NonLoginPcMenu = ({
                            onGoRegisterClick,
                            onLoginClick,
                        }: NonLoginMenuProps) => (
    <NonLoginPcMenuBase>
        <MenuGroup>
            <Button onClick={onGoRegisterClick}>
                <LinkText>회원가입</LinkText>
            </Button>
            <MenuDivider/>
            <Button onClick={onLoginClick}>
                <LinkText>로그인</LinkText>
            </Button>
        </MenuGroup>
    </NonLoginPcMenuBase>
);

export default NonLoginPcMenu;
