class Key {
	private signature: number

	constructor() {
		this.signature = Math.random()
	}

	getSignature() {
		return this.signature
	}
}

class Person {
	private key: Key
	constructor(value: Key) {
		this.key = value
	}

	getKey(): Key {
		return this.key
	}
}

abstract class House {
	protected door: boolean = false
	protected key: Key
	protected tenants: Person[] = []

	constructor(key: Key) {
		this.key = key
	}

	comeIn(person: Person): void {
		if (this.door) {
			this.tenants.push(person)
			console.log('Людина зайшла в дім.')
		} else {
			console.log('Двері зачинені. Людина не може зайти.')
		}
	}

	abstract openDoor(key: Key): void
}

class MyHouse extends House {
	openDoor(key: Key): void {
		if (key.getSignature() === this.key.getSignature()) {
			this.door = true
			console.log('Двері відкриті.')
		} else {
			console.log('Ключ не підходить.')
		}
	}
}

const key = new Key()

const house = new MyHouse(key)
const person = new Person(key)

house.openDoor(person.getKey())

house.comeIn(person)

export {}
