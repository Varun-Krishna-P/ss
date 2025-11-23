type AlertDataProps = {
  message: string;
  severity: "error" | "warning" | "info" | "success";
  success?: string;
  error?: string;
};


export default AlertDataProps;