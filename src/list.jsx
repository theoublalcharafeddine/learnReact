

function List(){

    const friends = [
                { id : 1, name :  'theublal ' , age : 21} ,
                { id : 2 , name : 'charaf-eddine ' , age : 22 },
                { id : 3 , name : 'ismail '  , age : 23},
                { id : 4 , name : 'youssef '  ,  age : 24} ,
                { id : 5 , name : 'ahmad ' , age : 25} ,
                { id : 6 , name : 'halim' ,  age : 26}
            ];

    friends.sort();

    const filtersAge = friends.filter(friend => friend.age < 24  )

    const listItems = filtersAge.map(filterAge =>  
    <li  className = "list-itme" key ={filterAge.id} > 
            <div className="friend-info">
                <p className="friend-name">Name: {filterAge.name}</p>
                <p className="friend-age">Age: {filterAge.age}</p>
            </div>
    </li>
) ; 

    return(

        <ul className="friends-list" >{listItems}</ul>
    );
}

export default List ;