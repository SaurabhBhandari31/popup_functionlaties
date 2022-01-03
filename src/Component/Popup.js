import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import CancelIcon from "@mui/icons-material/Cancel";
import { Button } from "@mui/material";
const Popup = () => {
  const [state, setState] = useState(true);
  return (
    <>
      <Dialog open={state}>
        <Typography variant="div" align="end">
          <Button onClick={() => setState(false)}>
            <CancelIcon />
          </Button>
        </Typography>
        <DialogTitle color="blue">Collection</DialogTitle>
        <DialogContent>
          <Stack direction="row" spacing={2}>
            <Avatar />
            <Typography variant="body" component="body">
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem.
            </Typography>
          </Stack>
          <br />
          <Typography variant="div" ml={25}>
            <Button variant="contained">View Profile</Button>
          </Typography>
          <br />

          <Typography variant="h6" component="h3">
            Display Name:
          </Typography>
          <br />

          <Typography variant="h6" component="h3">
            Display Symbol:
          </Typography>
          <br />

          <Typography variant="h6" component="h3">
            Display Some heading:
          </Typography>
          <br />
          <Typography borderBottom={1} variant="h6" component="h3">
            Display Some heading:
          </Typography>
          <br />
          <br />

          <Typography variant="div" ml={23}>
            <Button variant="contained">CREATE COLLECTION</Button>
          </Typography>

          {/* <Grid container spacing={2} justifyContent="center" mt={4}>
        <Grid item md={5}>

                </Grid>
                </Grid> */}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Popup;
