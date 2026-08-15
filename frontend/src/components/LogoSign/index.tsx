import { Box, styled } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { getLocalizedHomeUrl } from '../../utils/urlPaths';

const LogoWrapper = styled('a')(
  ({ theme }) => `
    display: flex;
    align-items: center;
    justify-content: center;
    width: 390px;
    max-width: 90%;
    height: 58px;
    margin: 0 auto 18px;
    text-decoration: none;

    ${theme.breakpoints.down('sm')} {
      width: 300px;
      height: 46px;
    }
  `
);

const LogoMark = styled(Box)(
  () => `
    display: block;
    width: 100%;
    height: 100%;
    background-color: #E86D1A;

    -webkit-mask-image: url('/static/images/logo/victa-white.png');
    mask-image: url('/static/images/logo/victa-white.png');

    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;

    -webkit-mask-position: center;
    mask-position: center;

    -webkit-mask-size: 438px 438px;
    mask-size: 438px 438px;
  `
);

interface OwnProps {
  white?: boolean;
}

function Logo(_: OwnProps) {
  const { i18n } = useTranslation();

  return (
    <LogoWrapper
      href={getLocalizedHomeUrl('', i18n.language)}
      aria-label="Victa"
    >
      <LogoMark
        role="img"
        aria-label="Victa — A fórmula da excelência"
      />
    </LogoWrapper>
  );
}

export default Logo;
