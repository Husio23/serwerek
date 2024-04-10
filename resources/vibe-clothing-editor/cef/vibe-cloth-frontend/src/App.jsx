import {GenderSwitch} from "./components/GenderSwitch.jsx";
import {Flex, Grid, GridItem} from "@chakra-ui/react";
import {clothingTypes, propTypes} from "./utils/clothTypes.jsx";
import {ClothTile} from "./components/ClothTile.jsx";
import {ClothSettings} from "./components/ClothSettings.jsx";
import {TattooContainer} from "./components/TattooContainer.jsx";

function App() {
    return (
        <>
            <Flex
                flexDirection="column"
                position="absolute"
                top={0}
                left={0}
                h="100%"
                w="250px"
                bgColor="blackAlpha.900">
                <Grid
                    h="100%"
                    p={2}
                    templateColumns="repeat(12, 1fr)"
                    templateRows="repeat(4, 1fr)"
                    mt={4}
                    gap={2}
                >
                    <GridItem
                        colSpan={12}
                        rowSpan={10}>
                        <Grid
                            templateColumns="repeat(12, 1fr)"
                            templateRows="repeat(12, 1fr)"
                            gap={2}>
                            {clothingTypes.map(clothType => (
                                <ClothTile key={clothType.name} {...clothType} />
                            ))}
                            {propTypes.map(propType => (
                                <ClothTile key={propType.name} {...propType}/>
                            ))}
                        </Grid>
                    </GridItem>
                    <GridItem colSpan={12}
                              rowSpan={1}>
                        <GenderSwitch/>
                    </GridItem>
                </Grid>
            </Flex>
            <ClothSettings/>
            <TattooContainer/>
        </>
    )
}

export default App
