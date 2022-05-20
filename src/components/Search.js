import React, {useState} from 'react'


const Search = ({search}) => {
    const[text,setText] = useState('')

    const onSearch= (q)=>{
        setText(q)
        search(q)
    }

    return (
        <section className="search">
            <form>
            <input class="form-control form-control-md mt-3 bg-dark text-light" type="text" placeholder="Bir karakter arayın    Örnek: iron man" aria-label=".form-control-lg example" autoFocus
                onChange={(e)=>onSearch(e.target.value)}
                value={text}/>
                
            </form>
        </section>
    )
}

export default Search
