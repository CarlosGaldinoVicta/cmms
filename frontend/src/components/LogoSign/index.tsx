import { styled } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { getLocalizedHomeUrl } from '../../utils/urlPaths';

const LogoWrapper = styled('a')(
  ({ theme }) => `
    display: flex;
    align-items: center;
    justify-content: center;
    width: 360px;
    max-width: 90%;
    margin: 0 auto 18px;
    text-decoration: none;

    ${theme.breakpoints.down('sm')} {
      width: 280px;
    }
  `
);

const LogoImage = styled('img')(
  () => `
    display: block;
    width: 100%;
    height: auto;
    object-fit: contain;
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
      <LogoImage
        src="/static/images/logo/victa-login.png"
        alt="Victa — A fórmula da excelência"
      />
    </LogoWrapper>
  );
}

export default Logo;
