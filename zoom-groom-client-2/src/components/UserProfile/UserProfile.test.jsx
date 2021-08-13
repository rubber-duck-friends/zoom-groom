import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import UserProfile from './UserProfile'

test("Show the current user's first name", () => {
    
    render(<UserProfile/>)
    
    const title = screen.getByTestId('user-name')
    
    const initialUserState = {
        name: "Jared",
        img: "http://image.link/",
        description: "I love cheese, especially chalk and cheese babybel. Emmental goat gouda edam cheddar caerphilly st. agur blue cheese feta. Everyone loves feta macaroni cheese parmesan macaroni cheese cauliflower cheese chalk and cheese manchego. Macaroni cheese port-salut cheesy grin.",
        id: 1,
        pets: [{
          id: 1,
          name: "Marshall",
          img: "http://image.link/"
        }]
    }
    
    expect(title).toHaveTextContent(initialUserState.name)
})