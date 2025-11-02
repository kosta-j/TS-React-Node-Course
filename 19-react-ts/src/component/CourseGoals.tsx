// second approach:
// import type { type FC } from 'react';

type Goal = {
  id: number;
  title: string;
  description: string;
};
interface CourseGoalsProps {
  goals: Goal[];
  onDelete: (id: number) => void;
}

export default function CourseGoals({ goals, onDelete }: CourseGoalsProps) {
  // second approach:
  // const CourseGoals: FC<CourseGoalsProps> = ({ goals }) => {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <article>
            <div>
              <h2>{goal.title}</h2>
              <p>{goal.description}</p>
              <button onClick={() => onDelete(goal.id)}>Delete</button>
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
}

// second approach:
// export default CourseGoals;
