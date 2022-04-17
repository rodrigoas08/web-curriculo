import * as S from './styles';
import { Works } from 'templates';
import { Button } from 'components';

const Home = () => {
  return (
    <>
      <S.Container>
        <S.Section>
          <S.Title>Rodrigo Sobral</S.Title>
          <S.Subtitle>
            Técnico em informática | estagiário desenvolvedor front-end
          </S.Subtitle>
          {/* <S.Paragraph>
            Seu <span>computador ficou lento</span> e não sabe{' '}
            <span> como resolver</span> ?
          </S.Paragraph> */}
          <S.Seta src={process.env.PUBLIC_URL + '/img/seta.svg'} />
          <Button rippling>
            <a href="home#servicos">Conheça meus serviços</a>
          </Button>
        </S.Section>
      </S.Container>

      <Works />
    </>
  );
};

export default Home;
