import React, {useState, useEffect} from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import API from '../api-service';
import { FaArrowRight } from "react-icons/fa";
import '../Static/Css/Nfts.css';


function Assets() {
    const [nfts, setNfts] = useState([]);
    // const navigate = useNavigate();

    useEffect(() => {
        API.nftstList()
            .then(resp => setNfts(resp))
            .catch(err => console.log(err))
    }, [])

    // const onClickDetails = nft => {
    //     navigate('/nft-collections/nft/details');
    //     setSelectedNft(nft);
    //     console.log(nft);
    //     return(
    //         <NftDetail nft={selectedNft} />
    //     );
    // }


    return (
        <>  
            <h1 className="heading">All My NFTs Collection</h1>
            { Array.isArray(nfts) && nfts.map(nft => {
                return(
                    <Card key={nft.id} sx={{ display: 'flex' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="h5">
                                {nft.asset_name}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                {nft.collection_name}
                            </Typography><br/>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                               Price: {nft.price} ETH
                            </Typography>
                            </CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                            <IconButton className="icnbtn" href={nft.asset_link}>
                                <FaArrowRight />
                            </IconButton>
                            </Box>
                        </Box>
                        <CardMedia
                            component="img"
                            sx={{ width: 151 }}
                            image={nft.asset_img}
                            alt={nft.asset_name}
                        />
                    </Card>
                );
            })}
        </>
    );
}


export default Assets;