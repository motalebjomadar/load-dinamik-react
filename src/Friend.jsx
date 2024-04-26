import './Friend.css'
export default function Friend({friend}){
    console.log(friend)
    return (
        <div className='box'>
            <h3>Id: {friend.id}</h3>
            <p>Title: {friend.title}</p>
            <p>Body: {friend.body}</p>

        </div>
    )
}