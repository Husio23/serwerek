import {Box, Flex, GridItem, Text} from "@chakra-ui/react";
import {useClothContext} from "../providers/ClothProvider.jsx";

export const ClothTile = ({name, icon, dictKey, isProp}) => {

    const {state, dispatch} = useClothContext();

    const onTileClick = () => {
        const payloadKey = state.pickedComponent?.key === dictKey ? '' : dictKey;
        dispatch({type: 'componentPick', payload: { key: payloadKey, isProp: isProp }})
    }

    return (
        <GridItem
            colSpan={6}
            rowSpan={2}>
            <Flex
                onClick={onTileClick}
                cursor="pointer"
                border="1px solid"
                _hover={{backgroundColor: 'purple.900', borderColor: 'purple.600'}}
                borderRadius={10}
                borderColor={state.pickedComponent?.key === dictKey ? 'purple.600' : 'whiteAlpha.300'}
                flexDirection="column"
                alignItems="center"
                p={3}
                gap={2}>
                <Box fontSize={36}>
                    {icon}
                </Box>
                <Text fontSize={14}>{name}</Text>
            </Flex>
        </GridItem>
    )
}