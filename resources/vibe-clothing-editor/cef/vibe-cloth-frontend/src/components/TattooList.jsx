import {Center, Flex, Text} from "@chakra-ui/react";
import {BiSolidSad, BiSolidTrash} from "react-icons/bi";
import {useClothContext} from "../providers/ClothProvider.jsx";

export const TattooList = () => {
    const {state, dispatch} = useClothContext();

    const removeTattoo = (hash) => {
        dispatch({type: 'removeTattoo', payload: hash})
    }

    return (
        <>
            {state.tattoos.length ? (
                <Flex flexDirection="column"
                      mt={2}
                      p={2}
                      overflowY="scroll"
                      gap={2}
                      h="100%">
                    {state.tattoos.map((tattoo) => (
                        <Flex
                            flexDirection="row"
                            alignItems="center"
                            justifyContent="space-between"
                            p={2}
                            border="1px solid"
                            borderColor="purple.500"
                            borderRadius={10}
                            key={tattoo.hash}>
                            {tattoo.hash}
                            <BiSolidTrash cursor="pointer"
                                          onClick={() => removeTattoo(tattoo.hash)}
                                          size={18}/>
                        </Flex>
                    ))}
                </Flex>
            ) : (
                <Center h="100%" flexDirection="column" p={2} gap={2}>
                    <BiSolidSad size={64}/>
                    <Text textAlign="center">
                        Nie posiadasz obecnie żadnych tatuaży, może dodasz jakiś?
                    </Text>
                </Center>
            )}
        </>
    )
}