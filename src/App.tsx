import {useState} from 'react';


function App() {
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    password: "",
    confirmPassword: "",
  }); 

  function submitData(e : React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    // console.log((e.currentTarget[0] as HTMLInputElement).value);
    // console.log((e.currentTarget[1] as HTMLInputElement).value);


    // manual after submission validation
    const formData = new FormData(e.currentTarget);
    console.log(formData)

    const submittedData = {
      firstName : formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      age: formData.get("age"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirmPassword")
    }

    // regex
    const nameRegex =  /^[A-Za-z]+$/;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const ageRegex = /^[0-9]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    
    let newErrors= {};

    // first name validation
    if(!nameRegex.test(submittedData.firstName as string)) {
      newErrors = {...newErrors, firstName: "Please provide a valid first Name"};
    }

    // last name validation

    if(!nameRegex.test(submittedData.lastName as string)) {
      newErrors = {...newErrors, lastName: "Please provide a valid last name"};
    }

    if(!emailRegex.test(submittedData.email as string)) {
      newErrors = {...newErrors, email: "Please provide a valid Email"};
    }

    if(!ageRegex.test(submittedData.age as string)) {
      newErrors = {...newErrors, age : "Please provide a valid age"};
    }

    if (!passwordRegex.test(submittedData.password as string)) {
      newErrors = {...newErrors, password: "Please provide a valid password"}
    }

    if(!passwordRegex.test(submittedData.confirmPassword as string)) {

      newErrors = {...newErrors, confirmPassword: "Please provide a valid confirmation password"};
    } 

    if (submittedData.password !== submittedData.confirmPassword) {
      newErrors = {...newErrors, confirmPassword: "Your password and confirm password should be matched exactly"}
    }

    setErrors({...errors, ...newErrors})
  }

  return (
    <div className="app">
      <form onSubmit={submitData}>
      <section className="firstName">
      <label htmlFor="firstName">First Name:</label>
      <input type="text" id="firstName" name="firstName" />
      </section>

      <section className='error'>
      {
        errors.firstName !== "" && <p>{errors.firstName}</p>
      }
      </section>

      <section className="lastName">
      <label htmlFor="lastName">Last Name:</label>
      <input type="text" name="lastName" id="lastName" />
      </section>


      <section className='error'>
      {
        errors.lastName !== "" && <p>{errors.lastName}</p>
      }
      </section>


      <section className="email">
      <label htmlFor="email">Email:</label>
      <input type="text" name="email" id="email" />
      </section>

      <section className='error'>
      {
        errors.email !== "" && <p>{errors.email}</p>
      }
      </section>


      <section className="age">
      <label htmlFor="age">Age:</label>
      <input type="number" name="age" id="age" />
      </section>

      <section className='error'>
      {
        errors.age !== "" && <p>{errors.age}</p>
      }
      </section>

      <section className="password">
      <label htmlFor="password">Password:</label>
      <input type="password" name="password" id="password" />
      </section>
      
      <section className='error'>
      {
        errors.password !== "" && <p>{errors.password}</p>
      }
      </section>

      <section className="confirmPassword">
      <label htmlFor="confirmPassword">Confirm Password:</label>
      <input type="password" name="confirmPassword" id="confirmPassword" />
      </section>


      <section className='error'>
      {
        errors.confirmPassword !== "" && <p>{errors.confirmPassword}</p>
      }
      </section>

      <button type="submit">Submit</button>
      </form>

      {/* {
        Object.values(errors).map((value) => {
          if (value !== "") {
            console.log(value)
            return <p>{value}</p>
          }
        })
      } */}

    </div>
  )
}

export default App
