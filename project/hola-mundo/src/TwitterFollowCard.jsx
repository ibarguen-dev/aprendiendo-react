import { useState } from "react";

export function TwitterFollowCard ({children, userName,img ,isFollowingDefualt}){

    const [isFollowing, setIsFollowing] = useState(isFollowingDefualt)

    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

    const handleClick = () => {
      setIsFollowing(!isFollowing)
    }
    return(
        <article className="tw-followCard"> 
        <header className="tw-followCard-header">
          <img 
          className="tw-followCard-avatar"
          src={img}
          alt="el avatar de midudev" />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-info-username">@{userName}</span>
        </div>
        </header>
        <aside>
          <button className={buttonClassName}  onClick={handleClick}>
           <span className="tw-followCard-text">{text}</span>
           <span className="tw-followCard-stopFollow">Dejar de seguir</span>
          </button>
        </aside>
      </article>
    )
}

//  