import React from "react";
import { useQuery } from "@tanstack/react-query";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

import ListItem from "@/components/List/ListItem";
import Loading from "@/components/Loading";
import Error from "@/components/Error";

import { searchUsersByQuery } from "@/utils/api";

interface IListResults {
  query: string;
  handleLoading: (e: boolean) => void;
}

const ListResult = ({ query }: IListResults) => {
  const { data, status, error } = useQuery<SearchUsersResponse, Error>({
    queryKey: [query],
    queryFn: () => searchUsersByQuery(query.toLowerCase()),
  });

  const result = data?.data.items;

  if (status === "error") return <Error message={error?.message} />;
  if (status === "loading") return <Loading />;

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "600px",
        mt: 2,
        mx: "auto",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        maxHeight: "400px",
        overflowY: "auto",
        padding: 1,
        borderRadius: "8px",
        border: "1px solid #ddd",
        backgroundColor: "#fff",
      }}
    >
      {result && result.length === 0 ? (
        <Typography textAlign="center">No user found</Typography>
      ) : (
        result?.map((item) => (
          <Accordion key={item.node_id} sx={{ borderRadius: 2 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`content-${item.node_id}`}
              id={`header-${item.node_id}`}
            >
              <Typography fontWeight="bold">{item.login}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ pl: 3 }}>
              <ListItem username={item.login} />
              <Link
                href={`https://github.com/${item.login}?tab=repositories`}
                target="_blank"
                sx={{ display: "block", mt: 1, color: "primary.main" }}
              >
                More repos from {item.login}
              </Link>
            </AccordionDetails>
          </Accordion>
        ))
      )}
    </Box>
  );
};

export default ListResult;
