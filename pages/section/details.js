import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
import React, { useState, useEffect } from 'react'
import {
  Button,
  Text, Heading, Box, Flex, Img,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  Avatar
} from "@chakra-ui/react";
import { DateRange } from 'react-date-range'


const DetailsPage = () => {



  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  const range = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection'
  }

  const handleRange = (ranges) => {

    console.log(ranges.selection.startDate, ranges.selection.endDate)

    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)

  }


  const [detailsData, setDetailsData] = useState('')

  useEffect(() => {
    const url = localStorage.getItem('imgUrl')
    setDetailsData(url)
  }, [])


  return <Box zIndex={'0'} pt='21vh' px='5%'>

    <Box>
      <Text
        fontSize='1.7rem'
        fontWeight='semibold'
      >
        Aura House 2bds Eco Bamboo House, Pool, River View
      </Text>

      <Flex justifyContent='space-between'>
        <Flex w='35%' alignItems='center' justifyContent='space-between'>
          <Text display='flex'>
            &#9733; 4.72
          </Text>
          <Text fontSize='1rem' textDecoration='underline'> 150 review</Text>
          .
          <Text> &#10083; superhost</Text>
          .
          <Text fontSize='1rem' textDecoration='underline'>Abiansemal, Bali ,indonesia</Text>
        </Flex>
        <Flex>
          <Text>
            share
          </Text>

          <Text>save</Text>
        </Flex>

      </Flex>
    </Box>
    <Img src={detailsData} alt='alt text' height='65vh' borderRadius='2rem'
      m='auto' my='3rem' w='70vw' />

    {/* ======================== */}

    <Flex borderColor='blue'
    >
      <Flex
        w='60%'
        flexDirection='column'
      >

        <Flex
          w='100%'
          p='2rem'
          justifyContent='space-between'
        >
          <Box>
            <Text>Entire villa hosted by Wayan</Text>
            <Text>10 guests * 5 bed rooms * 5beds * 4.5 bathrooms </Text>
          </Box>
          {/* <BsPersonCircle fontSize='3rem' /> */}
          <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
        </Flex>

        <Box>
          <Box p={5} shadow='md' borderWidth='1px' >
            <Heading fontSize='xl'>Wayan is a Superhost</Heading>
            <Text mt={4}>Superhosts are experienced, highly rated hosts who are committed to providing great stays for their guests.</Text>
          </Box>

          <Box p={5} shadow='md' borderWidth='1px' >
            <Heading fontSize='xl'>Great check-in experience</Heading>
            <Text mt={4}>95% of recent guests gave the check-in process a 5-star rating.</Text>
          </Box>
          <Box p={5} shadow='md' borderWidth='1px' >
            <Heading fontSize='xl'>Free cancellation before 8 Dec.</Heading>
            <Text mt={4}>Superhosts are experienced, highly rated hosts who are committed to providing great stays for their guests.</Text>
          </Box>
        </Box>

        <Box p='2rem'>

          <Text fontSize='2.3rem'
            fontWeight='extrabold'
          >
            <span style={{ color: '#ff385c' }}>air</span>cover
          </Text>

          <Text mt={4}>Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in.</Text>

          <Heading fontSize='1rem' textDecoration='underline'>Learn more... </Heading>
        </Box>


        <Box p='2rem' >
          <Text mt={4}>A unique bamboo house and a work of art. Both the river valley view & interior are remarkable, providing such a marvelous feast to the eyes that guests find it extraordinary to live so in touch with nature but in complete luxury</Text>

          <Text py='1rem'>For more information, check the TED Talk with Elora Hardy about Sharma Springs . The Apple TV show HOME also features Sharma Springs.</Text>

          <Heading fontSize='1rem' textDecoration='underline'>Learn more... </Heading>
        </Box>
        <Box p='2rem'>

          <Text fontSize='1.7rem'
          >
            Where youll sleep
          </Text>

          <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
              <Stat
                px={{ base: 4, md: 8 }}
                py={'5'}
                shadow={'xl'}
                border={'1px solid'}
                borderColor='gray.400'
                rounded={'lg'}>
                <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
                  Bedroom 1
                </StatNumber>

                <StatLabel fontWeight={'medium'} >
                  1 king bed
                </StatLabel>
              </Stat>
              <Stat
                px={{ base: 4, md: 8 }}
                py={'5'}
                shadow={'xl'}
                border={'1px solid'}
                borderColor='gray.400'
                rounded={'lg'}>
                <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
                  Bedroom 2
                </StatNumber>

                <StatLabel fontWeight={'medium'} >
                  1 king bed
                </StatLabel>
              </Stat>
              <Stat
                px={{ base: 4, md: 8 }}
                py={'5'}
                shadow={'xl'}
                border={'1px solid'}
                borderColor='gray.400'
                rounded={'lg'}>
                <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
                  Bedroom 3
                </StatNumber>

                <StatLabel fontWeight={'medium'} >
                  1 king bed
                </StatLabel>
              </Stat>
            </SimpleGrid>
          </Box>

        </Box>


      </Flex>


      <Box
        w='40%'
        p='5rem'
      >

        <Box
          h='50vh'
          border='1px'
          borderRadius='.7rem'
          borderColor='gray.400'
          boxShadow='2xl'
          p='1.5rem'
        >

          <Flex justifyContent='space-between'>
            <Flex>
              <Text> $25.567</Text>
              <Text>night</Text>
            </Flex>
            <Text>1 review</Text>
          </Flex>

          <Box
            my='1rem'
            h='25%'
            border='1px'
            borderRadius='.7rem'
            borderColor='gray.400'
          >
            <Box borderBottom='1px'
              borderColor='gray.400'
              h='50%'
              display='flex'
            >

              <Box borderRight='1px'
                borderColor='gray.400'
                w='50%' h='100%' p='.3rem'>
                <Text fontSize={'.7rem'}>CHECK-IN</Text>
                <Text>10/12/2022</Text>
              </Box>
              <Box
                borderColor='gray.400'
                w='50%' h='100%' p='.3rem'>
                <Text fontSize={'.7rem'}>CHECK-IN</Text>
                <Text>10/12/2022</Text>
              </Box>
            </Box>
            <Text fontSize={'.7rem'}>CHECK-IN</Text>
            <Text>10/12/2022</Text>
          </Box>

          <Button
            backgroundColor='#ff385c'
            borderRadius='.5rem'
            color='white'
            h='10%'
            w='100%'
          >Reserve</Button>

          <Flex
            alignItems={'center'}
            p='1rem'>
            <Text m='auto'> you wont be charged yet</Text>
          </Flex>


          <Flex
            flexDirection='column'
            justifyContent='space-between'
            h='22%'
          >
            <Flex justifyContent={'space-between'} >
              <Text textDecoration={'underline'}>$25,116 x 5 nights</Text>
              <Text>1,25,580</Text>
            </Flex>

            <Flex justifyContent={'space-between'}>
              <Text textDecoration={'underline'}>$25,116 x 5 nights</Text>
              <Text>1,25,580</Text>
            </Flex>

            <Flex justifyContent={'space-between'}>
              <Text textDecoration={'underline'}>$25,116 x 5 nights</Text>
              <Text>1,25,580</Text>
            </Flex>
          </Flex>

          <Flex
            borderTop={'1px'}
            borderColor='gray.400'

            mt={'.5rem'}
            pt={'.5rem'}
            alignItems='center'
            justifyContent='space-between'
          >
            <Text>total before tax</Text>
            <Text>$100464</Text>

          </Flex>

        </Box>

      </Box>


    </Flex>

    <Flex>
      <Box w='2rem'>.</Box>
      <DateRange ranges={[range]}
        minDate={new Date()}
        rangeColors={['#ff385c']}
        months={2}
        direction="horizontal"
        onChange={handleRange}
        showSelectionPreview={true}
        style={{ padding: '2rem' }}
        p='2rem'
      />
    </Flex>

  </Box >
}

export default DetailsPage
