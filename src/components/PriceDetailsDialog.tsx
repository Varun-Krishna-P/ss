import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { CatalogProps } from "../types/Catalog";
import { marked } from "marked";

type PriceDetailsDialogProps = {
  open: boolean;
  onClose: () => void;
  catalog: CatalogProps | null;
};

function parseMarkdown(content?: string): string {
  const htmlContent = (content ?? '').replace(/<!--.*?-->/g, '')
  return marked.parse(htmlContent) as string;
}

const PriceDetailsDialog: React.FC<PriceDetailsDialogProps> = ({
  open,
  onClose,
  catalog,
}: PriceDetailsDialogProps) => {
  return (
    <Dialog open={open} onClose={onClose} hideBackdrop>
      <DialogTitle>
        Price Details for: <Typography variant="h6" component="span">{catalog?.name}</Typography>
      </DialogTitle>
      <DialogContent>
        <TableContainer
          component={Paper}
          elevation={3}
          sx={{
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          <Table>
            <TableBody>
              <TableRow>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    bgcolor: "primary.light",
                    color: "primary.contrastText",
                  }}
                >
                  Price
                </TableCell>
                <TableCell>
                  <Box sx={{fontFamily: "monospace", fontWeight: "bold"}}>
                    {catalog?.price ?? "No price details available."}
                  </Box>
                  
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    bgcolor: "primary.light",
                    color: "primary.contrastText",
                  }}
                >
                  Benefits
                </TableCell>
                <TableCell>
                 <Box>
                  <div dangerouslySetInnerHTML={{ __html: parseMarkdown(catalog?.benefits) ?? "No benefits details available." }} />
                  </Box>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={onClose} color="secondary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PriceDetailsDialog;
