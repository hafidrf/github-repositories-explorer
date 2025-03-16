import { useQuery } from "@tanstack/react-query";

import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import StarIcon from "@mui/icons-material/Star";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { grey } from "@mui/material/colors";

import { getReposByUsername } from "@/utils/api";
import Loading from "@/components/Loading";
import Error from "@/components/Error";

interface IListItem {
  username: string;
}

const ListItem = ({ username }: IListItem) => {
  const { data, status, error } = useQuery<ListUserReposResponse, Error>({
    queryKey: ["repos", username],
    queryFn: () => getReposByUsername(username),
    enabled: !!username,
  });

  const result = data?.data;

  if (status === "error") return <Error message={error?.message} />;
  if (status === "loading") return <Loading />;

  return (
    <Box sx={{ py: 1 }}>
      {result && result.length === 0 ? (
        <p>no user found</p>
      ) : (
        <Stack spacing={1}>
          {result?.map((repo) => (
            <Card
              key={repo.node_id}
              variant="outlined"
              sx={{ backgroundColor: grey[200] }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <CardHeader title={repo.name} />
                <Typography
                  variant="body2"
                  sx={{ display: "flex", alignItems: "center", p: 2 }}
                >
                  {repo.stargazers_count} <StarIcon />
                </Typography>
              </Box>
              <CardContent>
                <Typography variant="body2">
                  {repo.description || "no description"}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Stack>
      )}
    </Box>
  );
};

export default ListItem;
