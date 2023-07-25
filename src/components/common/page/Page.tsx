import {RowEmptyBox} from '@src/styles/CommonStyle';
import {PageContainer, PageFooter, PageTitle, TopEmptyBox, PageBase} from './Page.style';
import {Box} from "@mui/material";

export interface PageProps {
    className?: string;
    style?: React.CSSProperties;
    scrollAreaStyle?: React.CSSProperties;
    title?: string;
    titleVariant?: any;
    subTitle?: React.ReactNode;
    children?: React.ReactNode;
    footer?: React.ReactNode;
    disableTopMargin?: boolean;
    disableBottomMargin?: boolean;
    titleStyle?: React.CSSProperties;
    onScroll?: (e: any) => void;
}

const Page = ({
                  className,
                  style,
                  scrollAreaStyle,
                  titleVariant = 'h1',
                  title,
                  subTitle,
                  children,
                  footer,
                  disableTopMargin = false,
                  disableBottomMargin = false,
                  titleStyle,
                  onScroll,
              }: PageProps) => (
    <PageBase onScroll={onScroll}>
        <PageContainer className={className} style={{...style}}>
            {!disableTopMargin ? <TopEmptyBox/> : null}
            {title ? (
                <Box>
                    <PageTitle variant={titleVariant} style={{whiteSpace: 'pre-line', ...titleStyle}}>
                        {title}
                    </PageTitle>
                    {subTitle}
                </Box>
            ) : null}
            {children}
            {!disableBottomMargin ? <RowEmptyBox/> : null}
            <PageFooter>{footer}</PageFooter>
        </PageContainer>
    </PageBase>
);

export default Page;
