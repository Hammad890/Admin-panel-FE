import React from 'react'
import { Box,Select,TextField,MenuItem,InputLabel,FormControl } from '@mui/material'
import { useNavigate,useLocation } from 'react-router-dom'
import { useState } from 'react';

export default function Productview() {
  const navigate= useNavigate();
  const location= useLocation();
  const {product}= location.state || {};
  const [products, setProducts]= useState([]);
  const [productName,setProductName] =useState(product ? product.productname: '');
    const [category,setCategory]= useState(product ? product.category: '');
    const [price,setPrice]= useState(product ? product.price: '');
    const handleSave=(e)=>{
      const newProducts= {productname: productName, category: category, price: price}
      const existingProducts= JSON.parse(localStorage.getItem('products')) || []
      if (Array.isArray(existingProducts)){
      if (product){
        const updatedProducts= existingProducts.map ((p)=>(p.productname === product.productname ? newProducts : p))
        setProducts(updatedProducts);
        localStorage.setItem('products', JSON.stringify(updatedProducts))
      }
      else{
      const updatedProducts= [...existingProducts,newProducts]
      setProducts(updatedProducts)
      localStorage.setItem('products',JSON.stringify (updatedProducts))
      }
    }else{
      const updatedProducts = [newProducts];
      setProducts(updatedProducts);
      localStorage.setItem('products', JSON.stringify(updatedProducts))
    }
      e.preventDefault();
      navigate('/productform');
    }
  return (
  <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <h1 style={{color:'rgb(51, 54, 238)'}}>Product Details</h1>
      <div style={{display: 'flex', justifyContent:'center', flexDirection: 'column'}}>
        <TextField
          required
          id="outlined-required"
          label="Product Name:"
          name='Productname'
          value={productName}
          onChange={(e)=>setProductName(e.target.value)}
        />
        <TextField
          required
          id="outlined-required"
          label="Product Category:"
          name='Productcategory'
          value={category}
          onChange={(e)=>setCategory(e.target.value)}
        />
        <TextField
          required
          defaultValue="$"
          id="outlined-password-input"
          label="Price"
          type="price"
          value={price}
          onChange={(e)=>setPrice(e.target.value)}
        />
         <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-readonly-label">Genre*</InputLabel>
        <Select
          labelId="demo-simple-select-readonly-label"
          id="demo-simple-select-readonly"
          label="Category *"
          style={{height:60+'px',width:200+'px',marginRight:60+'px'}}
          >
          <MenuItem value="Men"> Men
          </MenuItem>
          <MenuItem value="Women"> Women</MenuItem>
          <MenuItem value="Children">Children</MenuItem>
        </Select>
        </FormControl>
        <input type="button" onClick={handleSave}  value= 'SAVE' style={{margin:12+'px',backgroundColor:'rgb(51, 54, 238)',color:"antiquewhite",height:30+'px',width:80+'px',fontSize:18+"px"}} />
      </div>
    </Box>
  )
}