import React from 'react';
import Container from '../Container';
import Header from '../Header';
import Sidebar from '../Sidebar';
import './Layout.css';

export default ({ children, title }) => (
  <div>
    <Header title={title} />
    <main role="main">
      <Container>
        {children}
        <aside className="aside">
          <Sidebar
            title="Sobre mim"
            description="Um desenvolvedor apaixonado pelo que faz, que busca aprender tudo que for relevante no universo do Javascript, em busca de melhoria continua..."
          />
          <Sidebar
            title="Sobre o blog"
            description="Você vai ver aqui, muito conteudo sobre os tópicos na qual eu estudo, com uma abordagem minha sobre determinados temas, fazendo com que eu entenda melhor o que estou passando, e possa talvez auxiliar você a conceituar alguma coisa de forma mais clara"
          />
        </aside>
      </Container>
    </main>
  </div>
);