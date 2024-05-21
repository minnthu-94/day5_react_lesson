import React from 'react'
import Card from './Card';

const List = (props) => {


  return (
    <>
      {props.userInfos.length > 0 ? (
        <>
          {props.userInfos.map((info) => (
            
              <Card css={"card-mt"} key={info.email}>
                <div className="list">
                  <p>Name : {info.name}</p>
                  <p>From : {info.live}</p>
                  <p>Email : {info.email}</p>
                </div>
              </Card>
            
          ))}
        </>
      ) : (
        <>
              <Card css={"card-mt"}>
                <div className="list">
                  <p>Empty Member!</p>
                </div>
              </Card>
        </>
      )}
    </>
  );
 
};

export default List