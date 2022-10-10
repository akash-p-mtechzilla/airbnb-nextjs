import { Box, Text } from "@chakra-ui/react";
import ImageCard from "../../components/ImageCard";

const NavSections = ({ image }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      pl='7%'
      // pl={['5%', '5%', '5%', '7%', "7%"]}
      pr="5%"
      flexDirection={["column", "column", "row", "row", "row"]}
      flexWrap="wrap"
      py="1.5rem"
      pt="22vh"
    >
      {image.hits.map((obj) => {
        return <ImageCard obj={obj} key={obj.id} />;
      })}
    </Box>
  );
};

export default NavSections;

export const getStaticPaths = () => {
  return {
    paths: [
      { params: { keyword: "arctic" } },
      { params: { keyword: "cabin" } },
      { params: { keyword: "country+side" } },
      { params: { keyword: "islands" } },
      { params: { keyword: "technology" } },
      { params: { keyword: "beaches" } },
      { params: { keyword: "pools" } },
      { params: { keyword: "parks" } },
      { params: { keyword: "tiny+homes" } },
      { params: { keyword: "lakes" } },
      { params: { keyword: "amazing+view" } },
      { params: { keyword: "caves" } },
      { params: { keyword: "tropical" } },
      { params: { keyword: "windmill" } },
      { params: { keyword: "towers" } },
      { params: { keyword: "treehouse" } },
      { params: { keyword: "desert" } },
    ],
    fallback: false,
  };
};

export async function getStaticProps(context) {
  const id = context.params.keyword;

  const res = await fetch(
    `https://pixabay.com/api/?key=30398713-7b8ce5b10cc95dd5af3d9c166&q=${id}&image_type=photo&pretty=true`
  );

  const data = await res.json();

  return {
    props: {
      image: data,
    },
  };
}
