import {Button, Flex, Input, useToast} from "@chakra-ui/react";
import {useState} from "react";
import {useClothContext} from "../providers/ClothProvider.jsx";

export const TattooInput = () => {
    const [tattooState, setTattooState] = useState();

    const {state, dispatch} = useClothContext();
    const toast = useToast()

    const onHashChange = (e) => {
        setTattooState(prevState => ({...prevState, hash: e.target.value}))
    }

    const onCollectionChange = (e) => {
        setTattooState(prevState => ({...prevState, collection: e.target.value}))
    }

    const onSave = () => {
        if (state.tattoos.some(x => x.hash === tattooState.hash)) {
            toast({
                title: 'Posiadasz już tatuaż o tym hashu',
                status: 'warning',
                duration: 3000,
                colorScheme: 'purple'
            })
            return;
        }

        dispatch({type: 'addTattoo', payload: tattooState})
    }

    return (
        <>
            <Flex
                flexDirection="column"
                gap={2}
                p={2}>
                <Input
                    tabIndex={-1}
                    placeHolder="Wprowadź kolekcję tatuażu"
                    onChange={onCollectionChange}
                />
                <Input
                    tabIndex={-1}
                    placeHolder="Wprowadź hash tatuażu"
                    onChange={onHashChange}
                />
            </Flex>
            <Button
                borderBottomRadius={10}
                borderTopRadius={0}
                tabIndex={-1}
                onClick={onSave}
                bgColor="purple.500"
                _hover={{backgroundColor: 'purple.600'}}>Dodaj</Button>
        </>
    )
}