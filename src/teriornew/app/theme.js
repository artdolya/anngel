import { extendTheme } from "@chakra-ui/react";
import '@fontsource/roboto/100.css'; 
import '@fontsource/roboto/300.css'; 
import '@fontsource/roboto/400.css'; 
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css'; 
import '@fontsource/roboto/900.css'; 


const theme = extendTheme({
  fonts: {
    heading: `'Roboto', sans-serif`,
    body: `'Roboto', sans-serif`,
  },
  components:{
    Button: {
      border: "1px solid",
      fontSize: "xl",
      fontWeight: 700,
      backgroundColor: "#FFF"
    },
  },
});

export default theme