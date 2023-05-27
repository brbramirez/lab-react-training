function IdCard({lastName, firstName, gender, height, birth, picture}) {
    return ( 
      <div className="id-card d-flex">
        <div className="p-3">
            <img alt="Profile" src={picture} />
        </div>
        <div className="text-start">
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Gender: {gender}</p>
            <p>Height: {height}</p>
            <p>Birth: {birth}</p>
        </div>
      </div>
    );
  }
   
  export default IdCard;