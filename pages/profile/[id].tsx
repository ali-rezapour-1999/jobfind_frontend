import Wrapper from "@/components/wrapper";
import React, { useState } from "react";
import { useRouter } from "next/router";
import baseApi from "@/config/baseApi";
import { CircularProgress, Grid2 } from "@mui/material";
import SideBar from "@/components/sidebar";
import ProfileDetail from "@/components/profileDetail";

interface detail {
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

const Dashbord = () => {
  const [profileNavigate, setProfileNavigate] = useState<string | null>(
    "detail",
  );
  const router = useRouter();
  const { id } = router.query;
  const [infoData, setInfoData] = useState<detail | null>(null);
  React.useEffect(() => {
    if (id) {
      const GetData = async () => {
        const res = await baseApi.get(`/profile/profiles/${id}/`);
        setInfoData(res.data);
      };
      const Navigate = () => {
        if (profileNavigate === "detail") {
          return ProfileDetail;
        }
      };
      GetData();
      Navigate();
    } else {
    }
  }, [id, router, profileNavigate]);

  return (
    <Wrapper>
      <Grid2 container spacing={2}>
        <Grid2 size={4}>
          <SideBar
            profileNavigatorHandler={setProfileNavigate}
            phone={infoData ? infoData?.phone_number : ""}
            userUrl={infoData ? infoData?.profile_image : ""}
          />
        </Grid2>
        <Grid2 size={8}>
          {infoData ? <ProfileDetail info={infoData} /> : <CircularProgress />}
        </Grid2>
      </Grid2>
    </Wrapper>
  );
};

export default Dashbord;
