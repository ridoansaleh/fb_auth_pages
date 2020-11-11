import styled from "styled-components";

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: #3b5998;
  height: 90px;
  padding: 0 40px;
  color: #fff;

  > h1 {
    margin: 0;
    margin-top: 10px;
    font-size: 48px;
  }

  > form {
    display: flex;
    margin-top: 10px;

    input.error {
      border: 0.5px solid #f6350a;
    }

    input[type="checkbox"] {
      height: 9px;
      width: 9px;
    }

    label[for="keep_login"] {
      font-size: 11px;
    }

    > div {
      display: flex;
      flex-direction: column;
      margin-right: 10px;

      > label {
        font-size: 13px;
        font-weight: bold;
        margin-bottom: 5px;
      }
    }

    > input[type="submit"] {
      height: 21px;
      margin-top: 21px;
      background-color: #448499;
      border: 2px solid #448499;
      color: #fff;
      font-weight: bold;
    }
  }
`;
