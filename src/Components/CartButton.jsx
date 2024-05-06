// import React, { useState } from 'react';
// import { IconButton, Modal } from '@mui/material';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// function Cart() {
//   const [cartItems, setCartItems] = useState([]);
//   const [open, setOpen] = useState(false);

//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   return (
//     <>
//       <IconButton onClick={handleOpen}>
//         <ShoppingCartIcon  />
//       </IconButton>
//       <Modal open={open} onClose={handleClose}>
//         <div>
//           {cartItems.map((item, index) => (
//             <div key={index}>{item.name}</div>
//           ))}
//         </div>
//       </Modal>
//     </>
//   );
// }

// export default Cart;
