import logo from '../../assets/images/logo.png'
import { IoIosSearch } from 'react-icons/io'
import styled from 'styled-components'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar(props) {
    const [keywords, setKeywords] = useState('');
    const navigate = useNavigate();

    const handleChangeInput = (e) => {
        let keyword = e.target.value;
        setKeywords(keyword);

        (keyword.length > 0)
            ? navigate(`/search?keywords=${keyword.trim()}`)
            : navigate('/')

    }

    return (
        <Navigation>
            <div className='navContainer'>
                <div className='logo'>
                    <img
                        src={logo}
                        alt=''
                        onClick={() => {
                            navigate('/');
                            setKeywords('');
                        }
                        }></img>
                </div>
                <div className='navSearch'>
                    <IoIosSearch className='iconSearch' />
                    <input
                        type='text'
                        placeholder='title, genres, people'
                        onChange={handleChangeInput}
                        value={keywords}
                    />
                </div>
            </div>
        </Navigation>
    )
}

export default Navbar;

const Navigation = styled.div`
    width: 100%;
    heigh: 80px;
    position: fixed;
    top: 0;
    transition-timing-function: ease-in;
    transition: all 1s;
    z-index: 10;

    .navContainer {
        background-color: black;
        display: flex;
        align-items: center;
        flex-direction: row:
        justify-content: flex-start;
        height: 100%;

        @media only screen and (max-width: 600px) {
            flex-direction: column;
        }

        .logo {
            width: 120px;
            cursor: pointer;
            img {
                width: 100%
            }
        }

        .navSearch {
            color: white;
            padding-right: 20px;
            display: flex;
            justify-content: flex-end;

            &:hover .iconSearch {
                color: white;
            }

            .iconSearch {
                width: 20px;
                heigh: 20px;
                cursor: pointer;
                coler: #bbb;
                transform: translateX(24px) translateY(10px);
            }

            input {
                font-size: 14px;
                border: 1px solid #fff;
                color: white;
                outline: none;
                width: 0;
                padding: 10px;
                cursor: pointer;
                opacity: 0;
                background-color: black;
                transition: width 0.5s;

                &:focus {
                    padding-left: 26px;
                    width: 300px;
                    cursor: text;
                    opacity: 1;
                    border-radius: 4px;
                }
            }
        }
    }
`;