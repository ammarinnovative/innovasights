import { extendTheme, ChakraProvider, Center, Circle, HStack, Box, Square, Flex, Text, Image, Button, border } from '@chakra-ui/react'
import AboutImg from '../Assets/images/random/01.png'
import Com from "../Assets/images/icons/com.png"


export const About = () => {
    return (
        <div>
            <Flex justifyContent={{base:"center",md:"space-evenly"}} alignItems={"center"} flexDirection={{base:"column",md:"row"}} width={"100%"}>
                <Box width={{base:"70%",md:"1000px",lg:"350px"}}>
                    <Image width="full" src={AboutImg} alt="img" objectFit={'cover'} />
                </Box>
                <Box display={"felx"} marginBottom={"10px"} flexDirection={"column"}>
                    <Text color={"#BE0328"} textAlign={{base:"center",md:"left"}}  fontSize={{base:"10px",md:"12px"}} fontWeight={"bold"}>About Company</Text>
                    <Text textTransform={"uppercase"} textAlign={{base:"center",md:"left"}} fontWeight={"bold"} fontSize={{base:"25px",md:"34px"}} color={"#000000"}>25+ year working <Text color={"#BE0328"}>experience</Text></Text>
                    <Text width={{base:"100%",md:"300px"}} padding={"10px"} textAlign={{base:"center",md:"left"}} fontSize={"10px"} fontWeight={"light"} color={'gray.700'}>There are many variations of passages of Lorem Ipsum available, the majority have suffered alteration in some form, by injected humour. randomised words which don't look even slightly believable. It uses a dictionary of over 200 Latin words, combined with</Text>
                <Box display={"flex"} justifyContent={{base:"center",md:"space-between"}} width={{base:"100%",md:"60%"}} flexWrap={"wrap"}>
                    
                    <Box display={"flex"} justifyContent={{base:"center",md:"left"}} marginTop={"10px"} width={{base:"50%",md:"100%"}} >
                        <Image width={"15px"} src={Com} marginRight={"5px"} alt="img" />
                        <Text fontSize={"10px"} color={"#000"}>Creative Conceptions</Text>
                    </Box>
                    <Box display={"flex"} justifyContent={{base:"center",md:"left"}} marginTop={"10px"} width={{base:"50%",md:"100%"}} >
                        <Image width={"15px"} src={Com} marginRight={"5px"} alt="img" />
                        <Text fontSize={"10px"} color={"#000"}>Creative Conceptions</Text>
                    </Box>
                    <Box display={"flex"} justifyContent={{base:"center",md:"left"}} marginTop={"10px"}  width={{base:"50%",md:"100%"}}>
                        <Image width={"15px"} src={Com} marginRight={"5px"} alt="img" />
                        <Text fontSize={"10px"} color={"#000"}>Creative Conceptions</Text>
                    </Box>
                    <Box display={"flex"} justifyContent={{base:"center",md:"left"}} marginTop={"10px"} width={{base:"50%",md:"100%"}} >
                        <Image width={"15px"} src={Com} marginRight={"5px"} alt="img" />
                        <Text fontSize={"10px"} color={"#000"}>Creative Conceptions</Text>
                    </Box>
                </Box>
                </Box>
            </Flex>
        </div>
    )
}