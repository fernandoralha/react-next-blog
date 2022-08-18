import { ReactNode } from "react";
import styled from "styled-components";
import { Constants } from "../core/common/constants";

interface ContentProps {
    children: ReactNode
}

export default function Content(props: ContentProps) {
    return (
        <Wrapper>
            <Container>{ props.children }</Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  margin-top: ${Constants.HEADER_HEIGHT}px;
  min-height: calc(100vh - ${Constants.HEADER_HEIGHT}px - ${Constants.FOOTER_HEIGHT}px);

  @media screen and (max-width: 767px) {
    margin-top: ${Constants.MOBILE_HEADER_HEIGHT}px;
  }
`;

const Container = styled.div`
  max-width: 848px;
  margin: auto;
  padding: 16px;
`;
