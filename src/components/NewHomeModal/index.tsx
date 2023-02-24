import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import { CloseButton, Content, Overlaay, TextContent } from "./styles";

export function NewHomeModal({ item }: any) {
    console.log("item dentro do modal", item)

    return (
        <Dialog.Portal>
            <Overlaay />
            <Content>
                <Dialog.Title style={{ color: "white" }}>Detalhes Repositórios</Dialog.Title>

                <CloseButton>
                    <X size={24} />
                </CloseButton>

                <TextContent>

                    <p>Name: {item.name}</p>
                    <p>Description: {item.description}</p>
                    <p>Url: {item.url}</p>
                    <p>Stars: {item.stars}</p>
                    <p>Language: {item.language}</p>

                </TextContent>

                <Dialog.Close />
            </Content>
        </Dialog.Portal>
    )
}