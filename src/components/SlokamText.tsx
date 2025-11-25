import { Typography } from "@mui/material";
import React from "react";

type SloKamTextProps = {
  text: string;
};

const SlokamText = ({ text }: SloKamTextProps) => {
  return (
    <Typography
      variant="body1"
      gutterBottom
      fontFamily="serif"
      dangerouslySetInnerHTML={{ __html: text.replace(/\n/g, "<br/>") }}
      sx={{ whiteSpace: "pre-line", fontWeight: "900", color: "text.secondary" }}
    />
  );
};

export default SlokamText;
