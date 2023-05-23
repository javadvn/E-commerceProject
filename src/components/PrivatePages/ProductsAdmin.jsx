import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import { baseService } from "../axios/baseService";

const ProductsAdmin = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);
  const [editProduct, setEditProduct] = useState(null);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await baseService.getAll("/products");
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  const handleCreate = () => {};


  const handleDelete = (productId) => {
    const product = products.find((p) => p.id === productId);
    setProductToDelete(product);
    setConfirmDelete(true);
  };

  const handleConfirmDelete = () => {
    const updatedProducts = products.filter((p) => p.id !== productToDelete.id);
    setProducts(updatedProducts);

    // Perform API delete request here

    setConfirmDelete(false);
    setProductToDelete(null);
  };

  const handleCancelDelete = () => {
    setConfirmDelete(false);
    setProductToDelete(null);
  };

  const handleOpenUpdateModal = (product) => {
    setEditProduct(product);
    setOpenUpdateModal(true);
  };

  const handleCloseUpdateModal = () => {
    setEditProduct(null);
    setOpenUpdateModal(false);
  };

  const handleUpdateProduct = () => {
    // Perform API update request here

    setEditProduct(null);
    setOpenUpdateModal(false);
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: "10px", backgroundColor: "yellow", color: "black" }}
        onClick={handleCreate}
      >
        Create Product
      </Button>
      {loading ? (
        <Typography>Loading products...</Typography>
      ) : (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>{product.title}</TableCell>
                  <TableCell>{product.description}</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleOpenUpdateModal(product)}
                    >
                      Update
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => handleDelete(product.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      {confirmDelete && productToDelete && (
        <Dialog open={confirmDelete} onClose={handleCancelDelete}>
          <DialogTitle>Confirm Delete</DialogTitle>
          <DialogContent>
            <Typography>
              Are you sure you want to delete the product:{" "}
              {productToDelete.title}?
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleConfirmDelete} color="primary">
              Yes
            </Button>
            <Button onClick={handleCancelDelete} color="primary">
              No
            </Button>
          </DialogActions>
        </Dialog>
      )}
      {editProduct && (
        <Dialog open={openUpdateModal} onClose={handleCloseUpdateModal}>
          <DialogTitle>Update Product</DialogTitle>
          <DialogContent>
            <TextField
              label="Title"
              value={editProduct.title}
              // Handle changes to the title
            />
            <TextField
              label="Description"
              value={editProduct.description}
              // Handle changes to the description
            />
            <TextField
              label="Price"
              value={editProduct.price}
              // Handle changes to the price
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleUpdateProduct} color="primary">
              Save
            </Button>
            <Button onClick={handleCloseUpdateModal} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
};

export default ProductsAdmin;
