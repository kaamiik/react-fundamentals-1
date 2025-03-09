import { createRoot } from 'react-dom/client'

function Box({
	style = {},
	className = '',
	children,
	...props
}: React.ComponentProps<'div'>) {
	return (
		<div
			className={`box ${className}`}
			style={{ fontStyle: 'italic', ...style }}
			{...props}
		>
			{children}
		</div>
	)
}

function App() {
	return (
		<div>
			<Box className="box--small" style={{ backgroundColor: 'lightblue' }}>
				small lightblue box
			</Box>
			<Box className="box--medium" style={{ backgroundColor: 'pink' }}>
				medium pink box
			</Box>
			<Box className="box--large" style={{ backgroundColor: 'orange' }}>
				large orange box
			</Box>
			<Box>sizeless colorless box</Box>
		</div>
	)
}

const rootEl = document.createElement('div')
document.body.append(rootEl)
createRoot(rootEl).render(<App />)
