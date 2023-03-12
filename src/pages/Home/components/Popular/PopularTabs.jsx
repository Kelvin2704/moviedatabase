import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Popular from "./Popular";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function tabProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function PopularTabs({ title }) {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    // console.log("newValue", newValue);
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "85%", margin: "auto", position: "relative", marginTop: "30px", marginBottom: "30px" }}>
      <Box sx={{ borderBottom: 1, borderColor: "gray" }}>
        <div className="flex items-center justify-start">
          <h1 className="text-xl font-bold mr-4">{title}</h1>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab sx={{ fontSize: "20px", textTransform: "capitalize", color: "whitesmoke" }} label="Theaters" {...tabProps(0)} />
            <Tab sx={{ fontSize: "20px", textTransform: "capitalize", color: "whitesmoke" }} label="On TV" {...tabProps(1)} />
            
          </Tabs>
        </div>
      </Box>
      <TabPanel value={value} index={0}>
      <Popular title="Popular Movies" url="movie/popular" type="POPULAR_MOVIES" />
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Popular title="Popular TV" url="tv/popular" type="POPULAR_TV" />
      </TabPanel>
    </Box>
  );
}
