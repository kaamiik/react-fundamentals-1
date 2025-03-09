import { createRoot } from 'react-dom/client'

function App() {
	return (
		<form action="">
			<div>
				<label htmlFor="usernameInput">Username</label>
				<input type="text" name="username" id="usernameInput" />
			</div>
			<button type="submit">Submit</button>
		</form>
	)
}

const rootEl = document.createElement('div')
document.body.append(rootEl)
createRoot(rootEl).render(<App />)
