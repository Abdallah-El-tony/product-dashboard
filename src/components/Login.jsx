import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useRef , useState} from 'react'


const Login = () => {
  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

    const navigate = useNavigate()
    const [values,setValues] = useState({})
    const [validInput,setValid]= useState(false)
    const [error,setError] = useState({
      nameErr:'name should be at least 3 character',
      emailErr:'Email should be valid',
      passwordErr : 'Password should be string and exactly  10 charachters and at least 3 uppercase letters'
    })

   



  const handleChange = (e)=> {
    setValues({...values,[e.target.name]:e.target.value})

    if(nameRef.current.classList.contains('error') || emailRef.current.classList.contains('error') || passwordRef.current.classList.contains('error')) {
      validation()
    }

  }



   function validation() {
      if( values.name === undefined || values.name.length < 3) {
        nameRef.current.classList.add('error')
        setValid(false)
      }else {
        nameRef.current.classList.remove('error')
        setValid(true)
      }
    
    
      const email_battern = /[a-zA-Z0-9]{3,}@(gmail|hotmail|yaho).[a-zA-Z]{2,}/
      if(values.email !==undefined) {
        if(email_battern.test(values.email) === false) {
          emailRef.current.classList.add('error')
          setValid(false)
        }else {
          emailRef.current.classList.remove('error')
          setValid(true)
        }
      }
      const pas_battern = /^([a-z]{0,7}(?=[A-Z]{3})[a-z]*)/

      if(values.password !==undefined) {
        if(pas_battern.test(values.password)===false || values.password.length !==10) {
          passwordRef.current.classList.add('error')
          setValid(false)
          
        } else {
          passwordRef.current.classList.remove('error')
          setValid(true)
        }

      }
    

   }
   const handleBlur = ()=>{
    validation();
   }
    
   const handleSubmit = (e)=>{
    console.log(validInput)
    if(validInput == false)
      e.preventDefault()
      validation()
    }
  
  return (
    <div className="container">
        <form className='form-control p-4 bg-light mx-auto w-50 my-5' onSubmit={handleSubmit}>
            <h3 className=''>Log In</h3>
            <input type="text" placeholder='Your Name' className='form-control mt-4 py-3 ' name='name' onChange={handleChange} onBlur={handleBlur}/>
            <div className='warning' ref={nameRef}>{error.nameErr}</div>

            <input type="text" placeholder='Your Eailm'  className='form-control mt-4 py-3' name='email' onChange={handleChange} onBlur={handleBlur}/>
            <div className='warning' ref={emailRef}>{error.emailErr}</div>

            <input type="text" placeholder='Password' className='form-control mt-4 py-3' name='password' onChange={handleChange} onBlur={handleBlur}/>
            <div className='warning' ref={passwordRef}>{error.passwordErr}</div> 

            <input type="submit" className='btn btn-primary w-100 mt-3' value='Log in'/>
        </form>
        <button onClick={()=>navigate('/')} className='btn btn-dark text-center d-block mx-auto w-25'>Back To Home</button>
    </div>
    
  )
}

export default Login