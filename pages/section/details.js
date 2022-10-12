import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
import React, { useState, useEffect } from 'react'
import {
  Divider,
  Input,
  Text, Heading, Box, Flex, Img,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
import { DateRange } from 'react-date-range'


const DetailsPage = () => {

  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [guest, setGuest] = useState(1)

  const [detailsData, setDetailsData] = useState('')

  useEffect(() => {
    const url = localStorage.getItem('imgUrl')
    setDetailsData(url)
  }, [])

  const getTotal = (discount) => {

    let days = endDate.getDate() - startDate.getDate()
    let ans = 20435 * Number(days) * Number(guest)
    let discounted = days === 0 ? ans : ans - discount

    return discounted.toLocaleString('en-IN', {
      maximumFractionDigits: 2,
      style: 'currency',
      currency: 'INR'
    })

  }

  const range = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection'
  }

  const handleRange = (ranges) => {
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }



  return <Box pt='21vh' px='5%'>

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
        <Flex alignItems={'center'} justifyContent={'center'} >
          &#9735;
          <Text fontSize='1rem' textDecoration='underline'>
            Share
          </Text>
          <Box p='5px'></Box>
          &#9825;
          <Text fontSize='1rem' textDecoration='underline'>  Save</Text>
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

            <Text fontSize='1.7rem'
            >
              Entire villa hosted by Wayan
            </Text>
            <Text>10 guests &#x2022; 5 bed rooms &#x2022; 5 beds &#x2022;  4.5 bathrooms </Text>
          </Box>
          <Img h={'3rem'} borderRadius='50%' name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
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

        <Divider />

        <Box p='2rem' >
          <Text mt={4}>A unique bamboo house and a work of art. Both the river valley view & interior are remarkable, providing such a marvelous feast to the eyes that guests find it extraordinary to live so in touch with nature but in complete luxury</Text>

          <Text py='1rem'>For more information, check the TED Talk with Elora Hardy about Sharma Springs . The Apple TV show HOME also features Sharma Springs.</Text>

          <Heading fontSize='1rem' textDecoration='underline'>Learn more... </Heading>
        </Box>


        <Divider />



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
                <Box fontSize={'2xl'} fontWeight={'medium'}>
                  Bedroom 2
                </Box>

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

      {/* ======================== */}

      <Box
        w='40%'
        p='4.5rem'
        display='flex'
        flexDirection={'column'}
        // alignItems={'center'}
        justifyContent='center'
      >

        <Box
          h='45%'
          border='1px'
          borderRadius='.7rem'
          borderColor='gray.400'
          boxShadow='2xl'
          p='1.5rem'
        >

          <Flex
            alignItems={'center'}
            justifyContent='space-between'>
            <Flex
              alignItems={'center'}
            >
              <Text fontSize={'1.5rem'} fontWeight='medium'> &#8377;20,435</Text>
              <Text> night</Text>
            </Flex>

            <Text textDecoration={'underline'} fontWeight={'bold'} color='gray.600'>150 reviews</Text>
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
                w='50%' h='100%' p='.45rem'>
                <Text fontSize={'.65rem'} fontWeight={'bold'} >CHECK-IN</Text>
                <Text fontSize={'0.9rem'}>
                  {startDate.getMonth() + 1}/{startDate.getDate()}/{startDate.getFullYear()}
                </Text>
              </Box>
              <Box
                borderColor='gray.400'
                w='50%' h='100%' p='.45rem'>
                <Text fontSize={'.65rem'} fontWeight={'bold'} >CHECK-IN</Text>
                <Text fontSize={'0.9rem'}>
                  {endDate.getMonth() + 1}/{endDate.getDate()}/{endDate.getFullYear()}
                </Text>
              </Box>
            </Box>
            <Box p='.4rem'  >

              <Text fontSize={'.65rem'} fontWeight={'bold'} >NO OF GUESTS</Text>
              <Text fontSize={'.7rem'}></Text>
              <Input type='number' size='xs' value={guest} onChange={(e) => setGuest(e.target.value)} defaultValue='1' placeholder='no. of Guests' border='none' _active='none' _focus='none' focusBorderColor='transparent' />
            </Box>
          </Box>

          <Box
            display={'flex'}
            alignItems='center'
            justifyContent={'center'}
            backgroundColor='#ff385c'
            borderRadius='.5rem'
            color='white'
            h='12%'
            w='100%'
          >Reserve</Box>

          <Flex
            alignItems={'center'}
            p='1rem'>
            <Text m='auto' fontSize={'0.85rem'} color='gray.700'> you wont be charged yet</Text>
          </Flex>


          <Flex
            flexDirection='column'
            justifyContent='space-between'
            h='22%'
            color='gray.700'
          >
            <Flex justifyContent={'space-between'} >
              <Text textDecoration={'underline'}> 20435 x  {endDate.getDate() - startDate.getDate()} nights</Text>
              <Text>{getTotal(0)}</Text>
            </Flex>

            <Flex justifyContent={'space-between'}>
              <Text textDecoration={'underline'}>Discount</Text>
              <Text color={'green.600'} fontWeight='bold'>-2,580</Text>
            </Flex>

            <Flex justifyContent={'space-between'}>
              <Text textDecoration={'underline'}>Service fee</Text>
              <Text>0</Text>
            </Flex>
          </Flex>

          <Flex
            borderTop={'1px'}
            borderColor='gray.400'
            mt={'.5rem'}
            p={'1rem'}
            alignItems='center'
            justifyContent='space-between'
            fontSize={'1.1rem'}
            fontWeight={'bold'}
          >
            <Text>Total before tax</Text>
            <Text>{getTotal(2580)}</Text>

          </Flex>

        </Box>

      </Box>


    </Flex>

    <Divider />


    <Flex py='3rem'>
      <Box w='2rem'></Box>
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
