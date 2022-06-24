import { Box } from "@mui/material";
import ExerciseCard from "./ExerciseCard";
import BodyPart from "./BodyPart";
import "@splidejs/react-splide/css/sea-green";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { horizontalScrollbar } from "./HorizontalScrollbar.def";

const HorizontalScrollbar: React.FC<horizontalScrollbar> = ({
  data,
  bodyParts,
  setBodyPart,
  bodyPart,
}) => {
  return (
    <Splide options={{ perPage: 4, type: "loop" }}>
      {data.map((item: any) => (
        <SplideSlide key={item.id || item}>
          <Box m="0 40px">
            {bodyParts ? (
              <BodyPart
                item={item}
                setBodyPart={setBodyPart}
                bodyPart={bodyPart}
              />
            ) : (
              <ExerciseCard exercise={item} />
            )}
          </Box>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default HorizontalScrollbar;
