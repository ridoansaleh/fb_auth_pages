import styled from "styled-components";
import globeIcon from "./assets/globe.PNG";

export const Wrapper = styled.section`
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

    .error-msg {
      color: #f6350a;
      font-size: 12px;
      margin-top: -3px;
      margin-bottom: 5px;
    }

    input {
      height: 25px;
    }

    input.error,
    select.error {
      border: 0.5px solid #f6350a;
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

    .error-submission {
      background-color: #448499;
      width: 100%;
      margin: 20px 0;
      padding: 7px 5px;
      color: #fff;
      font-size: 13px;
    }
  }
`;
