"use client"
import Answer from "@/components/Answer";
import Header from "@/components/Header";
import Progress from "@/components/Progress";
import Tasks from "@/components/Tasks";
import NumberOfTask from "@/components/NumberOfTask";
import { type Task, type TaskAttempts } from "@/types"
import React, { useState, useEffect } from 'react'
import { fetchTasks} from '../controller/taskController'



const Home = () => {


  const [tasks, setTasks] = useState<Task[]>([])
  const [taskCount, setTaskCount] = useState<string>('')
  const [onCurrentTaskIndex, setCurrentTaskIndex] = useState(0);
  const [onAttempts, setAttempts] = useState<TaskAttempts>({})
  const [taskDone, setTaskDone] = useState(false);
  const [points, setPoints] = useState(0);

  const [random, setRandomType]= useState('')
 

  const [message, setMessage] = useState<string>('');
  const [showPoints, setShowPoints] = useState(false)

 
  
  useEffect(() => {
    console.log("kjører")
    const type = ['add', 'multiply', 'subtract', "divide",];
    const randomIndex = Math.floor(Math.random() * type.length);
  
    const randomType = type[randomIndex];
    setRandomType(randomType);
    
    const getTasks = async () => {
      try {
        console.log("kjører2")
        console.log(fetch);
        const fetchedTasks = await fetchTasks(randomType, taskCount);
        setTasks(fetchedTasks);
        console.log(tasks)  
        const initialAttempts = Object.fromEntries(
          fetchedTasks.map((task: Task) => [task.id, 3])
        );
  
        setAttempts(initialAttempts);
        // console.log(initialAttempts);
      } catch (errorFetchingTasks) {

      }
    };
  
    void getTasks();
  }, [random, taskCount]);



const onCorrectAnswer = () => {
  setCurrentTaskIndex(prevIndex => {
    
    if (prevIndex + 1 === tasks.length) {
      setShowPoints(true);
      setPoints((prevPoints) => prevPoints + 0.5);
      return prevIndex
    }

    else {
      setTaskDone(true) 
      setPoints((prevPoints) => prevPoints + 0.5);
      setMessage('Bra jobba!!');
      return prevIndex + 1
    };
  });
};


  const reduceNumAttempts = (taskId: string) => {
    console.log("triggered")
    setAttempts((prevAttempts: { [x: string]: number; }) => ({
      ...prevAttempts,
      [taskId]: prevAttempts[taskId] > 0 ? prevAttempts[taskId] - 1 : 0
    }));
  };
  

  const reset = () => {
    setTasks([]);
    setTaskCount('');
    setCurrentTaskIndex(0);
    setAttempts({});
    setTaskDone(false);
    setPoints(0);
    setMessage('');
    setShowPoints(false);
  };

  return (
    <main>
      <Header />
      <NumberOfTask countValue={taskCount} onCountChange={setTaskCount} />
      <Tasks tasks={tasks} currentTaskIndex={onCurrentTaskIndex}>
        {tasks.length > 0 && onCurrentTaskIndex < tasks.length && (
          <>
            <Answer task={tasks[onCurrentTaskIndex]} onSubmitCorrectAnswer={onCorrectAnswer} onSubmitWrongAnswer={() => { reduceNumAttempts(tasks[onCurrentTaskIndex].id); }}
              numAttemptsLeft={onAttempts[tasks[onCurrentTaskIndex].id]} numAttempts={3}
              
            />
            {taskDone && <div>{message}</div>}
            <Progress tasks={tasks} isCorrectAnswer={onCurrentTaskIndex > 0} currentTaskIndex={onCurrentTaskIndex}setCurrentTaskIndex={setCurrentTaskIndex} />
          </>
        )}
        {showPoints && <div>{"Poengscore:  " + points + " points!"}</div>}
        <button onClick={reset}>Start på nytt</button>
      </Tasks>

    </main>
  );
};

export default Home;