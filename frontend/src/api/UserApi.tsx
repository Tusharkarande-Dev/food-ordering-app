import { useMutation } from "react-query";

type CreateUserRequest = {
  auth0Id: string;
  email: string;
}

export const useCreateUser = () => {
  const createUserRequest = async(user: CreateUserRequest) => {
      const res = await fetch(`/api/my/user`,{
        method: "POST",
        headers: {
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