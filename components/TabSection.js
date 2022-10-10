
import { Box } from "@chakra-ui/react";
import Tabitems from "./Tabitems";

const sectionData = [
  { word: "design", name: "Design" },
  { word: "arctic", name: "Arctic" },
  { word: "cabin", name: "Cabin" },
  { word: "country+side", name: "Country" },
  { word: "islands", name: "Islands" },
  { word: "technology", name: "Omg" },
  { word: "beaches", name: "Beaches" },
  { word: "pools", name: "Pools" },
  { word: "parks", name: "Parks" },
  { word: "tiny+homes", name: "Homes" },
  { word: "lakes", name: "Lakes" },
  { word: "amazing+view", name: "Views" },
  { word: "caves", name: "Caves" },
  { word: "tropical", name: "Tropical" },
  { word: "windmill", name: "Windmill" },
  { word: "towers", name: "Towers" },
  { word: "treehouse", name: "Treehouse" },
  { word: "desert", name: "Desert" },
];

const TabSection = () => {
  return (
    <Box
      ml="5%"
      display="flex"
      alignItems="center"
      style={{ overflowX: "scroll" }}
      h={[null, null, "5rem", "5rem", "5rem"]}
      w={[null, null, '90vw', '90vw', '90vw']}
      pt={[null, null, null, "1rem", "1rem"]}
    >
      {sectionData.map((item) => {
        return <Tabitems key={item.name} item={item} />;
      })}
    </Box>
  );
};

export default TabSection;
