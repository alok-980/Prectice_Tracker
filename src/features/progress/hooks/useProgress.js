export const useProgress = (questions) => {
    let totalDSAQuestion = 0;
    let dsaCompletedQuestion = 0;

    let totalGitQuestion = 0;
    let gitCompletedQuestion = 0;

    let totalTechnicalQuestion = 0;
    let technicalCompletedQuestion = 0;

    let totalCompletedQuestion = 0;

    questions.forEach((question) => {
        if (question.category === "DSA") {
            totalDSAQuestion += 1
            if (question.status === "Completed") dsaCompletedQuestion += 1
        }

        if (question.category === "Git") {
            totalGitQuestion += 1
            if (question.status === "Completed") gitCompletedQuestion += 1
        }

        if (question.category === "Technical") {
            totalTechnicalQuestion += 1
            if (question.status === "Completed") technicalCompletedQuestion += 1
        }

        if (question.status === "Completed") totalCompletedQuestion += 1
    })

    const calculatePercentage = (completed, total) => {
        if (total === 0) return 0
        return Math.round((completed / total) * 100)
    }

    const dsaProgress = calculatePercentage(dsaCompletedQuestion, totalDSAQuestion)
    const gitProgress = calculatePercentage(gitCompletedQuestion, totalGitQuestion)
    const technicalProgress = calculatePercentage(technicalCompletedQuestion, totalTechnicalQuestion)
    const overAllProgress = calculatePercentage(totalCompletedQuestion, questions.length)

    return {
        totalDSAQuestion,
        dsaCompletedQuestion,
        dsaProgress,

        totalGitQuestion,
        gitCompletedQuestion,
        gitProgress,

        totalTechnicalQuestion,
        technicalCompletedQuestion,
        technicalProgress,

        totalCompletedQuestion,
        overAllProgress,

        // for dashboard
        totalQuestion: questions.length,
        dsaCompletedQuestion,
        interviewCompletedQuestion: gitCompletedQuestion + technicalCompletedQuestion,
    }
}