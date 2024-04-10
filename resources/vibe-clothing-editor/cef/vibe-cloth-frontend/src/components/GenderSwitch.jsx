import {Button, Flex, Text} from "@chakra-ui/react";
import {emitAlt} from "../utils/altUtils.js";
import {useClothContext} from "../providers/ClothProvider.jsx";
import {FaMars, FaVenus} from "react-icons/fa6";

export const GenderSwitch = ({ withHeader }) => {
    const {dispatch} = useClothContext();
    const onGenderChange = (gender) => {
        dispatch({type: 'gender', payload: gender})
        emitAlt('cef:genderChange', gender)
    }

    return (
        <>
            {withHeader && (
                <Text fontSize={16}
                      fontWeight={600}
                      color="whiteAlpha.700">Płeć postaci</Text>
            )}
            <Flex gap={2}>
                <Button
                    tabIndex={-1}
                    onClick={() => onGenderChange('male')}
                    w="full"
                    bgColor="blue.500"
                    _hover={{backgroundColor: 'blue.600'}}>
                    <FaMars/>
                </Button>

                <Button
                    tabIndex={-1}
                    onClick={() => onGenderChange('female')}
                    w="full"
                    bgColor="pink.500"
                    _hover={{backgroundColor: 'pink.600'}}>
                    <FaVenus/>
                </Button>
            </Flex>
        </>
    )
}