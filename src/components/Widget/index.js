import styled from 'styled-components'

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.colors.primary };
  background-color: ${({ theme }) => theme.colors.primary };
  opacity: 0.9;
  border-radius: 4px;
  overflow: hidden;

  h1, h2, h3 {
    @import url('https://fonts.googleapis.com/css2?family=Potta+One&display=swap');
    font-family: 'Potta One', cursive;
    font-size: 1.7rem;
    text-shadow: -2px 0 #ffef22, 0 1px #ffef22, 1px 0 #ffef22, 0 -2px #ffef22;
    color: ${({ theme }) => theme.colors.wrong };
    font-weight: 700;
    margin: 0 2px;
  }
  p {
    font-size: 14px;
    font-weight: 500;
    line-height: 1;
  }
`

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 15px 4px;
  background: linear-gradient(to right, #5433FF, #20BDFF, #0082c8);
`

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`

export default Widget