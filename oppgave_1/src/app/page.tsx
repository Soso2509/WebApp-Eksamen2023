"use client"


import Answer from "@/components/Answer";
import Header from "@/components/Header";
import Progress from "@/components/Progress";
import Tasks from "@/components/Tasks";
import NumberOfTask from "@/components/NumberOfTask";
import TaskTypeDropdown  from "@/components/TaskTypeDropdown";
import { type Task, type TaskAttempts } from "@/types"
import React, { useState, useEffect } from 'react'
import { fetchTasks } from '../controller/taskController'

const Home = () => {

  const [onselectedType, setSelectedType] = useState<string>('add')
  const [tasks, setTasks] = useState<Task[]>([])
  const [ontaskCount, setTaskCount] = useState<string>('5')
  const [onCurrentTaskIndex, setCurrentTaskIndex] = useState(0);
  const [onAttempts, setAttempts] = useState<TaskAttempts>({})

  useEffect(() => {
    const getTasks = async () => {
      try {
        const fetchedTasks = await fetchTasks(onselectedType, ontaskCount);
        setTasks(fetchedTasks);
  
        const initialAttempts = Object.fromEntries(
          fetchedTasks.map((task: Task) => [task.id, 3])
        );
  
        setAttempts(initialAttempts);
        console.log(initialAttempts);
      } catch (errorFetchingTasks) {

      }
    };
  
    void getTasks();
  }, [onselectedType, ontaskCount]);
  


  
  const onTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(`Selected task type changed to: ${event.target.value}`);
    setSelectedType(event.target.value)
  };


const onCorrectAnswer = () => {
  setCurrentTaskIndex(prevIndex => {
    return prevIndex + 1;
  });
};

  const reduceNumAttempts = (taskId: string) => {
    setAttempts((prevAttempts: { [x: string]: number; }) => ({
      ...prevAttempts,
      [taskId]: prevAttempts[taskId] > 0 ? prevAttempts[taskId] - 1 : 0
    }));
  };
  


  return (
    <main>
      <Header />
      <NumberOfTask countValue={ontaskCount} onCountChange={setTaskCount} />
      <TaskTypeDropdown  selectedOperationType={onselectedType} handleTypeChange={onTypeChange} />
      <Tasks tasks={tasks} currentTaskIndex={onCurrentTaskIndex}>
        {tasks.length > 0 && onCurrentTaskIndex < tasks.length && (
          <>
            <Answer task={tasks[onCurrentTaskIndex]} onSubmitCorrectAnswer={onCorrectAnswer} onSubmitWrongAnswer={() => { reduceNumAttempts(tasks[onCurrentTaskIndex].id); }}
              numAttemptsLeft={onAttempts[tasks[onCurrentTaskIndex].id]} numAttempts={3}
            />
            <Progress tasks={tasks} isCorrectAnswer={onCurrentTaskIndex > 0} currentTaskIndex={onCurrentTaskIndex}setCurrentTaskIndex={setCurrentTaskIndex} />
          </>
        )}
      </Tasks>

    </main>
  );
};

export default Home;