import { Box, Grid, Modal } from '@mui/material';
import React, { useState } from 'react';
import './App.css';
import AppBarComponent from './components/app-bar/AppBar';
import ImageItem from './components/image-item/ImageItem';
import SearchBar from './components/search-bar/SearchBar';
import SearchResult from './components/search-result/SearchResult';

function App() {
  const [query, setQuery] = useState("")
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState({});
  const handleModal = () => setOpen(!open);

  return (
    <Box sx={{ flexGrow: 1 }} className='App'>
      <Grid container spacing={2}>
        <Grid item xs={12} style={{
          "position": "sticky",
          "top": "0px",
          "background": "white",
          "zIndex": "2",
          "paddingTop": "0"
        }}>
          <Grid item xs={12}>
            <AppBarComponent />
          </Grid>
          <Grid item xs={12}>
            <SearchBar query={query} setQuery={setQuery} />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <SearchResult query={query} handleModal={handleModal} setSelectedImage={setSelectedImage} />
        </Grid>
      </Grid>
      <Modal
        open={open}
        onClose={handleModal}
      ><Box style={
        {
          "position": "absolute",
          "left": "0",
          "right": "0",
          "top": "10%",
          "margin": "auto 25%"
        }
      }>
          <ImageItem
            item={selectedImage}
            detailedView={open}
            handleModal={handleModal}
            setSelectedImage={setSelectedImage} />
        </Box>
      </Modal >
    </Box >
  );
}

export default App;
