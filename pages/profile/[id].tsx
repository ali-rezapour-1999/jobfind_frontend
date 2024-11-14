import Wrapper from "@/components/wrapper";
import React from "react";
import { useRouter } from "next/router";
import baseApi from "@/config/baseApi";

const UserProfile = () => {
  const router = useRouter();
  const { id } = router.query;
  React.useEffect(() => {
    if (id) {
      const GetData = async () => {
        const res = await baseApi.get(`/profile/profiles/${id}/`);
        console.log(res.data);
      };
      GetData();
    } else {
      router.push("/");
    }
  }, [id, router]);
  return <Wrapper>userProfile</Wrapper>;
};

export default UserProfile;
