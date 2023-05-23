import React, { useEffect, useState, useContext } from "react";
import { styled } from "@mui/system";
import { Grid, Card, CardMedia, CardContent, Typography, Button } from "@mui/material";
import { baseService } from "../axios/baseService";
import { BasketContext } from "../PrivatePages/BasketContext";

const ProductCard = styled(Card)(({ theme }) => ({
  width: "100%",
  height: "100%",
}));



const ButtonWrapper = styled("div")({
  margin: "0px 0px 10px 10px",
});

const ProductsHomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { basket, addProductToBasket, removeProductFromBasket, isExist } = useContext(BasketContext);

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

  const truncateDescription = (description, maxLength) => {
    if (description.length > maxLength) {
      return `${description.slice(0, maxLength)}...`;
    }
    return description;
  };

  const handleAddToBasket = (product) => {
    if (isExist(product)) {
      removeProductFromBasket(product);
    } else {
      addProductToBasket(product);
    }
  };

  return (
    <>
      <Grid container justifyContent="center" spacing={2}>
        {loading ? (
          <Typography>Loading products...</Typography>
        ) : (
          products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} xl={2}>
              <ProductCard>
                <img src={product.image} alt={product.title}  style={{objectFit:"contain",width:"100%",height:200}}/>
                <CardContent>
                  <Typography variant="h6" component="div" sx={{ fontSize: "0.875rem" }}>
                    {product.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {truncateDescription(product.description, 100)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Price: ${product.price}
                  </Typography>
                </CardContent>
                <ButtonWrapper>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleAddToBasket(product)}
                  >
                    {isExist(product) ? "Remove from Basket" : "Add to Basket"}
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
