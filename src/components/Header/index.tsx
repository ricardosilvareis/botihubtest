import { HeaderContainer, HeaderContent } from "./styles";

import logoImage from "../../assets/logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImage} alt="Logo" style={{ width: "100px" }} />

      </HeaderContent>

      <h1 style={{ textAlign: "center", paddingTop: "30px", color: "white" }}>BotiGitHub</h1>
    </HeaderContainer>
  );
}
