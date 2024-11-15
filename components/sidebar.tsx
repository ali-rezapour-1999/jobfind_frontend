import React, { useEffect, useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { CardContainer } from "./container";
import user from "@/public/user.jpg";

interface Props {
  profileNavigatorHandler: (slug: string) => void;
  phone: string;
}

const SideBar: React.FC<Props> = ({ profileNavigatorHandler, phone }) => {
  const [email, setEmail] = useState<string>("");

  const menuListItem = [
    { slug: "detail", title: "حساب کاربری" },
    { slug: "settings", title: "Settings" },
  ];

  useEffect(() => {
    const localEmail = localStorage.getItem("authToken");
    if (localEmail) {
      try {
        const parsedToken = JSON.parse(localEmail);
        if (parsedToken.email) {
          setEmail(parsedToken.email);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }, []);
  return (
    <CardContainer>
      <Box width="100%" height="200px">
        <Image
          src={user}
          alt="userimage"
          width={500}
          height={500}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "20px",
          }}
        />
      </Box>
      <Stack spacing={1} color="primary.main" padding="0 10px">
        <Typography fontSize="15px" fontWeight="bold">
          ایمیل : {email || null}
        </Typography>

        <Typography fontSize="15px" fontWeight="bold">
          {"شماره همراه : " + phone || null}
        </Typography>
      </Stack>
      <List sx={{ gap: "2px" }}>
        {menuListItem.map((item, index) => (
          <ListItem sx={{ padding: "3px 0" }} key={index}>
            <ListItemButton
              sx={{
                background: "rgba(0,0,0,.1)",
                borderRadius: "10px",
                boxShadow: "0px 3px 7px rgba(0,0,0,0.1)",
                fontSize: "14px",
                paddingY: "15px",
              }}
              onClick={() => profileNavigatorHandler(item.slug)}
            >
              {item.title}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </CardContainer>
  );
};

export default SideBar;
