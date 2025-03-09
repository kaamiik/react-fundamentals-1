import { createRoot } from 'react-dom/client'

const smallBox = (
	<div
		className="box box--small"
		style={{ backgroundColor: 'lightblue', fontStyle: 'italic' }}
	>
		small lightblue box
	</div>
)
const mediumBox = (
	<div
		className="box box--medium"
		style={{ backgroundColor: 'pink', fontStyle: 'italic' }}
	>
		medium pink box
	</div>
)
const largeBox = (
	<div
		className="box box--large"
		style={{ backgroundColor: 'orange', fontStyle: 'italic' }}
	>
		large orange box
	</div>
)

// 💰 the sizelessColorlessBox should still be a box, just with no size or color
const sizelessColorlessBox = (
	<div className="box" style={{ fontStyle: 'italic' }}>
		sizeless colorless box
	</div>
)

function App() {
	return (
		<div>
			{smallBox}
			{mediumBox}
			{largeBox}
			{sizelessColorlessBox}
		</div>
	)
}

const rootEl = document.createElement('div')
document.body.append(rootEl)
createRoot(rootEl).render(<App />)
