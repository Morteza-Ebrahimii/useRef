import raect, { useEffect, useState, useRef} from 'react'

function MyComponent() {

    const [number, setNumber] = useState(0)

    const inputRef1 = useRef(null)
    const inputRef2 = useRef(null)
    const inputRef3 = useRef(null)

    const handleEventClick1 = () => {
        // console.log(inputRef.current.style.backgroundColor);
        inputRef1.current.placeholder = "you clicked me"
        inputRef2.current.placeholder = ""
        inputRef3.current.placeholder = ""
        inputRef1.current.focus()
        inputRef1.current.style.backgroundColor = 'purple'
        inputRef2.current.style.backgroundColor = ''
        inputRef3.current.style.backgroundColor = ''
    }
    
    const handleEventClick2 = () => {
        // console.log(inputRef.current.style.backgroundColor);
        inputRef2.current.placeholder = "you clicked me"
        inputRef1.current.placeholder = ""
        inputRef3.current.placeholder = ""
        inputRef2.current.focus()
        inputRef2.current.style.backgroundColor = 'red'
        inputRef1.current.style.backgroundColor = ''
        inputRef3.current.style.backgroundColor = ''
    }

    const handleEventClick3 = () => {
        // console.log(inputRef.current.style.backgroundColor);
        inputRef3.current.placeholder = "you clicked me"
        inputRef2.current.placeholder = ""
        inputRef1.current.placeholder = ""
        inputRef3.current.focus()
        inputRef3.current.style.backgroundColor = 'black'
        inputRef2.current.style.backgroundColor = ''
        inputRef1.current.style.backgroundColor = ''
    }

    useEffect(() => {
    })

    return (
        <>
            <button onClick={handleEventClick1}>Click me</button><br />
            <input type="text" ref={inputRef1}/>
<br />
            <button onClick={handleEventClick2}>Click me</button><br />
            <input type="text" ref={inputRef2}/>
<br />
            <button onClick={handleEventClick3}>Click me</button><br />
            <input type="text" ref={inputRef3}/>
        </>
    )

}

export default MyComponent