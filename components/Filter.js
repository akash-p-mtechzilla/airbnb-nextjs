import { Text, Flex } from '@chakra-ui/react'
import { IoIosArrowDropright } from 'react-icons/io'
import { FiFilter } from 'react-icons/fi'

const Filter = () => {
  return (
    <Flex
      alignItems='center'
      justifyContent='space-evenly'
      w={['20vw', '20vw', '20vm', '12vm', '12vw']}
      mr={['13%', '13%', '13%', '7%', '7%']}
    >
      <IoIosArrowDropright fontSize='2rem' color='#ababab' />
      <Flex

        border='2px'
        borderRadius='0.6rem'
        alignItems='center'
        justifyContent='space-evenly'
        h='60%'
        w='55%'
      >
        <FiFilter />
        <Text
          fontWeight='bold'
          fontSize='0.8rem'
        >Filters</Text>

      </Flex>
    </Flex>
  )

}


export default Filter
