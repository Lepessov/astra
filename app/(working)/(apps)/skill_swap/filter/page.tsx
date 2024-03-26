"use client"
import { useParams } from 'next/navigation'
const FilteredPage = () => {
    const params = useParams<{ id: string }>()

    return (
        <div className=' flex'>
            <p>
            router:{params.id}
            Search:
            Filter:
            </p>
        </div>
    )
}

export default FilteredPage;