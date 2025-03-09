import { createRoot } from 'react-dom/client'
import {
	ErrorBoundary,
	type FallbackProps,
} from '#node_modules/react-error-boundary/dist/react-error-boundary.cjs.mjs'

function OnboardingForm() {
	return (
		<form
			action="api/onboarding"
			method="POST"
			encType="multipart/form-data"
			onSubmit={(event) => {
				event.preventDefault()
				const formData = new FormData(event.currentTarget)
				console.log(Object.fromEntries(formData))
				const accountType = formData.get('accountType') as string
				console.log(accountType.toUpperCase())
			}}
		>
			<input type="hidden" name="orgId" value="123" />
			<div>
				<label htmlFor="accountTypeSelection">Account Type:</label>
				<select
					id="accountTypeSelection"
					name="accountType"
					defaultValue="student"
				>
					<option value="">--Please select an option--</option>
					<option value="admin">Admin</option>
					<option value="teacher">Teacher</option>
					<option value="parent">Parent</option>
					<option value="student">Student</option>
				</select>
			</div>
			<div>
				<label htmlFor="usernameInput">Username:</label>
				<input id="usernameInput" name="username" />
			</div>
			<div>
				<label htmlFor="passwordInput">Password:</label>
				<input id="passwordInput" name="password" type="password" />
			</div>
			<div>
				<label htmlFor="ageInput">Age:</label>
				<input
					id="ageInput"
					name="age"
					type="number"
					min="0"
					max="200"
					defaultValue={18}
				/>
			</div>
			<div>
				<label htmlFor="photoInput">Photo:</label>
				<input id="photoInput" name="photo" type="file" accept="image/*" />
			</div>
			<div>
				<label htmlFor="colorInput">Favorite Color:</label>
				<input
					id="colorInput"
					name="color"
					type="color"
					defaultValue="#002E5D"
				/>
			</div>
			<fieldset>
				<legend>Visibility:</legend>
				<label>
					<input name="visibility" type="radio" value="public" defaultChecked />
					Public
				</label>
				<label>
					<input name="visibility" type="radio" value="private" />
					Private
				</label>
			</fieldset>
			<div>
				<label>
					<input name="waiver" type="checkbox" defaultChecked />
					Waiver Signed
				</label>
			</div>
			<div>
				<label htmlFor="startDateInput">Start Date:</label>
				<input
					id="startDateInput"
					name="startDate"
					type="date"
					// 💰 you can comment this out to avoid the runtime error
					defaultValue={new Date('today').toISOString().slice(0, 10)}
					// defaultValue={new Date().toISOString().slice(0, 10)}
				/>
			</div>
			<button type="submit">Submit</button>
		</form>
	)
}

function ErrorFallback({ error }: FallbackProps) {
	return (
		<div role="alert">
			<p>Something went wrong:</p>
			<pre style={{ color: 'red' }}>{error.message}</pre>
		</div>
	)
}

function App() {
	return (
		<ErrorBoundary FallbackComponent={ErrorFallback}>
			<OnboardingForm />
		</ErrorBoundary>
	)
}

const rootEl = document.createElement('div')
document.body.append(rootEl)
createRoot(rootEl).render(<App />)
