

function App() {
  return (
    <div className="app">
      <form action="">
      <section className="firstName">
      <label htmlFor="firstName">First Name:</label>
      <input type="text" id="firstName" name="firstName" />
      </section>

      <section className="lastName">
      <label htmlFor="lastName">Last Name:</label>
      <input type="text" name="lastName" id="lastName" />
      </section>

      <section className="email">
      <label htmlFor="email">Email:</label>
      <input type="text" name="email" id="email" />
      </section>

      <section className="age">
      <label htmlFor="age">Age:</label>
      <input type="number" name="age" id="age" />
      </section>

      <section className="password">
      <label htmlFor="password">Password:</label>
      <input type="password" name="password" id="password" />
      </section>

      <section className="confirmPassword">
      <label htmlFor="confirmPassword">Confirm Password:</label>
      <input type="password" name="confirmPassword" id="confirmPassword" />
      </section>

      <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
