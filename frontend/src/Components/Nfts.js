import React, {useState} from 'react';
import Navbar from "reactjs-navbar";
// import logo from "./logo.png";
import {Hearts} from "react-loader-spinner";
import { useNavigate } from 'react-router-dom';
import Nftassets from './Nftassets';
import "reactjs-navbar/dist/index.css";
import '../Static/Css/Nfts.css';


function NftsPage() {

    const isLoading = useState(false);
    const navigate = useNavigate();

    return(
        <>
            <Navbar
              loader={<Hearts type="Puff" color="#D85B5B" height={50} width={50} />}
              isLoading={isLoading}
              helpCallback={() => {
                alert(`I need help! Buy me a Coffee or a Beer`);
              }}
              menuItems={[
                {
                  title: "Home",
                  isAuth: true,
                  onClick: () => {
                      navigate('/');
                  },
                },
                {
                  title: "All-Nfts",
                  isAuth: true,
                  onClick: () => {
                    navigate('/nft-collections');
                },
                },
              ]}
            />
            <div className='assets'>
              <Nftassets />
            </div>
        </>
    );
}


export default NftsPage;