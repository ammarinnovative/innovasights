
import { extendTheme, ChakraProvider, Center, Circle, HStack, Box, Square, Flex, Text, Image,Button } from '@chakra-ui/react'



export const Footer = ()=>{
    return(
        <Box display={"flex"} padding={"25px"} justifyContent={"space-around"} flexWrap={"wrap"} alignItems={"center"}>
            <Text color={"#000"}>© 2023 All rights reserved by innovasights</Text>
            <Text color={"#000"}>Privacy Policy - Terms & Conditions</Text>
        </Box>
    )
}


