import { ThemeProvider } from "styled-components";
import { Home } from "./pages/Home";
import { HomeButton, HomeContainer, HomeTable } from "./pages/Home/styles";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

import * as Dialog from "@radix-ui/react-dialog";
import { NewHomeModal } from "./components/NewHomeModal";
import { useEffect, useState } from "react";
import api from "./api";

export function App() {
  const [repositories, setRepositories] = useState([])

  useEffect(() => {
    const getData = async () => {
      const response = await api.get(
        "/repositories"
      );
      setRepositories(response.data);
    };
    getData();
  }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Home />

      <HomeContainer>
        <HomeTable>
          <body>
            {repositories?.map(repo => (
              <tr>

                <td>Nome Repositório:{repo.name} </td>
                <td>URL: {repo.url}</td>
                <Dialog.Root>

                  <Dialog.Trigger asChild>
                    <HomeButton>Detalhes Repositórios</HomeButton>
                  </Dialog.Trigger>

                  <NewHomeModal item={repo}></NewHomeModal>
                </Dialog.Root>
              </tr>

            ))}

          </body>
        </HomeTable>
      </HomeContainer>
    </ThemeProvider>
  );
}
