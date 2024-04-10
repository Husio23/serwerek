import {Flex} from "@chakra-ui/react";

export const ClothManagerContainer = ({children}) => {
    return (
        <Flex w="100%"
              h="100%"
              position="relative">
            <Flex
                position="absolute"
                top="45%"
                left={5}
                transform="translate(0, -50%)"
                flexDirection="column"
                h="750px"
                w="450px"
                bgColor="black"
                borderRadius={20}
                py={6}
                pl={6}
                pr={1}
            >
                <Flex
                    flexDirection="column"
                    overflow="hidden"
                    pr={4}>
                    {children}
                </Flex>
            </Flex>
        </Flex>
    )
}