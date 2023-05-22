// ProductsHomePage.js
import React, { useEffect, useState } from 'react';
import { styled } from '@mui/system';
import { Grid, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { baseService } from '../axios/baseService';
import HeaderTop from '../HeaderTop';

const ProductCard = styled(Card)(({ theme }) => ({
  width: 300,
  height: '100%',
  margin: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}));

const ProductMedia = styled(CardMedia)({
  height: 0,
  paddingTop: '100%',
  objectFit: 'contain',
  margin: '10px',
});

const ButtonWrapper = styled('div')({
  margin: '0px 0px 10px 10px',
});

const ProductsHomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [basketCount, setBasketCount] = useState(0);

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

  const truncateDescription = (description, maxLength) => {
    if (description.length > maxLength) {
      return `${description.slice(0, maxLength)}...`;
    }
    return description;
  };

  const handleAddToBasket = () => {
    setBasketCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <HeaderTop basketCount={basketCount} /> {/* Add this line to pass basketCount as a prop */}
      <Grid container justifyContent="center" spacing={2}>
        {loading ? (
          <Typography>Loading products...</Typography>
        ) : (
          products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} xl={2}>
              <ProductCard>
                <ProductMedia image={product.image} alt={product.title} />
                <CardContent>
                  <Typography variant="h6" component="div" sx={{ fontSize: '0.875rem' }}>
                    {product.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {truncateDescription(product.description, 100)}
                  </Typography>
                </CardContent>
                <ButtonWrapper>
                  <Button variant="contained" color="primary" onClick={handleAddToBasket}>
                    Add to Basket
                  </Button>
                </ButtonWrapper>
              </ProductCard>
            </Grid>
          ))
        )}
      </Grid>
    </>
  );
};

export default ProductsHomePage;
