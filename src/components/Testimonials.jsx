
import { extendTheme, ChakraProvider, Center, Circle, HStack, Box, Square, Flex, Text, Image, Button, border } from '@chakra-ui/react'
import person from "../Assets/images/random/1.png"

const Testmonial = ()=>{



    
    return(
        <Box padding={"30px"} textAlign={"center"}>
            <Text fontSize={"10px"} fontWeight={"bold"} textAlign={"center"} color={"#BE0328"}>TESTIMONIALS</Text>
            <Text letterSpacing={"3px"} color={"#000"} fontWeight={"bold"}  fontSize={"25px"}>CSTOMER'S AWESOME</Text>
            <Text fontSize={"30px"} fontWeight={"bold"} color={"#BE0328"}>FEEDBACK</Text>
            <Box display={"flex"} justifyContent={"center"}>
            <Image width={"100px"} src={person}  />
            </Box>
            <Box  display={"flex"} justifyContent={"center"}>
            <Text fontSize={"12px"} marginTop={"10px"} width={"500px"} color={"gray.400"}>There are many variations of passages of Lorem Ipsum available, the majority have suffered alteration in some form, by injected humour. randomised words which don't look even slightly believable. It uses a dictionary of over 200 Latin words, combined with</Text>
            </Box>
            <Text color={"#000"} fontWeight={"bold"}>Jack Smeed</Text>
            <Text fontSize={"12px"} color={"black"}>Manager Marketing</Text>
        </Box>
    )
}

export default Testmonial;