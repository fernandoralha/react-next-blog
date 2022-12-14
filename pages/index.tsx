import { ServerResponse } from 'http'
import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import ReactPaginate from 'react-paginate'
import CharacterCard from '../components/CharacterCard'
import CharacterGrid from '../components/CharacterGrid'
import { Character } from '../sdk/@types/Character'
import CharacterService from '../sdk/services/character.service'
import Router from "next/router";
import PageGrid from '../components/PageGrid'

interface HomeProps {
  characteres?: Character.Paginated;
}

const Home: NextPage = (props: HomeProps) => {
  const { characteres } = props;
  return (
   <PageGrid>
      <Head>
        <title>Marvel Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <CharacterGrid>
        {characteres?.results?.map((character) => {
          return <CharacterCard  key={character.id} item={character} />;
        })}
      </CharacterGrid>
      <ReactPaginate
        containerClassName={"Pagination"}
        pageCount={characteres?.count || 0}
        marginPagesDisplayed={0}
        pageRangeDisplayed={3}
        previousLabel={"<"}
        nextLabel={">"}
        hrefBuilder={(page) => `/?page=${page}`}
        onPageChange={(page) => {
          Router.push(`/?page=${page.selected + 1}`);
        }}
      />

    </PageGrid>
  )
}

export default Home

function sendToHomePage(res: ServerResponse) {
  res.statusCode = 302;
  res.setHeader("Location", "/?page=1");
  return { props: {} };
}

interface HomeProps {
  characteres?: Character.Paginated;
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async ({
  query,
  res,
}) => {
  const { page: _page } = query;

  const page = _page ? Number(_page) : 1;

  if (isNaN(page) || page < 1) {
    return sendToHomePage(res);
  }

  const characteres = await CharacterService.getAll({ page: Number(page) - 1 });
  // console.log('**** characteres', characteres);

  if (!characteres.results.length) {
    return sendToHomePage(res);
  }

  return {
    props: {
      characteres,
    },
  };
};
