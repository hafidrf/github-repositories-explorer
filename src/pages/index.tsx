import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useFormQuery } from "@/hooks/useFormQuery";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import Layout from "@/components/Layout";
import FormSearch from "@/components/Form/FormSearch";
import ListResult from "@/components/List/ListResult";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import animationData from "@/../public/animation.json";

export default function Home() {
  const { handleLoading, handleSubmit, isLoading, query } = useFormQuery();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Layout>
      <Container
        maxWidth="md"
        sx={{
          my: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        {/*  */}
        {isClient && (
          <Box
            sx={{
              width: { xs: "150px", sm: "200px", md: "250px" },
              height: { xs: "150px", sm: "200px", md: "250px" },
              mb: 2,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Lottie animationData={animationData} loop={true} />
          </Box>
        )}

        {/* Search Form */}
        <Box
          sx={{
            width: "100%",
            maxWidth: "600px",
          }}
        >
          <FormSearch handleSubmit={handleSubmit} isLoading={isLoading} />
        </Box>

        {/* Result Search */}
        {query.length > 0 && (
          <Box
            sx={{
              width: "100%",
              maxWidth: "600px",
              textAlign: "center",
            }}
          >
            <Typography
              color="text.secondary"
              gutterBottom
              data-testid="search-result-copy"
              sx={{ fontSize: { xs: "14px", sm: "16px", md: "18px" } }}
            >
              Showing users for &apos;{query}&apos;
            </Typography>
            <ListResult query={query} handleLoading={handleLoading} />
          </Box>
        )}
      </Container>
    </Layout>
  );
}
