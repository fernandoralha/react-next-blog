import { transparentize } from 'polished';
import styled from 'styled-components';
import { Character } from '../sdk/@types/Character';
import formatDate from '../sdk/utils/formatDate';
import { generatePathImage } from '../sdk/utils/generatePathImage';

interface CharacterProps {
    item: Character.Item;
}

export default function CharacterCard(props: CharacterProps) {
    return (
        <Wrapper>
            <Thumbnail bg={ generatePathImage(props.item.thumbnail) }/>
            <Info>
                <Title>{props.item.name}</Title>
                <PublishDate>{ formatDate(props.item.modified)}</PublishDate>
            </Info>
        </Wrapper>
    )
}

const PublishDate = styled.h1`
    position: absolute;
    bottom: 0;
    margin-bottom: 20px;
    color: ${(p => p.theme.activeElementForeground)};
    text-transform: uppercase;
    font-weight: bolder;
    font-size: 0.8rem;
`;

const Title = styled.div`
    position: absolute;
    top: 0;
    margin-top: 20px;
    color: ${(p => p.theme.primaryForeground)};
    text-transform: uppercase;
    font-weight: bolder;
    font-size: 0.9rem;
`;

const Info = styled.div`
  position: absolute;
  top: 50%;
  left: 20px;
  height: 50%;
  width: 100%;
  z-index: 2;

  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: start;
`;

const Thumbnail = styled.div<{ bg: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50%;
  z-index: 2;

  background-image: url(${(p) => p.bg});
  background-position: center;
  background-size: cover;
  border-bottom: 4px solid ${(p => p.theme.primaryBackground)};

  border-top-left-radius: ${(p) => p.theme.borderRadius};
  border-top-right-radius: ${(p) => p.theme.borderRadius};
`;


const Wrapper = styled.a`
  position: relative;
  min-height: 256px;
  z-index: 1;
  background-color: ${(p) => p.theme.activeElementBackground};
  color: ${(p) => p.theme.activeElementForeground};
  border-radius: ${(p) => p.theme.borderRadius};
  box-shadow: 0 3px 6px
    ${(p) => transparentize(0.9, p.theme.activeElementForeground)};

  transition: 0.25s ease;

  * {
    transition: 0.25s ease;
  }

  &:hover,
  &:focus {
    background-color: ${(p) => p.theme.primaryBackground};
    box-shadow: 0 0 0 4px
      ${(p) => transparentize(0.7, p.theme.primaryBackground)};

    outline: none;

    * {
      color: ${(p) => p.theme.primaryForeground};
    }
    transform: scale(1.1);
    z-index: 999;
  }
`;