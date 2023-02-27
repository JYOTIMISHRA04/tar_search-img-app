import { Close, Favorite, Instagram, OpenInFull, Person2Outlined, Twitter } from '@mui/icons-material';
import { Button, Chip } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import { green, pink } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import * as React from 'react';

export default function ImageItem(props) {
    const { urls: { thumb, regular },
        user: { name, updated_at, profile_image: { small }, social },
        alt_description, likes
    } = props.item

    return (
        <Card sx={{ minWidth: 345, marginBottom: 10 }}>
            {props.detailedView && <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: green[500] }} src={small}>
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings" onClick={() => {
                        props.setSelectedImage(props.detailedView ? {} : props.item)
                        props.handleModal()
                    }}>
                        <Close />
                    </IconButton>
                }
                title={name}
                subheader={new Date(updated_at).toUTCString()}

            />}
            <CardMedia
                component="img"
                height={props.detailedView ? "400px" : "200"}
                image={props.detailedView ? regular : thumb}
                alt={alt_description}
            />
            <CardContent>

            </CardContent>
            <CardActions >
                <Button sx={{
                    color: pink[700],
                    marginRight: 4
                }} startIcon={<Favorite />} variant='outlined'>{likes}</Button>
                {!props.detailedView ? <Button
                    onClick={() => {
                        props.setSelectedImage(props.detailedView ? {} : props.item)
                        props.handleModal()
                    }}
                    startIcon={<OpenInFull />}
                    variant='outlined'
                    color='primary'
                >
                    Open
                </Button>
                    : <>
                        <Chip color='primary' icon={<Twitter />} label={social?.twitter_username || "NA"} />
                        <Chip color='primary' icon={<Instagram />} label={social?.instagram_username || "NA"} />
                        <Chip color='primary' icon={<Person2Outlined />} label={social?.portfolio_url || "NA"} />
                    </>}

            </CardActions>
        </Card >
    );
}
