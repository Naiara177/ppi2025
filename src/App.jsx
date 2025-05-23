import "./styles/theme.css";
import "./styles/global.css";
import { MyText } from "./components/MyText";

export default function App() {
  return (
    //React Fragments
    <>
      <MyText title= "1. Lorem  minus consequuntur">
     <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </MyText>

       <MyText title= "2. minus consequuntur accusamus">
       <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
        voluptatem eum ducimus aliquid quod repudiandae? Vel laborum nemo beatae
        eveniet minus consequuntur accusamus. Inventore praesentium libero quia
        illo, odio earum? </p>
        </MyText>

        <MyText title= "3.  Lorem ipsum dolor ">
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
        voluptatem eum ducimus aliquid quod repudiandae?</p>
        </MyText>
        </>
  );
}
