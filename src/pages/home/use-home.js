import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { homeFormSchema } from "@/utils/validation";
import useAsyncOperation from "@/hooks/use-async-operation";
import { api } from "@/api/client";

const initialValues = {
  url: "",
  type: "manual",
  description: "",
};

const useHome = () => {
  const methods = useForm({
    resolver: zodResolver(homeFormSchema),
    defaultValues: initialValues,
    values: initialValues,
  });

  const [onSubmit, loading, notification] = useAsyncOperation(
    async (values) => {
      const response = await api.tester.run({ data: values });
      console.log("Test run response:", response);
      return response;
    }
  );

  return {
    methods,
    onSubmit,
    loading,
    notification,
  };
};

export default useHome;
