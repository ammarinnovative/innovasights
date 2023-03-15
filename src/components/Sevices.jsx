import { extendTheme, ChakraProvider, Center, Circle, HStack, Box, Square, Flex, Text, Image, Button } from '@chakra-ui/react'
import creative from "../Assets/images/icons/01.png"
import idea from "../Assets/images/icons/02.png"
import business from "../Assets/images/icons/03.png"
import Marketing from "../Assets/images/icons/04.png"
import Web from "../Assets/images/icons/05.png"
import writting from "../Assets/images/icons/06.png"





export const Service = () => {
    return (
        <div>
            <Box width={{base:"100%",md:"80%"}} mt={"50px"} mx={"auto"}>
                <Text color={"#BE0328"} textAlign={{base:"center",md:"left"}} fontSize={"10px"} fontWeight={"bold"}   >OUR BEST SERVICE</Text>
                <Text color={"#000000"} fontWeight={"bold"} fontSize={{base:"20px",md:"30px"}} textAlign={{base:"center",md:"left"}}>WHAT SERVICES WE’RE <Text color={"#BE0328"}>OFFERING</Text></Text>
                <Box display={"flex"} justifyContent={"space-between"} width={"100%"} padding={"40px"} flexWrap={"wrap"}>
                    <Box display={"flex"} justifyContent={{base:"center"}} width={{base:"100%",md:"50%",lg:"33%"}} marginBottom={"30px"}>
                        <Box width={"40px"} padding={"7px"} height={"40px"} border={"1PX solid #CBD5E0"} borderRadius={"50%"} >
                            <Image src={creative} alt='img' zIndex={"100"} />
                        </Box>
                        <Box ml={"15px"}>
                            <Text fontSize={"8px"} fontWeight={"bold"} color={"#000000"}>CREATIVE  <Text color={"#000000"}>BRANDING DESIGNS</Text></Text>
                            <Text width={"180px"} mt={'10PX'} fontSize={"10px"} textColor={"gray"}>Contented continued any happiness the instantly objections yet her every allowance of Use correct.</Text>
                        </Box>
                    </Box>
                    <Box display={"flex"} width={{base:"100%",md:"50%",lg:"33%"}} justifyContent={{base:"center"}} marginBottom={"30px"}>
                        <Box width={"40px"} padding={"7px"} height={"40px"} border={"1PX solid #CBD5E0"} borderRadius={"50%"} >
                            <Image src={idea} alt='img' zIndex={"100"} />
                        </Box>
                        <Box ml={"15px"}>
                            <Text fontSize={"8px"} fontWeight={"bold"} color={"#000000"}>BUSINESS<Text color={"#000000"}> IDEA CONSULTENCY</Text></Text>
                            <Text width={"180px"} mt={'10PX'} fontSize={"10px"} textColor={"gray"}>Contented continued any happiness the instantly objections yet her every allowance of Use correct.</Text>
                        </Box>
                    </Box>
                    <Box display={"flex"} justifyContent={{base:"center"}} width={{base:"100%",md:"50%",lg:"33%"}} marginBottom={"30px"}>
                        <Box width={"40px"} padding={"7px"} height={"40px"} border={"1PX solid #CBD5E0"} borderRadius={"50%"} >
                            <Image src={business} alt='img' zIndex={"100"} />
                        </Box>
                        <Box ml={"15px"}>
                            <Text fontSize={"8px"} fontWeight={"bold"} color={"#000000"}>DIGITAL  <Text color={"#000000"}> MARKETING SERVICE</Text></Text>
                            <Text width={"180px"} mt={'10PX'} fontSize={"10px"} textColor={"gray"}>Contented continued any happiness the instantly objections yet her every allowance of Use correct.</Text>
                        </Box>
                    </Box>
                    <Box display={"flex"} justifyContent={{base:"center"}} width={{base:"100%",md:"50%",lg:"33%"}} marginBottom={"30px"}>
                        <Box width={"40px"} padding={"7px"} height={"40px"} border={"1PX solid #CBD5E0"} borderRadius={"50%"} >
                            <Image src={Marketing} alt='img' zIndex={"100"} />
                        </Box>
                        <Box ml={"15px"}>
                            <Text fontSize={"8px"} fontWeight={"bold"} color={"#000000"}>WEB <Text color={"#000000"}> DEVELOPMENT</Text></Text>
                            <Text width={"180px"} mt={'10PX'} fontSize={"10px"} textColor={"gray"}>Contented continued any happiness the instantly objections yet her every allowance of Use correct.</Text>
                        </Box>
                    </Box>
                    <Box display={"flex"} justifyContent={{base:"center"}} width={{base:"100%",md:"50%",lg:"33%"}} marginBottom={"30px"}>
                        <Box width={"40px"} padding={"7px"} height={"40px"} border={"1PX solid #CBD5E0"} borderRadius={"50%"} >
                            <Image src={Web} alt='img' zIndex={"100"} />
                        </Box>
                        <Box ml={"15px"}>
                            <Text fontSize={"8px"} fontWeight={"bold"} color={"#000000"}>MOBILE  <Text color={"#000000"}>APP DEVELOPMENT</Text></Text>
                            <Text width={"180px"} mt={'10PX'} fontSize={"10px"} textColor={"gray"}>Contented continued any happiness the instantly objections yet her every allowance of Use correct.</Text>
                        </Box>
                    </Box>
                    <Box width={{base:"100%",md:"50%",lg:"33%"}} justifyContent={{base:"center"}} display={"flex"}marginBottom={"30px"}>
                        <Box width={"40px"} padding={"7px"} height={"40px"} border={"1PX solid #CBD5E0"} borderRadius={"50%"} >
                            <Image src={writting} alt='img' zIndex={"100"} />
                        </Box>
                        <Box ml={"15px"}>
                            <Text fontSize={"8px"} fontWeight={"bold"} color={"#000000"}>CREATIVE  <Text color={"#000000"}>CONTENT WRITTING</Text></Text>
                            <Text width={"180px"} mt={'10PX'} fontSize={"10px"} textColor={"gray"}>Contented continued any happiness the instantly objections yet her every allowance of Use correct.</Text>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}