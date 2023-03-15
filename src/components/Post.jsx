
import { extendTheme, ChakraProvider, Center, Circle, HStack, Box, Square, Flex, Text, Image, Button } from '@chakra-ui/react'
import Image1 from "../Assets/images/blogs/01.png"
import Image2 from "../Assets/images/blogs/02.png"
import Image3 from "../Assets/images/blogs/03.png"


const Post = () => {
    return (
        <Box textAlign={"center"} padding={"20px"} backgroundColor={"#F1F1F1"}>
            <Text fontWeight={"bold"} color={"#BE0328"} >OUR BLOG</Text>
            <Text color={"#000"} fontWeight={"bold"} fontSize={"30px"}>OUR RECENT <span style={{ color: "red" }}>POSTS</span></Text>

            <Box display={"flex"} padding={"40px"} justifyContent={"space-around"} flexWrap={"wrap"} alignItems={"center"}>
                <Box   width={{base:"100%",md:"50%",lg:"32%"}} textAlign={"left"} padding={"5px 5px 30px 5px"}backgroundColor={"#fff"}>
                    <Image src={Image1} width={"100%"} zIndex={"-1"} />
                   <Text textAlign={"center"} width={"30%"} borderRadius={"15px"}  fontSize={"10px"} marginLeft={"10px"} zIndex={"100"} marginTop={"-13px"} padding={"5px 10px"} backgroundColor={"#BE0328"}>22Jan 2023</Text>
                    <Text color={"#000"} fontWeight={"bold"} width={"180px"} fontSize={"10px"}>HOW TO INCREASE BUSINESS THROUGH SEM</Text>
                    <Text color={"#000"} mt={"4px"} width={"180px"} fontSize={"10px"}>We are passionate about our works. Our designers ahead of the curve.</Text>
                    <Text color={"red"} marginTop={"14px"} fontSize={"10px"}>Read more</Text>
                </Box>
                <Box   width={{base:"100%",md:"50%",lg:"32%"}} textAlign={"left"} padding={"5px 5px 30px 5px"}backgroundColor={"#fff"}>
                    <Image src={Image2} width={"100%"} zIndex={"-1"} />
                   <Text textAlign={"center"} width={"30%"} borderRadius={"15px"}  fontSize={"10px"} marginLeft={"10px"} zIndex={"100"} marginTop={"-13px"} padding={"5px 10px"} backgroundColor={"#BE0328"}>22Jan 2023</Text>
                    <Text color={"#000"} fontWeight={"bold"} width={"180px"} fontSize={"10px"}>HOW TO INCREASE BUSINESS THROUGH SEM</Text>
                    <Text color={"#000"} mt={"4px"} width={"180px"} fontSize={"10px"}>We are passionate about our works. Our designers ahead of the curve.</Text>
                    <Text color={"red"} marginTop={"14px"} fontSize={"10px"}>Read more</Text>
                </Box>
                <Box    width={{base:"100%",md:"50%",lg:"32%"}} textAlign={"left"} padding={"5px 5px 30px 5px"}backgroundColor={"#fff"}>
                    <Image src={Image3} width={"100%"} zIndex={"-1"} />
                   <Text textAlign={"center"} width={"30%"} borderRadius={"15px"}  fontSize={"10px"} marginLeft={"10px"} zIndex={"100"} marginTop={"-13px"} padding={"5px 10px"} backgroundColor={"#BE0328"}>22Jan 2023</Text>
                    <Text color={"#000"} fontWeight={"bold"} width={"180px"} fontSize={"10px"}>HOW TO INCREASE BUSINESS THROUGH SEM</Text>
                    <Text color={"#000"} mt={"4px"} width={"180px"} fontSize={"10px"}>We are passionate about our works. Our designers ahead of the curve.</Text>
                    <Text color={"red"} marginTop={"14px"} fontSize={"10px"}>Read more</Text>
                </Box>
            </Box>

        </Box>

    )
}


export default Post;