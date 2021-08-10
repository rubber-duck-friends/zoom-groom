const addPet = require('../config/addPet')

test("adds a new pet to the database", (addPet) => {
    //declare input
    const pet = {name: "Jerry", age: "2020-07-14", sex: "M", fixed_status: true, breed: "snowball", size: "XS", groomer_notes: ""}
    //act
    const expectedOutput = addPet(pet)
    expect(expectedOutput.name).toBe("Jerry")
    expect(expectedOutput.age).toBe("2020-07-14")
    expect(expectedOutput.sex).toBe("M")
    expect(expectedOutput.fixed_status).toBe(true)
    expect(expectedOutput.breed).toBe("snowball")
    //store
    //.toBe, expect(expectedOutput.name).not.toBe("Calvin") 
    // expect(expectedOutput.fixed_status).toBeTruthy()

    //assert
})
