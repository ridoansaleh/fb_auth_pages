import { Wrapper } from "./styles/_footerStyle";
import { LANGUAGE, FOOTER_LINK } from "./constant";

function Footer() {
  return (
    <Wrapper>
      <ul id="language">
        {LANGUAGE.map((d) => (
          <li key={d}>
            <a href="#">{d}</a>
          </li>
        ))}
      </ul>
      <hr />
      <div>
        <div>
          <ul>
            <li key="1">Facebook &#64; 2011</li>
            <li>
              <a key="2" href="#">
                English (US)
              </a>
            </li>
          </ul>
        </div>
        <ul>
          {FOOTER_LINK.map((d) => (
            <li key={d}>
              <a href="#">{d}</a>
            </li>
          ))}
        </ul>
      </div>
    </Wrapper>
  );
}

export default Footer;
