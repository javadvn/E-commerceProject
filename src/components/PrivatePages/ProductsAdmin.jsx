import React, { useEffect, useState } from 'react';
import { styled } from '@mui/system';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Button } from '@mui/material';
import { baseService } from '../axios/baseService';
import HeaderTop from '../HeaderTop';

const ProductsAdmin = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await baseService.getAll('/products');
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  const handleCreate = () => {

  };

  const handleUpdate = (productId) => {

  };

  const handleDelete = (productId) => {

  };

  return (
    <>
      <HeaderTop />
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
                    <Button variant="contained" color="primary" onClick={() => handleUpdate(product.id)}>
                      Update
                    </Button>
                    <Button variant="contained" color="error" onClick={() => handleDelete(product.id)}>
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <Button variant="contained" color="primary" onClick={handleCreate}>
        Create Product
      </Button>
    </>
  );
};

export default ProductsAdmin;
