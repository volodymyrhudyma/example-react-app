import styled, { css } from 'styled-components';

interface ILayoutProps {
  isCard: boolean;
}

export const Wrapper = styled.div<ILayoutProps>`
  margin-bottom: 1rem;

  ${({ isCard }) =>
    isCard &&
    css`
      margin-right: 3rem;
      margin-bottom: 3rem;
    `}
`;

export const CardInner = styled.div<ILayoutProps>`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;

  ${({ isCard }) =>
    isCard &&
    css`
      display: block;
    `}
`;

export const UserWrapper = styled.div<ILayoutProps>`
  display: flex;
  min-width: 220px;

  ${({ isCard }) =>
    isCard &&
    css`
      width: 100%;
      margin-bottom: 2rem;
    `}
`;

export const AvatarWrapper = styled.div`
  margin-right: 2rem;
`;

export const DetailsWrapper = styled.div<ILayoutProps>`
  margin-right: 2rem;

  ${({ isCard }) =>
    isCard &&
    css`
      margin-right: 0;
    `}
`;

export const FullName = styled.div`
  margin-bottom: 0.5rem;
`;

export const Email = styled.div`
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.article.author.email.color};
`;

export const Position = styled.div`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.article.author.position.color};
`;

export const TeaserWrapper = styled.div<ILayoutProps>`
  margin-right: 3rem;
  line-height: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;

  ${({ isCard }) =>
    isCard &&
    css`
      margin-right: 0;
    `}
`;

export const TitleWrapper = styled.div<ILayoutProps>`
  margin-bottom: 1rem;

  ${({ isCard }) =>
    isCard &&
    css`
      margin-bottom: 2rem;
    `}
`;

export const TextWrapper = styled.div``;

export const TagsWrapper = styled.div<ILayoutProps>`
  margin-right: 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  min-width: 150px;
  padding-left: 2rem;

  ${({ isCard }) =>
    isCard &&
    css`
      display: none;
    `}
`;

export const ActionsWrapper = styled.div<ILayoutProps>`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 2rem;
  min-width: 150px;

  ${({ isCard }) =>
    isCard &&
    css`
      display: none;
    `}
`;

export const DeleteWrapper = styled.div`
  cursor: pointer;
  display: block;
`;

export const ReadWrapper = styled.div`
  margin-left: 1.5rem;
`;

export const ReadMarkWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`;

export const LimitWidth = styled.div`
  max-width: 140px;
`;

export const EndWrapper = styled.div`
  display: flex;
  align-items: center;
`;
