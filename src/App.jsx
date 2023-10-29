import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";


const user = [
    {
        userName:'cristiano',
        name:'Cristiano Ronaldo',
        isFollowing: false
    },
    {
        userName:'rafaelnadal',
        name:'Rafael Nadal',
        isFollowing: false
    }
]

export function App() {
  return (
    <section className="App">
      {
        user.map((user) => {
        const { userName, name, isFollowing } = user
        return (
        <TwitterFollowCard
        key={userName}
        userName={userName}
        initialIsFollowing={isFollowing}
        >
        {name}
        </TwitterFollowCard>
            );
        })
      }
    </section>
  );
}
