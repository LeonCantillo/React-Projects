import { useState } from 'react'

function TwitterFollowCard ({userName='unknown', children='unknown', initialIsFollowing}) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

    const buttonFollowText = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing 
    ? 'tw-follow-card-button is-following'
    : 'tw-follow-card-button';
    
    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }
    
    return (
        <article className='tw-follow-card'>
            <header className='tw-follow-card-header'>
                <img 
                    alt="Avatar" 
                    className='tw-follow-card-avatar'
                    src={`https://unavatar.io/${userName}`}
                />
                <div className='tw-follow-card-info'>
                    <strong>{children}</strong>
                    <span className='tw-follow-card-info-username'>@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tw-follow-card-txtbtt-follow'>{buttonFollowText}</span>
                    <span className='tw-follow-card-txtbtt-stop-following'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}

export default TwitterFollowCard