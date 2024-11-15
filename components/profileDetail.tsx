import React from "react";

import { CardContainer } from "@/components/container";
import { Box } from "@mui/material";

interface userProps {
  address: string;
  age: number | null;
  city: string;
  created_at: string;
  cv_file: string | null;
  description_myself: string;
  first_name: string;
  gender: string;
  gitbe: string | null;
  github: string | null;
  gitlab: string | null;
  id: number;
  instagram: string | null;
  is_active: boolean;
  last_name: string;
  linkedin: string | null;
  nickname: string | null;
  phone_number: string;
  profile_image: string | null;
  skills: string[];
  slug_id: string;
  state: string;
  telegram: string | null;
  twitter: string | null;
  updated_at: string;
  user: number;
}

interface infoProps {
  info: userProps;
}

const ProfileDetail: React.FC<infoProps> = ({ info }) => {
  console.log(info);
  return (
    <CardContainer>
      <Box>detail</Box>
    </CardContainer>
  );
};
export default ProfileDetail;
