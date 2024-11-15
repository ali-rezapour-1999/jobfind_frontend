import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { CardContainer } from "./container";
import userImagePlaceholder from "@/public/user.svg";
import ModalContainer from "./modal";

interface Props {
  profileNavigatorHandler: (slug: string) => void;
  phone: string | "-";
  userUrl: string | null;
}

const SideBar: React.FC<Props> = ({
  profileNavigatorHandler,
  phone,
  userUrl,
}) => {
  const [email, setEmail] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);

  const menuListItem = [
    { slug: "detail", title: "حساب کاربری" },
    { slug: "job", title: "درخواست های شما" },
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
      <Box width="100%" height="250px">
        {userUrl ? (
          <Image
            src={userUrl}
            alt="userimage"
            width={500}
            height={500}
            priority={true}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "20px",
            }}
          />
        ) : (
          <Image
            src={userImagePlaceholder}
            alt="userimage"
            width={500}
            height={500}
            priority={true}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "20px",
            }}
          />
        )}
      </Box>
      <Stack spacing={1} color="primary.main" padding="0 10px">
        <Typography fontSize="15px" fontWeight="bold">
          ایمیل : {email || null}
        </Typography>

        <Typography fontSize="15px" fontWeight="bold">
          شماره همراه : {phone != null ? phone : "-----------"}
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
      <ModalContainer
        show={showModal}
        closeHanlder={() => setShowModal(false)}
      />
      <Button
        sx={{
          padding: "10px",
          color: "white",
          fontWeight: "bold",
          background: "#FA4032 ",
          borderRadius: "10px",
        }}
        onClick={() => setShowModal(true)}
      >
        خروج از حساب کاربری
      </Button>
    </CardContainer>
  );
};

export default SideBar;
