
import { ThemeProvider } from 'styled-components';
import Header from './Components/Header';
import Main from './Components/Main';
import { Container } from './Components/styles/Container.styled';
import GlobalStyle from './Components/styles/Global';
import Footer from './Components/Footer'
import { ChakraProvider } from '@chakra-ui/react';

const theme = {
  colors: {
    header:'#fff',
    main:'#fff',
    footer:'#495E57'
  },

  mobile: '768px',
}


function App() {
  return (
    <ChakraProvider>
      <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Container color='#495E57'>
          <Header />
          <Main />
          <Footer/>
        </Container>
      </>
    </ThemeProvider>
    </ChakraProvider>
  );
}

export default App;
