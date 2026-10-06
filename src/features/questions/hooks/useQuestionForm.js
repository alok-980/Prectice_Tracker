import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

export const CATEGORIES = ["DSA", "Git", "Technical"];
export const DIFFICULTIES = ["Easy", "Medium", "Hard"];
export const STATUSES = ["Pending", "In Progress", "Completed"];

const loadQuestions = () => {
    try {
        const data = localStorage.getItem('questions')
        return JSON.parse(data) || []
    } catch (error) {
        return []
    }
}

export const useQuestionForm = () => {
    const navigate = useNavigate();

    const [questions, setQuestions] = useState(loadQuestions);

    useEffect(() => {
        localStorage.setItem('questions', JSON.stringify(questions));
    }, [questions]);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        defaultValues: {
            title: "",
            category: "",
            difficulty: "",
            status: "Pending",
        },
    });

    const questionSubmit = (data) => {
        const newQuestion = {
            ...data,
            id: Date.now(),
            title: data.title.trim(),
            createdAt: new Date().toISOString(),
        };

        setQuestions((prev) => [...prev, newQuestion])
        reset()
        navigate('/question')
    };

    const questionUpdate = (id, data) => {
        const updatedQuestion = questions.map((question) =>
            question.id === id ? { ...question, ...data, title: data.title.trim() } : question
        )

        setQuestions(updatedQuestion)
        localStorage.setItem('questions', JSON.stringify(updatedQuestion))
    }

    const questionDelete = (id) => {
        const updatedQuestion = questions.filter((question) => question.id !== id)

        setQuestions(updatedQuestion)
        localStorage.setItem('questions', JSON.stringify(updatedQuestion))
    }

    return {
        navigate,
        questions,
        register,
        handleSubmit,
        errors,
        reset,
        questionSubmit,
        questionUpdate,
        questionDelete,
        CATEGORIES,
        DIFFICULTIES,
        STATUSES,
    };
};