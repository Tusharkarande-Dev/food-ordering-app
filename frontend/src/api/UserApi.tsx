import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "react-query";
import { toast } from "sonner";


type CreateUserRequest = {
  auth0Id: string;
  email: string;
};

export const useCreateUser = () => {
  const { getAccessTokenSilently } = useAuth0();

  const createUserRequest = async (user: CreateUserRequest) => {
    const accessToken = await getAccessTokenSilently();
    const res = await fetch(`/api/user`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!res.ok) {
      throw new Error("Failed to create user");
    }
  };

  const {
    mutateAsync: createUser,
    isLoading,
    isError,
    isSuccess,
  } = useMutation(createUserRequest);

  return {
    createUser,
    isLoading,
    isError,
    isSuccess,
  };
};

type UpdateUserRequest = {
  name: string;
  addressLine1: string;
  city: string;
  country: string;
};

export const useUpdateUser = () => {
  const { getAccessTokenSilently } = useAuth0();

  const updateUserRequest = async (formData: UpdateUserRequest) => {
    const accessToken = await getAccessTokenSilently();
    const res = await fetch("/api/user", {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (!res.ok) {
      throw new Error("Failed to update user");
    }
  };

  const {
    mutateAsync: updateUser,
    isLoading,
    isSuccess,
    error,
    reset
  } = useMutation(updateUserRequest);

  if(isSuccess) {
    toast.success("User profile updated!")
  }

  if(error) {
    toast.error(error.toString());
    reset();
  }

  return {
    updateUser,
    isLoading,
    isSuccess,
    error,
    reset
  };
};
