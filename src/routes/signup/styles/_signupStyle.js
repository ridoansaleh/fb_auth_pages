import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  min-width: 1024px;

  a {
    text-decoration: none;
    color: #fff;
    font-size: 11px;
    margin-top: 5px;
  }

  @media only screen and (min-width: 1273px) {
    > section,
    footer {
      padding-left: calc((100vw - 1233px) / 2);
      padding-right: calc((100vw - 1233px) / 2);
    }
  }
`;
