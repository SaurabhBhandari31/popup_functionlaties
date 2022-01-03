import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ReportIcon from "@mui/icons-material/Report";
import Switch from "@mui/material/Switch";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";

const label = { inputProps: { "aria-label": "Switch demo" } };
const Home = () => {
  return (
    <>
      <Typography variant="h4" mt={5} ml={3}>
        Create Your Collection
      </Typography>
      <Grid container spacing={2} justifyContent="center" mt={4}>
        <Grid item md={5}>
          <Typography variant="h6">Create Your Collection</Typography>
          <Box
            border={1}
            borderRadius="20px"
            width={500}
            height={300}
            textAlign="center"
          >
            <Typography variant="Body">Choose your File</Typography>
            <br />
            <Button variant="contained">Choose File</Button>
          </Box>
        </Grid>

        <Grid item md={5}>
          <Typography variant="h6">Create Your Collection</Typography>
          <Box
            border={1}
            borderRadius="20px"
            width={600}
            height={300}
            textAlign="center"
          >
            <Typography variant="Body">Choose your File</Typography>
            <br />
            <Button variant="contained">Choose File</Button>
          </Box>
        </Grid>

        <Grid item md={5}>
          <Typography variant="h6">Create Your Collection</Typography>
          <Box
            border={1}
            borderRadius="20px"
            width={800}
            height={300}
            textAlign="center"
          >
            <Typography variant="Body">Choose your File</Typography>
            <br />
            <Button variant="contained">Choose File</Button>
          </Box>
        </Grid>
      </Grid>

      {/* second section******************************************Icoons */}
      <Typography variant="h4" mt={10} ml={3}>
        Icons Collection
      </Typography>
      <Grid container spacing={2} mt={2} pl={3}>
        <Grid item>
          <Box>
            <ReportIcon /> git
          </Box>
        </Grid>
        <Grid item>
          <Box>
            <AddCircleIcon /> git
          </Box>
        </Grid>
        <Grid item>
          <Box>
            <ReportIcon /> git
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={2} mt={2} pl={3}>
        <Grid item>
          <Box>
            <ReportIcon /> git
          </Box>
        </Grid>
        <Grid item>
          <Box>
            <AddCircleIcon /> git
          </Box>
        </Grid>
        <Grid item>
          <Box>
            <ReportIcon /> git
          </Box>
        </Grid>
      </Grid>

      {/* third section *********************************************** */}
      <Typography variant="h4" mt={10} ml={3}>
        Dummy disgin
      </Typography>
      <Grid container spacing={2} justifyContent="center" mt={4}>
        <Grid item md={5}>
          <Box
            border={1}
            borderRadius="20px"
            borderColor="blue"
            width={300}
            height={200}
            textAlign="center"
          >
            <Button>
              {" "}
              <LocalOfferIcon color="primary" fontSize="large" />
            </Button>
            <br />
            <Typography variant="body">Icons Collection</Typography>
          </Box>
        </Grid>
        <Grid item md={5}>
          <Box
            border={1}
            borderRadius="20px"
            borderColor="gray"
            width={300}
            height={200}
            textAlign="center"
          >
            <Button>
              <ReportIcon fontSize="large" />
            </Button>

            <br />
            <Typography variant="body">Icons Collection</Typography>
          </Box>
        </Grid>
      </Grid>
      {/* Fourth section***************************************** */}
      <Typography variant="h4" mt={5} ml={3}>
        Price
      </Typography>
      <Box borderBottom={1} mt={1} ml={3}>
        Some tittle goes here
      </Box>
      <Typography variant="body" mt={2} ml={3}>
        hello Website
      </Typography>
      <br />
      <br />
      {/* fifth section**************************************************************************** */}
      <div>
        <Grid container>
          <Grid item md={5} lg={5}>
            <Box color="primary.main" ml={3}>
              <Typography variant="h4">Uclock the code</Typography>{" "}
            </Box>
          </Grid>
          <Grid item md={5} lg={5}>
            <Box color="primary.main" ml={3}>
              {" "}
              <Switch {...label} defaultChecked />
            </Box>
          </Grid>
        </Grid>
        <Typography variant="body" mt={2} ml={3}>
          hello Website
        </Typography>
        <br />

        <Box borderBottom={1} mt={1} ml={3}>
          Some tittle goes here
        </Box>
        <Typography variant="body" mt={2} ml={3}>
          hello Website
        </Typography>
      </div>
      {/* sixth section ********************************* */}
      <Typography variant="h4" mt={10} ml={3}>
        Extra Features
      </Typography>
      <Grid container spacing={2} justifyContent="center" mt={4}>
        <Grid item md={5}>
          <Box
            border={1}
            borderRadius="20px"
            borderColor="gray"
            width={300}
            height={200}
            textAlign="center"
          >
            <Button>
              <AddCircleIcon fontSize="large" />
            </Button>
            <br />
            <Typography variant="body">GitHub</Typography>
          </Box>
        </Grid>
        <Grid item md={5}>
          <Box
            border={1}
            borderRadius="20px"
            borderColor="blue"
            width={300}
            height={200}
            textAlign="center"
          >
            <Button>
              <AddToPhotosIcon color="primary" fontSize="large" />
            </Button>

            <br />
            <Typography variant="body">Icons Collection</Typography>
          </Box>
        </Grid>
      </Grid>
      {/* seventh section******************************************************* \*/}

      <Typography variant="h4" mt={5} ml={3}>
        Some heading goes here
      </Typography>
      <Typography variant="body" mt={1} ml={3}>
        hello Website
      </Typography>
      <br />
      {/* *eightth section***************** */}
      <Typography variant="h4" mt={5} ml={3}>
        New heading
      </Typography>
      <Box borderBottom={1} mt={1} ml={3}>
        tittle goes here
      </Box>
      <Typography variant="body" mt={2} ml={3}>
        hello tittle
      </Typography>
      <br />
      {/* ****************************** */}
      <Typography variant="h4" mt={5} ml={3}>
        Dummy
      </Typography>
      <Box borderBottom={1} mt={1} ml={3}>
        Some Dummy tittle goes here
      </Box>
      <Typography variant="body" mt={2} ml={3}>
        hello Dummy Content
      </Typography>
      <br />
      <br />
      {/* ****************************** */}
      <Typography variant="body" mt={2} ml={70}>
        <Button variant="outlined">HIDE ADVANCED SETTINGS</Button>
      </Typography>
      <br />
      {/* ****************************** */}

      <Typography variant="h4" mt={2} ml={3}>
        Dummy Content
      </Typography>
      <Typography variant="body" mt={2} ml={3}>
        Dummy Content
      </Typography>
      <br />
      <br />
      {/* ********************************** */}
      <Typography variant="h4" mt={2} ml={3}>
        Come and visit this site
      </Typography>
      <Typography variant="body" mt={2} ml={3}>
        Popup
      </Typography>
      <br />
      <br />
      <br />
      {/* ******************************** */}
      <Typography variant="body" mt={2} ml={3}>
        <Button variant="contained">CREATE ITEM</Button>
      </Typography>
      <br />
    </>
  );
};

export default Home;
