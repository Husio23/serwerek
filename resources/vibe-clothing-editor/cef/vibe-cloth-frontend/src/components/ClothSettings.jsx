import {useClothContext} from "../providers/ClothProvider.jsx";
import {ClothInput} from "./ClothInput.jsx";
import {Flex} from "@chakra-ui/react";

export const ClothSettings = () => {
    const {state} = useClothContext();

    if (!state.pickedComponent?.key) return null;

    return (
        <Flex position="absolute"
              flexDirection="column"
              bg="blackAlpha.900"
              p={4}
              alignItems="top"
              borderRadius={10}
              transform="translate(-50%,0)"
              bottom={5}
              left="50%">
            <ClothInput/>
        </Flex>
    )
}