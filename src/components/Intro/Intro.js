import ReactPlayer from "react-player";
import { VscMute, VscUnmute } from 'react-icons/vsc'
import styled from "styled-components";
import { useState } from "react";

function Intro(props) {
    const [isMute, setIsMute] = useState(false);
    return (
        <IntroContainer>
            <ReactPlayer
                className="videoIntro"
                playing={true}
                loop={true}
                width='100%'
                height='100%'
                volume={1}
                muted={isMute}
                url='https://vimeo.com/644494272'
            />
            <div className="infoIntro">
                <h1 className="headingIntro">DEMOVIE</h1>
                <p className="overviewIntro">A demo intern web page</p>
            </div>
            { isMute ? (
                <VscMute 
                    className="btnVolume"
                    onClick={() => setIsMute(prev => !prev)}
                />
            ) : (
                <VscUnmute 
                    className="btnVolume"
                    onClick={() => setIsMute(prev => !prev)}
                />
            )
            }
        </IntroContainer>
    )
}

export default Intro;

const IntroContainer = styled.div`
    background-color: black;
    position: relative;
    color: white;
    padding-top: 60%;

    .videoIntro {
        position: absolute;
        top: 0;
        left: 0;
    }

    .infoIntro {
        position: absolute;
        top: 140px;
        left:30px;
        color: #fff;

        @media screen and (max-width: 800px) {
            top: 170px;
            left: 25px;
        }

        @media screen and (max-width: 600px) {
            top: 100px;
            left: 15px;
        }

        .headingIntro {
            font-size: 60px;
            transition: all 0.3s ease;

            @media screen and (max-width: 800px) {
                font-size: 40px;
            }
    
            @media screen and (max-width: 600px) {
                font-size: 24px;
            }
        }

        .overviewIntro {
            max-width: 550px;
            width: 100%;
            line-height: 1.3;
            padding-top: 25px;
            font-size: 18px;

            @media screen and (max-width: 800px) {
                font-size: 16px;
            }
    
            @media screen and (max-width: 600px) {
                font-size: 14px;
            }
        }
        
    }

    .btnVolume {
        position: absolute;
        height: 40px;
        width: 40px;
        rigt: 10%;
        top: 50%;
        cursor: pointer;
        border-radius: 50%;
        padding: 6px;
        color: #bbb;
        border: #fff solid 1px;
        transition: all 0.3 ease;
        transform: scale(1);

        &:hover {
            color: #fff;
            transform: scale(1.2);
            background-color: rgba(211, 211, 211, 0.18);
        }
    }

    
`;