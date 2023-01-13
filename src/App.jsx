import styled, { createGlobalStyle } from 'styled-components';
import Board from './pages/Board/Board';
import Header from './components/Header/Header';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: bisque;
  }
`;

const AppWrapper = styled.div`
  text-align: center;
`;

function App() {
    return (
        <>
            <GlobalStyle />
            <AppWrapper>
                <Header />
                <Board />
            </AppWrapper>
        </>
    );
}

export default App;
