import { createRoot } from 'react-dom/client'

function App() {
	return (
		<form action="api/onboarding">
			<div>
				<label htmlFor="usernameInput">Username:</label>
				<input id="usernameInput" name="username" />
			</div>

			<div>
				<label htmlFor="passwordInput">Password:</label>
				<input type="password" id="passwordInput" name="password" />
			</div>

			<div>
				<label htmlFor="ageInput">Age:</label>
				<input type="number" name="age" id="ageInput" min="0" max="200" />
			</div>

			<div>
				<label htmlFor="photoInput">Photo:</label>
				<input type="file" name="photo" id="photoInput" accept="image/*" />
			</div>

			<div>
				<label htmlFor="colorInput">Favorite Color:</label>
				<input type="color" name="color" id="colorInput" />
			</div>

			<div>
				<label htmlFor="startDateInput">Start Date:</label>
				<input type="date" name="startDate" id="startDateInput" />
			</div>
			<button type="submit">Submit</button>
		</form>
	)
}

const rootEl = document.createElement('div')
document.body.append(rootEl)
createRoot(rootEl).render(<App />)
