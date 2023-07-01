import react, { useState } from "react"

const data =['big data', 'small data', 'big small data','big data small data']

const Search=()=>{
    const [searchTerm,setSearchTerm]=useState("")
    const [searchedTerm,setSearchedTerm]=useState([])

    const handleSearch=(event)=>{
        const typed=event.target.value;
        setSearchTerm(typed)

        const filterdata=data.filter((item)=>
        item.toLowerCase().includes(searchTerm.toLowerCase())
        )

        setSearchedTerm(filterdata)
    }

    return(
        <div>
            <input
            value={searchTerm}
            type="text"
            onChange={handleSearch}
            />
            <ul>
                {!searchTerm==""?
                                searchedTerm.map((items,index)=>{
                                    return(
                                    <li key={index}>{items}</li>
                                )
                                })
                                :(
                                    ""
                                )
             }
            </ul>
        </div>
    )
}

export default Search