import Image from "next/image";
import styled from "styled-components";
import NotFoundImage from "../public/not_found.svg";
import Link from "next/link";
import { Constants } from "../core/common/constants";

export default function NotFound() {
  return (
    <Wrapper>
      <Image
        src={NotFoundImage}
        width={200}
        height={200}
        objectFit={"contain"}
        alt={"não encontrado"}
      />
      <h1>Página não encontrada</h1>
      <Link href={"/"} passHref>
        <BackToHome>Voltar para a Home</BackToHome>
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 24px;

  min-height: calc(100vh - ${Constants.HEADER_HEIGHT}px - ${Constants.FOOTER_HEIGHT}px);
`;

const BackToHome = styled.a`
  color: ${(p) => p.theme.primaryBackground};
  text-decoration: none;
`;
