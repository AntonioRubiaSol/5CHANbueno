import React from "react";
import './PostCard.css';

export const PostCard = (props) => {
    console.log('llego', props.post)

    return (
        <div className="cardContainer">
            <h1>{props.post.title}</h1>
            <h3>{props.post.category}</h3>
            <p>{props.post.message}</p>
        </div>
    );

    // if (props.post.category === "question") {
    //     return (
    //         <div className="cardContainer">
    //             <h1>{props.post.title}</h1>
    //             <h3>{props.post.category}<span class="material-symbols-outlined">
    //                 question_mark
    //             </span></h3>
    //             <p>{props.post.message}</p>
    //         </div>
    //     );
    // }

    // else if (props.post.category === "suggestion") {
    //     return (
    //         <div className="cardContainer">
    //             <h1>{props.post.title}</h1>
    //             <h3>{props.post.category}<span class="material-symbols-outlined">
    //                 edit
    //             </span></h3>
    //             <p>{props.post.message}</p>
    //         </div>
    //     );
    // }

    // else if (props.post.category === "clarification") {
    //     return (
    //         <div className="cardContainer">
    //             <h1>Existo</h1>
    //             <h1>{props.post.title}</h1>
    //             <h3>{props.post.category}<span class="material-symbols-outlined">
    //                 speaker
    //             </span></h3>
    //             <p>{props.post.message}</p>
    //         </div>
    //     );
    // }
    // else {
    //     return (
    //         <h1>Hubo un error</h1>
    //     )
    // }


}

// export const PostCard = (props) => {
//     console.log(props.post)
//     return (
//         <h1>Aquí estoy</h1>
//     )
// }

