import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "react-query";

type CreateUserRequest = {
  auth0Id: string;
  email: string;
}

export const useCreateUser = () => {
  const { getAccessTokenSilently } = useAuth0();

  const createUserRequest = async(user: CreateUserRequest) => {
    const accessToken = await getAccessTokenSilently();
      const res = await fetch(`/api/user`,{
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user)
      })

      if(!res.ok) {
        throw new Error("Failed to create user")
      }
  }

  const {mutateAsync: createUser, isLoading, isError,isSuccess} = useMutation(createUserRequest)

  return {
    createUser,
    isLoading,
    isError,
    isSuccess
  }
}