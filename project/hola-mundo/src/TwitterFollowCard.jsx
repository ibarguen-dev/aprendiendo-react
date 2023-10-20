

export function TwitterFollowCard ({userName, name,isFollowing,img}){
    
    return(
        <article className="tw-followCard"> 
        <header className="tw-followCard-header">
          <img 
          className="tw-followCard-avatar"
          src={img}
          alt="el avatar de midudev" />
        <div className="tw-followCard-info">
          <strong>{name}</strong>
          <span className="tw-followCard-info-username">@{userName}</span>
        </div>
        </header>
        <aside>
          <button className="tw-followCard-button">
            Seguir
          </button>
        </aside>
      </article>
    )
}

