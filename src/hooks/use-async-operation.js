import { toastError } from "@/lib/toast";
import { ERROR_MESSAGES } from "@/utils/constant";
import { apiAsyncHandler } from "@/utils/function";
import { useState } from "react";

// const [submitFunction, loading] = useAsyncOperation(apiFunction,handleError,{options});

const useAsyncOperation = (
  operation,
  handleError,
  options = {
    notification: { title: "", message: "" },
    notificationType: "toast", // toast | default
    autoHide: false,
  }
) => {
  const [loading, setLoading] = useState(false);

  const executeOperation = async (params) => {
    setLoading(true);
    return await apiAsyncHandler(
      async () => {
        const result = await operation(params);
        return result;
      },
      (error) => {
        const { notification } = options || {};

        let isHandled = false;
        const message = error?.message || ERROR_MESSAGES.common;

        if (handleError && typeof handleError === "function") {
          isHandled = handleError(error);
        }

        if (!isHandled) {
          // Use Sonner toast for error notifications
          const title = notification?.title || "Error";
          toastError(`${title}: ${message}`);
        }

        return null;
      },
      () => {
        setLoading(false);
      }
    );
  };

  const hookData = [executeOperation, loading];
  hookData.executeOperation = executeOperation;
  hookData.loading = loading;
  return hookData;
};

export default useAsyncOperation;