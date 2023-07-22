import Logo from '../../../../logo.svg';
import { GnbBase, GnbContentArea, LinkArea, LogoArea, MenuArea } from '../common/style/Gnb.style';
import GnbMenu from '../common/components/menu/GnbMenu';
import { GnbProps } from '../Gnb.type';

const DefaultGnb = (props: GnbProps) => (
    <GnbBase {...props}>
        <GnbContentArea>
            <LogoArea>
                로고
            </LogoArea>
            <LinkArea>
            </LinkArea>
            <MenuArea>
                <GnbMenu />
            </MenuArea>
        </GnbContentArea>
    </GnbBase>
);

export default DefaultGnb;
