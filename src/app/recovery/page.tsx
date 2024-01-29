"use client";
import { Grid, Box, Card } from "@mui/material";
import Logo from "@/app/components/shared/Logo";
import AuthRecovery from "../components/auth/AuthRecovery";
import { PublicRoute } from "../components/shared/PublicRoute";
import { Header } from "../layout/header/Header";

const Recovery = () => (
  <PublicRoute>
    <Header open={false} isLogin />
    <Box
      sx={{
        position: "relative",
        display: 'flex', 
        backgroundColor: '#fff',
      }}
    >
      <Grid
        container
        spacing={0}
        justifyContent="center"
        sx={{ height: "100vh" }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          lg={4}
          xl={3}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Card
            elevation={9}
            sx={{ p: 4, zIndex: 1, width: "100%", maxWidth: "500px", border: 'solid 2px #f1f1f1', boxShadow: 'none' }}
          >
            <Box display="flex" alignItems="center" justifyContent="center" mb={4} p={1} sx={{ backgroundColor: 'primary.main' }}>
              <Logo />
            </Box>
            <AuthRecovery />
          </Card>
        </Grid>
      </Grid>
    </Box>
  </PublicRoute>
);

export default Recovery;
