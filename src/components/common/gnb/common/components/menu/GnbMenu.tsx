import { PATH } from '@src/constants/path';
import useMediaQuery, { getMediaQuery } from '@src/hooks/components/useMediaQuery';
import useMessageDialog from '@src/hooks/components/useMessageDialog';
//import useAuth from '@src/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import LoggedInMobileMenu from './mobile/LoggedInMobileMenu';
import NonLoginMobileMenu from './mobile/NonLoginMobileMenu';
import LoggedInPcMenu from './pc/LoggedInPcMenu';
import NonLoginPcMenu from './pc/NonLoginPcMenu';

interface GnbMenuProps {
  subscriptionButtonClassName?: string;
  onLoginClick?: () => void;
  onSubscriptionClick?: () => void;
  onRegisterClick?: () => void;
}

const GnbMenu = ({ subscriptionButtonClassName, onLoginClick, onSubscriptionClick, onRegisterClick }: GnbMenuProps) => {
  // hooks
  const isPc = useMediaQuery(getMediaQuery('up', 'md'));
  const navigate = useNavigate();
  const { isLogin, logout, openLoginDialog } = useAuth();
  const { openMessageDialog } = useMessageDialog();

  // handlers
  const handleModifyClick = () => {
    navigate(PATH.MODIFY_MY_INFO.getPath());
  };

  const handleMyPageClick = () => {
    navigate(PATH.MY_PAGE.getPath());
  };

  const handleLogoutClick = async () => {
    try {
      //await logout();
      navigate(PATH.HOME.getPath());
    } catch (err) {
      openMessageDialog(err);
    }
  };

  const handleRegisterClick = () => {
    if (onRegisterClick) {
      onRegisterClick();
      return;
    }
    navigate(PATH.REGISTER.getPath());
  };

  const handleLoginClick = () => {
    if (onLoginClick) {
      onLoginClick();
      return;
    }
    openLoginDialog();
  };

  const handleSubscriptionClick = () => {
    if (onSubscriptionClick) {
      onSubscriptionClick();
      return;
    }
    navigate(PATH.QUEST_ACCOUNT_REGISTER.getPath());
  };

  if (isLogin()) {
    if (isPc) {
      return <LoggedInPcMenu onMyPageClick={handleMyPageClick} onLogoutClick={handleLogoutClick} />;
    }
    return <LoggedInMobileMenu onMyPageClick={handleMyPageClick} onLogoutClick={handleLogoutClick} />;
  }

  if (isPc) {
    return (
      <NonLoginPcMenu
        subscriptionButtonClassName={subscriptionButtonClassName}
        onGoRegisterClick={handleRegisterClick}
        onLoginClick={handleLoginClick}
        onSubscriptionClick={handleSubscriptionClick}
      />
    );
  }
  return (
    <NonLoginMobileMenu
      subscriptionButtonClassName={subscriptionButtonClassName}
      onGoRegisterClick={handleRegisterClick}
      onLoginClick={handleLoginClick}
      onSubscriptionClick={handleSubscriptionClick}
    />
  );
};

export default GnbMenu;
