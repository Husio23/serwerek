import {TattooList} from "./TattooList.jsx";
import {TattooInput} from "./TattooInput.jsx";
import {Flex} from "@chakra-ui/react";

export const TattooContainer = () => {
    return (
        <Flex
            flexDirection="column"
            position="absolute"
            top="50%"
            right={0}
            transform="translateY(-50%)"
            h="600px"
            w="300px"
            bgColor="blackAlpha.900"
            borderRadius={20}
        >
            <TattooList/>
            <TattooInput/>

        </Flex>
    )
}