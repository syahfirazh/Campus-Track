import React, { createContext, useContext, useMemo, useState } from "react";

export type Task = {
  id: number;
  title: string;
  course: string;
  dueDate: string;
  priority: "Tinggi" | "Sedang" | "Rendah";
  completed: boolean;
  note: string; // <-- Tambahan field catatan
};

type TaskContextType = {
  tasks: Task[];
  addTask: (task: Omit<Task, "id" | "completed">) => void;
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
  getById: (id: string | number) => Task | undefined;
};

const TaskContext = createContext<TaskContextType | null>(null);

const INITIAL_TASKS: Task[] = [
  {
    id: 1,
    title: "Praktikum Mobile Programming UTS",
    course: "Mobile Programming",
    dueDate: "2026-11-17",
    priority: "Tinggi",
    completed: false,
    note: "Mengerjakan aplikasi CampusTrack lengkap dengan Expo Router, Context API, dan minimal 4 komponen.",
  },
  {
    id: 2,
    title: "Proposal Sistem Smart Greenhouse",
    course: "IoT & Machine Learning",
    dueDate: "2026-11-20",
    priority: "Sedang",
    completed: true,
    note: "Menyiapkan rancangan sensor ESP32 dan pengujian model prediktif.",
  },
];

export function TaskProvider({ children }: { children: React.ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);

  const addTask = (task: Omit<Task, "id" | "completed">) => {
    setTasks((prev) => [
      { id: Date.now(), completed: false, ...task },
      ...prev,
    ]);
  };

  const toggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );
  };

  const deleteTask = (id: number) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const getById = (id: string | number) => {
    return tasks.find((t) => t.id === Number(id));
  };

  const value = useMemo(
    () => ({ tasks, addTask, toggleTask, deleteTask, getById }),
    [tasks],
  );

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}

export function useTasks() {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks harus berada di dalam TaskProvider");
  }
  return context;
}
