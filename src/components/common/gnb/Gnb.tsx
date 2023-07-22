import { getPathSpec } from '@src/constants/path';
import {CurrentGnbType, IsGnbOpen, IsMobileGnbMenuOpen} from '@src/states/GlobalState';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import DefaultGnb from './default/DefaultGnb';
import { GnbElevationType } from './Gnb.type';

const Gnb = () => {
    // global states
    const [mobileGnbMenuOpen, setMobileGnbMenuOpen] = useRecoilState(IsMobileGnbMenuOpen);
    const [isGnbOpen, setGnbOpen] = useRecoilState(IsGnbOpen);
    const [currentGnbType, setCurrentGnbType] = useRecoilState(CurrentGnbType);

    // states
    const [elevationType, setElevationType] = useState<GnbElevationType | undefined>();

    // hooks
    const location = useLocation();

    useEffect(() => {
        // 페이지 이동 시 마다 mobile gnb를 닫는다.
        setMobileGnbMenuOpen(false);
        // path에 따른 Gnb Style 교체
/*        const pathSpec = getPathSpec(location.pathname);
        if (pathSpec) {
            setCurrentGnbType(pathSpec.gnbType);
            setGnbOpen(pathSpec.open);
            setElevationType(pathSpec.elevation);
        }*/
    }, [location]);


    return <DefaultGnb open={isGnbOpen} elevation={elevationType} />;
};

export default Gnb;
