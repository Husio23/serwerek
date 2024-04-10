import {Box, Flex, Input, Text} from "@chakra-ui/react";
import {useClothContext} from "../providers/ClothProvider.jsx";
import {useEffect, useState} from "react";

export const ClothInput = () => {
    const {state, dispatch} = useClothContext();

    const [value, setValue] = useState({
        drawableId: 0,
        textureId: 0,
        dlcName: '',
    });

    useEffect(() => {
        setValue({
            dlcName: state.clothes[state.pickedComponent.key]?.dlc || '',
            drawableId: state.clothes[state.pickedComponent.key]?.drawableId || 0,
            textureId: state.clothes[state.pickedComponent.key]?.textureId || 0,
        })
    }, [state, state.pickedComponent])

    const onDlcSelect = (e) => {
        dispatch({type: 'dlc', payload: {key: state.pickedComponent?.key, dlc: e.target.value}})
    }

    const onDrawableChange = (e) => {
        if (parseInt(e.target.value) < 0) return;
        setValue({...value, drawableId: e.target.value})
        dispatch({
            type: 'drawable',
            payload: {key: state.pickedComponent?.key, value: e.target.value, isProp: state.pickedComponent.isProp}
        });
    }

    const onTextureChange = (e) => {
        if (parseInt(e.target.value) < 0) return;
        setValue({...value, textureId: e.target.value})
        dispatch({
            type: 'texture',
            payload: {key: state.pickedComponent?.key, value: e.target.value, isProp: state.pickedComponent.isProp}
        })
    }

    return (
        <Flex flexDirection="column"
              gap={2}
              position="relative">
            <Box w="100%">
                <Text fontSize={14}
                      fontWeight={600}>
                    DLC
                </Text>
                <Input
                    focusBorderColor="purple.600"
                    tabIndex={-1}
                    mt={1}
                    border="1px solid"
                    borderColor="whiteAlpha.400"
                    size="md"
                    color="white"
                    value={value?.dlcName}
                    placeholder="Wprowadź DLC"
                    onChange={onDlcSelect}/>
            </Box>
            <Flex gap={2}>
                <Box w="100%">
                    <Text fontSize={14}
                          fontWeight={600}>ID Ubrania</Text>
                    <Input
                        focusBorderColor="purple.600"
                        type="number"
                        tabIndex={-1}
                        onChange={(e) => onDrawableChange(e)}
                        value={value?.drawableId}
                        w="full"
                        mt={1}
                        border="1px solid"
                        borderColor="whiteAlpha.400"
                        size="md"
                        color="white"
                        placeholder={`Wprowadź ID`}/>
                </Box>
                <Box w="100%">
                    <Text fontSize={14}
                          fontWeight={600}>ID Tekstury</Text>
                    <Input
                        focusBorderColor="purple.600"
                        type="number"
                        tabIndex={-1}
                        onChange={(e) => onTextureChange(e)}
                        value={value?.textureId}
                        w="full"
                        mt={1}
                        border="1px solid"
                        borderColor="whiteAlpha.400"
                        size="md"
                        color="white"
                        placeholder={`Wprowadź teksturę...`}/>
                </Box>
            </Flex>
        </Flex>
    )
}