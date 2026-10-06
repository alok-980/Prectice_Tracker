import { useState } from "react"
import { useDebounce } from "./useDebounce"

const defaultFilters = {
    category: "All",
    status: "All",
    difficulty: "All",
}

export const useFilter = (questions) => {
    const [search, setSearch] = useState("")
    const [filters, setFilters] = useState(defaultFilters)

    // typing rukne ke 500ms baad hi search chalega
    const debouncedSearch = useDebounce(search, 500)

    // select ke name se pata chalta hai kaunsa filter badla (category / status / difficulty)
    const handleFilterChange = (e) => {
        setFilters((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const clearFilters = () => {
        setSearch("")
        setFilters(defaultFilters)
    }

    const filteredQuestions = questions.filter((question) => {
        const matchSearch = question.title.toLowerCase().includes(debouncedSearch.trim().toLowerCase())
        const matchCategory = filters.category === "All" || question.category === filters.category
        const matchStatus = filters.status === "All" || question.status === filters.status
        const matchDifficulty = filters.difficulty === "All" || question.difficulty === filters.difficulty

        return matchSearch && matchCategory && matchStatus && matchDifficulty
    })

    return {
        search,
        setSearch,
        filters,
        handleFilterChange,
        clearFilters,
        filteredQuestions,
    }
}