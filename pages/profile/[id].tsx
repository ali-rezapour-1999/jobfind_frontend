import Wrapper from "@/components/wrapper";
import React, { useState } from "react";
import { useRouter } from "next/router";
import baseApi from "@/config/baseApi";

const UserProfile = () => {
  const router = useRouter();
  const { id } = router.query;
  const [infoData, setInfoData] = useState(null);
  React.useEffect(() => {
    if (id) {
      const GetData = async () => {
        const res = await baseApi.get(`/profile/profiles/${id}/`);
        setInfoData(res.data);
      };
      GetData();
    } else {
      router.push("/");
    }
  }, [id, router]);
  return <Wrapper>alirg</Wrapper>;
};

export default UserProfile;
