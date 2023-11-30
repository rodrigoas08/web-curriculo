import styled, { css } from 'styled-components';
import { IconProps } from '.';

export const Span = styled.span`
  ${({ theme }) => css`
    filter: drop-shadow(0rem 0rem 0.2rem ${theme.colors.primary});
  `}
`;

export const WrapperIcon = styled.div<IconProps>`
  ${({ theme, width, height }) => css`
    width: auto;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    clip-path: polygon(
      25% 0%,
      75% 0%,
      100% 25%,
      100% 75%,
      75% 100%,
      75% 75%,
      75% 100%,
      25% 100%,
      0% 75%,
      0% 25%
    );

    background-color: rgba(0, 0, 0);

    svg {
      padding: 1rem;
      width: ${width}rem;
      height: ${height}rem;
      fill: url('#gradient');
      transition: 0.2s linear;
      filter: drop-shadow(0 0.3rem 0.2rem ${theme.colors.black});

      :hover {
        transform: scale(1.2);
      }
    }
  `}
`;
