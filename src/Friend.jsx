import Friends from "./Friends";
export default function Friend({friend}){
    const{name,email}=friend;
    return (
        <div className="friends">
            <h4>Name: {name}</h4>
            <p>Emai: {email}</p>
        </div>
    )
}