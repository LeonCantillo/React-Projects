import './App.css'
import TwitterFollowCard from './TwitterFollowCard'

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Ángel Duran',
        isFollowing: true,
    },
    {
        userName: 'pheralb',
        name: 'Pedro Hernandez',
        isFollowing: false,
    },
    {
        userName: 'ellonmusk',
        name: 'Ellon Musk',
        isFollowing: true,
    },
    {
        userName: 'TMChein',
        name: 'Tomas Chein',
        isFollowing: false,
    }
]

function App () {
    return (
        <section className='twitter-card'>
            {users.map(user => {
                const {userName, name, isFollowing} = user
                return (
                    <TwitterFollowCard
                    key={userName}
                    userName={userName}
                    initialIsFollowing={isFollowing}>
                        {name}
                    </TwitterFollowCard>
                )
            })}
        </section>
    )
}

export default App