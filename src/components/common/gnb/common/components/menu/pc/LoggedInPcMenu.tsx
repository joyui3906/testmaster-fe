import {Typography} from '@mui/material';
import {PATH} from '@const/path';
import useAuth from '@hooks/useAuth';
import {useNavigate} from 'react-router-dom';
import {DropdownLabel, DropdownListItem, MenuBase, QuestAddButton} from './LoggedInPcMenu.style';

const LoggedInPcMenu = ({onMyPageClick, onLogoutClick}: LoggedInMenuProps) => {
    // hooks
    const {loginInfo} = useAuth();
    const navigate = useNavigate();

    // handlers
    const handleClickGoQuestAddPage = () => {
        navigate(PATH.QUEST_ADD.getPath());
    };

    return (
        <MenuBase>
            <Typography>{loginInfo?.name} 회원님! 환영합니다. </Typography>
            <QuestAddButton variant="outlined" onClick={handleClickGoQuestAddPage}>
                퀘스트 등록
            </QuestAddButton>
        </MenuBase>
    );
};

export default LoggedInPcMenu;
