import ImageCard from "../components/ImageCard";
import { Box } from "@chakra-ui/react";

export default function Home({ sectionData }) {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      pl="7%"
      pr="5%"
      flexDirection={["column", "column", "row", "row", "row"]}
      flexWrap="wrap"
      py="1.5rem"
      pt="22vh"
    >
      {sectionData.hits.map((obj) => {
        return <ImageCard obj={obj} key={obj.id} />;
      })}
    </Box>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    `https://pixabay.com/api/?key=30398713-7b8ce5b10cc95dd5af3d9c166&q=indoors&image_type=photo&pretty=true`
  );
  const data = await res.json();

  return {
    props: {
      sectionData: data,
    },
  };
};
