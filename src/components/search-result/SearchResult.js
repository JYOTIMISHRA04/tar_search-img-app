import { Card, CardActions, CardContent, LinearProgress, Pagination } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import useImageHook from '../../hooks/useImageHook';
import ImageItem from '../image-item/ImageItem';

const SearchResult = (props) => {

  const { data, setPage, page, loading } = useImageHook(props.query)
  console.log(loading)

  return (<>
    <Card>
      <CardContent>
        {loading && <LinearProgress />}

        <CardActions style={{
          "display": "flex",
          "justifyContent": "center"
        }}>
          <Pagination count={data.total_pages} page={page} onChange={(e, value) => setPage(value)} color="primary" />

        </CardActions>
        <Box p={2} style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          width: "100%",
          flexWrap: "wrap"
        }}>{data.results?.length ?
          data.results?.map((item, index) => {
            return <ImageItem
              key={`image-item-${index}`}
              item={item}
              handleModal={props.handleModal}
              setSelectedImage={props.setSelectedImage}
            ></ImageItem>
          }) : "No results found"}
        </Box>
      </CardContent>

    </Card>

  </>);
};

export default SearchResult;
