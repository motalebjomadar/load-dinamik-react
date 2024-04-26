import { useEffect, useState } from "react"
import Friend from "./Friend"

export default function Friends(){
    const [friends, setFriends] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data=> setFriends(data))
    }, [])

    return (
        <div>
            <h2>Friends: {friends.length}</h2>
            <hr/>
            {
                friends.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
    )
}