import React, {useState} from 'react';
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from 'react-pro-sidebar';
import '../Static/Css/SideBar.css';
import { FaCopyright, FaList, FaRProject, FaCertificate } from "react-icons/fa";
import { FiHome, FiArrowLeftCircle, FiArrowRightCircle, FiMessageCircle } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';

function SideBar() {

    const [menuCollapse, setMenuCollapse] = useState(false);
    const navigate = useNavigate();

    const onClickHome = () => {
        navigate('/');
    }

    const onClickEducation = () => {
        navigate('/education');
    }

    const onClickSkills = () =>{ 
        navigate("/skills");
      }

    const onClickProjects = () => {
        navigate('/projects');
    }

    const onClickContact = () => {
        navigate('/contact-me');
    }
    
    const menuIconClick = () => {
        menuCollapse ? setMenuCollapse(false)
                     : setMenuCollapse(true);
    };

    return (
            <div id='header'>
                <ProSidebar collapsed={menuCollapse}>
                    <SidebarHeader >
                        <div className='logotext'>
                            <p>
                                {/* { menuCollapse ? <GiAbstract050 /> 
                                : <SiApacheairflow/> } */}
                                { menuCollapse ? 
                                    <h3>AG</h3>
                                  : <h3>Arnab Gupta</h3>
                                }
                            </p>
                        </div>
                        <div className='closemenu' onClick={menuIconClick}>
                            { menuCollapse ? (
                                <FiArrowRightCircle />
                            ) : (
                            <FiArrowLeftCircle />
                            )}
                        </div>
                    </SidebarHeader>
                    <SidebarContent>
                        <Menu iconShape='square'>
                            <MenuItem onClick={onClickHome} active={true} icon={<FiHome />}>Home</MenuItem>
                            <MenuItem onClick={onClickEducation} icon={<FaCertificate />}>Education</MenuItem>
                            <MenuItem onClick={onClickSkills} icon={<FaList />}>Skills</MenuItem>
                            <MenuItem onClick={onClickProjects} icon={<FaRProject />}>Projects</MenuItem>
                            <MenuItem onClick={onClickContact} icon={<FiMessageCircle />}>Contact</MenuItem>
                        </Menu>
                    </SidebarContent>
                    <SidebarFooter>
                        <Menu iconShape='square'>
                            <MenuItem icon={<FaCopyright />} >Copyright</MenuItem>
                            { menuCollapse ? 
                                ''
                                : <p className='cpr'>2022 - All Rights Reserved</p>
                            }
                        </Menu>
                    </SidebarFooter>
                </ProSidebar>
            </div>
    );
}


export default SideBar;