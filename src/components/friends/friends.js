import axios from 'axios';
import { useEffect, useState } from 'react';
import './friends.css';

function Friends() {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axios.get(`./data/friends.json`)
            .then(res => {
                setFriends(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <>
            <h3>Checkout my friends</h3>

            {
                friends.map(item => (
                    <div className="friend">
                        <h4>{item.name}</h4>
                        <div>
                            <i className="bi bi-github"></i>

                            {item.github.title || "None"}
                            
                            {
                                item.github.url && 
                                <a href={item.github.url} target="_blank" rel="noreferrer">
                                    <i className="bi bi-arrow-up-right-square"></i>
                                </a>
                            }
                        </div>
                        <div>
                            <i className="bi bi-globe2"></i>

                            {item.website.title || "None"}

                            {
                                item.website.url && 
                                <a href={item.website.url} target="_blank" rel="noreferrer">
                                    <i className="bi bi-arrow-up-right-square"></i>
                                </a>
                            }
                        </div>
                    </div>
                ))
            }
        </>
    );
}

export default Friends;
