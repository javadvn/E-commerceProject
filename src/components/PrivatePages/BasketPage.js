import React, { useContext, useState } from "react";
import { BasketContext } from "../PrivatePages/BasketContext";
import { Button, Card, CardMedia, CardContent, Typography, Modal, TextField } from "@mui/material";
import { styled } from "@mui/system";

const BasketCard = styled(Card)(({ theme }) => ({
  width: 200, // Adjust the width to a smaller value
  margin: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));

const BasketPage = () => {
  const { basket, removeProductFromBasket, isExist } = useContext(BasketContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [personalDetails, setPersonalDetails] = useState({
    name: "",
    surname: "",
    contactNumber: "",
    address: "",
  });

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPersonalDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleMakeOrder = () => {
    // Perform the necessary logic for making the order
    // You can access the personalDetails object here and send it to an API or perform other actions
    // Reset the basket and personal details as needed
    setModalOpen(false);
    setPersonalDetails({
      name: "",
      surname: "",
      contactNumber: "",
      address: "",
    });
    // Perform additional actions as needed
  };

  const totalPrice = basket.reduce((total, product) => total + product.price, 0);

  return (
    <div>
      {basket.map((product) => (
        <BasketCard key={product.id}>
          <CardMedia component="img" src={product.image} alt={product.title} />
          <CardContent>
            <Typography variant="h6" component="div">
              {product.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Price: ${product.price}
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => removeProductFromBasket(product)}
            >
              {isExist(product) ? "Remove from Basket" : "Add to Basket"}
            </Button>
          </CardContent>
        </BasketCard>
      ))}
      <Typography variant="h6" component="div" style={{ marginTop: 20 }}>
        Total Price: ${totalPrice.toFixed(2)}
      </Typography>
      <Button variant="contained" color="primary" onClick={handleOpenModal} style={{ marginTop: 20 }}>
        Make an Order
      </Button>
      <Modal open={modalOpen} onClose={handleCloseModal}>
        <div style={{ backgroundColor: "#fff", padding: 20, borderRadius: 5, maxWidth: 400, margin: "auto", marginTop: 100 }}>
          <TextField
            name="name"
            label="Name"
            value={personalDetails.name}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="surname"
            label="Surname"
            value={personalDetails.surname}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="contactNumber"
            label="Contact Number"
            value={personalDetails.contactNumber}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="address"
            label="Address"
            value={personalDetails.address}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <Button variant="contained" color="primary" onClick={handleMakeOrder} style={{ marginTop: 20 }}>
            Submit Order
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default BasketPage;
