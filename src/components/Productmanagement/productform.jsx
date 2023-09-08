import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Modal, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
export default function Productform() {
  const navigate= useNavigate();
  const [products, setProducts] = useState([]);
  const [productToDelete, setProductToDelete] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {
    const loadedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(loadedProducts);
  }, []);

  const handleEditProduct = (setProducts) => {
    navigate('/productview', { state: { product : setProducts } })
  }

  const deleteModal= (productToDelete)=>{
    setProductToDelete(productToDelete);
    setShowDeleteModal(true)
  } 

  const handleDelete = () => {
    if (productToDelete) {
      const updatedProducts = products.filter((product) => product !== productToDelete);
      setProducts(updatedProducts);
      localStorage.setItem('products', JSON.stringify(updatedProducts));
      setShowDeleteModal(false);
    }
  }
      const productRows = products.map((product)=>(
        <TableRow
        key={product.productname}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
      <TableCell component="th" scope="row">
                {product.productname}
              </TableCell>
              <TableCell align="right">{product.category}</TableCell>
              <TableCell align="right">{product.price}</TableCell>
              <TableCell align="right">
              <Stack direction="row" spacing={0} >
      <IconButton aria-label="delete" onClick={()=>deleteModal(product)} >
        <DeleteIcon />
      </IconButton>
      <IconButton aria-label="edit" onClick={()=>handleEditProduct(product)} >
        <EditIcon  />
      </IconButton>
      </Stack>
      </TableCell>
      </TableRow>
      ))
  return (
    <div style={{justifyContent: 'center',paddingRight: 400+'px'}}>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align='left'>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
              {productRows}
        </TableBody>
      </Table>
    </TableContainer>
    <Modal
        open={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4 }}>
          <h2 id="modal-modal-title">Confirm Delete</h2>
          <p id="modal-modal-description">Are you sure you want to delete this user?</p>
          <Button onClick={handleDelete} color="error" variant="contained">
            Delete
          </Button>
          <Button onClick={() => setShowDeleteModal(false)} variant="contained">
            Cancel
          </Button>
        </Box>
      </Modal>
    </div>
  )
}