import { useState } from 'react';
import goalsImg from './assets/goals.jpg';
import CourseGoals from './component/CourseGoals';
import NewGoal from './component/NewGoal';
import Header from './component/Header';

function App() {
  const [goals, setGoals] = useState([
    {
      id: 1,
      title: 'Learn TS',
      description: 'Learn TS from the ground up',
    },
    {
      id: 2,
      title: 'Practice TS',
      description: 'Practice working woth TS',
    },
  ]);

  function onDelete(id: number) {
    setGoals((prevGoals) => prevGoals.filter((g) => g.id !== id));
  }
  function onAdd(goal: string, summary: string) {
    setGoals((prevGoals) =>
      prevGoals.concat({ id: Math.random(), title: goal, description: summary })
    );
  }

  return (
    <>
      <main>
        <Header image={{ src: goalsImg, alt: 'A list of goals' }} />
        <NewGoal onAdd={onAdd} />
        <CourseGoals goals={goals} onDelete={onDelete} />
      </main>
    </>
  );
}

export default App;
