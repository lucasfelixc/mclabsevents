import styled from "styled-components";

interface ShowDisplay {
  isActiveDisplay: boolean;
}

export const Container = styled.div<ShowDisplay>`
  ${props => props.isActiveDisplay ? `display: flex` : `display: none`};
  flex-direction: column;
  align-items: center;

  width: 100%;

  .contentCall {
    width: 80%;

    margin-top: 2rem;

    > h1 {
      color: ${props => props.theme.colors.purple800};
    }

    > p {
      font-size: 0.9rem;
      padding-top: 0.5rem;
    }
  }

  > p {
    color: ${props => props.theme.colors.gray200};

    width: 85%;
    margin-top: 2rem;
  }
`
