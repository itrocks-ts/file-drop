
export function fileDrop(input: HTMLInputElement)
{
	if (input.type !== 'file') return

	let dragDepth = 0

	input.addEventListener('dragenter', event =>
	{
		event.preventDefault()
		dragDepth ++
		if (dragDepth > 1) return
		input.classList.add('drag-over')
	})

	input.addEventListener('dragleave', event =>
	{
		event.preventDefault()
		dragDepth --
		if (dragDepth > 0) return
		resetDragState()
	})

	input.addEventListener('dragover', event =>
	{
		event.preventDefault()
	})

	input.addEventListener('drop', event =>
	{
		event.preventDefault()
		resetDragState()
		const files = event.dataTransfer?.files
		if (!files?.length) return
		if (input.multiple) {
			input.files = files
		}
		else {
			const dataTransfer = new DataTransfer()
			dataTransfer.items.add(files[0])
			input.files = dataTransfer.files
		}
		input.dispatchEvent(new Event('change', { bubbles: true }))
	})

	function resetDragState()
	{
		dragDepth = 0
		input.classList.remove('drag-over')
		if (!input.classList.length) {
			input.removeAttribute('class')
		}
	}
}
