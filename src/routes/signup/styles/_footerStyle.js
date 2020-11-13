import styled from "styled-components";

export const Wrapper = styled.footer`
  font-size: 12px;
  padding-bottom: 40px;

  ul {
    padding-left: 5px;
    li {
      margin-right: 20px;
      a {
        color: #3b5998;
      }
    }
  }

  ul#language {
    display: flex;
    list-style-type: none;
    margin-bottom: 30px;
  }

  > div {
    display: flex;
    justify-content: space-between;

    > div:nth-child(1) {
      li:nth-child(1) {
        color: #9a9a9a;
      }
    }

    ul {
      display: flex;
      margin: 0;

      li:nth-child(1) {
        list-style-type: none;
      }
    }
  }
`;
