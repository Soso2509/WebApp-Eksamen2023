const UsersItemCards =({items}) => {

    return (
        <div className="itemcard">
            <h1>{items.name}</h1>
            <span>{items.date}</span>
            <span>{items.sport}</span>
            {items.tegs.map(e => {
                <p>{e}</p>
            })}
        </div>
    )
}

export default UsersItemCards