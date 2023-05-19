import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import { baseService } from "../axios/baseService";

function CardsProduct() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    baseService
      .getAll('products')
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleShowMore = (index) => {
    const updatedProducts = [...products];
    updatedProducts[index].showMore = true;
    setProducts(updatedProducts);
  };

  return (
    <Grid container spacing={2}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        products.map((product, index) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ maxWidth: 345, height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardActionArea sx={{ flexGrow: 1 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={product.image}
                  alt={product.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.showMore ? product.description : product.description.slice(0, 100)}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions sx={{ justifyContent: 'flex-end' }}>
                {!product.showMore && product.description.length > 100 && (
                  <Button size="small" onClick={() => handleShowMore(index)}>
                    More
                  </Button>
                )}
              </CardActions>
            </Card>
          </Grid>
        ))
      )}
    </Grid>
  );
}

export default CardsProduct;
