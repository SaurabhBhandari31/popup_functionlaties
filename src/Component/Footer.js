import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ReportIcon from "@mui/icons-material/Report";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const Footer = () => {
  return (
    <div>
      <Box bgcolor="blue" width="100%" height={400} mt={3}>
        <Typography variant="h6" pt={5} ml={3} color="white">
          Create Your Collection
        </Typography>
        <Grid container spacing={2} pl={3}>
          <Grid item>
            <Button>
              <ReportIcon color="info" />
            </Button>
          </Grid>
          <Grid item>
            <Button>
              <AddCircleIcon color="info" />
            </Button>
          </Grid>
          <Grid item>
            <Button>
              {" "}
              <ReportIcon color="info" />
            </Button>
          </Grid>
        </Grid>
        <br />
        {/* ********************************************** */}
        <Grid container spacing={2} pl={1}>
          <Grid item md={3}>
            <Typography variant="h6" ml={3} color="white">
              Quik Links
            </Typography>
            <Typography variant="div" ml={3}>
              <Button>Home</Button>
            </Typography>
            <br />
            <Typography variant="div" ml={3}>
              <Button>about us</Button>
            </Typography>
            <br />
            <Typography variant="div" ml={3}>
              <Button>Services</Button>
            </Typography>
          </Grid>
          <Grid item md={3}>
            <Typography variant="h6" ml={3} color="white">
              Follow us
            </Typography>
            <Typography variant="div" ml={3}>
              <Button>Instagram</Button>
            </Typography>
            <br />
            <Typography variant="div" ml={3}>
              <Button>Facebook</Button>
            </Typography>
            <br />
            <Typography variant="div" ml={3}>
              <Button>Youtube</Button>
            </Typography>
          </Grid>
          <Grid item md={3}>
            <Typography variant="h6" ml={3} color="white">
              Quik Links
            </Typography>
            <Typography variant="div" ml={3}>
              <Button>Home</Button>
            </Typography>
            <br />
            <Typography variant="div" ml={3}>
              <Button>about us</Button>
            </Typography>
            <br />
            <Typography variant="div" ml={3}>
              <Button>Services</Button>
            </Typography>
          </Grid>
          <Grid item md={3}>
            <Typography variant="h6" ml={3} color="white">
              Subscribe to Our NEWSLatter
            </Typography>
            <Typography variant="div" ml={3}>
              <Button color="info" variant="contained" endIcon={<SendIcon />}>
                Send
              </Button>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Footer;
