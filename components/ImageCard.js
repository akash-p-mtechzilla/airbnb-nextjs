import { Box, Text, Img } from "@chakra-ui/react";
import Link from "next/link";


const ImageCard = ({ obj }) => {

  const setUrl = () => {
    return window.localStorage.setItem('imgUrl', obj.largeImageURL)
  }

  return (
    <div onClick={setUrl}>

      <Link href='/section/details'>
        <div>
          <Img
            borderRadius="0.6rem"
            boxSize={["89vw", "89vw", "43vw", "20vw", "20vw"]}
            src={obj.largeImageURL}
            alt={obj.tag}
            h="20rem"
          />
          <Box pt="2" pb="4">
            <Box display="flex" justifyContent="space-between">
              <Text fontSize="sm" color="black" fontWeight="600">
                Cape yamu , Thailand
              </Text>

              <Text fontSize="sm" color="black">
                &#9733; 4.72
              </Text>
            </Box>

            <Text fontSize="xs" color="gray.600">
              2,990 kilometers away
            </Text>
            <Text fontSize="xs" color="gray.600">
              13-18 oct
            </Text>

            <Box display="flex">
              <Text fontSize="sm" color="black" fontWeight="600" pr="3px">
                $2,435
              </Text>
              <Text fontSize="sm" color="black">
                night
              </Text>
            </Box>
          </Box>
        </div>
      </Link>
    </div>
  );
};

export default ImageCard;
