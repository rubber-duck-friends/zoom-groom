import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import TextInput from './index'
import { expect } from '@jest/globals'

test('Input field renders value correctly', () => {
    // Example using a field for the dog's name
    const testDog = {name: "Rocky"}
    render(<TextInput value={testDog.name}/>)
    expect(screen.getByDisplayValue('Rocky')).toBeInTheDocument()
})