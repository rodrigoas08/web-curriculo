import styled, { css } from 'styled-components';

export const Wrapper = styled.div.attrs({ id: 'projetos' })`
  ${({ theme }) => css`
    width: 100%;
    height: auto;
    display: flex;
    padding: 14rem 0;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    @media (max-width: ${theme.breakpoints.ipad}) {
      ${SubTitle} {
        font-size: ${theme.font.sizes.small};
      }
    } ;
  `}
`;

export const SubTitle = styled.p`
  ${({ theme }) => css`
    text-align: center;
    font-weight: lighter;
    padding-top: ${theme.spacings.large};
    font-size: ${theme.font.sizes.medium};
    text-shadow: 0 0.4rem 0.2rem ${theme.colors.black};
  `}
`;

export const Section = styled.section`
  ${({ theme }) => css`
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: ${theme.spacings.small};
    padding: ${theme.spacings.xxsmall};
    margin-top: ${theme.spacings.large};

    @media (max-width: ${theme.breakpoints.desktop}) {
      align-items: center;
    }

    @media (max-width: ${theme.breakpoints.ipad}) {
      flex-direction: column;
    }
  `}
`;
