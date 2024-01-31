"use client";
import Link from "next/link";
import { Grid, Box, Card, Stack, Typography } from "@mui/material";
import Logo from "@/app/components/shared/Logo";
import AuthLogin from "../components/auth/AuthLogin";
import { Header } from "../layout/header/Header";
import { PublicRoute } from "../components/shared/PublicRoute";

const Login = () => {
  return (
    <PublicRoute>
      <Header open={false} isLogin />
      <Box
        sx={{
          position: "relative",
          display: 'flex', 
          backgroundColor: '#fff',
          "&:before": {
            content: '""',
            backgroundSize: "400% 400%",
            animation: "gradient 15s ease infinite",
            position: "absolute",
            height: "100%",
            width: "100%",
            opacity: "0.3",
          },
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
              elevation={1}
              sx={{ p: 4, zIndex: 1, width: "100%", maxWidth: "500px", border: 'solid 2px #f1f1f1', boxShadow: 'none' }}
            >
              <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
                <Logo isLogin />
              </Box>
              <AuthLogin
                title="Ingresa tus datos"
                subtitle={
                  <Stack
                    direction="row"
                    spacing={1}
                    justifyContent="center"
                    mt={3}
                  >
                    <Typography
                      component={Link}
                      href="/recovery"
                      fontWeight="500"
                      sx={{
                        textDecoration: "none",
                        color: "#2f95ee",
                      }}
                    >
                      ¡Olvidaste tu contraseña!
                    </Typography>
                  </Stack>
                }
              />
            </Card>
          </Grid>
        </Grid>
      </Box>
    </PublicRoute>
  );
};
export default Login;
