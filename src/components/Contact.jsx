import { extendTheme, Textarea, ChakraProvider, Input, Center, Circle, HStack, Box, Square, Flex, Text, Image, Button, border } from '@chakra-ui/react'


export const Conatct = () => {
    return (
        <Box paddingTop={"100px"} paddingBottom={"50px"} display={"flex"}  flexDirection={{base:"column",md:"row"}} justifyContent={"space-between"} alignItems={"center"} flexWrap={"wrap"} className="form" >
            <Box className="boxShad" backgroundColor={"#fff"} width={{base:"90%",md:"40%"}} padding={"20px 20px 100px 20px"} margin={"auto"}>
                <Text color={"#000"} marginBottom={"10px"} fontWeight={"bold"}>Send a message</Text>
                <Box display={"flex"} marginTop={"10px"}>
                    <Input border={"1px solid gray"} fontSize={"15px"} color={"#000"} placeholder='Name' marginRight={"15px"} />
                    <Input border={"1px solid gray"} type="email" color={"#000"} placeholder='Email' />
                </Box>
                <Box display={"flex"} marginTop={"10px"} >
                    <Input border={"1px solid gray"} type="number" color={"#000"} placeholder='Phone' marginRight={"15px"} />
                    <Input border={"1px solid gray"} color={"#000"} placeholder='Website' />
                </Box>
                <Box marginTop={"10px"}>
                    <Textarea border={"1px solid gray"} height={"20vh"} placeholder='Here is a sample placeholder' />
                </Box>
                <Button color={"#fff"} backgroundColor={"red.600"} marginTop={"5px"} colorScheme='blue'>Button</Button>
            </Box>
            <Box width={"40%"} >
                <Text fontSize={"20px"} fontWeight={"bold"} >Contact</Text>
                <Box display={"flex"} flexDirection={"column"}  marginTop={"40px"} justifyContent={"space-evenly"} height={"100%"}>
                    <Box margin={"10px 0"}>
                        <Text fontSize={"10px"}>Give us a call</Text>
                        <Text fontSize={"12px"} fontWeight={"bold"}>(702)123-1478</Text>
                    </Box>
                    <Box margin={"10px 0"}>
                        <Text fontSize={"10px"}>Send an email</Text>
                        <Text fontSize={"12px"} fontWeight={"bold"}>info@innovasights.com</Text>
                    </Box>
                    <Box margin={"10px 0"}>
                        <Text fontSize={"10px"}>Visit us someday</Text>
                        <Text fontSize={"12px"} fontWeight={"bold"}>121 King St, New York CA 89104, USA</Text>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}