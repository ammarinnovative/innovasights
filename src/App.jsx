import './App.css';
import { extendTheme, ChakraProvider, Center, Circle, HStack, Box, Square, Flex, Text, Image,Button } from '@chakra-ui/react'
import { SearchIcon, HamburgerIcon } from '@chakra-ui/icons'
import Banner from './Assets/images/banner/inn-banner.jpg';
import Logo from './Assets/images/logo/logo.png'
import { About } from './components/About';
import { Service } from './components/Sevices';
import Testmonial from './components/Testimonials';
import Post from './components/Post';
import { Conatct } from './components/Contact';
import { Footer } from './components/Footer';


const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const theme = extendTheme({ colors })

function App() {
  return (
    <ChakraProvider theme={theme}>


{/* //////////////////// Header ////////////////// */}

      <Box display={"flex"} p={"15px"} justifyContent={"space-around"} alignItems={"center"} position={"absolute"} w={"100%"}>
        <Box>
          <Box><Image src={Logo} /></Box>
        </Box>
        <Flex display={{ base: "none", md: "flex" }} justifyContent={"space-between"}>
          <Box ml={"30px"} cursor={"pointer"} fontSize={"17px"}>Home</Box>
          <Box ml={"30px"} cursor={"pointer"} fontSize={"17px"}>About</Box>
          <Box ml={"30px"} cursor={"pointer"} fontSize={"17px"}>Services</Box>
          <Box ml={"30px"} cursor={"pointer"} fontSize={"17px"}>Blogs</Box>
          <Box ml={"30px"} cursor={"pointer"} fontSize={"17px"}>Contact us</Box>
        </Flex>
        <Flex>
          <SearchIcon display={{ base: "none", md: "flex" }} ml={"50px"} cursor={"pointer"} fontSize={"22px"} />
          <HamburgerIcon display={{ base: "felx", md: "none" }} ml={"50px"} cursor={"pointer"} fontSize={"22px"} />
        </Flex>
      </Box>
      <Flex p={'20px'} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={{ base: "center", md: "flex-start" }} bgImage={Banner} backgroundPosition={"center"} backgroundSize={"cover"} h={"100vh"} backgroundRepeat={"no-repeat"}>
        <Box marginLeft={"40px"}>
          <Text fontFamily={"Raleway"} color="#BE0328" letterSpacing={"1px"} fontSize={"22px"} fontWeight={"bold"}>Business Solution</Text>
          <Text fontSize={{base:"35px",md:"50px"}} textTransform={"uppercase"}  fontWeight={"bold"} >We are digital <br /><Text color={"#BE0328"} as={"span"} >Agency</Text></Text>
          <Text fontSize={{base:"8px",md:"13px"}} >There are many variations of passages of Lorem Ipsum available, the majority have suffered alteration in some form by injected humour.</Text>
          <Button bg={"#BE0328" } mt={"14px"} borderRadius={"30px"}>Download More</Button>
        </Box>
      </Flex>


{/* //////////////////////////// About //////////////// */}

<About />

{/* //////////////////////// Services //////// */}


<Service />



{/* /////////////////////////// Testimonials ///////// */}


<Testmonial />



{/* ////////////////////////// Post //////////////////// */}



<Post />

{/* //////////////////// Contact ///////////// */}



<Conatct />



{/* ////////////////// Footer ///////// */}


<Footer />


    </ChakraProvider>
  );
}

export default App;

