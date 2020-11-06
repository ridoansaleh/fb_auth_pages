import styled from "styled-components";
import globeIcon from "./assets/globe.PNG";

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

export const LoginHeader = styled.section`
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

export const SignUpContent = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 40px 60px 40px 40px;
  background-color: #dfe3ee;

  > div:nth-child(1) {
    margin-right: 60px;

    h2 {
      width: 500px;
    }

    #globe_icon {
      width: 550px;
      height: 360px;
      background-image: url(${globeIcon});
      background-repeat: no-repeat;
      background-size: contain;
    }
  }

  > div:nth-child(2) {
    width: 400px;
    > h2 {
      margin-bottom: 0;
      margin-left: 12px;
    }

    p#title-desc {
      margin: 5px 0 5px 12px;
      font-size: 17px;
    }

    p#create-page {
      color: #9a9a9a;
      font-size: 13px;
      font-weight: bold;
      text-align: center;
      a {
        text-decoration: initial;
        color: #3b5998;
        margin-top: initial;
        font-size: 13px;
      }
    }
  }

  form {
    > table {
      tr {
        td:nth-child(1) {
          text-align: right;
        }
        #birthday_wrapper {
          select {
            width: 65px;
            margin-right: 10px;
          }
        }
      }
    }

    input {
      height: 25px;
    }

    select {
      height: 31px;
    }

    input[type="text"],
    input[type="email"],
    input[type="password"] {
      width: 100%;
    }

    input[type="submit"] {
      background-color: #7fb930;
      width: 125px;
      height: 32px;
      color: #fff;
      font-weight: bold;
      border: 0.5px solid #494948;
      margin-top: 10px;
    }

    a {
      color: #3b5998;
      margin-top: -5px;
    }
  }
`;

export const Footer = styled.footer`
  font-size: 12px;
  padding-bottom: 40px;

  li {
    margin-right: 20px;
    a {
      color: #3b5998;
    }
  }

  ul#language {
    display: flex;
    list-style-type: none;
    margin-left: 0;
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
