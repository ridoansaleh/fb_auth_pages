import styled from "styled-components";

export const Container = styled.div`
  min-width: 1024px;
  background-color: #3b5998;
  height: 50px;
  padding: 5px 40px;
  color: #fff;

  @media only screen and (min-width: 1273px) {
    padding-left: calc((100vw - 1233px) / 2);
    padding-right: calc((100vw - 1233px) / 2);
  }

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: calc(100% - 10px);

    h4 {
      cursor: pointer;
    }

    > div {
      display: flex;

      h4 {
        margin: 0;
        cursor: default;
      }

      img {
        height: 24px;
        width: 24px;
        margin-left: 15px;
      }
    }
  }

  #content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 60px);

    img {
      height: 256px;
      width: 256px;
    }
  }
`;
