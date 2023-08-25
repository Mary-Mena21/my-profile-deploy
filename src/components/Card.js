import React from "react";

export const Card = (props) => {
    return (
        <>
            <div className="col mb-5">
                <div class="card" style={{ width: "18rem" }}>
                    <img
                        //src="https://via.placeholder.com/200"
                        src={props.taco}
                        class="card-img-top"
                        alt={props.taco}
                        key={""}
                    />
                </div>
            </div>
        </>
    );
};

// import React from 'react';

// export const Card = () => {
//     let photos = [
//         "http://picsum.photos/id/1001/200/200",
//         "http://picsum.photos/id/1002/200/200",
//         "http://picsum.photos/id/1003/200/200",
//         "http://picsum.photos/id/1004/200/200",
//         "http://picsum.photos/id/1005/200/200",
//         "http://picsum.photos/id/1006/200/200",
//     ];

//     return (
//         <div className="container text-center mt-5">
//             <h1>Gallery</h1>
//             <div className="row">
//                 {photos.slice(0, 9).map((photo, index) => ( // Use .slice(0, 9) to limit the number of photos to 9
//                     <div key={index} className="col mb-5"> {/* Add a key attribute with a unique value (here, using index) */}
//                         <div className="card" style={{ width: "18rem" }}>
//                             <img
//                                 src={photo}
//                                 className="card-img-top"
//                                 alt="image"
//                             />
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };
