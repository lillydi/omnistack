import React, {useEffect} from 'react';
import './Main.css';

import api from '../services/api';

import logo from '../assets/logo.svg';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';

export default function Main({match}){
    useEffect(()=>{
        async function loadDevs(){
            const response = await api.get("/devs",{
                headers:{
                    user: match.params.id,
                }
            });
            console.log(response.data);

        }

        loadDevs();
    }, [match.params.id])


    return (
        <div className="main-container">
            <img src={logo} alt='TinDev' />

            <ul>
                <li>
                    <img src="https://avatars2.githubusercontent.com/u/861751?v=4" alt=""/>
                    <footer>
                        <strong>Madalena</strong>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Illum illo quod exercitationem minus suscipit magnam qui vero ut vitae?
                        </p>
                    </footer>
                    <div className="buttons">
                        <button type='button'>
                        <img src={dislike} alt='Nops' />
                        </button>
                        <button type='button'>
                        <img src={like} alt='Yeah' />
                        </button>
                    </div>
                </li>
                <li>
                    <img src="https://avatars2.githubusercontent.com/u/861751?v=4" alt=""/>
                    <footer>
                        <strong>Madalena</strong>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Illum illo quod exercitationem minus suscipit magnam qui vero ut vitae?
                        </p>
                    </footer>
                    <div className="buttons">
                        <button type='button'>
                        <img src={dislike} alt='Nops' />
                        </button>
                        <button type='button'>
                        <img src={like} alt='Yeah' />
                        </button>
                    </div>
                </li>
                <li>
                    <img src="https://avatars2.githubusercontent.com/u/861751?v=4" alt=""/>
                    <footer>
                        <strong>Madalena</strong>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Illum illo quod exercitationem minus suscipit magnam qui vero ut vitae?
                        </p>
                    </footer>
                    <div className="buttons">
                        <button type='button'>
                        <img src={dislike} alt='Nops' />
                        </button>
                        <button type='button'>
                        <img src={like} alt='Yeah' />
                        </button>
                    </div>
                </li>
                <li>
                    <img src="https://avatars2.githubusercontent.com/u/861751?v=4" alt=""/>
                    <footer>
                        <strong>Madalena</strong>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Illum illo quod exercitationem minus suscipit magnam qui vero ut vitae?
                        </p>
                    </footer>
                    <div className="buttons">
                        <button type='button'>
                        <img src={dislike} alt='Nops' />
                        </button>
                        <button type='button'>
                        <img src={like} alt='Yeah' />
                        </button>
                    </div>
                </li>
            </ul>

        </div>
    );
}