import { useState, useEffect } from "react";
import axios from "axios";

interface UserName {
    first: string;
    last: string;
    title: string;
}

interface UserPicture {
    large: string;
    medium: string;
    thumbnail: string;
}

interface UserInfo {
    name: UserName;
    picture: UserPicture;
}


const dataURL = 'https://randomuser.me/api';

const fetchData = (pageNumber: number = 1) => {
    return axios.get(`${dataURL}?page=${pageNumber}`).then(
        ({data}) => data
    ).catch(error => {
        console.error(error);
    });
}

const getFullUserName = (userInfo: UserInfo) => {
    const {name: {first, last}} = userInfo;
    return `${first} ${last}`; 
}

export default function FetchData() {
    const [userInfos, setUserInfos] = useState([]);
    const [nextPageNumber, setNextPageNumber] = useState(1);
    const fetchNewUserInfo = () => {
        fetchData(nextPageNumber).then(
            (userData) => {
                const newUserInfos = [
                    ...userInfos,
                    ...userData?.results
                ]
                setUserInfos(newUserInfos);
                setNextPageNumber(nextPageNumber + 1);
            }
        );
    }
    useEffect(() => {  
        fetchNewUserInfo();
    }, []);
    return (
        <>
            <div>
               {
                    userInfos.map((userInfo: UserInfo, index: number) => {
                        return (
                            <div key = {index}>
                                <div>
                                    <p>{getFullUserName(userInfo)}</p>
                                    <img src = {userInfo.picture.large}  />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <button onClick = {() => fetchNewUserInfo()}>
                fecth next user info
            </button>
        </>
    )
}